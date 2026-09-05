import{D as e,G as t,Ot as n,bt as r,q as i,t as a,vt as o,wt as s,xt as c}from"./build-BD6P-s9Z.js";import{t as l}from"./utils-uvjv54SH.js";import{t as u}from"./build-C0CIDLqy.js";var d=`
uniform sampler2D uScene;   // captured lit frame, bound each draw via setTexture
uniform sampler2D uNoise;   // seamless flow map
uniform float uTime;
uniform float uStrength;

vec4 apply(vec4 color, vec2 uv) {
	vec2 s = vec2(uv.x, 1.0 - uv.y);
	float n1 = texture2D(uNoise, vec2(s.x * 2.0, s.y * 1.6 - uTime * 0.18)).r;
	float n2 = texture2D(uNoise, vec2(s.x * 3.3 + 0.5, s.y * 2.2 - uTime * 0.11)).r;
	float wob = (n1 + n2 - 1.0) * uStrength * (1.15 - s.y); // stronger near the floor
	vec2 d = clamp(s + vec2(wob, wob * 0.35), 0.0, 1.0);
	return vec4(texture2D(uScene, d).rgb, 1.0);
}
`,f=`
struct HazeUniforms {
	uTime : f32,
	uStrength : f32,
};
@group(3) @binding(0) var<uniform> fx : HazeUniforms;
@group(3) @binding(1) var uScene : texture_2d<f32>;
@group(3) @binding(2) var uSceneSampler : sampler;
@group(3) @binding(3) var uNoise : texture_2d<f32>;
@group(3) @binding(4) var uNoiseSampler : sampler;

fn apply(color : vec4f, uv : vec2f) -> vec4f {
	let s = uv;
	let n1 = textureSample(uNoise, uNoiseSampler, vec2f(s.x * 2.0, s.y * 1.6 + fx.uTime * 0.18)).r;
	let n2 = textureSample(uNoise, uNoiseSampler, vec2f(s.x * 3.3 + 0.5, s.y * 2.2 + fx.uTime * 0.11)).r;
	let wob = (n1 + n2 - 1.0) * fx.uStrength * (0.15 + s.y); // stronger near the floor
	let d = clamp(s + vec2f(wob, wob * 0.35), vec2f(0.0), vec2f(1.0));
	return vec4f(textureSample(uScene, uSceneSampler, d).rgb, 1.0);
}
`,p=(e,t)=>{let n=document.createElement(`canvas`);n.width=e,n.height=e;let r=n.getContext(`2d`);r.fillStyle=`hsl(${t}, 30%, 42%)`,r.fillRect(0,0,e,e);let i=e*.12;return r.fillStyle=`rgba(255,255,255,0.18)`,r.fillRect(i,i,e-2*i,e*.06),r.fillStyle=`rgba(0,0,0,0.25)`,r.fillRect(i,e-i-e*.06,e-2*i,e*.06),r.strokeStyle=`rgba(0,0,0,0.35)`,r.lineWidth=2,r.strokeRect(1,1,e-2,e-2),n},m=class extends t{effect;constructor(e,t,n,r){super(e/2,t/2,{image:n,framewidth:e,frameheight:t,anchorPoint:{x:.5,y:.5}}),this.effect=r,this.shader=r}draw(e,t){let n=e.toFrameTexture();this.effect.setTexture(`uScene`,n),super.draw(e,t)}},h=class extends i{elapsed=0;light;effect;w=0;h=0;noiseTextures=[];onResetEvent(n){this.w=n.viewport.width,this.h=n.viewport.height;let i=this.w,a=this.h;this.ambientLightingColor.setColor(70,74,90);let s=document.createElement(`canvas`);s.width=i,s.height=a;let c=s.getContext(`2d`);c.fillStyle=`#fff`,c.fillRect(0,0,i,a);let l=n.renderer.maxTextures??16,u=Math.min(24,Math.ceil(l/2)+2),d=[],f=[];for(let e=0;e<u;e++){d.push(p(96,e*37%360));let t=new r({width:96,height:96,type:`simplex`,seed:3+e*5,frequency:.06+e%4*.01,octaves:3,asNormalMap:!0,bumpStrength:2.2});this.noiseTextures.push(t),f.push(t.getTexture())}let h=i/6,g=a/4,_=0;for(let e=0;e<4;e++)for(let r=0;r<6;r++){let i=_%u,a=new t(r*h+h/2,e*g+g/2,{image:d[i],normalMap:f[i],framewidth:96,frameheight:96,anchorPoint:{x:.5,y:.5}});a.scale(h/96*.98,g/96*.98),n.world.addChild(a,1),_++}this.light=new e(i/2,a/2,i*.55,i*.55,`#fff2d8`,2.4),this.light.illuminationOnly=!0,n.world.addChild(this.light,2);let v=new r({width:256,height:256,type:`simplex`,seed:99,frequency:.03,octaves:3,seamless:!0});this.noiseTextures.push(v),this.effect=o.getShader(`heatHaze`),this.effect.setTexture(`uNoise`,v,`repeat`),this.effect.setUniform(`uStrength`,.02),n.world.addChild(new m(i,a,s,this.effect),100)}update(e){this.elapsed+=e/1e3;let t=this.elapsed;return this.light.pos.set(this.w*(.5+.34*Math.cos(t*.7)),this.h*(.5+.3*Math.sin(t*.9)),0),this.effect.setTime(this.elapsed),super.update(e),!0}onDestroyEvent(){o.unload({name:`heatHaze`,type:`shader`});for(let e of this.noiseTextures)e.destroy();this.noiseTextures=[]}},g=l(async()=>{await new a(728,410,{parent:`screen`,scale:`auto`,renderer:n.AUTO,antiAlias:!0,subPixel:!0}).init(),c.register(u,`debugPanel`),s.set(s.PLAY,new h),o.preload([{name:`heatHaze`,type:`shader`,data:{glsl:d,wgsl:f}}],()=>{s.change(s.PLAY)},!1)});export{g as ExampleHeatHaze};