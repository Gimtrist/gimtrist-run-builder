"use strict";

const $ = (id) => document.getElementById(id);
const clone = (value) => JSON.parse(JSON.stringify(value));
const kindInfo = {
  dialogue:["角色对白","对白"], narration:["旁白","旁白"], scene:["背景 / CG","场景"],
  show:["显示 / 切换人物","人物"], hide:["隐藏人物","隐藏"], transition:["画面转场","转场"],
  music:["播放 / 切换音乐","音乐"], music_stop:["停止音乐","音乐"], voice:["角色配音","配音"], comment:["注释","注释"],
  code:["高级 Ren’Py 代码","代码"], blank:["空行","空行"]
};
const editableKinds = Object.keys(kindInfo).filter(kind=>kind!=="voice");
const state = {project:null,nodes:[],characters:[],assets:[],definitions:{},transforms:{},selected:-1,filter:"all",assetCategory:"background",characterGroup:"all",pendingCharacterGroup:"",dirty:false,undo:[],redo:[],typingCheckpoint:false,audio:null,sceneAudio:null,sceneMusicPath:"",sceneMusicEnabled:true,sceneMusicBlocked:false,voiceAudio:null,voiceDialogueIndex:-1};
let characterGroups={};

async function api(path, options={}) {
  const response = await fetch(path, options);
  const data = await response.json().catch(()=>({ok:false,error:"服务器返回了无法识别的内容。"}));
  if (!response.ok || data.ok === false) throw new Error(data.error || "操作失败。");
  return data;
}

function toast(message, error=false) {
  const el=$("toast"); el.textContent=message; el.className="toast show"+(error?" error":"");
  clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.className="toast",2600);
}

function markDirty() { state.dirty=true; $("saveBtn").classList.add("dirty"); document.title="● Galgame Studio"; }
function markSaved() { state.dirty=false; $("saveBtn").classList.remove("dirty"); document.title="Galgame Studio"; }
function snapshot() { state.undo.push(clone(state.nodes)); if(state.undo.length>60)state.undo.shift(); state.redo=[]; updateUndoButtons(); }
function updateUndoButtons(){ $("undoBtn").disabled=!state.undo.length; $("redoBtn").disabled=!state.redo.length; }

async function loadProject(force=false) {
  if(state.dirty&&!force&&!confirm("重新载入会放弃尚未保存的修改，继续吗？"))return;
  const data=await api("/api/project");
  state.project=data.project; state.nodes=clone(data.project.nodes); state.characters=data.project.characters;
  characterGroups=data.project.characterGroups||{};
  state.assets=data.project.assets; state.definitions=data.project.imageDefinitions;state.transforms=data.project.previewTransforms||{}; state.undo=[];state.redo=[];state.selected=-1;
  $("projectTitle").textContent=data.project.title; populateKindSelect(); populateCharacterSelect(); renderCharacterSubtabs(); renderAll(); markSaved();updateUndoButtons();
  const firstText=state.nodes.findIndex(n=>n.kind==="dialogue"||n.kind==="narration"); selectNode(firstText>=0?firstText:0);
}

function populateKindSelect(){
  $("kindSelect").replaceChildren(...editableKinds.map(kind=>{const o=document.createElement("option");o.value=kind;o.textContent=kindInfo[kind][0];return o;}));
}
function appendCharacterOptions(select){
  const characters=state.characters.filter(c=>c.id!=="narrator");
  select.replaceChildren();
  characters.forEach(c=>{const o=document.createElement("option");o.value=c.id;o.textContent=c.name;o.title=`角色标识：${c.id}`;select.append(o);});
}
function populateCharacterSelect(){
  appendCharacterOptions($("characterSelect"));
}
function charName(id){return state.characters.find(c=>c.id===id)?.name||id||"";}
function nodeSummary(node){
  if(node.kind==="dialogue"||node.kind==="narration")return node.content||"（空文本）";
  if(node.kind==="music_stop")return "停止当前音乐";
  if(node.kind==="voice")return `配音：${node.content.split("/").pop()}`;
  if(node.kind==="blank")return "空行";
  return node.content||kindInfo[node.kind]?.[0]||"";
}
function voiceNodeIndexForDialogue(index){return index>0&&state.nodes[index]?.kind==="dialogue"&&state.nodes[index-1]?.kind==="voice"?index-1:-1;}
function voicePathForDialogue(index){const voiceIndex=voiceNodeIndexForDialogue(index);return voiceIndex>=0?state.nodes[voiceIndex].content:"";}
function voiceAssetForPath(path){return state.assets.find(asset=>asset.category==="voice"&&asset.path.toLowerCase()===String(path).toLowerCase());}
function visibleNodeNumber(index){
  if(index<0||index>=state.nodes.length)return 0;
  let number=0;
  for(let i=0;i<=index;i++)if(state.nodes[i].kind!=="voice")number++;
  return number;
}

function filterMatch(node,index){
  const q=$("searchInput").value.trim().toLowerCase();
  if(q&&!`${node.content} ${node.character} ${charName(node.character)}`.toLowerCase().includes(q))return false;
  if(state.filter==="all")return true;
  if(state.filter==="text")return ["dialogue","narration"].includes(node.kind);
  if(state.filter==="visual")return ["scene","show","hide","transition"].includes(node.kind);
  if(state.filter==="music")return node.kind.startsWith("music")||node.kind==="voice"||(node.kind==="dialogue"&&voiceNodeIndexForDialogue(index)>=0);
  return ["code","comment","blank"].includes(node.kind);
}

