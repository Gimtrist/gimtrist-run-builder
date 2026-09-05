import{G as e,Ot as t,bt as n,q as r,t as i,vt as a,wt as o,xt as s}from"./build-BD6P-s9Z.js";import{t as c}from"./utils-uvjv54SH.js";import{t as l}from"./build-C0CIDLqy.js";var u=`/assets/aquarium/`,d={poolWater:{x:1,y:1,w:740,h:494},seabed:{x:1,y:497,w:720,h:480},swim:{x:873,y:228,w:128,h:128}},f=(e,t,n=t.w,r=t.h)=>{let i=document.createElement(`canvas`);return i.width=n,i.height=r,i.getContext(`2d`).drawImage(e,t.x,t.y,t.w,t.h,0,0,n,r),i},p=`
uniform sampler2D uScene;   // captured frame, bound each draw via setTexture
uniform sampler2D uNoise;   // static seamless flow map
uniform float uTime;        // seconds (setTime)
uniform float uStrength;    // ripple strength (slider)

vec4 apply(vec4 color, vec2 uv) {
	vec2 s = vec2(uv.x, 1.0 - uv.y);

	// two noise layers scrolling apart → a living flow field
	vec2 f1 = texture2D(uNoise, s * 1.6 + vec2(uTime * 0.03, uTime * 0.05)).rg;
	vec2 f2 = texture2D(uNoise, s * 2.7 - vec2(uTime * 0.04, uTime * 0.02)).rg;
	vec2 flow = f1 + f2 - 1.0;

	// refract the captured scene at the displaced screen coord
	vec3 scene = texture2D(uScene, clamp(s + flow * uStrength, 0.0, 1.0)).rgb;

	// the water texture (uSampler), gently scrolled, as a wet sheen over it
	vec3 water = texture2D(uSampler, uv * 0.6 + flow * 0.02).rgb;
	vec3 outc = scene * (0.75 + 0.5 * water);

	// caustic sparkle where the flow layers pinch together
	float caustic = pow(max(f1.r * f2.g, 0.0), 3.0) * 1.2;
	outc += vec3(0.10, 0.20, 0.24) * caustic;
	return vec4(outc, 1.0);
}
`,m=`
struct AquariumUniforms {
	uTime : f32,
	uStrength : f32,
};
@group(3) @binding(0) var<uniform> fx : AquariumUniforms;
@group(3) @binding(1) var uScene : texture_2d<f32>;
@group(3) @binding(2) var uSceneSampler : sampler;
@group(3) @binding(3) var uNoise : texture_2d<f32>;
@group(3) @binding(4) var uNoiseSampler : sampler;

fn apply(color : vec4f, uv : vec2f) -> vec4f {
	let s = uv;

	// two noise layers scrolling apart -> a living flow field
	let f1 = textureSample(uNoise, uNoiseSampler, s * 1.6 + vec2f(fx.uTime * 0.03, fx.uTime * 0.05)).rg;
	let f2 = textureSample(uNoise, uNoiseSampler, s * 2.7 - vec2f(fx.uTime * 0.04, fx.uTime * 0.02)).rg;
	let flow = f1 + f2 - vec2f(1.0);

	// refract the captured scene at the displaced screen coord
	let scene = textureSample(uScene, uSceneSampler, clamp(s + flow * fx.uStrength, vec2f(0.0), vec2f(1.0))).rgb;

	// the water texture (the sprite's own), gently scrolled, as a wet sheen
	let water = textureSample(uTexture, uSampler, uv * 0.6 + flow * 0.02).rgb;
	var outc = scene * (vec3f(0.75) + 0.5 * water);

	// caustic sparkle where the flow layers pinch together
	let caustic = pow(max(f1.r * f2.g, 0.0), 3.0) * 1.2;
	outc = outc + vec3f(0.10, 0.20, 0.24) * caustic;
	return vec4f(outc, 1.0);
}
`,h=class extends e{speed;minX;maxX;bobPhase;bobAmp;baseY;constructor(e,t,n,r,i,a){super(e,t,{image:n,framewidth:64,frameheight:64}),this.addAnimation(`swim`,[0,1,2,3],120),this.setCurrentAnimation(`swim`),this.scale(i,i),this.speed=r,this.minX=a.min,this.maxX=a.max,this.baseY=t,this.bobPhase=e*.05,this.bobAmp=5+Math.abs(r)*.15,this.flipX(r>0)}update(e){super.update(e);let t=e/1e3;return this.pos.x+=this.speed*t,this.bobPhase+=t*2,this.pos.y=this.baseY+Math.sin(this.bobPhase)*this.bobAmp,this.pos.x<this.minX?(this.pos.x=this.minX,this.speed=Math.abs(this.speed),this.flipX(!0)):this.pos.x>this.maxX&&(this.pos.x=this.maxX,this.speed=-Math.abs(this.speed),this.flipX(!1)),!0}},g=class extends e{effect;constructor(e,t,n,r){super(e/2,t/2,{image:n,framewidth:e,frameheight:t,anchorPoint:{x:.5,y:.5}}),this.effect=r,this.shader=r}draw(e,t){let n=e.toFrameTexture();this.effect.setTexture(`uScene`,n),super.draw(e,t)}},_=class extends r{elapsed=0;effect;panel;noise;onResetEvent(t){let r=t.viewport.width,i=t.viewport.height,o=a.getImage(`aquariumAtlas`),s=f(o,d.seabed,r,i),c=f(o,d.poolWater,r,i),l=f(o,d.swim),u=new n({width:256,height:256,type:`simplex`,seed:11,frequency:.035,octaves:4,gain:.5,domainWarp:!0,domainWarpAmp:8,seamless:!0});this.noise=u,this.effect=a.getShader(`aquariumWater`),this.effect.setTexture(`uNoise`,u,`repeat`),this.effect.setUniform(`uStrength`,.013);let p=new e(r/2,i/2,{image:s,framewidth:r,frameheight:i,anchorPoint:{x:.5,y:.5}});t.world.addChild(p,0);for(let e=0;e<6;e++){let n=(e%2==0?1:-1)*(34+e%3*20),a=.7+e%3*.25,o=60+e*53%(i-130),s=60+e*101%(r-120);t.world.addChild(new h(s,o,l,n,a,{min:40,max:r-40}),1+e)}t.world.addChild(new g(r,i,c,this.effect),100),this.buildSlider(t)}buildSlider(e){let t=document.createElement(`div`);t.style.cssText=`position:absolute;top:60px;left:16px;z-index:1000;font-family:sans-serif;color:#e8f6fa;background:rgba(0,0,0,0.45);padding:8px 12px;border-radius:6px;`;let n=document.createElement(`div`);n.textContent=`🐟  Water ripple`,n.style.cssText=`font-size:12px;margin-bottom:6px;`;let r=document.createElement(`input`);r.type=`range`,r.min=`0`,r.max=`0.06`,r.step=`0.002`,r.value=`0.013`,r.style.cssText=`width:190px;display:block;`,r.addEventListener(`input`,()=>{this.effect.setUniform(`uStrength`,Number.parseFloat(r.value))});let i=document.createElement(`div`);i.textContent=`the fish are refracted through the captured frame`,i.style.cssText=`font-size:10px;margin-top:6px;opacity:0.7;`,t.appendChild(n),t.appendChild(r),t.appendChild(i);let a=e.renderer.getCanvas().parentElement;a&&(a.style.position=`relative`,a.appendChild(t)),this.panel=t}update(e){return this.elapsed+=e/1e3,this.effect.setTime(this.elapsed),super.update(e),!0}onDestroyEvent(){a.unload({name:`aquariumWater`,type:`shader`}),this.noise?.destroy(),this.noise=void 0,this.panel?.remove()}},v=c(async()=>{await new i(728,410,{parent:`screen`,scale:`auto`,renderer:t.AUTO,antiAlias:!0,subPixel:!0}).init(),s.register(l,`debugPanel`),o.set(o.PLAY,new _),a.preload([{name:`aquariumAtlas`,type:`image`,src:`${u}aquarium.webp`},{name:`aquariumWater`,type:`shader`,data:{glsl:p,wgsl:m}}],()=>{o.change(o.PLAY)},!1)});export{v as ExampleAquarium};