import{t as e}from"./index-BUC4Pd-J.js";import{G as t,L as n,Ot as r,R as i,Tt as a,U as o,X as s,_t as c,bt as l,dt as u,gt as d,ht as f,i as p,mt as m,q as h,rt as g,t as _,vt as v,wt as y,xt as b}from"./build-BD6P-s9Z.js";import{t as x}from"./utils-uvjv54SH.js";import{t as S}from"./build-C0CIDLqy.js";var C=null,w=()=>(C===null&&(C=new s(v.getJSON(`texture_image_0`),v.getImage(`texture_image_0`))),C),T=(e,t)=>{let n=[],r={},i={},a=0,o=0,s=e.getTexture();for(let c of t){let t=e.getRegion(c.region);if(!t)throw Error(`region "${c.region}" not found in atlas`);let l=Math.max(1,Math.floor(t.width/c.frameW)),u=[];for(let i=0;i<c.count;i++){let a=`${c.region}#${i}`,o=i%l*c.frameW,d=Math.floor(i/l)*c.frameH,f={};f[a]=Object.assign({},t,{name:a,offset:new g(t.offset.x+o,t.offset.y+d),width:c.frameW,height:c.frameH,trimmed:!1,trim:void 0,sourceSize:{w:c.frameW,h:c.frameH},angle:0}),e.addUVs(f,a,s.width,s.height),r[a]=n.length,n.push(f[a]),u.push({name:a,delay:c.delay})}i[c.anim]=u,a=Math.max(a,c.frameW),o=Math.max(o,c.frameH)}return{atlas:n,atlasIndices:r,framewidth:a,frameheight:o,animations:i}},E=(e,t,n)=>{for(let n of Object.keys(t))e.addAnimation(n,t[n]);e.setCurrentAnimation(n)},D=class extends t{constructor(e,t,n={}){n.image=w(),n.anchorPoint={x:.5,y:.5},super(e,t,n),this.floating=!1}},O=class extends i{constructor(e,t,n={}){super(e,t,n.width,n.height),this.anchorPoint.set(0,0),this.body=new p(this,n.shapes),this.body.collisionType=u.types.WORLD_SHAPE,this.body.setStatic(!0)}},k=class extends t{speed=1+Math.random();startX=-141;constructor(e,t,n={}){n.image=w(),n.region=`cloud5`,n.anchorPoint={x:.5,y:.5},super(e,t,n),this.alwaysUpdate=!0}update(e){return super.update(e),this.pos.x+=this.speed,this.pos.x>=1040&&(this.pos.x=this.startX-(50+Math.random()*200)),!0}},A=e=>class extends t{constructor(t,n,r={}){let i=w(),a=T(i,[e]);r.image=i,r.atlas=a.atlas,r.atlasIndices=a.atlasIndices,r.framewidth=a.framewidth,r.frameheight=a.frameheight,r.anchorPoint={x:.5,y:.5},super(t,n,r),E(this,a.animations,e.anim)}},j=A({region:`Campfire with food sheet`,frameW:32,frameH:32,count:40,anim:`camp`,delay:100}),M=A({region:`GandalfHardcore Portal sheet`,frameW:64,frameH:64,count:10,anim:`portal`,delay:100}),N=A({region:`Cooking area`,frameW:64,frameH:64,count:12,anim:`cook`,delay:100}),P=class extends t{running=!1;constructor(e,t,r={}){let i=w(),a=T(i,[{region:`male_idle`,frameW:80,frameH:64,count:5,anim:`idle`,delay:180},{region:`male_walk`,frameW:80,frameH:64,count:8,anim:`walk`,delay:80},{region:`male_run`,frameW:80,frameH:64,count:8,anim:`run`,delay:80}]);r.image=i,r.atlas=a.atlas,r.atlasIndices=a.atlasIndices,r.framewidth=a.framewidth,r.frameheight=a.frameheight,r.anchorPoint={x:.5,y:.5},super(e,t,r),E(this,a.animations,`idle`),this.body=new p(this,new n(35-this.width*.5,21-this.height*.5,9,43)),this.body.collisionType=u.types.PLAYER_OBJECT,this.body.setMaxVelocity(2,15),this.body.setFriction(.5,0),f.bindKey(f.KEY.A,`left`),f.bindKey(f.KEY.LEFT,`left`),f.bindKey(f.KEY.D,`right`),f.bindKey(f.KEY.RIGHT,`right`),f.bindKey(f.KEY.W,`jump`,!0),f.bindKey(f.KEY.UP,`jump`,!0),f.bindKey(f.KEY.SHIFT,`runLock`),this.alwaysUpdate=!0}update(e){let t=this.body;if(this.running=f.isKeyPressed(`runLock`),t.maxVel.x=this.running?5:2,f.isKeyPressed(`left`)?t.force.x=-t.maxVel.x:f.isKeyPressed(`right`)?t.force.x=t.maxVel.x:t.force.x=0,f.isKeyPressed(`jump`)&&!t.jumping&&!t.falling&&(t.vel.y=-t.maxVel.y,t.jumping=!0),t.vel.x===0&&t.vel.y===0)this.isCurrentAnimation(`idle`)||this.setCurrentAnimation(`idle`);else{let e=this.running?`run`:`walk`;this.isCurrentAnimation(e)||this.setCurrentAnimation(e)}return t.vel.x<0?this.flipX(!1):t.vel.x>0&&this.flipX(!0),super.update(e)||t.vel.x!==0||t.vel.y!==0}onDeactivateEvent(){f.unbindKey(f.KEY.A),f.unbindKey(f.KEY.LEFT),f.unbindKey(f.KEY.D),f.unbindKey(f.KEY.RIGHT),f.unbindKey(f.KEY.W),f.unbindKey(f.KEY.UP),f.unbindKey(f.KEY.SHIFT)}},F=class extends t{water;constructor(e,t,n={}){let r=w(),i=T(r,[{region:`2dWater`,frameW:480,frameH:480,count:1,anim:`water`,delay:100},{region:`water2ds`,frameW:740,frameH:523,count:1,anim:`water2`,delay:100}]);n.image=r,n.atlas=i.atlas,n.atlasIndices=i.atlasIndices,n.framewidth=i.framewidth,n.frameheight=i.frameheight,n.anchorPoint={x:.5,y:.5},super(e,t,n),E(this,i.animations,`water`);let a=n.inspectors?.scale??{x:1,y:1};this.scale(a.x,a.y);let s=new l({type:`cellular`,fractalType:`fbm`,width:512,height:512,frequency:.05,octaves:4,gain:.5,pingPongStrength:2,lacunarity:2,cellularJitter:1,seamlessBlendSkirt:.1,domainWarpAmp:30,domainWarpFrequency:.01,speed:.5,seamless:!0,seed:0}),c=new l({type:`cellular`,fractalType:`fbm`,width:512,height:512,frequency:.005,octaves:4,gain:.5,pingPongStrength:2,lacunarity:2,cellularJitter:1,seamlessBlendSkirt:.1,domainWarpAmp:30,domainWarpFrequency:.01,speed:.5,seamless:!0,seed:0}),u=new o(m.renderer,{glsl:`
			uniform sampler2D uNoise;
			uniform sampler2D uNoise2;
			uniform sampler2D screenTex : screen_texture;
			uniform float rangeWater;
			uniform float uTime;

			uniform float uEdgeAmp;
			uniform float uEdgeFreq;
			uniform float uScreenAmp;
			uniform float uScreenFreq;
			uniform float uFlowAmp;
			uniform float uNoiseAmp;

			vec4 apply(vec4 color, vec2 uv) {
				float t = mod(uTime, 6283.18);

				vec2 flow1 = texture2D(uNoise, noise_uv * 1.0 + t * 0.05).rg;
				vec2 flow2 = texture2D(uNoise, noise_uv * 2.3 - t * 0.03).rg;
				vec2 flow = (flow1 + flow2 * 0.5) - 0.75;
				vec2 noise = 2.0 * texture2D(uNoise2, noise_uv + vec2(0.5, 0.2) * t).rg - vec2(1.0);

				float n = texture2D(uNoise, vec2(noise_uv.x * 3.0, t * 0.1)).r;
				float edgeWave = sin(noise_uv.x * uEdgeFreq + t * 1.8) * uEdgeAmp
								+ sin(noise_uv.x * uEdgeFreq * 2.2 - t * 2.6) * uEdgeAmp * 0.5
								+ (n - 0.5) * uEdgeAmp * 0.6;
				vec2 edgeOffset = vec2(0.0, edgeWave);

				float screenEdgeWave = sin(screen_uv.x * uScreenFreq + t * 1.4) * uScreenAmp
									  + sin(screen_uv.x * uScreenFreq * 2.2 - t * 2.1) * uScreenAmp * 0.5;
				float dynamicRange = rangeWater + screenEdgeWave;

				vec2 normalizedUV = screen_uv;
				normalizedUV.y = dynamicRange - normalizedUV.y;

				vec4 refractedScreen = texture2D(screenTex, normalizedUV + flow * uFlowAmp);
				refractedScreen *= texture2D(uSampler, uv + edgeOffset + noise * uNoiseAmp);
				return refractedScreen;
			}
		`,wgsl:`
			struct WaterUniforms {
				rangeWater : f32,
				uTime : f32,
				uEdgeAmp : f32,
				uEdgeFreq : f32,
				uScreenAmp : f32,
				uScreenFreq : f32,
				uFlowAmp : f32,
				uNoiseAmp : f32,
			};
			@group(3) @binding(0) var<uniform> fx : WaterUniforms;
			@group(3) @binding(1) var uNoise : texture_2d<f32>;
			@group(3) @binding(2) var uNoiseSampler : sampler;
			@group(3) @binding(3) var uNoise2 : texture_2d<f32>;
			@group(3) @binding(4) var uNoise2Sampler : sampler;

			fn apply(color : vec4f, uv : vec2f) -> vec4f {
				let t = fx.uTime % 6283.18;

				let flow1 = textureSample(uNoise, uNoiseSampler, noise_uv + vec2f(t * 0.05)).rg;
				let flow2 = textureSample(uNoise, uNoiseSampler, noise_uv * 2.3 - vec2f(t * 0.03)).rg;
				let flow = (flow1 + flow2 * 0.5) - vec2f(0.75);
				let noise = 2.0 * textureSample(uNoise2, uNoise2Sampler, noise_uv + vec2f(0.5, 0.2) * t).rg - vec2f(1.0);

				let n = textureSample(uNoise, uNoiseSampler, vec2f(noise_uv.x * 3.0, t * 0.1)).r;
				let edgeWave = sin(noise_uv.x * fx.uEdgeFreq + t * 1.8) * fx.uEdgeAmp
								+ sin(noise_uv.x * fx.uEdgeFreq * 2.2 - t * 2.6) * fx.uEdgeAmp * 0.5
								+ (n - 0.5) * fx.uEdgeAmp * 0.6;
				let edgeOffset = vec2f(0.0, edgeWave);

				let screenEdgeWave = sin(screen_uv.x * fx.uScreenFreq + t * 1.4) * fx.uScreenAmp
									+ sin(screen_uv.x * fx.uScreenFreq * 2.2 - t * 2.1) * fx.uScreenAmp * 0.5;
				// screen_uv is y-down on this backend (the GLSL twin's is
				// y-up): the reflection is the y-down mirror of GL's
				// y-up affine (rangeWater + screenEdgeWave - y), so the
				// waterline sits at the same screen height
				let dynamicRange = 2.0 - fx.rangeWater + screenEdgeWave;

				var normalizedUV = screen_uv;
				normalizedUV.y = dynamicRange - normalizedUV.y;

				var refractedScreen = textureSample(screen_texture, screen_sampler, normalizedUV + flow * fx.uFlowAmp);
				refractedScreen = refractedScreen * textureSample(uTexture, uSampler, uv + edgeOffset + noise * fx.uNoiseAmp);
				return refractedScreen;
			}
		`});u.setTexture(`uNoise`,s.getTexture(),`repeat`),u.setTexture(`uNoise2`,c.getTexture(),`repeat`),u.setUniform(`uEdgeAmp`,.002),u.setUniform(`uEdgeFreq`,60),u.setUniform(`uScreenAmp`,8e-4),u.setUniform(`uScreenFreq`,45),u.setUniform(`uFlowAmp`,.03),u.setUniform(`uNoiseAmp`,.0015),u.setUniform(`rangeWater`,1.02),this.water=u,this.addPostEffect(u),this.alwaysUpdate=!0}update(e){return this.water.setTime(a.getTime()/1e3),super.update(e),!0}},I=()=>{d.register(`spriteTP`,D),d.register(`collisionTP`,O),d.register(`cloud`,k),d.register(`foodie`,j),d.register(`portal`,M),d.register(`cookingArea`,N),d.register(`male`,P),d.register(`waterTextureObj`,F)},L=class extends h{onResetEvent(){c.load(`level1`),m.viewport.fadeOut(`#000000`,2e3),m.world.addChild(d.pull(`waterTextureObj`,480,301,{inspectors:{scale:{x:2.032,y:2.032}}}),20)}},R=`/assets/waterOverworld/`,z=[{name:`level1`,type:`tmx`,src:`${R}level/level1.json`},{name:`foreground`,type:`tsx`,src:`${R}tileset/foreground.json`},{name:`Floor Tiles1`,type:`image`,src:`${R}image/Floor Tiles1.webp`},{name:`texture_image_0`,type:`image`,src:`${R}image/texture_image_0.webp`},{name:`texture_image_0`,type:`json`,src:`${R}json/texture_image_0.json`}],B=async()=>{try{try{await new _(960,640,{parent:`screen`,renderer:r.AUTO,scale:`auto`,scaleMethod:`fit`,antiAlias:!1,subPixel:!1}).init()}catch{alert(`This example requires WebGL`);return}}catch{alert(`This example requires WebGL`);return}b.register(S,`debugPanel`),I(),v.preload(z,()=>{y.set(y.PLAY,new L),y.change(y.PLAY,!1)})},V=e(),H=x(B),U=()=>(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(H,{}),(0,V.jsxs)(`div`,{style:{position:`absolute`,top:44,left:16,zIndex:1e3,padding:`6px 12px`,fontSize:13,background:`rgba(26, 26, 26, 0.85)`,color:`#e0e0e0`,border:`1px solid #444`,borderRadius:4},children:[`A/D or ←/→ move · W/↑ jump · hold Shift to run · S toggles the debug panel — the pond refracts the scene via `,(0,V.jsx)(`code`,{children:`screen_texture`}),` /`,` `,(0,V.jsx)(`code`,{children:`screen_uv`}),` / `,(0,V.jsx)(`code`,{children:`noise_uv`})]})]});export{U as ExampleWaterOverworld};