function renderTimeline(){
  const list=$("timeline");list.replaceChildren();
  let visibleNumber=0;
  state.nodes.forEach((node,index)=>{
    if(node.kind==="voice")return;
    visibleNumber++;
    if(!filterMatch(node,index))return;
    const card=document.createElement("div");card.className="node-card"+(index===state.selected?" active":"");card.dataset.kind=node.kind;
    const idx=document.createElement("div");idx.className="node-index";idx.textContent=String(visibleNumber).padStart(3,"0");
    const main=document.createElement("div");main.className="node-main";
    const meta=document.createElement("div");meta.className="node-meta";
    const dot=document.createElement("span");dot.className="kind-dot";const kind=document.createElement("span");kind.className="kind-label";kind.textContent=kindInfo[node.kind]?.[1]||node.kind;
    meta.append(dot,kind);
    if(node.kind==="dialogue"){const speaker=document.createElement("span");speaker.className="speaker";speaker.textContent=charName(node.character);meta.append(speaker);if(voiceNodeIndexForDialogue(index)>=0){const mic=document.createElement("span");mic.className="voice-badge";mic.textContent="🎙 已配音";meta.append(mic);}}
    const summary=document.createElement("div");summary.className="node-summary";summary.textContent=nodeSummary(node).replace(/\n/g,"　");
    main.append(meta,summary);card.append(idx,main);card.onclick=()=>selectNode(index,true);list.append(card);
  });
  const voiceCount=state.nodes.filter(node=>node.kind==="voice").length;$("nodeCount").textContent=`${state.nodes.length-voiceCount} 个剧情节点 · ${voiceCount} 条配音`;
}

function selectNode(index,userInitiated=false){
  if(userInitiated&&state.audio)stopPreviewMusic(false);
  if(index<0||index>=state.nodes.length){state.selected=-1;renderProperties();renderPreview(userInitiated);return;}
  state.selected=index;state.typingCheckpoint=false;renderTimeline();renderProperties();renderPreview(userInitiated);
  requestAnimationFrame(()=>$("timeline").querySelector(".node-card.active")?.scrollIntoView({block:"nearest"}));
}

function renderProperties(){
  const node=state.nodes[state.selected];$("emptyProperties").hidden=!!node;$("propertyForm").hidden=!node;
  if(!node){$("selectionHint").textContent="尚未选择";$("voiceField").hidden=true;return;}
  $("selectionHint").textContent=`第 ${visibleNodeNumber(state.selected)} 个节点 · ${kindInfo[node.kind]?.[0]||node.kind}`;
  $("kindSelect").value=node.kind;$("characterField").hidden=node.kind!=="dialogue";$("characterSelect").value=node.character||state.characters.find(c=>c.id!=="narrator")?.id||"";
  $("voiceField").hidden=node.kind!=="dialogue";if(node.kind==="dialogue")renderVoiceBinding();
  $("contentInput").value=node.content||"";$("contentInput").disabled=node.kind==="blank"||node.kind==="music_stop";
  const labels={dialogue:"中文对白",narration:"中文旁白",scene:"背景 / CG 图像名",show:"人物立绘与位置",hide:"需要隐藏的人物",transition:"转场名称",music:"音乐文件与播放参数",code:"Ren’Py 原始代码",comment:"注释"};
  $("contentLabel").textContent=labels[node.kind]||"节点内容";
  const helps={dialogue:"选择说话角色并输入中文。预览会立即显示姓名与对白。",narration:"旁白不显示角色姓名，直接输入中文即可。",scene:"建议从下方“背景 / CG”缩略图库选择，无需手写图像名。",show:"建议使用右侧“添加 / 切换人物”，可以直接选择立绘与位置。",hide:"隐藏命令只需要人物前缀，例如 heroine 或 rival。",music:"建议使用右侧音乐按钮选择文件、试听并插入。",code:"高级代码会原样保存。修改前建议确认 Ren’Py 语法。"};
  $("contextHelp").textContent=helps[node.kind]||"这一行会按照原来的形式保存。";
}

function mutateSelected(mutator,withSnapshot=true){
  if(state.selected<0)return;if(withSnapshot)snapshot();mutator(state.nodes[state.selected]);markDirty();renderTimeline();renderProperties();renderPreview();
}

function insertNodes(nodes,position=state.selected+1){
  snapshot();const at=Math.max(0,Math.min(position,state.nodes.length));state.nodes.splice(at,0,...nodes.map(n=>({id:Date.now()+Math.random(),character:"",content:"",original:"",...n})));
  markDirty();selectNode(at);
}

function openTextAdd(kind){
  const wrap=document.createElement("div");wrap.className="add-text-form";
  let characterSelect=null;
  if(kind==="dialogue"){
    const label=document.createElement("label");label.textContent="谁在说话？";characterSelect=document.createElement("select");
    appendCharacterOptions(characterSelect);label.append(characterSelect);wrap.append(label);
  }
  const label=document.createElement("label");label.textContent=kind==="dialogue"?"输入中文对白":"输入中文旁白";const area=document.createElement("textarea");area.placeholder=kind==="dialogue"?"例如：你今天回来得很晚。":"例如：窗外的雨仍没有停。";label.append(area);wrap.append(label);
  const add=document.createElement("button");add.className="action";add.textContent=kind==="dialogue"?"添加这句对白":"添加这段旁白";add.onclick=()=>{if(!area.value.trim()){toast("请先输入文本。",true);return;}insertNodes([{kind,character:characterSelect?.value||"",content:area.value.trim()}]);closeModal();setTimeout(()=>$("contentInput").focus(),0);};
  openModal(kind==="dialogue"?"添加角色对白":"添加旁白",wrap,[add]);setTimeout(()=>area.focus(),30);
}

function imageNameFor(asset){return asset.imageName||Object.entries(state.definitions).find(([,path])=>path.toLowerCase()===asset.path.toLowerCase())?.[0]||"";}
function applyVisualAsset(asset){
  const imageName=imageNameFor(asset);if(!imageName){toast("这个图片还没有 Ren’Py 图像名，建议使用“导入 CG”。",true);return;}
  if(state.selected>=0&&state.nodes[state.selected].kind==="scene")mutateSelected(n=>n.content=imageName);
  else insertNodes([{kind:"scene",content:imageName},{kind:"transition",content:"cg_dissolve"}]);
  toast(asset.category==="cg"?"CG 已加入当前剧情位置。":"背景已经替换。")
}

function addCharacter(asset,position="right"){
  const imageName=imageNameFor(asset);if(!imageName){toast("这个立绘没有图像名。",true);return;}
  const transform=position==="left"?" at rival_left":position==="right"?" at heroine_right":" at portrait_center";
  if(state.selected>=0&&state.nodes[state.selected].kind==="show")mutateSelected(n=>n.content=imageName+transform);
  else insertNodes([{kind:"show",content:imageName+transform},{kind:"transition",content:"dissolve"}]);
  toast("人物立绘已加入画面。")
}

function addMusic(asset){insertNodes([{kind:"music",content:`"${asset.path}" fadein 1.0 loop`}]);toast("音乐切换已加入剧情。");}
function stopMusic(){insertNodes([{kind:"music_stop",content:""}]);toast("停止音乐节点已加入。")}

function sceneAt(index){
  let background=null,music=null;const sprites=new Map();
  for(let i=0;i<=index&&i<state.nodes.length;i++){
    const n=state.nodes[i];
    if(n.kind==="scene"){background=n.content.trim();sprites.clear();}
    else if(n.kind==="show"){
      const [name,at=""] = n.content.split(/\s+at\s+/,2);const key=name.trim().split(/\s+/)[0];sprites.set(key,{name:name.trim(),at:at.trim()});
    }else if(n.kind==="hide")sprites.delete(n.content.trim().split(/\s+/)[0]);
    else if(n.kind==="music"){const m=n.content.match(/"([^"]+)"|([^\s]+)/);music=m?(m[1]||m[2]):null;}
    else if(n.kind==="music_stop")music=null;
  }
  return {background,sprites:[...sprites.values()],music};
}

function assetUrlForImage(name){
  if(name==="black")return null;const path=state.definitions[name];if(!path)return null;return "/asset/"+path.split("/").map(encodeURIComponent).join("/");
}

function assetUrlForPath(path){
  return path?"/asset/"+path.split("/").map(encodeURIComponent).join("/"):null;
}

function renderVoiceBinding(){
  const path=voicePathForDialogue(state.selected),asset=voiceAssetForPath(path),node=state.nodes[state.selected];
  if(path){
    const expected=node?.character||"other",actual=asset?.characterGroup||"";
    $("voiceBindingStatus").textContent=actual&&actual!==expected?`已绑定，但音频位于 ${actual} 的目录中`:`已绑定：${asset?.displayName||path.split("/").pop()}`;
    $("voiceBindingPath").textContent=path;
  }else{
    $("voiceBindingStatus").textContent="尚未绑定配音";
    $("voiceBindingPath").textContent="选择音频后会自动放在对应角色的 voice 文件夹中。";
  }
  $("voicePreviewBtn").disabled=!path;$("voiceUnbindBtn").disabled=!path;
}

function stopDialogueVoice(restoreMusic=true){
  if(state.voiceAudio){state.voiceAudio.pause();state.voiceAudio.removeAttribute("src");state.voiceAudio.load();state.voiceAudio=null;}
  state.voiceDialogueIndex=-1;if(restoreMusic&&state.sceneAudio)state.sceneAudio.volume=.55;
}

async function playDialogueVoice(index){
  const path=voicePathForDialogue(index);if(!path){stopDialogueVoice();return;}
  stopDialogueVoice(false);state.voiceDialogueIndex=index;
  // Normal preview level is .55; reduce it only slightly while voice plays.
  if(state.sceneAudio)state.sceneAudio.volume=.50;
  const audio=new Audio(assetUrlForPath(path));state.voiceAudio=audio;audio.volume=1;audio.preload="auto";
  const finish=()=>{if(state.voiceAudio!==audio)return;if(state.sceneAudio)state.sceneAudio.volume=.55;state.voiceAudio=null;state.voiceDialogueIndex=-1;};
  audio.addEventListener("ended",finish,{once:true});
  audio.addEventListener("error",()=>{finish();toast(`无法播放配音：${path.split("/").pop()}`,true);},{once:true});
  try{await audio.play();}catch{finish();toast("浏览器阻止了配音播放，请点击“试听”按钮。",true);}
}

function syncDialogueVoice(index,forcePlay=false){
  const path=voicePathForDialogue(index);
  if(state.voiceDialogueIndex!==index)stopDialogueVoice();
  if(forcePlay&&path)playDialogueVoice(index);
}

function attachVoicePath(path){
  if(state.selected<0||state.nodes[state.selected]?.kind!=="dialogue")return;
  snapshot();const voiceIndex=voiceNodeIndexForDialogue(state.selected);
  if(voiceIndex>=0)state.nodes[voiceIndex].content=path;
  else{state.nodes.splice(state.selected,0,{id:Date.now()+Math.random(),kind:"voice",character:"",content:path,original:""});state.selected+=1;}
  markDirty();renderAll();playDialogueVoice(state.selected);toast("配音已经绑定到这句对白。");
}

function unbindSelectedVoice(){
  const voiceIndex=voiceNodeIndexForDialogue(state.selected);if(voiceIndex<0)return;
  snapshot();stopDialogueVoice();state.nodes.splice(voiceIndex,1);state.selected-=1;markDirty();renderAll();toast("已解除配音绑定，音频文件仍保留在素材库中。");
}

async function importVoiceFile(file){
  if(!file||state.selected<0||state.nodes[state.selected]?.kind!=="dialogue")return;
  const character=state.nodes[state.selected].character||"other";toast("正在导入配音…");
  try{
    const data=await api(`/api/import?kind=voice&name=${encodeURIComponent(file.name)}&characterGroup=${encodeURIComponent(character)}`,{method:"POST",headers:{"Content-Type":"application/octet-stream"},body:await file.arrayBuffer()});
    state.assets=data.project.assets;attachVoicePath(data.asset.path);
    if(data.asset.audioNormalized)toast("配音已自动转换为游戏兼容的 16-bit WAV，并绑定到对白。");
  }catch(e){toast(e.message,true);}
}

function openVoiceLibrary(){
  if(state.selected<0||state.nodes[state.selected]?.kind!=="dialogue")return;
  const character=state.nodes[state.selected].character||"other",voices=state.assets.filter(asset=>asset.category==="voice"&&(asset.characterGroup===character||asset.characterGroup==="other"));
  const body=document.createElement("div");const tip=document.createElement("p");tip.className="modal-tip";tip.textContent=`正在为“${charName(character)}”选择已有配音。点击卡片即可绑定到当前对白。`;body.append(tip);
  const grid=document.createElement("div");grid.className="modal-grid voice-library-grid";
  voices.forEach(asset=>grid.append(assetCard(asset,selected=>{closeModal();attachVoicePath(selected.path);})));body.append(grid);
  if(!voices.length){const empty=document.createElement("div");empty.className="asset-empty";empty.textContent="这个角色还没有已导入的配音。请使用“导入 / 替换”。";grid.append(empty);}
  openModal("选择已有角色配音",body,[]);
}

function updateSceneMusicButton(status=""){
  const button=$("previewMusicToggle");if(!button)return;
  button.classList.remove("playing","blocked","muted");
  if(!state.sceneMusicEnabled){button.textContent="🔇 实时音乐已关闭";button.classList.add("muted");return;}
  if(state.sceneMusicBlocked){button.textContent="▶ 点击启用实时音乐";button.classList.add("blocked");return;}
  if(state.sceneAudio&&!state.sceneAudio.paused){button.textContent="♫ 实时音乐播放中";button.classList.add("playing");return;}
  button.textContent=status||"♫ 实时音乐待机";
}

function stopSceneMusic(clearPath=true){
  if(state.sceneAudio){state.sceneAudio.pause();state.sceneAudio.removeAttribute("src");state.sceneAudio.load();state.sceneAudio=null;}
  if(clearPath)state.sceneMusicPath="";
  state.sceneMusicBlocked=false;updateSceneMusicButton();
}

async function syncSceneMusic(path,forcePlay=false){
  const wanted=path||"";
  if(!state.sceneMusicEnabled){if(state.sceneAudio)state.sceneAudio.pause();updateSceneMusicButton();return;}
  if(!wanted){stopSceneMusic();return;}

  if(state.sceneMusicPath!==wanted||!state.sceneAudio){
    stopSceneMusic(false);
    state.sceneMusicPath=wanted;
    state.sceneAudio=new Audio(assetUrlForPath(wanted));
    state.sceneAudio.loop=true;state.sceneAudio.volume=.55;state.sceneAudio.preload="auto";
    state.sceneAudio.addEventListener("error",()=>{state.sceneMusicBlocked=true;updateSceneMusicButton();toast(`无法播放实时音乐：${wanted.split("/").pop()}`,true);},{once:true});
  }

  const activated=forcePlay||navigator.userActivation?.hasBeenActive;
  if(!activated){state.sceneMusicBlocked=true;updateSceneMusicButton();return;}
  try{
    await state.sceneAudio.play();state.sceneMusicBlocked=false;updateSceneMusicButton();
  }catch{
    state.sceneMusicBlocked=true;updateSceneMusicButton();
  }
}

function renderPreview(forceAudio=false){
  const node=state.nodes[state.selected],empty=$("emptyStage"),bg=$("stageBackground"),sprites=$("sprites"),dialogue=$("dialoguePreview"),badge=$("stageBadge");
  sprites.replaceChildren();dialogue.style.display="none";badge.style.display="none";
  if(!node){empty.style.display="grid";bg.style.display="none";stopDialogueVoice();stopSceneMusic();return;}empty.style.display="none";
  const scene=sceneAt(state.selected);const bgUrl=assetUrlForImage(scene.background);
  if(bgUrl){bg.src=bgUrl;bg.style.display="block";}else{bg.removeAttribute("src");bg.style.display="none";$("stage").style.background=scene.background==="black"?"#000":"#11131a";}
  scene.sprites.forEach((sprite,i)=>{
    const url=assetUrlForImage(sprite.name);if(!url)return;
    const img=document.createElement("img");img.className="sprite";img.alt=sprite.name;img.style.visibility="hidden";
    const transform=state.transforms[sprite.at]||{};
    const fallbackX=sprite.at.includes("left")?.20:sprite.at.includes("right")?.82:.5;
    const xalign=Number.isFinite(transform.xalign)?transform.xalign:fallbackX;
    const yalign=Number.isFinite(transform.yalign)?transform.yalign:1;
    const zoom=Number.isFinite(transform.zoom)?transform.zoom:1;
    img.style.left=`${xalign*100}%`;img.style.top=`${yalign*100}%`;img.style.transform=`translate(${-xalign*100}%, ${-yalign*100}%)`;
    // Ren'Py zoom scales the source pixels in the 1280x720 design space.
    // Convert that pixel width to a percentage of the responsive web stage.
    const revealAtFinalSize=()=>{
      if(!img.naturalWidth)return;
      img.style.width=`${img.naturalWidth/1280*zoom*100}%`;
      img.style.visibility="visible";
    };
    img.addEventListener("load",revealAtFinalSize,{once:true});
    img.addEventListener("error",()=>img.remove(),{once:true});
    img.src=url;sprites.append(img);
    if(img.complete)revealAtFinalSize();
  });
  if(node.kind==="dialogue"||node.kind==="narration"){
    dialogue.style.display="block";$("previewWho").textContent=node.kind==="dialogue"?charName(node.character):"";$("previewWho").style.display=node.kind==="dialogue"?"block":"none";$("previewWhat").textContent=node.content||"（尚未输入文本）";
  }else{badge.style.display="block";badge.textContent=`${kindInfo[node.kind]?.[0]||node.kind}｜${nodeSummary(node)}`;}
  $("bgState").textContent=`背景：${scene.background||"未设置"}`;$("characterState").textContent=`人物：${scene.sprites.length}`;$("musicState").textContent=`音乐：${scene.music?scene.music.split("/").pop():"未播放"}`;
  syncSceneMusic(scene.music,forceAudio);syncDialogueVoice(state.selected,forceAudio);
}

function assetCard(asset,clickHandler){
  const card=document.createElement("div");card.className="asset-card";card.draggable=true;
  const thumb=document.createElement("div");thumb.className="asset-thumb";
  if(asset.category==="music"||asset.category==="voice"){const icon=document.createElement("span");icon.className="music-icon";icon.textContent=asset.category==="voice"?"🎙":"♫";thumb.append(icon);}else{const img=document.createElement("img");img.src=asset.url;img.alt=asset.name;thumb.append(img);}
  const info=document.createElement("div");info.className="asset-info";const b=document.createElement("b");b.textContent=asset.displayName||asset.name.replace(/\.[^.]+$/,"");b.title=b.textContent;const small=document.createElement("small");small.textContent=asset.imageName?`内部名：${asset.imageName}`:asset.path;small.title=asset.path;info.append(b,small);
  const rename=document.createElement("button");rename.className="asset-rename";rename.type="button";rename.title="修改素材名称";rename.textContent="✎";rename.onclick=e=>{e.stopPropagation();e.preventDefault();openRenameAsset(asset);};
  const remove=document.createElement("button");remove.className="asset-delete";remove.type="button";remove.title="删除这项素材";remove.textContent="×";remove.onclick=e=>{e.stopPropagation();e.preventDefault();deleteAsset(asset);};
  card.append(thumb,info,rename,remove);
  card.onclick=()=>clickHandler(asset);card.ondragstart=e=>e.dataTransfer.setData("application/json",JSON.stringify(asset));return card;
}

function renderAssets(){
  const grid=$("assetGrid");grid.replaceChildren();const assets=state.assets.filter(a=>a.category===state.assetCategory&&(state.assetCategory!=="character"||state.characterGroup==="all"||a.characterGroup===state.characterGroup));
  if(!assets.length){const empty=document.createElement("div");empty.className="asset-empty";empty.textContent=state.assetCategory==="music"?"还没有音乐。点击右上角“导入音乐”即可添加。":"这个分类暂时没有素材。";grid.append(empty);return;}
  assets.forEach(asset=>grid.append(assetCard(asset,a=>{
    if(a.category==="character")openCharacterPosition(a);else if(a.category==="music")openMusicChoice(a);else applyVisualAsset(a);
  })));
}

function setAssetCategory(category){
  state.assetCategory=category;
  document.querySelectorAll("#assetTabs button").forEach(b=>b.classList.toggle("active",b.dataset.category===category));
  const helps={background:"点击背景：若当前选中场景节点则直接替换，否则插入到当前位置之后。",cg:"点击 CG：替换当前场景，或在当前位置之后插入 CG 与转场。",character:"点击人物立绘：选择左、中、右位置后加入画面；选中人物节点时会直接替换。",music:"点击音乐：可以先试听，再插入播放/切换音乐节点。"};
  $("assetHelp").textContent=helps[category];
  $("characterSubtabs").hidden=category!=="character";
  renderAssets();
}

function setCharacterGroup(group){
  state.characterGroup=group;
  document.querySelectorAll("#characterSubtabs button").forEach(button=>button.classList.toggle("active",button.dataset.characterGroup===group));
  renderAssets();
}

function renderCharacterSubtabs(){
  const container=$("characterSubtabs");
  const label=document.createElement("span");label.textContent="人物分类";
  const all=document.createElement("button");all.textContent="全部";all.dataset.characterGroup="all";all.className=state.characterGroup==="all"?"active":"";
  const buttons=Object.entries(characterGroups).map(([value,text])=>{const button=document.createElement("button");button.textContent=text;button.dataset.characterGroup=value;button.className=state.characterGroup===value?"active":"";return button;});
  container.replaceChildren(label,all,...buttons);
}

function chooseCharacterGroupThenImport(){
  if(!Object.keys(characterGroups).length){toast("请先在 characters.rpy 中定义至少一个角色。",true);return;}
  if(state.characterGroup!=="all"){state.pendingCharacterGroup=state.characterGroup;$("characterFile").click();return;}
  const body=document.createElement("div");body.innerHTML="<p class='modal-tip'>请选择这次导入的立绘属于哪位人物。导入后会自动显示在对应子分类中。</p>";
  const grid=document.createElement("div");grid.className="modal-grid";
  Object.entries(characterGroups).forEach(([value,label])=>{const choice=document.createElement("div");choice.className="modal-choice";choice.innerHTML=`<b>${label}</b><small>保存到 ${label} 的人物立绘分类</small>`;choice.onclick=()=>{state.pendingCharacterGroup=value;setCharacterGroup(value);closeModal();$("characterFile").click();};grid.append(choice);});
  body.append(grid);openModal("选择人物分类",body,[]);
}

function openCharacterPosition(asset){
  const body=document.createElement("div");body.innerHTML="<p class='modal-tip'>选择人物在画面中的位置。若当前正选中人物节点，会直接替换该节点。</p>";const choices=document.createElement("div");choices.className="modal-grid";
  [["left","画面左侧"],["center","画面中央"],["right","画面右侧"]].forEach(([value,label])=>{const c=document.createElement("div");c.className="modal-choice";c.innerHTML=`<b>${label}</b><small>${value==="left"?"适合对手或第二人物":value==="right"?"适合女主或主说话人":"适合单人特写"}</small>`;c.onclick=()=>{addCharacter(asset,value);closeModal();};choices.append(c);});body.append(choices);openModal(`添加人物：${asset.imageName||asset.name}`,body,[]);
}

function openCharacterManager(){
  const body=document.createElement("div");const current=sceneAt(Math.max(0,state.selected)).sprites;
  if(current.length){const title=document.createElement("h4");title.textContent="画面中的人物（点击可隐藏）";body.append(title);const currentGrid=document.createElement("div");currentGrid.className="modal-grid";current.forEach(sprite=>{const c=document.createElement("div");c.className="modal-choice";c.innerHTML=`<b>${sprite.name}</b><small>点击插入隐藏人物节点</small>`;c.onclick=()=>{insertNodes([{kind:"hide",content:sprite.name.split(/\s+/)[0]},{kind:"transition",content:"dissolve"}]);closeModal();toast("隐藏人物节点已加入。");};currentGrid.append(c);});body.append(currentGrid);}
  const title=document.createElement("h4");title.textContent="选择要添加或替换的立绘";body.append(title);const grid=document.createElement("div");grid.className="modal-grid";state.assets.filter(a=>a.category==="character").forEach(a=>grid.append(assetCard(a,x=>{closeModal();openCharacterPosition(x);})));body.append(grid);
  const buttons=[];
  if(!grid.children.length){const empty=document.createElement("p");empty.className="modal-tip";empty.textContent="人物立绘库还是空的。可以直接导入一张透明背景 PNG 立绘。";body.append(empty);}
  const importButton=document.createElement("button");importButton.className="action";importButton.textContent="＋ 导入新立绘";importButton.onclick=()=>{closeModal();setAssetCategory("character");chooseCharacterGroupThenImport();};buttons.push(importButton);
  openModal("添加、切换或隐藏人物",body,buttons);
}

function previewMusic(asset){
  stopDialogueVoice(false);if(state.sceneAudio)state.sceneAudio.pause();updateSceneMusicButton("♫ 素材试听中");
  if(state.audio){state.audio.pause();state.audio=null;}state.audio=new Audio(asset.url);state.audio.loop=true;state.audio.volume=.55;state.audio.play().then(()=>toast(`正在试听：${asset.name}`)).catch(()=>toast("浏览器无法播放这个格式。",true));
}
function stopPreviewMusic(resumeScene=true){const wasPlaying=!!state.audio;if(state.audio){state.audio.pause();state.audio=null;}if(wasPlaying&&resumeScene&&state.selected>=0)syncSceneMusic(sceneAt(state.selected).music,true);}
function openMusicChoice(asset){
  const body=document.createElement("div");body.innerHTML=`<div class="modal-choice selected"><b>${asset.name}</b><small>${asset.path}</small></div><p class="modal-tip">“插入音乐”会在当前位置之后添加切换音乐指令，并设置 1 秒淡入和循环播放。</p>`;
  const preview=document.createElement("button");preview.className="action";preview.textContent="♫ 试听";preview.onclick=()=>previewMusic(asset);
  const add=document.createElement("button");add.className="action";add.textContent="插入 / 切换到这首音乐";add.onclick=()=>{stopPreviewMusic();addMusic(asset);closeModal();};openModal("播放或切换音乐",body,[preview,add]);
}
function openMusicManager(){
  const body=document.createElement("div");const grid=document.createElement("div");grid.className="modal-grid";state.assets.filter(a=>a.category==="music").forEach(a=>grid.append(assetCard(a,x=>{closeModal();openMusicChoice(x);})));if(!grid.children.length){grid.textContent="还没有音乐。请先点击“导入音乐”。";}body.append(grid);
  const stop=document.createElement("button");stop.className="action";stop.textContent="■ 插入停止音乐";stop.onclick=()=>{stopPreviewMusic();stopMusic();closeModal();};openModal("选择、试听或停止音乐",body,[stop]);
}

async function importFile(file,kind,characterGroup=""){
  if(!file)return;
  const names={background:"背景",cg:"CG",character:"人物立绘",music:"音乐"};toast(`正在导入${names[kind]}…`);
  try{
    const data=await api(`/api/import?kind=${encodeURIComponent(kind)}&name=${encodeURIComponent(file.name)}&characterGroup=${encodeURIComponent(characterGroup)}`,{method:"POST",headers:{"Content-Type":"application/octet-stream"},body:await file.arrayBuffer()});
    state.project=data.project;state.assets=data.project.assets;state.definitions=data.project.imageDefinitions;state.transforms=data.project.previewTransforms||state.transforms;renderAssets();
    if(kind==="music")addMusic(data.asset);else if(kind==="character")openCharacterPosition(data.asset);else applyVisualAsset(data.asset);
    toast(`${names[kind]}已导入并注册。`);
  }catch(e){toast(e.message,true);}
}

function assetUsedInStory(asset){
  const imageName=imageNameFor(asset);
  return state.nodes.some(node=>{
    if(asset.category==="music")return node.kind==="music"&&node.content.includes(asset.path);
    if(asset.category==="voice")return node.kind==="voice"&&node.content===asset.path;
    if(!imageName)return false;
    return ["scene","show","hide"].includes(node.kind)&&(node.content===imageName||node.content.startsWith(imageName+" "));
  });
}

async function deleteAsset(asset){
  const label=asset.imageName||asset.name;
  const used=assetUsedInStory(asset);
  if(asset.category==="voice"&&used){toast("这条配音仍绑定着对白，请先在对白属性中解除或替换绑定。",true);return;}
  const warning=used?"\n\n注意：当前剧情仍在使用它，删除后对应画面或音乐会暂时缺失。":"";
  if(!confirm(`删除素材“${label}”？${warning}\n\n文件会移动到 editor_trash，可以手动恢复。`))return;
  try{
    const data=await api("/api/delete-asset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:asset.path,category:asset.category})});
    stopPreviewMusic();if(asset.category==="voice")stopDialogueVoice();closeModal();state.project=data.project;state.assets=data.project.assets;state.definitions=data.project.imageDefinitions;state.transforms=data.project.previewTransforms||state.transforms;renderAll();
    toast("素材已移到回收文件夹 editor_trash。");
  }catch(e){toast(e.message,true);}
}

function openRenameAsset(asset){
  const names={background:"背景",cg:"CG",character:"人物立绘",music:"音乐",voice:"配音"};
  const body=document.createElement("div");body.className="rename-asset-form";
  const tip=document.createElement("p");tip.className="modal-tip";tip.textContent=asset.category==="music"?"修改后会同步更新剧情中所有使用这首音乐的节点。":asset.category==="voice"?"修改后会同步更新所有绑定这条配音的对白。":"修改实际文件名；剧情使用的内部图像名会保持不变，因此已有画面不会失效。";
  const label=document.createElement("label");label.textContent="新的素材名称";
  const input=document.createElement("input");input.type="text";input.maxLength=120;input.value=asset.displayName||asset.name.replace(/\.[^.]+$/,"");input.placeholder="请输入名称（不需要输入扩展名）";label.append(input);
  const path=document.createElement("small");path.className="rename-path";path.textContent=`当前文件：${asset.path}`;
  body.append(tip,label,path);
  const confirmButton=document.createElement("button");confirmButton.className="action";confirmButton.textContent="确认修改名称";
  const submit=async()=>{const newName=input.value.trim();if(!newName){toast("请输入新的素材名称。",true);input.focus();return;}if(newName===(asset.displayName||asset.name.replace(/\.[^.]+$/,""))){closeModal();toast("素材名称没有变化。");return;}confirmButton.disabled=true;try{
    const data=await api("/api/rename-asset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:asset.path,category:asset.category,newName,nodes:state.nodes})});
    stopPreviewMusic();state.project=data.project;state.nodes=clone(data.project.nodes);state.assets=data.project.assets;state.definitions=data.project.imageDefinitions;state.transforms=data.project.previewTransforms||state.transforms;state.selected=Math.min(state.selected,state.nodes.length-1);if(data.storySaved)markSaved();closeModal();renderAll();
    const updated=data.referencesUpdated?`，并同步更新了 ${data.referencesUpdated} 个剧情节点`:"";toast(`${names[asset.category]||"素材"}已改名${updated}。`);
  }catch(e){confirmButton.disabled=false;toast(e.message,true);}};
  confirmButton.onclick=submit;input.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();submit();}};
  openModal(`修改${names[asset.category]||"素材"}名称`,body,[confirmButton]);setTimeout(()=>{input.focus();input.select();},30);
}

async function saveStory(silent=false){
  try{const data=await api("/api/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nodes:state.nodes})});markSaved();if(!silent)toast(data.message);return true;}catch(e){toast(e.message,true);return false;}
}
async function lintProject(){if(state.dirty&&!(await saveStory(true)))return;openModal("Ren’Py 项目检查",Object.assign(document.createElement("div"),{textContent:"正在检查，请稍候…"}),[]);try{const data=await api("/api/lint",{method:"POST"});const pre=document.createElement("pre");pre.className="lint-output";pre.textContent=data.output||"检查完成，没有输出。";$("modalBody").replaceChildren(pre);$("modalTitle").textContent=data.ok?"项目检查通过":"项目检查发现问题";}catch(e){$("modalBody").textContent=e.message;}}
async function playGame(){try{const data=await api("/api/play",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nodes:state.nodes})});markSaved();toast(data.message);}catch(e){toast(e.message,true);}}

function renderAll(){renderTimeline();renderProperties();renderPreview();renderAssets();}
function openModal(title,body,buttons=[]){$("modalTitle").textContent=title;$("modalBody").replaceChildren(body);$("modalFoot").replaceChildren(...buttons);$("modalBackdrop").hidden=false;}
function closeModal(){stopPreviewMusic();$("modalBackdrop").hidden=true;}
function nodeUnitBounds(index){
  if(index<0||index>=state.nodes.length)return null;
  if(state.nodes[index].kind==="dialogue"&&index>0&&state.nodes[index-1].kind==="voice")return {start:index-1,end:index,selectOffset:1};
  if(state.nodes[index].kind==="voice"&&state.nodes[index+1]?.kind==="dialogue")return {start:index,end:index+1,selectOffset:1};
  return {start:index,end:index,selectOffset:0};
}
function moveNode(delta){
  const current=nodeUnitBounds(state.selected);if(!current||!delta)return;
  const adjacentIndex=delta<0?current.start-1:current.end+1;if(adjacentIndex<0||adjacentIndex>=state.nodes.length)return;
  const adjacent=nodeUnitBounds(adjacentIndex),length=current.end-current.start+1;let insertAt;
  snapshot();const block=state.nodes.splice(current.start,length);
  if(delta<0)insertAt=adjacent.start;else insertAt=adjacent.end+1-length;
  state.nodes.splice(insertAt,0,...block);state.selected=insertAt+current.selectOffset;markDirty();selectNode(state.selected);
}
function deleteNode(){
  const i=state.selected;if(i<0)return;const raw=state.nodes[i].content;if(/^\s*(label\s+[A-Za-z_]\w*\s*:|return\s*)$/.test(raw)){toast("剧情 label 和 return 受到保护，不能删除。",true);return;}
  const unit=nodeUnitBounds(i),hasVoice=unit.start!==unit.end&&state.nodes[unit.start].kind==="voice";
  if(!confirm(`删除第 ${visibleNodeNumber(i)} 个节点？${hasVoice?"\n该对白绑定的配音指令也会一起移除。":""}\n${nodeSummary(state.nodes[i]).slice(0,80)}`))return;
  snapshot();stopDialogueVoice();state.nodes.splice(unit.start,unit.end-unit.start+1);markDirty();let next=Math.min(unit.start,state.nodes.length-1);if(state.nodes[next]?.kind==="voice"&&state.nodes[next+1]?.kind==="dialogue")next+=1;selectNode(next);
}
function undo(){if(!state.undo.length)return;state.redo.push(clone(state.nodes));state.nodes=state.undo.pop();markDirty();selectNode(Math.min(state.selected,state.nodes.length-1));updateUndoButtons();}
function redo(){if(!state.redo.length)return;state.undo.push(clone(state.nodes));state.nodes=state.redo.pop();markDirty();selectNode(Math.min(state.selected,state.nodes.length-1));updateUndoButtons();}

function bindEvents(){
  $("addDialogueBtn").onclick=()=>openTextAdd("dialogue");$("addNarrationBtn").onclick=()=>openTextAdd("narration");
  $("saveBtn").onclick=()=>saveStory();$("lintBtn").onclick=lintProject;$("playBtn").onclick=playGame;$("reloadBtn").onclick=()=>loadProject();
  $("undoBtn").onclick=undo;$("redoBtn").onclick=redo;$("moveUpBtn").onclick=()=>moveNode(-1);$("moveDownBtn").onclick=()=>moveNode(1);$("deleteBtn").onclick=deleteNode;
  $("searchInput").oninput=renderTimeline;$("clearSearch").onclick=()=>{$("searchInput").value="";renderTimeline();};
  $("filters").onclick=e=>{if(!e.target.dataset.filter)return;state.filter=e.target.dataset.filter;document.querySelectorAll("#filters button").forEach(b=>b.classList.toggle("active",b===e.target));renderTimeline();};
  $("assetTabs").onclick=e=>{if(e.target.dataset.category)setAssetCategory(e.target.dataset.category);};
  $("characterSubtabs").onclick=e=>{if(e.target.dataset.characterGroup)setCharacterGroup(e.target.dataset.characterGroup);};
  $("kindSelect").onchange=e=>mutateSelected(n=>{n.kind=e.target.value;if(n.kind==="dialogue"&&!n.character)n.character=state.characters.find(c=>c.id!=="narrator")?.id||"protagonist";});
  $("characterSelect").onchange=e=>mutateSelected(n=>n.character=e.target.value);
  $("voicePreviewBtn").onclick=()=>playDialogueVoice(state.selected);$("voiceImportBtn").onclick=()=>$("voiceFile").click();$("voiceLibraryBtn").onclick=openVoiceLibrary;$("voiceUnbindBtn").onclick=unbindSelectedVoice;
  $("voiceFile").onchange=e=>{importVoiceFile(e.target.files[0]);e.target.value="";};
  $("previewMusicToggle").onclick=()=>{state.sceneMusicEnabled=!state.sceneMusicEnabled;if(!state.sceneMusicEnabled){if(state.sceneAudio)state.sceneAudio.pause();state.sceneMusicBlocked=false;updateSceneMusicButton();toast("实时背景音乐已关闭。");}else{const music=state.selected>=0?sceneAt(state.selected).music:null;syncSceneMusic(music,true);toast(music?"实时背景音乐已开启。":"实时背景音乐已开启，当前节点没有音乐。");}};
  $("contentInput").onfocus=()=>{if(!state.typingCheckpoint){snapshot();state.typingCheckpoint=true;}};
  $("contentInput").onblur=()=>state.typingCheckpoint=false;
  $("contentInput").oninput=e=>{if(state.selected<0)return;state.nodes[state.selected].content=e.target.value;markDirty();renderTimeline();renderPreview();};
  $("backgroundActionBtn").onclick=()=>{setAssetCategory("background");$("assetGrid").scrollIntoView({behavior:"smooth",block:"nearest"});toast("选择一张背景，或点击右上角导入新的背景图。");};
  $("replaceVisualBtn").onclick=()=>{setAssetCategory("cg");$("assetGrid").scrollIntoView({behavior:"smooth",block:"nearest"});toast("选择一张 CG：场景节点会被替换，其他节点后会插入新 CG。");};
  $("characterActionBtn").onclick=openCharacterManager;$("musicActionBtn").onclick=openMusicManager;
  const imports={background:["importBackgroundBtn","backgroundFile"],cg:["importCgBtn","cgFile"],music:["importMusicBtn","musicFile"]};
  Object.entries(imports).forEach(([kind,[buttonId,fileId]])=>{$(buttonId).onclick=()=>{$(fileId).click();};$(fileId).onchange=e=>{setAssetCategory(kind);importFile(e.target.files[0],kind);e.target.value="";};});
  $("importCharacterBtn").onclick=()=>{setAssetCategory("character");chooseCharacterGroupThenImport();};
  $("characterFile").onchange=e=>{const group=state.pendingCharacterGroup||state.characterGroup;importFile(e.target.files[0],"character",group);e.target.value="";state.pendingCharacterGroup="";};
  $("modalClose").onclick=closeModal;$("modalBackdrop").onclick=e=>{if(e.target===$("modalBackdrop"))closeModal();};
  $("stage").ondragover=e=>{e.preventDefault();e.dataTransfer.dropEffect="copy";};$("stage").ondrop=e=>{e.preventDefault();try{const asset=JSON.parse(e.dataTransfer.getData("application/json"));if(asset.category==="character")openCharacterPosition(asset);else if(asset.category==="music")openMusicChoice(asset);else applyVisualAsset(asset);}catch{}};
  $("closeBtn").onclick=async()=>{if(state.dirty&&!confirm("还有未保存的修改。仍要关闭编辑器吗？"))return;await api("/api/shutdown",{method:"POST"}).catch(()=>{});document.body.innerHTML='<div style="height:100vh;display:grid;place-content:center;text-align:center;background:#11131b;color:#eee;font-family:sans-serif"><h2>编辑器已经关闭</h2><p style="color:#999">现在可以关闭这个浏览器标签页。</p></div>';};
  document.addEventListener("keydown",e=>{if(e.ctrlKey&&e.key.toLowerCase()==="s"){e.preventDefault();saveStory();}else if(e.ctrlKey&&e.key.toLowerCase()==="z"){e.preventDefault();undo();}else if(e.ctrlKey&&e.key.toLowerCase()==="y"){e.preventDefault();redo();}else if(e.key==="Escape")closeModal();else if(e.key==="Delete"&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))deleteNode();});
  window.addEventListener("beforeunload",e=>{stopDialogueVoice(false);stopSceneMusic();stopPreviewMusic(false);if(state.dirty){e.preventDefault();e.returnValue="";}});
}

bindEvents();
loadProject(true).catch(e=>{toast(e.message,true);$("projectTitle").textContent="载入失败，请关闭后重试";});
