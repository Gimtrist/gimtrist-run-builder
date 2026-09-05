const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./trailer-director-Dm1fifkp.js","./palette-B_P6qOgf.js","./editor-scene-DZeplL6I.js","./viewer-scene-9SicLp_g.js"])))=>i.map(i=>d[i]);
import{$ as e,$n as t,$t as n,A as r,Ar as i,B as a,Br as o,Bt as s,C as c,Cr as l,Ct as u,D as d,Dr as f,Dt as p,Et as m,F as h,Fr as g,Ft as _,G as v,Gr as y,Gt as b,H as x,Hr as S,Ht as C,I as w,Ir as T,It as E,J as D,Jr as O,Jt as k,K as A,Kr as j,Kt as ee,L as M,Lr as te,Lt as ne,M as re,Mr as ie,Mt as ae,N as oe,Nr as N,Nt as se,O as ce,Ot as le,P,Pr as F,Pt as I,Q as ue,Qn as de,Qt as fe,R as pe,Rr as me,S as he,Sr as ge,St as _e,T as ve,Tr as ye,Tt as be,U as xe,Ur as Se,Ut as Ce,V as we,Vr as Te,Vt as Ee,W as De,Wr as Oe,Wt as ke,X as Ae,Xt as L,Yr as je,Yt as Me,Z as Ne,Zn as Pe,Zt as R,_ as z,_r as Fe,_t as Ie,a as Le,an as B,ar as Re,at as V,b as H,bn as ze,br as Be,bt as Ve,c as He,cn as Ue,ct as We,d as Ge,dn as Ke,dr as qe,dt as Je,en as Ye,er as Xe,et as Ze,f as Qe,fn as $e,fr as et,ft as tt,g as nt,gn as rt,gr as it,gt as at,h as ot,hr as st,ht as ct,i as lt,in as ut,ir as dt,it as ft,j as pt,jr as mt,jt as ht,k as gt,kr as _t,kt as vt,l as yt,ln as bt,lt as xt,m as St,mn as Ct,mt as wt,n as Tt,nn as Et,nr as Dt,nt as Ot,o as kt,on as At,ot as jt,p as Mt,pn as Nt,pr as U,pt as Pt,q as Ft,qr as It,r as W,rn as Lt,rr as Rt,sn as zt,st as G,t as Bt,tn as Vt,tt as Ht,u as Ut,un as Wt,ur as Gt,ut as Kt,v as qt,vr as Jt,vt as Yt,w as Xt,wr as Zt,wt as Qt,x as $t,xn as en,xr as tn,xt as nn,y as rn,yr as an,yt as on,z as sn,zr as cn,zt as ln}from"./palette-B_P6qOgf.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function un(){return typeof window<`u`&&window.matchMedia(`(pointer: coarse)`).matches||typeof window<`u`&&`ontouchstart`in window}function dn(){return typeof navigator>`u`||!navigator.getGamepads?!1:navigator.getGamepads().some(e=>e?.connected??!1)}function fn(e={}){let t=e.coarse??un(),n=e.padConnected??dn(),r=new Set(t?[`touch`,`camera`]:[`keys`,`mouse`,`camera`]);return n&&r.add(`controller`),r}var pn=[`keys`,`mouse`,`touch`,`camera`,`controller`];function mn(e,t={}){let n=fn(t),r=[];for(let t of pn){if(!n.has(t))continue;let i=e.filter(e=>e.method===t);i.length>0&&r.push({method:t,entries:i})}return r}function hn(e){return typeof window>`u`?()=>void 0:(window.addEventListener(`gamepadconnected`,e),window.addEventListener(`gamepaddisconnected`,e),()=>{window.removeEventListener(`gamepadconnected`,e),window.removeEventListener(`gamepaddisconnected`,e)})}var gn=`vibedgames:game-started`,_n=`vibedgames:pause-game`,vn=`vibedgames:game-paused`,yn=(e,t)=>e instanceof Object&&!Array.isArray(e)&&e.type===t;function bn(e){return yn(e,_n)}var xn={},Sn=!1,Cn=!1,wn=!1,Tn=()=>typeof window<`u`&&window.parent!==window;function En(e){return e instanceof HTMLElement&&(e.tagName===`INPUT`||e.tagName===`TEXTAREA`||e.isContentEditable)}var Dn=e=>{En(e.target)||e.stopPropagation()};function On(e){typeof window>`u`||(e?(window.addEventListener(`keydown`,Dn,!0),window.addEventListener(`keyup`,Dn,!0)):(window.removeEventListener(`keydown`,Dn,!0),window.removeEventListener(`keyup`,Dn,!0)))}function kn(){wn||typeof window>`u`||(wn=!0,window.addEventListener(`message`,e=>{e.source===window.parent&&bn(e.data)&&In()}),window.addEventListener(`keydown`,e=>{e.key!==`Escape`||e.repeat||En(e.target)||(Cn?Ln():Sn&&(xn.escapePauses?.()??!0)&&In())},!0))}function An(){kn(),!(Sn||Cn)&&(Sn=!0,Pn(),Tn()&&window.parent.postMessage({type:gn},`*`))}function jn(){return Sn&&!Cn}var Mn=new Set;function Nn(e){return Mn.add(e),()=>Mn.delete(e)}function Pn(){for(let e of Mn)e()}function Fn(e){kn(),xn=e}function In(){Cn||!Sn||(Cn=!0,Sn=!1,Pn(),On(!0),xn.onPause?.(),Tn()&&window.parent.postMessage({type:vn},`*`))}function Ln(){Cn&&(Cn=!1,Pn(),On(!1),xn.onResume?.(),An())}function Rn(){if(!(`location`in globalThis))return!1;let e=new URLSearchParams(location.search).get(`offline`);return e!==null&&e!==`0`}var zn=[`pointerdown`,`pointermove`,`pointerup`,`pointercancel`,`touchstart`,`touchmove`,`touchend`,`touchcancel`,`mousedown`,`mousemove`,`mouseup`,`click`];function Bn(e,t={}){let n=e=>{e.stopPropagation(),!(e.type!==`touchend`||!e.cancelable)&&((t.keepClick?.(e.target)??!1)||e.preventDefault())};for(let t of zn)e.addEventListener(t,n,{passive:!1});return()=>{for(let t of zn)e.removeEventListener(t,n)}}var Vn=2147483e3;function Hn(){let e=0,t=null,n=()=>{let r=typeof navigator<`u`&&navigator.getGamepads?navigator.getGamepads():[],i=null;for(let e of r)if(e?.connected){i=e;break}let a=i?i.buttons.map(e=>e.pressed):null;if(a&&t){for(let e=0;e<a.length;e++)if(a[e]===!0&&t[e]!==!0){Ln();return}}t=a,e=requestAnimationFrame(n)};return e=requestAnimationFrame(n),()=>cancelAnimationFrame(e)}function Un(e){return e instanceof Element&&e.closest(`button, a, input, select, textarea, [data-pause-keep]`)!==null}function Wn(){return typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function Gn(e){let t=null,n=null,r=t=>{t.key===`Escape`||(e.modalOpen?.()??!1)||Ln()};function i(){if(t)return;if(e.css!==void 0&&e.styleId!==void 0&&!document.getElementById(e.styleId)){let t=document.createElement(`style`);t.id=e.styleId,t.textContent=e.css,document.head.append(t)}t=document.createElement(`div`),e.className!==void 0&&(t.className=e.className),t.setAttribute(`role`,`button`),t.setAttribute(`aria-label`,e.ariaLabel??`Resume game`),t.style.position=`fixed`,t.style.inset=`0`,t.style.zIndex=String(Vn),t.style.cursor=`pointer`,t.style.userSelect=`none`,t.style.setProperty(`-webkit-user-select`,`none`);let i=Wn()?0:e.fadeMs??240;i>0&&(t.style.opacity=`0`,t.style.transition=`opacity ${i}ms ease`),e.render(t),document.body.append(t),Bn(t,{keepClick:Un}),n=Hn(),i>0&&requestAnimationFrame(()=>t?.style.setProperty(`opacity`,`1`)),t.addEventListener(`pointerup`,t=>{(e.modalOpen?.()??!1)||Un(t.target)||Ln()}),window.addEventListener(`keyup`,r,!0)}function a(){window.removeEventListener(`keyup`,r,!0),n?.(),n=null,e.onHide?.();let i=t;if(t=null,!i)return;let a=Wn()?0:e.fadeMs??240;if(a===0){i.remove();return}i.style.pointerEvents=`none`,i.style.opacity=`0`,window.setTimeout(()=>i.remove(),a+40)}return{show:i,hide:a}}var Kn=Vn-10,qn=44,Jn=`
.vg-touch-controls {
  position: fixed;
  top: calc(env(safe-area-inset-top, 0px) + var(--vg-touch-gap, 10px));
  right: calc(env(safe-area-inset-right, 0px) + var(--vg-touch-gap, 10px));
  z-index: ${Kn};
  display: flex;
  gap: var(--vg-touch-gap, 10px);
  /* The cluster is a hole in the game's input surface only where a button
     actually is — everywhere else touches belong to the game. */
  pointer-events: none;
}
.vg-touch-controls button {
  pointer-events: auto;
  width: ${qn}px;
  height: ${qn}px;
  display: grid;
  place-items: center;
  padding: 0;
  font-size: var(--vg-touch-glyph-size, 18px);
  line-height: 1;
  cursor: pointer;
  color: var(--vg-touch-fg, #fff);
  background: var(--vg-touch-bg, rgba(0, 0, 0, 0.45));
  border: var(--vg-touch-border, 1px solid rgba(255, 255, 255, 0.28));
  border-radius: var(--vg-touch-radius, 12px);
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  user-select: none;
}
.vg-touch-controls button:active {
  background: var(--vg-touch-bg-active, rgba(255, 255, 255, 0.22));
}
@media (prefers-reduced-motion: no-preference) {
  .vg-touch-controls button { transition: background 120ms ease; }
}
`;function Yn(e,t){if(document.getElementById(t))return;let n=document.createElement(`style`);n.id=t,n.textContent=e,document.head.append(n)}function Xn(e={}){if(typeof document>`u`||!un())return{sync:()=>void 0,destroy:()=>void 0};Yn(Jn,`vg-touch-controls-css`),e.css&&Yn(e.css,e.styleId??`vg-touch-controls-game-css`);let t=document.createElement(`div`);t.className=`vg-touch-controls${e.className?` ${e.className}`:``}`,t.setAttribute(`data-gamepad-ignore`,``),Bn(t);let n=(e,n,r)=>{let i=document.createElement(`button`);return i.type=`button`,i.textContent=n,i.setAttribute(`aria-label`,e),i.setAttribute(`data-gamepad-ignore`,``),i.addEventListener(`pointerup`,e=>{e.stopPropagation(),e.preventDefault(),r()}),t.append(i),i},r=e.mute,i=null,a=()=>{if(!r||!i)return;let e=r.get();i.textContent=e?`🔇`:`🔊`,i.setAttribute(`aria-label`,e?`Turn sound on`:`Turn sound off`),i.setAttribute(`aria-pressed`,String(e))};r&&(i=n(`Turn sound on`,`🔇`,()=>{r.set(!r.get()),a()}),a());let o=null;if(e.pause!==!1){let e=n(`Pause`,`⏸`,()=>In()),t=()=>{e.hidden=!jn()};t(),o=Nn(t)}return document.body.append(t),Qn(t),{sync:a,destroy:()=>{o?.(),t.remove(),document.documentElement.style.removeProperty(Zn)}}}var Zn=`--vg-touch-reserve`;function Qn(e){let t=()=>{let t=e.getBoundingClientRect().width;t>0&&document.documentElement.style.setProperty(Zn,`${Math.ceil(t)}px`)};t(),requestAnimationFrame(t),window.addEventListener(`resize`,t),window.addEventListener(`orientationchange`,t)}function $n(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function er(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var K={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new k},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new k}},envmap:{envMap:{value:null},envMapRotation:{value:new k},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new k}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new k}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new k},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new k},normalScale:{value:new N(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new k},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new k}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new k}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new k}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0},uvTransform:{value:new k}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new N(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new k},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0}}},tr={basic:{uniforms:j([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:j([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new G(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:j([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:j([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:j([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new G(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:j([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:j([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:j([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:j([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:j([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:j([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new k},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new k}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:j([q.common,q.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:j([q.lights,q.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};tr.physical={uniforms:j([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new k},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new k},clearcoatNormalScale:{value:new N(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new k},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new k},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new k},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new k},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new k},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new k},transmissionSamplerSize:{value:new N},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new k},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new k},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new k},anisotropyVector:{value:new N},anisotropyMap:{value:null},anisotropyMapTransform:{value:new k}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var nr={r:0,b:0,g:0},rr=new Me,ir=new k;ir.set(-1,0,0,0,1,0,0,0,1);function ar(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new L(new Ze(1,1,1),new U({name:`BackgroundCubeMaterial`,uniforms:cn(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(rr.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ir),l.material.toneMapped=We.getTransfer(i.colorSpace)!==qe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new L(new Wt(2,2),new U({name:`BackgroundMaterial`,uniforms:cn(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=We.getTransfer(i.colorSpace)!==qe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(nr,Oe(e)),n.buffers.color.setClear(nr.r,nr.g,nr.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function or(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function sr(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function cr(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(O(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&O(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function lr(e){let t=this,n=null,r=0,i=!1,a=!1,o=new bt,s=new k,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ur=4,dr=[.125,.215,.35,.446,.526,.582],fr=20,pr=256,mr=new zt,hr=new G,gr=null,_r=0,vr=0,yr=!1,br=new F,xr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=br}=i;gr=this._renderer.getRenderTarget(),_r=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Or(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gr,_r,vr),this._renderer.xr.enabled=yr,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gr=this._renderer.getRenderTarget(),_r=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:ae,format:ze,colorSpace:Ce,depthBuffer:!1},r=Cr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cr(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Sr(r)),this._blurMaterial=Er(r,e,t),this._ggxMaterial=Tr(r,e,t)}return r}_compileMaterial(e){let t=new L(new Ot,e);this._renderer.compile(t,mr)}_sceneToCubeUV(e,t,n,r,i){let a=new Ue(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(hr),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new L(new Ze,new R({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(hr),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;wr(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Or()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dr());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;wr(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,mr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ur?n-d+ur:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,wr(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,mr),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,wr(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,mr)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&S(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):fr;m>fr&&O(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);let h=[],g=0;for(let e=0;e<fr;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];wr(t,3*v*(r>_-ur?r-_+ur:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,mr)}};function Sr(e){let t=[],n=[],r=[],i=e,a=e-ur+1+dr.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-ur?s=dr[o-e+ur-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Ot;h.setAttribute(`position`,new Ht(f,3)),h.setAttribute(`uv`,new Ht(p,2)),h.setAttribute(`faceIndex`,new Ht(m,1)),r.push(new L(h,null)),i>ur&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Cr(e,t,n){let r=new te(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function wr(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Tr(e,t,n){return new U({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Er(e,t,n){let r=new Float32Array(fr),i=new F(0,1,0);return new U({name:`SphericalGaussianBlur`,defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dr(){return new U({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Or(){return new U({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function kr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ar=class extends te{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new tt(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ze(5,5,5),i=new U({name:`CubemapFromEquirect`,uniforms:cn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new L(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new Kt(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function jr(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ar(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new xr(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new xr(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Mr(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&je(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Nr(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function u(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?l:ge)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function d(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&u(e)}else u(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:d}}function Pr(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Fr(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:S(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ir(e,t,n){let r=new WeakMap,i=new g;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,h=1;p>t.maxTextureSize&&(h=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*h*4*u),_=new ct(g,p,h,u);_.type=m,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*h*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new N(p,h)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Lr(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Rr={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function zr(e,n,r,i,a,o){let s=new te(n,r,{type:e,depthBuffer:a,stencilBuffer:o,samples:i?4:0,depthTexture:a?new on(n,r):void 0}),c=new te(n,r,{type:ae,depthBuffer:!1,stencilBuffer:!1}),l=new Ot;l.setAttribute(`position`,new be([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new be([0,2,0,0,2,0],2));let u=new t({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new L(l,u),f=new zt(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){s.setSize(e,t),c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=s.width,n=s.height;for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(s.width!==e||s.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(s),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=s,r=c;for(let i=0;i<v.length;i++){let a=v[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},We.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Rr[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),c.dispose(),l.dispose(),u.dispose()}}var Br=new an,Vr=new on(1,1),Hr=new ct,Ur=new wt,Wr=new tt,Gr=[],Kr=[],qr=new Float32Array(16),Jr=new Float32Array(9),Yr=new Float32Array(4);function Xr(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Gr[i];if(a===void 0&&(a=new Float32Array(i),Gr[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Zr(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Qr(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function $r(e,t){let n=Kr[t];n===void 0&&(n=new Int32Array(t),Kr[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ei(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ti(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zr(n,t))return;e.uniform2fv(this.addr,t),Qr(n,t)}}function ni(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Zr(n,t))return;e.uniform3fv(this.addr,t),Qr(n,t)}}function ri(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zr(n,t))return;e.uniform4fv(this.addr,t),Qr(n,t)}}function ii(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zr(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qr(n,t)}else{if(Zr(n,r))return;Yr.set(r),e.uniformMatrix2fv(this.addr,!1,Yr),Qr(n,r)}}function ai(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zr(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qr(n,t)}else{if(Zr(n,r))return;Jr.set(r),e.uniformMatrix3fv(this.addr,!1,Jr),Qr(n,r)}}function oi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zr(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qr(n,t)}else{if(Zr(n,r))return;qr.set(r),e.uniformMatrix4fv(this.addr,!1,qr),Qr(n,r)}}function si(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ci(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zr(n,t))return;e.uniform2iv(this.addr,t),Qr(n,t)}}function li(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Zr(n,t))return;e.uniform3iv(this.addr,t),Qr(n,t)}}function ui(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zr(n,t))return;e.uniform4iv(this.addr,t),Qr(n,t)}}function di(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function fi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zr(n,t))return;e.uniform2uiv(this.addr,t),Qr(n,t)}}function pi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Zr(n,t))return;e.uniform3uiv(this.addr,t),Qr(n,t)}}function mi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zr(n,t))return;e.uniform4uiv(this.addr,t),Qr(n,t)}}function hi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Vr.compareFunction=n.isReversedDepthBuffer()?518:515,a=Vr):a=Br,n.setTexture2D(t||a,i)}function gi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ur,i)}function _i(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Wr,i)}function vi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Hr,i)}function yi(e){switch(e){case 5126:return ei;case 35664:return ti;case 35665:return ni;case 35666:return ri;case 35674:return ii;case 35675:return ai;case 35676:return oi;case 5124:case 35670:return si;case 35667:case 35671:return ci;case 35668:case 35672:return li;case 35669:case 35673:return ui;case 5125:return di;case 36294:return fi;case 36295:return pi;case 36296:return mi;case 35678:case 36198:case 36298:case 36306:case 35682:return hi;case 35679:case 36299:case 36307:return gi;case 35680:case 36300:case 36308:case 36293:return _i;case 36289:case 36303:case 36311:case 36292:return vi}}function bi(e,t){e.uniform1fv(this.addr,t)}function xi(e,t){let n=Xr(t,this.size,2);e.uniform2fv(this.addr,n)}function Si(e,t){let n=Xr(t,this.size,3);e.uniform3fv(this.addr,n)}function Ci(e,t){let n=Xr(t,this.size,4);e.uniform4fv(this.addr,n)}function wi(e,t){let n=Xr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ti(e,t){let n=Xr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ei(e,t){let n=Xr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Di(e,t){e.uniform1iv(this.addr,t)}function Oi(e,t){e.uniform2iv(this.addr,t)}function ki(e,t){e.uniform3iv(this.addr,t)}function Ai(e,t){e.uniform4iv(this.addr,t)}function ji(e,t){e.uniform1uiv(this.addr,t)}function Mi(e,t){e.uniform2uiv(this.addr,t)}function Ni(e,t){e.uniform3uiv(this.addr,t)}function Pi(e,t){e.uniform4uiv(this.addr,t)}function Fi(e,t,n){let r=this.cache,i=t.length,a=$r(n,i);Zr(r,a)||(e.uniform1iv(this.addr,a),Qr(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Vr:Br;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ii(e,t,n){let r=this.cache,i=t.length,a=$r(n,i);Zr(r,a)||(e.uniform1iv(this.addr,a),Qr(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ur,a[e])}function Li(e,t,n){let r=this.cache,i=t.length,a=$r(n,i);Zr(r,a)||(e.uniform1iv(this.addr,a),Qr(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Wr,a[e])}function Ri(e,t,n){let r=this.cache,i=t.length,a=$r(n,i);Zr(r,a)||(e.uniform1iv(this.addr,a),Qr(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Hr,a[e])}function zi(e){switch(e){case 5126:return bi;case 35664:return xi;case 35665:return Si;case 35666:return Ci;case 35674:return wi;case 35675:return Ti;case 35676:return Ei;case 5124:case 35670:return Di;case 35667:case 35671:return Oi;case 35668:case 35672:return ki;case 35669:case 35673:return Ai;case 5125:return ji;case 36294:return Mi;case 36295:return Ni;case 36296:return Pi;case 35678:case 36198:case 36298:case 36306:case 35682:return Fi;case 35679:case 36299:case 36307:return Ii;case 35680:case 36300:case 36308:case 36293:return Li;case 36289:case 36303:case 36311:case 36292:return Ri}}var Bi=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yi(t.type)}},Vi=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zi(t.type)}},Hi=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ui=/(\w+)(\])?(\[|\.)?/g;function Wi(e,t){e.seq.push(t),e.map[t.id]=t}function Gi(e,t,n){let r=e.name,i=r.length;for(Ui.lastIndex=0;;){let a=Ui.exec(r),o=Ui.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Wi(n,l===void 0?new Bi(s,e,t):new Vi(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Hi(s),Wi(n,e)),n=e}}}var Ki=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Gi(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function qi(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ji=37297,Yi=0;function Xi(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Zi=new k;function Qi(e){We._getMatrix(Zi,We.workingColorSpace,e);let t=`mat3( ${Zi.elements.map(e=>e.toFixed(4))} )`;switch(We.getTransfer(e)){case ke:return[t,`LinearTransferOETF`];case qe:return[t,`sRGBTransferOETF`];default:return O(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function $i(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Xi(e.getShaderSource(t),r)}return i}function ea(e,t){let n=Qi(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ta={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function na(e,t){let n=ta[t];return n===void 0?(O(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ra=new F;function ia(){return We.getLuminanceCoefficients(ra),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ra.x.toFixed(4)}, ${ra.y.toFixed(4)}, ${ra.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function aa(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ca).join(`
`)}function oa(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function sa(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ca(e){return e!==``}function la(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ua(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var da=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(e){return e.replace(da,ma)}var pa=new Map;function ma(e,t){let n=K[t];if(n===void 0){let e=pa.get(t);if(e!==void 0)n=K[e],O(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return fa(n)}var ha=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ga(e){return e.replace(ha,_a)}function _a(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function va(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var ya={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ba(e){return ya[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var xa={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Sa(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:xa[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Ca={302:`ENVMAP_MODE_REFRACTION`};function wa(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ca[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ta={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ea(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ta[e.combine]||`ENVMAP_BLENDING_NONE`}function Da(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Oa(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ba(n),l=Sa(n),u=wa(n),d=Ea(n),f=Da(n),p=aa(n),m=oa(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ca).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ca).join(`
`),_.length>0&&(_+=`
`)):(g=[va(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ca).join(`
`),_=[va(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:na(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,ea(`linearToOutputTexel`,n.outputColorSpace),ia(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ca).join(`
`)),o=fa(o),o=la(o,n),o=ua(o,n),s=fa(s),s=la(s,n),s=ua(s,n),o=ga(o),s=ga(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=qi(i,i.VERTEX_SHADER,y),C=qi(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,C),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(C)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,C);else{let e=$i(i,x,`vertex`),n=$i(i,C,`fragment`);S(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):O(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(C),T=new Ki(i,h),E=sa(i,h)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(h,Ji)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Yi++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=C,this}var ka=0,Aa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ja(e),t.set(e,n)),n}},ja=class{constructor(e){this.id=ka++,this.code=e,this.usedTimes=0}};function Ma(e){return e===1030||e===37490||e===36285}function Na(e,t,n,r,i,a){let o=new ln,s=new Aa,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&O(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,k,A,j;if(C){let e=tr[C];D=e.vertexShader,k=e.fragmentShader}else{D=i.vertexShader,k=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),A=e.id,j=t.id}let ee=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),te=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,re=!!i.map,ie=!!i.matcap,ae=!!x,oe=!!i.aoMap,N=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,P=!!i.emissiveMap,F=!!i.metalnessMap,I=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.dispersion>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=ue&&!!i.anisotropyMap,_e=de&&!!i.clearcoatMap,ve=de&&!!i.clearcoatNormalMap,ye=de&&!!i.clearcoatRoughnessMap,be=pe&&!!i.iridescenceMap,xe=pe&&!!i.iridescenceThicknessMap,Se=me&&!!i.sheenColorMap,Ce=me&&!!i.sheenRoughnessMap,we=!!i.specularMap,Te=!!i.specularColorMap,Ee=!!i.specularIntensityMap,De=he&&!!i.transmissionMap,Oe=he&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,L=i.alphaTest>0,je=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let Pe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:k,defines:i.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:te,instancingColor:te&&h.instanceColor!==null,instancingMorph:te&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:N,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:P,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&Ma(i.normalMap.format),metalnessMap:F,roughnessMap:I,anisotropy:ue,anisotropyMap:ge,clearcoat:de,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:he,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:L,alphaHash:je,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:N&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:P&&m(i.emissiveMap.channel),metalnessMapUv:F&&m(i.metalnessMap.channel),roughnessMapUv:I&&m(i.roughnessMap.channel),anisotropyMapUv:ge&&m(i.anisotropyMap.channel),clearcoatMapUv:_e&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(i.sheenRoughnessMap.channel),specularMapUv:we&&m(i.specularMap.channel),specularColorMapUv:Te&&m(i.specularColorMap.channel),specularIntensityMapUv:Ee&&m(i.specularIntensityMap.channel),transmissionMapUv:De&&m(i.transmissionMap.channel),thicknessMapUv:Oe&&m(i.thicknessMap.channel),alphaMapUv:Ae&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||ue),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||Ae),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&We.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:P&&i.emissiveMap.isVideoTexture===!0&&We.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=tr[t];n=Zt.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Oa(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Pa(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Fa(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ia(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function La(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Fa),r.length>1&&r.sort(t||Ia),i.length>1&&i.sort(t||Ia),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ra(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new La,e.set(t,[i])):n>=r.length?(i=new La,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function za(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new F,color:new G};break;case`SpotLight`:n={position:new F,direction:new F,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new F,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new F,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new F,halfWidth:new F,halfHeight:new F}}return e[t.id]=n,n}}}function Ba(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new N};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new N};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new N,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Va=0;function Ha(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ua(e){let t=new za,n=Ba(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new F);let i=new F,a=new Me,o=new Me;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Ha);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Va++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Wa(e){let t=new Ua(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ga(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Wa(e),t.set(n,[a])):r>=i.length?(a=new Wa(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ka=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qa=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ja=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Ya=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Xa=new Me,Za=new F,Qa=new F;function $a(e,t,r){let i=new vt,a=new N,o=new N,c=new g,l=new fe,u=new n,d={},f=r.maxTextureSize,p={0:1,1:0,2:2},h=new U({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new N},radius:{value:4}},vertexShader:Ka,fragmentShader:qa}),_=h.clone();_.defines.HORIZONTAL_PASS=1;let v=new Ot;v.setAttribute(`position`,new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new L(v,h),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let x=this.type;this.render=function(t,n,r){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||t.length===0)return;this.type===2&&(O(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let h=x!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],d=u.shadow;if(d===void 0){O(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;a.copy(d.mapSize);let g=d.getFrameExtents();a.multiply(g),o.copy(d.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/g.x),a.x=o.x*g.x,d.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/g.y),a.y=o.y*g.y,d.mapSize.y=o.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||h===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(u.isPointLight){O(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new te(a.x,a.y,{format:Pe,type:ae,minFilter:s,magFilter:s,generateMipmaps:!1}),d.map.texture.name=u.name+`.shadowMap`,d.map.depthTexture=new on(a.x,a.y,m),d.map.depthTexture.name=u.name+`.shadowMapDepth`,d.map.depthTexture.format=Ie,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Lt,d.map.depthTexture.magFilter=Lt}else u.isPointLight?(d.map=new Ar(a.x),d.map.depthTexture=new Je(a.x,_t)):(d.map=new te(a.x,a.y),d.map.depthTexture=new on(a.x,a.y,_t)),d.map.depthTexture.name=u.name+`.shadowMap`,d.map.depthTexture.format=Ie,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=s,d.map.depthTexture.magFilter=s):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Lt,d.map.depthTexture.magFilter=Lt);d.camera.updateProjectionMatrix()}let v=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<v;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),p.viewport(c)}if(u.isPointLight){let e=d.camera,n=d.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Za.setFromMatrixPosition(u.matrixWorld),e.position.copy(Za),Qa.copy(e.position),Qa.add(Ja[t]),e.up.copy(Ya[t]),e.lookAt(Qa),e.updateMatrixWorld(),n.makeTranslation(-Za.x,-Za.y,-Za.z),Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Xa,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(u);i=d.getFrustum(),w(n,r,d.camera,u,this.type)}d.isPointLightShadow!==!0&&this.type===3&&S(d,r),d.needsUpdate=!1}x=this.type,b.needsUpdate=!1,e.setRenderTarget(l,u,d)};function S(n,r){let i=t.update(y);h.defines.VSM_SAMPLES!==n.blurSamples&&(h.defines.VSM_SAMPLES=n.blurSamples,_.defines.VSM_SAMPLES=n.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new te(a.x,a.y,{format:Pe,type:ae})),h.uniforms.shadow_pass.value=n.map.depthTexture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,h,y,null),_.uniforms.shadow_pass.value=n.mapPass.texture,_.uniforms.resolution.value=n.mapSize,_.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,_,y,null)}function C(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,T)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function w(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=C(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=C(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)w(c[e],r,a,o,s)}function T(e){e.target.removeEventListener(`dispose`,T);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function eo(e,t){function n(){let t=!1,n=new g,r=null,i=new g(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=dt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,_=!1,v=null,y=null,b=null,x=null,C=null,w=null,T=null,E=new G(0,0,0),D=0,O=!1,k=null,A=null,j=null,ee=null,M=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,re=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),ne=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),ne=re>=1);let ae=null,oe={},N=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new g().fromArray(N),le=new g().fromArray(se);function P(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let F={};F[e.TEXTURE_2D]=P(e.TEXTURE_2D,e.TEXTURE_2D,1),F[e.TEXTURE_CUBE_MAP]=P(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[e.TEXTURE_2D_ARRAY]=P(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),F[e.TEXTURE_3D]=P(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),I(e.CULL_FACE),ge(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0){_===!0&&(ue(e.BLEND),_=!1);return}if(_===!1&&(I(e.BLEND),_=!0),t!==5){if(t!==v||u!==O){if((y!==100||C!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,C=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:S(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:S(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:S(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:S(`WebGLState: Invalid blending: `,t)}b=null,x=null,w=null,T=null,E.set(0,0,0),D=0,v=t,O=u}return}a||=n,o||=r,s||=i,(n!==y||a!==C)&&(e.blendEquationSeparate(me[n],me[a]),y=n,C=a),(r!==b||i!==x||o!==w||s!==T)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),b=r,x=i,w=o,T=s),(c.equals(E)===!1||l!==D)&&(e.blendColor(c.r,c.g,c.b,l),E.copy(c),D=l),v=t,O=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){k!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),k=t)}function ye(t){t===0?ue(e.CULL_FACE):(I(e.CULL_FACE),t!==A&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),A=t}function be(t){t!==j&&(ne&&e.lineWidth(t),j=t)}function xe(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(ee!==n||M!==r)&&(ee=n,M=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?I(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+te-1),ae!==t&&(e.activeTexture(t),ae=t)}function we(t,n,r){r===void 0&&(r=ae===null?e.TEXTURE0+te-1:ae);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(ae!==r&&(e.activeTexture(r),ae=r),e.bindTexture(t,n||F[t]),i.type=t,i.texture=n)}function Te(){let t=oe[ae];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){S(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){S(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){S(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){S(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){S(`WebGLState:`,e)}}function L(){try{e.compressedTexSubImage3D(...arguments)}catch(e){S(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){S(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){S(`WebGLState:`,e)}}function Ne(){try{e.texImage2D(...arguments)}catch(e){S(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){S(`WebGLState:`,e)}}function R(t){return d[t]===void 0?e.getParameter(t):d[t]}function z(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Fe(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function Ie(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Le(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function B(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ae=null,oe={},f={},p=new WeakMap,m=[],h=null,_=!1,v=null,y=null,b=null,x=null,C=null,w=null,T=null,E=new G(0,0,0),D=0,O=!1,k=null,A=null,j=null,ee=null,M=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:Ne,texImage3D:Pe,pixelStorei:z,getParameter:R,updateUBOMapping:Le,uniformBlockBinding:B,texStorage2D:je,texStorage3D:Me,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:L,scissor:Fe,viewport:Ie,reset:Re}}function to(e,t,n,r,i,a,o){let c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new N,d=new WeakMap,f=new Set,p,m=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function g(e,t){return h?new OffscreenCanvas(e,t):Te(`canvas`)}function _(e,t,n){let r=1,i=Me(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);p===void 0&&(p=g(n,a));let o=t?g(n,a):p;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),O(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&O(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function v(e){return e.generateMipmaps}function y(t){e.generateMipmap(t)}function b(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];O(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||O(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?ke:We.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function w(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,O(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function T(e,t){return v(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),k(t),t.isVideoTexture&&d.delete(t),t.isHTMLTexture&&f.delete(t)}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),j(t)}function k(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=m.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&A(e),Object.keys(i).length===0&&m.delete(n)}r.remove(e)}function A(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=m.get(i);delete a[n.__cacheKey],o.memory.textures--}function j(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ee=0;function M(){ee=0}function te(){return ee}function ne(e){ee=e}function re(){let e=ee;return e>=i.maxTextures&&O(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),ee+=1,e}function ie(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ae(t,i){let a=r.get(t);if(t.isVideoTexture&&L(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)O(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)O(`WebGLRenderer: Texture marked for update but image is incomplete`);else{pe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function oe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){pe(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){pe(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){me(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let le={[Rt]:e.REPEAT,[jt]:e.CLAMP_TO_EDGE,[Et]:e.MIRRORED_REPEAT},P={[Lt]:e.NEAREST,[B]:e.NEAREST_MIPMAP_NEAREST,[ut]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[C]:e.LINEAR_MIPMAP_NEAREST,[Ee]:e.LINEAR_MIPMAP_LINEAR},F={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function I(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&O(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,le[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,le[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,le[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,P[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,P[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,F[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ue(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,E));let i=n.source,a=m.get(i);a===void 0&&(a={},m.set(i,a));let s=ie(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&A(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function de(e,t,n){return Math.floor(Math.floor(e/n)/t)}function fe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=de(n.start,r.width,4),c=de(t.start,r.width,4);n.start<=i+1&&a===c&&de(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function pe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ue(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=We.getPrimaries(We.workingColorSpace),r=o.colorSpace===``?null:We.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=_(o.image,!1,i.maxTextureSize);t=je(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=x(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);I(c,o);let h,g=o.mipmaps,b=o.isVideoTexture!==!0,S=d.__version===void 0||l===!0,C=u.dataReady,E=T(o,t);if(o.isDepthTexture)m=w(o.format===Yt,o.type),S&&(b?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){b&&S&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],b?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else b?(S&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),C&&fe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){b&&S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(b){if(C){if(o.layerUpdates.size>0){let t=Se(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else O(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else b?C&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data)}else{b&&S&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?b?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?O(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):b?C&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(b){if(S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),C){if(o.layerUpdates.size>0){let i=Se(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)b?(S&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),C&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(S){if(b)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),f.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of f)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(b&&S){let t=Me(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],b?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(b){if(S){let r=Me(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}C&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);v(o)&&y(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function me(t,o,s){if(o.image.length!==6)return;let c=ue(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=We.getPrimaries(We.workingColorSpace),r=o.colorSpace===``?null:We.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=_(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=je(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),b=a.convert(o.type),S=x(o.internalFormat,g,b,o.normalized,o.colorSpace),C=o.isVideoTexture!==!0,w=u.__version===void 0||c===!0,E=l.dataReady,D=T(o,h);I(e.TEXTURE_CUBE_MAP,o);let k;if(f){C&&w&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,g,b,i.data):g===null?O(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):C?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,C&&w){k.length>0&&D++;let t=Me(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,t.width,t.height)}for(let t=0;t<6;t++)if(p){C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,b,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,m[t].width,m[t].height,0,g,b,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,i.width,i.height,0,g,b,i.data)}}else{C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,b,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,g,b,m[t]);for(let r=0;r<k.length;r++){let i=k[r];C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,b,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,g,b,i.image[t])}}}v(o)&&y(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,i,o,s,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=x(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ae(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,h.__webglTexture,0,Oe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=w(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ae(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],s=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=x(o.internalFormat,s,l,o.normalized,o.colorSpace);Ae(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function _e(t,i,o){let s=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),s){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,E)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),I(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ae(i.depthTexture,0);let u=l.__webglTexture,d=Oe(i),f=s?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ae(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ae(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ve(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)_e(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?_e(i.__webglFramebuffer[0],t,0):_e(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ge(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ge(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,i){let a=r.get(t);n!==void 0&&he(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ve(t)}function be(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,D);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ae(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=x(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Oe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ge(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),I(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)he(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else he(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);v(i)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),I(c,a),he(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),v(a)&&y(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),I(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)he(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else he(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);v(i)&&y(r),n.unbindTexture()}t.depthBuffer&&ve(t)}function xe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(v(a)){let t=b(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),y(t),n.unbindTexture()}}}let Ce=[],we=[];function De(t){if(t.samples>0){if(Ae(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(Ce.length=0,we.length=0,Ce.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Ce.push(c),we.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,we)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Oe(e){return Math.min(i.maxSamples,e.samples)}function Ae(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function L(e){let t=o.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function je(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(We.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&O(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):S(`WebGLTextures: Unsupported texture color space:`,n)),t}function Me(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=re,this.resetTextureUnits=M,this.getTextureUnits=te,this.setTextureUnits=ne,this.setTexture2D=ae,this.setTexture2DArray=oe,this.setTexture3D=se,this.setTextureCube=ce,this.rebindTextures=ye,this.setupRenderTarget=be,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function no(e,t){function n(n,r=``){let i,a=We.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ro=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,io=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ao=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qt(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new U({vertexShader:ro,fragmentShader:io,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new L(new Wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oo=class extends u{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new ao,v={},y=t.getContextAttributes(),b=null,x=null,S=[],C=[],w=new N,T=null,E=new Ue;E.viewport=new g;let D=new Ue;D.viewport=new g;let k=[E,D],A=new ue,j=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new me,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new me,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new me,S[e]=t),t.getHandSpace()};function M(e){let t=C.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,M),r.removeEventListener(`selectstart`,M),r.removeEventListener(`selectend`,M),r.removeEventListener(`squeeze`,M),r.removeEventListener(`squeezestart`,M),r.removeEventListener(`squeezeend`,M),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<S.length;e++){let t=C[e];t!==null&&(C[e]=null,S[e].disconnect(t))}j=null,ee=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(b),p=null,d=null,u=null,r=null,x=null,I.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&O(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&O(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?p:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,M),r.addEventListener(`selectstart`,M),r.addEventListener(`selectend`,M),r.addEventListener(`squeeze`,M),r.addEventListener(`squeezestart`,M),r.addEventListener(`squeezeend`,M),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),y.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?Yt:Ie,a=y.stencil?f:_t);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new te(d.textureWidth,d.textureHeight,{format:ze,type:ye,depthTexture:new on(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new te(p.framebufferWidth,p.framebufferHeight,{format:ze,type:ye,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),I.setContext(r),I.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=C.indexOf(n);r>=0&&(C[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=C.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=C.length){C.push(n),r=e;break}else if(C[e]===null){C[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}let ie=new F,ae=new F;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=D.near=E.near=t,A.far=D.far=E.far=n,(j!==A.near||ee!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),j=A.near,ee=A.far),A.layers.mask=e.layers.mask|6,E.layers.mask=A.layers.mask&-5,D.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;se(A,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?oe(A,E,D):A.projectionMatrix.copy(E.projectionMatrix),ce(e,A,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||p!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let le=null;function P(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=k[n];o===void 0&&(o=new Ue,o.layers.enable(n),o.viewport=new g,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Qt,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=C[e],n=S[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let I=new $n;I.setAnimationLoop(P),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},so=new Me,co=new k;co.set(-1,0,0,0,1,0,0,0,1);function lo(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Oe(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(so.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(co),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function uo(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return S(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?O(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):O(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var fo=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),po=null;function mo(){return po===null&&(po=new at(fo,16,16,Pe,ae),po.name=`DFG_LUT`,po.minFilter=s,po.magFilter=s,po.wrapS=jt,po.wrapT=jt,po.generateMipmaps=!1,po.needsUpdate=!0),po}var ho=class{constructor(e={}){let{canvas:t=o(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:h=ye}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=s;let v=h,b=new Set([en,de,Dt]),x=new Set([ye,_t,ie,f,i,mt]),C=new Uint32Array(4),w=new Int32Array(4),E=new F,D=null,k=null,A=[],j=[],ee=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,ne=!1,re=null,oe=null,N=null,se=null;this._outputColorSpace=Gt;let ce=0,le=0,P=null,I=-1,ue=null,fe=new g,pe=new g,me=null,he=new G(0),ge=0,_e=t.width,ve=t.height,be=1,xe=null,Se=null,Ce=new g(0,0,_e,ve),we=new g(0,0,_e,ve),Te=!1,De=new vt,Oe=!1,ke=!1,Ae=new Me,L=new F,je=new g,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function R(){return P===null?be:1}let z=n;function Fe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),z===null){let t=`webgl2`;if(z=Fe(t,e),z===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw S(`WebGLRenderer: `+e.message),e}let Ie,Le,B,Re,V,H,ze,Be,Ve,He,Ue,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt;function rt(){Ie=new Mr(z),Ie.init(),et=new no(z,Ie),Le=new cr(z,Ie,e,et),B=new eo(z,Ie),Le.reversedDepthBuffer&&m&&B.buffers.depth.setReversed(!0),oe=z.createFramebuffer(),N=z.createFramebuffer(),se=z.createFramebuffer(),Re=new Fr(z),V=new Pa,H=new to(z,Ie,B,V,Le,et,Re),ze=new jr(M),Be=new er(z),tt=new or(z,Be),Ve=new Nr(z,Be,Re,tt),He=new Lr(z,Ve,Be,tt,Re),Ze=new Ir(z,Le,H),Je=new lr(V),Ue=new Na(M,ze,Ie,Le,tt,Je),Ge=new lo(M,V),Ke=new Ra,qe=new Ga(Ie),Xe=new ar(M,ze,B,He,_,l),Ye=new $a(M,He,Le),nt=new uo(z,Re,Le,B),Qe=new sr(z,Ie,Re),$e=new Pr(z,Ie,Re),Re.programs=Ue.programs,M.capabilities=Le,M.extensions=Ie,M.properties=V,M.renderLists=Ke,M.shadowMap=Ye,M.state=B,M.info=Re}rt(),v!==1009&&(ee=new zr(v,t.width,t.height,c,r,a));let it=new oo(M,z);this.xr=it,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){if(it.isPresenting){O(`WebGLRenderer: Can't change size while VR device is presenting.`);return}_e=e,ve=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ee!==null&&ee.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(_e*be,ve*be).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(v===1009){S(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){O(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ee.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),B.viewport(fe.copy(Ce).multiplyScalar(be).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),B.scissor(pe.copy(we).multiplyScalar(be).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){B.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=b.has(t)}if(e){let e=P.texture.type,t=x.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(C[0]=i,C[1]=a,C[2]=o,C[3]=r,z.clearBufferuiv(z.COLOR,0,C)):(w[0]=i,w[1]=a,w[2]=o,w[3]=r,z.clearBufferiv(z.COLOR,0,w))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),re=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Xe.dispose(),Ke.dispose(),qe.dispose(),V.dispose(),ze.dispose(),He.dispose(),tt.dispose(),nt.dispose(),Ue.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,ht),it.removeEventListener(`sessionend`,gt),yt.stop()};function at(e){e.preventDefault(),y(`WebGLRenderer: Context Lost.`),ne=!0}function ot(){y(`WebGLRenderer: Context Restored.`),ne=!1;let e=Re.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;rt(),Re.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function st(e){S(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),V.remove(e)}function ut(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=Be.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*R()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*R()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,n),e.side=0,e.needsUpdate=!0,Tt(e,t,n),e.side=2):Tt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),k=qe.get(n),k.init(t),j.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];dt(a,n,e),r.add(a)}else dt(t,n,e),r.add(t)}}),k=j.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){V.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function ht(){yt.stop()}function gt(){yt.start()}let yt=new $n;yt.setAnimationLoop(pt),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){ft=e,it.setAnimationLoop(e),e===null?yt.stop():yt.start()},it.addEventListener(`sessionstart`,ht),it.addEventListener(`sessionend`,gt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){S(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;re!==null&&re.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=ee!==null&&(P===null||n)&&ee.begin(M,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,P),k=qe.get(e,j.length),k.init(t),k.state.textureUnits=H.getTextureUnits(),j.push(k),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,T,t.reversedDepth),ke=this.localClippingEnabled,Oe=Je.init(this.clippingPlanes,ke),D=Ke.get(e,A.length),D.init(),A.push(D),it.enabled===!0&&it.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,M.sortObjects)}bt(e,t,0,M.sortObjects),D.finish(),M.sortObjects===!0&&D.sort(xe,Se,t.reversedDepth),Pe=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Pe&&Xe.addToRenderList(D,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Je.beginShadows();let i=k.state.shadowsArray;if(Ye.render(i,e,t),Oe===!0&&Je.endShadows(),(r&&ee.hasRenderPass())===!1){let n=D.opaque,r=D.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Pe&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(D,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Pe&&Xe.render(e),xt(D,e,t)}P!==null&&le===0&&(H.updateMultisampleRenderTarget(P),H.updateRenderTargetMipmap(P)),r&&ee.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),tt.resetDefaultState(),I=-1,ue=null,j.pop(),j.length>0?(k=j[j.length-1],H.setTextureUnits(k.state.textureUnits),Oe===!0&&Je.setGlobalState(M.clippingPlanes,k.state.camera)):k=null,A.pop(),D=A.length>0?A[A.length-1]:null,re!==null&&re.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||De.intersectsSprite(e)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let t=He.update(e),i=e.material;i.visible&&D.push(e,t,i,n,je.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||De.intersectsObject(e))){let t=He.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),je.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&D.push(e,t,s,n,je.z,o)}}else i.visible&&D.push(e,t,i,n,je.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Oe===!0&&Je.setGlobalState(M.clippingPlanes,n),r&&B.viewport(fe.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new te(1,1,{generateMipmaps:!0,type:e?ae:ye,minFilter:Ee,samples:Math.max(4,Le.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}let i=k.state.transmissionRenderTarget[r.id],o=r.viewport||fe;i.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),c=M.getActiveCubeFace(),l=M.getActiveMipmapLevel();M.setRenderTarget(i),M.getClearColor(he),ge=M.getClearAlpha(),ge<1&&M.setClearColor(16777215,.5),M.clear(),Pe&&Xe.render(n);let u=M.toneMapping;M.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Oe===!0&&Je.setGlobalState(M.clippingPlanes,r),Ct(e,n,r),H.updateMultisampleRenderTarget(i),H.updateRenderTargetMipmap(i),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(H.updateMultisampleRenderTarget(i),H.updateRenderTargetMipmap(i))}M.setRenderTarget(s,c,l),M.setClearColor(he,ge),d!==void 0&&(r.viewport=d),M.toneMapping=u}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=Ne);let r=V.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=Ue.getUniforms(e),re!==null&&e.isNodeMaterial&&re.build(e,n,s),e.onBeforeCompile(s,M),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Ot(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ki.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];E.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(E))return n}return null}function At(e,t,n,r,i){t.isScene!==!0&&(t=Ne),H.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:We.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),y=k.state.lights;if(Oe===!0&&(ke===!0||e!==ue)){let t=e===ue&&r.id===I;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),re&&r.isNodeMaterial&&re.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(B.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==I&&(I=r.id,C=!0),v.needsLights){let e=kt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ue!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(z,`projectionMatrix`,e.projectionMatrix),T.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(z,L.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&T.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,H),y.state.spotShadowMap.length>0&&T.setValue(z,`spotShadowMap`,y.state.spotShadowMap,H),y.state.pointShadowMap.length>0&&T.setValue(z,`pointShadowMap`,y.state.pointShadowMap,H)),i.isSkinnedMesh){T.setOptional(z,i,`bindMatrix`),T.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(z,`boneTexture`,e.boneTexture,H))}i.isBatchedMesh&&(T.setOptional(z,i,`batchingTexture`),T.setValue(z,`batchingTexture`,i._matricesTexture,H),T.setOptional(z,i,`batchingIdTexture`),T.setValue(z,`batchingIdTexture`,i._indirectTexture,H),T.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(z,`batchingColorTexture`,i._colorsTexture,H));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ze.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=mo()),C){if(T.setValue(z,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&jt(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,be,ve,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Ki.upload(z,Et(v),E,H)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ki.upload(z,Et(v),E,H),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(z,`center`,i.center),T.setValue(z,`modelViewMatrix`,i.modelViewMatrix),T.setValue(z,`normalMatrix`,i.normalMatrix),T.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,x),nt.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,B.viewport(fe),B.scissor(pe),B.setScissorTest(me),I=-1;return}if(o.__webglFramebuffer===void 0)H.setupRenderTarget(e);else if(o.__hasExternalTextures)H.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);H.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&H.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Ce).multiplyScalar(be).floor(),pe.copy(we).multiplyScalar(be).floor(),me=Te;if(n!==0&&(r=oe),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(fe),B.scissor(pe),B.setScissorTest(me),i){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}I=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){S(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s),!Le.textureFormatReadable(c)){S(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Le.textureTypeReadable(l)){S(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=P===null?null:V.get(P).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s),!Le.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Le.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,d),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,et.convert(l),et.convert(u),0);let f=P===null?null:V.get(P).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,f);let p=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await It(z,p,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,d),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.deleteBuffer(d),z.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;H.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(H.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(H.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(H.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,o,s,f,p,o,s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,N),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,o,s,f,p,o,s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&H.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?H.setTextureCube(e,0):e.isData3DTexture?H.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?H.setTexture2DArray(e,0):H.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,B.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return T}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}},go=new A;function _o(e){return new Promise((t,n)=>{go.load(e,t,void 0,e=>n(e instanceof Error?e:Error(String(e))))})}var vo=class{templates=new Map;clips=new Map;async loadCharacter(e,t,n){let r=(await _o(t)).scene,i=new Set;r.traverse(e=>{if(n&&e instanceof L){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)!(e instanceof Vt)||i.has(e)||(i.add(e),n.matte&&(e.roughness=Math.max(e.roughness,.82),e.envMapIntensity=.35),n.tint!==void 0&&e.color.setHex(n.tint))}if(e instanceof L){e.castShadow=!1,e.receiveShadow=!0;let t=e.geometry;t.boundingSphere||t.computeBoundingSphere(),t.boundingSphere&&(t.boundingSphere.radius=Math.max(t.boundingSphere.radius*2.5,2.5)),e.frustumCulled=!0}}),this.templates.set(e,r)}async loadClips(e,t=``){let n=await _o(e);for(let e of n.animations)this.clips.has(t+e.name)||this.clips.set(t+e.name,e)}clipNames(){return[...this.clips.keys()].sort()}getClip(e){return this.clips.get(e)}instance(e){let t=this.templates.get(e);if(!t){let e=new L(new Ze(.6,1.6,.6),new Vt({color:16711935}));return e.position.y=.8,e}return Ft(t)}},yo=new Map(Object.entries({Hit_B:`Hit_A`,Death_B:`Death_A`,Dodge_Backward:`Dodge_Backwards`,Jump_Full_Long:`Dodge_Forward`,Jump_Full_Short:`Dodge_Forward`,Walking_B:`Walking_A`,Walking_C:`Walking_A`,Running_B:`Running_A`,Idle_B:`Idle_A`,Spawn_Ground:`Idle_A`,Spawn_Air:`Idle_A`,PickUp:`Idle_A`,Interact:`Idle_A`,Use_Item:`Melee_Block`,Throw:`Melee_2H_Attack`,Melee_1H_Attack_Chop:`Melee_1H_Slash`,Melee_1H_Attack_Slice_Horizontal:`Melee_1H_Slash`,Melee_1H_Attack_Slice_Diagonal:`Melee_1H_Slash`,Melee_1H_Attack_Stab:`Melee_1H_Stab`,Melee_1H_Attack_Jump_Chop:`Melee_1H_Slash`,Melee_2H_Attack_Chop:`Melee_2H_Attack`,Melee_2H_Attack_Slice:`Melee_2H_Attack`,Melee_2H_Attack_Stab:`Melee_2H_Attack`,Melee_2H_Attack_Spin:`Melee_2H_Slam`,Melee_2H_Attack_Spinning:`Melee_2H_Slam`,Melee_Unarmed_Attack_Punch_A:`Melee_Unarmed_Punch`,Melee_Unarmed_Attack_Kick:`Melee_Unarmed_Kick`,Ranged_Magic_Spellcasting:`Melee_2H_Attack`,Ranged_Magic_Shoot:`Melee_2H_Attack`,Skeletons_Taunt:`Flexing`,Skeletons_Idle:`Idle_B`,Skeletons_Spawn_Ground:`Idle_B`})),bo=`Idle_B`,xo=class{lib;clipPrefix;root;mixer;actions=new Map;current=null;currentName=``;constructor(e,t,n=``){this.lib=e,this.clipPrefix=n,this.root=e.instance(t),this.mixer=new Ne(this.root)}get playing(){return this.currentName}resolveClip(e){return this.lib.getClip(this.clipPrefix+e)??(this.clipPrefix?this.lib.getClip(this.clipPrefix+(yo.get(e)??``)):this.lib.getClip(e))}clipDuration(e){return this.resolveClip(e)?.duration??0}action(e){let t=this.actions.get(e);if(t)return t;let n=this.resolveClip(e);if(!n)return null;let r=this.mixer.clipAction(n);return this.actions.set(e,r),r}play(e,t={}){let{fade:n=.2,loop:r=!0,clamp:i=!1,timeScale:a=1}=t;if(this.currentName===e&&r)return;let o=this.action(e);if(!o){e!==bo&&this.action(bo)&&this.play(bo,{fade:n,loop:!0});return}o.reset(),o.enabled=!0,o.setEffectiveWeight(1),o.setEffectiveTimeScale(a),o.setLoop(r?ee:b,r?1/0:1),o.clampWhenFinished=i,o.play(),this.current&&this.current!==o&&this.current.crossFadeTo(o,n,!1),this.current=o,this.currentName=e}playOnce(e,t={}){this.play(e,{...t,loop:!1,clamp:t.clamp??!1})}setTimeScale(e){this.current?.setEffectiveTimeScale(e)}attach(e,t){let n=t.replace(/[^a-z0-9]/gi,``).toLowerCase(),r=[];this.root.traverse(e=>{e.name.replace(/[^a-z0-9]/gi,``).toLowerCase()===n&&r.push(e)});let i=r[0];return i?(e.traverse(e=>{e instanceof L&&(e.castShadow=!0,e.frustumCulled=!1)}),i.add(e),!0):!1}update(e){this.mixer.update(e)}dispose(){this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.root)}},So=class extends et{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new Ze;e.deleteAttribute(`uv`);let t=new Vt({side:1}),n=new Vt,r=new Ke(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new L(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new ne(e,n,6),o=new At;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new L(e,Co(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new L(e,Co(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new L(e,Co(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new L(e,Co(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new L(e,Co(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new L(e,Co(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Co(e){return new Ye({color:0,emissive:16777215,emissiveIntensity:e})}var wo={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},To=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Eo=new zt(-1,1,1,-1,0,1),Do=new class extends Ot{constructor(){super(),this.setAttribute(`position`,new be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new be([0,2,0,0,2,0],2))}},Oo=class{constructor(e){this._mesh=new L(Do,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Eo)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},ko=class extends To{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof U?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zt.clone(e.uniforms),this.material=new U({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Oo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ao=class extends To{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},jo=class extends To{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Mo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new N);this._width=n.width,this._height=n.height,t=new te(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ae}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ko(wo),this.copyPass.material.blending=0,this.timer=new tn}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Ao!==void 0&&(r instanceof Ao?n=!0:r instanceof jo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new N);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},No=class extends To{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new G}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Po={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new G(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Fo=class e extends To{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new N(256,256):new N(e.x,e.y),this.clearColor=new G(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new te(i,a,{type:ae}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new te(i,a,{type:ae});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new te(i,a,{type:ae});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Po;this.highPassUniforms=Zt.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new U({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new N(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Zt.clone(wo.uniforms),this.blendMaterial=new U({uniforms:this.copyUniforms,vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new G,this._oldClearAlpha=1,this._basic=new R,this._fsQuad=new Oo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new N(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new U({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new N(.5,.5)},direction:{value:new N(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new U({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Fo.BlurDirectionX=new N(1,0),Fo.BlurDirectionY=new N(0,1);var Io={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Lo=class extends To{constructor(){super(),this.isOutputPass=!0,this.uniforms=Zt.clone(Io.uniforms),this.material=new t({name:Io.name,uniforms:this.uniforms,vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader}),this._fsQuad=new Oo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},We.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ro={name:`SMAAEdgesShader`,defines:{SMAA_THRESHOLD:`0.1`},uniforms:{tDiffuse:{value:null},resolution:{value:new N(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},zo={name:`SMAAWeightsShader`,defines:{SMAA_MAX_SEARCH_STEPS:`8`,SMAA_AREATEX_MAX_DISTANCE:`16`,SMAA_AREATEX_PIXEL_SIZE:`( 1.0 / vec2( 160.0, 560.0 ) )`,SMAA_AREATEX_SUBTEX_SIZE:`( 1.0 / 7.0 )`},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new N(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Bo={name:`SMAABlendShader`,uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new N(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`},Vo=class extends To{constructor(){super(),this._edgesRT=new te(1,1,{depthBuffer:!1,type:ae}),this._edgesRT.texture.name=`SMAAPass.edges`,this._weightsRT=new te(1,1,{depthBuffer:!1,type:ae}),this._weightsRT.texture.name=`SMAAPass.weights`;let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new an,this._areaTexture.name=`SMAAPass.area`,this._areaTexture.image=t,this._areaTexture.minFilter=s,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new an,this._searchTexture.name=`SMAAPass.search`,this._searchTexture.image=n,this._searchTexture.magFilter=Lt,this._searchTexture.minFilter=Lt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=Zt.clone(Ro.uniforms),this._materialEdges=new U({defines:Object.assign({},Ro.defines),uniforms:this._uniformsEdges,vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader}),this._uniformsWeights=Zt.clone(zo.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new U({defines:Object.assign({},zo.defines),uniforms:this._uniformsWeights,vertexShader:zo.vertexShader,fragmentShader:zo.fragmentShader}),this._uniformsBlend=Zt.clone(Bo.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new U({uniforms:this._uniformsBlend,vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader}),this._fsQuad=new Oo(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return`data:image/png;base64,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`}_getSearchTexture(){return`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII=`}},Ho={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new N(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},Uo=2.4,Wo={distance:10,fov:52,lookAhead:6,lookHeight:1.4,baseElev:.62,posLerp:10},Go={uniforms:{tDiffuse:{value:null},uContrast:{value:1.08},uSaturation:{value:1.1},uVignette:{value:.18},uVigStart:{value:.7},uFlash:{value:0},uLift:{value:new F(-.006,-.003,.012)},uGain:{value:new F(1.03,1.01,.97)}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uContrast,uSaturation,uVignette,uVigStart,uFlash; uniform vec3 uLift,uGain;
    varying vec2 vUv;
    void main(){
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      c = c*uGain + uLift*(1.0-c);
      c = (c-0.5)*uContrast + 0.5;
      float l = dot(c, vec3(0.2126,0.7152,0.0722));
      c = mix(vec3(l), c, uSaturation);
      float r = length(vUv-0.5)*1.4142;
      c *= 1.0 - uVignette*smoothstep(uVigStart,1.0,r);
      c += (vec3(1.0)-c) * uFlash;
      gl_FragColor = vec4(clamp(c,0.0,1.0),1.0);
    }`};function Ko(e,t){return t>=1?e:Math.min(110,Math.atan(Math.tan(e*Math.PI/360)/t)*360/Math.PI)}function qo(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}var Jo=null;function Yo(){Jo?.()}var Xo=new G(5659496),Zo=new G(4866616);function Qo(e,t,n){n.copy(Xo);let r=1/0;for(let n of nt){let i=(e-n.x)**2+(t-n.y)**2;i<r&&(r=i)}let i=1-qo(3.5,5.5,Math.sqrt(r));return i>0&&n.lerp(Zo,i*.85),n}function $o(){let e=.02,t=[];for(let e=1;e<=40;e++)t.push(e/40*68);t.push(11,11.05);for(let e=1;e<=4;e++)t.push(11+e/4*kt);t.sort((e,t)=>e-t);let n=t.length,r=new G;Qo(0,0,r);let i=[0,W(0,0)-e,0],a=[r.r,r.g,r.b];for(let o=1;o<=n;o++){let n=t[o-1];for(let t=0;t<96;t++){let o=t/96*Math.PI*2,s=Math.cos(o)*n,c=Math.sin(o)*n;i.push(s,W(s,c)-e,c),Qo(s,c,r),a.push(r.r,r.g,r.b)}}let o=[];for(let e=0;e<96;e++)o.push(0,1+e,1+(e+1)%96);for(let e=0;e<n-1;e++){let t=1+e*96,n=1+(e+1)*96;for(let e=0;e<96;e++){let r=(e+1)%96;o.push(t+e,n+e,t+r,t+r,n+e,n+r)}}let s=new Ot;s.setAttribute(`position`,new be(i,3)),s.setAttribute(`color`,new be(a,3)),s.setIndex(o),s.computeVertexNormals();let c=new L(s,new Vt({vertexColors:!0,roughness:1,metalness:0,side:2}));return c.receiveShadow=!0,c}var es=class{renderer;scene=new et;camera;sun;look=new F;camPos=new F;camYaw=0;camPitch=0;focus=new F;camGroundY=0;camPlaced=!1;scratchA=new F;scratchB=new F;scratchFwd=new F;shake=0;shakeT=0;shakeOff=new F;kickVec=new F;fovPunch=0;flashAmt=0;vigPunch=0;introT=-1;introPos=new F(0,22,14);introLook=new F(0,2,0);introScratch=new F;throneAura;throneColumn=null;bloomScale=1;composer=null;bloom=null;grade=null;fxaa=null;quality=`high`;prNow=Math.min(window.devicePixelRatio,2);dtAvg=1/60;prStep=0;constructor(e){this.renderer=new ho({antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight);let t=`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches;this.renderer.debug.checkShaderErrors=!1,this.renderer.shadowMap.enabled=!t,this.renderer.shadowMap.type=1,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.outputColorSpace=Gt,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1,e.appendChild(this.renderer.domElement),this.scene.background=new G(790296),this.scene.fog=new le(790296,.015);let n=new xr(this.renderer);this.scene.environment=n.fromScene(new So,.04).texture,this.scene.environmentIntensity=.36,n.dispose();let r=window.innerWidth/window.innerHeight;this.camera=new Ue(Ko(Wo.fov,r),r,.5,400),this.camPos.set(0,Math.sin(Wo.baseElev)*Wo.distance,Math.cos(Wo.baseElev)*Wo.distance),this.camera.position.copy(this.camPos),this.camera.lookAt(0,1,0),this.scene.add(new se(8427716,2367514,.72)),this.scene.add(new Ae(16777215,.24)),this.sun=new Ve(12373247,1.5),this.sun.position.set(18,34,12),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=80,this.sun.shadow.radius=4;let i=this.sun.shadow.camera;i.left=-70,i.right=70,i.top=70,i.bottom=-70,i.updateProjectionMatrix(),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.scene.add(this.sun),this.scene.add(this.sun.target);let a=new Ve(7310591,.5);a.position.set(-16,10,-14),this.scene.add(a),this.throneAura=this.buildArena(),this.buildComposer(),Jo=()=>this.refreshShadows()}buildArena(){let e=new ht,t=new L(new it(300,32,16),new U({side:1,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new G(658972)},uBot:{value:new G(1709606)}},vertexShader:`varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`varying vec3 vP; uniform vec3 uTop; uniform vec3 uBot; void main(){ vec3 n = normalize(vP); float h = smoothstep(-0.1,0.5, n.y); vec3 c = mix(uBot,uTop,h); gl_FragColor = vec4(c,1.0); }`}));t.renderOrder=-1,e.add(t),e.add($o());let n=W(0,0),r=new L(new Pt(St,St+.6,Mt,32),new Vt({color:4604250,roughness:.85}));r.position.set(Qe.throne.x,n+Mt/2,Qe.throne.y),r.castShadow=!0,r.receiveShadow=!0,e.add(r);let i=new L(new Re(Qe.throne.radius-.5,Qe.throne.radius,64),new R({color:16763972,transparent:!0,opacity:.5,side:2,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=W(Qe.throne.radius,0)+.1,e.add(i),this.throneColumn=new L(new Pt(1.2,2,11,24,1,!0),new R({color:16763989,transparent:!0,opacity:.03,side:2,depthWrite:!1,blending:2})),this.throneColumn.position.set(Qe.throne.x,n+5.5,Qe.throne.y),e.add(this.throneColumn);for(let t of c){let n=Tt(`bot:${t.slot}`),r=W(t.x,t.y),i=new L(new Re(4.2,5,40),new R({color:n,transparent:!0,opacity:.6,blending:2,side:2,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.set(t.x,r+.18,t.y),e.add(i)}let a=[];for(let t of z){let n=new L(new Re(1.4,1.7,4),new R({color:6750156,transparent:!0,opacity:.55,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.set(t.x,W(t.x,t.y)+.1,t.y),e.add(n);let r=new xt(.55,3.5,8,1,!0);r.translate(t.x,W(t.x,t.y)+1.75,t.y),a.push(r)}let o=D(a);if(o){let t=new L(o,new R({color:6750156,transparent:!0,opacity:.05,blending:2,side:2,depthWrite:!1}));e.add(t)}for(let e of a)e.dispose();return this.scene.add(e),i}follow(e,t,n,r,i,a,o=0){(n!==0||r!==0)&&(this.camYaw=Math.atan2(n,r)),this.camPitch=i;let s=Math.sin(this.camYaw),c=Math.cos(this.camYaw);this.camGroundY+=(o-this.camGroundY)*Math.min(1,6*a),this.scratchA.set(e,0,t),this.camPlaced?this.focus.lerp(this.scratchA,Math.min(1,Wo.posLerp*a)):(this.focus.copy(this.scratchA),this.camPlaced=!0);let l=Math.max(.12,Wo.baseElev-this.camPitch*.55),u=this.clampCamDistance(this.focus.x,this.focus.z,-s,-c),d=Math.cos(l)*u,f=Math.max(1.4,Math.sin(l)*u)+this.camGroundY;this.camPos.set(this.focus.x-s*d,f,this.focus.z-c*d);let p=Ge+.4,m=Math.hypot(this.camPos.x,this.camPos.z);if(m>p){let e=p/m;this.camPos.x*=e,this.camPos.z*=e}m<6.7&&(this.camPos.y=Math.max(this.camPos.y,Mt+2.8)),this.look.set(this.focus.x+s*Wo.lookAhead,Wo.lookHeight+this.camPitch*5+this.camGroundY,this.focus.z+c*Wo.lookAhead),this.shake=Math.max(0,this.shake-a*1.6),this.shakeT+=a*31,this.bloom&&(this.bloom.strength=.6+this.shake*.5),this.flashAmt*=Math.max(0,1-9*a),this.vigPunch*=Math.max(0,1-5*a);let h=this.grade?.uniforms.uVignette;h&&(h.value=.18+this.shake*.25+this.vigPunch);let g=this.grade?.uniforms.uFlash;g&&(g.value=this.flashAmt);let _=this.shake*this.shake;this.shakeOff.set((Math.random()-.5)*_*1.4,(Math.random()-.5)*_*.8,(Math.random()-.5)*_*1.4),this.kickVec.multiplyScalar(Math.max(0,1-a*11)),this.fovPunch*=Math.max(0,1-7*a),this.fovPunch<.01&&(this.fovPunch=0);let v=Ko(Wo.fov,this.camera.aspect)-this.fovPunch;if(Math.abs(v-this.camera.fov)>.01&&(this.camera.fov=v,this.camera.updateProjectionMatrix()),this.camera.position.copy(this.camPos).add(this.shakeOff).add(this.kickVec),this.introT>=0){this.introT+=a;let e=Math.min(1,this.introT/Uo),t=e<.5?4*e*e*e:1-(-2*e+2)**3/2;this.introT>=Uo&&(this.introT=-1),this.camera.position.lerpVectors(this.introPos,this.camera.position,t),this.introScratch.lerpVectors(this.introLook,this.look,t),this.camera.lookAt(this.introScratch)}else this.camera.lookAt(this.look);this.camera.rotateZ((Math.sin(this.shakeT*1.3)*.55+Math.sin(this.shakeT*2.7)*.45)*_*.05)}cinematic(e,t,n,r=Wo.fov){this.shake=Math.max(0,this.shake-n*1.6),this.shakeT+=n*31,this.bloom&&(this.bloom.strength=(.6+this.shake*.5)*this.bloomScale),this.flashAmt*=Math.max(0,1-9*n),this.vigPunch*=Math.max(0,1-5*n);let i=this.grade?.uniforms.uVignette;i&&(i.value=.18+this.shake*.25+this.vigPunch);let a=this.grade?.uniforms.uFlash;a&&(a.value=this.flashAmt);let o=this.shake*this.shake;this.shakeOff.set((Math.random()-.5)*o*1.4,(Math.random()-.5)*o*.8,(Math.random()-.5)*o*1.4),this.kickVec.multiplyScalar(Math.max(0,1-n*11)),this.fovPunch*=Math.max(0,1-7*n),this.fovPunch<.01&&(this.fovPunch=0);let s=Ko(r,this.camera.aspect)-this.fovPunch;Math.abs(s-this.camera.fov)>.01&&(this.camera.fov=s,this.camera.updateProjectionMatrix()),this.camera.position.copy(e).add(this.shakeOff).add(this.kickVec),this.camera.lookAt(t),this.camera.rotateZ((Math.sin(this.shakeT*1.3)*.55+Math.sin(this.shakeT*2.7)*.45)*o*.05)}startIntro(){this.introT=0}get introBlend(){return this.introT<0?1:Math.min(1,this.introT/Uo)}punchFov(e){this.fovPunch=Math.max(this.fovPunch,e)}screenPulse(e,t=0){this.flashAmt=Math.max(this.flashAmt,e),this.vigPunch=Math.max(this.vigPunch,t)}refreshShadows(){this.renderer.shadowMap.needsUpdate=!0}clampCamDistance(e,t,n,r){let i=Wo.distance,a=(a,o,s)=>{let c=s+.7,l=a-e,u=o-t,d=l*n+u*r;if(d<=0)return;let f=l*l+u*u-c*c,p=d*d-f;if(p<0)return;let m=d-Math.sqrt(p);m>.5&&m-.5<i&&(i=m-.5)};for(let e of H)e.height<3||a(e.x,e.y,e.radius);return Math.max(4,i)}addTrauma(e){this.shake=Math.min(1,this.shake+e)}kick(e,t,n){let r=Math.hypot(e,t)||1;this.kickVec.set(e/r*n,0,t/r*n)}tickAura(e){let t=this.throneAura.material;t.opacity=.35+Math.sin(e*2)*.15,this.throneColumn&&(this.throneColumn.material.opacity=.022+Math.abs(Math.sin(e*1.5))*.022)}buildComposer(){let e=window.innerWidth,t=window.innerHeight,n=`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches;this.quality=!n&&this.prNow>=1.5?`high`:`low`,this.composer=new Mo(this.renderer),this.composer.addPass(new No(this.scene,this.camera)),this.bloom=new Fo(new N(e,t),.6,.5,.82),this.composer.addPass(this.bloom),this.composer.addPass(new Lo),this.grade=new ko(Go),this.composer.addPass(this.grade),this.quality===`high`?this.composer.addPass(new Vo):(this.fxaa=new ko(Ho),this.fxaa.material.uniforms.resolution?.value.set(1/(e*this.prNow),1/(t*this.prNow)),this.composer.addPass(this.fxaa)),this.composer.setPixelRatio(this.prNow)}applyPixelRatio(e){this.prNow=e,this.renderer.setPixelRatio(e),this.composer?.setPixelRatio(e),this.fxaa&&this.fxaa.material.uniforms.resolution?.value.set(1/(window.innerWidth*e),1/(window.innerHeight*e))}samplePerf(e){this.dtAvg=this.dtAvg*.95+Math.min(e,.1)*.05,1/this.dtAvg<50&&this.prStep<2&&(this.prStep++,this.applyPixelRatio(this.prStep===1?Math.min(1.5,this.prNow):1.25))}resize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.fov=Ko(Wo.fov,this.camera.aspect),this.camera.updateProjectionMatrix(),this.composer?.setSize(window.innerWidth,window.innerHeight),this.fxaa&&this.fxaa.material.uniforms.resolution?.value.set(1/(window.innerWidth*this.prNow),1/(window.innerHeight*this.prNow))}worldToScreen(e,t,n=1.4){let r=this.scratchA.set(e,n,t);return this.camera.getWorldDirection(this.scratchFwd),this.scratchB.copy(r).sub(this.camera.position).dot(this.scratchFwd)<=.1?{x:0,y:0,visible:!1}:(r.project(this.camera),{x:(r.x*.5+.5)*window.innerWidth,y:(-r.y*.5+.5)*window.innerHeight,visible:r.z<1})}render(){this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}},ts=[{method:`keys`,input:`WASD`,action:`move`},{method:`mouse`,input:`MOUSE`,action:`look`},{method:`mouse`,input:`LMB`,action:`attack`},{method:`keys`,input:`SPACE`,action:`jump`},{method:`keys`,input:`SHIFT`,action:`dash`},{method:`keys`,input:`1-4`,action:`abilities`},{method:`keys`,input:`B`,action:`shop`},{method:`keys`,input:`M`,action:`mute`},{method:`touch`,input:`LEFT STICK`,action:`move`},{method:`touch`,input:`RIGHT STICK`,action:`aim + attack`},{method:`touch`,input:`1-4`,action:`abilities`},{method:`touch`,input:`DASH / HOP / JUMP`,action:`mobility`},{method:`touch`,input:`B`,action:`shop`},{method:`touch`,input:`🔊`,action:`mute`},{method:`controller`,input:`L-STICK`,action:`move`},{method:`controller`,input:`R-STICK`,action:`look`},{method:`controller`,input:`RT`,action:`attack`},{method:`controller`,input:`A`,action:`jump`},{method:`controller`,input:`B`,action:`dash`},{method:`controller`,input:`X/Y/LB/RB`,action:`abilities`},{method:`controller`,input:`SELECT`,action:`shop`},{method:`controller`,input:`START`,action:`scoreboard`}],ns={keys:`KEYBOARD`,mouse:`MOUSE`,touch:`TOUCH`,camera:`CAMERA`,controller:`CONTROLLER`},rs=`
.ba-p-groups{display:flex;flex-wrap:wrap;gap:16px 30px;justify-content:center;align-items:center;
  margin:20px 4px 4px;text-align:left}
.ba-p-g{min-width:206px;flex:0 1 auto}
.ba-p-gt{font:800 10px ui-monospace,monospace;letter-spacing:.26em;text-align:center;
  color:rgba(255,210,74,.62);border-bottom:1px solid rgba(255,210,74,.18);
  padding-bottom:5px;margin-bottom:9px}
.ba-p-rows{display:grid;grid-template-columns:auto 1fr;gap:6px 10px;align-items:center}
.ba-p-k{justify-self:end;font:800 10px ui-monospace,monospace;color:#ffd24a;
  background:rgba(10,14,24,.92);border:1px solid rgba(255,255,255,.3);border-radius:4px;
  padding:2px 6px;white-space:nowrap}
.ba-p-a{font:600 11px ui-monospace,monospace;color:#e8e2d4;opacity:.78}
/* Compact strip variant (the lobby): same chips and method headers, flowing
   inline instead of stacking into a card. */
.ba-p-strip{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:7px 16px}
.ba-p-strip .ba-p-gt{border-bottom:none;margin:0;padding:0 2px}
.ba-p-e{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}
@media (max-width:520px){
  .ba-p-g{min-width:0;width:100%}
  .ba-p-groups{gap:12px}
}`,is=`ba-controls-style`;function as(){if(document.getElementById(is))return;let e=document.createElement(`style`);e.id=is,e.textContent=rs,document.head.append(e)}function os(e){let t=mn(ts,{coarse:e});if(t.length===0)return null;let n=document.createElement(`div`);n.className=`ba-p-groups`;for(let e of t){let t=document.createElement(`div`);t.className=`ba-p-g`;let r=document.createElement(`div`);r.className=`ba-p-gt`,r.textContent=ns[e.method];let i=document.createElement(`div`);i.className=`ba-p-rows`;for(let t of e.entries){let e=document.createElement(`span`);e.className=`ba-p-k`,e.textContent=t.input;let n=document.createElement(`span`);n.className=`ba-p-a`,n.textContent=t.action,i.append(e,n)}t.append(r,i),n.append(t)}return n}function ss(e){let t=mn(ts,{coarse:e});if(t.length===0)return null;let n=document.createElement(`div`);n.className=`ba-p-strip`;for(let e of t){let t=document.createElement(`span`);t.className=`ba-p-gt`,t.textContent=ns[e.method],n.append(t);for(let t of e.entries){let e=document.createElement(`span`);e.className=`ba-p-e`;let r=document.createElement(`span`);r.className=`ba-p-k`,r.textContent=t.input;let i=document.createElement(`span`);i.className=`ba-p-a`,i.textContent=t.action,e.append(r,i),n.append(e)}}return n}var cs=`
.ba-pause{display:flex;align-items:center;justify-content:center;
  padding:calc(20px + env(safe-area-inset-top,0px)) calc(20px + env(safe-area-inset-right,0px))
    calc(20px + env(safe-area-inset-bottom,0px)) calc(20px + env(safe-area-inset-left,0px));
  background:radial-gradient(ellipse at 50% 42%,rgba(12,14,22,.58),rgba(5,6,10,.85));
  backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
  color:#e8e2d4;font-family:ui-monospace,'SF Mono',Menlo,monospace;text-align:center}
.ba-p-panel{position:relative;width:min(92vw,600px);max-height:min(86vh,640px);overflow-y:auto;
  padding:26px 28px 20px;border-radius:6px;
  background:radial-gradient(ellipse 70% 38% at 50% 0%,rgba(255,160,40,.09),transparent),
    linear-gradient(172deg,rgba(31,33,46,.97),rgba(16,17,26,.97));
  border:1px solid rgba(255,210,74,.38);
  box-shadow:0 0 0 1px rgba(0,0,0,.85),0 0 0 4px rgba(21,23,33,.92),0 0 0 5px rgba(255,210,74,.14),
    0 26px 70px rgba(0,0,0,.65),inset 0 1px 0 rgba(255,255,255,.07)}
.ba-p-panel::before{content:"";position:absolute;inset:7px;border:1px solid rgba(255,255,255,.06);
  border-radius:3px;pointer-events:none}
.ba-p-title{font:900 italic clamp(36px,7vw,54px)/1 system-ui,sans-serif;letter-spacing:-2px;
  color:#ffd24a;text-shadow:0 2px 0 rgba(0,0,0,.6),0 0 44px rgba(255,160,40,.35)}
.ba-p-rule{display:flex;align-items:center;gap:10px;margin:13px auto 9px;max-width:340px;
  color:#ffd24a;font-size:9px;line-height:1}
.ba-p-rule::before{content:"";flex:1;height:1px;
  background:linear-gradient(90deg,transparent,rgba(255,210,74,.55))}
.ba-p-rule::after{content:"";flex:1;height:1px;
  background:linear-gradient(90deg,rgba(255,210,74,.55),transparent)}
.ba-p-sub{font:600 11px ui-monospace,monospace;letter-spacing:.2em;text-transform:uppercase;
  color:#d8a052}
.ba-p-hint{margin-top:16px;font:700 10px ui-monospace,monospace;letter-spacing:.16em;
  text-transform:uppercase;opacity:.5}
@media (max-width:520px){
  .ba-p-panel{padding:20px 16px 16px}
}`;function ls(e={}){let t=Gn({className:`ba-pause`,css:cs,styleId:`ba-pause-style`,fadeMs:220,render:t=>us(t,e)});return{show:()=>{document.pointerLockElement&&document.exitPointerLock(),t.show()},hide:t.hide}}function us(e,t){as();let n=window.matchMedia(`(pointer: coarse)`).matches,r=t.isLive?.()??!1,i=document.createElement(`div`);i.className=`ba-p-panel`;let a=document.createElement(`div`);a.className=`ba-p-title`,a.textContent=`PAUSED`;let o=document.createElement(`div`);o.className=`ba-p-rule`,o.textContent=`◆`;let s=document.createElement(`div`);s.className=`ba-p-sub`,s.textContent=r?`the arena fights on without you`:`the arena holds its breath`,i.append(a,o,s);let c=os(n);c&&i.append(c);let l=document.createElement(`div`);l.className=`ba-p-hint`,l.textContent=n?`tap to re-enter the fray`:`any key · click — re-enter the fray`,i.append(l),e.append(i)}var ds={a:0,b:1,x:2,y:3,lb:4,rb:5,lt:6,rt:7,select:8,start:9,ls:10,rs:11,up:12,down:13,left:14,right:15},fs=[`a`,`b`,`x`,`y`,`lb`,`rb`,`lt`,`rt`,`select`,`start`,`ls`,`rs`,`up`,`down`,`left`,`right`],ps=new Set(fs);function ms(e){return ps.has(e)}var hs=.15,gs=.05,_s={active:!1,anchorX:0,anchorY:0,curX:0,curY:0,dx:0,dy:0,distance:0,angle:0,magnitude:0,inDeadZone:!0};function vs(){return typeof navigator<`u`&&`getGamepads`in navigator?navigator.getGamepads():[]}var ys=class{bindings;stickDeadZone;triggerThreshold;onConnect;onDisconnect;poll;wasConnected=!1;axes=[];down=new Set;prevDown=new Set;values=new Map;constructor(e={}){this.bindings=e.bindings??{},this.stickDeadZone=e.stickDeadZone??hs,this.triggerThreshold=e.triggerThreshold??gs,this.onConnect=e.onConnect,this.onDisconnect=e.onDisconnect,this.poll=e.poll??vs}update(){let e=null;for(let t of this.poll())if(t?.connected){e=t;break}let t=e!==null;if(t!==this.wasConnected&&(this.wasConnected=t,t?this.onConnect?.():this.onDisconnect?.()),[this.prevDown,this.down]=[this.down,this.prevDown],this.down.clear(),this.values.clear(),this.axes=e?[...e.axes]:[],e)for(let t of fs){let n=e.buttons[ds[t]];n&&(this.values.set(t,n.value),(n.pressed||n.value>this.triggerThreshold)&&this.down.add(t))}}get connected(){return this.wasConnected}isButtonDown(e){return this.resolve(e).some(e=>this.down.has(e))}justPressed(e){let t=this.resolve(e);return t.some(e=>this.down.has(e))&&!t.some(e=>this.prevDown.has(e))}justReleased(e){let t=this.resolve(e);return t.some(e=>this.prevDown.has(e))&&!t.some(e=>this.down.has(e))}buttonValue(e){return this.values.get(e)??0}getStick(e=`left`){if(!this.wasConnected)return{..._s};let t=e===`left`?0:2,n=this.axes[t]??0,r=this.axes[t+1]??0,i=Math.hypot(n,r),a=Math.max(1e-6,1-this.stickDeadZone);return{active:!0,anchorX:0,anchorY:0,curX:n,curY:r,dx:n,dy:r,distance:i,angle:Math.atan2(r,n),magnitude:Math.min(1,Math.max(0,(i-this.stickDeadZone)/a)),inDeadZone:i<=this.stickDeadZone}}destroy(){this.down.clear(),this.prevDown.clear(),this.values.clear(),this.axes=[],this.wasConnected=!1}resolve(e){return this.bindings[e]||(ms(e)?[e]:[])}},bs=.0028,xs=-1,Ss=.7,Cs=Math.PI,ws=Math.PI/2,Ts=class{canvas;keys=new Set;abilityQueue=[];itemQueue=[];buyPressed=!1;scorePressed=!1;jumpPressed=!1;dashPressed=!1;yaw=0;pitch=0;lmb=!1;lmbEdge=!1;hadInput=!1;pad=new ys;padFwd=0;padStrafe=0;padAttack=!1;uiMode=!1;constructor(e){this.canvas=e,window.addEventListener(`keydown`,this.onKeyDown),window.addEventListener(`keyup`,this.onKeyUp),window.addEventListener(`mousemove`,this.onMouseMove),this.canvas.addEventListener(`mousedown`,this.onMouseDown),window.addEventListener(`mouseup`,this.onMouseUp),window.addEventListener(`blur`,this.onBlur),window.addEventListener(`contextmenu`,this.onContext)}get locked(){return document.pointerLockElement===this.canvas}lockPointer(){if(!(this.locked||this.uiMode))try{Promise.resolve(this.canvas.requestPointerLock()).catch(()=>{})}catch{}}setMouseMode(e){this.uiMode!==e&&(this.uiMode=e,document.body.classList.toggle(`ba-mouse-mode`,e),e?(this.lmb=!1,this.lmbEdge=!1,this.locked&&document.exitPointerLock()):this.lockPointer())}get inMouseMode(){return this.uiMode}applyStickLook(e,t,n){this.uiMode||e===0&&t===0||(this.yaw-=e*n*Cs,this.pitch=Math.max(xs,Math.min(Ss,this.pitch-t*n*ws)),this.hadInput=!0)}update(e){if(this.pad.update(),this.padFwd=0,this.padStrafe=0,this.padAttack=!1,!this.pad.connected)return;let t=this.pad.getStick(`left`);if(!t.inDeadZone&&t.distance>0){let e=t.magnitude/t.distance;this.padStrafe=t.dx*e,this.padFwd=-t.dy*e,this.hadInput=!0}if(!this.uiMode){let t=this.pad.getStick(`right`);if(!t.inDeadZone&&t.distance>0){let n=t.magnitude/t.distance*e;this.yaw-=t.dx*n*Cs,this.pitch=Math.max(xs,Math.min(Ss,this.pitch-t.dy*n*ws)),this.hadInput=!0}this.padAttack=this.pad.isButtonDown(`rt`),this.pad.justPressed(`rt`)&&(this.lmbEdge=!0,this.hadInput=!0)}this.pad.justPressed(`a`)&&(this.jumpPressed=!0),this.pad.justPressed(`b`)&&(this.dashPressed=!0),this.pad.justPressed(`x`)&&this.abilityQueue.push(`Q`),this.pad.justPressed(`y`)&&this.abilityQueue.push(`W`),this.pad.justPressed(`lb`)&&this.abilityQueue.push(`E`),this.pad.justPressed(`rb`)&&this.abilityQueue.push(`R`),this.pad.justPressed(`select`)&&(this.buyPressed=!0)}onKeyDown=e=>{if(e.repeat)return;let t=e.code;this.keys.add(t),this.hadInput=!0,t===`Digit1`||t===`Numpad1`?this.abilityQueue.push(`Q`):t===`Digit2`||t===`Numpad2`?this.abilityQueue.push(`W`):t===`Digit3`||t===`Numpad3`?this.abilityQueue.push(`E`):t===`Digit4`||t===`Numpad4`?this.abilityQueue.push(`R`):t===`Digit5`?this.itemQueue.push(0):t===`Digit6`?this.itemQueue.push(1):t===`Digit7`?this.itemQueue.push(2):t===`Digit8`?this.itemQueue.push(3):t===`Digit9`?this.itemQueue.push(4):t===`Digit0`?this.itemQueue.push(5):t===`KeyB`?this.buyPressed=!0:t===`Space`?(this.jumpPressed=!0,e.preventDefault()):t===`ShiftLeft`||t===`ShiftRight`?this.dashPressed=!0:t===`Tab`&&(this.scorePressed=!0,e.preventDefault())};onKeyUp=e=>{this.keys.delete(e.code)};onMouseMove=e=>{this.uiMode||(this.yaw-=e.movementX*bs,this.pitch=Math.max(xs,Math.min(Ss,this.pitch-e.movementY*bs)),this.hadInput=!0)};onMouseDown=e=>{this.uiMode||(this.lockPointer(),e.button===0&&(this.lmb=!0,this.lmbEdge=!0,this.hadInput=!0))};onMouseUp=e=>{e.button===0&&(this.lmb=!1)};onBlur=()=>{this.keys.clear(),this.lmb=!1,this.lmbEdge=!1};onContext=e=>e.preventDefault();moveAxes(){let e=this.padFwd,t=this.padStrafe;return(this.keys.has(`KeyW`)||this.keys.has(`ArrowUp`))&&(e+=1),(this.keys.has(`KeyS`)||this.keys.has(`ArrowDown`))&&--e,(this.keys.has(`KeyD`)||this.keys.has(`ArrowRight`))&&(t+=1),(this.keys.has(`KeyA`)||this.keys.has(`ArrowLeft`))&&--t,{fwd:e,strafe:t}}aimYaw(){return this.yaw}aimPitch(){return this.pitch}setYaw(e){this.yaw=e}attackDown(){return this.lmb||this.padAttack}consumeAttackEdge(){let e=this.lmbEdge;return this.lmbEdge=!1,e}consumeDash(){let e=this.dashPressed;return this.dashPressed=!1,e}consumeAbilities(){let e=this.abilityQueue;return this.abilityQueue=[],e}consumeItems(){let e=this.itemQueue;return this.itemQueue=[],e}consumeBuy(){let e=this.buyPressed;return this.buyPressed=!1,e}consumeJump(){let e=this.jumpPressed;return this.jumpPressed=!1,e}scoreHeld(){return this.keys.has(`Tab`)||this.pad.isButtonDown(`start`)}consumedAnyInput(){return this.hadInput}dispose(){this.pad.destroy(),window.removeEventListener(`keydown`,this.onKeyDown),window.removeEventListener(`keyup`,this.onKeyUp),window.removeEventListener(`mousemove`,this.onMouseMove),this.canvas.removeEventListener(`mousedown`,this.onMouseDown),window.removeEventListener(`mouseup`,this.onMouseUp),window.removeEventListener(`blur`,this.onBlur),window.removeEventListener(`contextmenu`,this.onContext)}},Es=e=>`./icons/${e}.webp`,Ds=new Map([[`blackknight`,`paladin`]]),Os=(e,t)=>Es(t===`DASH`||t===`JUMP`?`ability-${t.toLowerCase()}`:`${Ds.get(e)??e}-${t.toLowerCase()}`),ks=e=>Es(e===`arrow`?`attack-arrow`:e===`bolt`?`attack-bolt`:`attack-melee`),As=e=>Os(e,`R`),js=new Map([[`stun`,`status-stun`],[`root`,`status-root`],[`slow`,`status-slow`],[`speed`,`status-speed`],[`stealth`,`status-stealth`],[`shield`,`status-shield`],[`dot`,`status-dot`],[`heal`,`status-heal`],[`damageAmp`,`status-damage-amp`],[`attackSpeed`,`status-attack-speed`],[`armor`,`status-armor`],[`empower`,`status-empower`]]),Ms=e=>{let t=js.get(e);return t?Es(t):null},Ns=[`Q`,`W`,`E`,`R`],Ps=[`Q`,`W`,`E`,`R`,`DASH`,`JUMP`];function Fs(e,t){return e.seq+=1,`${t}${e.seq}`}var Is=60;function Ls(){return`ontouchstart`in window||`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches}var Rs=[{id:`Q`,label:`1`},{id:`W`,label:`2`},{id:`E`,label:`3`},{id:`R`,label:`4`},{id:`DASH`,label:`DASH`},{id:`JUMP`,label:`JUMP↯`},{id:`J`,label:`HOP`},{id:`B`,label:`B`}],zs=new Set([`Q`,`W`,`E`,`R`,`DASH`,`JUMP`]),Bs=`button,input,#ba-shop,#ba-end,#ba-timer,.ba-item-chip`,Vs=class{active=!1;move=null;aim=null;queue=[];buy=!1;jump=!1;dash=!1;jumpAttack=!1;layer;moveEl;aimEl;buttons=new Map;champBound=``;constructor(){Us(),this.layer=document.createElement(`div`),this.layer.id=`ba-touch`,this.layer.style.cssText=`position:fixed;inset:0;z-index:4;display:none;touch-action:none;pointer-events:none`,this.moveEl=Ws(),this.aimEl=Ws(),this.layer.append(this.moveEl.el,this.aimEl.el);let e=document.createElement(`div`);e.style.cssText=`position:fixed;right:calc(16px + env(safe-area-inset-right));bottom:calc(20px + env(safe-area-inset-bottom));display:grid;grid-template-columns:repeat(3,58px);grid-auto-rows:58px;gap:8px;pointer-events:auto`;for(let t of Rs){let n=document.createElement(`div`);n.className=`ba-tbtn`,t.id===`J`&&(n.style.gridColumn=`2`),t.id===`B`&&(n.style.gridColumn=`3`);let r=document.createElement(`span`);r.className=`ba-tl`,r.textContent=t.label,t.label.length>1&&r.classList.add(`word`),n.appendChild(r);let i=null;zs.has(t.id)&&(i=document.createElement(`div`),i.className=`ba-tcd`,n.appendChild(i)),n.addEventListener(`pointerdown`,e=>{e.stopPropagation(),n.classList.add(`press`),t.id===`B`?this.buy=!0:t.id===`J`?this.jump=!0:t.id===`DASH`?this.dash=!0:t.id===`JUMP`?this.jumpAttack=!0:this.queue.push(t.id)}),n.addEventListener(`pointerup`,()=>n.classList.remove(`press`)),n.addEventListener(`pointercancel`,()=>n.classList.remove(`press`)),this.buttons.set(t.id,{el:n,label:r,cd:i,lastCd:-1}),e.appendChild(n)}this.layer.appendChild(e),document.body.appendChild(this.layer),window.addEventListener(`pointerdown`,this.onDown,{passive:!1}),window.addEventListener(`pointermove`,this.onMove,{passive:!1}),window.addEventListener(`pointerup`,this.onUp),window.addEventListener(`pointercancel`,this.onUp),`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches&&this.activate()}bindChamp(e){if(e!==this.champBound){this.champBound=e;for(let t of Ps){let n=this.buttons.get(t);n&&(n.el.style.backgroundImage=`url("${Os(e,t)}")`,(t===`Q`||t===`W`||t===`E`||t===`R`)&&n.label.classList.add(`kc`))}}}setCooldown(e,t){let n=this.buttons.get(e);if(!n||!n.cd)return;let r=Math.round(Math.max(0,Math.min(1,t))*100);r!==n.lastCd&&(n.lastCd=r,n.cd.style.setProperty(`--cd`,`${r}`))}activate(){this.active||(this.active=!0,this.layer.style.display=`block`,document.body.classList.add(`ba-touch-on`))}onDown=e=>{if(e.pointerType!==`touch`)return;this.activate();let t=e.target;t instanceof Element&&t.closest(Bs)||document.body.classList.contains(`ba-mouse-mode`)||(e.preventDefault(),e.clientX<window.innerWidth/2?this.move||={id:e.pointerId,baseX:e.clientX,baseY:e.clientY,dx:0,dy:0}:this.aim||={id:e.pointerId,baseX:e.clientX,baseY:e.clientY,dx:0,dy:0},this.render())};onMove=e=>{let t=this.move?.id===e.pointerId?this.move:this.aim?.id===e.pointerId?this.aim:null;if(!t)return;let n=e.clientX-t.baseX,r=e.clientY-t.baseY,i=Math.hypot(n,r)||1,a=Math.min(i,Is)/Is;t.dx=n/i*a,t.dy=r/i*a,this.render()};onUp=e=>{this.move?.id===e.pointerId&&(this.move=null),this.aim?.id===e.pointerId&&(this.aim=null),this.render()};render(){Gs(this.moveEl,this.move),Gs(this.aimEl,this.aim)}moveVec(){return this.move?{x:this.move.dx,y:this.move.dy}:{x:0,y:0}}lookVec(){return this.aim?{x:this.aim.dx,y:this.aim.dy}:null}attackDown(){return this.aim!==null&&Math.hypot(this.aim.dx,this.aim.dy)>.2}consumeAbilities(){let e=this.queue;return this.queue=[],e}consumeBuy(){let e=this.buy;return this.buy=!1,e}consumeJump(){let e=this.jump;return this.jump=!1,e}consumeDash(){let e=this.dash;return this.dash=!1,e}consumeJumpAttack(){let e=this.jumpAttack;return this.jumpAttack=!1,e}},Hs=!1;function Us(){if(Hs)return;Hs=!0;let e=document.createElement(`style`);e.textContent=`
.ba-tbtn{position:relative;width:58px;height:58px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(20,26,42,.7);border:2px solid rgba(255,255,255,.25);color:#fff;overflow:hidden;background-size:cover;background-position:center;touch-action:none}
.ba-tbtn.press{filter:brightness(1.6);border-color:rgba(255,209,71,.8)}
.ba-tbtn .ba-tl{font:800 18px ui-monospace,monospace;pointer-events:none}
.ba-tbtn .ba-tl.word{font-size:11px;letter-spacing:.5px}
.ba-tbtn .ba-tl.kc{position:absolute;right:6px;bottom:4px;font:800 10px/14px ui-monospace,monospace;color:#ffd24a;background:rgba(5,8,16,.85);border-radius:4px;padding:0 4px}
.ba-tcd{position:absolute;inset:0;border-radius:50%;background:conic-gradient(rgba(5,8,16,.75) calc(var(--cd,0)*1%),transparent 0);pointer-events:none}
`,document.head.appendChild(e)}function Ws(){let e=document.createElement(`div`);e.style.cssText=`position:absolute;display:none;pointer-events:none`;let t=document.createElement(`div`);t.className=`base`;let n=document.createElement(`div`);return n.className=`knob`,e.append(t,n),t.style.cssText=`position:absolute;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.2);transform:translate(-50%,-50%)`,n.style.cssText=`position:absolute;width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,.35);transform:translate(-50%,-50%)`,{el:e,base:t,knob:n}}function Gs({el:e,base:t,knob:n},r){if(!r){e.style.display=`none`;return}e.style.display=`block`,t.style.left=`${r.baseX}px`,t.style.top=`${r.baseY}px`,n.style.left=`${r.baseX+r.dx*Is}px`,n.style.top=`${r.baseY+r.dy*Is}px`}(!globalThis.EventTarget||!globalThis.Event)&&console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);var Ks=class extends Event{message;error;constructor(e,t){super(`error`,t),this.message=e.message,this.error=e}},qs=class extends Event{code;reason;wasClean=!0;constructor(e=1e3,t=``,n){super(`close`,n),this.code=e,this.reason=t}},Js={Event,ErrorEvent:Ks,CloseEvent:qs};function Ys(e,t){if(!e)throw Error(t)}function Xs(e){return new e.constructor(e.type,e)}function Zs(e){return`data`in e?new MessageEvent(e.type,e):`code`in e||`reason`in e?new qs(e.code||1999,e.reason||`unknown reason`,e):`error`in e?new Ks(e.error,e):new Event(e.type,e)}var Qs=typeof process<`u`&&process.versions?.node!==void 0,$s=typeof navigator<`u`&&navigator.product===`ReactNative`,ec=Qs||$s?Zs:Xs,tc={maxReconnectionDelay:1e4,minReconnectionDelay:3e3,minUptime:5e3,reconnectionDelayGrowFactor:1.3,connectionTimeout:4e3,maxRetries:1/0,maxEnqueuedMessages:1/0,startClosed:!1,debug:!1},nc=!1;function rc(){}var ic=class e extends EventTarget{_ws;_retryCount=-1;_uptimeTimeout;_connectTimeout;_shouldReconnect=!0;_connectLock=!1;_binaryType=`blob`;_closeCalled=!1;_didWarnAboutClosedSend=!1;_messageQueue=[];_debugLogger=console.log.bind(console);_url;_protocols;_options;constructor(e,t,n={}){super(),this._url=e,this._protocols=t,this._options=n,this._options.startClosed&&(this._shouldReconnect=!1),this._options.debugLogger&&(this._debugLogger=this._options.debugLogger),this._connect()}static get CONNECTING(){return 0}static get OPEN(){return 1}static get CLOSING(){return 2}static get CLOSED(){return 3}get CONNECTING(){return e.CONNECTING}get OPEN(){return e.OPEN}get CLOSING(){return e.CLOSING}get CLOSED(){return e.CLOSED}get binaryType(){return this._ws?this._ws.binaryType:this._binaryType}set binaryType(e){this._binaryType=e,this._ws&&(this._ws.binaryType=e)}get retryCount(){return Math.max(this._retryCount,0)}get bufferedAmount(){return this._messageQueue.reduce((e,t)=>(typeof t==`string`?e+=t.length:t instanceof Blob?e+=t.size:e+=t.byteLength,e),0)+(this._ws?this._ws.bufferedAmount:0)}get extensions(){return this._ws?this._ws.extensions:``}get protocol(){return this._ws?this._ws.protocol:``}get readyState(){return this._closeCalled?e.CLOSED:this._ws?this._ws.readyState:this._options.startClosed?e.CLOSED:e.CONNECTING}get url(){return this._ws?this._ws.url:``}get shouldReconnect(){return this._shouldReconnect}onclose=null;onerror=null;onmessage=null;onopen=null;close(e=1e3,t){if(this._closeCalled=!0,this._shouldReconnect=!1,this._clearTimeouts(),!this._ws){this._debug(`close enqueued: no ws instance`);return}if(this._ws.readyState===this.CLOSED||this._ws.readyState===this.CLOSING){this._debug(`close: already closing or closed`);return}this._disconnect(e,t)}reconnect(e,t){this._shouldReconnect=!0,this._closeCalled=!1,this._didWarnAboutClosedSend=!1,this._retryCount=-1,!this._ws||this._ws.readyState===this.CLOSED||this._ws.readyState===this.CLOSING||this._disconnect(e,t),this._connect()}send(e){if(this._ws&&this._ws.readyState===this.OPEN)return this._debug(`send`,e),this._ws.send(e),!0;this._closeCalled&&!this._didWarnAboutClosedSend&&(this._didWarnAboutClosedSend=!0,console.warn(`ReconnectingWebSocket: send() was called after close(). The message has been buffered, but it will only be delivered if reconnect() is called on this socket. If this socket has been discarded, the message is lost — this usually means a stale socket reference is being used.`));let{maxEnqueuedMessages:t=tc.maxEnqueuedMessages}=this._options;return this._messageQueue.length<t&&(this._debug(`enqueue`,e),this._messageQueue.push(e)),!1}drainQueuedMessages(){let e=this._messageQueue;return this._messageQueue=[],e}_debug(...e){this._options.debug&&this._debugLogger(`RWS>`,...e)}_getNextDelay(){let{reconnectionDelayGrowFactor:e=tc.reconnectionDelayGrowFactor,minReconnectionDelay:t=tc.minReconnectionDelay,maxReconnectionDelay:n=tc.maxReconnectionDelay}=this._options,r=0;return this._retryCount>0&&(r=t*e**(this._retryCount-1),r>n&&(r=n)),this._debug(`next delay`,r),r}_wait(){return new Promise(e=>{setTimeout(e,this._getNextDelay())})}_getNextProtocols(e){if(!e)return Promise.resolve(null);if(typeof e==`string`||Array.isArray(e))return Promise.resolve(e);if(typeof e==`function`){let t=e();if(!t)return Promise.resolve(null);if(typeof t==`string`||Array.isArray(t))return Promise.resolve(t);if(t.then)return t}throw Error(`Invalid protocols`)}_getNextUrl(e){if(typeof e==`string`)return Promise.resolve(e);if(typeof e==`function`){let t=e();if(typeof t==`string`)return Promise.resolve(t);if(t.then)return t}throw Error(`Invalid URL`)}_connect(){if(this._connectLock||!this._shouldReconnect)return;this._connectLock=!0;let{maxRetries:e=tc.maxRetries,connectionTimeout:t=tc.connectionTimeout}=this._options;if(this._retryCount>=e){this._debug(`max retries reached`,this._retryCount,`>=`,e),this._connectLock=!1;return}this._retryCount++,this._debug(`connect`,this._retryCount),this._removeListeners(),this._wait().then(()=>Promise.all([this._getNextUrl(this._url),this._getNextProtocols(this._protocols||null)])).then(([e,n])=>{if(this._closeCalled){this._connectLock=!1;return}!this._options.WebSocket&&typeof WebSocket>`u`&&!nc&&(console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`),nc=!0);let r=this._options.WebSocket||WebSocket;this._debug(`connect`,{url:e,protocols:n}),this._ws=n?new r(e,n):new r(e),this._ws.binaryType=this._binaryType,this._connectLock=!1,this._addListeners(),this._connectTimeout=setTimeout(()=>this._handleTimeout(),t)}).catch(e=>{this._connectLock=!1,this._handleError(new Js.ErrorEvent(Error(e.message),this))})}_handleTimeout(){this._debug(`timeout event`),this._handleError(new Js.ErrorEvent(Error(`TIMEOUT`),this))}_disconnect(e=1e3,t){if(this._clearTimeouts(),this._ws){this._removeListeners();try{(this._ws.readyState===this.OPEN||this._ws.readyState===this.CONNECTING)&&this._ws.close(e,t),this._handleClose(new Js.CloseEvent(e,t,this))}catch{}}}_acceptOpen(){this._debug(`accept open`),this._retryCount=0}_handleOpen=e=>{this._debug(`open event`);let{minUptime:t=tc.minUptime}=this._options;clearTimeout(this._connectTimeout),this._uptimeTimeout=setTimeout(()=>this._acceptOpen(),t),Ys(this._ws,`WebSocket is not defined`),this._ws.binaryType=this._binaryType,this._messageQueue.forEach(e=>{this._ws?.send(e)}),this._messageQueue=[],this.onopen&&this.onopen(e),this.dispatchEvent(ec(e))};_handleMessage=e=>{this._debug(`message event`),this.onmessage&&this.onmessage(e),this.dispatchEvent(ec(e))};_handleError=e=>{this._debug(`error event`,e.message),this._disconnect(void 0,e.message===`TIMEOUT`?`timeout`:void 0),this.onerror&&this.onerror(e),this._debug(`exec error listeners`),this.dispatchEvent(ec(e)),this._connect()};_handleClose=e=>{this._debug(`close event`),this._clearTimeouts(),this._options.shouldReconnectOnClose&&!this._options.shouldReconnectOnClose(e)&&(this._shouldReconnect=!1),this._shouldReconnect&&this._connect(),this.onclose&&this.onclose(e),this.dispatchEvent(ec(e))};_removeListeners(){this._ws&&(this._debug(`removeListeners`),this._ws.removeEventListener(`open`,this._handleOpen),this._ws.removeEventListener(`close`,this._handleClose),this._ws.removeEventListener(`message`,this._handleMessage),this._ws.removeEventListener(`error`,this._handleError),this._ws.addEventListener(`error`,rc))}_addListeners(){this._ws&&(this._debug(`addListeners`),this._ws.addEventListener(`open`,this._handleOpen),this._ws.addEventListener(`close`,this._handleClose),this._ws.addEventListener(`message`,this._handleMessage),this._ws.addEventListener(`error`,this._handleError))}_clearTimeouts(){clearTimeout(this._connectTimeout),clearTimeout(this._uptimeTimeout)}},ac=e=>e[1]!==null&&e[1]!==void 0;function oc(){if(crypto?.randomUUID)return crypto.randomUUID();let e=Date.now(),t=performance?.now&&performance.now()*1e3||0;return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,function(n){let r=Math.random()*16;return e>0?(r=(e+r)%16|0,e=Math.floor(e/16)):(r=(t+r)%16|0,t=Math.floor(t/16)),(n===`x`?r:r&3|8).toString(16)})}function sc(e,t,n={}){let{host:r,path:i,protocol:a,room:o,party:s,basePath:c,prefix:l,query:u}=e,d=r.replace(/^(http|https|ws|wss):\/\//,``);if(d.endsWith(`/`)&&(d=d.slice(0,-1)),i?.startsWith(`/`))throw Error(`path must not start with a slash`);let f=s??`main`,p=i?`/${i}`:``,m=a||(d.startsWith(`localhost:`)||d.startsWith(`127.0.0.1:`)||d.startsWith(`192.168.`)||d.startsWith(`10.`)||d.startsWith(`172.`)&&d.split(`.`)[1]>=`16`&&d.split(`.`)[1]<=`31`||d.startsWith(`[::ffff:7f00:1]:`)?t:`${t}s`),h=`${m}://${d}/${c||`${l||`parties`}/${f}/${o}`}${p}`,g=(e={})=>`${h}?${new URLSearchParams([...Object.entries(n),...Object.entries(e).filter(ac)])}`,_=typeof u==`function`?async()=>g(await u()):g(u);return{host:d,path:p,room:o,name:f,protocol:m,partyUrl:h,urlProvider:_}}var cc=class extends ic{_pk;_pkurl;name;room;host;path;basePath;constructor(e){let t=lc(e);if(super(t.urlProvider,t.protocols,t.socketOptions),this.partySocketOptions=e,this.setWSProperties(t),!e.startClosed&&!this.room&&!this.basePath)throw this.close(),Error(`Either room or basePath must be provided to connect. Use startClosed: true to create a socket and set them via updateProperties before calling reconnect().`);e.disableNameValidation||(e.party?.includes(`/`)&&console.warn(`PartySocket: party name "${e.party}" contains forward slash which may cause routing issues. Consider using a name without forward slashes or set disableNameValidation: true to bypass this warning.`),e.room?.includes(`/`)&&console.warn(`PartySocket: room name "${e.room}" contains forward slash which may cause routing issues. Consider using a name without forward slashes or set disableNameValidation: true to bypass this warning.`))}updateProperties(e){let t=lc({...this.partySocketOptions,...e,host:e.host??this.host,room:e.room??this.room,path:e.path??this.path,basePath:e.basePath??this.basePath});this._url=t.urlProvider,this._protocols=t.protocols,this._options=t.socketOptions,this.setWSProperties(t)}setWSProperties(e){let{_pk:t,_pkurl:n,name:r,room:i,host:a,path:o,basePath:s}=e;this._pk=t,this._pkurl=n,this.name=r,this.room=i,this.host=a,this.path=o,this.basePath=s}reconnect(e,t){if(!this.host)throw Error("The host must be set before connecting, use `updateProperties` method to set it or pass it to the constructor.");if(!this.room&&!this.basePath)throw Error("The room (or basePath) must be set before connecting, use `updateProperties` method to set it or pass it to the constructor.");super.reconnect(e,t)}get id(){return this._pk}get roomUrl(){return this._pkurl}static async fetch(e,t){let n=sc(e,`http`),r=typeof n.urlProvider==`string`?n.urlProvider:await n.urlProvider();return(e.fetch??fetch)(r,t)}};function lc(e){let{id:t,host:n,path:r,party:i,room:a,protocol:o,query:s,protocols:c,...l}=e,u=t||oc(),d=sc(e,`ws`,{_pk:u});return{_pk:u,_pkurl:d.partyUrl,name:d.name,room:d.room,host:d.host,path:d.path,basePath:e.basePath,protocols:c,socketOptions:l,urlProvider:d.urlProvider}}var uc=`_maxPlayers`,dc=`_reconnectToken`,fc=`_delta`,pc=2e3,mc=e=>{if(e!==void 0)return Array.isArray(e)?e:[e]},hc=(e,t,n,r)=>{let i={event:e,payload:t};return n&&(i.to=n),r&&(i.except=r),i},gc=globalThis,_c=globalThis,vc=()=>_c.crypto?.randomUUID?.()||`t-${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`,yc=e=>!(e instanceof Object),bc=(e,t)=>{let n=null;for(let r of Object.keys(t)){let i=t[r];i!==void 0&&(yc(i)&&yc(e[r])&&Object.is(e[r],i)||(n??={},n[r]=i))}return n},xc=e=>e instanceof Function,Sc=class{socket;listeners=new Set;initialStateApplied=!1;remoteStateSeen=!1;options;redirecting=!1;cap;reconnectToken=vc();heartbeatRaf=null;heartbeatTimer=null;lastHeartbeatAt=0;pendingCoalesced=new Map;coalesceFlushScheduled=!1;warnedAsyncSchema=!1;_connectionStatus=`connecting`;_playerId=null;_hostId=null;_sharedState;_players={};_room;_onEvent;_myState={};constructor(e){this.options=e,this._sharedState=e.initialState??{},this._onEvent=e.onEvent,this._room=e.room,this.cap=e.maxPlayers&&e.maxPlayers>0?Math.floor(e.maxPlayers):null,e.initialState&&this.passesSchema(`sharedState`,`outgoing`,e.initialState),this.socket=new cc({host:e.host,party:e.party,room:e.room,query:this.connectionQuery()}),this.socket.addEventListener(`open`,this.handleOpen),this.socket.addEventListener(`message`,this.handleMessage),this.socket.addEventListener(`close`,this.handleClose),this.socket.addEventListener(`error`,this.handleError),this.startHeartbeat()}startHeartbeat(){let e=e=>{e-this.lastHeartbeatAt>=2e3&&(this.lastHeartbeatAt=e,this._connectionStatus===`connected`&&this.send({type:`heartbeat`}))},t=gc.requestAnimationFrame?gc.requestAnimationFrame.bind(gc):null;if(t){let n=r=>{this.heartbeatRaf=t(n),e(r)};this.heartbeatRaf=t(n)}else this.heartbeatTimer=setInterval(()=>{this._connectionStatus===`connected`&&this.send({type:`heartbeat`})},pc)}connectionQuery(){let e={[dc]:this.reconnectToken,[fc]:`1`};return this.cap===null?e:{...e,[uc]:String(this.cap)}}redirectTo(e,t){this._room=e,this.cap=t>0?t:this.cap,this._connectionStatus=`connecting`,this.initialStateApplied=!1,this.remoteStateSeen=!1,this._players={},this._hostId=null,this._playerId=null,this._sharedState=this.options.initialState??{},this.pendingCoalesced.clear(),this.redirecting=!0,this.socket.updateProperties({room:e,query:this.connectionQuery()}),this.socket.reconnect(),this.redirecting=!1,this.notify()}get connectionStatus(){return this._connectionStatus}get playerId(){return this._playerId}get hostId(){return this._hostId}get sharedState(){return this._sharedState}get players(){return this._players}get isHost(){return this._hostId!==null&&this._hostId===this._playerId}get room(){return this._room}getSnapshot(){return{connectionStatus:this._connectionStatus,playerId:this._playerId,hostId:this._hostId,sharedState:this._sharedState,players:this._players,room:this._room}}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}updateSharedState(e){let t=this._sharedState,n=xc(e)?e(t):{...t,...e};if(!this.passesSchema(`sharedState`,`outgoing`,n))return;this._sharedState=n,this.flushCoalescedEvents();let r=bc(t,xc(e)?n:e);r&&this.send({type:`state_patch`,data:r}),this.notify()}updateMyState(e){if(!this._playerId)return;let t=this._players[this._playerId]?.state??{},n=xc(e)?e(t):{...t,...e};if(!this.passesSchema(`playerState`,`outgoing`,n))return;let r=this._players[this._playerId]??{id:this._playerId};this._players={...this._players,[this._playerId]:{...r,state:n}},this._myState=n,this.flushCoalescedEvents();let i=bc(t,xc(e)?n:e);i&&this.send({type:`player_state_patch`,data:i}),this.notify()}sendEvent(e,t,n){let r=mc(n?.to),i=mc(n?.except);if(n?.coalesce){let n=`${e}\u0000${r?.join(`,`)??``}\u0000${i?.join(`,`)??``}`;this.pendingCoalesced.set(n,{event:e,payload:t,to:r,except:i}),this.coalesceFlushScheduled||(this.coalesceFlushScheduled=!0,Promise.resolve().then(()=>{this.coalesceFlushScheduled=!1,this.flushCoalescedEvents()}));return}this.flushCoalescedEvents(),this.send({type:`emit`,data:hc(e,t,r,i)})}set onEvent(e){this._onEvent=e}destroy(){this.flushCoalescedEvents(),this.heartbeatRaf!==null&&(gc.cancelAnimationFrame?.(this.heartbeatRaf),this.heartbeatRaf=null),this.heartbeatTimer!==null&&(clearInterval(this.heartbeatTimer),this.heartbeatTimer=null),this.socket.removeEventListener(`open`,this.handleOpen),this.socket.removeEventListener(`message`,this.handleMessage),this.socket.removeEventListener(`close`,this.handleClose),this.socket.removeEventListener(`error`,this.handleError),this.socket.close(),this.listeners.clear()}send(e){this.socket.send(JSON.stringify(e))}flushCoalescedEvents(){if(this.pendingCoalesced.size!==0){for(let{event:e,payload:t,to:n,except:r}of this.pendingCoalesced.values())this.send({type:`emit`,data:hc(e,t,n,r)});this.pendingCoalesced.clear()}}passesSchema(e,t,n,r){let i=this.options.schemas,a=e===`sharedState`?i?.sharedState:i?.playerState;if(!a||Object.keys(n).length===0)return!0;let o=a[`~standard`].validate(n);if(o instanceof Promise)return this.warnedAsyncSchema||(this.warnedAsyncSchema=!0,console.warn(`[multiplayer] async schemas are not supported — validation skipped. Use a synchronous schema.`)),!0;if(!o.issues)return!0;let s={channel:e,direction:t,issues:o.issues,data:n};return r!==void 0&&(s.from=r),i?.onViolation?i.onViolation(s):console.warn(`[multiplayer] ${t} ${e} failed schema validation`,o.issues),!1}notify(){for(let e of this.listeners)e()}handleOpen=()=>{this._connectionStatus=`connecting`,this.notify()};handleClose=()=>{this.redirecting||(this._connectionStatus=`disconnected`,this.notify())};handleError=()=>{this._connectionStatus=`error`,this.notify()};maybeSeedInitialState(e){e===this.socket.id&&this.options.initialState&&!this.initialStateApplied&&!this.remoteStateSeen&&(this.initialStateApplied=!0,this.send({type:`state_patch`,data:this.options.initialState}))}handleMessage=e=>{try{let t=JSON.parse(e.data);switch(t.type){case`ping`:this.send({type:`pong`});break;case`sync`:this._connectionStatus=`connected`,this._playerId=this.socket.id??null,this._hostId=t.data.hostId,this._players=t.data.players,Object.keys(t.data.state).length>0&&(this.remoteStateSeen=!0);{let e=Object.keys(this._sharedState).length===0?t.data.state:{...this._sharedState,...t.data.state};this.passesSchema(`sharedState`,`incoming`,e)&&(this._sharedState=e)}this.maybeSeedInitialState(t.data.hostId),this._playerId&&Object.keys(this._myState).length>0&&(this._players={...this._players,[this._playerId]:{...this._players[this._playerId],id:this._playerId,state:this._myState}},this.send({type:`player_state_patch`,data:this._myState}));break;case`player_joined`:this._players={...this._players,[t.data.id]:t.data};break;case`player_left`:{let e={...this._players};delete e[t.data.id],this._players=e;break}case`host`:this._hostId=t.data.id,this.maybeSeedInitialState(t.data.id);break;case`state_patch`:{this.remoteStateSeen=!0;let e={...this._sharedState,...t.data};if(!this.passesSchema(`sharedState`,`incoming`,e))break;this._sharedState=e;break}case`player_state`:{let e=this._players[t.data.id]??{id:t.data.id},n={...e.state,...t.data.state};if(!this.passesSchema(`playerState`,`incoming`,n,t.data.id))break;this._players={...this._players,[t.data.id]:{...e,state:n}};break}case`player_connection`:{let e=this._players[t.data.id];if(!e)break;this._players={...this._players,[t.data.id]:{...e,connected:t.data.connected}};break}case`event`:this._onEvent?.(t.data.event,t.data.payload,t.data.from);break;case`room_full`:this.redirectTo(t.data.room,t.data.capacity);return}this.notify()}catch(e){console.error(`Failed to process multiplayer message`,e)}}};function Cc(e,t){return!e||e.length===0?0:e[Math.max(0,Math.min(e.length-1,t-1))]}function wc(e,t,n){return e.base[t]+(e.growth[t]??0)*(n-1)}var J=e=>({...e,isUltimate:e.key===`R`,maxRank:e.maxRank??(e.key===`R`?3:4)}),Tc=[{id:`knight`,name:`Garran`,title:`the Bulwark`,role:`Frontline Bruiser`,primary:`str`,attackType:`melee`,attackDamageType:`physical`,attackKind:`melee`,model:`Knight`,weaponR:`sword_2handed`,twoHanded:!0,basicRhythm:[{timeMult:1,dmgMult:1},{timeMult:1,dmgMult:1},{timeMult:1.92,dmgMult:2.5,aoe:4}],tint:5211903,blurb:`A walking wall. Stun, charge in, and spin the throne to bloody mulch.`,difficulty:1,base:{hp:640,mp:240,hpRegen:4.5,mpRegen:1.6,damage:46,armor:4,attackRange:2.3,attackSpeed:1.2,moveSpeed:6,projectileSpeed:0},growth:{hp:92,mp:20,hpRegen:.45,mpRegen:.12,damage:5,armor:.7,attackSpeed:.018},attr:{str:26,agi:14,int:12},abilities:{Q:J({key:`Q`,name:`Cleaving Blow`,effect:`knight:Q`,targeting:`direction`,castRange:3.6,manaCost:[0,0,0,0],cooldown:[8,7.5,7,6.5],values:{damage:[125,170,215,260],stun:[.7,.9,1.05,1.2],cone:[90,90,90,90]},desc:`A sweeping two-handed arc — damage and stun everyone in front.`}),W:J({key:`W`,name:`Seismic Slam`,effect:`knight:W`,targeting:`direction`,castRange:7,manaCost:[0,0,0,0],cooldown:[10,9.5,9,8.5],values:{damage:[125,175,225,275],slow:[25,25,30,30],slowDur:[1,1,1.25,1.25],width:[2,2,2,2]},desc:`Slam a fissure forward, damaging and slowing a line of enemies.`}),E:J({key:`E`,name:`Iron Stance`,effect:`knight:E`,targeting:`self`,castRange:0,manaCost:[0,0,0,0],cooldown:[16,15,14,13],values:{shield:[120,200,280,360],duration:[4,4,4,4],speed:[16,18,20,22]},desc:`Plant your feet — a shield of will absorbs damage and steadies your march.`}),R:J({key:`R`,name:`Whirlwind`,effect:`knight:R`,targeting:`self`,castRange:0,manaCost:[0,0,0],cooldown:[70,62,54],values:{dps:[220,290,360],radius:[4.5,5,5.5],duration:[2.4,2.6,2.8],slow:[30,35,40]},desc:`Spin in a deadly cyclone, shredding and slowing all around you.`}),DASH:J({key:`DASH`,name:`Charge`,effect:`knight:DASH`,targeting:`dash`,castRange:7,manaCost:[0],cooldown:[6],maxRank:1,values:{speed:[26],iframe:[.24]},desc:`Barrel forward, briefly unstoppable.`}),JUMP:J({key:`JUMP`,name:`Skyfall Cleave`,effect:`knight:JUMP`,targeting:`self`,castRange:5,manaCost:[0],cooldown:[8],maxRank:1,values:{base:[90],perLevel:[9],radius:[2.6],slow:[25],slowDur:[1]},desc:`Leap and bring the greatsword down — a slowing shockwave on landing.`})}},{id:`ranger`,name:`Sylva`,title:`the Keen`,role:`Kiting Carry`,primary:`agi`,attackType:`ranged`,attackDamageType:`physical`,attackKind:`arrow`,model:`Ranger`,weaponL:`bow`,basic:{pierce:!0},basicRhythm:[{timeMult:1,dmgMult:1},{timeMult:1,dmgMult:1},{timeMult:1.15,dmgMult:1.25,slow:{pct:30,dur:1.2}}],tint:4839034,blurb:`Death at range. Spread shots, dodge rolls, and a sky full of arrows.`,difficulty:2,base:{hp:490,mp:280,hpRegen:3,mpRegen:2,damage:48,armor:2,attackRange:12,attackSpeed:.9,moveSpeed:6.5,projectileSpeed:35},growth:{hp:72,mp:22,hpRegen:.3,mpRegen:.16,damage:5.5,armor:.5,attackSpeed:.03},attr:{str:15,agi:26,int:14},abilities:{Q:J({key:`Q`,name:`Multishot`,effect:`ranger:Q`,targeting:`direction`,castRange:10,manaCost:[0,0,0,0],cooldown:[6,5.5,5,4.5],values:{damage:[65,90,115,135],arrows:[3,3,5,5],spread:[22,22,26,26]},desc:`Loose a fan of arrows.`}),W:J({key:`W`,name:`Hunter's Focus`,effect:`ranger:W`,targeting:`self`,castRange:0,manaCost:[0,0,0,0],cooldown:[14,13,12,11],values:{atkSpeed:[30,35,40,45],moveSpeed:[12,14,16,18],duration:[4,4.5,5,5.5]},desc:`Draw a bead — attack and move faster for a few seconds.`}),E:J({key:`E`,name:`Snare Trap`,effect:`ranger:E`,targeting:`ground`,castRange:10,manaCost:[0,0,0,0],cooldown:[14,13,12,11],values:{damage:[95,130,160,190],root:[1.2,1.5,1.8,2.1],radius:[2.2,2.2,2.4,2.4],life:[8,8,8,8]},desc:`Arm a trap — first enemy in is rooted and hurt.`}),R:J({key:`R`,name:`Rain of Arrows`,effect:`ranger:R`,targeting:`ground`,castRange:14,manaCost:[0,0,0],cooldown:[60,54,48],values:{dps:[200,260,320],radius:[5.5,6,6.5],duration:[3,3.2,3.4],slow:[25,30,35]},desc:`Blanket a wide area in arrows.`}),DASH:J({key:`DASH`,name:`Roll`,effect:`ranger:DASH`,targeting:`dash`,castRange:7,manaCost:[0],cooldown:[5],maxRank:1,values:{speed:[30],iframe:[.28]},desc:`Combat roll — briefly untargetable.`}),JUMP:J({key:`JUMP`,name:`Tempest Volley`,effect:`ranger:JUMP`,targeting:`self`,castRange:0,manaCost:[0],cooldown:[8],maxRank:1,values:{air:[.88],iframe:[1],shots:[9],damage:[58],perLevel:[6],radius:[3.2]},desc:`Spring up, spin, and loose arrows in every direction — untouchable until you land.`})}},{id:`mage`,name:`V-yx`,title:`the Emberhex`,role:`Burst Caster`,primary:`int`,attackType:`ranged`,attackDamageType:`magic`,attackKind:`bolt`,model:`Mage`,weaponR:`staff`,basic:{splash:1.6},basicRhythm:[{timeMult:1,dmgMult:1},{timeMult:1,dmgMult:1},{timeMult:1.15,dmgMult:1.25,slow:{pct:25,dur:1}}],tint:12607743,blurb:`Glass and fire. Nuke from afar, freeze the brave, and drop a meteor on the throne.`,difficulty:2,base:{hp:450,mp:400,hpRegen:2.6,mpRegen:3,damage:44,armor:1,attackRange:11,attackSpeed:.78,moveSpeed:6.2,projectileSpeed:27},growth:{hp:66,mp:36,hpRegen:.26,mpRegen:.24,damage:4.5,armor:.4,attackSpeed:.014},attr:{str:13,agi:13,int:28},abilities:{Q:J({key:`Q`,name:`Fireball`,effect:`mage:Q`,targeting:`direction`,castRange:11,manaCost:[0,0,0,0],cooldown:[5,4.6,4.2,3.8],values:{damage:[150,200,250,300],radius:[2.6,2.8,3,3.2]},desc:`Hurl a fireball that bursts on impact.`}),W:J({key:`W`,name:`Frost Nova`,effect:`mage:W`,targeting:`ground`,castRange:9,manaCost:[0,0,0,0],cooldown:[10,9,8,7],values:{damage:[130,175,220,265],slow:[35,40,45,50],slowDur:[2,2.2,2.4,2.6],radius:[3.2,3.4,3.6,3.8]},desc:`Detonate a ring of frost — damage and heavy slow.`}),E:J({key:`E`,name:`Cinderfall`,effect:`mage:E`,targeting:`ground`,castRange:10,manaCost:[0,0,0,0],cooldown:[12,11,10,9],values:{dps:[70,100,130,160],radius:[3,3.2,3.4,3.6],duration:[4,4,4,4],slow:[15,15,20,20]},desc:`Rain embers over an area — burns and slows all who stand in it.`}),R:J({key:`R`,name:`Meteor`,effect:`mage:R`,targeting:`ground`,castRange:13,manaCost:[0,0,0],cooldown:[75,66,57],values:{damage:[420,600,780],radius:[4.5,5,5.5],delay:[1.2,1.2,1.2],slow:[40,45,50]},desc:`Call down a meteor after a brief telegraph — massive burst.`}),DASH:J({key:`DASH`,name:`Blink`,effect:`mage:DASH`,targeting:`dash`,castRange:9,manaCost:[0],cooldown:[6],maxRank:1,values:{range:[9],iframe:[.22]},desc:`Teleport a short distance instantly.`}),JUMP:J({key:`JUMP`,name:`Emberburst`,effect:`mage:JUMP`,targeting:`self`,castRange:0,manaCost:[0],cooldown:[9],maxRank:1,values:{air:[.88],iframe:[1],shots:[7],damage:[62],perLevel:[7],splash:[1.7],radius:[3.4]},desc:`Rise, hang, and detonate a wheel of fire around you — untouchable until you land.`})}},{id:`rogue`,name:`Vesper`,title:`the Veiled`,role:`Assassin`,primary:`agi`,attackType:`melee`,attackDamageType:`physical`,attackKind:`melee`,model:`Rogue_Hooded`,weaponR:`dagger`,weaponL:`dagger`,cleaveTargets:1,tint:16734840,blurb:`In, out, gone. Poison, vanish, and execute anyone clinging to life.`,difficulty:3,base:{hp:480,mp:260,hpRegen:3,mpRegen:1.8,damage:44,armor:2,attackRange:2.2,attackSpeed:1.4,moveSpeed:6.5,projectileSpeed:0},growth:{hp:70,mp:22,hpRegen:.3,mpRegen:.14,damage:6,armor:.6,attackSpeed:.035},attr:{str:15,agi:28,int:13},abilities:{Q:J({key:`Q`,name:`Poison Lunge`,effect:`rogue:Q`,targeting:`direction`,castRange:4.5,manaCost:[0,0,0,0],cooldown:[7,6.5,6,5.5],values:{damage:[95,135,180,225],dps:[40,55,70,85],dur:[4,4,4,4],speed:[22,22,22,22]},desc:`Lunge and coat the target in poison.`}),W:J({key:`W`,name:`Rupture`,effect:`rogue:W`,targeting:`direction`,castRange:7,manaCost:[0,0,0,0],cooldown:[9,8.5,8,7.5],values:{damage:[95,135,180,225],dmgAmp:[12,15,18,21],ampDur:[3,3,3.5,3.5],bleedDps:[35,50,62,75],bleedDur:[3,3,3,3]},desc:`Open a bleeding wound — the target bleeds and takes more damage.`}),E:J({key:`E`,name:`Smoke`,effect:`rogue:E`,targeting:`self`,castRange:0,manaCost:[0,0,0,0],cooldown:[18,16,14,12],values:{duration:[3,3.5,4,4.5],speed:[22,24,26,28]},desc:`Vanish in smoke — your first strike from the shadows CRITS for double damage.`}),R:J({key:`R`,name:`Execute`,effect:`rogue:R`,targeting:`direction`,castRange:6,manaCost:[0,0,0],cooldown:[70,62,54],values:{damage:[220,310,400],execMult:[3,3.25,3.5],speed:[40,40,40]},desc:`Blink-strike the enemy ahead — lethal to the wounded.`}),DASH:J({key:`DASH`,name:`Shadowstep`,effect:`rogue:DASH`,targeting:`dash`,castRange:8,manaCost:[0],cooldown:[5],maxRank:1,values:{speed:[34],iframe:[.26]},desc:`Slip through shadow — briefly untargetable.`}),JUMP:J({key:`JUMP`,name:`Deathfall`,effect:`rogue:JUMP`,targeting:`self`,castRange:5,manaCost:[0],cooldown:[7],maxRank:1,values:{base:[110],perLevel:[10],radius:[1.8],slow:[20],slowDur:[.75]},desc:`Plunge from above with both blades — a tight burst on landing.`})}},{id:`blackknight`,name:`Aurelius`,title:`the Dawnward`,role:`Juggernaut`,primary:`str`,attackType:`melee`,attackDamageType:`physical`,attackKind:`melee`,model:`Paladin_with_Helmet`,weaponR:`paladin_hammer`,weaponL:`paladin_shield`,scale:1.06,radius:.75,tint:16766826,blurb:`A holy wall with a hammer. Stand where he stands, or learn how cathedrals fall.`,difficulty:1,base:{hp:720,mp:220,hpRegen:5,mpRegen:1.4,damage:58,armor:5,attackRange:2.6,attackSpeed:.85,moveSpeed:5.6,projectileSpeed:0},growth:{hp:100,mp:18,hpRegen:.5,mpRegen:.1,damage:6,armor:.8,attackSpeed:.014},attr:{str:30,agi:8,int:10},abilities:{Q:J({key:`Q`,name:`Executioner's Arc`,effect:`blackknight:Q`,targeting:`direction`,castRange:3.8,manaCost:[0,0,0,0],cooldown:[6,5.5,5,4.5],values:{damage:[140,190,240,290],cone:[110,110,110,110],slow:[20,20,20,20],slowDur:[1,1,1,1]},desc:`A vast sweeping cut — carve and slow everyone in front.`}),W:J({key:`W`,name:`Consecrating Smite`,effect:`blackknight:W`,targeting:`ground`,castRange:8,manaCost:[0,0,0,0],cooldown:[11,10.5,10,9.5],values:{damage:[130,180,230,285],stun:[.5,.6,.7,.8],radius:[2.4,2.6,2.8,3]},desc:`Call down a pillar of holy light — damage and stun where it lands.`}),E:J({key:`E`,name:`Iron Bastion`,effect:`blackknight:E`,targeting:`self`,castRange:0,manaCost:[0,0,0,0],cooldown:[16,15,14,13],values:{armor:[8,12,16,20],hps:[30,45,60,75],duration:[4,4,4,4]},desc:`Become the wall — armor up and mend while you march.`}),R:J({key:`R`,name:`Oblivion Slam`,effect:`blackknight:R`,targeting:`self`,castRange:0,manaCost:[0,0,0],cooldown:[70,62,54],values:{damage:[360,500,640],radius:[4.5,5,5.5],stun:[.8,1,1.2],knockback:[8,8,8]},desc:`Bring the hammer down — everything nearby is thrown and stunned.`}),DASH:J({key:`DASH`,name:`Dread March`,effect:`blackknight:DASH`,targeting:`dash`,castRange:7,manaCost:[0],cooldown:[6.5],maxRank:1,values:{speed:[20],iframe:[.24]},desc:`Advance like doom — briefly unstoppable.`}),JUMP:J({key:`JUMP`,name:`Dawnbreaker`,effect:`blackknight:JUMP`,targeting:`self`,castRange:5,manaCost:[0],cooldown:[9],maxRank:1,values:{base:[100],perLevel:[9],radius:[3],stun:[.4]},desc:`Leap and shatter the earth — a wide stunning slam.`})}},{id:`witch`,name:`Grimelda`,title:`the Bog Witch`,role:`Hex Zoner`,primary:`int`,attackType:`ranged`,attackDamageType:`magic`,attackKind:`bolt`,model:`Witch`,weaponR:`wand_A`,basic:{splash:1.6},tint:8380554,blurb:`Curses bubble, brooms fly, and her enemies make lovely mushrooms.`,difficulty:3,base:{hp:500,mp:300,hpRegen:3.2,mpRegen:2.2,damage:42,armor:2,attackRange:7.5,attackSpeed:1.05,moveSpeed:6,projectileSpeed:16},growth:{hp:72,mp:26,hpRegen:.3,mpRegen:.18,damage:4.2,armor:.5,attackSpeed:.02},attr:{str:12,agi:14,int:26},abilities:{Q:J({key:`Q`,name:`Hex Bolt`,effect:`witch:Q`,targeting:`direction`,castRange:9,manaCost:[0,0,0,0],cooldown:[7,6.5,6,5.5],values:{damage:[125,165,210,255],slow:[20,25,30,35],slowDur:[1.2,1.2,1.2,1.2],speed:[18,18,18,18]},desc:`Spit a curdled bolt — damage and slow whoever it strikes.`}),W:J({key:`W`,name:`Cauldron Brew`,effect:`witch:W`,targeting:`ground`,castRange:8,manaCost:[0,0,0,0],cooldown:[13,12,11,10],values:{dps:[75,105,140,170],slow:[25,30,35,40],radius:[3.2,3.4,3.6,3.8],duration:[4,4,4,4]},desc:`Spill the cauldron — the brew burns and slows all who wade in.`}),E:J({key:`E`,name:`Bog Grasp`,effect:`witch:E`,targeting:`ground`,castRange:8,manaCost:[0,0,0,0],cooldown:[13,12,11,10],values:{damage:[95,130,160,190],root:[1,1.25,1.5,1.75],radius:[2.2,2.2,2.4,2.4]},desc:`Vines erupt from the bog — damage and root everyone caught.`}),R:J({key:`R`,name:`Grand Hex`,effect:`witch:R`,targeting:`ground`,castRange:8,manaCost:[0,0,0],cooldown:[80,70,60],values:{radius:[4,4.5,5],duration:[2,2.4,2.8],slow:[40,40,40]},desc:`Hex the ground — everyone caught becomes a harmless mushroom.`}),DASH:J({key:`DASH`,name:`Broom Surge`,effect:`witch:DASH`,targeting:`dash`,castRange:9,manaCost:[0],cooldown:[5.5],maxRank:1,values:{speed:[24],iframe:[.22]},desc:`Take to the broom — a quick, untargetable dash.`}),JUMP:J({key:`JUMP`,name:`Hexfall`,effect:`witch:JUMP`,targeting:`self`,castRange:5,manaCost:[0],cooldown:[8],maxRank:1,values:{base:[90],perLevel:[8],radius:[2.8],slow:[25],slowDur:[1]},desc:`Dive off the broom — a cursed burst that slows on landing.`})}}],Ec=Object.fromEntries(Tc.map(e=>[e.id,e])),Dc=`knight`,Oc=new Map(Object.entries({Melee_2H_Attack_Chop:{dur:1.633,contact:.44},Melee_2H_Attack_Slice:{dur:1.1,contact:.34},Melee_2H_Attack_Spin:{dur:2.4,contact:.42},Melee_2H_Attack_Spinning:{dur:.667,contact:.4},Melee_1H_Attack_Chop:{dur:1.067,contact:.54},Melee_1H_Attack_Slice_Diagonal:{dur:1,contact:.41},Melee_1H_Attack_Slice_Horizontal:{dur:1.367,contact:.3},Melee_1H_Attack_Stab:{dur:1.6,contact:.24},Melee_1H_Attack_Jump_Chop:{dur:1.333,contact:.54},Melee_Dualwield_Attack_Chop:{dur:1.267,contact:.43},Melee_Dualwield_Attack_Slice:{dur:1.167,contact:.47},Melee_Dualwield_Attack_Stab:{dur:1.6,contact:.24},Melee_Unarmed_Attack_Punch_A:{dur:1.167,contact:.37},Ranged_Bow_Release:{dur:1.333,contact:.31},Ranged_Bow_Release_Up:{dur:1.367,contact:.3},Ranged_Magic_Shoot:{dur:.933,contact:.38},Ranged_Magic_Raise:{dur:2.1,contact:.55},Ranged_Magic_Summon:{dur:4.3,contact:.68},Ranged_Magic_Spellcasting:{dur:.667,contact:.5},Throw:{dur:1.367,contact:.45},Hit_A:{dur:.667,contact:.5},Hit_B:{dur:.867,contact:.5},Jump_Start:{dur:.6,contact:.5},Jump_Land:{dur:.667,contact:.5},Dodge_Forward:{dur:.4,contact:.5},PickUp:{dur:1.3,contact:.5},Melee_Blocking:{dur:1.067,contact:.5},Dodge_Backward:{dur:.4,contact:.5},Spawn_Air:{dur:1.3,contact:.5},Melee_2H_Attack:{dur:1.333,contact:.35},Melee_2H_Slam:{dur:2.833,contact:.33},Melee_Unarmed_Smash:{dur:3.467,contact:.27}})),kc=new Map(Object.entries({Ranged_Magic_Summon:3,Ranged_Magic_Raise:1.75,Melee_1H_Attack_Jump_Chop:2.9})),Ac=1.5;function jc(e){return kc.get(e)??(e.startsWith(`Melee_2H_`)?1.5:1)}var Mc=new Map(Object.entries({knight:[`Melee_2H_Attack_Chop`,`Melee_2H_Attack_Slice`,`Melee_2H_Attack_Spin`],rogue:[`Melee_Dualwield_Attack_Chop`,`Melee_Dualwield_Attack_Slice`],ranger:[`Ranged_Bow_Release`],mage:[`Ranged_Magic_Shoot`],blackknight:[`Melee_1H_Attack_Chop`,`Melee_1H_Attack_Slice_Diagonal`,`Melee_1H_Attack_Slice_Horizontal`],witch:[`Ranged_Magic_Shoot`],skwarrior:[`Melee_1H_Attack_Chop`,`Melee_1H_Attack_Stab`],skminion:[`Melee_Unarmed_Attack_Punch_A`,`Melee_1H_Attack_Chop`],skmage:[`Ranged_Magic_Shoot`],frostgolem:[`Melee_2H_Attack`,`Melee_2H_Slam`,`Melee_Unarmed_Smash`]}));function Nc(e,t){let n=Mc.get(e);return!n||n.length===0?`Melee_1H_Attack_Chop`:n[Math.max(0,t-1)%n.length]}var Pc=new Map(Object.entries({knight:{Q:`Melee_2H_Attack_Slice`,W:`Melee_2H_Attack_Chop`,E:`Melee_Blocking`,R:`Melee_2H_Attack_Spinning`,DASH:`Dodge_Forward`,JUMP:`Melee_1H_Attack_Jump_Chop`},ranger:{Q:`Ranged_Bow_Release_Up`,W:`Ranged_Bow_Release`,E:`PickUp`,R:`Ranged_Bow_Release_Up`,DASH:`Dodge_Forward`,JUMP:`Melee_1H_Attack_Jump_Chop`},mage:{Q:`Ranged_Magic_Shoot`,W:`Ranged_Magic_Raise`,E:`Ranged_Magic_Shoot`,R:`Ranged_Magic_Summon`,DASH:`Dodge_Forward`,JUMP:`Melee_1H_Attack_Jump_Chop`},rogue:{Q:`Melee_Dualwield_Attack_Stab`,W:`Melee_Dualwield_Attack_Slice`,E:`Dodge_Backward`,R:`Melee_Dualwield_Attack_Slice`,DASH:`Dodge_Forward`,JUMP:`Melee_1H_Attack_Jump_Chop`},blackknight:{Q:`Melee_1H_Attack_Slice_Horizontal`,W:`Melee_1H_Attack_Chop`,E:`Melee_Blocking`,R:`Melee_2H_Attack_Chop`,DASH:`Dodge_Forward`,JUMP:`Melee_1H_Attack_Jump_Chop`},witch:{Q:`Ranged_Magic_Shoot`,W:`Ranged_Magic_Summon`,E:`Ranged_Magic_Raise`,R:`Ranged_Magic_Raise`,DASH:`Dodge_Forward`,JUMP:`Melee_1H_Attack_Jump_Chop`}}));function Fc(e,t){let n=Oc.get(e),r=jc(e);return n?Math.max(r,n.dur*1e3/Math.max(1,t)):r}function Ic(e,t){let n=Oc.get(e);return n?n.dur*1e3/Fc(e,t):t}function Lc(e,t){let n=Oc.get(e);return n?n.contact*Ic(e,t):t*.45}function Rc(e,t){let n=Pc.get(e)?.[t];if(!n)return 0;let r=Oc.get(n);return r?r.contact*r.dur*1e3/jc(n):0}var zc=[{id:`boots`,name:`Sprinters`,cost:450,icon:`item-boots`,stats:{moveSpeed:.8},desc:`+0.8 move speed.`},{id:`vitality`,name:`Vital Stone`,cost:550,icon:`item-vitality`,stats:{hp:260,hpRegen:3},desc:`+260 HP, +3 HP regen.`},{id:`whetstone`,name:`Whetstone`,cost:700,icon:`item-whetstone`,stats:{damage:18},desc:`+18 attack damage.`},{id:`ringmail`,name:`Ringmail`,cost:650,icon:`item-ringmail`,stats:{armor:6},desc:`+6 armor.`},{id:`wardstone`,name:`Wardstone`,cost:800,icon:`item-wardstone`,stats:{magicResist:.2},desc:`+20% magic resist.`},{id:`quiver`,name:`Swift Quiver`,cost:900,icon:`item-quiver`,stats:{attackSpeed:30,damage:8},desc:`+0.30 attack speed, +8 damage.`},{id:`tome`,name:`Arcane Tome`,cost:950,icon:`item-tome`,stats:{abilityPower:.18,hp:150},desc:`+18% ability power, +150 health.`},{id:`vampiric`,name:`Vampiric Edge`,cost:1300,icon:`item-vampiric`,stats:{lifesteal:.15,damage:12},desc:`+15% lifesteal, +12 damage.`},{id:`arcaneorb`,name:`Arcane Orb`,cost:1700,icon:`item-arcaneorb`,stats:{abilityPower:.3,hp:180,damage:10},desc:`+30% ability power, +180 health.`},{id:`reaver`,name:`Reaver's Edge`,cost:1700,icon:`item-reaver`,stats:{damage:38,attackSpeed:15},desc:`+38 attack damage, +0.15 attack speed.`},{id:`elixir`,name:`Elixir Flask`,cost:700,icon:`item-elixir`,stats:{hpRegen:4},active:{kind:`heal`,cooldown:35,amount:320,desc:`Heal 320 HP.`},desc:`+4 HP regen. Active: heal.`},{id:`talisman`,name:`Cleanse Talisman`,cost:900,icon:`item-talisman`,stats:{magicResist:.12},active:{kind:`cleanse`,cooldown:24,desc:`Clear disables.`},desc:`+12% magic resist. Active: cleanse.`},{id:`swiftboots`,name:`Phase Sandals`,cost:1100,icon:`item-swiftboots`,stats:{moveSpeed:1.3,attackSpeed:18},active:{kind:`haste`,cooldown:30,amount:40,desc:`+40% move speed, 3s.`},desc:`+1.3 move speed, +0.18 attack speed. Active: haste.`},{id:`bulwark`,name:`Aegis Bulwark`,cost:1500,icon:`item-bulwark`,stats:{hp:320,armor:5},active:{kind:`shield`,cooldown:45,amount:350,desc:`Shield 350, 4s.`},desc:`+320 HP, +5 armor. Active: shield.`},{id:`phaseband`,name:`Phaseband`,cost:1600,icon:`item-phaseband`,stats:{moveSpeed:.6,hp:180},active:{kind:`blink`,cooldown:14,range:9,desc:`Blink 9 units.`},desc:`+0.6 move speed, +180 HP. Active: blink.`}],Bc=Object.fromEntries(zc.map(e=>[e.id,e]));function Vc(e){let t={damage:0,hp:0,mp:0,armor:0,magicResist:0,moveSpeed:0,hpRegen:0,mpRegen:0,attackSpeed:0,abilityPower:0,lifesteal:0};for(let n of e){let e=Bc[n];if(e)for(let n of Object.keys(t))t[n]+=e.stats[n]??0}return t}var Hc=(e,t)=>{let n=e.x-t.x,r=e.y-t.y;return n*n+r*r},Uc=(e,t)=>Math.sqrt(Hc(e,t));function Wc(e,t){let n=Math.sqrt(e*e+t*t);return n>1e-6?{x:e/n,y:t/n}:{x:0,y:0}}var Gc=(e,t,n)=>e<t?t:e>n?n:e,Kc=(e,t,n)=>e+(t-e)*n;function qc(e,t){let n=(t-e)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<=-Math.PI&&(n+=Math.PI*2),n}var Jc=(e,t)=>Math.atan2(t,e);function Yc(e){let t=e.rngState|0;t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,e.rngState=t,((n^n>>>14)>>>0)/4294967296}var Xc=(e,t,n)=>t+Yc(e)*(n-t),Zc=(e,t)=>Math.floor(Yc(e)*t),Qc=(e,t)=>t.length?t[Zc(e,t.length)]:void 0;function $c(e){let t=Ec[e.champId];if(!t)return;let n=e.level,r=Vc(e.items),i=e.maxHp>0?e.hp/e.maxHp:1;e.maxHp=wc(t,`hp`,n)+r.hp,e.hpRegen=wc(t,`hpRegen`,n)+r.hpRegen,e.baseDamage=wc(t,`damage`,n)+r.damage,e.armor=wc(t,`armor`,n)+r.armor,e.attackRange=wc(t,`attackRange`,n),e.attackSpeed=wc(t,`attackSpeed`,n)+r.attackSpeed/100,e.moveSpeed=wc(t,`moveSpeed`,n)+r.moveSpeed,e.projectileSpeed=wc(t,`projectileSpeed`,n),e.magicResist=h+r.magicResist,e.abilityPower=r.abilityPower,e.lifesteal=r.lifesteal,e.hp=e.alive?Math.min(e.maxHp,i*e.maxHp):e.hp}function Y(e,t){if(t.id){let n=e.statuses.findIndex(e=>e.kind===t.kind&&e.id===t.id);if(n>=0){e.statuses[n]=t;return}}e.statuses.push(t)}function el(e,t){e.statuses.length!==0&&(e.statuses=e.statuses.filter(e=>e.until>t))}function tl(e,t){return e.statuses.some(e=>e.kind===t)}var nl=e=>tl(e,`unstoppable`),rl=e=>!nl(e)&&(tl(e,`stun`)||tl(e,`hex`)),il=e=>!nl(e)&&(tl(e,`stun`)||tl(e,`root`)),al=e=>tl(e,`stun`)||tl(e,`silence`)||tl(e,`hex`),ol=e=>tl(e,`stealth`),sl=e=>tl(e,`untargetable`)||tl(e,`stealth`);function cl(e){e.statuses=e.statuses.filter(e=>e.kind!==`stun`&&e.kind!==`root`&&e.kind!==`silence`&&e.kind!==`slow`&&e.kind!==`hex`)}function ll(e){e.statuses=e.statuses.filter(e=>e.kind!==`stealth`)}function ul(e){let t=0,n=0;for(let r of e.statuses)r.kind===`speed`?t+=r.pct:(r.kind===`slow`||r.kind===`hex`)&&(n=Math.max(n,r.pct));nl(e)&&(n=0);let r=e.moveSpeed*(1+t/100)*(1-n/100);return Math.max(2,r)}function dl(e){let t=0;for(let n of e.statuses)n.kind===`armor`&&(t+=n.amount);return e.armor+t}function fl(e){let t=0;for(let n of e.statuses)n.kind===`attackSpeed`&&(t+=n.amount);return Gc(e.attackSpeed*(1+t/100),.1,5)}function pl(e){let t=0;for(let n of e.statuses)n.kind===`damageAmp`&&(t+=n.pct);return t/100}function ml(e,t,n,r=0){let i=t;if(n===`physical`){let t=.06*dl(e);i*=1-t/(1+Math.abs(t))}else n===`magic`&&(i*=1+r,i*=1-Gc(e.magicResist,-1,.85));return i*=1+pl(e),Math.max(0,i)}function hl(e,t){let n=t;for(let t of e.statuses){if(t.kind!==`shield`)continue;if(n<=0)break;let e=Math.min(t.amount,n);t.amount-=e,n-=e}return e.statuses=e.statuses.filter(e=>e.kind!==`shield`||e.amount>.5),n}var gl={radius:.48,hp:60},_l={radius:.58,hp:100},vl={radius:.78,hp:150},yl={radius:.45,hp:60},bl={radius:2.4,damage:70},xl=5e4;function Sl(){let e=[],t=(t,n,r,i,a,o,s)=>{let c={model:t,x:r,y:i,rot:a,scale:o,radius:n.radius*o,hp:Math.round(n.hp*o)};s&&(c.explosive=!0),e.push(c)};return nt.filter(e=>e.id.startsWith(`camp`)).forEach((e,n)=>{let r=Math.atan2(e.y,e.x),i=Math.cos(r),a=Math.sin(r),o=-Math.sin(r),s=Math.cos(r);t(`crate_large`,_l,e.x+i*2.6,e.y+a*2.6,n,.85),t(`barrel_large`,gl,e.x+i*2.6+a*1,e.y+a*2.6-i*1,n*2,.78),n===3?(t(`keg`,yl,e.x+i*2.6+o*.8,e.y+a*2.6+s*.8,1.1,.9,!0),t(`keg`,yl,e.x+i*2.6-o*.6,e.y+a*2.6-s*.6,2.3,.9,!0),t(`crates_stacked`,vl,e.x-o*2.8,e.y-s*2.8,r+1.1,.85)):n===4&&t(`keg_decorated`,yl,e.x+i*1.7+o*2.4,e.y+a*1.7+s*2.4,.7,.9,!0)}),c.forEach((e,n)=>{let r=Math.atan2(e.y,e.x),i=-Math.sin(r),a=Math.cos(r);t(`crate_large`,_l,e.x+i*3.4,e.y+a*3.4,n,.8),t(`barrel_large`,gl,e.x-i*3.4,e.y-a*3.4,n*2,.78)}),$t.forEach((e,n)=>{let r=Math.cos(e.dir),i=Math.sin(e.dir),a=(e.offsets[e.offsets.length-1]??3)+2.2,o=n%2==0?1:-1;n%3==0?t(`barrel_large`,gl,e.x+r*a*o,e.y+i*a*o,n*1.7,.8):t(`crate_large`,_l,e.x+r*a*o,e.y+i*a*o,n*1.7,.8)}),e}var Cl=5*Math.PI/18,wl=1.4,Tl=1.15,El=1.4,Dl=1.2,Ol=70*Math.PI/180,kl=1.8;function Al(e,t){return e===`R`?t>=12?3:t>=8?2:+(t>=4):Math.min(4,Math.ceil(t/2))}function jl(e){for(let t of Ns)e.abilities[t].rank=Al(t,e.level)}var Ml=new Map([[`int`,[`tome`,`arcaneorb`,`vitality`,`wardstone`,`phaseband`,`elixir`]],[`str`,[`vitality`,`ringmail`,`bulwark`,`whetstone`,`swiftboots`]],[`agi`,[`whetstone`,`quiver`,`reaver`,`vampiric`,`boots`,`swiftboots`]]]);function Nl(e,t,n){if(yt(e.x,e.y)===yt(t,n))return Wc(t-e.x,n-e.y);let r=He(e.x,e.y);return Math.hypot(e.x-r.x,e.y-r.y)<1.8?Wc(t-e.x,n-e.y):Wc(r.x-e.x,r.y-e.y)}function Pl(e,t){let n=null,r=1/0;for(let i of e.units.values()){if(i===t||!i.alive||i.kind!==`hero`||!Hu(t,i)||sl(i))continue;let e=(i.x-t.x)**2+(i.y-t.y)**2;e<r&&(r=e,n=i)}return n}function Fl(e,t,n,r){for(let i=0;i<t.items.length;i++)if(Bc[t.items[i]]?.active?.kind===n&&e.now>=(t.itemReadyAt[t.items[i]]??0))return Rd(e,t,i,r);return!1}function Il(e){let t=[...e.units.values()].filter(e=>e.kind===`hero`).map(e=>e.kills).sort((e,t)=>e-t);return t.length?t[Math.floor(t.length/2)]:0}function Ll(e){if(e.phase!==`playing`)return;let t=Il(e);for(let n of e.units.values()){if(n.kind===`creep`&&n.alive){Rl(e,n);continue}if(n.kind!==`hero`||!n.isBot||!n.alive)continue;let i=Ec[n.champId];if(!i)continue;let a=c[n.slot%c.length],o=n.hp<n.maxHp*.32,s=n.kills<=t;if(ou(n)){let t=Ml.get(i.primary)??[];for(let r of t){let t=Bc[r];if(t&&n.gold>=t.cost&&!n.items.includes(r)){su(e,n,r);break}}}if(rl(n)&&Fl(e,n,`cleanse`),rl(n))continue;if(o){Fl(e,n,`heal`),Fl(e,n,`shield`);let t=Wc(a.x-n.x,a.y-n.y);n.moveX=t.x,n.moveY=t.y,n.aimX=t.x||n.aimX,n.aimY=t.y||n.aimY,n.attackHeld=!1;let r=Pl(e,n);r&&Uc(n,r)<6&&Fl(e,n,`blink`);continue}let l=Bl(e,n,s?22:12),u=zl(e,n);if(l&&(!u||Uc(n,l)<Uc(n,u)-3)){let e=Wc(l.x-n.x,l.y-n.y);n.moveX=e.x,n.moveY=e.y,n.aimX=e.x||n.aimX,n.aimY=e.y||n.aimY,n.attackHeld=!1;continue}if(!u||Uc(n,u)>13){let t=(Yc(e)-.5)*.3,i=(Yc(e)-.5)*.3;if(r(n.x,n.y))n.moveX=t,n.moveY=i;else{let e=Nl(n,t*8,i*8);n.moveX=e.x,n.moveY=e.y}n.aimX=n.moveX||n.aimX,n.aimY=n.moveY||n.aimY,n.attackHeld=!1;continue}let d=Wc(u.x-n.x,u.y-n.y),f=Nl(n,u.x,u.y),p=Uc(n,u),m=n.attackRange*.8;p>m?(n.moveX=f.x,n.moveY=f.y,p>8&&Fl(e,n,`haste`)):(n.moveX=d.y*.4,n.moveY=-d.x*.4),n.aimX=d.x,n.aimY=d.y,n.attackHeld=p<=n.attackRange+u.radius+.6;let h={x:u.x,y:u.y},g=p>m;for(let t of Ps){let r=n.abilities[t];if(!(r.rank<1||e.now<r.readyAt)&&!(p>(i.abilities[t].castRange||n.attackRange+3)+u.radius)&&!(t===`R`&&!(u.hp<u.maxHp*.55||p<6))&&!(t===`DASH`&&!g)){vd(e,n,t,{point:h,dir:d});break}}}}function Rl(e,t){let n=t.homeX??t.x,r=t.homeY??t.y,i=Math.hypot(t.x-n,t.y-r);if(rl(t)){t.attackHeld=!1;return}let a=Pl(e,t);if(a){let e=Uc(t,a),o=Math.hypot(a.x-n,a.y-r);(e>11||o>14||i>15)&&(a=null)}if(!a){if(i>5){let e=Wc(n-t.x,r-t.y);t.moveX=e.x,t.moveY=e.y,t.aimX=e.x||t.aimX,t.aimY=e.y||t.aimY}else t.moveX=0,t.moveY=0;t.attackHeld=!1;return}let o=Wc(a.x-t.x,a.y-t.y),s=Uc(t,a);s>t.attackRange*.8?(t.moveX=o.x,t.moveY=o.y):(t.moveX=0,t.moveY=0),t.aimX=o.x,t.aimY=o.y,t.attackHeld=s<=t.attackRange+a.radius+.5}function zl(e,t){let n=Pl(e,t);if(e.leaderId&&e.leaderId!==t.team){let r=[...e.units.values()].find(t=>t.kind===`hero`&&t.team===e.leaderId&&t.alive);r&&r!==t&&t.kills<r.kills&&Uc(t,r)<24&&(n=r)}return n}function Bl(e,t,n){let r=null,i=n*n;for(let n of e.coins){if(e.now<n.landAt)continue;let a=(n.x-t.x)**2+(n.y-t.y)**2;a<i&&(i=a,r={x:n.x,y:n.y})}for(let n of e.deliveries){let e=(n.x-t.x)**2+(n.y-t.y)**2;e<i&&(i=e,r={x:n.x,y:n.y})}return r}var Vl=[`Ru{}`,`Vex`,`Kato`,`Mire`,`Brak`,`Nyx`,`Orin`,`Pyra`],Hl=[`knight`,`ranger`,`mage`,`rogue`,`blackknight`,`witch`];function Ul(e,t={}){let n={x:ot.x,y:ot.y,hp:4e3,maxHp:4e3,alive:!0},r={now:0,gameTime:0,phase:`playing`,soloMercy:t.soloMercy??!1,winner:null,killGoal:25,matchTime:480,suddenDeath:!1,units:new Map,projectiles:new Map,grounds:[],strikes:[],coins:[],deliveries:[],boss:n,leaderId:null,nextCoinAt:8,nextDeliveryAt:15,campRespawnAt:{},fx:[],seq:0,rngState:e>>>0||1};return Wl(r),r}function Wl(e){Sl().forEach((t,n)=>{let r={...Gl(Fs(e,`prop`),`prop`,M,`neutral`,t.model,t.model),slot:n,x:t.x,y:t.y,radius:t.radius,hp:t.hp,maxHp:t.hp};e.units.set(r.id,r)})}function Gl(e,t,n,r,i,a){return{id:e,kind:t,team:n,ownerId:r,champId:i,isBot:!0,name:a,slot:0,x:0,y:0,vx:0,vy:0,facing:0,radius:.6,alive:!0,hp:1,maxHp:1,hpRegen:0,baseDamage:0,armor:0,magicResist:0,attackType:`melee`,attackKind:`melee`,attackDamageType:`physical`,attackRange:0,attackSpeed:1,moveSpeed:0,projectileSpeed:0,abilityPower:0,lifesteal:0,attr:{str:0,agi:0,int:0},level:1,xp:0,gold:0,abilities:{Q:{rank:0,readyAt:0},W:{rank:0,readyAt:0},E:{rank:0,readyAt:0},R:{rank:0,readyAt:0},DASH:{rank:0,readyAt:0},JUMP:{rank:0,readyAt:0}},items:[],itemReadyAt:{},lastAttackAt:0,swingCount:0,lastCastAt:0,lastCastKey:``,lastHitAt:0,lastHitDx:0,lastHitDy:0,pendingAttack:null,statuses:[],recentDamageFrom:{},queuedCast:null,steerVx:0,steerVy:0,moveX:0,moveY:0,aimX:0,aimY:1,attackHeld:!1,kbx:0,kby:0,kbUntil:0,dashUntil:0,dashVx:0,dashVy:0,empowerNext:0,ambush:!1,jumpUntil:0,respawnAt:0,kills:0,deaths:0,assists:0,killStreak:0,mercy:0}}function Kl(e,t){let n=Ec[t.champId]??Ec.knight,r=c[t.slot%c.length],i={...Gl(t.id,`hero`,t.team,t.ownerId,n.id,t.name),isBot:t.isBot,slot:t.slot,x:r.x,y:r.y,facing:r.facing,radius:n.radius??.62,attackType:n.attackType,attackKind:n.attackKind,attackDamageType:n.attackDamageType,moveSpeed:6,attr:{...n.attr},gold:600,abilities:{Q:{rank:1,readyAt:0},W:{rank:1,readyAt:0},E:{rank:1,readyAt:0},R:{rank:0,readyAt:0},DASH:{rank:1,readyAt:0},JUMP:{rank:1,readyAt:0}},aimX:Math.cos(r.facing),aimY:Math.sin(r.facing)};return $c(i),i.hp=i.maxHp,e.units.set(i.id,i),i}function ql(e,t){return Vl[t%Vl.length].replace(`{}`,String(t))}var Jl=28,Yl=1e9,Xl=new Map(Object.entries({skwarrior:{model:`Skeleton_Warrior`,attackType:`melee`,attackDamageType:`physical`,attackKind:`melee`,hp:340,damage:34,armor:3,attackRange:2.2,attackSpeed:.8,moveSpeed:5,projectileSpeed:0,radius:.6,bounty:55,xp:50},skmage:{model:`Skeleton_Mage`,attackType:`ranged`,attackDamageType:`magic`,attackKind:`bolt`,hp:230,damage:30,armor:1,attackRange:8,attackSpeed:.7,moveSpeed:4.6,projectileSpeed:16,radius:.55,bounty:70,xp:60},skminion:{model:`Skeleton_Minion`,attackType:`melee`,attackDamageType:`physical`,attackKind:`melee`,hp:200,damage:24,armor:1,attackRange:2,attackSpeed:.95,moveSpeed:5.4,projectileSpeed:0,radius:.52,bounty:35,xp:32},frostgolem:{model:`FrostGolem`,attackType:`melee`,attackDamageType:`physical`,attackKind:`melee`,hp:2400,damage:95,armor:8,attackRange:3.2,attackSpeed:.6,moveSpeed:4.4,projectileSpeed:0,radius:1.25,bounty:500,xp:350,name:`Frost Golem`,hpRegen:20}})),Zl=Ql(`skwarrior`);function Ql(e){let t=Xl.get(e);if(!t)throw Error(`unknown creep: ${e}`);return t}function $l(e,t,n,r,i){let a=Xl.get(t)??Zl,o={...Gl(Fs(e,`c`),`creep`,M,`neutral`,t,a.name??`Skeleton`),campId:i.id,homeX:i.x,homeY:i.y,x:n,y:r,radius:a.radius,hp:a.hp,maxHp:a.hp,hpRegen:a.hpRegen??6,baseDamage:a.damage,armor:a.armor,magicResist:.1,attackType:a.attackType,attackKind:a.attackKind,attackDamageType:a.attackDamageType,attackRange:a.attackRange,attackSpeed:a.attackSpeed,moveSpeed:a.moveSpeed,projectileSpeed:a.projectileSpeed};e.units.set(o.id,o)}function eu(e){let t=Xl.get(e)??Zl;return{bounty:t.bounty,xp:t.xp}}var tu=new Map([[`camp0`,[`skwarrior`,`skwarrior`,`skmage`,`skminion`]],[`camp3`,[`skwarrior`,`skmage`,`skminion`,`skminion`]]]),nu=[`skwarrior`,`skmage`,`skminion`,`skminion`];function ru(e,t){let n=t.pack??tu.get(t.id)??nu;if(n.length===1){$l(e,n[0],t.x,t.y,t);return}n.forEach((r,i)=>{let a=i/n.length*Math.PI*2;$l(e,r,t.x+Math.cos(a)*2.2,t.y+Math.sin(a)*2.2,t)})}function iu(e){for(let t of nt){let n=0;for(let r of e.units.values())r.kind===`creep`&&r.alive&&r.campId===t.id&&n++;if(n>0)continue;let r=e.campRespawnAt[t.id]??0;r===Yl?e.campRespawnAt[t.id]=e.gameTime+(t.respawnSec??Jl):e.gameTime>=r&&(ru(e,t),e.campRespawnAt[t.id]=Yl)}}function au(e){for(let[t,n]of e.units)n.kind===`creep`&&!n.alive&&e.now>=n.respawnAt&&e.units.delete(t)}function ou(e){let t=c[lu(e)%c.length];return(e.x-t.x)**2+(e.y-t.y)**2<=pe*pe}function su(e,t,n){let r=Bc[n];return!r||!t.alive||!ou(t)||t.items.length>=6||t.gold<r.cost?!1:(t.gold-=r.cost,t.items.push(n),$c(t),!0)}function cu(e){let t=[...e.units.values()].filter(e=>e.kind===`hero`&&!e.isBot).length,n=[...e.units.values()].filter(e=>e.kind===`hero`&&e.isBot),r=Math.max(0,4-t);for(let t=r;t<n.length;t++)e.units.delete(n[t].id);let i=new Set([...e.units.values()].filter(e=>e.kind===`hero`).map(e=>lu(e))),a=n.length;for(let t=0;t<c.length&&a<r;t++){if(i.has(t))continue;let n=a;Kl(e,{id:`bot:${t}`,ownerId:`bot:${t}`,team:`bot:${t}`,champId:Hl[n%Hl.length],name:ql(e,t+1),isBot:!0,slot:t}),i.add(t),a++}}function lu(e){return e.slot}function uu(e,t,n,r,i,a){e.moveX=t,e.moveY=n,(r!==0||i!==0)&&(e.aimX=r,e.aimY=i),e.attackHeld=a}function du(e,t=sn){if(e.phase===`ended`){nd(e,t);return}e.now+=t*1e3,e.gameTime+=t;for(let n of e.units.values())el(n,e.now),n.kind===`hero`&&fu(e,n,t),n.kind===`prop`&&!n.alive&&n.respawnAt>0&&e.now>=n.respawnAt&&(n.alive=!0,n.hp=n.maxHp,n.respawnAt=0,n.statuses=[]),n.alive&&gu(n,t),_u(n,e.now);iu(e),Ll(e),pu(e);for(let n of e.units.values())!n.alive||n.kind===`boss`||n.kind===`dummy`||n.kind===`prop`||xu(e,n,t);Su(e),Yu(e),nd(e,t),Fd(e,t),Au(e,t),Cu(e,t),wu(e),au(e),Lu(e),Eu(e)}function fu(e,t,n){!t.alive&&t.respawnAt>0&&e.now>=t.respawnAt&&mu(e,t)}function pu(e){for(let t of e.units.values()){if(t.kind!==`hero`||!t.alive)continue;let n=t.queuedCast;n&&(e.now>n.until||vd(e,t,n.key,{point:{x:n.px,y:n.py},dir:{x:n.ax,y:n.ay}}))&&(t.queuedCast=null)}}function mu(e,t){let n=c[lu(t)%c.length];t.alive=!0,t.respawnAt=0,t.x=n.x,t.y=n.y,t.vx=0,t.vy=0,t.facing=n.facing,t.statuses=[],t.pendingAttack=null,t.dashUntil=0,t.kbUntil=0,t.jumpUntil=0,t.queuedCast=null,t.ambush=!1,t.steerVx=0,t.steerVy=0,$c(t),t.hp=t.maxHp}function hu(e,t){!t.alive||rl(t)||il(t)||e.now<t.jumpUntil+460||(t.jumpUntil=e.now+880)}function gu(e,t){e.hp<e.maxHp&&(e.hp=Math.min(e.maxHp,e.hp+e.hpRegen*t))}function _u(e,t){for(let n of Object.keys(e.recentDamageFrom))t-e.recentDamageFrom[n]>6500&&delete e.recentDamageFrom[n]}var vu=16,yu=26;function bu(e,t){return e.now<t.dashUntil&&Math.hypot(t.dashVx,t.dashVy)>.01}function xu(e,t,n){if(e.now<t.dashUntil)t.steerVx=t.dashVx,t.steerVy=t.dashVy,bu(e,t)&&(t.facing=Math.atan2(t.dashVy,t.dashVx));else{let r=0,i=0;if(!il(t)){let n=e.now<t.jumpUntil,a=ul(t)*(n?1.25:1),o=t.moveX,s=t.moveY,c=Math.hypot(o,s);n&&c<.01&&(o=Math.cos(t.facing),s=Math.sin(t.facing),c=1),c>.01&&(r=o/c*a,i=s/c*a)}let a=Math.min(1,(r!==0||i!==0?vu:yu)*n);t.steerVx+=(r-t.steerVx)*a,t.steerVy+=(i-t.steerVy)*a}let r=t.steerVx,i=t.steerVy;if(e.now<t.kbUntil){let n=(t.kbUntil-e.now)/1e3;r+=t.kbx*n,i+=t.kby*n}t.vx=r,t.vy=i;let a=t.x+r*n,o=t.y+i*n,s=pt(a,o,t.radius);a=s.x,o=s.y;let c=d(a,o,t.radius),l=Ut(t.x,t.y,c.x,c.y,t.radius);t.x=l.x,t.y=l.y,!bu(e,t)&&(t.aimX!==0||t.aimY!==0)&&(t.facing=Math.atan2(t.aimY,t.aimX))}function Su(e){let t=[...e.units.values()].filter(e=>e.alive&&e.kind!==`boss`),n=t.map(e=>({x:e.x,y:e.y}));for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let r=t[e],i=t[n],a=r.kind===`prop`,o=i.kind===`prop`;if(a&&o)continue;let s=i.x-r.x,c=i.y-r.y,l=r.radius+i.radius,u=s*s+c*c;if(u<l*l&&u>1e-6){let e=Math.sqrt(u),t=(l-e)/e/2;a?(i.x+=s*t*2,i.y+=c*t*2):o?(r.x-=s*t*2,r.y-=c*t*2):(r.x-=s*t,r.y-=c*t,i.x+=s*t,i.y+=c*t)}}for(let e=0;e<t.length;e++){let r=t[e],i=n[e];if(!r||!i||r.kind===`prop`)continue;let a=Ut(i.x,i.y,r.x,r.y,r.radius);r.x=a.x,r.y=a.y}}function Cu(e,t){for(let n of e.units.values()){if(n.kind!==`hero`||!n.alive)continue;let r=lu(n);for(let i of c){let a=(n.x-i.x)**2+(n.y-i.y)**2;i.slot===r?a<=42.25&&n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+n.maxHp*P*t)):a<=49&&(Zu(e,null,n,120*t,`pure`,{silentFx:!0}),Qu(n,i.x,i.y,10,e))}}}function wu(e){for(let t of e.units.values()){let e=pt(t.x,t.y,t.radius),n=d(e.x,e.y,t.radius);t.x=n.x,t.y=n.y}}function Tu(e,t,n){e.phase=`ended`,e.winner=t,e.fx.push({t:`notify`,text:`${n} WINS`,kind:`matchend`})}function Eu(e){if(e.phase!==`playing`)return;let t=[...e.units.values()].filter(e=>e.kind===`hero`);for(let n of t)if(n.kills>=e.killGoal){Tu(e,n.team,n.name);return}if(e.gameTime>=e.matchTime){let n=[...t].sort((e,t)=>t.kills-e.kills),r=n[0],i=n[1];if(!r)return;!i||r.kills>i.kills?Tu(e,r.team,r.name):(e.suddenDeath=!0,e.killGoal=r.kills+1)}}var Du=5,Ou=[...zc].sort((e,t)=>e.cost-t.cost);function ku(e){return[...e.units.values()].filter(e=>e.kind===`hero`)}function Au(e,t){ju(e,t),Ru(e,t),Bu(e,t)}function ju(e,t){for(let n of e.units.values()){if(n.kind!==`hero`||!n.alive)continue;let i=r(n.x,n.y),o=i?1+a:1,s=i?1+we:1;n.gold+=2*t*o,Mu(e,n,(i?Du*s:Du*.6)*t)}}function Mu(e,t,n){if(t.level>=12)return;t.xp+=n;let r=De(t.xp);if(r>t.level){let n=t.maxHp;t.level=r,jl(t),$c(t),t.hp=Math.min(t.maxHp,t.hp+(t.maxHp-n)),e.fx.push({t:`levelup`,x:t.x,y:t.y})}}function Nu(e,t,n){let r=t?Fu(e,t):null;if(Iu(e),r&&r!==n&&r.team!==n.team){r.kills+=1,r.killStreak+=1,r.isBot||(r.mercy=0);let t=150+Math.min(150,n.killStreak*25)+n.level*6,i=e.leaderId!==null&&n.team===e.leaderId&&n.kills>=1;i&&(t+=650),r.gold+=t,Mu(e,r,120+n.level*8),e.fx.push({t:`kill`,killer:r.ownerId,victim:n.ownerId,killerName:r.name,victimName:n.name,leader:i}),i&&e.fx.push({t:`notify`,text:`${r.name} SLEW THE LEADER`,kind:`leader`});let a=r.killStreak,o=a===3?`KILLING SPREE`:a===5?`RAMPAGE`:a===7?`UNSTOPPABLE`:a>=9&&a%2==1?`GODLIKE`:null;o&&e.fx.push({t:`notify`,text:`${r.name} — ${o}`,kind:`streak`})}else e.fx.push({t:`kill`,killer:t??``,victim:n.ownerId,killerName:r?.name??`the arena`,victimName:n.name});for(let t of Object.keys(n.recentDamageFrom)){if(r&&t===r.ownerId||e.now-n.recentDamageFrom[t]>6e3)continue;let i=Fu(e,t);i&&i.team!==n.team&&(i.assists+=1,i.gold+=150*re,Mu(e,i,120*re))}}function Pu(e,t,n){let r=eu(n.champId),i=t?Fu(e,t):null;i&&i.kind===`hero`&&(i.gold+=r.bounty,Mu(e,i,r.xp)),e.coins.push({id:Fs(e,`loot`),x:n.x,y:n.y,fromX:n.x,fromY:n.y,gold:Math.round(r.bounty*.8),landAt:e.now,expireAt:e.now+9e3,loot:!0}),n.champId===`frostgolem`&&e.fx.push({t:`notify`,text:`FROST GOLEM SLAIN`,kind:`leader`})}function Fu(e,t){for(let n of e.units.values())if(n.kind===`hero`&&n.ownerId===t)return n;return null}function Iu(e){return ku(e).sort((e,t)=>t.kills-e.kills||t.gold-e.gold)}function Lu(e){let t=Iu(e)[0];e.leaderId=t&&t.kills>=1?t.team:null}function Ru(e,t){e.boss.alive&&e.gameTime>=e.nextCoinAt&&(e.nextCoinAt+=12,zu(e));let n=[];for(let t of e.coins)if(!(e.now>=t.expireAt)){if(e.now>=t.landAt){let n=!1;for(let r of e.units.values())if(!(r.kind!==`hero`||!r.alive)&&(r.x-t.x)**2+(r.y-t.y)**2<=(r.radius+.8)**2){r.gold+=t.gold,e.fx.push({t:`coinGrab`,x:t.x,y:t.y,gold:t.gold}),n=!0;break}if(n)continue}n.push(t)}e.coins=n}function zu(e){let t=Xc(e,0,Math.PI*2),n=Xc(e,9,22),r=Math.cos(t)*n,i=Math.sin(t)*n;e.coins.push({id:Fs(e,`coin`),x:r,y:i,fromX:ot.x,fromY:ot.y,gold:300,landAt:e.now+900,expireAt:e.now+9900}),e.fx.push({t:`coinThrow`,x:ot.x,y:ot.y,tx:r,ty:i})}function Bu(e,t){if(e.gameTime>=e.nextDeliveryAt){e.nextDeliveryAt+=20;let t=Qc(e,z);t&&(e.deliveries.push({id:Fs(e,`del`),x:t.x,y:t.y,expireAt:e.now+3e4}),e.fx.push({t:`notify`,text:`ITEM INBOUND`,kind:`delivery`}))}let n=[];for(let t of e.deliveries){if(e.now>=t.expireAt)continue;let r=!1;for(let n of e.units.values())if(!(n.kind!==`hero`||!n.alive)&&(n.x-t.x)**2+(n.y-t.y)**2<=(n.radius+1)**2){Vu(e,n),e.fx.push({t:`delivery`,x:t.x,y:t.y,tier:``,playerName:n.name}),r=!0;break}r||n.push(t)}e.deliveries=n}function Vu(e,t){let n=Iu(e),r=Math.max(1,n.length-1),i=Math.max(0,n.indexOf(t))/r,a=Ou[Math.min(Ou.length-1,Math.max(0,Math.round(i*(Ou.length-1)+(Yc(e)-.5)*1.5)))];t.items.length<6?t.items.push(a.id):t.gold+=a.cost,$c(t)}var Hu=(e,t)=>e.team!==t.team,Uu=e=>e.kind===`prop`&&e.alive,Wu=3,Gu=.5;function Ku(e){return e.attackRange+wl}var qu={timeMult:1,dmgMult:1};function Ju(e){let t=Ec[e.champId]?.basicRhythm;return!t||t.length===0||e.swingCount<1?qu:t[(e.swingCount-1)%t.length]??qu}function Yu(e){for(let t of e.units.values()){if(!t.alive||t.kind!==`hero`&&t.kind!==`creep`)continue;if(rl(t)){t.pendingAttack=null;continue}if(t.pendingAttack){e.now>=t.pendingAttack.resolveAt&&(t.pendingAttack=null,Xu(e,t));continue}if(!t.attackHeld||e.now<t.dashUntil)continue;let n=xe(fl(t));if(e.now-t.lastAttackAt<n*Ju(t).timeMult)continue;t.lastAttackAt=e.now,t.swingCount++,t.facing=Jc(t.aimX,t.aimY),ol(t)&&(t.ambush=!0),ll(t);let r=Ju(t),i=Lc(Nc(t.champId,t.swingCount),n*r.timeMult);t.pendingAttack={resolveAt:e.now+i},t.attackType===`melee`&&e.now>=t.kbUntil&&(t.kbx=Math.cos(t.facing)*3,t.kby=Math.sin(t.facing)*3,t.kbUntil=e.now+140)}}function Xu(e,t){let n=Ju(t),r=1-oe+Yc(e)*(oe*2),i=t.baseDamage*r*n.dmgMult;t.empowerNext>0&&(i+=t.empowerNext,t.empowerNext=0);let a=t.ambush;a&&(i*=2,t.ambush=!1);let o=Math.cos(t.facing),s=Math.sin(t.facing);if(n.aoe&&n.aoe>0){for(let r of e.units.values())if(!(r===t||!r.alive)){if(r.kind===`hero`||r.kind===`creep`){if(!Hu(t,r)||sl(r))continue}else if(!Uu(r))continue;Math.hypot(r.x-t.x,r.y-t.y)>n.aoe+r.radius||Zu(e,t,r,i,t.attackDamageType,{isAttack:!0,forceCrit:a})}e.fx.push({t:`strike`,tag:`spin`,x:t.x,y:t.y,dx:o,dy:s,r:n.aoe});return}if(t.attackType===`ranged`){e.fx.push({t:`swing`,x:t.x+o*.45,y:t.y+s*.45,ang:t.facing,r:.8,melee:!1,dtype:t.attackDamageType}),e.now>=t.kbUntil&&(t.kbx=o*-1.4,t.kby=s*-1.4,t.kbUntil=e.now+120);let r=Ec[t.champId]?.basic;td(e,t,{dirX:o,dirY:s,damage:i,dtype:t.attackDamageType,kind:t.attackKind,speed:t.projectileSpeed,radius:r?.splash??0,pierce:r?.pierce??!1,hitRadius:Tl,range:t.attackRange+5,onHit:n.slow?{tag:`slow`,pct:n.slow.pct,duration:n.slow.dur}:{tag:`none`},isAttack:!0});return}let c=Ku(t),l=t.kind===`hero`?Ec[t.champId]?.cleaveTargets??Wu:Wu,u=[];for(let n of e.units.values()){if(n===t||!n.alive)continue;let r=n.x-t.x,a=n.y-t.y,o=Math.hypot(r,a);if(!(o>c+n.radius)&&!(o>.25&&Math.abs(qc(t.facing,Math.atan2(a,r)))>Cl)){if(Uu(n)&&t.kind===`hero`){Zu(e,t,n,i,t.attackDamageType,{isAttack:!0});continue}(n.kind===`hero`||n.kind===`creep`)&&(!Hu(t,n)||sl(n)||u.push({t:n,d:o}))}}u.sort((e,t)=>e.d-t.d||(e.t.id<t.t.id?-1:1));for(let n=0;n<u.length&&n<l;n++){let r=u[n].t,o=Zu(e,t,r,i*(n===0?1:Gu),t.attackDamageType,{isAttack:!0,forceCrit:a});n===0&&r.alive&&Qu(r,t.x,t.y,o?2.6:1.4,e),t.champId===`frostgolem`&&r.alive&&Y(r,{kind:`slow`,until:e.now+1500,pct:25,id:`chill`})}}function Zu(e,t,n,r,i,a={}){if(!n.alive||r<=0)return!1;let o=ml(n,r,i,a.ap??t?.abilityPower??0);e.soloMercy&&t?.isBot&&!n.isBot&&n.mercy>0&&(o*=1-.07*n.mercy);let s=n.kind!==`prop`&&(a.forceCrit===!0||o>=n.maxHp*.18),c=hl(n,o);n.hp-=c,n.lastHitAt=e.now,t&&(n.recentDamageFrom[t.ownerId]=e.now,a.isAttack&&t.lifesteal>0&&t.alive&&n.kind!==`prop`&&(t.hp=Math.min(t.maxHp,t.hp+c*t.lifesteal)));let l=t?Wc(n.x-t.x,n.y-t.y):{x:0,y:1};return n.lastHitDx=l.x,n.lastHitDy=l.y,a.silentFx||e.fx.push({t:`hit`,x:n.x,y:n.y,dx:l.x,dy:l.y,dtype:i,by:t?.id??``,to:n.id,amount:Math.round(o),crit:s}),n.hp<=0&&$u(e,n,t?.ownerId??null),s}function Qu(e,t,n,r,i){if(e.statuses.some(e=>e.kind===`unstoppable`))return;let a=Wc(e.x-t,e.y-n);e.kbx=a.x*r,e.kby=a.y*r,e.kbUntil=i.now+260}function $u(e,t,n){if(t.alive=!1,t.vx=0,t.vy=0,t.hp=0,t.pendingAttack=null,t.statuses=[],t.kbUntil=0,t.dashUntil=0,t.attackHeld=!1,t.moveX=0,t.moveY=0,t.empowerNext=0,t.ambush=!1,t.queuedCast=null,t.kind===`prop`){ed(e,t,n);return}e.fx.push({t:`death`,x:t.x,y:t.y,team:t.team,by:n??``}),t.kind===`hero`?(t.deaths+=1,t.killStreak=0,t.isBot||(t.mercy=n!==null&&n.startsWith(`bot:`)&&t.kills===0?Math.min(3,t.mercy+1):Math.max(0,t.mercy-1)),t.respawnAt=e.now+v(t.level)*1e3,Nu(e,n,t)):t.kind===`creep`&&(t.respawnAt=e.now+1200,Pu(e,n,t))}function ed(e,t,n){let r=Sl()[t.slot];if(t.respawnAt=e.now+xl,e.fx.push({t:`propBreak`,x:t.x,y:t.y,model:t.champId,explosive:r?.explosive}),r?.explosive){let r=n===null?null:[...e.units.values()].find(e=>e.kind===`hero`&&e.ownerId===n)??null;for(let n of e.units.values())!n.alive||n===t||(n.x-t.x)**2+(n.y-t.y)**2<=(bl.radius+n.radius)**2&&(Uu(n)?Zu(e,r,n,bl.damage,`pure`,{}):(n.kind===`hero`||n.kind===`creep`)&&(!r||Hu(r,n))&&!sl(n)&&(Zu(e,r,n,bl.damage,`magic`,{}),n.alive&&Qu(n,t.x,t.y,5,e)));e.fx.push({t:`explosion`,x:t.x,y:t.y,radius:bl.radius,kind:`keg`})}Yc(e)<.35&&e.coins.push({id:Fs(e,`coin`),x:t.x,y:t.y,fromX:t.x,fromY:t.y,gold:20,landAt:e.now,expireAt:e.now+9e3})}function td(e,t,n){let r=n.dirX??0,i=n.dirY??0;if(n.target){let e=Wc(n.target.x-t.x,n.target.y-t.y);r=e.x,i=e.y}else{let e=Wc(r,i);r=e.x,i=e.y}let a={id:Fs(e,`p`),ownerId:t.id,team:t.team,x:t.x+r*(t.radius+.3),y:t.y+i*(t.radius+.3),vx:r*n.speed,vy:i*n.speed,speed:n.speed,targetId:n.target?n.target.id:null,damage:n.damage,dtype:n.dtype,radius:n.radius,hitRadius:n.hitRadius??.55,launchH:n.launchH??0,pierce:n.pierce??!1,isAttack:n.isAttack??!1,hitIds:[],range:n.range,burstAtEnd:n.burstAtEnd??!1,traveled:0,kind:n.kind,onHit:n.onHit??{tag:`none`}};e.projectiles.set(a.id,a)}function nd(e,t){for(let n of[...e.projectiles.values()]){if(n.targetId){let t=e.units.get(n.targetId);if(t&&t.alive&&!sl(t)){let e=Wc(t.x-n.x,t.y-n.y);n.vx=e.x*n.speed,n.vy=e.y*n.speed}}n.x+=n.vx*t,n.y+=n.vy*t,n.traveled+=n.speed*t;let r=!1;for(let t of e.units.values()){if(!t.alive||t.kind===`boss`||t.team===n.team||t.id===n.ownerId||n.hitIds.includes(t.id)||sl(t))continue;let i=n.hitRadius+t.radius;if((t.x-n.x)**2+(t.y-n.y)**2<=i*i){if(id(e,n,t),n.pierce)n.hitIds.push(t.id);else{r=!0;break}}}if(r||n.traveled>=n.range){if(!r){let t=n.traveled-n.range;t>0&&n.speed>0&&(n.x-=n.vx/n.speed*t,n.y-=n.vy/n.speed*t),n.burstAtEnd&&n.radius>0?rd(e,n):e.fx.push({t:`fizzle`,x:n.x,y:n.y,kind:n.kind})}e.projectiles.delete(n.id)}}}function rd(e,t){let n=e.units.get(t.ownerId)??null;for(let r of e.units.values()){if(!r.alive||r.kind===`boss`||r.team===t.team)continue;let i=t.radius+r.radius;(r.x-t.x)**2+(r.y-t.y)**2<=i*i&&(Zu(e,n,r,t.damage,t.dtype,{ap:n?.abilityPower,isAttack:t.isAttack}),ad(e,t,r))}e.fx.push({t:`explosion`,x:t.x,y:t.y,radius:t.radius,kind:t.kind})}function id(e,t,n){let r=e.units.get(t.ownerId)??null;t.radius>0?rd(e,t):(Zu(e,r,n,t.damage,t.dtype,{ap:r?.abilityPower,isAttack:t.isAttack}),ad(e,t,n))}function ad(e,t,n){if(n.kind===`prop`)return;let r=t.onHit;r.tag===`slow`?Y(n,{kind:`slow`,until:e.now+r.duration*1e3,pct:r.pct,id:`${t.kind}-slow`}):r.tag===`root`?Y(n,{kind:`root`,until:e.now+r.duration*1e3,id:`${t.kind}-root`}):r.tag===`burn`&&Y(n,{kind:`dot`,until:e.now+r.duration*1e3,nextTick:e.now+500,dps:r.dps,dtype:`magic`,sourceId:t.ownerId,id:`${t.kind}-burn`})}var od=e=>e*Math.PI/180;function sd(e,t,n){return e===`melee`?{kind:`cone`,radius:t+wl,half:Cl}:{kind:`projectile`,length:t+5,splash:n?.splash??0,width:Tl}}function cd(e,t){let n=n=>Cc(e.values[n],t);switch(e.effect){case`knight:Q`:case`blackknight:Q`:return[{kind:`cone`,radius:e.castRange,half:od(n(`cone`))/2}];case`rogue:R`:return[{kind:`cone`,radius:e.castRange,half:Ol}];case`ranger:Q`:return[{kind:`cone`,radius:e.castRange,half:od(n(`spread`))/2}];case`knight:W`:return[{kind:`corridor`,length:e.castRange,halfWidth:n(`width`)/2}];case`rogue:Q`:return[{kind:`corridor`,length:e.castRange,halfWidth:El}];case`rogue:W`:return[{kind:`corridor`,length:e.castRange,halfWidth:Dl}];case`knight:JUMP`:case`ranger:JUMP`:case`mage:JUMP`:case`rogue:JUMP`:case`blackknight:JUMP`:case`witch:JUMP`:return[{kind:`corridor`,length:e.castRange+n(`radius`),halfWidth:n(`radius`)}];case`mage:Q`:return[{kind:`projectile`,length:e.castRange,splash:n(`radius`)}];case`witch:Q`:return[{kind:`projectile`,length:e.castRange,splash:kl}];case`mage:W`:case`mage:E`:case`mage:R`:case`ranger:E`:case`ranger:R`:case`blackknight:W`:case`witch:W`:case`witch:E`:case`witch:R`:return[{kind:`circleAt`,radius:n(`radius`)}];case`knight:R`:case`blackknight:R`:return[{kind:`circleSelf`,radius:n(`radius`)}];default:return[]}}var ld=e=>e*Math.PI/180,ud=200,dd=350,fd=300,pd=450,md=400,hd=500,gd=500;function _d(e,t,n,r){if(vd(e,t,n,r))return t.queuedCast=null,!0;let i=t.abilities[n];return i.rank>=1&&(i.readyAt-e.now<=dd||e.now<t.dashUntil||t.statuses.some(e=>e.kind===`stun`))&&(t.queuedCast={key:n,px:r.point?.x??t.x,py:r.point?.y??t.y,ax:r.dir?.x??t.aimX,ay:r.dir?.y??t.aimY,until:e.now+fd}),!1}function vd(e,t,n,r){if(!t.alive||t.kind!==`hero`)return!1;let i=Ec[t.champId]?.abilities[n];if(!i)return!1;let a=t.abilities[n];if(a.rank<1||al(t)||e.now<a.readyAt)return!1;let o=r.dir??{x:t.aimX,y:t.aimY},s=Wc(o.x,o.y);o=s.x===0&&s.y===0?{x:Math.cos(t.facing),y:Math.sin(t.facing)}:s;let c=r.point??{x:t.x+o.x*i.castRange,y:t.y+o.y*i.castRange};return i.targeting===`ground`&&(c=yd(t,c,i.castRange)),Pd(e,t,i,n,o,c)?(a.readyAt=e.now+Cc(i.cooldown,a.rank)*1e3,t.facing=Jc(o.x,o.y),t.lastCastAt=e.now,t.lastCastKey=n,e.fx.push({t:`cast`,x:t.x,y:t.y,dx:o.x,dy:o.y,champId:t.champId,key:n}),!0):!1}function yd(e,t,n){let r=t.x-e.x,i=t.y-e.y,a=Math.hypot(r,i);return a<=n||a<1e-6?t:{x:e.x+r/a*n,y:e.y+i/a*n}}function bd(e,t,n,r,i){e.dashVx=t.x*n,e.dashVy=t.y*n,e.dashUntil=i.now+r/n*1e3,e.facing=Jc(t.x,t.y)}function xd(e,t,n){e.dashVx=0,e.dashVy=0,e.dashUntil=t.now+n}var Sd=20;function Cd(e){return e.kind===`hero`||e.kind===`creep`||e.kind===`prop`}function wd(e,t,n,r,i,a,o){let s=[];for(let c of e.units.values()){if(c===t||!c.alive||!Cd(c)||!Hu(t,c))continue;let e=c.x-n,l=c.y-r,u=e*i.x+l*i.y;u<0||u>a||Math.abs(e*-i.y+l*i.x)<=o+c.radius&&s.push(c)}return s}function Td(e,t,n,r,i){let a=[];for(let o of e.units.values())!o.alive||!Cd(o)||o.team===t||(o.x-n)**2+(o.y-r)**2<=i*i&&a.push(o);return a}function Ed(e,t){e.grounds.push({...t,id:Fs(e,`g`)})}function Dd(e,t,n,r,i,a,o){switch(n.kind){case`cone`:{let o=Jc(a.x,a.y),s=[];for(let a of e.units.values())a===t||!a.alive||!Cd(a)||!Hu(t,a)||Math.hypot(a.x-r,a.y-i)>n.radius+a.radius||Math.abs(qc(o,Jc(a.x-r,a.y-i)))>n.half||s.push(a);return s}case`corridor`:return wd(e,t,r,i,a,n.length,n.halfWidth);case`circleSelf`:return Td(e,t.team,r,i,n.radius);case`circleAt`:return Td(e,t.team,o.x,o.y,n.radius);default:return[]}}function Od(e,t,n,r,i,a,o,s){let[c]=cd(n,r);return c?Dd(e,t,c,i,a,o,s):[]}function kd(e,t,n,r,i,a,o){let s={at:e.now+r,casterId:t.id,key:n,dx:i.x,dy:i.y,px:a.x,py:a.y,ox:t.x,oy:t.y};o!==void 0&&(s.targetId=o),e.strikes.push(s)}function Ad(e){if(e.strikes.length===0)return;let t=[];for(let n of e.strikes){if(e.now<n.at){t.push(n);continue}let r=e.units.get(n.casterId);r&&r.alive&&r.kind===`hero`&&!rl(r)&&jd(e,r,n)}e.strikes=t}function jd(e,t,n){let r=Ec[t.champId]?.abilities[n.key];if(!r)return;let i=t.abilities[n.key].rank,a=e=>Cc(r.values[e],i),o=t.abilityPower,s={x:n.dx,y:n.dy},c={x:n.px,y:n.py};if(n.key===`JUMP`){let l=r.effect.startsWith(`mage`)||r.effect.startsWith(`witch`)?`magic`:`physical`;if(r.values.shots){let n=a(`shots`),i=a(`damage`)+a(`perLevel`)*(t.level-1),o=Jc(s.x,s.y);for(let s=0;s<n;s++){let c=o+s/n*Math.PI*2;td(e,t,{dirX:Math.cos(c),dirY:Math.sin(c),damage:i,dtype:l,kind:t.attackKind,speed:Math.max(24,t.projectileSpeed),radius:r.values.splash?a(`splash`):0,hitRadius:1,range:11,pierce:l===`physical`,launchH:w})}e.fx.push({t:`strike`,tag:r.effect,x:t.x,y:t.y,dx:s.x,dy:s.y,r:a(`radius`)});return}let u=a(`base`)+a(`perLevel`)*(t.level-1);for(let a of Od(e,t,r,i,n.ox,n.oy,s,c))Zu(e,t,a,u,l,{ap:o}),Nd(e,t,a,r,i);e.fx.push({t:`strike`,tag:r.effect,x:c.x,y:c.y,dx:s.x,dy:s.y,r:a(`radius`)});return}switch(r.effect){case`knight:Q`:for(let n of Od(e,t,r,i,t.x,t.y,s,c))Zu(e,t,n,a(`damage`),`physical`,{ap:o}),Y(n,{kind:`stun`,until:e.now+a(`stun`)*1e3,id:`knight:Q`});e.fx.push({t:`strike`,tag:r.effect,x:t.x,y:t.y,dx:s.x,dy:s.y,r:r.castRange});break;case`knight:W`:for(let n of Od(e,t,r,i,t.x,t.y,s,c))Zu(e,t,n,a(`damage`),`physical`,{ap:o}),Y(n,{kind:`slow`,until:e.now+a(`slowDur`)*1e3,pct:a(`slow`),id:`knight:W`});e.fx.push({t:`strike`,tag:r.effect,x:t.x,y:t.y,dx:s.x,dy:s.y,r:r.castRange});break;case`blackknight:Q`:for(let n of Od(e,t,r,i,t.x,t.y,s,c))Zu(e,t,n,a(`damage`),`physical`,{ap:o}),Y(n,{kind:`slow`,until:e.now+a(`slowDur`)*1e3,pct:a(`slow`),id:`blackknight:Q`});e.fx.push({t:`strike`,tag:r.effect,x:t.x,y:t.y,dx:s.x,dy:s.y,r:r.castRange});break;case`blackknight:R`:for(let n of Od(e,t,r,i,t.x,t.y,s,c))Zu(e,t,n,a(`damage`),`physical`,{ap:o}),Qu(n,t.x,t.y,a(`knockback`),e),Y(n,{kind:`stun`,until:e.now+a(`stun`)*1e3,id:`blackknight:R`});e.fx.push({t:`strike`,tag:r.effect,x:t.x,y:t.y,dx:s.x,dy:s.y,r:a(`radius`)});break;case`rogue:Q`:for(let l of Od(e,t,r,i,n.ox,n.oy,s,c))Zu(e,t,l,a(`damage`),`physical`,{ap:o}),Y(l,{kind:`dot`,until:e.now+a(`dur`)*1e3,nextTick:e.now+500,dps:a(`dps`),dtype:`magic`,sourceId:t.id,id:`rogue:Q`});e.fx.push({t:`strike`,tag:r.effect,x:t.x,y:t.y,dx:s.x,dy:s.y,r:1.4});break;case`rogue:W`:for(let n of Od(e,t,r,i,t.x,t.y,s,c))Zu(e,t,n,a(`damage`),`physical`,{ap:o}),Y(n,{kind:`dot`,until:e.now+a(`bleedDur`)*1e3,nextTick:e.now+500,dps:a(`bleedDps`),dtype:`physical`,sourceId:t.id,id:`rogue:W`}),Y(n,{kind:`damageAmp`,until:e.now+a(`ampDur`)*1e3,pct:a(`dmgAmp`),id:`rogue:W`});e.fx.push({t:`strike`,tag:r.effect,x:t.x,y:t.y,dx:s.x,dy:s.y,r:r.castRange});break;case`rogue:R`:{let i=n.targetId?e.units.get(n.targetId):void 0;if(!i||!i.alive||sl(i))return;let c=i.hp/i.maxHp,l=a(`damage`)*a(`execMult`)*(1-c);Zu(e,t,i,a(`damage`)+l,`physical`,{ap:o}),e.fx.push({t:`strike`,tag:r.effect,x:i.x,y:i.y,dx:s.x,dy:s.y,r:1.6});break}case`ranger:Q`:{let n=a(`arrows`),i=ld(a(`spread`)),o=Jc(s.x,s.y);for(let s=0;s<n;s++){let c=o+i*(s/Math.max(1,n-1)-.5);td(e,t,{dirX:Math.cos(c),dirY:Math.sin(c),damage:a(`damage`),dtype:`physical`,kind:`arrow`,speed:28,radius:1,range:r.castRange})}e.fx.push({t:`strike`,tag:r.effect,x:t.x,y:t.y,dx:s.x,dy:s.y,r:1});break}case`mage:Q`:{let i=Md(t,n,r.castRange);td(e,t,{dirX:i.x,dirY:i.y,damage:a(`damage`),dtype:`magic`,kind:`fireball`,speed:18,radius:a(`radius`),range:i.range,burstAtEnd:!0}),e.fx.push({t:`strike`,tag:r.effect,x:t.x,y:t.y,dx:i.x,dy:i.y,r:1});break}case`witch:Q`:{let i=Md(t,n,r.castRange);td(e,t,{dirX:i.x,dirY:i.y,damage:a(`damage`),dtype:`magic`,kind:`hexbolt`,speed:a(`speed`),radius:1.8,range:i.range,burstAtEnd:!0,onHit:{tag:`slow`,pct:a(`slow`),duration:a(`slowDur`)}}),e.fx.push({t:`strike`,tag:r.effect,x:t.x,y:t.y,dx:i.x,dy:i.y,r:1});break}}}function Md(e,t,n){let r=t.px-e.x,i=t.py-e.y,a=Math.hypot(r,i)-(e.radius+.3);if(a<.5)return{x:t.dx,y:t.dy,range:1};let o=Math.hypot(r,i);return{x:r/o,y:i/o,range:Math.max(1,Math.min(n,a))}}function Nd(e,t,n,r,i){let a=e=>Cc(r.values[e],i);r.values.stun?Y(n,{kind:`stun`,until:e.now+a(`stun`)*1e3,id:r.effect}):r.values.slowDur&&Y(n,{kind:`slow`,until:e.now+a(`slowDur`)*1e3,pct:a(`slow`),id:r.effect}),r.values.burnDps&&Y(n,{kind:`dot`,until:e.now+a(`burnDur`)*1e3,nextTick:e.now+500,dps:a(`burnDps`),dtype:`magic`,sourceId:t.id,id:r.effect})}function Pd(e,t,n,r,i,a){let o=t.abilities[r].rank,s=e=>Cc(n.values[e],o);if(r===`DASH`){if(n.values.speed)bd(t,i,s(`speed`),n.castRange,e);else{let n=s(`range`),r=d(t.x+i.x*n,t.y+i.y*n,t.radius),a=pt(r.x,r.y,t.radius);e.fx.push({t:`blink`,x:t.x,y:t.y,tx:a.x,ty:a.y}),t.x=a.x,t.y=a.y}return Y(t,{kind:`untargetable`,until:e.now+s(`iframe`)*1e3,id:`dash`}),!0}if(r===`JUMP`){if(n.values.air){let n=s(`air`)*1e3;return xd(t,e,n),t.jumpUntil=e.now+n,Y(t,{kind:`untargetable`,until:e.now+s(`iframe`)*1e3,id:`jump`}),kd(e,t,r,n*.45,i,{x:t.x,y:t.y}),!0}bd(t,i,Sd,n.castRange,e);let a=Math.max(ud,n.castRange/Sd*1e3);return t.jumpUntil=e.now+a,kd(e,t,r,a,i,{x:t.x+i.x*n.castRange,y:t.y+i.y*n.castRange}),!0}switch(n.effect){case`knight:Q`:case`knight:W`:return kd(e,t,r,Rc(t.champId,r),i,a),!0;case`knight:E`:return Y(t,{kind:`shield`,until:e.now+s(`duration`)*1e3,amount:s(`shield`),id:`knight:E`}),Y(t,{kind:`speed`,until:e.now+s(`duration`)*1e3,pct:s(`speed`),id:`knight:E`}),e.fx.push({t:`heal`,x:t.x,y:t.y,amount:s(`shield`)}),!0;case`knight:R`:return Ed(e,{ownerId:t.id,team:t.team,effect:`whirlwind`,x:t.x,y:t.y,radius:s(`radius`),until:e.now+s(`duration`)*1e3,nextTick:e.now+250,tickInterval:250,enemyDps:s(`dps`),dtype:`physical`,slowPct:s(`slow`)}),!0;case`ranger:Q`:return kd(e,t,r,Rc(t.champId,r),i,a),!0;case`ranger:W`:{let n=s(`duration`)*1e3;return Y(t,{kind:`attackSpeed`,until:e.now+n,amount:s(`atkSpeed`),id:`ranger:W`}),Y(t,{kind:`speed`,until:e.now+n,pct:s(`moveSpeed`),id:`ranger:W`}),!0}case`ranger:E`:return Ed(e,{ownerId:t.id,team:t.team,effect:`trap`,x:a.x,y:a.y,radius:s(`radius`),until:e.now+s(`life`)*1e3,nextTick:e.now,tickInterval:100,enemyDps:s(`damage`),dtype:`physical`,rootMs:s(`root`)*1e3,telegraph:!0}),!0;case`ranger:R`:return Ed(e,{ownerId:t.id,team:t.team,effect:`rain`,x:a.x,y:a.y,radius:s(`radius`),until:e.now+s(`duration`)*1e3,nextTick:e.now+300,tickInterval:300,enemyDps:s(`dps`),dtype:`physical`,slowPct:s(`slow`),telegraph:!0}),!0;case`mage:Q`:return kd(e,t,r,Rc(t.champId,r),i,a),!0;case`mage:W`:return Ed(e,{ownerId:t.id,team:t.team,effect:`nova`,x:a.x,y:a.y,radius:s(`radius`),until:e.now+md+200,nextTick:e.now+md,tickInterval:9999,detonateAt:e.now+md,detonateDmg:s(`damage`),detonateDtype:`magic`,slowPct:s(`slow`),slowMs:s(`slowDur`)*1e3,telegraph:!0}),!0;case`mage:E`:return Ed(e,{ownerId:t.id,team:t.team,effect:`cinderfall`,x:a.x,y:a.y,radius:s(`radius`),until:e.now+s(`duration`)*1e3,nextTick:e.now+500,tickInterval:500,enemyDps:s(`dps`),dtype:`magic`,slowPct:s(`slow`),telegraph:!1}),!0;case`mage:R`:{let n=s(`delay`)*1e3;return Ed(e,{ownerId:t.id,team:t.team,effect:`meteor`,x:a.x,y:a.y,radius:s(`radius`),until:e.now+n+200,nextTick:e.now+n,tickInterval:9999,detonateAt:e.now+n,detonateDmg:s(`damage`),detonateDtype:`magic`,slowPct:s(`slow`),telegraph:!0}),!0}case`rogue:Q`:return bd(t,i,s(`speed`),n.castRange,e),kd(e,t,r,n.castRange/s(`speed`)*1e3,i,a),!0;case`rogue:W`:return kd(e,t,r,Rc(t.champId,r),i,a),!0;case`rogue:E`:return Y(t,{kind:`stealth`,until:e.now+s(`duration`)*1e3,id:`rogue:E`}),Y(t,{kind:`speed`,until:e.now+s(`duration`)*1e3,pct:s(`speed`),id:`rogue:E`}),!0;case`rogue:R`:{let c=null,l=1/0;for(let r of Od(e,t,n,o,t.x,t.y,i,a)){if(sl(r)||r.kind===`prop`)continue;let e=Uc(t,r);e<l&&(l=e,c=r)}if(!c)return!1;let u=Wc(c.x-t.x,c.y-t.y),d=Math.max(.5,Uc(t,c)-(t.radius+c.radius));return bd(t,u,s(`speed`),d,e),kd(e,t,r,d/s(`speed`)*1e3,u,a,c.id),!0}case`blackknight:Q`:case`blackknight:R`:return kd(e,t,r,Rc(t.champId,r),i,a),!0;case`blackknight:W`:return Ed(e,{ownerId:t.id,team:t.team,effect:`smite`,x:a.x,y:a.y,radius:s(`radius`),until:e.now+pd+200,nextTick:e.now+pd,tickInterval:9999,detonateAt:e.now+pd,detonateDmg:s(`damage`),detonateDtype:`physical`,stunMs:s(`stun`)*1e3,telegraph:!0}),!0;case`blackknight:E`:{let n=s(`duration`)*1e3;return Y(t,{kind:`armor`,until:e.now+n,amount:s(`armor`),id:`blackknight:E`}),Y(t,{kind:`heal`,until:e.now+n,nextTick:e.now+500,hps:s(`hps`),id:`blackknight:E`}),e.fx.push({t:`heal`,x:t.x,y:t.y,amount:s(`hps`)}),!0}case`witch:Q`:return kd(e,t,r,Rc(t.champId,r),i,a),!0;case`witch:W`:return Ed(e,{ownerId:t.id,team:t.team,effect:`brew`,x:a.x,y:a.y,radius:s(`radius`),until:e.now+s(`duration`)*1e3,nextTick:e.now+300,tickInterval:300,enemyDps:s(`dps`),dtype:`magic`,slowPct:s(`slow`),telegraph:!0}),!0;case`witch:E`:return Ed(e,{ownerId:t.id,team:t.team,effect:`vines`,x:a.x,y:a.y,radius:s(`radius`),until:e.now+hd+200,nextTick:e.now+hd,tickInterval:9999,detonateAt:e.now+hd,detonateDmg:s(`damage`),detonateDtype:`magic`,rootMs:s(`root`)*1e3,telegraph:!0}),!0;case`witch:R`:return Ed(e,{ownerId:t.id,team:t.team,effect:`hexring`,x:a.x,y:a.y,radius:s(`radius`),until:e.now+gd+200,nextTick:e.now+gd,tickInterval:9999,detonateAt:e.now+gd,detonateDmg:0,hexMs:s(`duration`)*1e3,slowPct:s(`slow`),telegraph:!0}),!0}return!1}function Fd(e,t){Ad(e),Id(e),Ld(e)}function Id(e){let t=[];for(let n of e.grounds){if(n.effect===`whirlwind`){let t=e.units.get(n.ownerId);t&&t.alive&&(n.x=t.x,n.y=t.y)}if(n.detonateAt!==void 0&&e.now>=n.detonateAt){for(let t of Td(e,n.team,n.x,n.y,n.radius))n.detonateDmg&&Zu(e,e.units.get(n.ownerId)??null,t,n.detonateDmg,n.detonateDtype??`magic`,{}),t.alive&&(n.stunMs&&Y(t,{kind:`stun`,until:e.now+n.stunMs,id:n.effect}),n.rootMs&&Y(t,{kind:`root`,until:e.now+n.rootMs,id:n.effect}),n.hexMs?Y(t,{kind:`hex`,until:e.now+n.hexMs,pct:n.slowPct??0,id:n.effect}):n.slowPct&&Y(t,{kind:`slow`,until:e.now+(n.slowMs??1500),pct:n.slowPct,id:n.effect}));e.fx.push({t:`explosion`,x:n.x,y:n.y,radius:n.radius,kind:n.effect});continue}if(n.effect===`trap`){let r=Td(e,n.team,n.x,n.y,n.radius).filter(e=>e.kind!==`prop`);if(r.length>0){for(let t of r)Zu(e,e.units.get(n.ownerId)??null,t,n.enemyDps??0,n.dtype??`physical`,{}),n.rootMs&&t.alive&&Y(t,{kind:`root`,until:e.now+n.rootMs,id:`trap`});e.fx.push({t:`explosion`,x:n.x,y:n.y,radius:n.radius,kind:`trap`});continue}e.now<n.until&&t.push(n);continue}if((n.enemyDps||n.allyHps)&&e.now>=n.nextTick){n.nextTick+=n.tickInterval;let t=e.units.get(n.ownerId)??null;if(n.enemyDps)for(let r of Td(e,n.team,n.x,n.y,n.radius))Zu(e,t,r,n.enemyDps*(n.tickInterval/1e3),n.dtype??`physical`,{silentFx:!0}),n.slowPct&&r.alive&&Y(r,{kind:`slow`,until:e.now+600,pct:n.slowPct,id:n.effect});if(n.allyHps)for(let t of e.units.values())!t.alive||t.team!==n.team||(t.x-n.x)**2+(t.y-n.y)**2>n.radius*n.radius||(t.hp=Math.min(t.maxHp,t.hp+n.allyHps*(n.tickInterval/1e3)))}e.now<n.until&&t.push(n)}e.grounds=t}function Ld(e){for(let t of e.units.values())if(t.alive)for(let n of t.statuses)n.kind===`dot`&&e.now>=n.nextTick?(n.nextTick+=500,Zu(e,e.units.get(n.sourceId)??null,t,n.dps*.5,n.dtype,{silentFx:!0})):n.kind===`heal`&&e.now>=n.nextTick&&(n.nextTick+=500,t.hp=Math.min(t.maxHp,t.hp+n.hps*.5))}function Rd(e,t,n,r){let i=t.items[n];if(!i)return!1;let a=Bc[i];if(!a?.active)return!1;let o=t.itemReadyAt[i]??0;if(e.now<o)return!1;let s=a.active;switch(s.kind){case`haste`:Y(t,{kind:`speed`,until:e.now+3e3,pct:s.amount??40,id:`item:${i}`}),e.fx.push({t:`itemUse`,x:t.x,y:t.y,item:i});break;case`heal`:t.hp=Math.min(t.maxHp,t.hp+(s.amount??0)),e.fx.push({t:`heal`,x:t.x,y:t.y,amount:s.amount??0});break;case`cleanse`:cl(t),e.fx.push({t:`itemUse`,x:t.x,y:t.y,item:i});break;case`shield`:Y(t,{kind:`shield`,until:e.now+4e3,amount:s.amount??0,id:`item:${i}`}),e.fx.push({t:`itemUse`,x:t.x,y:t.y,item:i});break;case`blink`:{let n=Wc(t.aimX,t.aimY),r=s.range??9,i=d(t.x+n.x*r,t.y+n.y*r,t.radius),a=pt(i.x,i.y,t.radius);e.fx.push({t:`blink`,x:t.x,y:t.y,tx:a.x,ty:a.y}),t.x=a.x,t.y=a.y;break}}return t.itemReadyAt[i]=e.now+s.cooldown*1e3,!0}var zd=`https://vibedgames-party.kyh.workers.dev`,Bd=`vg-server`,Vd=`battle-arena-`,Hd=`intent`;function Ud(e){return Vd+(e||`public`).toLowerCase().replace(/[^a-z0-9]/g,``).slice(0,12)}function Wd(e){return{now:e.now,gameTime:e.gameTime,phase:e.phase,winner:e.winner,killGoal:e.killGoal,matchTime:e.matchTime,suddenDeath:e.suddenDeath,leaderId:e.leaderId,nextCoinAt:e.nextCoinAt,nextDeliveryAt:e.nextDeliveryAt,campRespawnAt:e.campRespawnAt,seq:e.seq,rngState:e.rngState,units:Object.fromEntries(e.units),projectiles:Object.fromEntries(e.projectiles),grounds:e.grounds,strikes:e.strikes,coins:e.coins,deliveries:e.deliveries,boss:e.boss}}function Gd(){return{now:0,gameTime:0,phase:`playing`,winner:null,killGoal:25,matchTime:480,suddenDeath:!1,units:new Map,projectiles:new Map,grounds:[],strikes:[],coins:[],deliveries:[],boss:{x:ot.x,y:ot.y,hp:4e3,maxHp:4e3,alive:!0},leaderId:null,nextCoinAt:0,nextDeliveryAt:0,campRespawnAt:{},fx:[],seq:0,rngState:1}}function Kd(e,t){let n=new Set;for(let r of Object.keys(t))n.add(r),e.set(r,t[r]);for(let t of[...e.keys()])n.has(t)||e.delete(t)}function qd(e,t){e.now=t.now,e.gameTime=t.gameTime,e.phase=t.phase,e.winner=t.winner,e.killGoal=t.killGoal,e.matchTime=t.matchTime,e.suddenDeath=t.suddenDeath,e.leaderId=t.leaderId,e.nextCoinAt=t.nextCoinAt,e.nextDeliveryAt=t.nextDeliveryAt,e.campRespawnAt=t.campRespawnAt??{},e.seq=t.seq,e.rngState=t.rngState??e.rngState,Kd(e.units,t.units),Kd(e.projectiles,t.projectiles),e.grounds=t.grounds??[],e.strikes=t.strikes??[],e.coins=t.coins??[],e.deliveries=t.deliveries??[],e.boss=t.boss??e.boss}function Jd(e){return e instanceof Object&&!Array.isArray(e)&&`units`in e&&`gameTime`in e}function Yd(e){return e instanceof Object&&!Array.isArray(e)}function Xd(e){return Number.isFinite(e)}function Zd(e){return String(e)===e}var Qd=new Be,$d=new Map,ef=[];function tf(e,t={}){let n=`${e}|${t.wrap?`w`:``}${t.srgb?`s`:``}`,r=$d.get(n);if(r)return r;let i=()=>{};ef.push(new Promise(e=>i=e));let a=Qd.load(`./fx/${e}.png`,()=>i(),void 0,()=>i());return t.wrap&&(a.wrapS=a.wrapT=Rt),t.srgb&&(a.colorSpace=Gt),$d.set(n,a),a}function nf(){return Promise.all(ef).then(()=>void 0)}function rf(e){for(let t of $d.values())t.image&&e.initTexture(t)}function af(){for(let e of[`noise-streak`,`noise-caustic`])tf(e,{wrap:!0});for(let e of[`hex-shield`,`electro-ball`])tf(e,{wrap:!0});for(let e of[`shockwave`,`slash-white`,`slash-arc`,`slash-spin`,`flare-star`,`impact-burst`,`glow-soft`,`ground-crack`,`electric-splat`,`scorch-decal`,`fire-sprite`,`shock-burst`,`swirl-lines`,`hex-shield`,`electro-ball`,`holy-wings`,`trail-holy`,`galaxy`,`dark-shock`,`rune-circle-a`,`rune-circle-b`])tf(e)}var of=28,sf=4,cf=260,lf=1.1,uf=.34,df=`
attribute float aAge;    // 0 fresh → 1 expired
attribute float aAcross; // 0 base edge → 1 blade tip edge
varying float vAge;
varying float vAcross;
varying float vAlong;    // arc-length coordinate for the panning noise
attribute float aAlong;
void main() {
  vAge = aAge;
  vAcross = aAcross;
  vAlong = aAlong;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,ff=`
uniform sampler2D uNoise;
float coverage(float age, float across, float along) {
  // CRESCENT taper: near-LINEAR narrowing from the blade to the tail — the
  // arc is full-width at the blade line and ends in a long sharp point.
  float cut = 1.05 * pow(age, 0.85);
  float body = smoothstep(cut, cut + 0.34, across);
  float n = texture2D(uNoise, vec2(along * 0.18, across * 0.8)).r;
  // tail roughing (authored noise) — the fade-out edge stays organic
  float tail = 1.0 - smoothstep(0.74, 1.0, age + (n - 0.5) * 0.14);
  // erosion dissolve past mid-age: threshold climbs, streaks tear open
  float er = smoothstep(0.0, 0.35, n + 0.85 - age * 1.35);
  return body * tail * er * (1.0 - 0.4 * age);
}`,pf=`
uniform vec3 uColor;
uniform float uOpacity;
varying float vAge;
varying float vAcross;
varying float vAlong;

COVERAGE
void main() {
  // NORMAL blending keeps the champ color TRUE (additive summed toward white
  // over the bright floor); the blade line alone runs HDR so bloom catches it
  float edge = smoothstep(0.8, 0.98, vAcross);
  vec3 c = mix(uColor, vec3(1.0), edge * 0.4) * (0.9 + 0.8 * edge * (1.0 - vAge));
  float a = coverage(vAge, vAcross, vAlong) * uOpacity;
  if (a < 0.004) discard;
  gl_FragColor = vec4(c, a);
}`.replace(`COVERAGE`,ff),mf=`
uniform float uOpacity;
varying float vAge;
varying float vAcross;
varying float vAlong;

COVERAGE
void main() {
  float a = coverage(vAge, vAcross, vAlong) * uOpacity;
  if (a < 0.05) discard; // near-invisible texels must not claim depth
  gl_FragColor = vec4(0.0);
}`.replace(`COVERAGE`,ff);function hf(e,t,n,r,i,a,o,s){let c=a,l=a+o,u=a+o+s,d=c+i*o,f=e+(t-e)*(d-0)/c,p=t+(n-t)*(d-c)/o,m=n+(r-n)*(d-l)/s,h=f+(p-f)*(d-0)/l;return h+(p+(m-p)*(d-c)/(u-c)-h)*(d-c)/o}var gf=class{mesh;matPre;matColor;geom;posAttr;ageAttr;acrossAttr;alongAttr;posArr=new Float32Array(654);ageArr=new Float32Array(218);acrossArr=new Float32Array(218);alongArr=new Float32Array(218);segs=[];arc=0;activeUntil=0;clock=0;baseLocal;tipLocal;v=new F;constructor(t,n,r){let i=new e().setFromObject(t),a=new F;i.getSize(a);let o=new F;i.getCenter(o);let s=r?r.axis:a.x>=a.y&&a.x>=a.z?`x`:a.y>=a.z?`y`:`z`,c=r?r.base:uf,l=r?r.tip:lf;this.baseLocal=o.clone(),this.tipLocal=o.clone();let u=(i.max[s]-i.min[s])/2;this.baseLocal[s]=i.min[s]+u*2*c,this.tipLocal[s]=o[s]+u*(1+l),this.geom=new Ot,this.posAttr=new Ht(this.posArr,3).setUsage(nn),this.ageAttr=new Ht(this.ageArr,1).setUsage(nn),this.acrossAttr=new Ht(this.acrossArr,1).setUsage(nn),this.alongAttr=new Ht(this.alongArr,1).setUsage(nn),this.geom.setAttribute(`position`,this.posAttr),this.geom.setAttribute(`aAge`,this.ageAttr),this.geom.setAttribute(`aAcross`,this.acrossAttr),this.geom.setAttribute(`aAlong`,this.alongAttr);let d=[];for(let e=0;e<108;e++){let t=e*2,n=e*2+1,r=(e+1)*2,i=(e+1)*2+1;d.push(t,n,r,n,i,r)}this.geom.setIndex(d),this.geom.setDrawRange(0,0);let f={uColor:{value:new G(n)},uOpacity:{value:r?.opacity??.5},uNoise:{value:tf(`noise-streak`,{wrap:!0})}};this.matPre=new U({vertexShader:df,fragmentShader:mf,uniforms:f,transparent:!0,side:2,depthWrite:!0,colorWrite:!1}),this.matColor=new U({vertexShader:df,fragmentShader:pf,uniforms:f,transparent:!0,blending:1,side:2,depthWrite:!1});let p=new L(this.geom,this.matPre);p.renderOrder=1,p.frustumCulled=!1;let m=new L(this.geom,this.matColor);m.renderOrder=2,m.frustumCulled=!1,this.mesh=new ht,this.mesh.add(p,m),this.weapon=t}weapon;emit(e){this.activeUntil=this.clock+e}update(e){this.clock+=e*1e3;let t=this.clock;if(t<this.activeUntil){this.weapon.updateWorldMatrix(!0,!1);let e=this.weapon.matrixWorld;this.v.copy(this.baseLocal).applyMatrix4(e);let n=this.v.x,r=this.v.y,i=this.v.z;this.v.copy(this.tipLocal).applyMatrix4(e);let a=this.v.x,o=this.v.y,s=this.v.z,c=this.segs[this.segs.length-1];c&&(this.arc+=Math.hypot(a-c.tx,o-c.ty,s-c.tz)*.22),this.segs.push({bx:n,by:r,bz:i,tx:a,ty:o,tz:s,t,s:this.arc}),this.segs.length>of&&this.segs.shift()}for(;this.segs.length&&t-this.segs[0].t>cf;)this.segs.shift();let n=this.segs.length;if(n<2){this.geom.setDrawRange(0,0);return}let r=this.posArr,i=this.ageArr,a=this.acrossArr,o=this.alongArr,s=0,c=this.segs,l=(e,t,n,c,l,u,d,f)=>{let p=s*6;r[p]=e,r[p+1]=t,r[p+2]=n,r[p+3]=c,r[p+4]=l,r[p+5]=u;let m=s*2;i[m]=d,i[m+1]=d,a[m]=0,a[m+1]=1,o[m]=f,o[m+1]=f,s++},u=hf,d=Math.max(.25,Math.min(1,(t-c[0].t)/cf)),f=e=>{let t=c[Math.max(0,e-1)],r=c[Math.min(n-1,Math.max(0,e))],i=c[Math.min(n-1,e+1)];return{bx:(t.bx+2*r.bx+i.bx)/4,by:(t.by+2*r.by+i.by)/4,bz:(t.bz+2*r.bz+i.bz)/4,tx:(t.tx+2*r.tx+i.tx)/4,ty:(t.ty+2*r.ty+i.ty)/4,tz:(t.tz+2*r.tz+i.tz)/4,t:r.t,s:r.s}};for(let e=0;e<n-1;e++){let r=f(e-1),i=f(e),a=f(e+1),o=f(e+2),s=Math.min(1,(t-i.t)/cf)/d,c=Math.min(1,(t-a.t)/cf)/d,p=Math.max(.02,Math.sqrt(Math.hypot(i.tx-r.tx,i.ty-r.ty,i.tz-r.tz))),m=Math.max(.02,Math.sqrt(Math.hypot(a.tx-i.tx,a.ty-i.ty,a.tz-i.tz))),h=Math.max(.02,Math.sqrt(Math.hypot(o.tx-a.tx,o.ty-a.ty,o.tz-a.tz))),g=e===n-2?5:sf;for(let e=0;e<g;e++){let t=e/sf;l(u(r.bx,i.bx,a.bx,o.bx,t,p,m,h),u(r.by,i.by,a.by,o.by,t,p,m,h),u(r.bz,i.bz,a.bz,o.bz,t,p,m,h),u(r.tx,i.tx,a.tx,o.tx,t,p,m,h),u(r.ty,i.ty,a.ty,o.ty,t,p,m,h),u(r.tz,i.tz,a.tz,o.tz,t,p,m,h),Math.min(1,Math.max(0,s+(c-s)*t)),i.s+(a.s-i.s)*t)}}this.posAttr.needsUpdate=!0,this.ageAttr.needsUpdate=!0,this.acrossAttr.needsUpdate=!0,this.alongAttr.needsUpdate=!0,this.geom.setDrawRange(0,(s-1)*6)}dispose(){this.geom.dispose(),this.matPre.dispose(),this.matColor.dispose()}},_f=55,vf=73.42,yf=87.31,bf=130.81,xf=146.83,Sf=164.81,Cf=174.61,wf=196,Tf=220,Ef=233.08,Df=293.66,Of=349.23,kf=440,Af=523.25,jf=[vf,vf,yf,vf,_f,vf,bf,vf],Mf=[Df,Of,kf,Af,kf,Of],Nf=45,Pf=.18,Ff=1.5,If=.32,Lf=[`drone`,`pulse`,`kit`,`lead`],Rf={drone:0,pulse:1,kit:1,lead:2},zf=class{ctx;bus;gains=null;targets={drone:1,pulse:0,kit:0,lead:0};fadeEnds={drone:0,pulse:0,kit:0,lead:0};droneOscs=[];noiseBuf=null;timer=null;nextTime=0;step=0;bpm=96;intensity=0;running=!1;constructor(e,t){this.ctx=e,this.bus=t}start(){if(this.running)return;this.running=!0,this.ensureNoise();let e=this.ctx.currentTime,t={drone:this.ctx.createGain(),pulse:this.ctx.createGain(),kit:this.ctx.createGain(),lead:this.ctx.createGain()};for(let e of Lf)t[e].gain.value=this.targets[e],t[e].connect(this.bus);this.gains=t,this.applyIntensityGains(),this.startDrone(t.drone,e),this.nextTime=e+.06,this.step=0,this.timer=window.setInterval(()=>this.tick(),Nf)}setIntensity(e){e!==this.intensity&&(this.intensity=e,this.applyIntensityGains())}duck(){let e=this.ctx.currentTime;this.bus.gain.setTargetAtTime(.19,e,.08),this.bus.gain.setTargetAtTime(If,e+.4,.1)}stop(){this.timer!==null&&(window.clearInterval(this.timer),this.timer=null);let e=this.ctx.currentTime;if(this.gains)for(let t of Lf){let n=this.gains[t].gain;n.cancelScheduledValues(e),n.setValueAtTime(n.value,e),n.linearRampToValueAtTime(0,e+.25)}for(let t of this.droneOscs)t.stop(e+.3);this.droneOscs.length=0,this.gains=null,this.running=!1}resolve(e){this.stop(),this.ensureNoise();let t=this.ctx.currentTime+.05;e?(this.sawStackNote(xf,t,1.2,.07),this.sawStackNote(Cf,t,1.2,.07),this.sawStackNote(Tf,t,1.2,.07)):(this.sawStackNote(Sf,t,1,.06,.84),this.sawStackNote(wf,t,1,.06,.84),this.sawStackNote(Ef,t,1,.06,.84))}tick(){if(!this.running)return;let e=this.ctx.currentTime+Pf;for(;this.nextTime<e;){this.step%8==0&&(this.bpm=this.intensity===3?112:96);let e=60/this.bpm/2;this.scheduleStep(this.step,this.nextTime,e),this.nextTime+=e,this.step++}}scheduleStep(e,t,n){let r=e%8;if(this.layerAudible(`pulse`)){let e=jf[r]??vf;this.tone(`pulse`,`triangle`,e,t,.18,.09)}if(this.layerAudible(`kit`)&&((r===0||r===4)&&this.tone(`kit`,`sine`,110,t,.12,.15,45),r===4&&this.noise(`kit`,t,.09,.1,`bandpass`,1800),(r%2==1||this.intensity===3)&&this.noise(`kit`,t,.03,.045,`highpass`,6e3)),this.layerAudible(`lead`)){let r=e*2%Mf.length,i=(e*2+1)%Mf.length;this.tone(`lead`,`square`,Mf[r]??Df,t,.09,.045,void 0,2200),this.tone(`lead`,`square`,Mf[i]??Of,t+n/2,.09,.045,void 0,2200)}}layerAudible(e){return this.targets[e]>0||this.ctx.currentTime<this.fadeEnds[e]}applyIntensityGains(){let e=this.ctx.currentTime;for(let t of Lf){let n=+(this.intensity>=Rf[t]);if(n===this.targets[t]||(this.targets[t]=n,this.fadeEnds[t]=e+Ff,!this.gains))continue;let r=this.gains[t].gain;r.cancelScheduledValues(e),r.setValueAtTime(r.value,e),r.linearRampToValueAtTime(n,e+Ff)}}ensureNoise(){if(this.noiseBuf)return;let e=this.ctx.createBuffer(1,this.ctx.sampleRate,this.ctx.sampleRate),t=e.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;this.noiseBuf=e}dest(e){return this.gains?this.gains[e]:this.bus}tone(e,t,n,r,i,a,o,s){let c=this.ctx.createOscillator();c.type=t,c.frequency.setValueAtTime(n,r),o!==void 0&&c.frequency.exponentialRampToValueAtTime(Math.max(20,o),r+i);let l=this.ctx.createGain();l.gain.setValueAtTime(1e-4,r),l.gain.exponentialRampToValueAtTime(a,r+.008),l.gain.exponentialRampToValueAtTime(1e-4,r+i);let u=c;if(s!==void 0){let e=this.ctx.createBiquadFilter();e.type=`lowpass`,e.frequency.value=s,c.connect(e),u=e}u.connect(l).connect(this.dest(e)),c.start(r),c.stop(r+i+.03)}noise(e,t,n,r,i,a){if(!this.noiseBuf)return;let o=this.ctx.createBufferSource();o.buffer=this.noiseBuf;let s=this.ctx.createBiquadFilter();s.type=i,s.frequency.value=a;let c=this.ctx.createGain();c.gain.setValueAtTime(r,t),c.gain.exponentialRampToValueAtTime(1e-4,t+n),o.connect(s).connect(c).connect(this.dest(e)),o.start(t,Math.random()),o.stop(t+n+.03)}startDrone(e,t){let n=this.ctx.createBiquadFilter();n.type=`lowpass`,n.frequency.value=300;let r=this.ctx.createGain();r.gain.value=.05,n.connect(r).connect(e);for(let e of[vf,vf*1.007]){let r=this.ctx.createOscillator();r.type=`sawtooth`,r.frequency.value=e,r.connect(n),r.start(t),this.droneOscs.push(r)}}sawStackNote(e,t,n,r,i){let a=this.ctx.createBiquadFilter();a.type=`lowpass`,a.frequency.value=1250;let o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(r,t+.02),o.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(o).connect(this.bus);for(let r of[1,1.006,.994]){let o=this.ctx.createOscillator();o.type=`sawtooth`,o.frequency.setValueAtTime(e*r,t),i!==void 0&&o.frequency.exponentialRampToValueAtTime(e*r*i,t+n),o.connect(a),o.start(t),o.stop(t+n+.05)}}},Bf=28,Vf=146.83,Hf=174.61,Uf=220,Wf=261.63,Gf={Q:{d:.8,p:1},W:{d:1,p:1.15},E:{d:1.1,p:.85},R:{d:1.6,p:.7,ult:!0},DASH:{d:.5,p:1.2},JUMP:{d:.9,p:.85}},Kf=class{ctx=null;master=null;sfx=null;ui=null;musicBus=null;amb=null;noiseBuf=null;musicInst=null;mutedOverride=null;last={};live=0;lx=0;ly=0;rx=0;ry=1;hissFlip=!1;ambStarted=!1;ambTimer=null;ambNextPop=0;ambNextMoan=0;constructor(){let e=()=>{this.ensure(),this.ctx?.state===`suspended`&&this.ctx.resume(),this.musicInst?.start(),this.startAmbience(),window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,e)};window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,e)}get music(){return this.musicInst}get isMuted(){return localStorage.getItem(`ba-muted`)!==`0`}setMuted(e){this.mutedOverride=null;try{localStorage.setItem(`ba-muted`,e?`1`:`0`)}catch{}this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?0:.5,this.ctx.currentTime,.03)}setMutedEphemeral(e){this.mutedOverride=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?0:.5,this.ctx.currentTime,.03)}suspend(){this.ctx?.state===`running`&&this.ctx.suspend()}resume(){this.ctx?.state===`suspended`&&this.ctx.resume()}ensure(){if(this.ctx)return;let e=globalThis,t=e.AudioContext??e.webkitAudioContext;if(!t)return;let n=new t;this.ctx=n,this.master=n.createGain(),this.master.gain.value=this.mutedOverride??this.isMuted?0:.5,this.master.connect(n.destination);let r=n.createDynamicsCompressor();r.threshold.value=-18,r.knee.value=12,r.ratio.value=4,r.attack.value=.003,r.release.value=.25,r.connect(this.master);let i=e=>{let t=n.createGain();return t.gain.value=e,t.connect(r),t};this.sfx=i(.65),this.ui=i(.5),this.musicBus=i(.32),this.amb=i(.22);let a=n.createBuffer(1,n.sampleRate,n.sampleRate),o=a.getChannelData(0);for(let e=0;e<o.length;e++)o[e]=Math.random()*2-1;this.noiseBuf=a,this.musicInst=new zf(n,this.musicBus)}now(){return this.ctx?this.ctx.currentTime:0}gate(e,t){let n=this.now()*1e3;return n-(this.last[e]??-1e9)<t?!1:(this.last[e]=n,!0)}jit(){return .92+Math.random()*.16}setListener(e,t,n,r){this.lx=e,this.ly=t,this.rx=-r,this.ry=n}spatial(e,t){let n=e-this.lx,r=t-this.ly,i=Math.hypot(n,r);if(i>55)return null;let a=1/(1+i*i/100),o=i<.5?0:Math.max(-.8,Math.min(.8,(n*this.rx+r*this.ry)/i*.8));return{g:Math.max(.06,a),pan:o}}busNode(e){return e===`ui`?this.ui:e===`amb`?this.amb:this.sfx}route(e,t,n){let r=this.busNode(n);if(!(!r||!this.ctx)){if(t!==0){let n=this.ctx.createStereoPanner();n.pan.value=t,e.connect(n).connect(r)}else e.connect(r)}}applyFilter(e,t,n,r){if(!this.ctx)return e;let i=this.ctx.createBiquadFilter();if(i.type=t.type,i.frequency.setValueAtTime(Math.max(20,t.from),n),t.to!==void 0&&i.frequency.exponentialRampToValueAtTime(Math.max(20,t.to),n+r),t.q!==void 0&&(i.Q.value=t.q),t.lfo){let e=this.ctx.createOscillator();e.type=`sine`,e.frequency.value=t.lfo.freq;let a=this.ctx.createGain();a.gain.value=t.lfo.depth,e.connect(a).connect(i.frequency),e.start(n),e.stop(n+r+.05)}return e.connect(i),i}mix(e,t){let n=e.pan??0;if(e.x!==void 0&&e.y!==void 0){let r=this.spatial(e.x,e.y);if(!r||this.live>=Bf&&r.g<.35)return null;t*=r.g,n=Math.max(-1,Math.min(1,r.pan+n))}return{g:t,pan:n}}tone(e){if(!this.ctx)return;let t=this.mix(e,e.gain);if(!t)return;let n=e.at??this.ctx.currentTime,r=this.ctx.createOscillator();r.type=e.type??`sine`,r.frequency.setValueAtTime(Math.max(20,e.freq),n),e.slideTo!==void 0&&r.frequency.exponentialRampToValueAtTime(Math.max(20,e.slideTo),n+e.dur),e.detune!==void 0&&r.detune.setValueAtTime(e.detune,n);let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,n),i.gain.exponentialRampToValueAtTime(Math.max(3e-4,t.g),n+(e.attack??.005)),i.gain.exponentialRampToValueAtTime(1e-4,n+e.dur);let a=r;e.filter&&(a=this.applyFilter(a,e.filter,n,e.dur)),a.connect(i),this.route(i,t.pan,e.bus),this.countVoice(r),r.start(n),r.stop(n+e.dur+.03)}countVoice(e){this.live++,e.addEventListener(`ended`,()=>{this.live--},{once:!0})}noise(e){if(!this.ctx||!this.noiseBuf)return;let t=this.mix(e,e.gain);if(!t)return;let n=e.at??this.ctx.currentTime,r=this.ctx.createBufferSource();r.buffer=this.noiseBuf;let i=this.ctx.createGain();i.gain.setValueAtTime(Math.max(3e-4,t.g),n),i.gain.exponentialRampToValueAtTime(1e-4,n+e.dur);let a=r;e.filter&&(a=this.applyFilter(a,e.filter,n,e.dur)),a.connect(i),this.route(i,t.pan,e.bus),this.countVoice(r),r.start(n,Math.random()*Math.max(0,1-e.dur-.05)),r.stop(n+e.dur+.03)}sawStack(e,t,n,r=.07,i){if(!this.ctx)return;let a=this.busNode(`sfx`);if(!a)return;let o=this.ctx.createBiquadFilter();o.type=`lowpass`,o.frequency.value=1250;let s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(r,t+.02),s.gain.exponentialRampToValueAtTime(1e-4,t+n),o.connect(s).connect(a);let c=!0;for(let r of[1,1.006,.994]){let a=this.ctx.createOscillator();a.type=`sawtooth`,a.frequency.setValueAtTime(e*r,t),i!==void 0&&a.frequency.exponentialRampToValueAtTime(e*r*i,t+n),a.connect(o),c&&=(this.countVoice(a),!1),a.start(t),a.stop(t+n+.05)}}hit(e,t,n=`physical`){this.gate(`hit`,45)&&this.impact(this.now(),e,t,n,1)}crit(e,t){if(!this.gate(`crit`,60))return;let n=this.now();this.impact(n,e,t,`physical`,1.3),this.tone({at:n,x:e,y:t,freq:1244,dur:.05,type:`sine`,gain:.1}),this.tone({at:n,x:e,y:t,freq:72,slideTo:48,dur:.14,type:`sine`,gain:.2})}impact(e,t,n,r,i){let a=this.jit();r===`physical`?(this.noise({at:e,x:t,y:n,dur:.012,gain:.22,filter:{type:`highpass`,from:3200*i}}),this.tone({at:e,x:t,y:n,freq:185*i*a,slideTo:95*i*a,dur:.09,type:`square`,gain:.1}),this.noise({at:e,x:t,y:n,dur:.12,gain:.07,filter:{type:`lowpass`,from:1100*i}})):r===`magic`?(this.noise({at:e,x:t,y:n,dur:.01,gain:.18,filter:{type:`highpass`,from:4200*i}}),this.tone({at:e,x:t,y:n,freq:520*i*a,slideTo:260*i*a,dur:.11,type:`sine`,gain:.1}),this.tone({at:e,x:t,y:n,freq:526.24*i*a,slideTo:263.12*i*a,dur:.11,type:`sine`,gain:.1}),this.noise({at:e,x:t,y:n,dur:.1,gain:.06,filter:{type:`bandpass`,from:900*i}})):(this.noise({at:e,x:t,y:n,dur:.01,gain:.18,filter:{type:`highpass`,from:4200*i}}),this.tone({at:e,x:t,y:n,freq:720*i*a,slideTo:420*i*a,dur:.08,type:`triangle`,gain:.09}))}attack(e,t,n){if(!this.gate(`atk:`+e,70))return;let r=this.now();switch(e){case`knight`:this.atkKnight(r,t,n);break;case`rogue`:this.atkRogueHiss(r,t,n,!0);break;case`ranger`:this.tone({at:r,x:t,y:n,freq:235,slideTo:175,dur:.035,type:`triangle`,gain:.14}),this.noise({at:r,x:t,y:n,dur:.02,gain:.1,filter:{type:`highpass`,from:4500}}),this.tone({at:r,x:t,y:n,freq:900,slideTo:300,dur:.06,type:`sine`,gain:.06});break;case`mage`:this.atkMageBeat(r,t,n,1,.08),this.tone({at:r,x:t,y:n,freq:1860,dur:.04,type:`sine`,gain:.05});break;case`blackknight`:this.atkHeavy(r,t,n,.8,1.25);break;case`witch`:this.witchVoice(r,t,n,1,1,.07);break;default:this.noise({at:r,x:t,y:n,dur:.07,gain:.09,filter:{type:`lowpass`,from:1600}})}}atkKnight(e,t,n,r=1,i=1){this.noise({at:e,x:t,y:n,dur:.13*i,gain:.13,filter:{type:`bandpass`,from:400*r,to:1300*r}})}atkHeavy(e,t,n,r=1,i=1){this.noise({at:e,x:t,y:n,dur:.17*i,gain:.17,filter:{type:`bandpass`,from:250*r,to:800*r}}),this.tone({at:e,x:t,y:n,freq:65*r,dur:.07*i,type:`sine`,gain:.12})}atkRogueHiss(e,t,n,r){if(this.noise({at:e,x:t,y:n,dur:.06,gain:.09,filter:{type:`highpass`,from:2600}}),!r)return;this.hissFlip=!this.hissFlip;let i=this.hissFlip?.15:-.15;this.noise({at:e+.045,x:t,y:n,pan:i,dur:.06,gain:.09,filter:{type:`highpass`,from:2600}})}atkMageBeat(e,t,n,r,i){this.tone({at:e,x:t,y:n,freq:620*r,dur:.12,type:`sine`,gain:i}),this.tone({at:e,x:t,y:n,freq:627*r,dur:.12,type:`sine`,gain:i})}witchVoice(e,t,n,r,i,a){this.tone({at:e,x:t,y:n,freq:315*r,slideTo:296*r,dur:.18*i,type:`sine`,gain:a}),this.tone({at:e,x:t,y:n,freq:322*r,slideTo:308*r,dur:.18*i,type:`sine`,gain:a});for(let a=0;a<3;a++){let o=(260+Math.random()*160)*r;this.tone({at:e+.02+a*.055*i,x:t,y:n,freq:o,slideTo:o*2.3,dur:.05,type:`sine`,gain:.055})}this.noise({at:e+.03,x:t,y:n,dur:.03,gain:.04,filter:{type:`bandpass`,from:1100}})}cast(e=``,t=`Q`,n,r){if(!this.gate(`cast`,60))return;let i=this.now(),a=Gf[t];this.castVoice(e,i,n,r,a.p,a.d),t===`DASH`&&this.dodge(n,r),a.ult&&this.gate(`ult`,300)&&(this.tone({at:i,x:n,y:r,freq:55,slideTo:38,dur:.4,type:`sine`,gain:.22}),this.noise({at:i,x:n,y:r,dur:.5,gain:.08,filter:{type:`bandpass`,from:300,to:2500}}))}castVoice(e,t,n,r,i,a){switch(e){case`knight`:this.castKnight(t,n,r,i,a);break;case`ranger`:this.tone({at:t,x:n,y:r,freq:330*i,slideTo:660*i,dur:.22*a,type:`triangle`,gain:.12}),this.noise({at:t,x:n,y:r,dur:.02,gain:.05,filter:{type:`highpass`,from:4500}});break;case`mage`:this.tone({at:t,x:n,y:r,freq:320*i,slideTo:980*i,dur:.22*a,type:`sine`,gain:.14}),this.tone({at:t,x:n,y:r,freq:1560*i,dur:.05,type:`sine`,gain:.05}),this.tone({at:t+.04,x:n,y:r,freq:1976*i,dur:.05,type:`sine`,gain:.05}),this.tone({at:t+.08,x:n,y:r,freq:2349*i,dur:.05,type:`sine`,gain:.05});break;case`rogue`:this.castRogue(t,n,r,i,a);break;case`blackknight`:this.castHeavy(t,n,r,i*.8,a*1.25);break;case`witch`:this.witchVoice(t,n,r,i,1.2*a,.08);break;default:this.tone({at:t,x:n,y:r,freq:320*i*this.jit(),slideTo:760*i,dur:.18*a,type:`sine`,gain:.14})}}castKnight(e,t,n,r,i){this.tone({at:e,x:t,y:n,freq:220*r,slideTo:440*r,dur:.22*i,type:`square`,gain:.12}),this.noise({at:e,x:t,y:n,dur:.05,gain:.08,filter:{type:`highpass`,from:3e3}})}castRogue(e,t,n,r,i){this.noise({at:e,x:t,y:n,dur:.18*i,gain:.09,filter:{type:`highpass`,from:800,to:3500}}),this.tone({at:e,x:t,y:n,freq:660*r,slideTo:220*r,dur:.18*i,type:`sine`,gain:.1})}castHeavy(e,t,n,r,i){this.tone({at:e,x:t,y:n,freq:130*r,slideTo:180*r,dur:.25*i,type:`sawtooth`,gain:.13,filter:{type:`lowpass`,from:900}})}killConfirm(){let e=this.now();this.tone({at:e,freq:784,dur:.09,type:`triangle`,gain:.16}),this.tone({at:e+.07,freq:1046,dur:.14,type:`triangle`,gain:.16}),this.noise({at:e,dur:.03,gain:.08,filter:{type:`highpass`,from:5e3}})}stinger(e){if(!this.gate(`stinger`,250))return;let t=this.now();e===0?(this.sawStack(Vf,t,.45),this.sawStack(Hf,t,.45)):e===1?(this.sawStack(Vf,t,.45),this.sawStack(Hf,t,.45),this.sawStack(Uf,t,.45)):(this.sawStack(Vf,t,.16),this.sawStack(Hf,t+.09,.16),this.sawStack(Uf,t+.18,.16),this.sawStack(Wf,t+.27,.4),this.tone({at:t,freq:82,slideTo:58,dur:.3,type:`sine`,gain:.18}),e===3&&(this.noise({at:t,dur:.6,gain:.09,filter:{type:`bandpass`,from:400,to:4e3}}),this.tone({at:t+.6,freq:72,slideTo:48,dur:.14,type:`sine`,gain:.2})))}leaderSlain(){if(!this.gate(`leaderSlain`,300))return;let e=this.now();this.sawStack(Uf,e,.3),this.sawStack(Vf,e+.3,.3)}uiOpen(){this.tone({freq:520,dur:.06,type:`sine`,gain:.1,bus:`ui`})}uiClose(){this.tone({freq:390,dur:.06,type:`sine`,gain:.1,bus:`ui`})}uiBuy(){let e=this.now();this.tone({at:e,freq:660,dur:.08,type:`triangle`,gain:.14,bus:`ui`}),this.tone({at:e+.06,freq:880,dur:.08,type:`triangle`,gain:.14,bus:`ui`})}uiDeny(){if(!this.gate(`uiDeny`,150))return;let e=this.now();this.tone({at:e,freq:160,dur:.07,type:`square`,gain:.12,bus:`ui`}),this.tone({at:e+.09,freq:160,dur:.07,type:`square`,gain:.12,bus:`ui`})}abilityReady(){this.gate(`abilityReady`,150)&&this.tone({freq:1040,dur:.08,type:`triangle`,gain:.07,bus:`ui`})}castDeny(){this.gate(`castDeny`,120)&&this.tone({freq:140,dur:.05,type:`square`,gain:.1,bus:`ui`})}respawnTick(){this.tone({freq:440,dur:.05,type:`sine`,gain:.08,bus:`ui`})}respawnGo(){this.tone({freq:440,slideTo:880,dur:.15,type:`sine`,gain:.12,bus:`ui`})}heartbeat(){if(!this.gate(`heartbeat`,400))return;let e=this.now();this.tone({at:e,freq:55,dur:.09,type:`sine`,gain:.16,bus:`ui`}),this.tone({at:e+.13,freq:55,dur:.08,type:`sine`,gain:.1,bus:`ui`})}count(){this.tone({freq:440,dur:.09,type:`sine`,gain:.12,bus:`ui`})}fight(){let e=this.now();this.tone({at:e,freq:880,dur:.18,type:`sine`,gain:.14,bus:`ui`}),this.noise({at:e,dur:.09,gain:.1,filter:{type:`bandpass`,from:1800},bus:`ui`})}dodge(e,t){if(!this.gate(`dodge`,150))return;let n=this.now();this.noise({at:n,x:e,y:t,dur:.1,gain:.12,filter:{type:`highpass`,from:5e3}}),this.tone({at:n,x:e,y:t,freq:240,slideTo:90,dur:.1,type:`sine`,gain:.06})}land(){this.gate(`land`,150)&&this.noise({dur:.08,gain:.1,filter:{type:`lowpass`,from:700}})}explosion(e,t){if(!this.gate(`boom`,60))return;let n=this.now();this.noise({at:n,x:e,y:t,dur:.25,gain:.32,filter:{type:`lowpass`,from:900}}),this.tone({at:n,x:e,y:t,freq:90,slideTo:45,dur:.3,type:`sine`,gain:.3}),this.musicInst?.duck()}death(e,t){this.tone({x:e,y:t,freq:380,slideTo:70,dur:.4,type:`sawtooth`,gain:.16}),this.musicInst?.duck()}coin(e,t){let n=this.now();this.tone({at:n,x:e,y:t,freq:880*this.jit(),dur:.07,type:`triangle`,gain:.2}),this.tone({at:n+.02,x:e,y:t,freq:1320,dur:.12,type:`triangle`,gain:.18})}levelup(){let e=this.now();[523,659,784,1046].forEach((t,n)=>this.tone({at:e+n*.07,freq:t,dur:.14,type:`triangle`,gain:.16}))}delivery(){let e=this.now();this.tone({at:e,freq:660,dur:.12,type:`sine`,gain:.16}),this.tone({at:e+.09,freq:990,dur:.16,type:`sine`,gain:.16})}alert(){let e=this.now();this.tone({at:e,freq:440,dur:.12,type:`square`,gain:.18}),this.tone({at:e+.15,freq:440,dur:.12,type:`square`,gain:.18})}victory(){let e=this.now();[523,659,784,1046,1318].forEach((t,n)=>this.tone({at:e+n*.11,freq:t,dur:.2,type:`triangle`,gain:.2}))}startAmbience(){if(this.ambStarted||!this.ctx||!this.noiseBuf)return;let e=this.busNode(`amb`);if(!e)return;this.ambStarted=!0;let t=this.ctx.createBufferSource();t.buffer=this.noiseBuf,t.loop=!0;let n=this.ctx.createBiquadFilter();n.type=`lowpass`,n.frequency.value=110;let r=this.ctx.createGain();r.gain.value=.05,t.connect(n).connect(r).connect(e),t.start();let i=this.ctx.currentTime;this.ambNextPop=i+.4,this.ambNextMoan=i+14+Math.random()*12,this.ambTimer=window.setInterval(()=>this.ambTick(),400)}ambTick(){if(!this.ctx){this.ambTimer!==null&&window.clearInterval(this.ambTimer),this.ambTimer=null;return}let e=this.ctx.currentTime+.9;for(;this.ambNextPop<e;)this.noise({at:this.ambNextPop,dur:.015+Math.random()*.015,gain:.015+Math.random()*.025,bus:`amb`,pan:(Math.random()*2-1)*.5,filter:{type:`bandpass`,from:2300}}),this.ambNextPop+=.15+Math.random()*.45;this.ambNextMoan<e&&(this.tone({at:this.ambNextMoan,freq:290,slideTo:255,dur:3.5,type:`sine`,gain:.014,bus:`amb`,pan:(Math.random()*2-1)*.6,attack:.9}),this.ambNextMoan+=20+Math.random()*20)}},qf=Math.PI*2;function Jf(e){let t=e*.1031%1;return t<0&&(t+=1),t*=t+33.33,t*=t+t,t%1}var Yf=(e,t,n)=>Math.min(n,Math.max(t,e));function Xf(e,t,n){let r=Yf((n-e)/(t-e),0,1);return r*r*(3-2*r)}var Zf=[0,.22,.5,.75,.92];function Qf({seed:e=1,sides:t=6,taper:n=.13,roughness:r=.28,bend:i=.22}={}){let a=Math.max(3,Math.round(t)),o=Yf(n,.01,.9),s=Jf(e*1.77)*qf,c=Math.cos(s),l=Math.sin(s),u=e=>i*.5*e**1.6,d=[];for(let t=0;t<a;t++){let n=(Jf(e*3.13+t*7.7)-.5)*(qf/a)*.55*r*3;d.push(t/a*qf+n)}let f=Zf.map((t,n)=>{let i=(o+(1-o)*(1-t)**1.15)*.5,a=u(t),s=t+(Jf(e*5.9+n*2.3)-.5)*.06*r*(t>0);return d.map((o,u)=>{let d=1+(Jf(e*11.1+n*13.7+u*3.9)-.5)*r*1.3*(.35+.65*t),f=Math.max(.002,i*d);return[Math.cos(o)*f+c*a,s,Math.sin(o)*f+l*a]})}),p=u(1),m=[c*p+(Jf(e*17.3)-.5)*.09*r,1,l*p+(Jf(e*19.7)-.5)*.09*r],h=[0,0,0],g=[],_=e=>{e&&g.push(e[0],e[1],e[2])};for(let e=0;e<f.length-1;e++){let t=f[e],n=f[e+1];if(!(!t||!n))for(let e=0;e<a;e++){let r=(e+1)%a;_(t[e]),_(t[r]),_(n[e]),_(t[r]),_(n[r]),_(n[e])}}let v=f[f.length-1],y=f[0];if(v&&y)for(let e=0;e<a;e++){let t=(e+1)%a;_(v[e]),_(v[t]),_(m),_(h),_(y[t]),_(y[e])}let b=new Ot;return b.setAttribute(`position`,new be(g,3)),b.computeVertexNormals(),b}function $f(e=5,t=5){return Qf({seed:e*2.7+41,sides:t,taper:.22,roughness:.55,bend:.35})}function ep(e,t,n,r){return Jf(e*127.1+t*311.7+n*74.7+r*19.19)}function tp(e,t,n,r){let i=Math.floor(e),a=Math.floor(t),o=Math.floor(n),s=e-i,c=t-a,l=n-o,u=s*s*(3-2*s),d=c*c*(3-2*c),f=l*l*(3-2*l),p=ep(i,a,o,r),m=ep(i+1,a,o,r),h=ep(i,a+1,o,r),g=ep(i+1,a+1,o,r),_=ep(i,a,o+1,r),v=ep(i+1,a,o+1,r),y=ep(i,a+1,o+1,r),b=ep(i+1,a+1,o+1,r),x=p+(m-p)*u,S=h+(g-h)*u,C=_+(v-_)*u,w=y+(b-y)*u,T=x+(S-x)*d;return T+(C+(w-C)*d-T)*f}function np(e,t,n,r,i){let a=0,o=.5,s=1;for(let c=0;c<i;c++)a+=o*(tp(e*s,t*s,n*s,r+c*7.7)*2-1),s*=2.03,o*=.5;return a}function rp({seed:e=1,detail:t=2,lumpiness:n=.26,noiseScale:r=1.5,roughness:i=.16,cuts:a=7,cutDepth:o=.2,craters:s=5,craterDepth:c=.18,craterSize:l=.5}={}){let u=new I(1,Yf(Math.round(t),0,3)),d=u.index?u.toNonIndexed():u,f=d.getAttribute(`position`),p=(e,t)=>{let n=Math.acos(2*Jf(e)-1),r=Jf(t)*qf,i=Math.sin(n);return{x:i*Math.cos(r),y:Math.cos(n),z:i*Math.sin(r)}},m=[];for(let t=0;t<Math.max(0,Math.round(a));t++){let n=p(e*2.3+t*9.1,e*5.7+t*4.3);m.push({...n,offset:1-o*(.35+.9*Jf(e*13.1+t*6.7))})}let h=[];for(let t=0;t<Math.max(0,Math.round(s));t++){let n=p(e*3.1+t*12.9,e*7.7+t*5.3);h.push({...n,radius:Math.max(.08,l*(.45+.8*Jf(e*11.3+t*3.7))),depth:c*(.5+Jf(e*17.9+t*2.1))})}for(let t=0;t<f.count;t++){let a=f.getX(t),o=f.getY(t),s=f.getZ(t),c=1;c+=np(a*r,o*r,s*r,e,3)*n,c+=np(a*r*4.3,o*r*4.3,s*r*4.3,e+31.7,2)*i*.5;for(let e of h){let t=Math.acos(Yf(a*e.x+o*e.y+s*e.z,-1,1))/e.radius;t>=1.4||(c-=e.depth*Math.max(0,1-t*t),c+=e.depth*.5*Xf(.72,1,t)*(1-Xf(1,1.4,t)))}c=Math.max(.35,c);let l=a*c,u=o*c,d=s*c;for(let e of m){let t=l*e.x+u*e.y+d*e.z-e.offset;t<=0||(l-=e.x*t,u-=e.y*t,d-=e.z*t)}f.setXYZ(t,l,u,d)}return f.needsUpdate=!0,d.computeVertexNormals(),d.computeBoundingSphere(),d}var ip=64,ap=-26,op=.35,sp=.09,cp=class{mesh;free=[];active=[];dummy=new At;color=new G;constructor(e){let t=rp({seed:12,detail:0,lumpiness:.34,roughness:.3,cuts:4,cutDepth:.3,craters:0}),n=new Vt({roughness:.9,metalness:0,flatShading:!0});this.mesh=new ne(t,n,ip),this.mesh.instanceMatrix.setUsage(nn),this.mesh.count=0,this.mesh.frustumCulled=!1,e.add(this.mesh),this.dummy.position.set(0,-100,0),this.dummy.scale.setScalar(1e-4),this.dummy.updateMatrix();let r=new G(16777215);for(let e=63;e>=0;e--)this.free.push(e),this.mesh.setMatrixAt(e,this.dummy.matrix),this.mesh.setColorAt(e,r)}burst(e,t,n,r,i=5){this.color.setHex(r);for(let r=0;r<n;r++){let n=this.free.pop();if(n===void 0)return;let r=Math.random()*Math.PI*2,a=i*(.5+Math.random()),o={idx:n,x:e+(Math.random()-.5)*.4,y:W(e,t)+.5+Math.random()*.5,z:t+(Math.random()-.5)*.4,vx:Math.cos(r)*a,vy:4+Math.random()*5,vz:Math.sin(r)*a,rx:Math.random()*Math.PI,rz:Math.random()*Math.PI,spinX:(Math.random()-.5)*14,spinZ:(Math.random()-.5)*14,life:0,maxLife:.9+Math.random()*.5,size:.16+Math.random()*.2,squashY:.55+Math.random()*.7,squashZ:.7+Math.random()*.6,bounced:!1};this.active.push(o);let s=.85+Math.random()*.3;this.mesh.setColorAt(n,this.color.clone().multiplyScalar(s))}this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}update(e){if(this.active.length!==0||this.mesh.count!==0){for(let t=this.active.length-1;t>=0;t--){let n=this.active[t];if(n.life+=e,n.life>=n.maxLife){this.free.push(n.idx),this.dummy.position.set(0,-100,0),this.dummy.scale.setScalar(1e-4),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n.idx,this.dummy.matrix);let e=this.active[this.active.length-1];this.active[t]=e,this.active.pop();continue}n.vy+=ap*e,n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e;let r=W(n.x,n.z)+sp;n.y<r&&n.vy<0&&(n.y=r,n.bounced?(n.vy=0,n.vx*=.8,n.vz*=.8,n.spinX*=.5,n.spinZ*=.5):(n.bounced=!0,n.vy=-n.vy*op,n.vx*=.6,n.vz*=.6)),n.rx+=n.spinX*e,n.rz+=n.spinZ*e;let i=n.life/n.maxLife,a=i>.7?1-(i-.7)/.3:1;this.dummy.position.set(n.x,n.y,n.z),this.dummy.rotation.set(n.rx,n.rx*.7,n.rz);let o=n.size*a*.5;this.dummy.scale.set(o,o*n.squashY,o*n.squashZ),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n.idx,this.dummy.matrix)}this.mesh.count=this.active.length>0?ip:0,this.mesh.instanceMatrix.needsUpdate=!0}}dispose(){this.mesh.geometry.dispose();let e=this.mesh.material;if(Array.isArray(e))for(let t of e)t.dispose();else e.dispose();this.mesh.removeFromParent(),this.mesh.dispose()}},lp=1500,up=14,dp=64,fp=[`#fff6e2`,`#ffe89a`,`#ffc247`,`#ff8a2b`,`#ff5236`];function pp(e){return fp[Math.min(fp.length-1,Math.floor(e/up*fp.length))]??`#fff6e2`}function mp(e){return e<.12?(1-(1-e/.12)**3)*1.34:e<.26?1.34-.34*(1-(1-(e-.12)/.14)**2):e>.82?1-.35*((e-.82)/.18):1}var hp=class{view;layer;pool=[];combo=0;comboLastAt=0;constructor(e){this.view=e,this.layer=document.createElement(`div`),this.layer.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:6;overflow:hidden;contain:strict;`,document.body.appendChild(this.layer);for(let e=0;e<dp;e++){let e=document.createElement(`div`);e.style.cssText=`position:absolute;left:0;top:0;will-change:transform,opacity;font-family:Impact,'Arial Black',ui-monospace,monospace;font-weight:900;letter-spacing:-0.02em;font-variant-numeric:tabular-nums;transform-origin:50% 50%;visibility:hidden;`,this.layer.appendChild(e),this.pool.push({el:e,live:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,grav:11,life:0,maxLife:1,size:20,spin:0,style:`mine`})}}bumpCombo(e){return this.combo=e-this.comboLastAt>lp?1:this.combo+1,this.comboLastAt=e,this.combo}beat(e){return e-this.comboLastAt>lp?0:this.combo}spawn(e,t,n,r,i,a=0,o=0){let s=this.pool.find(e=>!e.live);if(!s)return;let c=r===`mine`||r===`crit`?this.beat(i):0,l=1+Math.min(c,up)*.035,u,d,f,p=``;switch(r){case`crit`:u=52*l,d=`#ffd76a`,f=`#5c1400`,p=`0 0 18px rgba(255,120,40,.85),`;break;case`mine`:u=34*l,d=pp(c),f=`#3a1f00`;break;case`heal`:u=30,d=`#7dffa4`,f=`#06351a`;break;case`gold`:u=30,d=`#ffd24a`,f=`#4a2f00`,p=`0 0 14px rgba(255,200,60,.7),`;break;case`banner`:u=40,d=`#66ffe0`,f=`#00332c`,p=`0 0 20px rgba(90,255,225,.8),`;break;case`incoming`:u=30,d=`#ff5f52`,f=`#3d0000`,p=`0 0 14px rgba(255,60,40,.7),`;break;default:u=20,d=`#e6ddc8`,f=`#1c1710`}let m=r===`crit`?1.35:r===`bystander`?.55:1,h=r===`banner`,g=Math.random()*Math.PI*2,_=h?0:Math.cos(g)*.9,v=h?0:Math.sin(g)*.9;s.x=t+(h?0:(Math.random()-.5)*.35),s.z=n+(h?0:(Math.random()-.5)*.35),s.y=1.5+(h?.4:Math.random()*.35),s.vx=(a*1.5+_)*m,s.vz=(o*1.5+v)*m,s.vy=h?1.1:(4.6+Math.random()*.9)*m,s.grav=h?.6:11,s.life=0,s.maxLife=r===`crit`?1.15:r===`bystander`?.7:h?1.1:.95,s.size=u,s.spin=h?0:r===`crit`?(Math.random()-.5)*14:(Math.random()-.5)*6,s.style=r,s.live=!0,s.el.textContent=e,s.el.style.color=d,s.el.style.fontSize=`${Math.round(u)}px`,s.el.style.webkitTextStroke=`${r===`bystander`?2:3}px ${f}`,s.el.style.paintOrder=`stroke fill`,s.el.style.textShadow=`${p}0 3px 0 ${f},0 6px 10px rgba(0,0,0,.55)`,s.el.style.opacity=`1`,s.el.style.visibility=`visible`}update(e){for(let t of this.pool){if(!t.live)continue;if(t.life+=e,t.life>=t.maxLife){t.live=!1,t.el.style.visibility=`hidden`;continue}t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.vy-=t.grav*e,t.vx*=1-Math.min(1,2.2*e),t.vz*=1-Math.min(1,2.2*e);let n=this.view.worldToScreen(t.x,t.z,t.y);if(!n.visible){t.el.style.visibility=`hidden`;continue}let r=t.life/t.maxLife,i=mp(r),a=t.spin*r;t.el.style.visibility=`visible`,t.el.style.transform=`translate3d(${n.x.toFixed(1)}px,${n.y.toFixed(1)}px,0) translate(-50%,-50%) rotate(${a.toFixed(1)}deg) scale(${i.toFixed(3)})`,t.el.style.opacity=r>.72?((1-r)/.28).toFixed(2):`1`}}clear(){for(let e of this.pool)e.live=!1,e.el.style.visibility=`hidden`;this.combo=0,this.comboLastAt=0}dispose(){this.layer.remove()}},gp=`
#ifndef VG_NOISE_INCLUDED
#define VG_NOISE_INCLUDED

vec3 vgMod289v3(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 vgMod289v4(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 vgPermute(vec4 x) { return vgMod289v4(((x * 34.0) + 1.0) * x); }
vec4 vgTaylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float nhash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

float nhash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = vgMod289v3(i);
  vec4 p = vgPermute(vgPermute(vgPermute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = vgTaylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

/** Two octaves — the toon default. Broad masses, no grain. */
float fbm2(vec3 p) {
  return 0.65 * snoise(p) + 0.35 * snoise(p * 2.03 + vec3(17.3, 5.1, 9.7));
}

/** Ridged multifractal — sharp filaments; cracks, seams, arcs. */
float ridged(vec3 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    v += a * (1.0 - abs(snoise(p)));
    p *= 2.06;
    a *= 0.5;
  }
  return v;
}

/**
 * Zero-crossing sheet of an fbm field: a thin, branching, forked line — what a
 * real fracture looks like. Drives lava seams and ice cracks alike.
 */
float seam(vec3 p, float width) {
  return 1.0 - smoothstep(0.0, width, abs(fbm2(p)));
}

/**
 * Posterise to N bands. The toon grade's workhorse: it turns a smooth shader
 * gradient into the flat stepped masses the KayKit models are lit with, so the
 * spell FX and the characters read as the same material world.
 */
float bands(float x, float n) {
  // The top bucket has to be clamped: at x == 1 the floor lands on n, and the
  // result leaves 0..1 (4/3 at n = 4). Callers use this as a mix factor and as
  // a brightness multiplier, so overshoot shows up as blown-out facets.
  return min(floor(clamp(x, 0.0, 1.0) * n), n - 1.0) / max(n - 1.0, 1.0);
}

#endif
`,_p={value:0},vp=_p;function yp(e){_p.value+=e}var bp=`
float hash21(vec2 p){ p = fract(p*vec2(234.34,435.345)); p += dot(p,p+34.23); return fract(p.x*p.y); }
float vnoise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p); f = f*f*(3.0-2.0*f);
  float a = hash21(i), b = hash21(i+vec2(1,0)), c = hash21(i+vec2(0,1)), d = hash21(i+vec2(1,1));
  return mix(mix(a,b,f.x), mix(c,d,f.x), f.y);
}
float fbm(vec2 p){ return 0.6*vnoise(p) + 0.4*vnoise(p*2.3 + 7.7); }`,xp=new Map;function Sp(e){let t=xp.get(e);return t||(t=new U({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:_p,uColor:{value:new G(e)}},vertexShader:`
      varying vec3 vN; varying vec3 vV; varying vec2 vUv;
      void main(){
        vUv = uv;
        vN = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position,1.0);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uTime; uniform vec3 uColor;
      varying vec3 vN; varying vec3 vV; varying vec2 vUv;
      ${bp}
      void main(){
        // boiling surface: two scroll directions so it churns, not slides
        float boil = fbm(vUv*4.0 + vec2(uTime*1.4, -uTime*0.9));
        float fres = pow(1.0 - abs(dot(vN, vV)), 1.6);
        vec3 hot = mix(uColor, vec3(1.0), 0.5);        // white-hot center
        vec3 c = mix(uColor*0.7, hot, boil) * 1.25;    // just past 1 — a gentle bloom bite
        c += uColor * fres * 0.8;                      // rim glow
        float a = 0.5 + 0.4*boil;
        gl_FragColor = vec4(c, a);
      }`}),xp.set(e,t),t)}function Cp(){return new U({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uMap:{value:tf(`shockwave`)},uColor:{value:new G(16777215)},uT:{value:0},uAlpha:{value:1},uSeed:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
      uniform sampler2D uMap; uniform vec3 uColor; uniform float uT; uniform float uAlpha; uniform float uSeed;
      varying vec2 vUv;
      void main(){
        vec2 p = vUv - 0.5;
        float cs = cos(uSeed), sn = sin(uSeed);
        vec2 q = vec2(p.x*cs - p.y*sn, p.x*sn + p.y*cs) + 0.5;
        vec4 t = texture2D(uMap, q);
        float lum = max(t.r, max(t.g, t.b)) * t.a;
        float fade = 1.0 - uT;
        vec3 c = mix(uColor, vec3(1.0), lum * 0.45) * 1.2;
        float a = lum * fade * uAlpha;
        if (a < 0.004) discard;
        gl_FragColor = vec4(c * lum, a);
      }`})}function wp(){return new U({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uMap:{value:tf(`slash-white`)},uNoise:{value:tf(`noise-caustic`,{wrap:!0})},uColor:{value:new G(16777215)},uT:{value:0},uSpan:{value:1.1},uSeed:{value:0},uDir:{value:1},uUVOff:{value:new N(0,0)},uUVScale:{value:new N(1,1)},uRot:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
      uniform sampler2D uMap; uniform sampler2D uNoise;
      uniform vec3 uColor; uniform float uT; uniform float uSpan; uniform float uSeed; uniform float uDir;
      uniform vec2 uUVOff; uniform vec2 uUVScale; uniform float uRot;
      varying vec2 vUv;
      void main(){
        vec2 p = (vUv - 0.5) * 2.0;
        float th = atan(p.y * uDir, p.x);
        // registration spin + mirror, then into the sprite's sheet window
        float cs = cos(uRot), sn = sin(uRot);
        vec2 q = vec2(p.x*cs - p.y*sn, p.x*sn + p.y*cs);
        q.y *= uDir;
        vec2 suv = uUVOff + (q * 0.5 + 0.5) * uUVScale;
        vec4 t = texture2D(uMap, suv);
        float shape = max(t.r, max(t.g, t.b)) * t.a;
        if (shape < 0.01) discard;
        // sweep open across the first 35% of life (leading tip races ahead)
        float sw = clamp(uT / 0.35, 0.0, 1.0);
        float lead = mix(-uSpan - 0.6, uSpan + 0.6, sw);
        float reveal = smoothstep(0.25, -0.1, th - lead);
        // authored-noise erosion: the dissolve threshold climbs as it dies
        float n = texture2D(uNoise, suv * 1.7 + uSeed).r;
        float diss = smoothstep(uT * 1.25 - 0.25, uT * 1.25 + 0.1, n + (1.0 - uT));
        vec3 c = mix(uColor, vec3(1.0), shape * 0.55) * 1.35;
        float a = shape * reveal * diss * (1.0 - smoothstep(0.7, 1.0, uT)) * 0.85;
        if (a < 0.004) discard;
        gl_FragColor = vec4(c * shape, a);
      }`})}function Tp(){let e={uTime:_p,uColor:{value:new G(16744512)},uT:{value:0},uSeed:{value:0},uPulse:{value:0},uGrow:{value:0}},t=new U({transparent:!0,depthWrite:!1,blending:1,side:2,uniforms:e,vertexShader:`
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
      uniform float uTime; uniform vec3 uColor; uniform float uT; uniform float uSeed; uniform float uPulse; uniform float uGrow;
      varying vec2 vUv;
      ${gp}
      void main(){
        vec2 p = (vUv - 0.5) * 2.0;
        float r = length(p);
        if (r > 1.0) discard;
        float ang = atan(p.y, p.x);

        // Sampled on a RING, not on the raw angle: atan jumps by 2*pi across
        // the -X ray, and feeding that straight to the noise put a hard seam
        // down every decal. Riding cos/sin instead makes the field periodic, so
        // it closes on itself. Radius goes in z, which keeps the property that
        // matters — fast variation around the impact, slow along a ray, so the
        // zero crossings are arms that RUN OUTWARD and fork on the way.
        vec3 q = vec3(cos(ang) * 1.9, sin(ang) * 1.9, r * 2.2 + uSeed);
        float arms  = seam(q, 0.16);
        float twigs = seam(q * 2.7 + 11.0, 0.1) * 0.55; // the branches off them
        float net = clamp(arms + twigs, 0.0, 1.0);

        // Arms are widest at the impact and taper to nothing at the rim, so the
        // network reads as spreading FROM somewhere — but the taper only bites
        // over the outer third, or the arms are gone before they get anywhere.
        net *= 1.0 - smoothstep(0.62, 1.0, r);
        // Cracks race out over the opening beat rather than appearing whole.
        // uGrow is driven off REAL seconds, not uT: a 3s scorch and a 1.8s gash
        // both have to tear open in the same instant, and keying the front to
        // life fraction made the long ones crawl.
        net *= 1.0 - smoothstep(uGrow, uGrow + 0.22, r);

        float lifeFade = 1.0 - smoothstep(0.55, 1.0, uT);
        // Seam heat cools over life; optional re-heat pulse.
        float heat = (1.0 - smoothstep(0.0, 0.6, uT)) + uPulse * (0.5 + 0.5 * sin(uTime * 12.6)) * 0.6;
        heat = clamp(heat, 0.0, 1.0);

        // Charred halo either side of every seam. Without it the glow reads as
        // painted on top of the floor instead of coming out of a hole in it.
        float soot = smoothstep(0.02, 0.5, net) * (1.0 - smoothstep(0.5, 1.0, r));
        vec3 charcoal = vec3(0.05, 0.045, 0.05);
        // A crack is a SHADOW first and a light second. Only the thin middle of
        // the gap takes the effect colour; the rest stays charred. A pale tint
        // (the knight's steel-blue) spread across the whole network vanished
        // against the arena's light floor.
        vec3 c = mix(charcoal, uColor * 1.6, heat * smoothstep(0.62, 0.95, net));

        float a = max(net, soot * 0.7) * lifeFade;
        if (a < 0.01) discard;
        gl_FragColor = vec4(c, min(a, 1.0));
      }`});return Object.assign(t,{arm:(t,n)=>{e.uColor.value.setHex(t),e.uSeed.value=Math.random()*40,e.uPulse.value=n,e.uT.value=0,e.uGrow.value=0},step:(t,n)=>{e.uT.value=t,e.uGrow.value=n}})}function Ep(e){return new U({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uTime:_p,uColor:{value:new G(e)},uAlpha:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
      uniform float uTime; uniform vec3 uColor; uniform float uAlpha;
      varying vec2 vUv;
      void main(){
        vec2 p = (vUv - 0.5) * 2.0;
        float r = length(p);
        if (r > 1.0) discard;
        float th = atan(p.y, p.x);
        // outer band (solid) + mid band (dashed, counter-rotating) + 4 ticks
        float outer = 1.0 - smoothstep(0.02, 0.045, abs(r - 0.93));
        float dash = step(0.5, fract((th + uTime * 0.9) * 2.5464)); // 16 dashes
        float mid = (1.0 - smoothstep(0.02, 0.05, abs(r - 0.74))) * dash;
        float tickA = cos((th - uTime * 0.45) * 4.0);
        float ticks = smoothstep(0.965, 0.995, tickA) * (1.0 - smoothstep(0.5, 0.62, abs(r - 0.45) / 0.45));
        float a = (outer * 0.85 + mid * 0.6 + ticks * 0.7) * uAlpha;
        if (a < 0.01) discard;
        gl_FragColor = vec4(uColor * 1.3, a);
      }`})}function Dp(e,t=!1){return new U({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uTime:_p,uColor:{value:new G(e)},uAlpha:{value:1},uUp:{value:+!!t}},vertexShader:`
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
      uniform float uTime; uniform vec3 uColor; uniform float uAlpha; uniform float uUp;
      varying vec2 vUv;
      ${bp}
      void main(){
        // diagonal stripes racing around the drum
        float stripes = 0.5 + 0.5*sin((vUv.x*6.0 + vUv.y*2.0) * 6.2831 - uTime*9.0);
        float rough = 0.7 + 0.3*vnoise(vec2(vUv.x*8.0, vUv.y*3.0 - uTime*2.0));
        float hfade = mix(1.0 - smoothstep(0.15, 1.0, vUv.y), smoothstep(0.0, 0.85, vUv.y), uUp);
        float band = stripes * rough;
        float a = band * hfade * uAlpha * 0.16;
        vec3 c = mix(uColor, vec3(1.0), band*0.25);
        if (a < 0.004) discard;
        gl_FragColor = vec4(c, a);
      }`})}var Op={crackScale:2.7,crackWidth:.075,crackBranches:.65,crackGlow:2.6,flow:.7,flowSpeed:.9,rockScale:3,facetTint:.42,cavity:.45,soot:.95,rimHeat:1,lead:1.5,leadSharp:2.6,glow:1};function kp(e){let t=new Vt({color:16777215,roughness:.94,metalness:0,flatShading:!0}),n={uTime:e,uRock:{value:new G(4864564)},uChar:{value:new G(1314831)},uCrack:{value:new G(16734750)},uHot:{value:new G(16767392)},uCrackScale:{value:Op.crackScale},uCrackWidth:{value:Op.crackWidth},uCrackBranches:{value:Op.crackBranches},uCrackGlow:{value:Op.crackGlow},uFlow:{value:Op.flow},uFlowSpeed:{value:Op.flowSpeed},uRockScale:{value:Op.rockScale},uFacetTint:{value:Op.facetTint},uCavity:{value:Op.cavity},uSoot:{value:Op.soot},uRimHeat:{value:Op.rimHeat},uLead:{value:Op.lead},uLeadSharp:{value:Op.leadSharp},uHeading:{value:new F(0,-1,0)},uCharge:{value:0},uGlow:{value:Op.glow}};return t.onBeforeCompile=e=>{Object.assign(e.uniforms,n),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
        varying vec3  vRockLocal;
        varying vec3  vRockNormalW;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        vRockLocal = transformed;
        #ifdef USE_INSTANCING
          vRockNormalW = normalize(mat3(modelMatrix) * (instanceMatrix * vec4(objectNormal, 0.0)).xyz);
        #else
          vRockNormalW = normalize(mat3(modelMatrix) * objectNormal);
        #endif`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uTime;
        uniform vec3  uRock;
        uniform vec3  uChar;
        uniform vec3  uCrack;
        uniform vec3  uHot;
        uniform float uCrackScale;
        uniform float uCrackWidth;
        uniform float uCrackBranches;
        uniform float uCrackGlow;
        uniform float uFlow;
        uniform float uFlowSpeed;
        uniform float uRockScale;
        uniform float uFacetTint;
        uniform float uCavity;
        uniform float uSoot;
        uniform float uRimHeat;
        uniform float uLead;
        uniform float uLeadSharp;
        uniform vec3  uHeading;
        uniform float uCharge;
        uniform float uGlow;
        varying vec3  vRockLocal;
        varying vec3  vRockNormalW;
        ${gp}`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        {
          vec3  N   = normalize(normal);
          float ndv = clamp(dot(N, normalize(vViewPosition)), 0.0, 1.0);
          float rim = pow(1.0 - ndv, 2.2);

          vec3  p  = vRockLocal * uCrackScale;
          float f1 = fbm2(p);
          float f2 = fbm2(p * 2.7 + 11.3);

          // The charge prises the seams open as the rock heats up.
          float width = max(0.004, uCrackWidth * (1.0 + uCharge * 0.8));
          float dist = min(abs(f1), abs(f2) / max(uCrackBranches, 0.05));

          float fissure = 1.0 - smoothstep(width * 0.35, width, dist);
          float lip     = 1.0 - smoothstep(width, width * 2.0, dist);
          float core    = 1.0 - smoothstep(0.0, width * 0.45, dist);

          // Magma is not static: brightness crawls along the inside of a seam.
          float pulse = snoise(vRockLocal * 4.0 + vec3(0.0, uTime * uFlowSpeed, 0.0));
          float flow  = mix(1.0, 0.45 + 0.75 * (pulse * 0.5 + 0.5), uFlow);

          float mottle = fbm2(vRockLocal * uRockScale) * 0.5 + 0.5;
          vec3  rock   = mix(uRock, uChar, smoothstep(0.3, 0.85, mottle));

          // Per-facet value break-up. The geometric normal in OBJECT space is
          // constant across a triangle, so hashing it gives every flat face its
          // own shade — the thing that separates cut stone from a noise-painted
          // ball, and it costs two derivatives.
          vec3  faceN = normalize(cross(dFdx(vRockLocal), dFdy(vRockLocal)));
          rock *= 1.0 + (nhash13(faceN * 37.0 + 0.5) - 0.5) * uFacetTint;

          // Cheap curvature occlusion: craters and cut faces sit closer to the
          // centre than the lumps do, so radius doubles as a cavity term.
          rock *= mix(1.0 - uCavity, 1.0, smoothstep(0.55, 1.0, length(vRockLocal)));

          // Charred around every seam, and gone entirely inside one.
          rock = mix(rock, uChar, lip * uSoot);
          rock *= 1.0 - fissure * 0.92;
          rock *= mix(0.5, 1.2, ndv);
          diffuseColor.rgb *= rock;

          // The gap is the only thing that emits, and only its middle runs
          // white. Everything else is rock.
          vec3 glow = mix(uCrack, uHot, core * core) * fissure * flow * uCrackGlow;

          // A sheath of heat around the silhouette, and compression heat on the
          // leading facets. Both squared against the charge: at launch this is a
          // cold rock with lit cracks, and only on the way down does the whole
          // thing start to burn.
          float charge2 = uCharge * uCharge;
          glow += uCrack * rim * uRimHeat * charge2;
          float lead = pow(clamp(dot(normalize(vRockNormalW), uHeading), 0.0, 1.0), uLeadSharp);
          glow += uHot * lead * uLead * charge2;
          glow *= uGlow;

          // Same soft ceiling the crystals use: these terms are independent and
          // stack, and without it a seam crossing the rim sums past 10 and the
          // bloom pass smears the rock into a white blob.
          glow /= 1.0 + glow * 0.22;

          totalEmissiveRadiance += glow;
        }`)},Object.assign(t,{setCharge:e=>{n.uCharge.value=Math.min(1,Math.max(0,e))},setHeading:(e,t,r)=>{n.uHeading.value.set(e,t,r).normalize()}})}var Ap=`
varying vec2 vUv;
varying vec3 vN;
varying vec3 vV;
void main() {
  vUv = uv;
  vN = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vV = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`,jp=`
uniform float uTime;
uniform vec3  uCore;
uniform vec3  uShell;
uniform float uOpacity;
uniform float uSeed;
varying vec2 vUv;
varying vec3 vN;
varying vec3 vV;

${gp}

void main() {
  float ndv = abs(dot(normalize(vN), normalize(vV)));
  float rim  = pow(1.0 - ndv, 1.7);  // hollow sheath
  float axis = pow(ndv, 1.5);        // solid rod down the barrel

  // Ribbons spiralling around the column. Banded rather than smooth so they
  // read as discrete coils against the flat-shaded arena instead of as a soft
  // gradient the bloom pass will erase.
  float coil = bands(0.5 + 0.5 * sin((vUv.x * 3.0 - vUv.y * 5.0) * 6.2831 - uTime * 5.0), 3.0);
  // Shock discs racing UP the column, away from the ground it stands in.
  float disc = smoothstep(0.75, 1.0, fract(vUv.y * 2.5 - uTime * 1.6));
  float churn = 0.75 + 0.25 * fbm2(vec3(vUv * vec2(4.0, 2.5), uTime * 0.5 + uSeed));

  // Thickest where it meets the floor, and gone entirely before the top cap.
  // A beam has a source; and if its far end still has alpha, the tube's own
  // silhouette closes into a hard-edged cone and the whole thing stops reading
  // as light and starts reading as a solid.
  float taper = mix(1.0, 0.4, smoothstep(0.0, 0.8, vUv.y));
  float cap = 1.0 - smoothstep(0.62, 1.0, vUv.y);
  float foot = 1.0 - smoothstep(0.0, 0.3, vUv.y);

  vec3 color = mix(uShell, uCore, axis * axis);
  color += uCore * (coil * 0.3 + disc * 0.55 + foot * 0.8);

  // Weighted toward the rod down the middle: an evenly-lit tube is fog, and
  // reads milky rather than hot.
  float alpha = (rim * 0.42 + axis * 1.05) * churn * taper * cap * uOpacity;
  alpha += disc * 0.22 * taper * cap * uOpacity;
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(color * (1.0 + axis * 1.4), min(alpha, 1.0));
}`;function Mp(e){let t={uTime:e,uCore:{value:new G(16777215)},uShell:{value:new G(16744512)},uOpacity:{value:.8},uSeed:{value:0}},n=new U({uniforms:t,vertexShader:Ap,fragmentShader:jp,transparent:!0,depthWrite:!1,blending:2,side:2});return Object.assign(n,{setColor:(e,n)=>{t.uCore.value.setHex(e),t.uShell.value.setHex(n)},setOpacity:e=>{t.uOpacity.value=e},reseed:()=>{t.uSeed.value=Math.random()*50}})}var Np={depthTint:1.05,fresnel:1.9,fresnelPower:2.2,translucency:1.1,facetSharp:.72,facetBands:4,fracture:.6,fractureScale:3,veins:.45,veinScale:3,sparkle:1.3,sparkleScale:18,sparkleSpeed:.6,frostLine:.55,glow:1,edgeGlow:1.25,birthGlow:3,opacity:.94};function Pp(e){let t=new Vt({color:16777215,roughness:.18,metalness:0,flatShading:!0,transparent:!0,side:2,depthWrite:!0,opacity:Np.opacity}),n={uTime:e,uDeep:{value:new G(1268881)},uRim:{value:new G(14676735)},uCore:{value:new G(11069183)},uDensity:{value:Np.depthTint},uFresnel:{value:Np.fresnel},uFresnelPower:{value:Np.fresnelPower},uTranslucency:{value:Np.translucency},uFacetSharp:{value:Np.facetSharp},uFacetBands:{value:Np.facetBands},uFracture:{value:Np.fracture},uFractureScale:{value:Np.fractureScale},uVeins:{value:Np.veins},uVeinScale:{value:Np.veinScale},uSparkle:{value:Np.sparkle},uSparkleScale:{value:Np.sparkleScale},uSparkleSpeed:{value:Np.sparkleSpeed},uFrostLine:{value:Np.frostLine},uGlow:{value:Np.glow},uEdgeGlow:{value:Np.edgeGlow},uBirthGlow:{value:Np.birthGlow}};return t.onBeforeCompile=e=>{Object.assign(e.uniforms,n),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
        attribute float aSeed;
        attribute float aBirth;
        varying vec3  vCrystalLocal;
        varying vec3  vCrystalWorld;
        varying float vCrystalSeed;
        varying float vCrystalBirth;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        vCrystalLocal = transformed;
        vCrystalSeed = aSeed;
        vCrystalBirth = aBirth;
        #ifdef USE_INSTANCING
          vCrystalWorld = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
        #else
          vCrystalWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
        #endif`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uTime;
        uniform vec3  uDeep;
        uniform vec3  uRim;
        uniform vec3  uCore;
        uniform float uDensity;
        uniform float uFresnel;
        uniform float uFresnelPower;
        uniform float uTranslucency;
        uniform float uFacetSharp;
        uniform float uFacetBands;
        uniform float uFracture;
        uniform float uFractureScale;
        uniform float uVeins;
        uniform float uVeinScale;
        uniform float uSparkle;
        uniform float uSparkleScale;
        uniform float uSparkleSpeed;
        uniform float uFrostLine;
        uniform float uGlow;
        uniform float uEdgeGlow;
        uniform float uBirthGlow;
        varying vec3  vCrystalLocal;
        varying vec3  vCrystalWorld;
        varying float vCrystalSeed;
        varying float vCrystalBirth;
        ${gp}`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        {
          vec3  N   = normalize(normal);
          float ndv = clamp(dot(N, normalize(vViewPosition)), 0.0, 1.0);

          // Facing a facet you look down the long axis of the crystal; at a
          // grazing angle you are only clipping its edge.
          float thickness = clamp(ndv * uDensity, 0.0, 1.0);
          float rimAmount = pow(1.0 - ndv, uFresnelPower);
          float fres = rimAmount * uFresnel;

          // World space: crack planes keep a fixed physical scale, so a small
          // shard and a tall spike look cut from the same block.
          vec3  fp     = vCrystalWorld * uFractureScale + vCrystalSeed * 37.0;
          float cracks = smoothstep(0.58, 0.95, ridged(fp));

          // Local space: veining follows each crystal's own axis whatever the
          // instance scale did to it.
          float veins = smoothstep(0.45, 0.9, fbm2(vCrystalLocal * uVeinScale * 4.0 + vCrystalSeed * 11.0) * 0.5 + 0.5);

          // The toon step. diffuseColor.rgb already carries the instance tint,
          // so shading here is a multiplier and one material serves every hue.
          vec3 body = mix(vec3(1.0), uDeep, bands(thickness, uFacetBands));
          body = mix(body, uRim, veins * uVeins * 0.5);
          body = mix(body, uRim, cracks * uFracture * 0.4);

          // Rime gathers where the crystal left the floor.
          float rime = (1.0 - smoothstep(0.0, 0.55, vCrystalLocal.y)) *
                       (0.55 + 0.45 * fbm2(vCrystalLocal * 7.0 + vCrystalSeed * 5.0));
          body = mix(body, uRim, clamp(rime, 0.0, 1.0) * uFrostLine);

          // Lift facets that point at the camera, in steps, so the silhouette
          // reads as a bundle of planes rather than one smooth mass.
          body *= mix(1.0, 0.6 + 0.85 * bands(ndv, uFacetBands), uFacetSharp);

          // Pinpoint glints, biased to the grazing angles where ice catches.
          float sp = snoise(vCrystalWorld * uSparkleScale +
                            vec3(0.0, uTime * uSparkleSpeed, 0.0) + vCrystalSeed * 23.0);
          sp = pow(clamp(sp, 0.0, 1.0), 14.0) * smoothstep(0.0, 0.7, fres + 0.3);

          diffuseColor.rgb *= body;

          // The rim glow rides the normalised fresnel, not fres — that one
          // carries uFresnel because it also drives opacity, and folding the
          // gain in here too pushes the silhouette past white before any of the
          // other terms land.
          vec3 glow = uRim * rimAmount * uEdgeGlow;
          glow += uCore * (cracks * uFracture * 0.8 + veins * uVeins * 0.35) * uTranslucency;
          glow += uRim * sp * uSparkle * 1.5;
          glow += uCore * vCrystalBirth * uBirthGlow;
          glow *= uGlow;

          // Soft ceiling. Those terms are independent and all peak at a grazing
          // angle, so they stack; without this a silhouette facet sums past 10
          // and the bloom pass smears the crystal into a white blob. Reinhard
          // leaves anything under ~1 alone and asymptotes at 1/0.22.
          glow /= 1.0 + glow * 0.22;

          totalEmissiveRadiance += glow * diffuseColor.rgb;

          // Thin at the edges, denser through the body and along the cracks.
          diffuseColor.a = clamp(diffuseColor.a * (0.7 + 0.42 * fres) + cracks * 0.1, 0.0, 1.0);
        }`)},t}var Fp=96,Ip=1.6,Lp=class{mesh;free=[];birth;live=0;constructor(e,t,n){let r=new Float32Array(Fp);for(let e=0;e<Fp;e++)r[e]=Math.random()*100;t.setAttribute(`aSeed`,new _(r,1)),this.birth=new _(new Float32Array(Fp),1),this.birth.setUsage(nn),t.setAttribute(`aBirth`,this.birth),this.mesh=new ne(t,n,Fp),this.mesh.instanceMatrix.setUsage(nn),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,e.add(this.mesh);let i=new At;i.position.set(0,-100,0),i.scale.setScalar(1e-4),i.updateMatrix();let a=new G(16777215);for(let e=95;e>=0;e--)this.free.push(e),this.mesh.setMatrixAt(e,i.matrix),this.mesh.setColorAt(e,a)}dispose(){this.mesh.geometry.dispose(),this.mesh.removeFromParent(),this.mesh.dispose()}},Rp=class{blades;shards;material;active=[];dummy=new At;color=new G;constructor(e){this.material=Pp(vp),this.blades=new Lp(e,Qf({seed:7,sides:6,taper:.2,roughness:.38,bend:.26}),this.material),this.shards=new Lp(e,$f(3,5),this.material)}ring(e,t,n,r,i,a={}){for(let o=0;o<r;o++){let s=o/r*Math.PI*2+Math.random()*.25;this.one(e+Math.cos(s)*n,t+Math.sin(s)*n,s,i,a)}}scatter(e,t,n,r,i,a={}){for(let o=0;o<r;o++){let r=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*n;this.one(e+Math.cos(r)*o,t+Math.sin(r)*o,r,i,a)}}erupt(e,t,n,r,i,a={}){this.ring(e,t,n,r,i,a);let o=a.h??1.2,s=a.w??.4;this.scatter(e,t,n*1.12,Math.round(r*1.4),i,{...a,h:o*.32,w:s*1.5,tiltOut:.5,jitter:.7,riseMs:(a.riseMs??130)*1.5,exitMs:(a.exitMs??260)*1.3})}one(e,t,n,r,i){let{h:a=1.2,w:o=.4,riseMs:s=130,holdMs:c=700,exitMs:l=260,tiltOut:u=.18,jitter:d=.35}=i,f=a/o<=Ip?this.shards:this.blades,p=f.free.pop();if(p===void 0)return;let m=1-d/2+Math.random()*d;this.active.push({bank:f,idx:p,x:e,z:t,gy:W(e,t),outward:n,yaw:Math.random()*Math.PI*2,tilt:u*(.5+Math.random()),h:a*m,wx:o*(.75+Math.random()*.55),wz:o*(.75+Math.random()*.55),rise:s,hold:c,exit:l,t:0}),f.live++;let h=.8+Math.random()*.35;f.mesh.setColorAt(p,this.color.setHex(r).multiplyScalar(h)),f.mesh.instanceColor&&(f.mesh.instanceColor.needsUpdate=!0)}update(e){if(this.active.length===0&&this.blades.mesh.count===0&&this.shards.mesh.count===0)return;let t=e*1e3;for(let e=this.active.length-1;e>=0;e--){let n=this.active[e];if(!n)continue;n.t+=t;let r=n.rise+n.hold+n.exit;if(n.t>=r){n.bank.free.push(n.idx),n.bank.live--,this.dummy.position.set(0,-100,0),this.dummy.rotation.set(0,0,0),this.dummy.scale.setScalar(1e-4),this.dummy.updateMatrix(),n.bank.mesh.setMatrixAt(n.idx,this.dummy.matrix),n.bank.birth.setX(n.idx,0);let t=this.active[this.active.length-1];t&&(this.active[e]=t),this.active.pop();continue}let i;if(n.t<n.rise)i=1.12*(1-(1-n.t/n.rise)**3);else if(n.t<n.rise+n.hold){let e=(n.t-n.rise)/n.hold;i=1.12-.12*Math.min(1,e*3)}else{let e=(n.t-n.rise-n.hold)/n.exit;i=1-e*e}n.bank.birth.setX(n.idx,Math.max(0,1-n.t/(n.rise*2.2))),this.dummy.position.set(n.x,n.gy,n.z),this.dummy.rotation.set(Math.sin(n.outward)*n.tilt,n.yaw,-Math.cos(n.outward)*n.tilt),this.dummy.scale.set(n.wx,Math.max(.001,n.h*i),n.wz),this.dummy.updateMatrix(),n.bank.mesh.setMatrixAt(n.idx,this.dummy.matrix)}for(let e of[this.blades,this.shards])e.mesh.count=e.live>0?Fp:0,e.mesh.instanceMatrix.needsUpdate=!0,e.birth.needsUpdate=!0}dispose(){this.blades.dispose(),this.shards.dispose(),this.material.dispose()}},zp=56,Bp=12,X={sag:0,restrike:14,spread:.5,spreadNear:.04,spreadCurve:1.5,twist:.35,twistSpeed:.2,jitter:.42,jitterScale:1.5,octaves:3,jitterFalloff:.5,crawl:5,pinch:.12,width:.13,widthTip:.55,widthCurve:1.3,coreWidth:.42,flickerSpeed:22,strandFlash:.45,coreSharp:2.6,glowFalloff:1.5,glowWidth:4.2,branchDim:.5,flicker:.35,tipLength:.1,tipGlow:1.6};function Vp(){let e=new Float32Array(336);for(let t=0;t<zp;t++){let n=t/55,r=t*6;e[r]=n,e[r+1]=-1,e[r+3]=n,e[r+4]=1}let t=new Uint16Array(330);for(let e=0;e<55;e++){let n=e*2,r=e*6;t[r]=n,t[r+1]=n+1,t[r+2]=n+2,t[r+3]=n+1,t[r+4]=n+3,t[r+5]=n+2}let n=new Float32Array(Bp);for(let e=0;e<Bp;e++)n[e]=e;let r=new E;return r.setAttribute(`position`,new Ht(e,3)),r.setAttribute(`aStrand`,new _(n,1)),r.setIndex(new Ht(t,1)),r.instanceCount=Bp,r.boundingSphere=new st(new F,1e4),r}var Hp=`
#define PI 3.141592653589793
#define TAU 6.283185307179586

uniform float uTime;
uniform vec3  uOrigin;
uniform vec3  uTarget;
uniform float uSeed;
uniform float uFade;
uniform float uWidthScale;

attribute float aStrand;

varying float vT;
varying float vSide;
varying float vStrand;
varying float vFlash;

${gp}

/** Value noise with a LINEAR ramp — piecewise-linear output, sharp corners. */
float vnoise1(float x, float seed) {
  float i = floor(x);
  float f = x - i;
  return mix(nhash11(i + seed), nhash11(i + 1.0 + seed), f) * 2.0 - 1.0;
}

vec2 kink(float t, float seed, float span) {
  vec2 o = vec2(0.0);
  float amp = 1.0;
  float freq = ${X.jitterScale.toFixed(3)} * span;
  float scroll = uTime * ${X.crawl.toFixed(3)};
  for (int i = 0; i < ${X.octaves}; i++) {
    o.x += amp * vnoise1(t * freq + scroll, seed + 13.0 * float(i));
    o.y += amp * vnoise1(t * freq + scroll * 1.17, seed + 71.3 + 13.0 * float(i));
    amp *= ${X.jitterFalloff.toFixed(3)};
    freq *= 2.0;
    scroll *= 1.63;
  }
  return o;
}

vec3 boltPoint(float t, float seed, float radial, vec3 n1, vec3 n2, float span) {
  vec3 axis = mix(uOrigin, uTarget, t);
  axis.y += ${X.sag.toFixed(3)} * sin(t * PI);

  // Pinned at both ends: a bolt that lands somewhere other than where it was
  // aimed reads as a bug, not as chaos.
  float pinch = ${X.pinch.toFixed(3)};
  float ends = smoothstep(0.0, pinch, t) * smoothstep(0.0, pinch, 1.0 - t);

  vec2 offset = kink(t, seed, span) * ${X.jitter.toFixed(3)} * ends;
  float angle = seed * TAU + (t * ${X.twist.toFixed(3)} + uTime * ${X.twistSpeed.toFixed(3)}) * TAU;
  float reach = mix(${X.spreadNear.toFixed(3)}, ${X.spread.toFixed(3)}, pow(clamp(t, 0.0, 1.0), ${X.spreadCurve.toFixed(3)}));
  offset += vec2(cos(angle), sin(angle)) * reach * radial;

  return axis + n1 * offset.x + n2 * offset.y;
}

void main() {
  float t = position.x;
  vT = t;
  vSide = position.y;

  vec3 delta = uTarget - uOrigin;
  float span = max(length(delta), 0.01);
  vec3 dir = delta / span;
  // Gram-Schmidt off world up: the axis is usually near-vertical for a smite,
  // so pick the fallback that stays well-conditioned either way.
  vec3 ref = abs(dir.y) > 0.9 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
  vec3 n1 = normalize(cross(dir, ref));
  vec3 n2 = normalize(cross(dir, n1));

  // The strike index snaps every filament onto a new shape uRestrike times a
  // second; the crawl inside kink() slides it continuously in between. Both
  // together are what stop a held bolt looking like a static ribbon.
  float strike = floor(uTime * ${X.restrike.toFixed(3)});
  float seed = nhash11(aStrand * 7.13 + uSeed + strike * 3.77) * 97.0;
  float radial = aStrand / ${11 .toFixed(1)};
  vStrand = radial;

  vec3 here = boltPoint(t, seed, radial, n1, n2, span);

  // Tangent by finite difference, mirrored at the far end so the last node
  // still has a neighbour to look at.
  float ahead = t + 0.02;
  float flip = 1.0;
  if (ahead > 1.0) { ahead = t - 0.02; flip = -1.0; }
  vec3 tangent = (boltPoint(ahead, seed, radial, n1, n2, span) - here) * flip;
  tangent = length(tangent) > 1e-5 ? normalize(tangent) : dir;

  vec3 binormal = cross(tangent, normalize(cameraPosition - here));
  float bl = length(binormal);
  binormal = bl > 1e-4 ? binormal / bl : n1;

  // A stuttering per-filament blink, quantised so the whole bundle strobes on
  // one clock instead of shimmering independently.
  float flash = mix(1.0, nhash11(floor(uTime * ${X.flickerSpeed.toFixed(1)}) + aStrand * 3.7 + uSeed), ${X.strandFlash.toFixed(3)});
  vFlash = flash;

  float halfWidth = ${X.width.toFixed(3)} * uWidthScale;
  halfWidth *= mix(1.0, ${X.widthTip.toFixed(3)}, pow(clamp(t, 0.0, 1.0), ${X.widthCurve.toFixed(3)}));
  halfWidth *= mix(${X.coreWidth.toFixed(3)}, 1.0, radial);
  halfWidth *= flash * uFade;

  gl_Position = projectionMatrix * viewMatrix * vec4(here + binormal * vSide * halfWidth, 1.0);
}`,Up=`
uniform float uTime;
uniform float uSeed;
uniform float uProgress;
uniform float uFade;
uniform float uOpacity;
uniform float uGlowPass;
uniform vec3  uCore;
uniform vec3  uInner;
uniform vec3  uOuter;
uniform vec3  uHalo;

varying float vT;
varying float vSide;
varying float vStrand;
varying float vFlash;

${gp}

void main() {
  // Ahead of the strike front there is no bolt yet. The ribbon is drawn whole
  // and CLIPPED here rather than scaled, so the shape never changes as the
  // front travels — only how much of it exists.
  float drawn = 1.0 - smoothstep(uProgress - ${X.tipLength.toFixed(3)}, uProgress, vT);
  if (drawn <= 0.002) discard;

  float v = clamp(abs(vSide), 0.0, 1.0);
  vec3 color;
  float profile;
  if (uGlowPass > 0.5) {
    profile = pow(1.0 - v, ${X.glowFalloff.toFixed(3)});
    color = mix(uHalo, uOuter, profile);
  } else {
    profile = pow(1.0 - v, ${X.coreSharp.toFixed(3)});
    color = mix(uOuter, uInner, smoothstep(0.0, 0.5, profile));
    color = mix(color, uCore, smoothstep(0.45, 1.0, profile));
  }

  // The leading edge is where the air is actually breaking down.
  color += uCore * smoothstep(uProgress - ${(X.tipLength*2).toFixed(3)}, uProgress, vT) * ${X.tipGlow.toFixed(3)};

  // Quantised, not sinusoidal: real lightning stutters between brightnesses,
  // it does not breathe.
  float flicker = 1.0 - ${X.flicker.toFixed(3)} * nhash11(floor(uTime * ${X.flickerSpeed.toFixed(1)}) + uSeed);

  float alpha = profile * drawn * flicker * vFlash * uFade * uOpacity;
  alpha *= mix(1.0, ${X.branchDim.toFixed(3)}, vStrand);
  if (alpha < 0.003) discard;
  gl_FragColor = vec4(color, alpha);
}`,Wp=4,Gp=new G(16777215),Kp=class{bolts=[];geo=Vp();constructor(e,t){for(let n=0;n<Wp;n++){let n=n=>{let r={uTime:t,uOrigin:{value:new F},uTarget:{value:new F},uSeed:{value:0},uFade:{value:1},uProgress:{value:1},uOpacity:{value:n?.5:1},uWidthScale:{value:n?X.glowWidth:1},uGlowPass:{value:+!!n},uCore:{value:new G(16777215)},uInner:{value:new G(14479359)},uOuter:{value:new G(8373503)},uHalo:{value:new G(2780415)}},i=new U({uniforms:r,vertexShader:Hp,fragmentShader:Up,transparent:!0,depthWrite:!1,blending:2,side:2}),a=new L(this.geo,i);return a.frustumCulled=!1,a.visible=!1,a.renderOrder=6,e.add(a),{mesh:a,uni:r}},r=n(!1),i=n(!0);this.bolts.push({core:r.mesh,glow:i.mesh,uni:{core:r.uni,glow:i.uni},life:0,maxLife:1,strikeTime:.09})}}strike(e,t,n={}){let r=this.bolts.find(e=>e.life<=0);if(!r)return;let{life:i=.34,scale:a=1,color:o=10474751,haloColor:s=2780415}=n;r.life=i,r.maxLife=i,r.core.visible=!0,r.glow.visible=!0;let c=Math.random()*100;for(let[n,i]of[[r.uni.core,1],[r.uni.glow,X.glowWidth]])n.uOrigin.value.set(e.x,e.y,e.z),n.uTarget.value.set(t.x,t.y,t.z),n.uSeed.value=c,n.uWidthScale.value=a*i,n.uOuter.value.setHex(o),n.uHalo.value.setHex(s),n.uInner.value.setHex(o).lerp(Gp,.6),n.uProgress.value=0;r.strikeTime=n.strikeTime??Math.min(.09,i*.35)}update(e){for(let t of this.bolts){if(t.life<=0)continue;if(t.life-=e,t.life<=0){t.core.visible=!1,t.glow.visible=!1;continue}let n=t.maxLife-t.life,r=Math.min(1,n/Math.max(.001,t.strikeTime)),i=n/t.maxLife,a=i<.45?1:1-(i-.45)/.55;for(let e of[t.uni.core,t.uni.glow])e.uProgress.value=r,e.uFade.value=a}}dispose(){for(let e of this.bolts)for(let t of[e.core,e.glow])t.material.dispose(),t.removeFromParent();this.geo.dispose(),this.bolts.length=0}},qp=2.2,Jp=new F,Yp=new Ct,Xp=new F,Zp=new Me,Qp=new F,$p=new G,em=new F(0,0,1),tm=new Me().makeScale(0,0,0),nm={x:0,y:0,z:0,size:.6,life:.3};function rm(){return{px:0,py:0,pz:0,vx:0,vy:0,vz:0,life:0,maxLife:1,s0:1,gravity:0,drag:0,stretch:!1,r:1,g:1,b:1,alpha:1}}var im=class{cap;fadeColor;mesh;slots=[];active=[];activeCount=0;free=[];colorAttr;alphaAttr;highWater=0;dirty=!1;constructor(e,t,n,r,i,a){this.cap=n,this.fadeColor=r,this.mesh=new ne(e,t,n),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=i,this.mesh.instanceMatrix.setUsage(nn),this.colorAttr=new _(new Float32Array(n*3),3),this.colorAttr.setUsage(nn),this.mesh.instanceColor=this.colorAttr,this.alphaAttr=a;for(let e=n-1;e>=0;e--)this.free.push(e);for(let e=0;e<n;e++)this.slots.push(rm()),this.active.push(0)}spawn(e){let t=this.free.pop();if(t===void 0)return;let n=this.slots[t];if(!n)return;n.px=e.x,n.py=e.y,n.pz=e.z,n.vx=e.vx??0,n.vy=e.vy??0,n.vz=e.vz??0,n.life=n.maxLife=Math.max(.016,e.life),n.s0=e.size,n.gravity=e.gravity??0,n.drag=e.drag??0,n.stretch=e.stretch??!1,n.alpha=e.alpha??1;let r=e.bright??1;e.cr!==void 0||e.cg!==void 0||e.cb!==void 0?$p.setRGB(e.cr??1,e.cg??1,e.cb??1):$p.setHex(e.color??16777215),n.r=$p.r*r,n.g=$p.g*r,n.b=$p.b*r,this.active[this.activeCount++]=t,t>=this.highWater&&(this.highWater=t+1,this.mesh.count=this.highWater),this.writeInstance(t,n,1),this.dirty=!0}update(e){for(let t=this.activeCount-1;t>=0;t--){let n=this.active[t];if(n===void 0)continue;let r=this.slots[n];if(r){if(r.life-=e,r.life<=0){this.mesh.setMatrixAt(n,tm);let e=this.active[--this.activeCount];e!==void 0&&(this.active[t]=e),this.free.push(n),this.dirty=!0;continue}if(r.vy+=r.gravity*e,r.drag>0){let t=Math.max(0,1-r.drag*e);r.vx*=t,r.vy*=t,r.vz*=t}r.px+=r.vx*e,r.py+=r.vy*e,r.pz+=r.vz*e,this.writeInstance(n,r,r.life/r.maxLife),this.dirty=!0}}this.dirty&&=(this.mesh.instanceMatrix.needsUpdate=!0,this.colorAttr.needsUpdate=!0,this.alphaAttr&&(this.alphaAttr.needsUpdate=!0),this.activeCount>0)}writeInstance(e,t,n){let r=Math.max(.01,t.s0*n);if(Jp.set(t.px,t.py,t.pz),t.stretch){let e=Math.hypot(t.vx,t.vy,t.vz);e>1e-4?(Qp.set(t.vx/e,t.vy/e,t.vz/e),Yp.setFromUnitVectors(em,Qp)):Yp.identity(),Xp.set(r,r,r*(1+Math.min(3,e*.16)))}else Yp.identity(),Xp.set(r,r,r);Zp.compose(Jp,Yp,Xp),this.mesh.setMatrixAt(e,Zp),this.fadeColor?this.colorAttr.setXYZ(e,t.r*n,t.g*n,t.b*n):(this.colorAttr.setXYZ(e,t.r,t.g,t.b),this.alphaAttr?.setX(e,t.alpha*n))}dispose(e){e.remove(this.mesh),this.mesh.geometry.dispose();let t=this.mesh.material;if(Array.isArray(t))for(let e of t)e.dispose();else t.dispose();this.mesh.dispose()}},am=512,om=160,sm=class{scene;add;normal;addMat;constructor(e){this.scene=e;let t=new it(.16,6,5),n=new R({blending:2,depthWrite:!1,transparent:!0,toneMapped:!0});this.addMat=n,this.add=new im(t,n,am,!0,11,null);let r=new it(.16,6,5),i=new _(new Float32Array(om),1);i.setUsage(nn),r.setAttribute(`aAlpha`,i);let a=new R({blending:1,depthWrite:!1,transparent:!0});a.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aAlpha;
varying float vPAlpha;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vPAlpha = aAlpha;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vPAlpha;`).replace(`#include <color_fragment>`,`#include <color_fragment>
diffuseColor.a *= vPAlpha;`)},a.customProgramCacheKey=()=>`fx-particles-alpha`,this.normal=new im(r,a,om,!1,10,i),e.add(this.normal.mesh),e.add(this.add.mesh)}setAddGain(e){this.addMat.color.setScalar(e)}spawn(e,t){(e===`add`?this.add:this.normal).spawn(t)}burst(e,t,n){let r=n.upBias??.6;for(let i=0;i<t;i++){let t=Math.random()*Math.PI*2,i=Math.random()*.8+.2,a=n.speed*(.5+Math.random());nm.x=n.x,nm.y=n.y,nm.z=n.z,nm.vx=Math.cos(t)*a,nm.vz=Math.sin(t)*a,nm.vy=i*a*r,nm.color=n.color,nm.cr=void 0,nm.cg=void 0,nm.cb=void 0,nm.size=(n.size??.6)*(.7+Math.random()*.6),nm.life=n.life*(.7+Math.random()*.6),nm.gravity=n.gravity??-10,nm.drag=n.drag??0,nm.stretch=n.stretch??!0,nm.bright=n.bright??1,nm.alpha=n.alpha??1,this.spawn(e,nm)}}update(e){this.add.update(e),this.normal.update(e)}dispose(){this.add.dispose(this.scene),this.normal.dispose(this.scene)}},cm=new Map([[`meteor`,1200],[`smite`,450],[`nova`,400],[`vines`,500],[`hexring`,500]]),lm=new Map(Object.entries({meteor:16729122,nova:8377599,trap:10158016,rain:16769162,whirlwind:16777215,smite:16766826,brew:8380554,vines:6991946,hexring:12159712}));function um(e){return lm.get(e)??16755268}var dm=16728112,fm=8,pm=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,mm=`
uniform vec3 uColor;
uniform vec3 uRim;
uniform float uFill;
uniform float uPulse;
uniform float uAlpha;
uniform float uTime;
uniform float uSeed;
uniform float uStain;
varying vec2 vUv;
${gp}
void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float d = length(p);
  if (d > 1.0) discard;

  vec3 np = vec3(p * 2.6, uSeed);
  float grain = fbm2(np);                       // -1..1, the boundary chew
  float mottle = 0.72 + 0.28 * fbm2(np * 2.3 + vec3(0.0, 0.0, uTime * 0.08));

  float rim = (smoothstep(0.90, 0.955, d) - smoothstep(0.97, 1.0, d)) * uPulse;

  // The fill edge is a FRONT, not a step: it advances with a chewed, feathered
  // leading edge, which is what makes a detonation fuse read as something
  // spreading across the floor rather than a disc being scaled up.
  float edge = d + grain * 0.07 * mix(0.35, 1.0, uStain);
  float interior = (1.0 - smoothstep(uFill - 0.08, uFill + 0.015, edge)) * uAlpha;
  interior *= mix(1.0, mottle, uStain);

  float base = (1.0 - d) * 0.10 * max(uPulse, uAlpha);
  float a = rim + interior + base;
  if (a <= 0.004) discard;
  vec3 col = (uRim * rim + uColor * (interior + base)) / a;
  gl_FragColor = vec4(col, min(a, 1.0));
}`,hm=class{scene;decals=[];free=[];zoneById=new Map;frame=0;lastNow=0;constructor(e){this.scene=e;let t=new Wt(2,2);for(let n=0;n<fm;n++){let r={uColor:{value:new G(16755268)},uRim:{value:new G(dm)},uFill:{value:0},uPulse:{value:0},uAlpha:{value:0},uTime:vp,uSeed:{value:n*13.77},uStain:{value:0}},i=new U({uniforms:r,vertexShader:pm,fragmentShader:mm,transparent:!0,depthWrite:!1,blending:1,side:2}),a=new L(t,i);a.rotation.x=-Math.PI/2,a.renderOrder=4,a.visible=!1,e.add(a),this.decals.push({mesh:a,uni:r,zoneId:null,residueBorn:0,residueLife:0,seenFrame:0}),this.free.push(7-n)}}sync(e,t,n){this.frame++,this.lastNow=n;for(let r of e){let e=this.zoneById.get(r.id);if(e===void 0){if(e=this.acquire(),e===-1)continue;this.zoneById.set(r.id,e)}let i=this.decals[e];i&&(i.zoneId=r.id,i.residueLife=0,i.seenFrame=this.frame,this.place(i,r.x,r.y,r.radius),this.styleZone(i,r,t,n))}for(let[e,t]of this.zoneById){let n=this.decals[t];if(!n){this.zoneById.delete(e);continue}n.seenFrame!==this.frame&&(this.zoneById.delete(e),this.release(t))}}mark(e,t,n,r,i,a){let o=this.zoneById.get(e);if(o===void 0){if(o=this.acquire(),o===-1)return;this.zoneById.set(e,o)}let s=this.decals[o];s&&(s.zoneId=e,s.residueLife=0,s.seenFrame=this.frame,this.place(s,t,n,r),s.uni.uColor.value.setHex(i),s.uni.uRim.value.setHex(i),s.uni.uStain.value=0,s.uni.uFill.value=Math.min(1,Math.max(0,a)),s.uni.uAlpha.value=.24,s.uni.uPulse.value=a>.8?.5+.5*(.5+.5*Math.sin(this.lastNow*.0377)):.8)}spawnResidue(e,t,n,r,i){let a=this.acquire();if(a===-1)return;let o=this.decals[a];o&&(o.zoneId=null,o.residueBorn=this.lastNow,o.residueLife=i*1e3,this.place(o,e,t,n),o.uni.uColor.value.setHex(r),o.uni.uFill.value=0,o.uni.uPulse.value=0,o.uni.uAlpha.value=.3,o.uni.uStain.value=1,o.uni.uSeed.value=Math.random()*50)}update(e){this.lastNow=e;for(let t=0;t<this.decals.length;t++){let n=this.decals[t];if(!n||n.residueLife<=0)continue;let r=(e-n.residueBorn)/n.residueLife;if(r>=1){this.release(t);continue}n.uni.uFill.value=Math.min(1,r/.18),n.uni.uAlpha.value=.3*(1-r)}}dispose(){for(let e of this.decals){this.scene.remove(e.mesh);let t=e.mesh.material;if(Array.isArray(t))for(let e of t)e.dispose();else t.dispose()}let e=this.decals[0];e&&e.mesh.geometry.dispose(),this.decals.length=0,this.zoneById.clear(),this.free.length=0}place(e,t,n,r){e.mesh.position.set(t,W(t,n)+.12,n),e.mesh.scale.setScalar(Math.max(.01,r)),e.mesh.visible=!0}styleZone(e,t,n,r){let i=um(t.effect),a=t.team!==n;if(e.uni.uStain.value=0,e.uni.uColor.value.setHex(i),a?e.uni.uRim.value.setHex(dm):e.uni.uRim.value.setHex(i).multiplyScalar(.45),t.detonateAt!==void 0){let n=cm.get(t.effect)??1200,i=t.detonateAt-r;e.uni.uFill.value=Math.min(1,Math.max(0,1-i/n)),e.uni.uAlpha.value=.28,e.uni.uPulse.value=i<400?.55+.45*(.5+.5*Math.sin(r*.0377)):.8}else t.enemyDps||t.allyHps?(e.uni.uFill.value=1,e.uni.uAlpha.value=.26+.04*Math.sin(r*.004),e.uni.uPulse.value=.7):t.telegraph?(e.uni.uFill.value=0,e.uni.uAlpha.value=0,e.uni.uPulse.value=a?.12*(.7+.3*Math.sin(r*.003)):.4*(.65+.35*Math.sin(r*.00942))):(e.uni.uFill.value=1,e.uni.uAlpha.value=.26+.04*Math.sin(r*.004),e.uni.uPulse.value=.7)}acquire(){let e=this.free.pop();return e===void 0?-1:e}release(e){let t=this.decals[e];t&&(t.mesh.visible=!1,t.zoneId=null,t.residueLife=0,this.free.push(e))}},gm=e=>e.value,_m=e=>e.value,vm=new Map(Object.entries({knight:{primary:9425151,secondary:15397631,accent:16765514},ranger:{primary:8257456,secondary:16770720,accent:2920286},mage:{primary:16744512,secondary:16765024,accent:10124287},rogue:{primary:16724064,secondary:6970010,accent:8388494},blackknight:{primary:16766826,secondary:16773824,accent:16770720},witch:{primary:8380554,secondary:12159712,accent:4880954}})),ym=16,bm=4,xm=8,Sm=4,Cm=10,wm=10,Tm={white:{tex:`slash-white`,off:[0,0],scale:[1,1],rot:0},arc:{tex:`slash-arc`,off:[0,.5],scale:[.52,.5],rot:0},spin:{tex:`slash-spin`,off:[0,0],scale:[1,1],rot:0},wind:{tex:`slash-wind`,off:[0,0],scale:[1,1],rot:0}},Em=6,Dm=7,Om={x:0,y:0,z:0,size:.5,life:.3};function km(e,t,n){return Om.x=e,Om.y=t,Om.z=n,Om.vx=0,Om.vy=0,Om.vz=0,Om.color=16777215,Om.cr=void 0,Om.cg=void 0,Om.cb=void 0,Om.size=.5,Om.life=.3,Om.gravity=0,Om.drag=0,Om.stretch=!1,Om.bright=1,Om.alpha=1,Om}var Am=class{scene;view;pools;telegraphs;chunks;spikes;bolts;rings=[];beams=[];cones=[];domes=[];slashes=[];flares=[];cracks=[];coneGeoCache=new Map;rimGeoCache=new Map;ringPlane=new Wt(2,2);zonePieces=new Map;vortexGeo=new Pt(1,.72,1,20,1,!0);cometGeo=rp({seed:4,detail:2,craters:6,cuts:8});rockMat=kp(vp);pendingWarm=null;texturesReady=!1;boltFrom=new F;boltTo=new F;delayed=[];clock=0;nowMs=0;numbers;audio=new Kf;zoneAnim=new Map;zoneSweepAt=0;feed=[];toasts=[];localId=``;localOwnerId=``;lastDeath=null;localHits=[];bestStreak=0;lx=0;ly=0;localTeam=``;localMelee=!0;hitsThisFrame=0;heavyThisFrame=!1;flashGain=1;constructor(e,t){this.scene=e,this.view=t,this.pools=new sm(e),this.telegraphs=new hm(e),this.chunks=new cp(e),this.spikes=new Rp(e),this.bolts=new Kp(e,vp);for(let t=0;t<ym;t++){let t=Cp(),n=new L(this.ringPlane,t);n.rotation.x=-Math.PI/2,n.visible=!1,e.add(n),this.rings.push({mesh:n,mat:t,life:0,maxLife:1,maxR:1,opacity:1})}let n=new Pt(.55,.9,Dm,16,12,!0);for(let t=0;t<bm;t++){let t=Mp(vp),r=new L(n,t);r.visible=!1,e.add(r),this.beams.push({mesh:r,mat:t,life:0,maxLife:1,h:Dm,r:1})}for(let t=0;t<xm;t++){let t=new R({color:16777215,transparent:!0,blending:1,side:2,depthWrite:!1}),n=new ht,r=new L(this.coneGeo(.61),t);n.add(r),n.visible=!1,e.add(n),this.cones.push({pivot:n,mesh:r,mat:t,life:0,maxLife:1,opacity:1,grow:1,s0:1})}for(let t=0;t<Cm;t++){let t=wp(),n=new L(this.ringPlane,t),r=new ht;r.add(n),r.visible=!1,e.add(r),this.slashes.push({pivot:r,mesh:n,mat:t,life:0,maxLife:1})}af(),this.warmRig(e);for(let t=0;t<wm;t++){let t=new Jt({map:tf(`flare-star`),transparent:!0,blending:2,depthWrite:!1}),n=new Fe(t);n.visible=!1,e.add(n),this.flares.push({sprite:n,mat:t,life:0,maxLife:1,s0:1,grow:1})}for(let t=0;t<Em;t++){let t=Tp(),n=new L(this.ringPlane,t);n.rotation.x=-Math.PI/2,n.visible=!1,e.add(n),this.cracks.push({mesh:n,mat:t,life:0,maxLife:1})}let r=new it(1,14,7,0,Math.PI*2,0,Math.PI/2);for(let t=0;t<Sm;t++){let t=new R({color:16777215,transparent:!0,blending:1,wireframe:!0,depthWrite:!1}),n=new L(r,t);n.visible=!1,e.add(n),this.domes.push({mesh:n,mat:t,life:0,maxLife:1,opacity:1,r:1})}this.numbers=new hp(t)}warm(e,t){this.pendingWarm={renderer:e,camera:t},nf().then(()=>{rf(e),this.texturesReady=!0})}flushWarm(){let e=this.pendingWarm;!e||!this.texturesReady||(this.pendingWarm=null,e.renderer.compileAsync(this.scene,e.camera).catch(()=>{}))}warmRig(e){let t=t=>{t.visible=!1,t.frustumCulled=!1,t.position.set(0,-1e3,0),e.add(t)};t(new L(this.cometGeo,this.rockMat));for(let e of[2,1])t(new L(this.texQuad,new R({map:tf(`glow-soft`),transparent:!0,blending:e,depthWrite:!1,side:2})))}setFlashGain(e){this.flashGain=e,this.pools.setAddGain(e)}update(e,t){this.flushWarm(),this.nowMs=e.now;let n=e.units.get(this.localId);n&&(this.lx=n.x,this.ly=n.y,this.localTeam=n.team,this.localMelee=n.attackType===`melee`,this.localOwnerId||=n.ownerId,n.killStreak>this.bestStreak&&(this.bestStreak=n.killStreak),this.audio.setListener(n.x,n.y,n.aimX,n.aimY)),this.hitsThisFrame=0,this.heavyThisFrame=!1;for(let t of e.fx)this.handle(t);if(e.fx.length=0,this.hitsThisFrame>0){let e=this.hitsThisFrame>=3?85:this.hitsThisFrame===2?65:this.localMelee?40:25;this.heavyThisFrame&&(e=Math.min(110,e+30)),this.bumpFreeze(e)}this.clock+=t;for(let e=this.delayed.length-1;e>=0;e--){let t=this.delayed[e];if(this.clock>=t.at){let n=this.delayed[this.delayed.length-1];this.delayed[e]=n,this.delayed.pop(),t.run()}}let r=t*this.scaleNow();this.numbers.update(r),yp(r),this.pools.update(r),this.chunks.update(r),this.spikes.update(r),this.bolts.update(r),this.stepRings(r),this.stepBeams(r),this.stepCones(r),this.stepDomes(r),this.stepSlashes(r),this.stepCracks(r),this.stepFlares(r),this.stepTexActors(r),this.telegraphs.update(e.now);for(let[t,n]of this.zonePieces)e.now-n.seenAt>250&&(this.scene.remove(n.obj),n.ownMat?.dispose(),this.zonePieces.delete(t));if(this.clock>=this.zoneSweepAt){this.zoneSweepAt=this.clock+2;for(let[t,n]of this.zoneAnim)e.now-n.seenAt>1500&&this.zoneAnim.delete(t)}this.hardFreeze=Math.max(0,this.hardFreeze-t),this.slowMo=Math.max(0,this.slowMo-t)}hardFreeze=0;slowMo=0;bumpFreeze(e){this.hardFreeze=Math.max(this.hardFreeze,e/1e3)}scaleNow(){return this.hardFreeze>0?.05:this.slowMo>0?.35:1}att(e,t){return Math.min(1,Math.max(.2,1-Math.hypot(e-this.lx,t-this.ly)/38))}within(e,t,n){return(e-this.lx)**2+(t-this.ly)**2<=n*n}handle(e){switch(e.t){case`hit`:{let t=e.dtype===`magic`?12611839:e.dtype===`pure`?16777215:16765034,n=e.crit??!1,r=e.by!==``&&e.by===this.localId,i=e.to===this.localId;this.flash(e.x,1.1,e.y,16777215,n?1.2:.55,n?2.2:1.4),this.impactRing(e.x,e.y,t,n?2.1:1.2),n&&this.flare(`impact-burst`,e.x,1.15,e.y,16773840,2,.14,Math.random()*Math.PI),this.sparks(e.x,1.1,e.y,e.dx,e.dy,n?20:8,t),this.burst(e.x,1.1,e.y,n?7:4,t,5,.16),n&&(this.impactRing(e.x,e.y,16765514,2.8),this.audio.crit(e.x,e.y)),r?(this.view.addTrauma(.05),this.view.kick(e.dx,e.dy,n?.55:.34),n&&this.view.punchFov(1.8),this.hitsThisFrame++,n&&(this.heavyThisFrame=!0),this.localHits.push({crit:n})):i?(this.view.addTrauma(n?.22:.16),this.view.kick(e.dx,e.dy,.5)):this.view.addTrauma(.06*this.att(e.x,e.y)),this.audio.hit(e.x,e.y,e.dtype),this.hitNumber(e.x,e.y,e.amount,e.dx,e.dy,n,e.by);break}case`strike`:this.strikeFx(e.tag,e.x,e.y,e.dx,e.dy,e.r);break;case`fizzle`:{let t=e.kind===`fireball`?16742956:e.kind===`arrow`?16770720:e.kind===`hexbolt`?8380554:11563263;for(let n=0;n<4;n++){let n=km(e.x+(Math.random()-.5)*.4,1.1,e.y+(Math.random()-.5)*.4);n.vx=(Math.random()-.5)*1.5,n.vz=(Math.random()-.5)*1.5,n.vy=-.6-Math.random(),n.drag=2,n.life=.35+Math.random()*.2,n.size=.28,n.color=t,this.pools.spawn(`add`,n)}break}case`propBreak`:{let t=e.model.includes(`keg`)?6965802:e.model.includes(`barrel`)?8018484:9071168;this.chunks.burst(e.x,e.y,e.model.includes(`stacked`)?10:7,t,e.explosive?7:5),this.dust(e.x,e.y,4),this.sparks(e.x,.7,e.y,0,1,5,14205072),this.impactRing(e.x,e.y,12623968,1.4),this.view.addTrauma(.06*this.att(e.x,e.y)),this.audio.hit(e.x,e.y,`physical`);break}case`swing`:{if(e.melee)break;let t=e.dtype===`magic`?12611839:16770720,n=Math.cos(e.ang),r=Math.sin(e.ang);this.crossGlint(e.x+n*.4,1.15,e.y+r*.4,n,r,t,.7),this.flash(e.x,1.1,e.y,t,.7),this.sparks(e.x,1.1,e.y,n,r,7,t);break}case`explosion`:{if(e.kind===`bolt`){this.flash(e.x,1.1,e.y,13150463,.7,1.5),this.implode(e.x,e.y,11563263,e.radius*.7,5,.16),this.impactRing(e.x,e.y,11563263,e.radius*.8);break}let t=e.kind===`nova`?8377599:e.kind===`meteor`?16734764:e.kind===`trap`?10158016:e.kind===`vines`?4880954:e.kind===`smite`?16766826:e.kind===`hexring`?8380554:e.kind===`keg`?16756816:16752688,n=e.kind===`meteor`;switch(this.flash(e.x,.9,e.y,16777215,n?2.4:1.5,2.4),this.burst(e.x,.8,e.y,n?26:16,t,n?9:7,.5),this.shockwave(e.x,e.y,t,e.radius),e.kind){case`nova`:{this.spikes.erupt(e.x,e.y,e.radius*.7,11,12577023,{h:1.5,w:.62,holdMs:1050,exitMs:180,tiltOut:.3}),this.fountain(e.x,e.y,10,10479871),this.telegraphs.spawnResidue(e.x,e.y,e.radius*.85,8377599,1.6);let t=e.x,n=e.y;this.delay(1.2,()=>this.chunks.burst(t,n,9,10475775,6));break}case`hexring`:{this.implode(e.x,e.y,12159712,e.radius,10,.24),this.shockwave(e.x,e.y,8380554,e.radius,.5,.7),this.spikes.scatter(e.x,e.y,e.radius*.75,6,12159712,{h:.5,w:.75,holdMs:1300,exitMs:300,tiltOut:.05});let t=e.x,n=e.y,r=e.radius;this.delay(.25,()=>{this.spikes.scatter(t,n,r*.7,5,8380554,{h:.42,w:.6,holdMs:1100,exitMs:300,tiltOut:.05}),this.bubbles(t,n,8,10481576,r*.7)});break}case`vines`:this.spikes.erupt(e.x,e.y,e.radius*.8,9,3828266,{h:1.6,w:.46,holdMs:1e3,exitMs:350,tiltOut:-.45}),this.spikes.scatter(e.x,e.y,e.radius*.5,4,5933626,{h:1,w:.28,holdMs:900,exitMs:300}),this.fountain(e.x,e.y,12,8380554),this.telegraphs.spawnResidue(e.x,e.y,e.radius*.8,2109464,1.6);break;case`trap`:this.spikes.ring(e.x,e.y,e.radius*.85,8,2906672,{h:1.3,w:.3,holdMs:850,exitMs:250,tiltOut:-.5});break;case`smite`:this.strikeDown(e.x,e.y,12,16770720,16751150,{life:.42,scale:1.5}),this.texDecal(`ground-crack`,e.x,e.y,{size:4.4,life:1.8,additive:!1}),this.texSprite(`electric-splat`,e.x,.8,e.y,{size:3.2,color:16773824,life:.3,grow:1.7}),this.sparks(e.x,.4,e.y,0,1,10,16773824),this.crossGlint(e.x,3,e.y,0,1,16770720,1.1);break;case`meteor`:{this.beam(e.x,e.y,16744512,9,1.2),this.debris(e.x,e.y,6,8405040),this.chunks.burst(e.x,e.y,8,5909016,8),this.smoke(e.x,e.y,8),this.texDecal(`shock-burst`,e.x,e.y,{size:3,grow:4.5,life:.5,color:16756832}),this.texDecal(`scorch-decal`,e.x,e.y,{size:e.radius*1.7,life:2.2,color:16744512});for(let t=0;t<4;t++)this.texFlipbook(`fire-sprite`,4,4,e.x+(Math.random()-.5)*e.radius,.8+Math.random(),e.y+(Math.random()-.5)*e.radius,{size:1.6+Math.random(),life:.55,rise:1.4});this.telegraphs.spawnResidue(e.x,e.y,e.radius*.8,1707786,4);let t=e.x,n=e.y,r=e.radius;for(let e of[.35,.75,1.2])this.delay(e,()=>{let e=Math.random()*Math.PI*2,i=Math.random()*r*.6;this.burst(t+Math.cos(e)*i,.4,n+Math.sin(e)*i,5,16744512,4,.4),this.smoke(t+Math.cos(e)*i,n+Math.sin(e)*i,2)});break}case`fireball`:this.spikes.ring(e.x,e.y,e.radius*.45,5,16742956,{h:.8,w:.3,holdMs:260,exitMs:200}),this.texDecal(`scorch-decal`,e.x,e.y,{size:3.4,life:1.5,color:16740400}),this.texFlipbook(`fire-sprite`,4,4,e.x,1,e.y,{size:2.6,life:.55,rise:1}),this.smoke(e.x,e.y,4);break;case`keg`:this.burst(e.x,.8,e.y,8,16744512,7,.4),this.smoke(e.x,e.y,6),this.telegraphs.spawnResidue(e.x,e.y,e.radius*.7,1707786,3),this.within(e.x,e.y,12)&&this.bumpFreeze(40);break;case`hexbolt`:this.bubbles(e.x,e.y,8,10481576,e.radius*.7),this.texSprite(`swirl-lines`,e.x,1.2,e.y,{size:2.4,color:10481576,life:.4,grow:1.6,spin:Math.PI*2});break;default:this.smoke(e.x,e.y,5)}this.view.addTrauma((n?.5:.22)*this.att(e.x,e.y)),n&&this.within(e.x,e.y,14)&&this.bumpFreeze(70),this.audio.explosion();break}case`death`:this.flash(e.x,1,e.y,16777215,1.2,2),this.burst(e.x,1,e.y,16,10068149,6,.6),this.smoke(e.x,e.y,4),e.by!==``&&e.by===this.localOwnerId?(this.hardFreeze=Math.max(this.hardFreeze,.1),this.slowMo=Math.max(this.slowMo,.25),this.view.addTrauma(.45),this.view.punchFov(4),this.shockwave(e.x,e.y,16765514,3.5),this.flash(e.x,1.2,e.y,16777215,1.8,2.6),this.audio.killConfirm()):e.team===this.localTeam&&this.localTeam!==``?(this.slowMo=Math.max(this.slowMo,.35),this.view.addTrauma(.4)):(this.view.addTrauma(.3*this.att(e.x,e.y)),this.within(e.x,e.y,12)&&this.bumpFreeze(50)),this.audio.death();break;case`cast`:this.signatureCast(`${e.champId}:${e.key}`,e.x,e.y,e.dx,e.dy),this.audio.cast(e.champId,e.key,e.x,e.y),e.key===`R`&&this.within(e.x,e.y,1.5)&&this.view.punchFov(2.2);break;case`levelup`:this.implode(e.x,e.y,16765514,2,10,.25),this.delay(.18,()=>{this.fountain(e.x,e.y,16,16765514),this.shockwave(e.x,e.y,16765514,3),this.beam(e.x,e.y,16765514)}),this.audio.levelup();break;case`heal`:this.fountain(e.x,e.y,10,7077774),this.numbers.spawn(`+${Math.round(e.amount)}`,e.x,e.y,`heal`,this.nowMs);break;case`blink`:this.implode(e.x,e.y,10124287,1.6,8,.22),this.ghost(e.x,e.y,10124287),this.burst(e.tx,1,e.ty,10,10124287,5,.35),this.impactRing(e.tx,e.ty,11571455,2.2),this.crossGlint(e.tx,1.3,e.ty,0,1,12624127,1.1);break;case`itemUse`:this.itemUseFx(e.x,e.y,e.item);break;case`perfectDodge`:this.impactRing(e.x,e.y,6750176,2.2),this.flash(e.x,1.1,e.y,10485736,1,1.8),e.unit===this.localId&&(this.slowMo=Math.max(this.slowMo,.2),this.numbers.spawn(`PERFECT`,e.x,e.y,`banner`,this.nowMs));break;case`delivery`:this.fountain(e.x,e.y,14,6750156),this.castDome(e.x,e.y,6750156,1.6),this.audio.delivery();break;case`coinThrow`:this.implode(e.x,e.y,16765514,1.4,10,.2),this.delay(.12,()=>{this.flash(e.x,3,e.y,16765514,1.1),this.burst(e.x,3,e.y,8,16765514,5,.35);let t=e.tx-e.x,n=e.ty-e.y;this.castStreak(e.x,e.y,t,n,16765514,8,8,.3)});break;case`coinGrab`:this.fountain(e.x,e.y,14,16765514),this.numbers.spawn(`+${e.gold}`,e.x,e.y,`gold`,this.nowMs),this.view.addTrauma(.12),this.audio.coin();break;case`kill`:if(this.feed.push({killerName:e.killerName,victimName:e.victimName,leader:e.leader,killer:e.killer,victim:e.victim}),e.victim===this.localOwnerId&&(this.lastDeath={killerName:e.killerName,at:this.nowMs}),e.killer!==``&&e.killer===this.localOwnerId){let e=this.bestStreak;e>=3&&this.audio.stinger(e>=9?3:e>=7?2:+(e>=5))}e.leader&&this.audio.leaderSlain();break;case`notify`:e.kind===`matchend`?(this.slowMo=Math.max(this.slowMo,1.2),this.audio.victory()):(this.toasts.push({text:e.text,kind:e.kind}),e.kind===`delivery`?this.audio.delivery():(e.kind===`leader`||e.kind===`streak`)&&this.audio.alert())}}itemUseFx(e,t,n){switch(n){case`swiftboots`:this.burst(e,.6,t,8,6750190,6,.3),this.footDust(e,t,1,0),this.footDust(e,t,-1,0);break;case`talisman`:this.castDome(e,t,16777215,1.6,.3),this.sparks(e,.6,t,0,1,8,16777215),this.fountain(e,t,6,16773840);break;case`bulwark`:this.flash(e,1.2,t,16765514,1,1.6);break;default:this.flash(e,1.1,t,10473727,.8)}}signatureCast(e,t,n,r,i){switch(e){case`knight:Q`:this.implode(t,n,15397631,1.8,7,.2),this.dust(t,n,3);break;case`knight:W`:this.implode(t,n,9425151,1.6,6,.2),this.footDust(t,n,-r,-i);break;case`knight:E`:this.implode(t,n,15397631,2.2,10,.26),this.texShell(`hex-shield`,t,1.25,n,{r:2,color:6267135,life:1.6,repeat:[4,2],scrollY:.02}),this.shockwave(t,n,15397631,2,.4,.8),this.dust(t,n,4),this.sparks(t,.4,n,0,1,4,16773824);break;case`knight:R`:this.implode(t,n,12574975,3,12,.26),this.shockwave(t,n,15397631,4),this.shockwave(t,n,12574975,5.5,.5),this.burst(t,1.2,n,16,12574975,8,.4),this.view.addTrauma(.14);break;case`ranger:Q`:this.implode(t,n,16770720,1.2,6,.18),this.crossGlint(t+r*.6,1.3,n+i*.6,r,i,16770720,.7),this.sectorRim(t,n,r,i,16770720,5,.2);break;case`ranger:W`:this.implode(t,n,16770720,2,10,.26),this.texShell(`electro-ball`,t,2.3,n,{r:.9,color:16770720,life:1.4,repeat:[2,1],scrollY:.06}),this.fountain(t,n,12,16770720);break;case`ranger:E`:this.flash(t+r,.5,n+i,10158016,.7),this.sparks(t+r,.9,n+i,0,-1,6,10158016);break;case`ranger:R`:this.beam(t,n,16770720),this.implode(t,n,16770720,3,10,.28),this.flash(t,4.5,n,16770720,2,1.6),this.crossGlint(t,8,n,r,i,16773824,1.6),this.crossGlint(t,9.2,n,-i,r,16770720,1.2);break;case`mage:Q`:this.implode(t,n,16752688,1.4,7,.2),this.mote(t+r*.5,1.3,n+i*.5,16765024,.6,.25,.5);break;case`mage:W`:this.castDome(t,n,8377599,1.8,.34),this.iceShards(t,n,6);break;case`mage:E`:this.castStreak(t,n,r,i,16744512,12,8,.3),this.flash(t+r*.6,1.3,n+i*.6,16756832,1,1.7),this.sparks(t+r*.6,1.2,n+i*.6,r,i,6,16744512);break;case`mage:R`:this.beam(t,n,16734764),this.flash(t,4,n,16744512,2,2.2),this.castStreak(t,n,0,1,16734764,3,8,1.2);break;case`rogue:Q`:this.castStreak(t,n,r,i,8388494,14,12,.2),this.smoke(t,n,2);break;case`rogue:W`:this.implode(t,n,16724064,1.4,6,.16),this.smoke(t,n,2);break;case`rogue:E`:this.smoke(t,n,10),this.castDome(t,n,6970010,2.4,.5),this.telegraphs.spawnResidue(t,n,2.4,2103344,2);break;case`rogue:R`:this.castStreak(t,n,r,i,16724064,22,14,.14),this.texSprite(`galaxy`,t,1.8,n,{size:2.8,color:12626175,life:.45,spin:Math.PI*2}),this.texSprite(`dark-shock`,t,1.8,n,{size:3.4,color:9068496,life:.45,grow:1.5}),this.smoke(t,n,3);break;case`blackknight:Q`:this.implode(t,n,16773824,1.8,7,.2),this.smoke(t,n,2);break;case`blackknight:W`:this.castDome(t,n,16766826,1.6,.3),this.flash(t,1.2,n,16773824,1.1,1.8),this.sparks(t,.4,n,0,1,8,16773824),this.crossGlint(t+r,1.4,n+i,r,i,16770720,1);break;case`blackknight:E`:this.castDome(t,n,16770720,2.4,.5),this.sparks(t,.4,n,0,1,8,16773824);break;case`blackknight:R`:this.implode(t,n,16773824,4,12,.24),this.beam(t,n,16766826,6,.8),this.texSprite(`holy-wings`,t,2.4,n,{size:6.5,color:16770720,life:1.1,grow:1.25}),this.texStreak(`trail-holy`,t+1.4,.2,n,t+1.4,5,n,{w:.9,len:2.4,color:16766826,life:.8}),this.texStreak(`trail-holy`,t-1.2,.2,n+.8,t-1.2,5,n+.8,{w:.9,len:2.4,color:16766826,life:.8});break;case`witch:Q`:this.implode(t,n,8380554,1.2,6,.18),this.crossGlint(t+r*.6,1.3,n+i*.6,r,i,8380554,.8);break;case`witch:W`:this.castDome(t,n,8380554,1.8,.35),this.bubbles(t,n,6,8380554);break;case`witch:E`:this.castDome(t,n,4880954,1.4,.3),this.crossGlint(t+r,1.2,n+i,r,i,10481576,.9);break;case`witch:R`:this.implode(t,n,12159712,3,12,.26),this.castDome(t,n,8380554,2.4,.45),this.bubbles(t,n,8,10481576);break;case`knight:DASH`:this.castStreak(t,n,r,i,9425151,18,10,.14),this.flash(t+r,1.15,n+i,15397631,.9,1.6),this.footDust(t,n,-r,-i),this.castDome(t,n,15397631,1,.24),this.crossGlint(t,1.2,n,r,i,15397631,.8);break;case`ranger:DASH`:this.castStreak(t,n,r,i,10485728,14,8,.1),this.smoke(t,n,3),this.footDust(t,n,-r,-i),this.footDust(t,n,-r,-i),this.castDome(t,n,8257456,1,.24),this.crossGlint(t,1.2,n,r,i,10485728,.7);break;case`mage:DASH`:this.implode(t,n,10124287,1.6,8,.22),this.crossGlint(t,1.3,n,r,i,12624127,1);break;case`rogue:DASH`:this.castStreak(t,n,r,i,6970010,16,10,.14),this.smoke(t,n,6),this.spawnResidue(t,n,1.6,2103344,2),this.footDust(t,n,-r,-i);break;case`blackknight:DASH`:this.castStreak(t,n,r,i,16766826,16,10,.16),this.flash(t+r,1.15,n+i,16773824,1,1.6),this.footDust(t,n,-r,-i),this.footDust(t,n,-r,-i),this.castDome(t,n,16770720,1,.24),this.crossGlint(t,1.2,n,r,i,16766826,.8);break;case`witch:DASH`:this.castStreak(t,n,r,i,12159712,20,12,.14),this.footDust(t,n,-r,-i),this.mote(t,.6,n,8380554,2,.6,.3),this.castDome(t,n,8380554,1,.24),this.crossGlint(t,1.2,n,r,i,12159712,.7);break;case`knight:JUMP`:this.implode(t,n,15397631,2.2,8,.2),this.dust(t,n,3);break;case`ranger:JUMP`:this.dust(t,n,4),this.impactRing(t,n,16770720,1.8);break;case`mage:JUMP`:this.dust(t,n,4),this.implode(t,n,16744512,2.4,8,.2);break;case`rogue:JUMP`:this.implode(t,n,6970010,1.8,8,.2),this.smoke(t,n,2);break;case`blackknight:JUMP`:this.implode(t,n,16773824,2.6,10,.22),this.dust(t,n,3);break;case`witch:JUMP`:this.implode(t,n,12159712,2.4,8,.2),this.bubbles(t,n,4,10481576);break;default:this.flash(t,1.3,n,10473727,.9),this.burst(t,1.2,n,6,10473727,3,.3)}}strikeFx(e,t,n,r,i,a){switch(e){case`spin`:this.shockwave(t,n,9425151,a,.3),this.slashArc(t,n,Math.atan2(i,r),a*1.2,12574975,{tex:`spin`,tilt:0,span:3.1,life:.34,height:1}),this.burst(t,1.1,n,12,12574975,7,.3),this.dust(t,n,5),this.within(t,n,12)&&this.view.addTrauma(.1);break;case`knight:Q`:this.slashArc(t,n,Math.atan2(i,r),a,14412031,{tilt:.3,span:.85,life:.3}),this.sectorRim(t,n,r,i,15397631,a,.79),this.sparks(t+r,1.2,n+i,r,i,12,15397631),this.crack(t+r*2,n+i*2,Math.atan2(i,r),2.2,1.5,9425151,1.8),this.chunks.burst(t+r*1.8,n+i*1.8,3,6975608,4),this.within(t,n,12)&&this.view.addTrauma(.08);break;case`knight:W`:{let e=Math.atan2(i,r),a=t,o=n;for(let t=0;t<3;t++){let n=1.6+t*2.3;this.delay(t*.06,()=>{this.crack(a+r*n,o+i*n,e,2.4,1.2,9425151,2.4),this.dust(a+r*n,o+i*n,3),this.sparks(a+r*n,.4,o+i*n,r,i,4,12574975)})}this.delay(.14,()=>{this.impactRing(a+r*6.4,o+i*6.4,15397631,2.4),this.chunks.burst(a+r*6.4,o+i*6.4,5,6975608,5)}),this.within(t,n,14)&&(this.view.kick(r,i,.4),this.view.addTrauma(.1));break}case`ranger:Q`:this.castStreak(t,n,r,i,16770720,20,12,.45),this.flash(t+r,1.3,n+i,16777215,.9,1.6);break;case`mage:Q`:this.castStreak(t,n,r,i,16752688,14,12,.22),this.flash(t+r,1.3,n+i,16765024,1.2,2);break;case`witch:Q`:this.castStreak(t,n,r,i,8380554,16,10,.12),this.flash(t+r,1.3,n+i,11599800,.9,1.6);break;case`rogue:Q`:this.slashArc(t,n,Math.atan2(i,r),2.2,8388494,{tilt:.45,span:.7,life:.24}),this.crossGlint(t,1.2,n,r,i,8388494,1.2),this.sparks(t,1.1,n,r,i,8,8388494),this.drips(t,n,6,4889146);break;case`rogue:W`:this.slashArc(t+r*2,n+i*2,Math.atan2(i,r),2.4,16734840,{tilt:.5,span:.6,life:.26}),this.crack(t+r*3,n+i*3,Math.atan2(i,r),3.4,.9,16724064,3.2,1),this.castStreak(t,n,r,i,16724064,20,12,.14),this.drips(t+r*3,n+i*3,5,9048096),this.smoke(t+r*2,n+i*2,3);break;case`rogue:R`:{let e=Math.atan2(i,r);this.slashArc(t,n,e,2.6,16734840,{tilt:.55,span:.6,life:.28}),this.slashArc(t,n,e,2.6,16724064,{tilt:-.55,span:.6,life:.28,dir:-1}),this.flash(t,1.2,n,16732272,1.3,2),this.crossGlint(t,1.2,n,r,i,16724064,1.6),this.impactRing(t,n,16724064,2.4),this.drips(t,n,8,9048096),this.within(t,n,10)&&(this.bumpFreeze(35),this.view.screenPulse(.08,.18));break}case`blackknight:Q`:{this.slashArc(t,n,Math.atan2(i,r),a,16766826,{tilt:.25,span:1,life:.32,tex:`arc`}),this.sectorRim(t,n,r,i,16773824,a,.96),this.sparks(t+r,1.2,n+i,r,i,10,16773824);let e=t+r*2.2,o=n+i*2.2;this.delay(.12,()=>this.sparks(e,2.4,o,0,-1,8,16770720));break}case`blackknight:R`:this.crack(t,n,Math.random()*Math.PI,4.6,4.6,16766826,3),this.shockwave(t,n,16766826,5.5),this.shockwave(t,n,16773824,4,.5),this.burst(t,1.2,n,20,16766826,9,.4),this.chunks.burst(t,n,10,8020536,7),this.smoke(t,n,6),this.within(t,n,14)&&(this.bumpFreeze(60),this.view.screenPulse(.14,.22)),this.view.addTrauma(.18);break;case`knight:JUMP`:this.shockwave(t,n,9425151,a),this.crack(t,n,Math.random()*Math.PI,a,a,9425151,2),this.sectorRim(t,n,r,i,15397631,a,.79),this.chunks.burst(t,n,4,6975608,5),this.dust(t,n,4),this.within(t,n,12)&&(this.view.addTrauma(.12),this.bumpFreeze(40));break;case`ranger:JUMP`:{this.flash(t,w,n,16770720,1,1.7),this.crossGlint(t,w,n,r,i,16773824,1.4);let e=Math.atan2(i,r);for(let r=0;r<9;r++){let i=e+r/9*Math.PI*2;this.sparks(t,w,n,Math.cos(i),Math.sin(i),3,16770720)}this.shockwave(t,n,8257456,a,.34,.9,w),this.within(t,n,12)&&this.view.addTrauma(.09);break}case`mage:JUMP`:this.flash(t,w,n,16765024,1.5,2.2),this.burst(t,w,n,14,16744512,7,.4),this.shockwave(t,n,16744512,a,.36,.9,w),this.shockwave(t,n,16765024,a*.55,.26,.95,w),this.within(t,n,12)&&(this.view.addTrauma(.11),this.bumpFreeze(40));break;case`rogue:JUMP`:{let e=Math.atan2(i,r);this.slashArc(t,n,e,1.9,16734840,{tilt:.5,span:.55,life:.24}),this.slashArc(t,n,e,1.9,16724064,{tilt:-.5,span:.55,life:.24,dir:-1}),this.impactRing(t,n,16724064,a),this.smoke(t,n,2),this.within(t,n,10)&&this.bumpFreeze(35);break}case`blackknight:JUMP`:this.shockwave(t,n,16766826,a),this.crack(t,n,Math.random()*Math.PI,a,a,16766826,2.4),this.beam(t,n,16766826,8,1.1),this.burst(t,1,n,14,16766826,8,.4),this.chunks.burst(t,n,6,8020536,6),this.smoke(t,n,4),this.within(t,n,12)&&(this.view.addTrauma(.12),this.bumpFreeze(60));break;case`witch:JUMP`:this.castDome(t,n,8380554,a*.85),this.impactRing(t,n,10481576,a),this.bubbles(t,n,8,10481576,a*.85),this.spikes.scatter(t,n,a*.6,3,8380554,{h:.4,w:.55,holdMs:900,exitMs:250,tiltOut:.05}),this.within(t,n,12)&&this.view.addTrauma(.11);break;default:this.impactRing(t,n,10473727,Math.max(1.2,a*.6))}}zoneAmbient(e,t){let n=this.zoneAnim.get(e.id);n||(n={next:0,next2:0,phase:Math.random()*6,seenAt:t,born:!0},this.zoneAnim.set(e.id,n)),n.seenAt=t;let r=e.radius,i=e.effect===`smite`?16766826:e.effect===`hexring`?12159712:e.effect===`trap`&&e.team===this.localTeam?10158016:0;if(i!==0){let n=e.effect===`hexring`?`rune-circle-a`:`rune-circle-b`,a=this.zonePiece(`rune:${e.id}`,()=>{let e=new R({map:tf(n),color:i,transparent:!0,opacity:.9,blending:2,depthWrite:!1,side:2}),t=new L(this.ringPlane,e);return t.rotation.x=-Math.PI/2,{obj:t,ownMat:e}});a.seenAt=t,a.obj.position.set(e.x,W(e.x,e.y)+.14,e.y),a.obj.scale.setScalar(r*1.15),a.obj.rotation.z=t*8e-4}switch(e.effect){case`whirlwind`:{let i=this.zonePiece(e.id,()=>{let e=Dp(12574975);return{obj:new L(this.vortexGeo,e),ownMat:e}});if(i.seenAt=t,i.obj.position.set(e.x,W(e.x,e.y)+1.3,e.y),i.obj.scale.set(r*.55,2.6,r*.55),i.obj.rotation.y=t*.004,t>=n.next2){n.next2=t+250,this.shockwave(e.x,e.y,9425151,r*.9,.24,.35);let i=Math.random()*Math.PI*2;this.footDust(e.x+Math.cos(i)*r*.8,e.y+Math.sin(i)*r*.8,-Math.sin(i),Math.cos(i))}if(t<n.next)return;n.next=t+120;for(let t=0;t<4;t++){n.phase+=2.4;let i=.4+n.phase*.19%1*(r-.4),a=e.x+Math.cos(n.phase)*i,o=e.y+Math.sin(n.phase)*i,s=km(a,.5+Math.random()*1.2,o);s.vx=-Math.sin(n.phase)*8,s.vz=Math.cos(n.phase)*8,s.vy=.6,s.drag=2.5,s.color=t%2?15397631:9425151,s.size=.32,s.life=.3,s.stretch=!0,this.pools.spawn(`add`,s)}break}case`rain`:if(t>=n.next){n.next=t+250;for(let t=0;t<6;t++){let t=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*r,i=km(e.x+Math.cos(t)*n,6,e.y+Math.sin(t)*n);i.vy=-18,i.color=16770720,i.size=.3,i.life=.35,i.stretch=!0,this.pools.spawn(`add`,i)}}if(t>=n.next2){n.next2=t+500;let i=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*r*.8;this.impactRing(e.x+Math.cos(i)*a,e.y+Math.sin(i)*a,16770720,.8)}break;case`meteor`:{let i=(e.detonateAt??t)-t;if(i>0&&i<650){let n=this.zonePiece(e.id,()=>{let e=new L(this.cometGeo,this.rockMat);return e.scale.setScalar(Math.min(1.4,r*.28)),e.castShadow=!0,this.rockMat.setHeading(-5,-17,2.5),{obj:e,ownMat:null}});n.seenAt=t;let a=i/650;n.obj.position.set(e.x+a*5,W(e.x,e.y)+a*17,e.y-a*2.5),n.obj.rotation.x+=.055,n.obj.rotation.z+=.031,this.rockMat.setCharge(1-a),this.trailAt(n.obj.position.x,n.obj.position.y,n.obj.position.z,16744512,.8),this.trailAt(n.obj.position.x,n.obj.position.y+.6,n.obj.position.z,8405040,.5)}if(i>0&&i<400&&t>=n.next2&&(n.next2=t+130,this.impactRing(e.x,e.y,16744512,r*.9)),t<n.next)return;n.next=t+150;for(let t=0;t<2;t++){let t=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*r*.8,i=km(e.x+Math.cos(t)*n,.2,e.y+Math.sin(t)*n);i.vy=2.4,i.color=16734764,i.size=.24,i.life=.5,this.pools.spawn(`add`,i)}break}case`brew`:if(n.born&&(n.born=!1,this.castDome(e.x,e.y,8380554,r*.6,.3),this.drips(e.x,e.y,10,5941344),this.bubbles(e.x,e.y,8,10481576,r*.6)),t>=n.next&&(n.next=t+250,this.bubbles(e.x,e.y,4,8380554,r)),t>=n.next2){n.next2=t+600;let i=km(e.x+(Math.random()-.5)*r,.5,e.y+(Math.random()-.5)*r);i.vy=1.2,i.cr=.16,i.cg=.24,i.cb=.15,i.size=1.2,i.life=1.1,i.gravity=1,i.drag=1.2,i.alpha=.8,this.pools.spawn(`normal`,i)}break;case`cinderfall`:if(t<n.next)return;n.next=t+140;for(let t=0;t<3;t++){let n=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*r,a=km(e.x+Math.cos(n)*i,.2,e.y+Math.sin(n)*i);a.vy=2+Math.random()*1.4,a.color=t%2?16744512:16756832,a.size=.28,a.life=.5,a.stretch=!0,this.pools.spawn(`add`,a)}for(let t=0;t<2;t++){let t=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*r,i=km(e.x+Math.cos(t)*n,3.6+Math.random()*1.2,e.y+Math.sin(t)*n);i.vy=-5-Math.random()*2,i.vx=(Math.random()-.5)*1.2,i.color=16756832,i.size=.24,i.life=.55,i.stretch=!0,this.pools.spawn(`add`,i)}break;case`trap`:break;default:if(!e.enemyDps||t<n.next)return;n.next=t+300;for(let t=0;t<2;t++){let t=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*r,i=km(e.x+Math.cos(t)*n,.3,e.y+Math.sin(t)*n);i.vy=1.5,i.color=um(e.effect),i.size=.22,i.life=.5,this.pools.spawn(`add`,i)}}}zonePiece(e,t){let n=this.zonePieces.get(e);if(!n){let r=t();n={obj:r.obj,ownMat:r.ownMat,seenAt:0},this.scene.add(n.obj),this.zonePieces.set(e,n)}return n}zoneEmber(e,t,n){let r=km(e+(Math.random()-.5)*.5,.9+Math.random()*.6,t+(Math.random()-.5)*.5);r.vy=1.6,r.color=n,r.size=.24,r.life=.4,this.pools.spawn(`add`,r)}spawnResidue(e,t,n,r,i){this.telegraphs.spawnResidue(e,t,n,r,i)}delay(e,t){this.delayed.push({at:this.clock+e,run:t})}respawnBurst(e,t,n,r){this.beam(e,t,n,10,1.1),this.implode(e,t,n,2.5,12,.3),this.delay(.15,()=>this.shockwave(e,t,n,2.5)),r&&this.view.addTrauma(.1)}landJuice(e,t){this.footDust(e,t,1,0),this.footDust(e,t,-.5,.87),this.footDust(e,t,-.5,-.87),this.audio.land()}attackSound(e,t,n){this.audio.attack(e,t,n)}burst(e,t,n,r,i,a,o){for(let s=0;s<r;s++){let r=Math.random()*Math.PI*2,s=Math.random()*.8+.2,c=a*(.5+Math.random()),l=km(e,t,n);l.vx=Math.cos(r)*c,l.vz=Math.sin(r)*c,l.vy=s*c*.6,l.gravity=-10,l.life=o*(.7+Math.random()*.6),l.size=.5+Math.random()*.7,l.stretch=!0,l.color=i,this.pools.spawn(`add`,l)}}sparks(e,t,n,r,i,a,o){let s=Math.atan2(i,r);for(let r=0;r<a;r++){let r=s+(Math.random()-.5)*1.1,i=4+Math.random()*6,a=km(e,t,n);a.vx=Math.cos(r)*i,a.vz=Math.sin(r)*i,a.vy=Math.random()*3+.5,a.gravity=-14,a.drag=3,a.life=.16+Math.random()*.14,a.size=.35+Math.random()*.4,a.stretch=!0,a.color=o,this.pools.spawn(`add`,a)}}smoke(e,t,n){for(let r=0;r<n;r++){let n=.18+Math.random()*.1,r=Math.random()*Math.PI*2,i=km(e+(Math.random()-.5),.6,t+(Math.random()-.5));i.vx=Math.cos(r)*1.2,i.vz=Math.sin(r)*1.2,i.vy=1.6+Math.random()*1.4,i.gravity=1,i.drag=1.2,i.life=.9+Math.random()*.7,i.size=1.1+Math.random()*.9,i.cr=n,i.cg=n,i.cb=n,this.pools.spawn(`normal`,i)}}footDust(e,t,n,r){let i=Math.hypot(n,r)||1;for(let a=0;a<2;a++){let a=.22+Math.random()*.08,o=km(e+(Math.random()-.5)*.4,.25,t+(Math.random()-.5)*.4);o.vx=n/i*1.1+(Math.random()-.5),o.vz=r/i*1.1+(Math.random()-.5),o.vy=.5+Math.random()*.6,o.gravity=-1.5,o.drag=2.5,o.life=.3+Math.random()*.2,o.size=.35+Math.random()*.25,o.cr=a,o.cg=a*.95,o.cb=a*.85,this.pools.spawn(`normal`,o)}}dust(e,t,n){for(let r=0;r<n;r++){let n=.24+Math.random()*.08,r=Math.random()*Math.PI*2,i=km(e+(Math.random()-.5)*.8,.3,t+(Math.random()-.5)*.8);i.vx=Math.cos(r)*1.6,i.vz=Math.sin(r)*1.6,i.vy=.8+Math.random()*.8,i.gravity=-2,i.drag=2.2,i.life=.35+Math.random()*.15,i.size=.4+Math.random()*.3,i.cr=n,i.cg=n*.95,i.cb=n*.85,this.pools.spawn(`normal`,i)}}trail(e,t,n){let r=km(e,1.1,t);r.life=.22,r.size=.45,r.color=n,this.pools.spawn(`add`,r)}trailAt(e,t,n,r,i=.4){let a=km(e,t,n);a.life=.25,a.size=i,a.color=r,this.pools.spawn(`add`,a)}mote(e,t,n,r,i,a,o){let s=km(e,t,n);s.vy=i,s.life=a,s.size=o,s.color=r,this.pools.spawn(`add`,s)}smokePuff(e,t,n){let r=.2+Math.random()*.08,i=km(e,t,n);i.vy=.6,i.gravity=.6,i.drag=1.5,i.life=.5+Math.random()*.3,i.size=.5,i.cr=r,i.cg=r,i.cb=r,i.alpha=.7,this.pools.spawn(`normal`,i)}flash(e,t,n,r,i,a=1){let o=km(e,t,n);o.life=.12,o.size=i,o.color=r,o.bright=a>1?qp:1,this.pools.spawn(`add`,o)}fountain(e,t,n,r){for(let i=0;i<n;i++){let n=Math.random()*Math.PI*2,i=km(e,.5,t);i.vx=Math.cos(n)*1.4,i.vz=Math.sin(n)*1.4,i.vy=4+Math.random()*3,i.gravity=-6,i.life=.7+Math.random()*.4,i.size=.5+Math.random()*.5,i.color=r,this.pools.spawn(`add`,i)}}castStreak(e,t,n,r,i,a,o,s=.25){let c=Math.atan2(r,n);for(let n=0;n<o;n++){let n=c+(Math.random()-.5)*s,r=a*(.7+Math.random()*.6),o=km(e+Math.cos(n)*.6,1.15,t+Math.sin(n)*.6);o.vx=Math.cos(n)*r,o.vz=Math.sin(n)*r,o.vy=(Math.random()-.3)*1.4,o.gravity=-3,o.drag=2.2,o.life=.22+Math.random()*.18,o.size=.5+Math.random()*.5,o.stretch=!0,o.color=i,this.pools.spawn(`add`,o)}}implode(e,t,n,r,i,a=.28){for(let o=0;o<i;o++){let i=Math.random()*Math.PI*2,o=km(e+Math.cos(i)*r,.6+Math.random()*1,t+Math.sin(i)*r),s=r/a;o.vx=-Math.cos(i)*s,o.vz=-Math.sin(i)*s,o.life=a*(.85+Math.random()*.3),o.size=.35+Math.random()*.3,o.stretch=!0,o.color=n,this.pools.spawn(`add`,o)}}flare(e,t,n,r,i,a=2,o=.18,s=0){let c=this.flares.find(e=>e.life<=0);c&&(c.life=c.maxLife=o,c.s0=a,c.grow=e===`impact-burst`?1.5:1.15,c.mat.map=tf(e),c.mat.color.setHex(i).multiplyScalar(this.flashGain),c.mat.rotation=s,c.mat.opacity=1,c.sprite.position.set(t,n,r),c.sprite.scale.setScalar(a*.6),c.sprite.visible=!0)}stepFlares(e){for(let t of this.flares){if(t.life<=0)continue;if(t.life-=e,t.life<=0){t.sprite.visible=!1;continue}let n=1-t.life/t.maxLife,r=.6+.4*Math.min(1,n/.3)+(t.grow-1)*n;t.sprite.scale.setScalar(t.s0*r),t.mat.opacity=1-n*n}}texActors=[];texQuad=new Wt(1,1);texSphere=new it(1,20,12);texActor(e,t,n,r){if(this.texActors.length>=40){for(let e of t)e.dispose();return}this.scene.add(e),this.texActors.push({obj:e,mats:t,life:n,maxLife:n,tick:r})}stepTexActors(e){for(let t=this.texActors.length-1;t>=0;t--){let n=this.texActors[t];if(n.life-=e,n.life<=0){this.scene.remove(n.obj);for(let e of n.mats)e.dispose();this.texActors.splice(t,1);continue}n.tick(1-n.life/n.maxLife)}}texDecal(e,t,n,r={}){let{size:i=3,color:a=16777215,life:o=1.2,spinRate:s=0,grow:c=1,additive:l=!0,fade:u=`out`,y:d=.07}=r,f=new R({map:tf(e),color:a,transparent:!0,blending:l?2:1,depthWrite:!1,side:2}),p=new L(this.texQuad,f);p.rotation.x=-Math.PI/2,p.rotation.z=Math.random()*Math.PI*2,p.position.set(t,W(t,n)+d,n),p.scale.setScalar(i),this.texActor(p,[f],o,e=>{p.rotation.z+=s*.016,p.scale.setScalar(i*(1+(c-1)*e)),f.opacity=u===`inout`?Math.sin(Math.min(1,e*1.05)*Math.PI):1-e*e})}strikeDown(e,t,n,r,i,a={}){let o=W(e,t);this.boltFrom.set(e+(Math.random()-.5)*1.2,o+n,t+(Math.random()-.5)*1.2),this.boltTo.set(e,o+.1,t),this.bolts.strike(this.boltFrom,this.boltTo,{...a,color:r,haloColor:i})}texFlipbook(e,t,n,r,i,a,o={}){let{size:s=2,color:c=16777215,life:l=.6,rise:u=0}=o,d=tf(e).clone();d.repeat.set(1/t,1/n);let f=new Jt({map:d,color:c,transparent:!0,blending:2,depthWrite:!1}),p=new Fe(f);p.position.set(r,i,a),p.scale.setScalar(s);let m=t*n;this.texActor(p,[f],l,e=>{let r=Math.min(m-1,Math.floor(e*m));d.offset.set(r%t/t,1-1/n-Math.floor(r/t)/n),p.position.y=i+u*e,f.opacity=Math.sin(Math.min(1,e*1.15)*Math.PI)})}texShell(e,t,n,r,i={}){let{r:a=1.9,color:o=16777215,life:s=1.6,repeat:c=[3,2],scrollY:l=0}=i,u=tf(e,{wrap:!0}).clone();u.repeat.set(c[0],c[1]);let d=new R({map:u,color:o,transparent:!0,blending:2,depthWrite:!1,side:2}),f=new L(this.texSphere,d);f.position.set(t,n,r),f.scale.setScalar(a),this.texActor(f,[d],s,e=>{u.offset.y+=l*.016,u.offset.x+=.002,f.scale.setScalar(a*(1+.04*Math.sin(e*Math.PI*6))),d.opacity=Math.sin(Math.min(1,e*1.02)*Math.PI)*.8})}texSprite(e,t,n,r,i={}){let{size:a=3,color:o=16777215,life:s=.8,grow:c=1.15,spin:l=0}=i,u=new Jt({map:tf(e),color:o,transparent:!0,blending:2,depthWrite:!1,rotation:Math.random()*l}),d=new Fe(u);d.position.set(t,n,r),d.scale.setScalar(a),this.texActor(d,[u],s,e=>{d.scale.setScalar(a*(1+(c-1)*e)),u.opacity=Math.sin(Math.min(1,e*1.05)*Math.PI)})}texStreak(e,t,n,r,i,a,o,s={}){let{w:c=1.2,len:l=5,color:u=16777215,life:d=.45}=s,f=new R({map:tf(e),color:u,transparent:!0,blending:2,depthWrite:!1,side:2}),p=new L(this.texQuad,f);p.scale.set(l,c,1);let m=new F(t,n,r),h=new F(i-t,a-n,o-r);p.quaternion.setFromUnitVectors(new F(1,0,0),h.clone().normalize()),this.texActor(p,[f],d,e=>{p.position.copy(m).addScaledVector(h,e),f.opacity=Math.sin(Math.min(1,e*1.1)*Math.PI)})}crossGlint(e,t,n,r,i,a,o=.9){this.flare(`flare-star`,e,t,n,a,o*2.4,.16,Math.random()*.6-.3);let s=Math.hypot(r,i)||1,c=-i/s,l=r/s;for(let r of[1,-1]){let i=km(e,t,n);i.vx=c*4*r,i.vz=l*4*r,i.drag=4,i.life=.1,i.size=o,i.stretch=!0,i.color=a,i.bright=1.6,this.pools.spawn(`add`,i)}}debris(e,t,n,r){let i=new G(r);for(let r=0;r<n;r++){let n=Math.random()*Math.PI*2,r=3+Math.random()*3,a=km(e,.7,t);a.vx=Math.cos(n)*r,a.vz=Math.sin(n)*r,a.vy=3+Math.random()*3,a.gravity=-22,a.life=.9+Math.random()*.4,a.size=.3+Math.random()*.2,a.cr=i.r,a.cg=i.g,a.cb=i.b,this.pools.spawn(`normal`,a)}}iceShards(e,t,n){for(let r=0;r<n;r++){let n=Math.random()*Math.PI*2,r=km(e+Math.cos(n)*.6,.5,t+Math.sin(n)*.6);r.vx=Math.cos(n)*2,r.vz=Math.sin(n)*2,r.vy=3,r.gravity=-4,r.life=.5+Math.random()*.2,r.size=.35,r.stretch=!0,r.color=10479871,this.pools.spawn(`add`,r)}}bubbles(e,t,n,r,i=1.2){for(let a=0;a<n;a++){let n=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*i,o=km(e+Math.cos(n)*a,.25,t+Math.sin(n)*a);o.vy=1.2+Math.random()*.9,o.life=.45+Math.random()*.3,o.size=.2+Math.random()*.15,o.color=r,this.pools.spawn(`add`,o)}}shockwave(e,t,n,r,i=.38,a=.85,o=0){let s=this.rings.find(e=>e.life<=0);if(!s)return;s.life=s.maxLife=i,s.maxR=r,s.opacity=a;let c=s.mat.uniforms;gm(c.uColor).setHex(n),c.uT.value=0,c.uAlpha.value=a*this.flashGain,c.uSeed.value=Math.random()*20,s.mesh.position.set(e,W(e,t)+.12+o,t),s.mesh.scale.setScalar(.2),s.mesh.visible=!0}impactRing(e,t,n,r){this.shockwave(e,t,n,r,.2,.95)}stepRings(e){for(let t of this.rings){if(t.life<=0)continue;if(t.life-=e,t.life<=0){t.mesh.visible=!1;continue}let n=1-t.life/t.maxLife,r=1-(1-n)**3;t.mesh.scale.setScalar(.2+r*t.maxR),t.mat.uniforms.uT.value=n}}beam(e,t,n,r=Dm,i=1){let a=this.beams.find(e=>e.life<=0);a&&(a.life=a.maxLife=.5,a.h=r,a.r=i,a.mat.setColor(16777215,n),a.mat.setOpacity(.8*this.flashGain),a.mat.reseed(),a.mesh.position.set(e,W(e,t)+r/Dm*3.2,t),a.mesh.scale.set(i,r/Dm,i),a.mesh.visible=!0)}stepBeams(e){for(let t of this.beams){if(t.life<=0)continue;if(t.life-=e,t.life<=0){t.mesh.visible=!1;continue}let n=t.life/t.maxLife,r=1+(1-n)*.6;t.mesh.scale.set(t.r*r,t.h/Dm*(1+(1-n)*.5),t.r*r),t.mat.setOpacity(.8*n*this.flashGain)}}coneGeo(e){let t=Math.round(e*100),n=this.coneGeoCache.get(t);return n||(n=new V(1,28,-e,e*2),this.coneGeoCache.set(t,n)),n}rimGeo(e){let t=Math.round(e*100),n=this.rimGeoCache.get(t);return n||(n=new Re(.955,1,24,1,-e,e*2),this.rimGeoCache.set(t,n)),n}acquireCone(){return this.cones.find(e=>e.life<=0)??null}castCone(e,t,n,r,i,a,o){let s=this.acquireCone();s&&(s.mesh.geometry=this.coneGeo(o),s.mat.blending=1,s.mat.color.setHex(i),s.life=s.maxLife=.26,s.opacity=.85,s.grow=a*1.12,s.s0=a*.5,s.pivot.position.set(e,W(e,t)+.14,t),s.pivot.rotation.set(0,Math.atan2(-r,n),0),s.pivot.rotateX(-Math.PI/2),s.pivot.scale.setScalar(s.s0),s.pivot.visible=!0)}sectorRim(e,t,n,r,i,a,o){let s=this.acquireCone();s&&(s.mesh.geometry=this.rimGeo(o),s.mat.blending=2,s.mat.color.setHex(i).multiplyScalar(1.6),s.life=s.maxLife=.22,s.opacity=.9,s.grow=a,s.s0=a,s.pivot.position.set(e,W(e,t)+.15,t),s.pivot.rotation.set(0,Math.atan2(-r,n),0),s.pivot.rotateX(-Math.PI/2),s.pivot.scale.setScalar(a),s.pivot.visible=!0)}stepCones(e){for(let t of this.cones){if(t.life<=0)continue;if(t.life-=e,t.life<=0){t.pivot.visible=!1;continue}let n=t.life/t.maxLife;t.pivot.scale.setScalar(t.s0+(t.grow-t.s0)*(1-n)),t.mat.opacity=t.opacity*n}}slashArc(e,t,n,r,i,a={}){let o=this.slashes.find(e=>e.life<=0);if(!o)return;let{tilt:s=.5,span:c=1.05,life:l=.26,height:u=1.15,dir:d=1,tex:f=`white`}=a,p=Tm[f];o.life=o.maxLife=l;let m=o.mat.uniforms;gm(m.uColor).setHex(i),m.uT.value=0,m.uSpan.value=c,m.uSeed.value=Math.random()*20,m.uDir.value=d,m.uMap.value=tf(p.tex,f===`wind`?{srgb:!0}:{}),_m(m.uUVOff).set(p.off[0],p.off[1]),_m(m.uUVScale).set(p.scale[0],p.scale[1]),m.uRot.value=p.rot,o.pivot.position.set(e,W(e,t)+u,t),o.pivot.rotation.set(0,-n,0),o.mesh.rotation.set(-Math.PI/2+s,0,0),o.pivot.scale.setScalar(r),o.pivot.visible=!0}stepSlashes(e){for(let t of this.slashes)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.pivot.visible=!1;continue}t.mat.uniforms.uT.value=1-t.life/t.maxLife}}crack(e,t,n,r,i,a,o=2.2,s=0){let c=this.cracks.find(e=>e.life<=0);c&&(c.life=c.maxLife=o,c.mat.arm(a,s),c.mesh.position.set(e,W(e,t)+.09,t),c.mesh.rotation.z=-n,c.mesh.scale.set(r,i,1),c.mesh.visible=!0)}stepCracks(e){for(let t of this.cracks){if(t.life<=0)continue;if(t.life-=e,t.life<=0){t.mesh.visible=!1;continue}let n=t.maxLife-t.life;t.mat.step(n/t.maxLife,Math.min(1.15,n/.13))}}ghostTint=new G;ghost(e,t,n){this.ghostTint.setHex(n).multiplyScalar(.4);for(let[n,r]of[[1.15,1.5],[.45,1]]){let i=km(e,n,t);i.life=.3,i.size=r,i.cr=this.ghostTint.r,i.cg=this.ghostTint.g,i.cb=this.ghostTint.b,this.pools.spawn(`add`,i)}}drips(e,t,n,r){let i=new G(r);for(let r=0;r<n;r++){let n=km(e+(Math.random()-.5)*.8,1+Math.random()*.4,t+(Math.random()-.5)*.8);n.vx=(Math.random()-.5)*1.2,n.vz=(Math.random()-.5)*1.2,n.vy=.5,n.gravity=-16,n.life=.45+Math.random()*.2,n.size=.2+Math.random()*.12,n.cr=i.r,n.cg=i.g,n.cb=i.b,n.alpha=.85,this.pools.spawn(`normal`,n)}}castDome(e,t,n,r,i=.4){let a=this.domes.find(e=>e.life<=0);a&&(a.life=a.maxLife=i,a.opacity=.8,a.r=r,a.mat.color.setHex(n),a.mat.opacity=.8,a.mesh.position.set(e,W(e,t)+.1,t),a.mesh.scale.setScalar(r),a.mesh.visible=!0),this.shockwave(e,t,n,r,i*.7,.7)}stepDomes(e){for(let t of this.domes){if(t.life<=0)continue;if(t.life-=e,t.life<=0){t.mesh.visible=!1;continue}let n=t.life/t.maxLife;t.mesh.scale.setScalar(t.r*(1+(1-n)*.08)),t.mat.opacity=t.opacity*n}}hitNumber(e,t,n,r,i,a,o){if(o!==``&&o===this.localId){this.numbers.bumpCombo(this.nowMs),this.numbers.spawn(`${n}`,e,t,a?`crit`:`mine`,this.nowMs,r,i);return}if((e-this.lx)**2+(t-this.ly)**2<1.44){this.numbers.spawn(`${n}`,e,t,`incoming`,this.nowMs,r,i);return}n<50||this.numbers.spawn(`${n}`,e,t,`bystander`,this.nowMs,r,i)}clearNumbers(){this.numbers.clear()}dispose(){this.numbers.dispose(),this.pools.dispose(),this.chunks.dispose(),this.telegraphs.dispose();for(let e of this.rings)this.scene.remove(e.mesh),e.mat.dispose();for(let e of this.beams)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mat.dispose();for(let e of this.cones)this.scene.remove(e.pivot),e.mat.dispose();for(let e of this.domes)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mat.dispose();for(let e of this.slashes)this.scene.remove(e.pivot),e.mat.dispose();for(let e of this.cracks)this.scene.remove(e.mesh),e.mat.dispose();this.spikes.dispose(),this.bolts.dispose();for(let[,e]of this.zonePieces)this.scene.remove(e.obj),e.ownMat?.dispose();this.zonePieces.clear();for(let e of this.coneGeoCache.values())e.dispose();for(let e of this.rimGeoCache.values())e.dispose();this.ringPlane.dispose(),this.vortexGeo.dispose(),this.cometGeo.dispose(),this.rockMat.dispose()}},jm=.08;function Mm(e){let t={value:0},n={value:new G(13621472)};for(let r of e)r.onBeforeCompile=e=>{e.uniforms.uDissolve=t,e.uniforms.uDissolveEdge=n,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vDslvWorld;`).replace(`#include <project_vertex>`,`vDslvWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
#include <project_vertex>`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uDissolve;
uniform vec3 uDissolveEdge;
varying vec3 vDslvWorld;`).replace(`#include <opaque_fragment>`,[`float dslvN = fract(sin(dot(vDslvWorld.xz * 7.13, vec2(12.9898, 78.233)) + vDslvWorld.y * 3.7) * 43758.5453);`,`if (dslvN < uDissolve) discard;`,`outgoingLight += uDissolveEdge * smoothstep(uDissolve + ${jm.toFixed(3)}, uDissolve, dslvN) * step(0.001, uDissolve);`,`#include <opaque_fragment>`].join(`
`))},r.customProgramCacheKey=()=>`ba-dissolve`,r.needsUpdate=!0;return{set(e){t.value=Math.min(1,Math.max(0,e))},setEdge(e){n.value.setHex(e)}}}function Nm(e){let t=document.createElement(`canvas`);t.width=t.height=96;let n=t.getContext(`2d`);if(!n)return new ft(t);if(n.strokeStyle=`#ffffff`,n.fillStyle=`#ffffff`,n.lineWidth=7,n.lineJoin=`round`,n.lineCap=`round`,e===`star`){n.beginPath();for(let e=0;e<10;e++){let t=-Math.PI/2+e*Math.PI/5,r=e%2==0?42:18,i=48+Math.cos(t)*r,a=48+Math.sin(t)*r;e===0?n.moveTo(i,a):n.lineTo(i,a)}n.closePath(),n.fill()}else e===`chain`?(n.beginPath(),n.ellipse(34,48,16,24,-.5,0,Math.PI*2),n.stroke(),n.beginPath(),n.ellipse(62,48,16,24,.5,0,Math.PI*2),n.stroke()):(n.beginPath(),n.moveTo(24,38),n.lineTo(40,38),n.lineTo(58,22),n.lineTo(58,74),n.lineTo(40,58),n.lineTo(24,58),n.closePath(),n.fill(),n.beginPath(),n.moveTo(20,76),n.lineTo(76,20),n.stroke());return new ft(t)}var Pm=null;function Fm(){return Pm||(Pm={star:new Jt({map:Nm(`star`),color:16765514,transparent:!0,depthWrite:!1}),mute:new Jt({map:Nm(`mute`),color:14411007,transparent:!0,depthWrite:!1}),chain:new Jt({map:Nm(`chain`),color:13154458,transparent:!0,depthWrite:!1})},Pm)}var Im=null,Lm=null,Rm=null,zm=null;function Bm(){return zm??=new Wt(2,2),zm}function Vm(){return Im??=new Re(.7,.9,28),Im}function Hm(){return Lm??=new it(1,12,6,0,Math.PI*2,0,Math.PI/2),Lm}function Um(){return Rm??=new Re(.98,1.1,32),Rm}var Wm=new G(8377599),Gm=.55,Km=1.1,Z={x:0,y:0,z:0,size:.3,life:.4},qm=new Map(Object.entries({stun:{color:16765514,n:14,speed:3.4,size:.3},root:{color:10146922,n:12,speed:2.6,size:.28},slow:{color:10479871,n:18,speed:3,size:.3},silence:{color:14411007,n:10,speed:2.6,size:.26},hex:{color:13663231,n:16,speed:3.2,size:.3},dot:{color:16742956,n:12,speed:2.6,size:.28},damageAmp:{color:10124287,n:12,speed:2.8,size:.28},taunt:{color:16734780,n:12,speed:2.8,size:.28}})),Jm=class{target;pools;overhead=null;overheadKind=``;rootRing=null;rootMat=null;dome=null;domeMat=null;domeRim=null;domeRimMat=null;rune=null;runeMat=null;runeAlpha=0;baseColors=[];accentColor;slowApplied=!1;stealthApplied=!1;shieldOn=!1;shieldShownAt=0;shieldEndAt=0;nextSlowEmit=0;nextDotEmit=0;nextHealEmit=0;nextHasteEmit=0;nextAmpEmit=0;nextEnrageEmit=0;fStun=!1;fSilence=!1;fRoot=!1;fSlow=!1;fHeal=!1;fShield=!1;fStealth=!1;fHaste=!1;fAmp=!1;fAtkSpd=!1;fArmor=!1;fHex=!1;fTaunt=!1;fDot=``;frost=null;frostMat=null;nextHexEmit=0;wasOn=new Set;constructor(e,t){this.target=e,this.pools=t;for(let t of e.bodyMats)this.baseColors.push(t.color.clone());this.accentColor=new G(e.accent)}update(e,t,n){if(!e.alive){this.setSlow(!1),this.setStealth(!1,n),this.setEmpower(!1),this.overhead&&(this.overhead.visible=!1),this.rootRing&&(this.rootRing.visible=!1),this.shieldOn=!1,this.shieldEndAt=0,this.dome&&(this.dome.visible=!1),this.domeRim&&(this.domeRim.visible=!1),this.rune&&(this.rune.visible=!1),this.frost&&(this.frost.visible=!1),this.frostMat&&(this.frostMat.opacity=0),this.runeAlpha=0,this.wasOn.clear();return}this.scan(e.statuses);let r=this.target.group.position.x,i=this.target.group.position.y,a=this.target.group.position.z;this.onsets(e.statuses,r,i,a);let o=this.fStun?`star`:this.fRoot?`chain`:this.fSilence?`mute`:``;if(o!==``){let e=this.ensureOverhead();if(o!==this.overheadKind){let t=Fm();e.material=o===`star`?t.star:o===`chain`?t.chain:t.mute,this.overheadKind=o}let t=n*.0022;e.position.set(Math.cos(t)*.45,2.3,Math.sin(t)*.45),e.visible=!0}else this.overhead&&(this.overhead.visible=!1);if(this.fRoot){let e=this.ensureRootRing();e.visible=!0,this.rootMat&&(this.rootMat.opacity=.5*(.85+.15*Math.sin(n*.00628)))}else this.rootRing&&(this.rootRing.visible=!1);if(this.setSlow(this.fSlow),this.tickFrost(this.fSlow,t,n),this.fSlow&&(this.addEmissive(.02,.05,.08),n>=this.nextSlowEmit)){this.nextSlowEmit=n+110;for(let e=0;e<2;e++)Z.x=r+(Math.random()-.5)*.7,Z.y=i+.15+Math.random()*1.2,Z.z=a+(Math.random()-.5)*.7,Z.vx=(Math.random()-.5)*.4,Z.vy=-.5-Math.random(),Z.vz=(Math.random()-.5)*.4,Z.color=10479871,Z.size=.24,Z.life=.55,Z.gravity=-1,Z.drag=0,Z.stretch=!0,Z.bright=1,this.pools.spawn(`add`,Z)}if(this.fHex&&n>=this.nextHexEmit&&(this.nextHexEmit=n+140,Z.x=r+(Math.random()-.5)*.7,Z.y=i+.2+Math.random()*.7,Z.z=a+(Math.random()-.5)*.7,Z.vx=(Math.random()-.5)*.5,Z.vy=1.1+Math.random()*.6,Z.vz=(Math.random()-.5)*.5,Z.color=13663231,Z.size=.26,Z.life=.6,Z.gravity=0,Z.drag=0,Z.stretch=!1,Z.bright=1,this.pools.spawn(`add`,Z)),this.fTaunt){let e=.5+.5*Math.sin(n*.012);this.addEmissive(.14*e,.02*e,.01*e)}if(this.fDot!==``&&n>=this.nextDotEmit){this.nextDotEmit=n+200;let e=this.fDot===`magic`?8388494:16742956;for(let t=0;t<2;t++)Z.x=r+(Math.random()-.5)*.5,Z.y=i+.9+Math.random()*.5,Z.z=a+(Math.random()-.5)*.5,Z.vx=(Math.random()-.5)*.6,Z.vy=1.4+Math.random(),Z.vz=(Math.random()-.5)*.6,Z.color=e,Z.size=.26,Z.life=.35+Math.random()*.2,Z.gravity=-1,Z.drag=0,Z.stretch=!1,Z.bright=1,this.pools.spawn(`add`,Z)}if(this.fHeal&&n>=this.nextHealEmit){this.nextHealEmit=n+300;for(let e=0;e<3;e++)Z.x=r+(Math.random()-.5)*.9,Z.y=i+.3+Math.random()*.6,Z.z=a+(Math.random()-.5)*.9,Z.vx=0,Z.vy=2,Z.vz=0,Z.color=7077774,Z.size=.24,Z.life=.5+Math.random()*.3,Z.gravity=0,Z.drag=0,Z.stretch=!1,Z.bright=1,this.pools.spawn(`add`,Z)}this.tickShield(n);let s=this.fArmor?16766826:this.fShield?10473727:this.fAtkSpd?16770720:0,c=s===0?0:.75;if(this.runeAlpha+=(c-this.runeAlpha)*Math.min(1,t*10),s!==0||this.runeAlpha>.02){let e=this.ensureRune();e.visible=this.runeAlpha>.02,this.runeMat&&(this.runeMat.uniforms.uAlpha.value=this.runeAlpha,s!==0&&this.runeMat.uniforms.uColor.value.setHex(s))}else this.rune&&(this.rune.visible=!1);if(this.fHaste&&n>=this.nextHasteEmit&&Math.hypot(e.vx,e.vy)>e.moveSpeed*.4){this.nextHasteEmit=n+150;for(let t=0;t<2;t++)Z.x=r+(Math.random()-.5)*.4,Z.y=i+.2,Z.z=a+(Math.random()-.5)*.4,Z.vx=-e.vx*.15+(Math.random()-.5),Z.vy=.5+Math.random()*.5,Z.vz=-e.vy*.15+(Math.random()-.5),Z.color=5888208,Z.size=.3,Z.life=.3+Math.random()*.15,Z.gravity=-1.5,Z.drag=2.5,Z.stretch=!1,Z.bright=1,Z.alpha=.55,this.pools.spawn(`normal`,Z);Z.alpha=1}if(this.fAmp&&(n>=this.nextAmpEmit&&(this.nextAmpEmit=n+300,Z.x=r+(Math.random()-.5)*.6,Z.y=i+.8+Math.random()*.8,Z.z=a+(Math.random()-.5)*.6,Z.vx=0,Z.vy=1.2,Z.vz=0,Z.color=10124287,Z.size=.26,Z.life=.7,Z.gravity=0,Z.drag=0,Z.stretch=!1,Z.bright=1,this.pools.spawn(`add`,Z)),this.addEmissive(.015,.01,.033)),this.fAtkSpd){if(n>=this.nextEnrageEmit){this.nextEnrageEmit=n+300;for(let e=0;e<2;e++)Z.x=r+(Math.random()-.5)*.6,Z.y=i+.6+Math.random()*.8,Z.z=a+(Math.random()-.5)*.6,Z.vx=(Math.random()-.5)*.5,Z.vy=1.2+Math.random()*.8,Z.vz=(Math.random()-.5)*.5,Z.color=16729122,Z.size=.24,Z.life=.4,Z.gravity=-1,Z.drag=0,Z.stretch=!1,Z.bright=1,this.pools.spawn(`add`,Z)}this.addEmissive(.15,.04,.02)}this.setStealth(this.fStealth,n),this.setEmpower(e.empowerNext>0)}dispose(){this.setSlow(!1),this.setStealth(!1,0),this.setEmpower(!1);let e=this.target.group;this.overhead&&e.remove(this.overhead),this.rootRing&&(e.remove(this.rootRing),this.rootMat?.dispose()),this.dome&&(e.remove(this.dome),this.domeMat?.dispose()),this.domeRim&&(e.remove(this.domeRim),this.domeRimMat?.dispose()),this.rune&&(e.remove(this.rune),this.runeMat?.dispose()),this.frost&&(e.remove(this.frost),this.frostMat?.dispose()),this.frost=null,this.frostMat=null,this.overhead=null,this.rootRing=null,this.dome=null,this.domeRim=null,this.rune=null}scan(e){this.fStun=this.fSilence=this.fRoot=this.fSlow=this.fHeal=!1,this.fShield=this.fStealth=this.fHaste=this.fAmp=this.fAtkSpd=!1,this.fArmor=this.fHex=this.fTaunt=!1,this.fDot=``;for(let t of e)switch(t.kind){case`hex`:this.fHex=!0;break;case`taunt`:this.fTaunt=!0;break;case`stun`:this.fStun=!0;break;case`silence`:this.fSilence=!0;break;case`root`:this.fRoot=!0;break;case`slow`:this.fSlow=!0;break;case`dot`:this.fDot=t.dtype;break;case`heal`:this.fHeal=!0;break;case`shield`:this.fShield=!0;break;case`stealth`:this.fStealth=!0;break;case`speed`:this.fHaste=!0;break;case`damageAmp`:this.fAmp=!0;break;case`attackSpeed`:this.fAtkSpd=!0;break;case`armor`:this.fArmor=!0}}ensureOverhead(){if(this.overhead)return this.overhead;let e=new Fe(Fm().star);return e.scale.setScalar(.55),e.renderOrder=12,this.target.group.add(e),this.overhead=e,this.overheadKind=`star`,e}ensureRootRing(){if(this.rootRing)return this.rootRing;this.rootMat=new R({color:6978106,transparent:!0,opacity:.5,side:2,depthWrite:!1});let e=new L(Vm(),this.rootMat);return e.rotation.x=-Math.PI/2,e.position.y=.12,this.target.group.add(e),this.rootRing=e,e}ensureRune(){if(this.rune)return this.rune;this.runeMat=Ep(16766826);let e=new L(Bm(),this.runeMat);return e.rotation.x=-Math.PI/2,e.position.y=.15,e.scale.setScalar(1.35),this.target.group.add(e),this.rune=e,e}ensureDome(){this.dome&&this.domeRim||(this.domeMat=new R({color:10473727,transparent:!0,opacity:.18,depthWrite:!1,side:2}),this.dome=new L(Hm(),this.domeMat),this.dome.position.y=.05,this.target.group.add(this.dome),this.domeRimMat=new R({color:10473727,transparent:!0,opacity:.5,blending:2,depthWrite:!1,side:2}),this.domeRim=new L(Um(),this.domeRimMat),this.domeRim.rotation.x=-Math.PI/2,this.domeRim.position.y=.12,this.target.group.add(this.domeRim))}tickShield(e){if(this.fShield&&!this.shieldOn?(this.shieldOn=!0,this.shieldShownAt=e,this.shieldEndAt=0,this.ensureDome()):!this.fShield&&this.shieldOn&&(this.shieldOn=!1,this.shieldEndAt=e),!(!this.dome||!this.domeRim||!this.domeMat||!this.domeRimMat)){if(this.shieldOn){let t=Km*(1.15-.15*Math.min(1,(e-this.shieldShownAt)/120));this.dome.scale.setScalar(t),this.domeRim.scale.setScalar(t/Km),this.domeMat.opacity=.18,this.domeRimMat.opacity=.5,this.dome.visible=!0,this.domeRim.visible=!0}else if(this.shieldEndAt>0){let t=(e-this.shieldEndAt)/150;t>=1?(this.shieldEndAt=0,this.dome.visible=!1,this.domeRim.visible=!1):(this.domeMat.opacity=.18*(1-t),this.domeRimMat.opacity=.5*(1-t))}}}onsets(e,t,n,r){for(let i of e){let e=qm.get(i.kind);if(!(!e||this.wasOn.has(i.kind)))for(let i=0;i<e.n;i++){let a=i/e.n*Math.PI*2+Math.random()*.4,o=Math.random()*.8+.2;Z.x=t,Z.y=n+1,Z.z=r,Z.vx=Math.cos(a)*e.speed,Z.vy=o*e.speed*.5,Z.vz=Math.sin(a)*e.speed,Z.color=e.color,Z.size=e.size,Z.life=.42,Z.gravity=-3,Z.drag=2.5,Z.stretch=!0,Z.bright=1,this.pools.spawn(`add`,Z)}}this.wasOn.clear();for(let t of e)qm.has(t.kind)&&this.wasOn.add(t.kind)}tickFrost(e,t,n){if(!e&&!this.frost)return;this.frost||(this.frostMat=new R({color:7325934,transparent:!0,opacity:0,depthWrite:!1,blending:2,side:2}),this.frost=new L(Hm(),this.frostMat),this.frost.scale.set(.8,1.45,.8),this.frost.position.y=.05,this.target.group.add(this.frost));let r=this.frostMat;if(!r)return;let i=e?.3+.06*Math.sin(n*.008):0;r.opacity+=(i-r.opacity)*Math.min(1,t*9),this.frost.visible=r.opacity>.02}setSlow(e){if(e===this.slowApplied)return;this.slowApplied=e;let t=this.target.bodyMats;for(let n=0;n<t.length;n++){let r=t[n],i=this.baseColors[n];!r||!i||(r.color.copy(i),e&&r.color.lerp(Wm,Gm))}}setStealth(e,t){if(e){let e=this.target.isLocal?.32+.08*Math.sin(t*.006):.18;for(let t of this.target.bodyMats)t.transparent=!0,t.opacity=e;this.stealthApplied=!0}else if(this.stealthApplied){this.stealthApplied=!1;for(let e of this.target.bodyMats)e.opacity=1,e.transparent=!1}}setEmpower(e){if(e)for(let e of this.target.weaponMats)e.emissive.copy(this.accentColor).multiplyScalar(.8)}addEmissive(e,t,n){for(let r of this.target.bodyMats)r.emissive.r+=e,r.emissive.g+=t,r.emissive.b+=n}},Ym=new Map([[`paladin_hammer`,{axis:`y`,base:.48,tip:1.15,opacity:.62}],[`sword_2handed`,{axis:`y`,base:.34,tip:1.05}]]),Xm=0,Zm=new Map([[`bow`,{ry:Math.PI}],[`paladin_hammer`,{ry:Math.PI/2}]]);function Qm(e,t){let n=Zm.get(t);n&&e.rotation.set(n.rx??0,n.ry??0,n.rz??0)}var $m=240,eh=2500,th=`Melee_2H_Attack_Spinning`;function nh(e,t=1){return Math.min(eh,Math.max($m,e/t*1e3))}var rh=340,ih=520,ah=300,oh=`Jump_Start`,sh=`Jump_Idle`,ch=`Jump_Land`,lh=340,uh=340,dh=new G(16765514),fh=new Map(Object.entries({skwarrior:{id:`skwarrior`,model:`Skeleton_Warrior`,attackType:`melee`,attackDamageType:`physical`},skmage:{id:`skmage`,model:`Skeleton_Mage`,attackType:`ranged`,attackDamageType:`magic`,weaponR:`Skeleton_Staff`},skminion:{id:`skminion`,model:`Skeleton_Minion`,attackType:`melee`,attackDamageType:`physical`},frostgolem:{id:`frostgolem`,model:`FrostGolem`,attackType:`melee`,attackDamageType:`physical`,weaponR:`FrostGolem_Axe_Large`,rig:`large`,scale:1.45}})),ph=[`sword_A`,`sword_D`,`axe_A`,`hammer_B`,`dagger_A`,`spear_A`,`staff_B`,`wand_B`],mh=.9;function hh(e){let t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return t}function gh(t,n){let r=hh(n),i=t.instance(ph[r%ph.length]),a=new e().setFromObject(i),o=new F;a.getSize(o);let s=mh/Math.max(.1,Math.max(o.x,o.y,o.z));i.scale.setScalar(s);let c=new F;a.getCenter(c),i.position.set(-c.x*s,-c.y*s,-c.z*s);let l=new ht;l.add(i),l.rotation.z=.55+r%3*.12,l.rotation.x=.25;let u=new ht;return u.add(l),u}var _h=null;function vh(){if(_h)return _h;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);if(!t)return _h=new an,_h;let n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(0,0,0,0.85)`),n.addColorStop(.6,`rgba(0,0,0,0.4)`),n.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),_h=new ft(e),_h}function yh(e,t){let n=Math.hypot(e.vx,e.vy);return n>e.moveSpeed*.55?`Running_B`:n>.4?`Walking_A`:t?`Melee_2H_Idle`:`Idle_B`}function bh(e){return e.attackType===`ranged`?e.attackDamageType===`magic`?`Ranged_Magic_Shoot`:`Ranged_Bow_Release`:e.twoHanded?`Melee_2H_Attack_Chop`:e.id===`rogue`?`Melee_1H_Attack_Slice_Diagonal`:`Melee_1H_Attack_Chop`}function xh(e){return e.attackDamageType===`magic`?`Ranged_Magic_Spellcasting`:bh(e)}var Sh=class{scene;lib;color;isLocal;isCreep;group=new ht;char;ring;ringMat;ringBase;def;baseScale;deadShown=!1;placed=!1;wasAlive=!0;yaw=0;groundY=0;lastAttackShown=-1;lastCastShown=-1;lastHitShown=-1;lastFlinchAt=-1;jumpPhase=``;oneShotUntil=0;deadAt=-1;lastDustAt=0;hitIdx=0;recoilX=0;recoilZ=0;weapons=[];mats=[];weaponMats=[];trails=[];blob;dissolve;statusFx=null;prevHop=0;squash=0;wasDashing=!1;lastDashTrailAt=0;lastDashDustAt=0;lastGhostAt=0;lastUltMoteAt=0;spawnClipPending=!1;mushroom=null;mushScale=1;hexShown=!1;constructor(e,t,n,r,i,a){this.scene=e,this.lib=t,this.color=r,this.isLocal=i,this.isCreep=a,this.def=n,this.baseScale=n.scale??1,this.char=new xo(t,n.model,n.rig===`large`?`Large/`:``),this.char.root.scale.setScalar(this.baseScale),this.group.add(this.char.root);let o=new G(i?Bt:r);if(this.mats=wh(this.char.root,o),n.weaponR){let e=t.instance(n.weaponR);Qm(e,n.weaponR);let r=n.id===`blackknight`?16761418:n.id===`knight`?6986495:n.id===`rogue`?16740496:10467552,i=n.attackType===`melee`?new gf(e,r,Ym.get(n.weaponR)):null;this.char.attach(e,`handslot.r`)?(this.weapons.push(e),this.weaponMats.push(...wh(e,null)),i&&(this.trails.push(i),this.scene.add(i.mesh))):i?.dispose()}if(n.weaponL){let e=t.instance(n.weaponL);Qm(e,n.weaponL);let r=n.attackType===`melee`&&n.weaponR?new gf(e,n.id===`rogue`?16740496:10467552,Ym.get(n.weaponL)):null;this.char.attach(e,`handslot.l`)?(this.weapons.push(e),this.weaponMats.push(...wh(e,null)),r&&(this.trails.push(r),this.scene.add(r.mesh))):r?.dispose()}this.dissolve=Mm(this.mats),this.dissolve.setEdge(a?13621472:i?Bt:r);let s=i?Bt:r,c=(i?1.15:.7)*this.baseScale,l=(i?1.35:.95)*this.baseScale;this.ringBase=new G(s),this.ringMat=new R({color:s,transparent:!0,opacity:i?.55:.6,side:2,depthWrite:!1}),this.ring=new L(new Re(c,l,48),this.ringMat),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.1,this.group.add(this.ring),this.blob=new L(new V(.85,20),new R({map:vh(),transparent:!0,opacity:.42,depthWrite:!1,color:0})),this.blob.rotation.x=-Math.PI/2,this.blob.renderOrder=-.5,this.scene.add(this.blob),this.char.play(`Idle_B`,{fade:0}),this.spawnClipPending=!0}update(e,t,n,r,i){let a=e.alive&&!this.wasAlive,o=(e.x-this.group.position.x)**2+(e.y-this.group.position.z)**2>36,s=e.alive&&e.jumpUntil>t?Math.sin((1-(e.jumpUntil-t)/880)*Math.PI)*w:0,c=W(e.x,e.y);if(!this.placed||a||o)this.groundY=c,this.group.position.set(e.x,c+s,e.y),this.yaw=Math.atan2(e.aimX,e.aimY)+Xm,this.placed=!0;else{let t=Math.min(1,26*n);this.group.position.x+=(e.x-this.group.position.x)*t,this.group.position.z+=(e.y-this.group.position.z)*t,this.groundY+=(c-this.groundY)*Math.min(1,18*n),this.group.position.y=this.groundY+s}this.recoilX*=Math.max(0,1-n*9),this.recoilZ*=Math.max(0,1-n*9),this.group.position.x+=this.recoilX,this.group.position.z+=this.recoilZ,this.blob.position.set(e.x,this.groundY+.08,e.y),this.blob.visible=e.alive,this.blob.scale.setScalar(this.baseScale*Math.max(.45,1-s*.28));let l=Math.atan2(e.aimX,e.aimY)+Xm,u=Math.atan2(Math.sin(l-this.yaw),Math.cos(l-this.yaw));if(this.yaw+=u*Math.min(1,16*n),this.group.rotation.y=this.yaw,this.wasAlive=e.alive,!e.alive){if(this.hexShown&&this.setHex(!1),!this.deadShown){this.char.play(`Death_A`,{fade:.12,loop:!1,clamp:!0}),this.deadShown=!0,this.deadAt=t,this.oneShotUntil=0;let n=new G(this.def.attackDamageType===`magic`?10124287:10473727);r?.fountain(e.x,e.y,12,n.getHex())}this.ring.visible=!1;let i=Math.min(1,(t-this.deadAt)/600);if(this.isCreep)this.dissolve.set(i),this.group.position.y=c-.4*i;else{this.dissolve.set(.55*i);let e=1-i*.82,t=(1-i)*.25;for(let n of this.mats)n.transparent=!0,n.opacity=e,n.emissive.setRGB(t*.5,t*.6,t)}this.statusFx?.update(e,n,t),this.char.update(n),this.updateTrails(n);return}if(this.deadShown){this.dissolve.set(0);for(let e of this.mats)e.opacity=1,e.transparent=!1,e.emissive.setRGB(0,0,0)}if(this.deadShown=!1,this.ring.visible=!0,a&&!this.isCreep&&(r?.respawnBurst(e.x,e.y,this.isLocal?Bt:this.color,this.isLocal),this.char.play(`Spawn_Air`,{loop:!1,fade:.05}),this.oneShotUntil=t+nh(this.char.clipDuration(`Spawn_Air`))),this.spawnClipPending){this.spawnClipPending=!1;let n=this.isCreep?`Skeletons_Awaken_Floor`:`Spawn_Air`;this.char.play(n,{loop:!1,fade:0}),this.oneShotUntil=t+nh(this.char.clipDuration(n)),r?.dust(e.x,e.y,4)}let d=e.statuses.some(e=>e.kind===`hex`);if(d!==this.hexShown&&this.setHex(d),this.mushroom&&this.hexShown){let e=Math.sin(t*.009);this.mushroom.scale.set(this.mushScale*(1-.07*e),this.mushScale*(1+.12*e),this.mushScale*(1-.07*e)),this.mushroom.position.y=Math.max(0,e)*.14}let f=this.char;if(e.lastCastAt!==this.lastCastShown){if(this.lastCastShown=e.lastCastAt,t-e.lastCastAt<ih){let n=(e.lastCastKey?Pc.get(this.def.id)?.[e.lastCastKey]:void 0)??xh(this.def);if(n!==th){let e=jc(n),r=nh(f.clipDuration(n),e);f.play(n,{loop:!1,fade:.06,timeScale:e}),this.oneShotUntil=t+r,this.emitTrails(r)}}}else if(e.lastAttackAt!==this.lastAttackShown&&(this.lastAttackShown=e.lastAttackAt,t-e.lastAttackAt<rh)){let n=Nc(this.def.id,e.swingCount),i=f.clipDuration(n),a=Ec[this.def.id]?.basicRhythm,o=Math.max(0,e.swingCount-1),s=(a&&a.length?a[o%a.length]?.timeMult??1:1)*1e3/Math.max(.1,fl(e)),c=i>0?Math.max(jc(n),i*1e3/s):jc(n),l=nh(i,c);f.play(n,{loop:!1,fade:.04,timeScale:c}),this.oneShotUntil=t+l,this.emitTrails(l),r?.attackSound(this.def.id,e.x,e.y)}if(e.lastHitAt!==this.lastHitShown&&(this.lastHitShown=e.lastHitAt,e.alive&&t-e.lastHitAt<180&&(this.recoilX=e.lastHitDx*.34,this.recoilZ=e.lastHitDy*.34),!i&&e.alive&&t-e.lastHitAt<180&&t>=this.oneShotUntil&&t-this.lastFlinchAt>420)){let e=this.hitIdx++%2?`Hit_B`:`Hit_A`,n=Math.max(1,f.clipDuration(e)*1e3/ah);f.play(e,{loop:!1,fade:.05,timeScale:n}),this.oneShotUntil=t+ah,this.lastFlinchAt=t}let p=e.jumpUntil>t;if(!p&&this.jumpPhase&&(this.jumpPhase=``),!(t<this.oneShotUntil)){if(p){let n=e.jumpUntil-t,r=880-n,i=n<=uh?`land`:r<lh?`start`:`idle`;i!==this.jumpPhase&&(this.jumpPhase=i,i===`start`?f.play(oh,{loop:!1,fade:.06,timeScale:Math.max(1,f.clipDuration(oh)*1e3/lh)}):i===`idle`?f.play(sh,{loop:!0,fade:.12}):f.play(ch,{loop:!1,fade:.06,timeScale:Math.max(1,f.clipDuration(ch)*1e3/uh)}))}else i?(f.play(th,{loop:!0,fade:.1,timeScale:Ac}),this.emitTrails(150)):t<e.dashUntil?f.play(`Running_B`,{fade:.1}):f.play(yh(e,this.def.twoHanded??!1),{fade:.16})}f.update(n),this.updateTrails(n),this.prevHop>.2&&s===0&&(this.squash=1,r?.landJuice(e.x,e.y)),this.prevHop=s,this.squash*=Math.max(0,1-9*n);let m=this.baseScale;f.root.scale.set(m*(1+.12*this.squash),m*(1-.18*this.squash),m*(1+.12*this.squash));let h=t<e.dashUntil;if(h&&r){let n=vm.get(this.def.id)?.primary??10473727;t-this.lastDashTrailAt>40&&(this.lastDashTrailAt=t,r.castStreak(e.x,e.y,-e.dashVx,-e.dashVy,n,6,2,.35)),t-this.lastGhostAt>70&&(this.lastGhostAt=t,r.ghost(this.group.position.x,this.group.position.z,n),this.def.id===`witch`&&r.crossGlint(e.x,1,e.y,-e.dashVy,e.dashVx,12159712,.6)),t-this.lastDashDustAt>80&&(this.lastDashDustAt=t,r.footDust(e.x,e.y,-e.dashVx,-e.dashVy))}this.wasDashing&&!h&&r&&r.impactRing(e.x,e.y,vm.get(this.def.id)?.primary??10473727,1.6),this.wasDashing=h;let g=Math.hypot(e.vx,e.vy);if(r&&g>e.moveSpeed*.55&&e.jumpUntil<=t&&t-this.lastDustAt>170&&(this.lastDustAt=t,r.footDust(e.x,e.y,-e.vx,-e.vy)),this.isLocal){if(e.abilities.R.rank>=1&&e.abilities.R.readyAt<=t){let n=.5+.5*Math.sin(t*.0075);this.ringMat.color.copy(this.ringBase).lerp(dh,.55+.4*n),this.ringMat.opacity=.55+.2*n,r&&t-this.lastUltMoteAt>500&&(this.lastUltMoteAt=t,r.mote(e.x+(Math.random()-.5),.3,e.y+(Math.random()-.5),16765514,1.5,.6,.2))}else this.ringMat.color.copy(this.ringBase),this.ringMat.opacity=.55}let _=Math.max(0,1-(t-e.lastHitAt)/110);for(let e of this.mats)e.emissive.setRGB(_,_*.85,_*.7);let v=e.pendingAttack?.35:0;for(let e of this.weaponMats)e.emissive.setRGB(v,v,v);r&&!this.statusFx&&(e.statuses.length>0||e.empowerNext>0)&&(this.statusFx=new Jm({group:this.group,bodyMats:this.mats,weaponMats:this.weaponMats,accent:vm.get(this.def.id)?.accent??10473727,isLocal:this.isLocal},r.pools)),this.statusFx?.update(e,n,t)}setHex(t){if(this.hexShown=t,t&&!this.mushroom){let t=this.lib.instance(`mushroom`),n=new e().setFromObject(t),r=Math.max(.1,n.max.y-n.min.y);this.mushScale=1.2/r,t.position.y=-n.min.y;let i=new ht;i.add(t),i.scale.setScalar(this.mushScale),this.group.add(i),this.mushroom=i}this.mushroom&&(this.mushroom.visible=t),this.char.root.visible=!t}emitTrails(e){if(!this.hexShown)for(let t of this.trails)t.emit(e)}updateTrails(e){for(let t of this.trails)t.update(e)}dispose(e){e.remove(this.group),e.remove(this.blob),this.blob.geometry.dispose(),Th(this.blob.material);for(let t of this.trails)e.remove(t.mesh),t.dispose();this.statusFx?.dispose(),this.char.dispose();for(let e of this.mats)e.dispose();for(let e of this.weaponMats)e.dispose();this.ring.geometry.dispose(),this.ringMat.dispose()}},Ch=class{group=new ht;mats;baseScale;wasAlive=!0;squash=0;lastHitShown=-1;constructor(e,t,n,r){let i=t.instance(r?.model??n.champId);this.group.add(i),this.mats=wh(i,null),this.baseScale=r?.scale??1,this.group.position.set(n.x,W(n.x,n.y),n.y),this.group.rotation.y=r?.rot??0,this.group.scale.setScalar(this.baseScale),e.add(this.group)}update(e,t,n,r){if(!this.wasAlive&&e.alive&&r?.dust(e.x,e.y,4),this.wasAlive=e.alive,this.group.visible=e.alive,!e.alive)return;e.lastHitAt!==this.lastHitShown&&(this.lastHitShown=e.lastHitAt,t-e.lastHitAt<150&&(this.squash=1)),this.squash*=Math.max(0,1-8*n);let i=this.baseScale;this.group.scale.set(i*(1+.1*this.squash),i*(1-.16*this.squash),i*(1+.1*this.squash));let a=Math.max(0,1-(t-e.lastHitAt)/110);for(let e of this.mats)e.emissive.setRGB(a,a*.85,a*.6)}dispose(e){e.remove(this.group);for(let e of this.mats)e.dispose()}};function wh(e,t){let n=[];return e.traverse(e=>{if(!(e instanceof L))return;e.material=Array.isArray(e.material)?e.material.map(e=>e.clone()):e.material.clone();let r=Array.isArray(e.material)?e.material:[e.material];for(let e of r)e instanceof Vt&&(t&&e.color.lerp(t,.18),n.push(e))}),n}function Th(e){if(Array.isArray(e))for(let t of e)t.dispose();else e.dispose()}var Eh=class{scene;lib;units=new Map;props=new Map;propSpecs=Sl();projectiles=new Map;coins=new Map;deliveries=new Map;boss=null;seenCoins=new Set;flyingCoins=new Set;coinTrailAt=new Map;coinSparkleAt=new Map;deliveryEmitAt=new Map;emberNext=new Map;spinners=new Set;bossReturnAt=0;bossNextTaunt=6e3;fireballFlip=!1;fx=null;localId=``;constructor(e,t){this.scene=e,this.lib=t}setupBoss(){this.boss=new xo(this.lib,`Skeleton_Golem`,`Large/`),this.boss.root.position.set(ot.x,W(ot.x,ot.y)+Mt,ot.y),this.boss.root.scale.setScalar(1.5),this.scene.add(this.boss.root),this.boss.play(`Idle_B`,{fade:0})}sync(e,t){let n=e.now;this.spinners.clear();for(let t of e.grounds)t.effect===`whirlwind`&&t.until>n&&this.spinners.add(t.ownerId);let r=new Set,i=new Set;for(let a of e.units.values()){if(a.kind===`prop`){i.add(a.id);let e=this.props.get(a.id);e||(e=new Ch(this.scene,this.lib,a,this.propSpecs[a.slot]),this.props.set(a.id,e)),e.update(a,n,t,this.fx);continue}if(a.kind!==`hero`&&a.kind!==`creep`)continue;r.add(a.id);let e=this.units.get(a.id);if(!e){let t=a.kind===`creep`,n=(t?fh.get(a.champId):Ec[a.champId])??Ec.knight,r=t?10134453:Tt(a.team);e=new Sh(this.scene,this.lib,n,r,!t&&a.id===this.localId,t),this.units.set(a.id,e),this.scene.add(e.group)}e.update(a,n,t,this.fx,this.spinners.has(a.id))}for(let[e,t]of this.units)r.has(e)||(t.dispose(this.scene),this.units.delete(e),this.emberNext.delete(e));for(let[e,t]of this.props)i.has(e)||(t.dispose(this.scene),this.props.delete(e));let a=new Set;for(let t of e.projectiles.values()){a.add(t.id);let n=this.projectiles.get(t.id);n||(n=Mh(t),this.projectiles.set(t.id,n),this.scene.add(n));let r=t.launchH*Math.max(0,1-t.traveled/5);if(n.position.set(t.x,1.1+r,t.y),n.rotation.y=Math.atan2(t.vx,t.vy),t.kind===`hexbolt`){let r=Math.hypot(t.vx,t.vy)||1,i=Math.sin(e.now*.02+hh(t.id)*.7)*.22;n.position.x+=-t.vy/r*i,n.position.z+=t.vx/r*i,n.position.y+=Math.sin(e.now*.013+hh(t.id))*.12}this.fx?.trail(n.position.x,n.position.z,Dh(t.kind)),t.kind===`fireball`&&(this.fireballFlip=!this.fireballFlip,this.fireballFlip&&this.fx?.smokePuff(t.x,1.1,t.y))}for(let[e,t]of this.projectiles)a.has(e)||(this.scene.remove(t),this.projectiles.delete(e));this.syncGrounds(e,n),this.syncCoins(e,n),this.syncDeliveries(e,n),this.boss&&(this.boss.update(t),this.bossReturnAt&&n>=this.bossReturnAt?(this.boss.play(`Idle_B`,{fade:.2}),this.bossReturnAt=0):!this.bossReturnAt&&n>=this.bossNextTaunt&&(this.boss.play(`Skeletons_Taunt`,{fade:.2,loop:!1}),this.bossReturnAt=n+this.boss.clipDuration(`Skeletons_Taunt`)*1e3,this.bossNextTaunt=n+13e3))}syncCoins(e,t){let n=new Set;for(let r of e.coins){n.add(r.id),this.seenCoins.has(r.id)||(this.seenCoins.add(r.id),t<r.landAt&&this.boss?(this.boss.play(`Throw`,{fade:.08,loop:!1}),this.bossReturnAt=t+this.boss.clipDuration(`Throw`)*1e3):r.loot&&(this.fx?.impactRing(r.x,r.y,16765514,1),this.fx?.sparks(r.x,.6,r.y,0,1,5,16773808),this.fx?.dust(r.x,r.y,2)));let e=this.coins.get(r.id);if(e||(e=r.loot?gh(this.lib,r.id):new L(new Pt(.45,.45,.14,18),new Vt({color:16765514,emissive:16755232,emissiveIntensity:1,metalness:.4,roughness:.4})),this.coins.set(r.id,e),this.scene.add(e)),t<r.landAt){let n=1-(r.landAt-t)/900,i=r.fromX+(r.x-r.fromX)*n,a=r.fromY+(r.y-r.fromY)*n,o=Math.sin(n*Math.PI)*6+Mt*(1-n);e.position.set(i,.5+o,a),this.flyingCoins.add(r.id),this.fx&&(this.fx.telegraphs.mark(`coin:${r.id}`,r.x,r.y,1.2,16765514,Math.min(1,Math.max(0,n))),t-(this.coinTrailAt.get(r.id)??0)>40&&(this.coinTrailAt.set(r.id,t),this.fx.trailAt(i,.5+o,a,16765514,.35)))}else{this.flyingCoins.has(r.id)&&(this.flyingCoins.delete(r.id),this.fx?.impactRing(r.x,r.y,16765514,1.2),this.fx?.sparks(r.x,.6,r.y,0,1,6,16765514),this.fx?.dust(r.x,r.y,2)),e.position.set(r.x,W(r.x,r.y)+.6+Math.sin(t*.004)*.15,r.y);let n=this.coinSparkleAt.get(r.id)??0;this.fx&&t-n>700&&(this.coinSparkleAt.set(r.id,t),this.fx.crossGlint(r.x,W(r.x,r.y)+.9,r.y,1,0,16773808,.5))}r.loot?e.rotation.y=t*.0022+hh(r.id)%7:(e.rotation.y=t*.005,e.rotation.x=Math.PI/2)}for(let[e,t]of this.coins)n.has(e)||(this.scene.remove(t),this.coins.delete(e),this.seenCoins.delete(e),this.flyingCoins.delete(e),this.coinTrailAt.delete(e),this.coinSparkleAt.delete(e))}syncDeliveries(e,t){let n=new Set;for(let r of e.deliveries){n.add(r.id);let e=this.deliveries.get(r.id);if(!e){e=new ht;let t=new L(new Ze(1.1,1.1,1.1),new Vt({color:6750156,emissive:2280584,emissiveIntensity:.5,roughness:.6}));t.position.y=.7;let n=new L(new Pt(.7,1.3,9,16,1,!0),new R({color:6750156,transparent:!0,opacity:.14,side:2,depthWrite:!1}));n.position.y=4.5,e.add(t,n),this.deliveries.set(r.id,e),this.scene.add(e)}if(e.position.set(r.x,W(r.x,r.y),r.y),e.rotation.y=t*.0015,e.children[0].position.y=.7+Math.sin(t*.003)*.18,e.children[1].scale.setScalar(1+.06*(.5+.5*Math.sin(t*.004))),this.fx&&t-(this.deliveryEmitAt.get(r.id)??0)>120){this.deliveryEmitAt.set(r.id,t);let e=t*.004;for(let t of[0,Math.PI])this.fx.mote(r.x+Math.cos(e+t)*.9,.4,r.y+Math.sin(e+t)*.9,6750156,2.4,.7,.22)}}for(let[e,t]of this.deliveries)n.has(e)||(this.scene.remove(t),this.deliveries.delete(e),this.deliveryEmitAt.delete(e))}syncGrounds(e,t){let n=this.fx;if(!n)return;let r=e.units.get(this.localId)?.team??``;n.telegraphs.sync(e.grounds,r,t);for(let r of e.grounds){if(n.zoneAmbient(r,t),!r.enemyDps)continue;let i=r.radius*r.radius;for(let a of e.units.values())!a.alive||a.team===r.team||(a.kind===`hero`||a.kind===`creep`)&&((a.x-r.x)**2+(a.y-r.y)**2>i||t<(this.emberNext.get(a.id)??0)||(this.emberNext.set(a.id,t+250),n.zoneEmber(a.x,a.y,um(r.effect))))}}};function Dh(e){return e===`fireball`?16742956:e===`bolt`?11563263:e===`arrow`?16770720:e===`hexbolt`?8380554:16777215}var Oh={shaft:new Pt(.05,.05,1,6),shard:new xt(.16,1.1,6),sphere:new it(1,12,12)},kh=new Map;function Ah(e,t){let n=kh.get(e);return n||(n=t(),kh.set(e,n)),n}function jh(e,t){return Ah(`halo:${e}:${t}`,()=>new R({color:e,blending:2,transparent:!0,opacity:t,depthWrite:!1}))}function Mh(e){let t=Dh(e.kind),n=new ht;if(e.kind===`arrow`){let e=new L(Oh.shaft,Ah(`shaft`,()=>new R({color:13607258})));e.rotation.x=Math.PI/2;let r=new L(Oh.sphere,jh(t,1));r.scale.setScalar(.13),r.position.z=.5,n.add(e,r)}else if(e.kind===`bolt`){let e=new L(Oh.shard,jh(t,.95));e.rotation.x=Math.PI/2;let r=new L(Oh.sphere,jh(t,.3));r.scale.setScalar(.28),n.add(e,r)}else{let r=e.kind===`fireball`?.38:.2,i=new L(Oh.sphere,Sp(t));i.scale.setScalar(r);let a=new L(Oh.sphere,jh(t,.35));a.scale.setScalar(r*1.9),n.add(i,a)}return n}function Q(e,t){let n=e*374761393+t*668265263|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Nh(e,t){return Math.atan2(e,t)}var Ph=Math.PI*2,Fh=1.6;function Ih(e,t){let n=-1/0;for(let r of qt){let i=e*Math.cos(r)+t*Math.sin(r)-Ge;i>n&&(n=i)}return n}var Lh=null;function Rh(e){Lh=e===null?null:e.map(e=>({model:e.model,x:e.x,y:e.y,rot:e.rot,scale:e.scale,lie:e.lie??!1,h:e.h??0}))}function zh(){return Lh??Bh()}function Bh(){let e=[],t=(t,n,r,i,a,o=!1,s=0)=>{e.push({model:t,x:n,y:r,rot:i,scale:a,lie:o,h:s})};nt.filter(e=>e.id.startsWith(`camp`)).forEach((e,n)=>{let r=Math.atan2(e.y,e.x),i=Math.cos(r),a=Math.sin(r),o=-Math.sin(r),s=Math.cos(r);t(`floor_foundation_corner`,e.x-i*2.4,e.y-a*2.4,r,.95),t(n%2==0?`banner_blue`:`banner_red`,e.x-a*2.4,e.y+i*2.4,r+Math.PI/2,.9);for(let i=0;i<3;i++){let a=i===0?.9:i===1?2.2:-1.7,o=Math.cos(r+a),s=Math.sin(r+a);t(`rubble_half`,e.x+o*3,e.y+s*3,Q(n*7+i,13)*Ph,.36+Q(n*3+i,5)*.08)}if(n===0){let c=e.x-i*2.8,l=e.y-a*2.8;t(`post`,c,l,r,.55),t(`sword_shield_broken`,c,l,Nh(i,a),.8,!1,1.4),t(`rocks_small`,e.x-o*1.5,e.y-s*1.5,Q(n,17)*Ph,1.1)}else n===1?(t(`rocks_gold`,e.x+o*2.4,e.y+s*2.4,.7,1.1),t(`chest`,e.x-i*2.6,e.y-a*2.6,Nh(i,a),.9),t(`coin_stack_small`,e.x+i*2.5+o*1.2,e.y+a*2.5+s*1.2,Q(1,19)*Ph,.9),t(`coin_stack_small`,e.x+i*2.5-o*1.2,e.y+a*2.5-s*1.2,Q(2,19)*Ph,.9)):n===2?(t(`scaffold_frame_small`,e.x+i*3,e.y+a*3,r+.4,1),t(`bucket_pickaxes`,e.x+o*2.2,e.y+s*2.2,Q(n,23)*Ph,.95),t(`rocks_small`,e.x-o*2,e.y-s*2,Q(n,29)*Ph,1)):n===3||(n===4?(t(`trunk_large_A`,e.x+o*2.9,e.y+s*2.9,r+.5,1,!0),t(`trunk_large_A`,e.x-i*2.7,e.y-a*2.7,r-.9,.85,!0),t(`rocks`,e.x-o*2.2,e.y-s*2.2,Q(7,37)*Ph,.8)):n===5&&(t(`chest_mimic`,e.x+i*2.7,e.y+a*2.7,Nh(-i,-a),1),t(`chest`,e.x-o*1.8,e.y-s*1.8,1.9,.85),t(`candle_triple`,e.x+i*2+o*1.4,e.y+a*2+s*1.4,0,1),t(`candle_triple`,e.x+i*2-o*1.4,e.y+a*2-s*1.4,0,1)))}),$t.forEach((e,n)=>{let r=Math.cos(e.dir),i=Math.sin(e.dir),a=(e.offsets[e.offsets.length-1]??3)+2.2,o=n%2==0?1:-1;t(`rubble_half`,e.x-r*a*o,e.y-i*a*o,Q(n,82)*Ph,.34)});let n=Math.round(Ge/2.7);for(let e=0;e<n;e++){let r=e/n*Ph+.22,i=Ge-2.4-e%3*1.3,a=Math.cos(r)*i,o=Math.sin(r)*i,s=!0;for(let e of c)(a-e.x)**2+(o-e.y)**2<81&&(s=!1);for(let e of nt)(a-e.x)**2+(o-e.y)**2<64&&(s=!1);s&&(t(e%2==0?`pillar`:`column`,a,o,r*1.7,.85,e%3!=0),e%4==1&&t(`rubble_half`,a+Math.cos(r+1.3)*2,o+Math.sin(r+1.3)*2,Q(e,87)*Ph,.35),e%4==3&&t(`rocks`,a+Math.cos(r-1.1)*2.3,o+Math.sin(r-1.1)*2.3,Q(e,88)*Ph,.85))}let r=(e,t)=>{for(let n of qt){let r=Math.cos(n),i=Math.sin(n);if(e*r+t*i>6&&Math.abs(-e*i+t*r)<4.5)return!1}return!0},i=Math.round(Ge*.5);for(let e=0;e<i;e++){let n=Q(e,301)*Ph,i=Ge*(.55+Q(e,302)*.32),a=Math.cos(n)*i,o=Math.sin(n)*i,s=r(a,o);for(let e of c)(a-e.x)**2+(o-e.y)**2<81&&(s=!1);for(let e of nt)(a-e.x)**2+(o-e.y)**2<64&&(s=!1);for(let e of z)(a-e.x)**2+(o-e.y)**2<49&&(s=!1);for(let e of he)(a-e.x)**2+(o-e.y)**2<49&&(s=!1);for(let e of $t)(a-e.x)**2+(o-e.y)**2<42.25&&(s=!1);if(!s)continue;let l=Q(e,303);l<.4?t(`rocks_small`,a,o,Q(e,304)*Ph,.9+Q(e,305)*.4):l<.65?t(`rubble_half`,a,o,Q(e,304)*Ph,.3+Q(e,305)*.1):l<.85?t(`rocks`,a,o,Q(e,304)*Ph,.7+Q(e,305)*.3):(t(`floor_foundation_corner`,a,o,Q(e,306)*Ph,.8),t(`candle_triple`,a+1.3,o+.6,Q(e,307)*Ph,1))}qt.forEach((e,n)=>{for(let r of[-.13,.13]){let i=e+r,a=Ge-.5;t(n%2==0?`banner_red`:`banner_blue`,Math.cos(i)*a,Math.sin(i)*a,Math.PI/2-i,1.15,!1,2.6)}}),t(`vampire_throne`,0,-3.3,Nh(0,3.3),1,!1,Fh),t(`chest_gold`,2.9,1.4,-2.2,1,!1,Fh),t(`chest_large_gold`,-2.6,-1.9,.9,1,!1,Fh),t(`chest`,-3.3,1.8,2.6,.9,!1,Fh);for(let e=0;e<17;e++){let n=.6+e*2.39996,r=Math.atan2(Math.sin(n+Math.PI/2),Math.cos(n+Math.PI/2));if(Math.abs(r)<.5)continue;let i=2+Q(e,7)*2.6;t(e%3==2?`coin_stack_medium`:`coin_stack_small`,Math.cos(n)*i,Math.sin(n)*i,Q(e,11)*Ph,.8+Q(e,3)*.4,!1,Fh)}for(let e of lt)for(let n of[-.3,.3]){let r=e+n;t(`banner_thin_yellow`,Math.cos(r)*9.9,Math.sin(r)*9.9,Nh(-Math.cos(r),-Math.sin(r)),1)}for(let e of lt)for(let n of[-.26,.26]){let r=e+n;t(`candle_triple`,Math.cos(r)*12.6,Math.sin(r)*12.6,Q(Math.round(e*100),Math.round(n*100))*Ph,1)}for(let e of z){let n=Math.atan2(e.y,e.x),r=Math.hypot(e.x,e.y);for(let e of[-.14,.14]){let i=n+e;t(`post`,Math.cos(i)*(r+2.2),Math.sin(i)*(r+2.2),n,.7)}for(let e of[-.13,.13]){let i=n+e;t(`candle_triple`,Math.cos(i)*(r+1.6),Math.sin(i)*(r+1.6),n,1)}t(`banner_white`,Math.cos(n)*(r+5.4),Math.sin(n)*(r+5.4),Nh(-Math.cos(n),-Math.sin(n)),.95)}he.forEach((e,n)=>{let r=Math.atan2(e.y,e.x),i=Math.cos(r),a=Math.sin(r),o=-Math.sin(r),s=Math.cos(r),c=Math.hypot(e.x,e.y)+2.6,l=i*c,u=a*c;t(`pillar_decorated`,l,u,Nh(-i,-a),3.4/3.8),t(`rocks_small`,l+o*1.2-i*.4,u+s*1.2-a*.4,Q(n,61)*Ph,1.2),t(`candle_triple`,l-o*1.3+i*.3,u-s*1.3+a*.3,Q(n,62)*Ph,1)});let a=e.filter(e=>Ih(e.x,e.y)<=-.5);for(let e of c){let t=Math.atan2(e.y,e.x),n=Ge+.75;a.push({model:`sword_shield_broken`,x:Math.cos(t)*n,y:Math.sin(t)*n,rot:Math.PI/2-t,scale:1,h:2.5})}return a}var Vh=new Map([[`pillar`,3.8],[`column`,3.8],[`pillar_decorated`,3.8],[`vampire_throne`,2.6],[`paladin_statue`,2.6]]),Hh=Math.PI*2,Uh=7,Wh=14,Gh=Ge+1.5,Kh=4,qh=3.6,Jh=Gh+2,Yh=Gh+4,Xh=11,Zh=[`wall_half`,`wall_half_endcap`,`wall_arched`,`wall_cracked`,`wall_inset_candles`,`wall_archedwindow_open`,`wall_window_open`,`barrier`,`barrier_column`,`stairs_walled`],Qh=new F,$h=new F,eg=new F(0,0,0),tg=new _e(0,0,0,`YXZ`),ng=new Ct,rg=new Me,ig=new Me,ag=new e,og=new G,sg=class t{scene;lib;opts;flames=[];embers=null;emberPos=new Float32Array;emberVel=new Float32Array;emberLife=new Float32Array;motes=null;motePos=new Float32Array;moteVel=new Float32Array;goldMotes=null;goldPos=new Float32Array;warnRims=null;warnLevels=new Float32Array;localX=0;localY=0;hasLocal=!1;homeSlot=-1;lastT=-1;disposed=!1;extras=new Map;added=[];ownedGeos=[];ownedMats=[];constructor(e,t,n={}){this.scene=e,this.lib=t,this.opts=n}setup(){this.buildFloor(),this.buildPlatform(),this.opts.obstacles!==!1&&H.forEach((e,t)=>{if(e.model===`wall_run`)return;let n=e.model??(gt()?null:t%3==0?`pillar_decorated`:t%3==1?`column`:`pillar`);if(n===null)return;let r=e.model===`paladin_statue`?Math.atan2(-e.x,-e.y):t*.7;this.add(this.place(n,e.x,e.y,e.height,r))}),this.opts.decor!==!1&&this.buildDecorInstanced();for(let e=0;e<6;e++){let t=e/6*Hh,n=St+1.6,r=Math.cos(t)*n,i=Math.sin(t)*n;this.add(this.place(`torch_lit`,r,i,2,t));let a=new Ke(16747052,6,12,2);a.position.set(r,2.4,i),this.add(a),this.flames.push(a)}let e=new Ke(16762977,5,16,2);e.position.set(0,6.2,0),this.add(e),this.flames.push(e),c.forEach(e=>{let t=Math.atan2(-e.y,-e.x),n=Math.cos(t+Math.PI/2)*2.4,r=Math.sin(t+Math.PI/2)*2.4;this.add(this.place(`torch_lit`,e.x+n,e.y+r,2,t));let i=this.place(`banner_red`,e.x-n,e.y-r,3,e.facing),a=new G(Tt(`bot:${e.slot}`));i.traverse(e=>{if(!(e instanceof L))return;let t=Array.isArray(e.material)?e.material[0]:e.material;if(!t)return;let n=t.clone();n instanceof Vt&&n.color.lerp(a,.7),e.material=n,this.ownedMats.push(n)}),this.add(i)}),this.buildGolemLair(),this.buildMonolithGlow(),this.buildLightShafts(),this.buildWarnRims(),this.buildAmbient(),this.initArchitecture().catch(e=>{console.error(`[environment] architecture load failed`,e)})}async initArchitecture(){let e=new A;if(await Promise.all(Zh.map(async t=>{let n=await e.loadAsync(`./models/dungeon/${t}.gltf`),r=new Set;n.scene.traverse(e=>{if(!(e instanceof L))return;e.castShadow=!0,e.receiveShadow=!0;let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)!(e instanceof Vt)||r.has(e)||(r.add(e),e.roughness=Math.max(e.roughness,.82),e.envMapIntensity=.35,e.color.setHex(13286303))}),this.extras.set(t,n.scene)})),this.disposed){this.disposeExtras();return}this.buildPerimeter(),this.opts.obstacles!==!1&&this.buildPartitions(),Yo()}disposeExtras(){for(let e of this.extras.values())e.traverse(e=>{if(!(e instanceof L))return;e.geometry.dispose();let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e.dispose()});this.extras.clear()}add(e){this.scene.add(e),this.added.push(e)}templateOf(e){let t=this.extras.get(e);return t?t.clone(!0):this.lib.instance(e)}geoOf(t){let n=this.templateOf(t);n.updateMatrixWorld(!0);let r=[];n.traverse(e=>{e instanceof L&&r.push(e)});let i=r[0];if(!i)return null;let a=i.geometry.clone();a.applyMatrix4(i.matrixWorld),a.computeBoundingBox();let o=a.boundingBox,s=o?o.clone():new e(new F(0,0,0),new F(1,1,1)),c=i.material,l=Array.isArray(c)?c[0]:c;return l?(this.ownedGeos.push(a),{geo:a,mat:l,box:s,meshCount:r.length}):null}addInstanced(e,t,n=!0){if(t.length===0)return;let r=this.geoOf(e);if(!r)return;if(r.meshCount>1){for(let r of t){let t=this.templateOf(e);t.applyMatrix4(r),t.traverse(e=>{e instanceof L&&(e.castShadow=n,e.receiveShadow=!0)}),this.add(t)}return}let i=new ne(r.geo,r.mat,t.length);i.castShadow=n,i.receiveShadow=!0,t.forEach((e,t)=>i.setMatrixAt(t,e)),i.instanceMatrix.needsUpdate=!0,this.add(i)}plantMatrix(e,t,n,r,i,a,o,s){return tg.set(0,i,0),ng.setFromEuler(tg),$h.set(a,o,s),rg.compose(eg,ng,$h),ag.copy(e).applyMatrix4(rg),Qh.set(t-(ag.min.x+ag.max.x)/2,r-ag.min.y,n-(ag.min.z+ag.max.z)/2),new Me().compose(Qh,ng,$h)}decorMatrix(e,t){let n=e.lie?void 0:Vh.get(e.model),r=Math.max(.01,t.max.y-t.min.y),i=n===void 0?e.scale:n*e.scale/r;tg.set(0,e.rot,e.lie?Math.PI/2:0),ng.setFromEuler(tg),$h.set(i,i,i),rg.compose(eg,ng,$h),ag.copy(t).applyMatrix4(rg);let a=W(e.x,e.y)-ag.min.y+(e.h??0);return Qh.set(e.x,a,e.y),ig.compose(Qh,ng,$h)}buildDecorInstanced(){let e=new Map;for(let t of zh()){let n=e.get(t.model);n?n.push(t):e.set(t.model,[t])}for(let[t,n]of e){let e=this.geoOf(t);if(!e)continue;if(e.meshCount>1){for(let e of n)this.add(this.placeScaled(e));continue}let r=new ne(e.geo,e.mat,n.length);r.castShadow=!0,r.receiveShadow=!0,n.forEach((t,n)=>r.setMatrixAt(n,this.decorMatrix(t,e.box))),r.instanceMatrix.needsUpdate=!0,this.add(r)}}buildGolemLair(){let e=nt.find(e=>e.id===`golem`);if(!e)return;let t=Math.atan2(e.y,e.x),n=new G(10474751);[{model:`rocks`,specs:[{da:.5,r:2.9,s:1.15},{da:2.4,r:3.1,s:1.05},{da:-1.9,r:2.7,s:1.25}]},{model:`rubble_half`,specs:[{da:1.4,r:2.5,s:.5},{da:-.8,r:2.6,s:.45}]}].forEach((r,i)=>{let a=this.geoOf(r.model);if(!a)return;let o=a.mat.clone();o instanceof Vt&&o.color.lerp(n,.6),this.ownedMats.push(o);let s=new ne(a.geo,o,r.specs.length);s.castShadow=!0,s.receiveShadow=!0,r.specs.forEach((n,o)=>{let c=e.x+Math.cos(t+n.da)*n.r,l=e.y+Math.sin(t+n.da)*n.r,u={model:r.model,x:c,y:l,rot:Q(i*5+o,67)*Hh,scale:n.s};s.setMatrixAt(o,this.decorMatrix(u,a.box))}),s.instanceMatrix.needsUpdate=!0,this.add(s)})}buildMonolithGlow(){let e=[];for(let t of he){let n=new Re(.9,1.2,24);n.rotateX(-Math.PI/2),n.translate(t.x,W(t.x,t.y)+.1,t.y),e.push(n)}let t=D(e);for(let t of e)t.dispose();if(!t)return;let n=new R({color:6737151,transparent:!0,opacity:.12,blending:2,depthWrite:!1});this.ownedGeos.push(t),this.ownedMats.push(n),this.add(new L(t,n))}buildLightShafts(){let e=Math.PI/6,t=[-9,0,9].map(t=>[Math.cos(e)*31-Math.sin(e)*t,Math.sin(e)*31+Math.cos(e)*t]),n=Math.hypot(18,12),r=18/n,i=12/n,a=new F(i,0,-r);ng.setFromAxisAngle(a,16*Math.PI/180);let o=[];for(let[e,n]of t){let t=new Pt(.5,2,13,10,1,!0);t.applyQuaternion(ng),t.translate(e,4.6,n),o.push(t)}let s=D(o);for(let e of o)e.dispose();if(!s)return;let c=new R({color:10471136,transparent:!0,opacity:.035,blending:2,depthWrite:!1,side:2});this.ownedGeos.push(s),this.ownedMats.push(c),this.add(new L(s,c))}buildWarnRims(){let e=new Re(6.55,Uh,48);e.rotateX(-Math.PI/2);let t=new R({color:16728112,transparent:!0,blending:2,depthWrite:!1}),n=new ne(e,t,c.length);this.warnLevels=new Float32Array(c.length),c.forEach((e,t)=>{ig.makeTranslation(e.x,.1,e.y),n.setMatrixAt(t,ig),n.setColorAt(t,og.setRGB(0,0,0))}),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),this.ownedGeos.push(e),this.ownedMats.push(t),this.warnRims=n,this.add(n)}buildAmbient(){let e=lg();this.emberPos=new Float32Array(330),this.emberVel=new Float32Array(330),this.emberLife=new Float32Array(110);let t=new Float32Array(330);for(let e=0;e<110;e++)this.seedEmber(e),t[e*3]=1.4,t[e*3+1]=.55,t[e*3+2]=.12;let n=new Ot;n.setAttribute(`position`,new Ht(this.emberPos,3)),n.setAttribute(`color`,new Ht(t,3));let r=new Nt({size:.17,map:e,transparent:!0,blending:2,depthWrite:!1,vertexColors:!0});this.embers=new $e(n,r),this.embers.frustumCulled=!1,this.ownedGeos.push(n),this.ownedMats.push(r),this.add(this.embers),this.goldPos=new Float32Array(120);let i=new Float32Array(120);for(let e=0;e<40;e++){let t=Math.random()*Hh,n=Math.sqrt(Math.random())*10.5;this.goldPos[e*3]=Math.cos(t)*n,this.goldPos[e*3+1]=2.2+Math.random()*3.8,this.goldPos[e*3+2]=Math.sin(t)*n,i[e*3]=1.5,i[e*3+1]=1.05,i[e*3+2]=.3}let a=new Ot;a.setAttribute(`position`,new Ht(this.goldPos,3)),a.setAttribute(`color`,new Ht(i,3));let o=new Nt({size:.11,map:e,transparent:!0,blending:2,depthWrite:!1,vertexColors:!0});if(this.goldMotes=new $e(a,o),this.goldMotes.frustumCulled=!1,this.ownedGeos.push(a),this.ownedMats.push(o),this.add(this.goldMotes),`matchMedia`in window&&window.matchMedia(`(pointer:coarse)`).matches||window.devicePixelRatio<1.3)return;this.motePos=new Float32Array(540),this.moteVel=new Float32Array(540);for(let e=0;e<180;e++){let t=Math.random()*Hh,n=Math.sqrt(Math.random())*Ge;this.motePos[e*3]=Math.cos(t)*n,this.motePos[e*3+1]=.5+Math.random()*5.5,this.motePos[e*3+2]=Math.sin(t)*n,this.moteVel[e*3]=(Math.random()-.5)*.3,this.moteVel[e*3+1]=.1+Math.random()*.2,this.moteVel[e*3+2]=(Math.random()-.5)*.3}let s=new Ot;s.setAttribute(`position`,new Ht(this.motePos,3));let c=new Nt({size:.07,map:e,color:10471136,transparent:!0,opacity:.5,blending:2,depthWrite:!1});this.motes=new $e(s,c),this.motes.frustumCulled=!1,this.ownedGeos.push(s),this.ownedMats.push(c),this.add(this.motes)}seedEmber(e){let t=Math.min(6,this.flames.length),n=t>0?this.flames[e%t]:void 0,r=n?n.position:{x:0,y:2,z:0};this.emberPos[e*3]=r.x+(Math.random()-.5)*.5,this.emberPos[e*3+1]=r.y-.3+Math.random()*.4,this.emberPos[e*3+2]=r.z+(Math.random()-.5)*.5,this.emberVel[e*3]=(Math.random()-.5)*.4,this.emberVel[e*3+1]=.7+Math.random()*.8,this.emberVel[e*3+2]=(Math.random()-.5)*.4,this.emberLife[e]=.8+Math.random()*1.4}static hexDepth(e,t,n){let r=-1/0;for(let i=0;i<6;i++){let a=Math.PI/6+i*Math.PI/3,o=e*Math.cos(a)+t*Math.sin(a)-n;o>r&&(r=o)}return r}rebuildFloor(){for(let e of this.floorMeshes)this.scene.remove(e),e.dispose();this.floorMeshes.length=0,this.buildFloor()}floorMeshes=[];buildFloor(){let e=this.geoOf(`floor_tile_large`),n=this.geoOf(`floor_tile_large_rocks`),r=this.geoOf(`floor_dirt_large`),i=this.geoOf(`floor_tile_big_grate`);if(!e)return;let a=(e,t,n,r)=>{e&&e.mat instanceof Vt&&e.mat.color.setRGB(t,n,r)};a(e,.72,.82,.97),a(n,.72,.82,.97),a(i,.76,.84,.97),a(r,.75,.72,.67);for(let t of[e,n,r,i]){if(!t)continue;let e=t.box.getCenter(Qh);t.geo.translate(-e.x,0,-e.z)}let o=nt.map(e=>({x:e.x,y:e.y,r:e.id===`golem`?5.5:5}));for(let e=0;e<12;e++){let t=Q(e,91)*Hh,n=Gh*(.34+Q(e,92)*.55);o.push({x:Math.cos(t)*n,y:Math.sin(t)*n,r:3.5+Q(e,93)*3})}let s={flag:[],worn:[],dirt:[],grate:[]},c=Math.ceil((Gh+4)/4)*4;for(let e=-c;e<=c;e+=4)for(let a=-c;a<=c;a+=4){if(t.hexDepth(e,a,Gh+1)>0)continue;let c=e*e+a*a,l=Math.sqrt(c),u=Q(e/4,a/4),d=Math.floor(Q(a/4,e/4)*4)*(Math.PI/2),f=c<121?2:0,p=rn.get(ce(e,a));if(p){s[p].push([e,a,f,d]);continue}if(f>0){s.flag.push([e,a,f,d]);continue}let m=!1;for(let t of o){let n=e-t.x,r=a-t.y;if(n*n+r*r<=t.r*t.r){m=!0;break}}m&&r?s.dirt.push([e,a,0,d]):l>Gh*.34&&u<.16&&n?s.worn.push([e,a,0,d]):l>Gh*.39&&l<Gh*.84&&u>=.16&&u<.205&&i?s.grate.push([e,a,0,d]):s.flag.push([e,a,0,d])}let l=[[e,s.flag],[n,s.worn],[r,s.dirt],[i,s.grate]];for(let[e,t]of l){if(!e||t.length===0)continue;let n=new ne(e.geo,e.mat,t.length);n.receiveShadow=!0,t.forEach(([e,t,r,i],a)=>{tg.set(0,i,0),ng.setFromEuler(tg),Qh.set(e,r,t),$h.set(1,1,1),n.setMatrixAt(a,ig.compose(Qh,ng,$h))}),n.instanceMatrix.needsUpdate=!0,this.add(n),this.floorMeshes.push(n)}}buildPerimeter(){let t=new Map,n=(e,n)=>{let r=t.get(e);r?r.push(n):t.set(e,[n])},r=new Map,i=t=>{let n=r.get(t);if(n)return n;let i=this.templateOf(t);i.updateMatrixWorld(!0);let a=new e().setFromObject(i);return r.set(t,a),a},a=i(`wall`),o=Math.max(.01,a.max.x-a.min.x),s=Math.max(.01,a.max.y-a.min.y),c=Kh/s,l=(e,t,r,a,o,s,c)=>{let l=Math.cos(t)*r-Math.sin(t)*a,u=Math.sin(t)*r+Math.cos(t)*a;n(e,this.plantMatrix(i(e),l,u,o,Math.PI/2-t,s,c,1))};for(let e=0;e<6;e++){let t=Math.PI/6+e*Math.PI/3,r=2*Gh/Math.sqrt(3)/Xh,a=r/o*1.02;for(let n=0;n<Xh;n++){let i=(n-5)*r,o=n===5,s=`wall`;if(o)s=`wall_gated`;else if(n===4||n===6)s=`wall_pillar`;else{let t=Q(e*31+n,101);t<.14?s=`wall_cracked`:t<.26?s=`wall_arched`:t<.34?s=`wall_inset_candles`:t<.4&&(s=`wall_broken`)}l(s,t,Gh,i,0,a,c)}let u=2*Jh/Math.sqrt(3),d=i(`floor_tile_large`),f=Math.max(.01,d.max.x-d.min.x),p=u/12;for(let e=0;e<11;e++){let r=(e-5)*p,a=Math.cos(t)*Jh-Math.sin(t)*r,o=Math.sin(t)*Jh+Math.cos(t)*r;n(`floor_tile_large`,this.plantMatrix(i(`floor_tile_large`),a,o,3.75,Math.PI/2-t,p/f*1.02,1,1.08))}let m=Gh-.15,h=2*m/Math.sqrt(3),g=i(`barrier`),_=Math.max(.01,g.max.x-g.min.x),v=h/12;for(let e=0;e<11;e++)l(`barrier`,t,m,(e-5)*v,Kh,v/_*1,1);l(`barrier_column`,t,m,6*v-.3,Kh,1,1),l(`barrier_column`,t,m,-(6*v-.3),Kh,1,1);let y=2*Yh/Math.sqrt(3)/12,b=y/o*1.02,x=qh/s;for(let r=0;r<12;r++){let a=(r-11/2)*y,o=Q(e*47+r,103);if(l(o<.3?`wall_archedwindow_open`:o<.48?`wall_window_open`:`wall`,t,Yh,a,Kh,b,x),r%4==2&&o>=.48){let r=e%2==0?`banner_red`:`banner_blue`,o=Math.cos(t)*(Yh-.7)-Math.sin(t)*a,s=Math.sin(t)*(Yh-.7)+Math.cos(t)*a;n(r,this.plantMatrix(i(r),o,s,4.9,Math.PI/2-t+Math.PI,1,1,1))}}(e===1||e===4)&&l(`stairs_walled`,t,Jh-.4,8.5,Kh,1,1)}for(let e=0;e<6;e++){let t=e*Math.PI/3,r=Gh/Math.cos(Math.PI/6)-.6;n(`wall_pillar`,this.plantMatrix(i(`wall_pillar`),Math.cos(t)*r,Math.sin(t)*r,0,Math.PI/2-t,1.6,(7.6+.3)/s,1.6));let a=Yh/Math.cos(Math.PI/6)-.7;n(`wall_pillar`,this.plantMatrix(i(`wall_pillar`),Math.cos(t)*a,Math.sin(t)*a,Kh,Math.PI/2-t,1.5,4/s,1.5))}for(let[e,n]of t)this.addInstanced(e,n)}buildPartitions(){let e=this.geoOf(`wall`),t=this.geoOf(`wall_half_endcap`);if(!e)return;let n=Math.max(.01,e.box.max.x-e.box.min.x),r=2.6/Math.max(.01,e.box.max.y-e.box.min.y),i=t?Math.max(.01,t.box.max.y-t.box.min.y):1,a=t?2.7/i:1,o=[],s=[];for(let i of Xt()){let c=i.offsets[0]??0,l=i.offsets[i.offsets.length-1]??0,u=l-c+2.2,d=Math.max(1,Math.round(u/n)),f=u/d,p=Math.PI-i.dir,m=Math.cos(i.dir),h=Math.sin(i.dir);for(let t=0;t<d;t++){let a=c-1.1+(t+.5)*f;o.push(this.plantMatrix(e.box,i.x+m*a,i.y+h*a,0,p,f/n*1.02,r,1))}t&&(s.push(this.plantMatrix(t.box,i.x+m*(l+1.4),i.y+h*(l+1.4),0,p,1,a,1)),s.push(this.plantMatrix(t.box,i.x+m*(c-1.4),i.y+h*(c-1.4),0,p+Math.PI,1,a,1)))}this.addInstanced(`wall`,o),t&&this.addInstanced(`wall_half_endcap`,s)}update(e){for(let t=0;t<this.flames.length;t++){let n=this.flames[t];n&&(n.intensity=(t<6?6:5)*(.82+Math.sin(e*9+t*2.1)*.12+Math.sin(e*23+t)*.06))}let t=this.lastT<0?0:Math.min(.05,Math.max(0,e-this.lastT));if(this.lastT=e,this.embers){let e=this.emberPos,n=this.emberVel,r=this.emberLife;for(let i=0;i<r.length;i++){if((r[i]??0)-t<=0){this.seedEmber(i);continue}r[i]=(r[i]??0)-t;let a=i*3;n[a+1]=(n[a+1]??0)+t*.3,e[a]=(e[a]??0)+(n[a]??0)*t,e[a+1]=(e[a+1]??0)+(n[a+1]??0)*t,e[a+2]=(e[a+2]??0)+(n[a+2]??0)*t}this.embers.geometry.getAttribute(`position`).needsUpdate=!0}if(this.motes){let e=this.motePos,n=this.moteVel;for(let r=0;r<n.length/3;r++){let i=r*3;e[i]=(e[i]??0)+(n[i]??0)*t,e[i+1]=(e[i+1]??0)+(n[i+1]??0)*t,e[i+2]=(e[i+2]??0)+(n[i+2]??0)*t,(e[i+1]??0)>6&&(e[i+1]=.5)}this.motes.geometry.getAttribute(`position`).needsUpdate=!0}if(this.goldMotes){let e=this.goldPos;for(let n=0;n<e.length/3;n++){let r=n*3,i=(e[r+1]??0)+.5*t;e[r+1]=i>6.2?2.2:i}this.goldMotes.geometry.getAttribute(`position`).needsUpdate=!0}if(this.warnRims){let t=!1;for(let n=0;n<c.length;n++){let r=c[n];if(!r)continue;let i=.25;if(n===this.homeSlot)i=0;else if(this.hasLocal){let e=Math.hypot(this.localX-r.x,this.localY-r.y);i=.4*Math.max(0,1-e/Wh)}let a=i*(.72+.28*Math.sin(e*4+n*1.1));Math.abs(a-(this.warnLevels[n]??0))<.005||(this.warnLevels[n]=a,this.warnRims.setColorAt(n,og.setRGB(a,a,a)),t=!0)}t&&this.warnRims.instanceColor&&(this.warnRims.instanceColor.needsUpdate=!0)}}setLocalPos(e,t){this.localX=e,this.localY=t,this.hasLocal=!0}setHomeSlot(e){this.homeSlot=e}place(t,n,r,i,a){let o=this.lib.instance(t),s=new e().setFromObject(o).getSize($h),c=i/(s.y>.01?s.y:1);o.scale.setScalar(c);let l=new e().setFromObject(o);return o.position.set(n,W(n,r)-l.min.y,r),o.rotation.y=a,o.traverse(e=>{e instanceof L&&(e.castShadow=!0,e.receiveShadow=!0)}),o}buildPlatform(){let e=Le+.04,t=new Vt({color:5659496,roughness:.95,side:2});this.ownedMats.push(t);for(let n of lt){let r=new Pt(11.1,11.1,2,26,1,!0,n+e,Math.PI/2-2*e),i=new L(r,t);i.position.y=1,i.receiveShadow=!0,this.ownedGeos.push(r),this.add(i)}let n=this.geoOf(`stairs_wide`);if(!n)return;let r=n.box.getSize(Qh),i=2*e*11/Math.max(.01,r.x),a=2/Math.max(.01,r.y),o=kt/Math.max(.01,r.z);$h.set(i,a,o);let s=new ne(n.geo,n.mat,lt.length);s.castShadow=!0,s.receiveShadow=!0,lt.forEach((e,t)=>{let n=11+kt/2;tg.set(0,Math.atan2(Math.cos(e),Math.sin(e)),0),ng.setFromEuler(tg),Qh.set(Math.cos(e)*n,0,Math.sin(e)*n),s.setMatrixAt(t,ig.compose(Qh,ng,$h))}),s.instanceMatrix.needsUpdate=!0,this.add(s)}placeScaled(t){let n=t.lie?void 0:Vh.get(t.model);if(n!==void 0){let e=this.place(t.model,t.x,t.y,n*t.scale,t.rot);return e.position.y+=t.h??0,e}let r=this.lib.instance(t.model);r.scale.setScalar(t.scale),r.rotation.order=`YXZ`,r.rotation.y=t.rot,t.lie&&(r.rotation.z=Math.PI/2),r.updateMatrixWorld(!0);let i=new e().setFromObject(r);return r.position.set(t.x,W(t.x,t.y)-i.min.y+(t.h??0),t.y),r.traverse(e=>{e instanceof L&&(e.castShadow=!0,e.receiveShadow=!0)}),r}dispose(){this.disposed=!0,this.disposeExtras();for(let e of this.added)this.scene.remove(e);this.added.length=0;for(let e of this.ownedGeos)e.dispose();this.ownedGeos.length=0;for(let e of this.ownedMats)e.dispose();this.ownedMats.length=0,this.flames.length=0,this.embers=null,this.motes=null,this.goldMotes=null,this.warnRims=null,this.hasLocal=!1,this.lastT=-1}static get throneCenter(){return{x:ot.x,y:ot.y,r:Qe.throne.radius}}},cg=null;function lg(){if(cg)return cg;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);if(!t)return cg=new an,cg;let n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,0.6)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),cg=new ft(e),cg}var ug={Q:`1`,W:`2`,E:`3`,R:`4`,DASH:`⇧`,JUMP:`␣`},dg=new Set([`DASH`,`JUMP`]),fg=10,pg=54,mg=6,hg=new Set([`stun`,`root`,`slow`,`dot`,`damageAmp`,`hex`]),gg=[`Dashing grants brief invulnerability`,`Buy items while standing at base`,`The throne pays bonus gold`,`The leader carries a 650g bounty`,`Grab coins where the golem throws`,`Green pads drop free items`,`Skeleton camps are safe gold`,`Hopping dodges skillshots`,`Heal fast inside your base`,`Kill streaks pay extra gold`];function _g(e){return`#`+e.toString(16).padStart(6,`0`)}var vg=class{view;fx;shop;root;plates=new Map;timerEl;goalEl;objCoinEl;objDropEl;boardEl;feedEl;toastEl;hpFill;hpGhostEl;hpTicksEl;hpText;xpFill;lvlBadge;lvlEl;goldEl;buffsEl;abilityEls=new Map;respawnEl;respawnSlain;respawnRing;respawnTimer;respawnTip;itemsEl;itemSockets=[];itemTaps=[];itemSig=``;minimap;mmCtx;shopEl;shopOpen=!1;endEl;shownEnd=!1;goalBanner;hintEl;introEl;reticleEl;hitDirEl;menuBtn;arrowCoin;arrowDelivery;lowHpEl;lowHpEl2;topEl;topBand=null;remeasureTopBand=()=>{this.topBand=null};online=!1;champBound=``;lastReadySoundAt=0;hpGhost=1;lastNow=0;lastLevel=0;lastMaxHp=0;lastHpStep=-1;lastGhostStep=-1;lastXpStep=-1;lastHpTextStr=``;lastHpTier=``;lastGoldStr=``;lastTimerStr=``;lastGoalStr=``;lastObjCoin=``;lastObjDrop=``;buffSeen=new Map;buffEls=new Map;buffSig=``;buffScratch=[];boardSig=``;boardForced=!1;boardTapped=!1;lastAttackSeen=0;fireUntil=0;hitFlashUntil=0;hitFlashCrit=!1;reticleVisible=!1;lastHitSeen=0;hitDirUntil=0;lastHitDirDeg=1e9;lastHitDirOp=-1;respawnShown=!1;respawnFor=0;lastRespawnText=``;lastRespawnPct=-1;lastRespawnCeil=-1;introText=``;hintText=``;lastBannerOp=``;menuBtnHidden=!1;bestStreak=0;lastMe=null;lastLowOp=-1;lastLowOp2=-1;hbPhase=-1;constructor(e,t,n){this.view=e,this.fx=t,this.shop=n,this.root=document.getElementById(`hud`),this.injectStyle(),this.build(),this.lowHpEl=document.createElement(`div`),this.lowHpEl.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:7;opacity:0;transition:opacity .15s;background:radial-gradient(ellipse at center, transparent 45%, rgba(190,20,20,0.85) 130%)`,document.body.appendChild(this.lowHpEl),this.lowHpEl2=document.createElement(`div`),this.lowHpEl2.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:7;opacity:0;transition:opacity .15s;box-shadow:inset 0 0 90px rgba(190,20,20,.55)`,document.body.appendChild(this.lowHpEl2)}get sfx(){return this.fx.audio}build(){this.root.innerHTML=`
      <div id="ba-plates"></div>
      <div id="ba-top">
        <div id="ba-timer">8:00</div>
        <div id="ba-goal"></div>
        <div id="ba-objective"><span class="coin"></span><span class="drop"></span></div>
      </div>
      <div id="ba-board"></div>
      <div id="ba-feed"></div>
      <button id="ba-menu-btn">HEROES ▸</button>
      <div id="ba-toasts"></div>
      <div id="ba-bottom">
        <div id="ba-buffs"></div>
        <div id="ba-vitals">
          <div id="ba-vrow">
            <div id="ba-lvlbadge"><span id="ba-lvl">1</span></div>
            <div class="ba-bar hp"><div id="ba-hpghost"></div><div id="ba-hpfill" class="hi"></div><div id="ba-ticks"></div><span id="ba-hptext"></span></div>
          </div>
          <div class="ba-bar xp"><div id="ba-xpfill"></div></div>
        </div>
        <div id="ba-abilities"></div>
        <div id="ba-items"></div>
        <div id="ba-meta"><span id="ba-gold">0</span></div>
      </div>
      <div id="ba-goal-banner"><b>REACH THE THRONE</b> · first to 25 kills</div>
      <div id="ba-hint"></div>
      <div id="ba-intro"></div>
      <div id="ba-arrow-coin" class="ba-arrow">◆</div>
      <div id="ba-arrow-delivery" class="ba-arrow">▲</div>
      <div id="ba-reticle"><i></i><i></i><i></i><i></i><b></b></div>
      <div id="ba-hitdir"></div>
      <div id="ba-respawn" hidden>
        <div class="ba-rtitle">YOU DIED</div>
        <div class="ba-rslain"></div>
        <div class="ba-rwrap"><div class="ba-rring"></div><div class="ba-rtimer"></div></div>
        <div class="ba-rtip"></div>
      </div>
      <canvas id="ba-minimap" width="150" height="132"></canvas>
      <div id="ba-shop" hidden></div>
      <div id="ba-end" hidden></div>`,this.timerEl=$(`ba-timer`),this.goalEl=$(`ba-goal`),this.topEl=$(`ba-top`),window.addEventListener(`resize`,this.remeasureTopBand);let e=$(`ba-objective`);this.objCoinEl=e.children[0]instanceof HTMLElement?e.children[0]:e,this.objDropEl=e.children[1]instanceof HTMLElement?e.children[1]:e,this.boardEl=$(`ba-board`),this.feedEl=$(`ba-feed`),this.toastEl=$(`ba-toasts`),this.hpFill=$(`ba-hpfill`),this.hpGhostEl=$(`ba-hpghost`),this.hpTicksEl=$(`ba-ticks`),this.hpText=$(`ba-hptext`),this.xpFill=$(`ba-xpfill`),this.lvlBadge=$(`ba-lvlbadge`),this.lvlEl=$(`ba-lvl`),this.goldEl=$(`ba-gold`),this.buffsEl=$(`ba-buffs`),this.respawnEl=$(`ba-respawn`),this.respawnSlain=xg(this.respawnEl,`.ba-rslain`),this.respawnRing=xg(this.respawnEl,`.ba-rring`),this.respawnTimer=xg(this.respawnEl,`.ba-rtimer`),this.respawnTip=xg(this.respawnEl,`.ba-rtip`),this.itemsEl=$(`ba-items`),this.minimap=$(`ba-minimap`),this.mmCtx=this.minimap.getContext(`2d`),this.shopEl=$(`ba-shop`),this.endEl=$(`ba-end`),this.goalBanner=$(`ba-goal-banner`),this.hintEl=$(`ba-hint`),this.introEl=$(`ba-intro`),this.reticleEl=$(`ba-reticle`),this.hitDirEl=$(`ba-hitdir`);let t=$(`ba-menu-btn`);this.menuBtn=t instanceof HTMLButtonElement?t:document.createElement(`button`),this.menuBtn.addEventListener(`click`,yg),this.arrowCoin={el:Sg(`ba-arrow-coin`),lastTf:``,on:!1},this.arrowDelivery={el:Sg(`ba-arrow-delivery`),lastTf:``,on:!1},window.addEventListener(`keydown`,e=>{if(e.code!==`KeyM`||e.repeat)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||this.sfx.setMuted(!this.sfx.isMuted)}),this.timerEl.addEventListener(`pointerdown`,e=>{e.preventDefault(),this.boardTapped=!this.boardTapped});let n=$(`ba-abilities`);for(let e of Ps){if(e===`DASH`){let e=document.createElement(`div`);e.className=`ba-abil-gap`,n.appendChild(e)}let t=dg.has(e),r=document.createElement(`div`);r.className=e===`R`?`ba-abil ult`:t?`ba-abil util`:`ba-abil`;let i=document.createElement(`img`);i.className=`ba-ic`,i.alt=``,i.draggable=!1;let a=document.createElement(`div`);a.className=`ba-cd`;let o=document.createElement(`div`);o.className=`ba-key`,o.textContent=ug[e];let s=document.createElement(`div`);s.className=`ba-cdtext`;let c=document.createElement(`div`);c.className=`ba-pips`,r.append(i,a,o,s,c),n.appendChild(r),this.abilityEls.set(e,{wrap:r,img:i,cdText:s,pips:c,lastCd:-1,lastRank:-1,wasOnCd:!1,lastText:``})}for(let e=0;e<6;e++){let t=document.createElement(`div`);t.className=`ba-item-chip empty`;let n=document.createElement(`img`);n.className=`ba-ii`,n.alt=``,n.draggable=!1;let r=document.createElement(`span`);r.className=`ba-ik`,r.textContent=this.ITEM_KEYS[e]??``;let i=document.createElement(`div`);i.className=`ba-icd`,t.append(n,r,i);let a=e;t.addEventListener(`pointerdown`,e=>{e.preventDefault(),this.itemTaps.push(a)}),this.itemsEl.appendChild(t),this.itemSockets.push({chip:t,img:n,cd:i,lastPct:-1,lastText:``,lastRdy:!1})}this.buildShop()}buildShop(){let e=zc.map(e=>`<button class="ba-item${e.active?` active-item`:``}" data-id="${e.id}"><img class="ba-si" src="${Es(e.icon)}" alt="" draggable="false"><span class="ba-icol"><span class="ba-iname">${e.name}</span><span class="ba-idesc">${e.desc}</span></span><span class="ba-icost">${e.cost}g</span></button>`).join(``);this.shopEl.innerHTML=`<div class="ba-shop-head">SHOP <span class="ba-shop-hint">(B to close · only in base)</span></div><div class="ba-shop-grid">${e}</div>`,this.shopEl.querySelectorAll(`.ba-item`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.id;if(!t)return;let n=Bc[t],r=this.lastMe;n&&r&&r.gold>=n.cost&&r.items.length<6?this.sfx.uiBuy():this.sfx.uiDeny(),this.shop.buy(t)})})}consumeItemTaps(){if(this.itemTaps.length===0)return this.itemTaps;let e=this.itemTaps;return this.itemTaps=[],e}toggleShop(){this.shopOpen=!this.shopOpen,this.shopEl.hidden=!this.shopOpen,this.shopOpen?this.sfx.uiOpen():this.sfx.uiClose()}get isShopOpen(){return this.shopOpen}showIntro(e){if(e===this.introText)return;this.introText=e;let t=this.introEl;if(e===``){t.classList.remove(`show`);return}t.textContent=e,t.classList.toggle(`fight`,e===`FIGHT!`),t.classList.toggle(`small`,e.length>6),t.classList.add(`show`),t.classList.remove(`pop`),t.offsetWidth,t.classList.add(`pop`)}showHint(e){e!==this.hintText&&(this.hintText=e,e===``?this.hintEl.classList.remove(`show`):(this.hintEl.textContent=e,this.hintEl.classList.add(`show`)))}update(e,t,n=!1){this.lastMe=t,t.killStreak>this.bestStreak&&(this.bestStreak=t.killStreak),this.updateLowHp(e,t),this.updatePlates(e,t),this.updateVitals(e,t),this.updateAbilities(e,t),this.updateItems(e,t),this.updateBuffs(e,t),this.updateTop(e),this.updateBoard(e,t,n||this.boardTapped),this.updateRespawn(e,t),this.updateGoalBanner(e),this.updateMenuBtn(e),this.updateReticle(e,t),this.updateHitDir(e,t),this.updateArrows(e),this.drawMinimap(e,t),this.drainFeed(e),this.updateShop(t),this.updateEnd(e,t),this.lastNow=e.now}dispose(){window.removeEventListener(`resize`,this.remeasureTopBand),this.lowHpEl.remove(),this.lowHpEl2.remove()}updateLowHp(e,t){let n=t.alive?t.hp/Math.max(1,t.maxHp):1,r=0,i=0;if(n<.35){let t=(.35-n)/.35*.55;if(r=t,n<.2){let n=Math.sin(e.now*.006);r=t*(.8+.2*n),i=t*(.8-.2*n);let a=Math.floor(e.now/900);a!==this.hbPhase&&(this.hbPhase=a,this.sfx.heartbeat())}}let a=Math.round(r*100);a!==this.lastLowOp&&(this.lastLowOp=a,this.lowHpEl.style.opacity=(a/100).toFixed(2));let o=Math.round(i*100);o!==this.lastLowOp2&&(this.lastLowOp2=o,this.lowHpEl2.style.opacity=(o/100).toFixed(2))}drawMinimap(e,t){let n=this.mmCtx,r=this.minimap.width,i=this.minimap.height,a=r/2,o=i/2,s=(r/2-5)/62,c=(e,t)=>[a+e*s,o+t*s],l=e=>{n.beginPath();for(let t=0;t<6;t++){let r=t*Math.PI/3,i=a+Math.cos(r)*e,s=o+Math.sin(r)*e;t===0?n.moveTo(i,s):n.lineTo(i,s)}n.closePath()};n.clearRect(0,0,r,i);let u=r/2-3;l(u),n.fillStyle=`rgba(14,18,28,0.78)`,n.fill(),n.strokeStyle=`rgba(120,140,180,0.5)`,n.lineWidth=1.5,n.stroke(),l(u),n.strokeStyle=`rgba(255,210,74,0.4)`,n.lineWidth=2,n.stroke(),n.strokeStyle=`rgba(255,210,74,0.5)`;for(let e=0;e<6;e++){let t=e*Math.PI/3,r=Math.cos(t),i=Math.sin(t);n.beginPath(),n.moveTo(a+r*(u-7),o+i*(u-7)),n.lineTo(a+r*(u-1),o+i*(u-1)),n.stroke()}n.save(),l(u),n.clip();let[d,f]=c(Qe.throne.x,Qe.throne.y);n.beginPath(),n.arc(d,f,Qe.throne.radius*s,0,Math.PI*2),n.strokeStyle=`rgba(255,210,74,0.7)`,n.lineWidth=2,n.stroke(),n.beginPath(),n.arc(d,f,Qe.throne.radius*s+2,0,Math.PI*2),n.strokeStyle=`rgba(255,210,74,0.25)`,n.lineWidth=1,n.stroke(),n.fillStyle=`rgba(120,120,140,0.45)`;for(let e of H){let[t,r]=c(e.x,e.y);n.fillRect(t-1.5,r-1.5,3,3)}for(let t of e.deliveries){let[e,r]=c(t.x,t.y);n.fillStyle=`#66ffcc`,n.fillRect(e-2.5,r-2.5,5,5)}for(let t of e.coins){let[e,r]=c(t.x,t.y);n.beginPath(),n.arc(e,r,2.5,0,Math.PI*2),n.fillStyle=`#ffd24a`,n.fill()}for(let r of e.units.values()){if(r.kind!==`hero`||!r.alive)continue;let[i,a]=c(r.x,r.y),o=r.id===t.id;if(n.beginPath(),n.arc(i,a,o?3.5:3,0,Math.PI*2),n.fillStyle=_g(o?Bt:Tt(r.team)),n.fill(),e.leaderId===r.team&&(n.strokeStyle=`#ffd24a`,n.lineWidth=1.5,n.stroke()),o){let e=Math.atan2(r.aimX,r.aimY);n.beginPath(),n.moveTo(i+Math.sin(e)*8,a+Math.cos(e)*8),n.lineTo(i+Math.sin(e+2.5)*4,a+Math.cos(e+2.5)*4),n.lineTo(i+Math.sin(e-2.5)*4,a+Math.cos(e-2.5)*4),n.closePath(),n.fillStyle=_g(Bt),n.fill()}}n.restore()}hitsTopBand(e,t){let n=this.topBand??=this.topEl.getBoundingClientRect();return e+pg>n.left-mg&&e-pg<n.right+mg&&t+fg>n.top-mg&&t-fg<n.bottom+mg}updatePlates(e,t){let n=new Set;for(let r of e.units.values()){if(r.kind!==`hero`&&r.kind!==`creep`||!r.alive||r.statuses.some(e=>e.kind===`stealth`)&&r.id!==t.id||r.kind===`creep`&&(r.x-t.x)**2+(r.y-t.y)**2>484)continue;n.add(r.id);let e=this.plates.get(r.id);if(!e){let n=document.createElement(`div`);n.className=`ba-plate`+(r.kind===`creep`?` creep`:``);let i=r.id===t.id;n.innerHTML=`<div class="ba-pname" style="color:${r.kind===`creep`?`#b8c0d0`:_g(i?Bt:Tt(r.team))}">${r.kind===`creep`?``:r.name}</div><div class="ba-php"><div class="ba-phpfill" style="background:${r.kind===`creep`?`#c8a0a0`:r.team===t.team?`#5dd66b`:`#ff5a52`}"></div></div>`,$(`ba-plates`).appendChild(n),e={wrap:n,fill:n.querySelector(`.ba-phpfill`),name:n.querySelector(`.ba-pname`)},this.plates.set(r.id,e)}let i=this.view.worldToScreen(r.x,r.y),a=i.y-56;i.visible&&!this.hitsTopBand(i.x,a)?(e.wrap.style.display=`block`,e.wrap.style.left=`${i.x}px`,e.wrap.style.top=`${a}px`,e.fill.style.width=`${Math.max(0,r.hp/r.maxHp*100)}%`):e.wrap.style.display=`none`}for(let[e,t]of this.plates)n.has(e)||(t.wrap.remove(),this.plates.delete(e))}updateVitals(e,t){let n=Math.max(0,Math.min(1,t.hp/Math.max(1,t.maxHp))),r=Math.min(.1,Math.max(0,(e.now-this.lastNow)/1e3));this.hpGhost=n>=this.hpGhost?n:Math.max(n,this.hpGhost-r*.4);let i=Math.round(n*500);i!==this.lastHpStep&&(this.lastHpStep=i,this.hpFill.style.width=`${(i/5).toFixed(1)}%`);let a=n>=.55?`hi`:n>=.3?`mid`:`low`;a!==this.lastHpTier&&(this.lastHpTier=a,this.hpFill.classList.remove(`hi`,`mid`,`low`),this.hpFill.classList.add(a));let o=Math.round(this.hpGhost*200);o!==this.lastGhostStep&&(this.lastGhostStep=o,this.hpGhostEl.style.width=`${(o/2).toFixed(1)}%`);let s=`${Math.max(0,Math.ceil(t.hp))} / ${Math.ceil(t.maxHp)}`;s!==this.lastHpTextStr&&(this.lastHpTextStr=s,this.hpText.textContent=s),t.maxHp!==this.lastMaxHp&&(this.lastMaxHp=t.maxHp,this.hpTicksEl.style.backgroundSize=`${250/Math.max(1,t.maxHp)*100}% 100%`);let c=x[t.level-1]??0,l=x[t.level]??c+1,u=t.level>=12?1:Math.max(0,Math.min(1,(t.xp-c)/Math.max(1,l-c))),d=Math.round(u*200);if(d!==this.lastXpStep&&(this.lastXpStep=d,this.xpFill.style.width=`${(d/2).toFixed(1)}%`),t.level!==this.lastLevel){let e=this.lastLevel===0;this.lastLevel=t.level,this.lvlEl.textContent=`${t.level}`,e||(this.lvlBadge.classList.remove(`lvlup`),this.lvlBadge.offsetWidth,this.lvlBadge.classList.add(`lvlup`))}let f=`${Math.floor(t.gold)}g`;f!==this.lastGoldStr&&(this.lastGoldStr=f,this.goldEl.textContent=f)}updateAbilities(e,t){let n=Ec[t.champId];if(n){if(t.champId!==this.champBound){this.champBound=t.champId;for(let e of Ps){let n=this.abilityEls.get(e);n.img.src=Os(t.champId,e),n.lastRank=-1}}for(let r of Ps){let i=this.abilityEls.get(r),a=t.abilities[r],o=n.abilities[r],s=dg.has(r);if(!s&&a.rank!==i.lastRank){i.lastRank=a.rank;let e=``;for(let t=0;t<o.maxRank;t++)e+=t<a.rank?`<i class='on'></i>`:`<i></i>`;i.pips.innerHTML=e}if(!s&&a.rank<1){i.wrap.classList.add(`locked`),i.lastCd!==0&&(i.lastCd=0,i.wrap.style.setProperty(`--cd`,`0`));let e=r===`R`?`Lv4`:``;e!==i.lastText&&(i.lastText=e,i.cdText.textContent=e),i.wasOnCd=!1;continue}i.wrap.classList.remove(`locked`);let c=Math.max(0,(a.readyAt-e.now)/1e3),l=Math.max(.01,Cc(o.cooldown,s?1:a.rank)),u=c>0?Math.min(1,c/l):0,d=Math.round(u*100);d!==i.lastCd&&(i.lastCd=d,i.wrap.style.setProperty(`--cd`,`${d}`)),i.wrap.classList.toggle(`oncd`,u>0),i.wasOnCd&&u===0&&(i.wrap.classList.remove(`ready`),i.wrap.offsetWidth,i.wrap.classList.add(`ready`),e.now-this.lastReadySoundAt>150&&(this.lastReadySoundAt=e.now,this.sfx.abilityReady())),i.wasOnCd=u>0;let f=c>0?c<10?c.toFixed(1):`${Math.ceil(c)}`:``;f!==i.lastText&&(i.lastText=f,i.cdText.textContent=f)}}}ITEM_KEYS=[`5`,`6`,`7`,`8`,`9`,`0`];updateItems(e,t){let n=t.items.join(`,`);if(n!==this.itemSig){this.itemSig=n;for(let e=0;e<6;e++){let n=this.itemSockets[e],r=t.items[e],i=r?Bc[r]:void 0;i?(n.chip.className=`ba-item-chip${i.active?` active`:``}`,n.img.src=Es(i.icon)):n.chip.className=`ba-item-chip empty`,n.lastPct=-1,n.lastText=``,n.lastRdy=!1,n.cd.style.height=`0`,n.cd.textContent=``}}for(let n=0;n<6;n++){let r=t.items[n];if(!r)continue;let i=Bc[r];if(!i?.active)continue;let a=this.itemSockets[n],o=Math.max(0,((t.itemReadyAt[r]??0)-e.now)/1e3),s=i.active.cooldown>0?Math.round(Math.min(1,o/i.active.cooldown)*100):0;s!==a.lastPct&&(a.lastPct=s,a.cd.style.height=`${s}%`);let c=o>0?o.toFixed(0):``;c!==a.lastText&&(a.lastText=c,a.cd.textContent=c);let l=o<=0;l!==a.lastRdy&&(a.lastRdy=l,a.chip.classList.toggle(`rdy`,l))}}updateBuffs(e,t){let n=this.buffScratch;n.length=0;for(let r of t.statuses){if(r.until<=e.now||Ms(r.kind)===null&&r.kind!==`hex`)continue;let t=n.find(e=>e.kind===r.kind);t?t.until=Math.max(t.until,r.until):n.push({kind:r.kind,until:r.until})}t.empowerNext>0&&n.push({kind:`empower`,until:-1});for(let t of n){if(t.until<0)continue;let n=this.buffSeen.get(t.kind);(!n||t.until>n.until)&&this.buffSeen.set(t.kind,{seenAt:e.now,until:t.until})}for(let e of this.buffSeen.keys())n.some(t=>t.kind===e)||this.buffSeen.delete(e);let r=``;for(let e of n)r+=e.kind+`|`;if(r!==this.buffSig){this.buffSig=r,this.buffsEl.textContent=``,this.buffEls.clear();for(let e of n){let t=document.createElement(`div`);t.className=hg.has(e.kind)?`ba-buff debuff`:`ba-buff`;let n=Ms(e.kind);if(n!==null){let e=document.createElement(`img`);e.src=n,e.alt=``,e.draggable=!1,t.appendChild(e)}else{let e=document.createElement(`span`);e.className=`ba-bglyph`,e.textContent=`🍄`,t.appendChild(e)}let r=document.createElement(`i`);r.className=`ring`;let i=document.createElement(`b`);t.append(r,i),this.buffsEl.appendChild(t),this.buffEls.set(e.kind,{ring:r,sec:i,lastT:-1,lastSec:``})}}for(let t of n){let n=this.buffEls.get(t.kind);if(!n)continue;let r=100,i=``;if(t.until>=0){let n=this.buffSeen.get(t.kind),a=n?Math.max(1,t.until-n.seenAt):1,o=Math.max(0,t.until-e.now);r=Math.round(Math.min(1,o/a)*100);let s=o/1e3;i=s>=1?`${Math.ceil(s)}`:``}r!==n.lastT&&(n.lastT=r,n.ring.style.setProperty(`--t`,`${r}`)),i!==n.lastSec&&(n.lastSec=i,n.sec.textContent=i)}}updateTop(e){let t=Math.max(0,e.matchTime-e.gameTime),n=`${Math.floor(t/60)}:${Math.floor(t%60).toString().padStart(2,`0`)}`;n!==this.lastTimerStr&&(this.lastTimerStr=n,this.timerEl.textContent=n,this.timerEl.classList.toggle(`low`,t<30));let r=e.suddenDeath?`SUDDEN DEATH`:`FIRST TO ${e.killGoal}`;r!==this.lastGoalStr&&(this.lastGoalStr=r,this.goalEl.textContent=r);let i=``,a=!1;e.coins.length>0?(i=`◈ COIN LIVE`,a=!0):e.boss.alive&&e.nextCoinAt>e.gameTime&&(i=`◈ COIN ${Math.ceil(e.nextCoinAt-e.gameTime)}s`),i!==this.lastObjCoin&&(this.lastObjCoin=i,this.objCoinEl.textContent=i,this.objCoinEl.className=a?`coin live`:`coin`);let o=``,s=!1;e.deliveries.length>0?(o=`▣ DROP LIVE`,s=!0):e.nextDeliveryAt>e.gameTime&&(o=`▣ DROP ${Math.ceil(e.nextDeliveryAt-e.gameTime)}s`),o!==this.lastObjDrop&&(this.lastObjDrop=o,this.objDropEl.textContent=o,this.objDropEl.className=s?`drop live`:`drop`)}updateBoard(e,t,n){n!==this.boardForced&&(this.boardForced=n,this.boardEl.classList.toggle(`force`,n));let r=[...e.units.values()].filter(e=>e.kind===`hero`).sort((e,t)=>t.kills-e.kills||t.gold-e.gold).slice(0,6),i=n?`x`:`-`;for(let e of r)i+=`${e.id}:${e.kills}/${e.deaths}/${e.assists}/${Math.floor(e.gold)}/${e.items.length};`;i!==this.boardSig&&(this.boardSig=i,this.boardEl.innerHTML=r.map(r=>{let i=r.id===t.id?_g(Bt):_g(Tt(r.team)),a=e.leaderId===r.team?`★`:``,o=n?`${r.kills}/${r.deaths}/${r.assists}`:`${r.kills}/${r.deaths}`,s=n?`<span class="ba-rg">${Math.floor(r.gold)}g</span><span class="ba-ri">${r.items.length} it</span>`:``;return`<div class="ba-row${r.id===t.id?` me`:``}${n?` x`:``}"><span class="ba-dot" style="background:${i}"></span><span class="ba-rn">${a}${r.name}</span><span class="ba-rk">${o}</span>${s}</div>`}).join(``))}updateRespawn(e,t){if(!t.alive&&t.respawnAt>0){let n=Math.max(0,(t.respawnAt-e.now)/1e3);this.respawnShown||(this.respawnShown=!0,this.respawnEl.hidden=!1),this.respawnFor!==t.respawnAt&&(this.respawnFor=t.respawnAt,this.respawnSlain.textContent=`Slain by ${this.fx.lastDeath?.killerName??`the arena`}`,this.respawnTip.textContent=`TIP: ${gg[t.deaths%gg.length]}`,this.lastRespawnCeil=-1);let r=Math.max(.1,v(t.level)),i=Math.round(Math.min(1,Math.max(0,1-n/r))*100);i!==this.lastRespawnPct&&(this.lastRespawnPct=i,this.respawnRing.style.setProperty(`--cd`,`${i}`));let a=`${n.toFixed(1)}s`;a!==this.lastRespawnText&&(this.lastRespawnText=a,this.respawnTimer.textContent=a);let o=Math.ceil(n);o!==this.lastRespawnCeil&&(this.lastRespawnCeil=o,o>=1&&o<=3&&this.sfx.respawnTick())}else this.respawnShown&&(this.respawnShown=!1,this.respawnEl.hidden=!0,t.alive&&this.sfx.respawnGo())}updateGoalBanner(e){let t=e.gameTime,n=t<8?`1`:t<10?((10-t)/2).toFixed(2):`0`;n!==this.lastBannerOp&&(this.lastBannerOp=n,this.goalBanner.style.opacity=n)}updateMenuBtn(e){let t=this.online||e.gameTime>20;t!==this.menuBtnHidden&&(this.menuBtnHidden=t,this.menuBtn.hidden=t)}updateReticle(e,t){let n=document.body.classList.contains(`ba-touch-on`),r=t.alive&&!this.shopOpen&&(n||document.pointerLockElement!==null);if(r!==this.reticleVisible&&(this.reticleVisible=r,this.reticleEl.classList.toggle(`show`,r)),!r)return;t.lastAttackAt===this.lastAttackSeen?this.fireUntil>0&&e.now>=this.fireUntil&&(this.fireUntil=0,this.reticleEl.classList.remove(`fire`)):(this.lastAttackSeen=t.lastAttackAt,this.fireUntil=e.now+120,this.reticleEl.classList.add(`fire`));let i=this.fx.localHits;if(i&&i.length>0){let t=!1;for(let e of i)t||=e.crit;i.length=0,this.hitFlashUntil=e.now+150,this.hitFlashCrit=t,this.reticleEl.classList.toggle(`hit`,!t),this.reticleEl.classList.toggle(`hitcrit`,t)}else this.hitFlashUntil>0&&e.now>=this.hitFlashUntil&&(this.hitFlashUntil=0,this.reticleEl.classList.remove(`hit`,`hitcrit`))}updateHitDir(e,t){if(t.alive&&t.lastHitAt>0&&t.lastHitAt!==this.lastHitSeen){this.lastHitSeen=t.lastHitAt,this.hitDirUntil=e.now+600;let n=this.view.worldToScreen(t.x,t.y),r=this.view.worldToScreen(t.x-t.lastHitDx*4,t.y-t.lastHitDy*4),i=Math.atan2(r.y-n.y,r.x-n.x),a=Math.round(i*180/Math.PI+90);a!==this.lastHitDirDeg&&(this.lastHitDirDeg=a,this.hitDirEl.style.setProperty(`--a`,`${a}deg`))}let n=this.hitDirUntil-e.now,r=n>0?n/600*.9:0,i=Math.round(r*50);i!==this.lastHitDirOp&&(this.lastHitDirOp=i,this.hitDirEl.style.opacity=(i/50).toFixed(2))}updateArrows(e){let t=e.coins.length>0?e.coins[0]:void 0;this.placeArrow(this.arrowCoin,t?.x,t?.y);let n=e.deliveries.length>0?e.deliveries[0]:void 0;this.placeArrow(this.arrowDelivery,n?.x,n?.y)}placeArrow(e,t,n){if(t===void 0||n===void 0){e.on&&(e.on=!1,e.el.classList.remove(`on`));return}let r=window.innerWidth,i=window.innerHeight,a=this.view.worldToScreen(t,n),o=!a.visible&&a.x===0&&a.y===0;if(a.visible&&a.x>=0&&a.x<=r&&a.y>=0&&a.y<=i){e.on&&(e.on=!1,e.el.classList.remove(`on`));return}let s=o?r/2:Math.max(40,Math.min(r-40,a.x)),c=o?i-40:Math.max(40,Math.min(i-40,a.y)),l=o?180:Math.round(Math.atan2(c-i/2,s-r/2)*180/Math.PI+90),u=`translate(${Math.round(s)}px,${Math.round(c)}px) translate(-50%,-50%) rotate(${l}deg)`;u!==e.lastTf&&(e.lastTf=u,e.el.style.transform=u),e.on||(e.on=!0,e.el.classList.add(`on`))}drainFeed(e){for(;this.fx.feed.length;){let t=this.fx.feed.shift(),n=document.createElement(`div`);n.className=`ba-kill`+(t.leader?` leader`:``);let r=e.units.get(t.killer),i=e.units.get(t.victim),a=`<img class="ba-kw" src="${ks(r?.attackKind??`melee`)}" alt="">`;n.innerHTML=`${bg(r)}<b>${t.killerName}</b>${a}${bg(i)}<span>${t.victimName}</span>`,this.feedEl.appendChild(n),setTimeout(()=>n.remove(),5e3);let o=window.innerWidth<720?3:5;for(;this.feedEl.childElementCount>o;)this.feedEl.firstElementChild?.remove()}for(;this.fx.toasts.length;){let e=this.fx.toasts.shift(),t=document.createElement(`div`);t.className=`ba-toast `+e.kind,t.textContent=e.text,this.toastEl.appendChild(t),setTimeout(()=>t.remove(),e.kind===`leader`?3600:2400)}}updateShop(e){let t=this.shop.canShop();this.shopOpen&&!t&&this.toggleShop(),this.shopOpen&&this.shopEl.querySelectorAll(`.ba-item`).forEach(t=>{let n=Bc[t.dataset.id??``],r=e.items.length>=6,i=n?e.gold>=n.cost:!1;t.classList.toggle(`afford`,i&&!r),t.disabled=!i||r})}updateEnd(e,t){if(e.phase!==`ended`||!e.winner){this.shownEnd&&(this.shownEnd=!1,this.endEl.hidden=!0);return}if(this.shownEnd)return;this.shownEnd=!0;let n=e.winner===t.team,r=[...e.units.values()].find(t=>t.team===e.winner),i=0;try{i=Number(localStorage.getItem(`ba-best-kills`)??`0`)||0}catch{}let a=t.kills>i;if(a)try{localStorage.setItem(`ba-best-kills`,`${t.kills}`)}catch{}let o=r&&r.kind===`hero`&&r.champId?`<img class="ba-es" src="${As(r.champId)}" alt="">`:``;if(this.endEl.hidden=!1,this.endEl.innerHTML=`
      <div class="ba-end-card">
        <div class="ba-end-title ${n?`win`:`loss`}">${n?`VICTORY`:`DEFEAT`}</div>
        <div class="ba-end-sub">${o}${r?.name??`Someone`} takes the arena</div>
        <div class="ba-end-stats">
          <span><b>${t.kills}</b>K</span><span><b>${t.deaths}</b>D</span><span><b>${t.assists}</b>A</span>
          <span><b>${Math.floor(t.gold)}</b>g</span><span><b>${t.level}</b>Lv</span><span><b>${Math.max(this.bestStreak,t.killStreak)}</b>streak</span>
        </div>
        <div class="ba-end-best${a?` nb`:``}">${a?`NEW BEST!`:`BEST: ${Math.max(i,t.kills)}`}</div>
        <div class="ba-end-btns"><button class="ba-end-btn" data-act="again">PLAY AGAIN</button><button class="ba-end-btn alt" data-act="hero">CHANGE HERO</button></div>
      </div>`,this.endEl.querySelectorAll(`.ba-end-btn`).forEach(e=>{e.addEventListener(`click`,()=>{e.dataset.act===`hero`?yg():location.reload()})}),n&&r){let e=this.fx,t=r.x,n=r.y;[16765514,7077774,10473727].forEach((r,i)=>{setTimeout(()=>e.fountain(t,n,16,r),i*200)})}}injectStyle(){let e=document.createElement(`style`);e.textContent=Cg,document.head.appendChild(e)}};function $(e){return document.getElementById(e)}function yg(){location.search=Rn()?`?menu&offline=1`:`?menu`}function bg(e){return e&&e.kind===`hero`&&e.champId?`<img class="ba-ks" src="${As(e.champId)}" alt="">`:``}function xg(e,t){let n=e.querySelector(t);return n instanceof HTMLElement?n:e}function Sg(e){let t=$(e);return t instanceof HTMLDivElement?t:document.createElement(`div`)}var Cg=`
[hidden]{display:none!important}
#ba-plates{position:absolute;inset:0}
.ba-plate{position:absolute;transform:translate(-50%,-50%);text-align:center;pointer-events:none;will-change:left,top}
.ba-pname{font:700 12px ui-monospace,monospace;text-shadow:0 1px 2px #000;white-space:nowrap}
.ba-php{width:54px;height:5px;margin:2px auto 0;background:rgba(0,0,0,.6);border-radius:3px;overflow:hidden}
.ba-phpfill{height:100%;width:100%;transition:width .12s}
#ba-top{position:fixed;top:calc(12px + env(safe-area-inset-top));left:50%;transform:translateX(-50%);text-align:center;pointer-events:none}
#ba-timer{font:800 40px ui-monospace,monospace;color:#ffd24a;text-shadow:0 3px 0 rgba(0,0,0,.5);line-height:1;font-variant-numeric:tabular-nums;pointer-events:auto;cursor:pointer;touch-action:none}
#ba-timer.low{color:#ff5a52}
#ba-goal{font:700 12px ui-monospace,monospace;letter-spacing:2px;opacity:.8;margin-top:4px;text-shadow:0 2px 5px rgba(0,0,0,.9)}
#ba-objective{display:flex;gap:14px;justify-content:center;margin-top:5px;font:700 11px ui-monospace,monospace;letter-spacing:1px;opacity:.85;font-variant-numeric:tabular-nums}
#ba-objective .coin{color:#ffd24a}
#ba-objective .drop{color:#6bffcc}
#ba-objective .live{animation:ba-obj .8s infinite alternate}
@keyframes ba-obj{from{opacity:.6}to{opacity:1}}
#ba-board{position:fixed;top:calc(12px + env(safe-area-inset-top));left:calc(12px + env(safe-area-inset-left));display:flex;flex-direction:column;gap:3px;pointer-events:none}
.ba-row{display:flex;align-items:center;gap:7px;background:rgba(12,16,26,.6);border-radius:6px;padding:3px 9px 3px 6px;font:700 13px ui-monospace,monospace;min-width:150px}
.ba-row.x{min-width:230px}
.ba-row.me{outline:1px solid rgba(70,224,255,.6)}
.ba-dot{width:9px;height:9px;border-radius:50%;flex:0 0 auto}
.ba-rn{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ba-rk{font-variant-numeric:tabular-nums;opacity:.9}
.ba-rg{font-variant-numeric:tabular-nums;color:#ffd24a}
.ba-ri{font-variant-numeric:tabular-nums;opacity:.65;font-size:11px}
#ba-feed{position:fixed;top:calc(12px + env(safe-area-inset-top));right:calc(12px + env(safe-area-inset-right));display:flex;flex-direction:column;gap:3px;align-items:flex-end;pointer-events:none}
.ba-kill{display:flex;align-items:center;gap:5px;background:rgba(12,16,26,.6);border-radius:6px;padding:3px 9px;font:600 12px ui-monospace,monospace;animation:ba-in .2s}
.ba-kill b{color:#ffd24a}
.ba-kill.leader{outline:1px solid #ffd24a;color:#ffd24a}
.ba-ks{width:16px;height:16px;border-radius:4px;border:1px solid rgba(255,255,255,.3)}
.ba-kw{width:13px;height:13px;opacity:.8}
#ba-menu-btn{position:fixed;top:calc(148px + env(safe-area-inset-top));right:calc(64px + env(safe-area-inset-right));height:44px;padding:0 12px;pointer-events:auto;background:rgba(12,16,26,.75);border:1px solid rgba(255,210,74,.4);border-radius:8px;color:#ffd24a;font:800 12px ui-monospace,monospace;letter-spacing:1px;cursor:pointer;z-index:6}
#ba-menu-btn:hover{background:rgba(255,210,74,.15)}
#ba-toasts{position:fixed;top:24%;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;gap:6px;align-items:center;pointer-events:none}
.ba-toast{font:800 italic 24px system-ui,sans-serif;letter-spacing:1px;text-shadow:0 2px 8px #000;animation:ba-pop .3s}
.ba-toast.leader{color:#ff5a52}
.ba-toast.delivery{color:#6bffcc}
.ba-toast.streak{color:#ffb13b}
.ba-toast.matchend{color:#ffd24a;font-size:30px}
#ba-bottom{position:fixed;bottom:calc(14px + env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;pointer-events:none}
#ba-buffs{display:flex;gap:5px;min-height:26px}
.ba-buff{position:relative;width:26px;height:26px;border-radius:6px;overflow:hidden;border:1px solid rgba(107,255,142,.7);background:rgba(10,14,24,.7)}
.ba-buff.debuff{border-color:rgba(255,90,82,.8)}
.ba-buff img{position:absolute;inset:0;width:100%;height:100%}
.ba-buff .ba-bglyph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:15px}
.ba-buff .ring{position:absolute;inset:0;background:conic-gradient(transparent calc(var(--t,100)*1%),rgba(5,8,16,.7) 0)}
.ba-buff b{position:absolute;bottom:0;right:1px;font:800 9px ui-monospace,monospace;color:#fff;text-shadow:0 1px 2px #000;font-variant-numeric:tabular-nums}
#ba-vitals{display:flex;flex-direction:column;gap:0;width:340px}
#ba-vrow{display:flex;gap:8px;align-items:center}
#ba-lvlbadge{width:30px;height:30px;flex:0 0 auto;transform:rotate(45deg);background:#101526;border:2px solid #ffd24a;border-radius:7px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 10px -3px rgba(255,210,74,.7)}
#ba-lvlbadge span{transform:rotate(-45deg);font:800 13px ui-monospace,monospace;color:#ffd24a}
#ba-lvlbadge.lvlup{animation:ba-lvlup .6s}
@keyframes ba-lvlup{30%{transform:rotate(45deg) scale(1.35);box-shadow:0 0 22px rgba(255,210,74,.9)}}
.ba-bar{position:relative;background:rgba(0,0,0,.55);border-radius:5px;overflow:hidden}
.ba-bar.hp{flex:1;height:20px;border:1px solid rgba(255,255,255,.25);border-radius:6px;background:rgba(0,0,0,.6)}
#ba-hpghost{position:absolute;inset:0;width:100%;background:#ff8f6a;opacity:.7}
#ba-hpfill{position:absolute;inset:0;width:100%;transition:none}
#ba-hpfill.hi{background:linear-gradient(180deg,#8df59d,#3fbf55 45%,#2e9440)}
#ba-hpfill.mid{background:linear-gradient(180deg,#ffe08a,#e8a93d 45%,#b97f22)}
#ba-hpfill.low{background:linear-gradient(180deg,#ff9a8a,#e04a3a 45%,#a82f22)}
#ba-ticks{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.5) 1px,transparent 1px) repeat-x}
.ba-bar.hp span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:700 11px ui-monospace,monospace;text-shadow:0 1px 1px #000;font-variant-numeric:tabular-nums}
.ba-bar.xp{height:5px;border-radius:3px;margin-top:3px;background:rgba(0,0,0,.55)}
#ba-xpfill{height:100%;width:0;background:linear-gradient(90deg,#b98a1e,#ffd24a);border-radius:3px}
#ba-abilities{display:flex;gap:8px;align-items:flex-end}
.ba-abil{position:relative;width:56px;height:56px;background:#0c101c;border:2px solid rgba(255,255,255,.22);border-radius:11px;overflow:hidden;box-shadow:0 3px 0 rgba(0,0,0,.45),inset 0 0 0 1px rgba(0,0,0,.6)}
.ba-abil.ult{width:62px;height:62px;border-color:rgba(255,210,74,.55)}
.ba-abil.util{width:44px;height:44px;border-color:rgba(150,200,255,.4)}
.ba-abil-gap{width:10px;flex:0 0 auto}
.ba-abil .ba-ic{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ba-abil.oncd .ba-ic{filter:saturate(.3) brightness(.55)}
.ba-abil.locked .ba-ic{filter:grayscale(1) brightness(.4)}
.ba-abil.locked{opacity:.6}
.ba-cd{position:absolute;inset:0;background:conic-gradient(rgba(5,8,16,.85) calc(var(--cd,0)*1%),transparent 0)}
.ba-key{position:absolute;top:2px;left:2px;padding:1px 5px;border-radius:5px 0 6px 0;background:rgba(5,8,16,.85);font:800 12px ui-monospace,monospace;color:#ffd24a;text-shadow:none}
.ba-cdtext{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:800 18px ui-monospace,monospace;color:#fff;text-shadow:0 2px 3px #000;font-variant-numeric:tabular-nums}
.ba-pips{position:absolute;bottom:3px;left:0;right:0;display:flex;gap:3px;justify-content:center}
.ba-pips i{width:5px;height:5px;border-radius:1px;background:rgba(255,255,255,.25)}
.ba-pips i.on{background:#ffd24a;box-shadow:0 0 4px #ffd24a}
.ba-abil.ready{animation:ba-ready .4s}
@keyframes ba-ready{0%{box-shadow:0 0 0 0 rgba(255,210,74,.9)}100%{box-shadow:0 0 0 14px rgba(255,210,74,0)}}
/* MOUSE mode (menus own the cursor): swap the gameplay crosshair for a pointer */
body.ba-mouse-mode canvas{cursor:default}
#ba-items{display:flex;gap:5px;min-height:2px}
.ba-item-chip{position:relative;width:40px;height:40px;background:rgba(18,22,34,.8);border:1px solid rgba(255,255,255,.16);border-radius:7px;overflow:hidden;pointer-events:auto;touch-action:none}
.ba-item-chip.active{border-color:rgba(107,255,142,.6)}
.ba-item-chip.active.rdy{box-shadow:0 0 8px -2px #6bff8e}
.ba-item-chip.empty{background:rgba(18,22,34,.5);border-style:dashed;opacity:.5}
.ba-item-chip.empty .ba-ii{display:none}
.ba-ii{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ba-ik{position:absolute;top:0;left:0;padding:0 4px;border-radius:0 0 5px 0;background:rgba(5,8,16,.85);font:700 9px/13px ui-monospace,monospace;color:#ffd24a}
.ba-icd{position:absolute;left:0;bottom:0;width:100%;height:0;background:rgba(10,14,24,.78);border-top:1px solid rgba(255,255,255,.3);display:flex;align-items:center;justify-content:center;font:800 12px ui-monospace,monospace;color:#fff}
#ba-meta{display:flex;gap:14px;font:800 15px ui-monospace,monospace}
#ba-gold{color:#ffd24a}
#ba-goal-banner{position:fixed;top:22%;left:50%;transform:translateX(-50%);background:rgba(10,14,24,.7);border:1px solid rgba(255,210,74,.3);border-radius:12px;padding:12px 20px;font:700 18px ui-monospace,monospace;color:#fff;text-shadow:0 2px 8px #000;white-space:nowrap;pointer-events:none;transition:opacity .5s}
#ba-goal-banner b{color:#ffd24a}
#ba-hint{position:fixed;bottom:calc(206px + env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);font:700 16px ui-monospace,monospace;color:#fff;text-shadow:0 2px 6px #000;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .3s}
#ba-hint.show{opacity:1}
#ba-hint b{color:#ffd24a}
#ba-intro{position:fixed;top:32%;left:50%;transform:translate(-50%,-50%);font:900 italic 72px system-ui,sans-serif;color:#fff;text-shadow:0 6px 0 rgba(0,0,0,.5),0 0 40px rgba(255,210,74,.25);pointer-events:none;z-index:9;opacity:0}
#ba-intro.show{opacity:1}
#ba-intro.fight{color:#ffd24a}
#ba-intro.small{font-size:26px;letter-spacing:2px;font-style:normal}
#ba-intro.pop{animation:ba-pop .3s}
.ba-arrow{position:fixed;left:0;top:0;font:900 20px system-ui,sans-serif;text-shadow:0 2px 6px #000;pointer-events:none;will-change:transform;z-index:6;opacity:0;transition:opacity .15s}
.ba-arrow.on{opacity:.95}
#ba-arrow-coin{color:#ffd24a}
#ba-arrow-delivery{color:#6bffcc}
#ba-reticle{position:fixed;left:50%;top:50%;width:26px;height:26px;transform:translate(-50%,-50%);pointer-events:none;z-index:6;display:none}
#ba-reticle.show{display:block}
#ba-reticle i{position:absolute;background:rgba(255,255,255,.85);box-shadow:0 0 2px #000;transition:transform .09s,background .1s}
#ba-reticle i:nth-child(1){left:12px;top:0;width:2px;height:7px}
#ba-reticle i:nth-child(2){left:12px;bottom:0;width:2px;height:7px}
#ba-reticle i:nth-child(3){left:0;top:12px;width:7px;height:2px}
#ba-reticle i:nth-child(4){right:0;top:12px;width:7px;height:2px}
#ba-reticle b{position:absolute;left:12px;top:12px;width:2px;height:2px;background:rgba(255,255,255,.9);box-shadow:0 0 2px #000}
#ba-reticle.fire i{transform:scale(1.3)}
#ba-reticle.hit i{background:#ffd24a}
#ba-reticle.hitcrit i{background:#ff5a52;transform:scale(1.5)}
#ba-hitdir{position:fixed;left:50%;top:50%;width:240px;height:240px;margin:-120px;border-radius:50%;pointer-events:none;z-index:6;opacity:0;background:conic-gradient(from calc(var(--a,0deg) - 30deg),transparent 0deg,rgba(255,60,48,.75) 30deg,transparent 60deg);-webkit-mask:radial-gradient(circle,transparent 62%,#000 63%,#000 78%,transparent 79%);mask:radial-gradient(circle,transparent 62%,#000 63%,#000 78%,transparent 79%)}
#ba-minimap{position:fixed;right:calc(12px + env(safe-area-inset-right));bottom:calc(12px + env(safe-area-inset-bottom));width:150px;height:132px;opacity:.92;pointer-events:none;filter:drop-shadow(0 0 10px rgba(0,0,0,.65))}
#ba-respawn{position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:radial-gradient(circle,rgba(40,10,10,.3),rgba(8,8,12,.7));pointer-events:none}
.ba-rtitle{font:900 italic 56px system-ui,sans-serif;color:#ff5a52;text-shadow:0 4px 0 rgba(0,0,0,.5)}
.ba-rslain{font:600 14px ui-monospace,monospace;color:#ff9a94;margin-top:6px}
.ba-rwrap{position:relative;width:72px;height:72px;margin-top:14px}
.ba-rring{position:absolute;inset:0;border-radius:50%;background:conic-gradient(#ffd24a calc(var(--cd,0)*1%),rgba(255,255,255,.12) 0);-webkit-mask:radial-gradient(circle,transparent 57%,#000 60%);mask:radial-gradient(circle,transparent 57%,#000 60%)}
.ba-rtimer{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:800 19px ui-monospace,monospace;font-variant-numeric:tabular-nums}
.ba-rtip{font:600 13px ui-monospace,monospace;color:#9fd0ff;margin-top:14px}
#ba-shop{position:fixed;bottom:120px;left:50%;transform:translateX(-50%);width:min(92vw,560px);max-height:46vh;overflow-y:auto;background:rgba(10,14,24,.94);border:2px solid rgba(255,209,71,.4);border-radius:14px;padding:12px;pointer-events:auto;z-index:8}
.ba-shop-head{font:800 16px ui-monospace,monospace;color:#ffd24a;margin-bottom:8px}
.ba-shop-hint{font-size:11px;opacity:.6;font-weight:600}
/* minmax(0,…): grid items default to min-width:auto, so plain 1fr columns
   refuse to shrink below their content and the right column's price is clipped
   by the panel edge on a phone. */
.ba-shop-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:6px}
.ba-item{display:flex;flex-direction:row;align-items:center;text-align:left;gap:9px;background:rgba(30,36,52,.8);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:7px 9px;color:#fff;cursor:pointer;font-family:ui-monospace,monospace}
.ba-item.afford{border-color:rgba(107,255,142,.6)}
.ba-item:disabled{opacity:.4;cursor:not-allowed}
.ba-si{width:36px;height:36px;border-radius:7px;flex:0 0 auto;border:1px solid rgba(255,255,255,.2);object-fit:cover}
.ba-icol{display:flex;flex-direction:column;gap:2px;min-width:0}
.ba-iname{font-weight:800;font-size:13px}
.ba-item.active-item .ba-iname::after{content:" ⚡";color:#6bffcc}
.ba-idesc{font-size:10px;opacity:.7}
.ba-icost{font-size:12px;color:#ffd24a;font-weight:700;margin-left:auto;flex:0 0 auto}
#ba-end{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle,rgba(20,16,28,.4),rgba(8,8,14,.85));backdrop-filter:blur(5px);z-index:20}
.ba-end-card{text-align:center;pointer-events:auto}
.ba-end-title{font:900 italic clamp(40px,12vw,90px) system-ui,sans-serif;letter-spacing:-2px;text-shadow:0 6px 0 rgba(0,0,0,.5);animation:ba-endin .5s cubic-bezier(.2,1.4,.4,1)}
.ba-end-title.win{color:#6bff8e;text-shadow:0 0 60px rgba(107,255,142,.5),0 6px 0 rgba(0,0,0,.5)}
.ba-end-title.loss{color:#ff6a6a;text-shadow:0 0 60px rgba(255,106,106,.4),0 6px 0 rgba(0,0,0,.5)}
@keyframes ba-endin{from{transform:scale(.7);letter-spacing:8px;opacity:0}}
.ba-end-sub{font:600 18px ui-monospace,monospace;margin-top:8px;opacity:.9;display:flex;align-items:center;justify-content:center;gap:8px}
.ba-es{width:22px;height:22px;border-radius:5px;border:1px solid rgba(255,255,255,.3)}
.ba-end-stats{font:700 15px ui-monospace,monospace;display:flex;gap:18px;justify-content:center;margin-top:14px;opacity:.9}
.ba-end-stats b{color:#ffd24a;font-size:22px;margin-right:3px}
.ba-end-best{font:800 13px ui-monospace,monospace;letter-spacing:2px;margin-top:10px;opacity:.7}
.ba-end-best.nb{color:#ffd24a;opacity:1;animation:ba-pop .4s}
.ba-end-btns{display:flex;gap:12px;justify-content:center;margin-top:26px}
.ba-end-btn{font:800 16px ui-monospace,monospace;letter-spacing:2px;color:#14111a;background:#ffd24a;border:none;border-radius:10px;padding:14px 26px;cursor:pointer;box-shadow:0 5px 0 rgba(0,0,0,.4)}
.ba-end-btn.alt{background:rgba(255,255,255,.14);color:#fff;border:1px solid rgba(255,255,255,.3)}
@keyframes ba-in{from{opacity:0;transform:translateX(12px)}}
@keyframes ba-pop{from{opacity:0;transform:scale(.7)}}
/* touch mode (any viewport): the touch grid (bottom-right) duplicates the
   ability tiles (icons + cooldown sweeps), so hide the desktop row and pin the
   remaining vitals/belt cluster bottom-LEFT, clear of the 3-column button grid. */
body.ba-touch-on #ba-bottom{left:calc(12px + env(safe-area-inset-left));transform:none;align-items:flex-start}
body.ba-touch-on #ba-abilities{display:none}
body.ba-touch-on #ba-vitals{width:170px}
/* keep the hint and belt clear of the bottom-right button grid */
body.ba-touch-on #ba-hint{bottom:calc(240px + env(safe-area-inset-bottom))}
body.ba-touch-on .ba-item-chip{width:28px;height:28px}
/* the shared @repo/embed pause+mute cluster owns the top-right corner on a
   coarse pointer, so the kill feed starts below it */
body.ba-touch-on #ba-feed{top:calc(76px + env(safe-area-inset-top))}
/* phone compaction — narrow (portrait) OR short (landscape) viewports */
@media (max-width:720px),(max-height:500px){
#ba-board{display:none}
/* the tapped-timer scoreboard drops below #ba-top instead of over it — the
   timer is also the toggle back off, so it has to stay readable */
#ba-board.force{display:flex;top:calc(92px + env(safe-area-inset-top))}
#ba-minimap{display:none}
.ba-abil{width:48px;height:48px}
.ba-abil.ult{width:52px;height:52px}
.ba-abil.util{width:38px;height:38px}
.ba-abil-gap{width:6px}
#ba-vitals{width:250px}
.ba-item-chip{width:32px;height:32px}
.ba-buff{width:22px;height:22px}
#ba-objective{display:none}
#ba-goal-banner{font-size:14px;padding:9px 14px}
#ba-hint{bottom:calc(186px + env(safe-area-inset-bottom));font-size:13px}
#ba-intro{font-size:54px}
#ba-timer{font-size:30px}
.ba-end-sub{font-size:14px;margin-top:4px}
.ba-end-stats{gap:12px;margin-top:8px;font-size:13px}
.ba-end-btns{margin-top:14px}
.ba-end-btn{padding:11px 20px;font-size:14px}
.ba-rtitle{font-size:40px}
}
/* portrait phones: two shop columns leave ~100px for a name + a description,
   so the grid collapses to one readable column and scrolls instead */
@media (max-width:520px){
.ba-shop-grid{grid-template-columns:minmax(0,1fr)}
}
`,wg=4,Tg=5;function Eg(e,t,n){let r=n*n;for(let n of e.units.values()){if(!n.alive||n.team===t.team||n.kind!==`hero`&&n.kind!==`creep`)continue;let e=n.x-t.x,i=n.y-t.y;if(e*e+i*i<r)return!0}return!1}function Dg(e,t){let n=t*t;for(let t of nt){let r=t.x-e.x,i=t.y-e.y;if(r*r+i*i<n)return!0}return!1}var Og=[{id:`move`,text:`WASD move · mouse aim`,touch:`Left stick move · right stick turn`,when:e=>e.gameTime>2.9,done:(e,t,n)=>n.spawnSet&&(t.x-n.spawnX)**2+(t.y-n.spawnY)**2>25},{id:`attack`,text:`Left click — attack`,touch:`Right stick — auto attack`,when:(e,t)=>Eg(e,t,12),done:(e,t)=>t.lastAttackAt>0},{id:`ability`,text:`Press 1 — ability`,touch:`Tap 1 — ability`,when:(e,t)=>e.gameTime>12&&t.abilities.Q.rank>=1&&t.abilities.Q.readyAt<=e.now,done:(e,t)=>t.lastCastAt>0},{id:`camp`,text:`Skeletons drop gold`,touch:`Skeletons drop gold`,when:(e,t)=>Dg(t,16)},{id:`coin`,text:`Golem threw gold — grab it`,touch:`Golem threw gold — grab it`,when:e=>e.coins.length>0,done:e=>e.coins.length===0},{id:`delivery`,text:`Green pad — free item`,touch:`Green pad — free item`,when:e=>e.deliveries.length>0},{id:`shop600`,text:`600 gold — press B at base`,touch:`600 gold — tap B at base`,when:(e,t)=>t.gold>=600&&t.items.length===0,done:(e,t)=>t.items.length>0},{id:`throne`,text:`Hold the throne — bonus gold`,touch:`Hold the throne — bonus gold`,when:(e,t,n)=>e.gameTime>30&&!n.everInThrone,done:(e,t,n)=>n.everInThrone},{id:`dash`,text:`Shift — dash (brief i-frames)`,touch:`Tap DASH — quick dodge`,when:(e,t)=>t.deaths===2&&t.alive,done:(e,t)=>t.lastCastKey===`DASH`},{id:`jump`,text:`Space then click — jump attack`,touch:`Tap JUMP↯ — leaping strike`,when:(e,t)=>e.gameTime>40&&t.alive,done:(e,t)=>t.lastCastKey===`JUMP`}],kg=class{isTouch;show;shown=new Set;visible=null;visibleUntil=0;nextAt=0;lastT=0;st={spawnX:0,spawnY:0,spawnSet:!1,everInThrone:!1,shopRearmed:!1};constructor(e,t){this.isTouch=e,this.show=t}update(e,t){if(!t)return;let n=e.gameTime;if(this.lastT=n,!this.st.spawnSet&&t.alive&&(this.st.spawnX=t.x,this.st.spawnY=t.y,this.st.spawnSet=!0),!this.st.everInThrone&&r(t.x,t.y)&&(this.st.everInThrone=!0),!this.st.shopRearmed&&this.shown.has(`shop600`)&&this.visible?.id!==`shop600`&&t.gold>=1200&&t.items.length===0&&(this.shown.delete(`shop600`),this.st.shopRearmed=!0),this.visible){let r=this.visible;(n>=this.visibleUntil||r.done!==void 0&&r.done(e,t,this.st))&&this.hide();return}if(!(n<this.nextAt)){for(let r of Og)if(!this.shown.has(r.id)){if(r.done!==void 0&&r.done(e,t,this.st)){this.shown.add(r.id);continue}if(r.when(e,t,this.st)){this.shown.add(r.id),this.visible=r,this.visibleUntil=n+wg,this.show(this.isTouch()?r.touch:r.text);return}}}}notifyShopOpened(){this.visible?.id===`shop600`&&this.hide()}hide(){this.visible=null,this.nextAt=this.lastT+Tg,this.show(``)}},Ag=12245589,jg=2.4,Mg=350,Ng=.25,Pg=4,Fg=`JOINING — FIRST TO 25 KILLS`,Ig=class{view;controls;touch;world;net=null;worldView;environment;fx;hud;acc=0;aimX=0;aimY=1;aimInit=!1;champId;name;localId=`h-local`;statusEl;hints;introTime=0;lastCount=-1;musicClock=0;musicAcc=0;musicIntensity=0;musicLowSince=-1;boundChamp=``;touchCdLast={Q:-1,W:-1,E:-1,R:-1,DASH:-1,JUMP:-1};picks={};assign={};joinResendAt=0;snapAcc=0;netFx=[];fxSeqOut=0;lastFxSeq=-1;forcedHost=!1;tookOverFrom=null;rateAt0=0;rateGameTime0=-1;slowWindows=0;constructor(e,t,n,r,i=null){this.view=e,this.controls=n,this.touch=i,this.champId=r.champId,this.name=r.name,r.online?(this.world=Gd(),this.net=new Sc({host:zd,party:Bd,room:r.room,maxPlayers:4,onEvent:(e,t,n)=>this.onNetEvent(e,t,n)})):(this.world=Ul(19090108,{soloMercy:!0}),Kl(this.world,{id:this.localId,ownerId:`local`,team:`local`,champId:this.champId,name:this.name,isBot:!1,slot:0}),cu(this.world)),this.worldView=new Eh(e.scene,t),this.worldView.localId=this.localId,this.worldView.setupBoss(),this.environment=new sg(e.scene,t),this.environment.setup(),e.refreshShadows(),this.fx=new Am(e.scene,e),this.fx.warm(e.renderer,e.camera),this.fx.localId=this.localId,r.online||(this.fx.localOwnerId=`local`),this.worldView.fx=this.fx,this.hud=new vg(e,this.fx,{buy:e=>this.requestBuy(e),canShop:()=>this.canShop()}),this.hints=new kg(()=>this.touch?.active??!1,e=>this.hud.showHint(e)),this.statusEl=document.createElement(`div`),this.statusEl.style.cssText=`position:fixed;inset:0;display:flex;align-items:center;justify-content:center;font:800 22px ui-monospace,monospace;color:#9fd0ff;text-shadow:0 2px 6px #000;z-index:9;pointer-events:none`,document.body.appendChild(this.statusEl),e.startIntro()}get amHost(){return!this.net||(this.net.isHost??!1)||this.forcedHost}localUnit(){return this.world.units.get(this.localId)??null}update(e){this.controls.update(e),this.introTime+=e,this.net?this.tickOnline(e):this.tickLocal(e),this.view.samplePerf(e);let t=this.localUnit();this.fx.update(this.world,e);let n=e*this.fx.scaleNow();this.worldView.sync(this.world,n),t?(this.statusEl.textContent=``,this.hud.update(this.world,t,this.controls.scoreHeld()),this.fx.audio.setListener(t.x,t.y,this.aimX,this.aimY),this.touch&&t.champId!==this.boundChamp&&(this.boundChamp=t.champId,this.touch.bindChamp(t.champId)),this.feedTouchCooldowns(t)):this.statusEl.textContent=this.net&&this.net.connectionStatus!==`connected`?`Connecting…`:`Joining the arena…`,this.hints.update(this.world,t),this.driveIntro(),this.driveMusic(e,t);let r=t?t.x:0,i=t?t.y:0;this.view.follow(r,i,this.aimX,this.aimY,this.controls.aimPitch(),n,W(r,i)),this.view.tickAura(this.world.gameTime),this.environment.setLocalPos(r,i),t&&this.environment.setHomeSlot(t.slot),this.environment.update(this.world.gameTime),this.view.render()}tickLocal(e){if(this.introTime<jg){this.acc=0;let e=this.localUnit();e&&!this.aimInit&&(this.controls.setYaw(Math.atan2(e.aimX,e.aimY)),this.aimInit=!0);let t=this.controls.aimYaw();this.aimX=Math.sin(t),this.aimY=Math.cos(t),this.controls.consumeAbilities(),this.controls.consumeItems(),this.controls.consumeJump(),this.controls.consumeDash(),this.controls.consumeAttackEdge(),this.controls.consumeBuy(),this.touch&&(this.touch.consumeAbilities(),this.touch.consumeBuy(),this.touch.consumeJump(),this.touch.consumeDash(),this.touch.consumeJumpAttack());return}let t=this.localUnit();t&&this.readInput(t,!0,e),this.acc+=e;let n=0;for(;this.acc>=.03333333333333333&&n<5;)du(this.world),this.acc-=sn,n++}driveIntro(){let e=this.introTime;if(e>3.5999999999999996)return;if(this.net){this.hud.showIntro(e<2?Fg:``);return}let t=e<.8?3:e<1.6?2:+(e<jg);this.hud.showIntro(t>0?String(t):e<2.9?`FIGHT!`:``),t!==this.lastCount&&(this.lastCount=t,t>0?this.fx.audio.count():this.fx.audio.fight())}driveMusic(e,t){if(this.musicClock+=e,this.musicAcc+=e,this.musicAcc<Ng||(this.musicAcc=0,this.world.phase!==`playing`||!t))return;let n=this.fx.audio.music;if(!n)return;let r=this.musicDesired(this.world,t);r>this.musicIntensity?(this.musicIntensity=r,this.musicLowSince=-1,n.setIntensity(r)):r<this.musicIntensity?this.musicLowSince<0?this.musicLowSince=this.musicClock:this.musicClock-this.musicLowSince>=Pg&&(this.musicIntensity=r,this.musicLowSince=-1,n.setIntensity(r)):this.musicLowSince=-1}musicDesired(e,t){if(e.suddenDeath||e.matchTime-e.gameTime<60||r(t.x,t.y)&&this.enemyHeroNear(t,0,0,11))return 3;if(e.leaderId!==null&&e.leaderId===t.team)return 2;let n=this.leaderUnit(e);if(n&&n.alive){let e=n.x-t.x,r=n.y-t.y;if(e*e+r*r<400)return 2}return this.enemyHeroNear(t,t.x,t.y,14)||e.now-t.lastHitAt<3e3||e.now-t.lastAttackAt<3e3?1:0}enemyHeroNear(e,t,n,r){let i=r*r;for(let r of this.world.units.values()){if(r.kind!==`hero`||!r.alive||r.team===e.team)continue;let a=r.x-t,o=r.y-n;if(a*a+o*o<i)return!0}return!1}leaderUnit(e){if(e.leaderId===null)return null;for(let t of e.units.values())if(t.kind===`hero`&&t.team===e.leaderId)return t;return null}feedTouchCooldowns(e){let t=this.touch;if(!t||!t.active)return;let n=Ec[e.champId];if(n)for(let r of Ps){let i=e.abilities[r],a=0;if(i.rank<1)a=1;else{let e=Math.max(0,(i.readyAt-this.world.now)/1e3);if(e>0){let t=Cc(n.abilities[r].cooldown,i.rank);a=t>0?Math.min(1,e/t):0}}let o=Math.round(a*100);o!==this.touchCdLast[r]&&(this.touchCdLast[r]=o,t.setCooldown(r,o/100))}}tickOnline(e){let t=this.net;if(!t||t.connectionStatus!==`connected`||!t.playerId)return;this.localId=`h-${t.playerId}`,this.worldView.localId=this.localId,this.fx.localId=this.localId,this.fx.localOwnerId=t.playerId,(this.world.now-this.joinResendAt>3e3||this.joinResendAt===0)&&(t.sendEvent(Hd,{kind:`join`,champId:this.champId,name:this.name}),this.joinResendAt=this.world.now),this.sampleHostLiveness(t),!t.isHost&&!this.forcedHost&&this.shouldTakeOverHost(t)&&(this.forcedHost=!0,this.tookOverFrom=t.hostId,this.assign={},this.world.units.size===0&&(this.world=Ul(Ag))),(this.forcedHost&&t.isHost||this.forcedHost&&t.hostId&&t.hostId!==t.playerId&&t.hostId!==this.tookOverFrom)&&(this.forcedHost=!1);let n=this.localUnit();if(n&&this.readInput(n,this.amHost,e),this.amHost){this.becomeHostIfNeeded(),this.reconcileHeroes(t),this.acc+=e;let n=0;for(;this.acc>=.03333333333333333&&n<5;)du(this.world),this.acc-=sn,n++;this.world.fx.length&&this.netFx.push(...this.world.fx),this.broadcast(e)}else{let e=t.sharedState.snap;Jd(e)&&qd(this.world,e);let n=t.sharedState.fxSeq;if(Xd(n)&&n!==this.lastFxSeq){this.lastFxSeq=n;let e=t.sharedState.fx;Array.isArray(e)&&this.world.fx.push(...e)}}}rotateToAim(e,t){return{x:this.aimX*e-this.aimY*t,y:this.aimY*e+this.aimX*t}}readInput(e,t,n){if(this.controls.setMouseMode(this.hud.isShopOpen||this.world.phase===`ended`),!e.alive){t&&uu(e,0,0,this.aimX,this.aimY,!1);return}let r,i,a;if(this.aimInit||=(this.controls.setYaw(Math.atan2(e.aimX,e.aimY)),!0),this.touch?.active){let e=this.touch.lookVec();e&&this.controls.applyStickLook(e.x,e.y,n)}let o=this.controls.aimYaw();if(this.aimX=Math.sin(o),this.aimY=Math.cos(o),this.touch?.active){let e=this.touch.moveVec();r=this.rotateToAim(-e.y,e.x),i=this.touch.attackDown()}else{let{fwd:e,strafe:t}=this.controls.moveAxes();r=this.rotateToAim(e,t);let n=Math.hypot(r.x,r.y);n>0&&(r.x/=n,r.y/=n),i=this.controls.attackDown()}a={x:e.x+this.aimX*8,y:e.y+this.aimY*8};let s=this.world.now<e.jumpUntil,c=this.controls.consumeAttackEdge()&&s,l=this.touch?.consumeJumpAttack()??!1;(c||l)&&(c&&(i=!1),t?_d(this.world,e,`JUMP`,{point:a,dir:{x:this.aimX,y:this.aimY}}):this.net?.sendEvent(Hd,{kind:`cast`,key:`JUMP`,px:a.x,py:a.y,ax:this.aimX,ay:this.aimY})),t?uu(e,r.x,r.y,this.aimX,this.aimY,i):this.net?.sendEvent(Hd,{kind:`input`,mx:r.x,my:r.y,ax:this.aimX,ay:this.aimY,attack:i});let u=[...this.controls.consumeAbilities(),...this.touch?.consumeAbilities()??[]];for(let n of u)this.wouldDeny(e,n)&&this.fx.audio.castDeny(),t?_d(this.world,e,n,{point:a,dir:{x:this.aimX,y:this.aimY}}):this.net?.sendEvent(Hd,{kind:`cast`,key:n,px:a.x,py:a.y,ax:this.aimX,ay:this.aimY});let d=this.controls.consumeJump(),f=this.touch?.consumeJump()??!1;if((d||f)&&(t?hu(this.world,e):this.net?.sendEvent(Hd,{kind:`jump`})),this.controls.consumeDash()||(this.touch?.consumeDash()??!1)){let n=r.x!==0||r.y!==0?r:{x:this.aimX,y:this.aimY};t?_d(this.world,e,`DASH`,{point:a,dir:n}):this.net?.sendEvent(Hd,{kind:`cast`,key:`DASH`,px:a.x,py:a.y,ax:n.x,ay:n.y})}for(let n of[...this.controls.consumeItems(),...this.hud.consumeItemTaps()])t?Rd(this.world,e,n,a):this.net?.sendEvent(Hd,{kind:`useItem`,slot:n,px:a.x,py:a.y});(this.controls.consumeBuy()||(this.touch?.consumeBuy()??!1))&&(this.canShop()||this.hud.isShopOpen)&&(this.hud.toggleShop(),this.hud.isShopOpen&&this.hints.notifyShopOpened())}wouldDeny(e,t){let n=e.abilities[t];return n.rank<1||n.readyAt-this.world.now>Mg}requestBuy(e){let t=this.localUnit();t&&(this.amHost?su(this.world,t,e):this.net?.sendEvent(Hd,{kind:`buy`,itemId:e}))}onNetEvent(e,t,n){if(e!==`intent`||!Yd(t))return;let r=t;if(r.kind===`join`){let e=r.champId,t=r.name;Zd(e)&&Zd(t)&&(this.picks[n]={champId:e,name:t});return}if(!this.amHost)return;let i=this.world.units.get(`h-${n}`);if(!i||!i.alive)return;let a=e=>Xd(e)?e:0,o=e=>Rg(a(e));switch(r.kind){case`input`:uu(i,Lg(a(r.mx)),Lg(a(r.my)),Lg(a(r.ax)),Lg(a(r.ay)),r.attack===!0);break;case`cast`:{let e=Ps.find(e=>e===r.key);if(!e)break;_d(this.world,i,e,{point:{x:o(r.px),y:o(r.py)},dir:{x:Lg(a(r.ax)),y:Lg(a(r.ay))}});break}case`buy`:{let e=r.itemId;Zd(e)&&su(this.world,i,e);break}case`useItem`:Rd(this.world,i,a(r.slot),{x:o(r.px),y:o(r.py)});break;case`jump`:hu(this.world,i)}}becomeHostIfNeeded(){this.world.units.size===0&&this.world.gameTime===0&&(this.world=Ul(Ag))}reconcileHeroes(e){let t=Object.keys(e.players);for(let e of[...this.world.units.values()])e.kind!==`hero`||e.isBot||t.includes(e.ownerId)||(this.world.units.delete(e.id),delete this.assign[e.ownerId]);for(let e of t){this.assign[e]===void 0&&(this.assign[e]=this.freeSlot());let t=`h-${e}`;if(!this.world.units.has(t)){let n=this.picks[e];n&&Kl(this.world,{id:t,ownerId:e,team:e,champId:n.champId,name:n.name||`Player`,isBot:!1,slot:this.assign[e]})}}cu(this.world)}freeSlot(){let e=new Set([...Object.values(this.assign),...[...this.world.units.values()].filter(e=>e.kind===`hero`).map(e=>e.slot)]);for(let t=0;t<c.length;t++)if(!e.has(t))return t;return 0}broadcast(e){this.snapAcc+=e,!(this.snapAcc<1/15)&&(this.snapAcc=0,this.fxSeqOut+=1,this.net?.updateSharedState({snap:Wd(this.world),fx:this.netFx,fxSeq:this.fxSeqOut}),this.netFx=[])}sampleHostLiveness(e){let t=e.sharedState.snap;if(!Jd(t))return;if(t.phase!==`playing`){this.slowWindows=0,this.rateAt0=0;return}let n=t.gameTime,r=performance.now();if(this.rateAt0===0){this.rateAt0=r,this.rateGameTime0=n;return}if(r-this.rateAt0>=2e3){let e=(n-this.rateGameTime0)/((r-this.rateAt0)/1e3);this.slowWindows=e<.5?this.slowWindows+1:0,this.rateAt0=r,this.rateGameTime0=n}}shouldTakeOverHost(e){if(this.slowWindows<2)return!1;let t=e.playerId;if(!t)return!1;let n=Object.keys(e.players).filter(t=>t!==e.hostId);return n.length===0||(n.sort(),t===n[0])}canShop(){let e=this.localUnit();if(!e||!e.alive)return!1;let t=c[e.slot%c.length];return(e.x-t.x)**2+(e.y-t.y)**2<=pe*pe}get audio(){return this.fx.audio}pauseAudio(){this.fx.audio.suspend()}resumeAudio(){this.fx.audio.resume()}dispose(){this.net?.destroy(),this.statusEl.remove(),this.hud.dispose(),document.pointerLockElement&&document.exitPointerLock()}},Lg=e=>e<-1?-1:e>1?1:e,Rg=e=>e<-62?-62:e>62?62:e;function zg(){let e=new URLSearchParams(location.search).get(`champ`);if(e&&Ec[e])return e;let t=localStorage.getItem(`ba-champ`);return t&&Ec[t]?t:Dc}function Bg(){let e=new URLSearchParams(location.search).get(`name`)?.trim();if(e)return e.slice(0,14);let t=localStorage.getItem(`ba-name`)?.trim();return t?t.slice(0,14):`Player`}var Vg=e=>`#`+e.toString(16).padStart(6,`0`),Hg=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),Ug=e=>`●`.repeat(e)+`○`.repeat(Math.max(0,3-e)),Wg={Q:`1`,W:`2`,E:`3`,R:`4`,DASH:`⇧`,JUMP:`␣`},Gg=class{opts;el;selected;unwatchControls;constructor(e){this.opts=e,this.selected=e.initial,this.el=document.createElement(`div`),this.el.id=`ba-menu`,document.body.appendChild(this.el),qg(),this.build(),this.unwatchControls=hn(()=>this.renderHelp())}build(){let e=new URLSearchParams(location.search),t=e.get(`name`)??localStorage.getItem(`ba-name`)??``,n=Rn(),r=Tc.map(e=>`<button class="ba-chip" data-id="${e.id}" style="--accent:${Vg(e.tint)}">
          <img class="ba-cs" src="${As(e.id)}" alt="">
          <span class="ba-cn">${e.name}</span>
          <span class="ba-cr">${e.role}</span>
          <span class="ba-cd2">${Ug(e.difficulty)}</span>
        </button>`).join(``);this.el.innerHTML=`
      <div class="ba-top">
        <div class="ba-logo">BATTLE ARENA</div>
        <div class="ba-tag">Contest the throne. Grab the coins. Don't let anyone run away with it.</div>
        <div class="ba-info" id="ba-info"></div>
      </div>
      <div class="ba-bottom">
        <div class="ba-chips">${r}</div>
        <div class="ba-row2">
          <input id="ba-name" maxlength="14" placeholder="Your name" value="${Hg(t)}" />
          ${n?``:`<input id="ba-room" maxlength="12" placeholder="Room code (optional)" value="${Hg(e.get(`room`)??``)}" />`}
        </div>
        <div class="ba-actions">
          <button id="ba-bots" class="ba-go bots">PLAY vs BOTS</button>
          ${n?``:`<button id="ba-online" class="ba-go online">PLAY ONLINE</button>`}
        </div>
        <div class="ba-help"></div>
      </div>`,this.renderHelp(),this.el.querySelectorAll(`.ba-chip`).forEach(e=>{e.addEventListener(`click`,()=>this.opts.onSelect(e.dataset.id))});let i=()=>{let e=document.getElementById(`ba-name`);return(e instanceof HTMLInputElement?e.value.trim():``)||`Player`},a=()=>{let e=document.getElementById(`ba-room`);return e instanceof HTMLInputElement?e.value.trim():``};document.getElementById(`ba-bots`)?.addEventListener(`click`,()=>this.start({champId:this.selected,name:i(),online:!1,room:``})),document.getElementById(`ba-online`)?.addEventListener(`click`,()=>this.start({champId:this.selected,name:i(),online:!0,room:Ud(a())})),this.setSelected(this.selected)}setSelected(e){this.selected=e,this.el.querySelectorAll(`.ba-chip`).forEach(t=>{t.classList.toggle(`sel`,t.dataset.id===e)});let t=Tc.find(t=>t.id===e),n=document.getElementById(`ba-info`);if(t&&n){let e=Ps.map(e=>`<span class="ba-i-a"><img src="${Os(t.id,e)}" alt=""><i>${Wg[e]}</i><em>${t.abilities[e].name}</em></span>`).join(``);n.style.setProperty(`--accent`,Vg(t.tint)),n.innerHTML=`<span class="ba-i-name">${t.name}</span><span class="ba-i-title">${t.title}</span>
        <span class="ba-i-role">${t.role} · ${t.primary.toUpperCase()} · <span class="ba-i-diff">${Ug(t.difficulty)}</span></span>
        <span class="ba-i-blurb">${t.blurb}</span>
        <span class="ba-i-abrow">${e}</span>`}}renderHelp(){let e=this.el.querySelector(`.ba-help`);if(!e)return;as(),e.replaceChildren();let t=document.createElement(`div`);t.className=`ba-help-lead`,t.textContent=Ls()?`tap a champion`:`click a champion`,e.append(t);let n=window.matchMedia(`(pointer: coarse)`).matches,r=ss(n);r&&e.append(r)}remove(){this.unwatchControls(),this.el.remove()}start(e){localStorage.setItem(`ba-champ`,e.champId),localStorage.setItem(`ba-name`,e.name),this.remove(),this.opts.onStart(e)}},Kg=!1;function qg(){if(Kg)return;Kg=!0;let e=document.createElement(`style`);e.textContent=`
#ba-menu{position:fixed;inset:0;z-index:40;display:flex;flex-direction:column;justify-content:space-between;pointer-events:none;font-family:ui-monospace,monospace;color:#fff}
/* the lobby runs edge-to-edge under viewport-fit=cover, so every outer padding
   carries the display cutout / home-indicator inset on top of its design value */
#ba-menu .ba-top{text-align:center;padding:calc(22px + env(safe-area-inset-top,0px)) calc(16px + env(safe-area-inset-right,0px)) 0 calc(16px + env(safe-area-inset-left,0px));background:linear-gradient(#080a12cc,#080a1200)}
.ba-logo{font:900 italic clamp(34px,7vw,72px)/1 system-ui,sans-serif;letter-spacing:-2px;color:#ffd24a;text-shadow:0 0 50px rgba(255,160,40,.4)}
.ba-tag{margin:8px 0 14px;font:600 13px ui-monospace,monospace;opacity:.7}
.ba-info{min-height:150px;display:flex;flex-direction:column;align-items:center;gap:2px}
.ba-i-name{font:800 30px ui-monospace,monospace;color:var(--accent)}
.ba-i-title{font-size:13px;opacity:.7}
.ba-i-role{font-size:12px;letter-spacing:1px;opacity:.85;margin-top:4px}
.ba-i-diff{color:var(--accent);letter-spacing:2px}
.ba-i-blurb{font-size:12px;opacity:.65;margin-top:3px;max-width:520px;line-height:1.35}
.ba-i-abrow{display:flex;flex-wrap:wrap;gap:10px;margin-top:8px;justify-content:center;padding:8px 12px 6px;background:rgba(8,10,18,.62);border:1px solid rgba(255,255,255,.08);border-radius:12px;backdrop-filter:blur(3px)}
.ba-i-a{position:relative;display:flex;flex-direction:column;align-items:center;gap:3px;width:66px}
.ba-i-a img{width:40px;height:40px;border-radius:8px;border:1px solid rgba(255,255,255,.25);background:#0a0e1a}
.ba-i-a i{position:absolute;top:-5px;left:7px;font:800 9px ui-monospace,monospace;font-style:normal;color:#ffd24a;background:rgba(10,14,24,.92);border:1px solid rgba(255,255,255,.3);border-radius:4px;padding:0 3px}
.ba-i-a em{font:600 9px ui-monospace,monospace;font-style:normal;opacity:.75;text-align:center;line-height:1.2}
#ba-menu .ba-bottom{padding:0 calc(16px + env(safe-area-inset-right,0px)) calc(22px + env(safe-area-inset-bottom,0px)) calc(16px + env(safe-area-inset-left,0px));background:linear-gradient(#080a1200,#080a12dd 40%)}
.ba-chips{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:14px}
.ba-chip{pointer-events:auto;display:flex;flex-direction:column;align-items:center;gap:3px;width:104px;padding:10px 6px;background:rgba(20,26,42,.85);border:2px solid rgba(255,255,255,.12);border-radius:10px;color:#fff;cursor:pointer;font:800 13px ui-monospace,monospace;transition:transform .1s,border-color .1s,box-shadow .1s}
.ba-chip:hover{transform:translateY(-2px)}
.ba-chip.sel{border-color:var(--accent);color:var(--accent);box-shadow:0 0 20px -6px var(--accent);transform:translateY(-4px) scale(1.04)}
.ba-cs{width:44px;height:44px;border-radius:9px;border:2px solid var(--accent);background:#0a0e1a}
.ba-cn{font:800 13px ui-monospace,monospace}
.ba-cr{font:600 9px ui-monospace,monospace;letter-spacing:.5px;opacity:.65;text-transform:uppercase;text-align:center}
.ba-cd2{font-size:9px;color:var(--accent);letter-spacing:2px}
.ba-row2{display:flex;gap:10px;justify-content:center;margin-bottom:12px}
.ba-row2 input{pointer-events:auto;background:rgba(10,14,24,.85);border:2px solid rgba(255,255,255,.15);border-radius:10px;padding:11px 14px;color:#fff;font:600 15px ui-monospace,monospace;width:min(200px,42vw)}
.ba-actions{display:flex;gap:12px;justify-content:center}
.ba-go{pointer-events:auto;font:800 17px ui-monospace,monospace;letter-spacing:1px;border:none;border-radius:12px;padding:15px 26px;cursor:pointer;box-shadow:0 5px 0 rgba(0,0,0,.4)}
.ba-go.bots{background:#3a7bd5;color:#fff}
.ba-go.online{background:#ffd24a;color:#14111a}
.ba-help{margin-top:14px;text-align:center;display:flex;flex-direction:column;gap:8px;align-items:center}
.ba-help-lead{font:600 12px ui-monospace,monospace;opacity:.5}
.ba-help .ba-p-strip{max-width:min(92vw,860px);opacity:.92}
/* short viewports: compact the info panel so the ability strip clears the
   3D roster row instead of sitting on the champions' heads */
@media (max-height: 800px){
  .ba-info{min-height:0}
  .ba-i-name{font-size:22px}
  .ba-i-blurb{display:none}
  .ba-i-a{width:56px}
  .ba-i-a img{width:32px;height:32px}
  .ba-i-a em{display:none}
  .ba-tag{margin:4px 0 8px}
}
/* landscape phones: everything must fit 390px tall with the PLAY buttons on
   screen — drop the info panel, compact chips/inputs/actions */
@media (max-height: 520px){
  #ba-menu .ba-top{padding:calc(8px + env(safe-area-inset-top,0px)) calc(12px + env(safe-area-inset-right,0px)) 0 calc(12px + env(safe-area-inset-left,0px))}
  .ba-logo{font-size:24px;letter-spacing:-1px}
  .ba-tag{display:none}
  .ba-info{display:none}
  .ba-chips{margin-bottom:8px;gap:6px}
  .ba-chip{width:84px;padding:6px 4px;gap:2px}
  .ba-cs{width:30px;height:30px}
  .ba-cn{font-size:11px}
  .ba-row2{margin-bottom:8px}
  .ba-row2 input{padding:8px 12px;font-size:13px}
  .ba-go{padding:10px 18px;font-size:14px}
  .ba-help{margin-top:8px}
  /* the strip is the only place a standalone landscape phone is ever told how
     to play (the pause tablet needs a wrapper), so it shrinks rather than hides */
  .ba-help{margin-top:6px}
  .ba-help .ba-p-strip{gap:4px 10px;font-size:9px}
  .ba-help .ba-p-strip .ba-p-k{font-size:9px;padding:1px 4px}
  .ba-help .ba-p-strip .ba-p-a{font-size:9px}
  .ba-help-lead{display:none}
  #ba-menu .ba-bottom{padding:0 calc(12px + env(safe-area-inset-right,0px)) calc(10px + env(safe-area-inset-bottom,0px)) calc(12px + env(safe-area-inset-left,0px))}
}
`,document.head.appendChild(e)}var Jg=15,Yg=2.35,Xg=11.5,Zg=45,Qg=class{renderer;onSelect;scene=new et;camera;slots=[];raycaster=new Xe;picks=[];selectedId=Tc[0].id;hoverId=null;t=0;constructor(e,t,n){this.renderer=e,this.onSelect=n,this.scene.background=new G(658970),this.scene.fog=new p(658970,15,34);let r=new xr(e);this.scene.environment=r.fromScene(new So,.04).texture,this.scene.environmentIntensity=.5,r.dispose(),this.scene.add(new se(10471167,1710628,1));let i=new Ve(16773590,2.4);i.position.set(5,9,7),this.scene.add(i);let a=new Ve(7315711,.8);a.position.set(-6,4,-5),this.scene.add(a);let o=new L(new V(13,56),new Vt({color:1449264,roughness:.92,metalness:.1}));o.rotation.x=-Math.PI/2,this.scene.add(o);let s=Tc.length,c=new Re(.72,.98,36);Tc.forEach((e,n)=>{let r=new ht,i=(n-(s-1)/2)*(Yg/Jg);r.position.x=Math.sin(i)*Jg,r.position.z=(Math.cos(i)-1)*Jg;let a=Math.atan2(-r.position.x,Xg-r.position.z)*.55;r.rotation.y=a;let o=e.scale??1,l=new xo(t,e.model,e.rig===`large`?`Large/`:``),u=[];l.root.traverse(e=>{if(!(e instanceof L))return;e.material=Array.isArray(e.material)?e.material.map(e=>e.clone()):e.material.clone();let t=Array.isArray(e.material)?e.material[0]:e.material;t instanceof Vt&&u.push(t)}),l.root.scale.setScalar(o),r.add(l.root),e.weaponR&&l.attach(t.instance(e.weaponR),`handslot.r`),e.weaponL&&l.attach(t.instance(e.weaponL),`handslot.l`);let d=new L(c,new R({color:e.tint,transparent:!0,opacity:0,side:2}));d.rotation.x=-Math.PI/2,d.position.y=.04,r.add(d);let f=new L(new Ze(1.5,2.3*o,1.5),new R({visible:!1}));f.position.y=1.15*o,f.userData.champId=e.id,r.add(f),this.picks.push(f),this.scene.add(r),l.play(`Idle_B`,{fade:0}),l.update(n*.37),this.slots.push({id:e.id,tint:e.tint,char:l,group:r,ring:d,mats:u,baseYaw:a,baseZ:r.position.z})}),this.camera=new Ue(Zg,1,.1,100),this.camera.position.set(0,2.8,Xg),this.camera.lookAt(0,1.05,0),this.resize()}select(e){this.selectedId=e,this.onSelect(e)}pick(e,t){let n=new N(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1);this.raycaster.setFromCamera(n,this.camera);let r=this.raycaster.intersectObjects(this.picks,!1)[0];return r?r.object.userData.champId:null}onPointerMove(e,t){this.hoverId=this.pick(e,t)}onClick(e,t){let n=this.pick(e,t);return n?(this.select(n),!0):!1}update(e){this.t+=e;for(let t of this.slots){t.char.update(e);let n=t.id===this.selectedId,r=t.id===this.hoverId,i=t.baseZ+(n?1.2:0),a=n?1.12:r?1.05:1;t.group.position.z+=(i-t.group.position.z)*Math.min(1,8*e);let o=t.group.scale.x+(a-t.group.scale.x)*Math.min(1,8*e);t.group.scale.setScalar(o),t.group.rotation.y=t.baseYaw+(n?Math.sin(this.t*.6)*.25:0);let s=t.ring.material,c=n?.85+Math.sin(this.t*4)*.15:r?.4:0;s.opacity+=(c-s.opacity)*Math.min(1,10*e),t.ring.rotation.z+=(n?1.4:.3)*e;let l=n?.18:r?.07:0,u=new G(t.tint);for(let e of t.mats)e.emissive.setRGB(u.r*l,u.g*l,u.b*l)}}render(){this.renderer.render(this.scene,this.camera)}resize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.fov=Ko(Zg,this.camera.aspect),this.camera.updateProjectionMatrix()}dispose(){for(let e of this.slots)e.char.dispose();this.scene.traverse(e=>{if(e instanceof L){e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()}})}},$g=[`flag`,`worn`,`dirt`,`grate`],e_=`ba-map`,t_=`floor_tile_large.wall.pillar.pillar_decorated.column.torch_lit.crate_large.barrel_large.banner_red.banner_blue.floor_foundation_allsides.floor_foundation_corner.stairs.wall_corner.wall_broken.wall_gated.wall_pillar.stairs_wide.floor_tile_large_rocks.floor_tile_big_grate.floor_dirt_large.floor_tile_small_weeds_A.rubble_half.rocks.rocks_small.rocks_gold.chest_gold.chest_large_gold.chest_mimic.chest.coin_stack_small.coin_stack_medium.keg.keg_decorated.crates_stacked.trunk_large_A.post.candle_triple.sword_shield_broken.scaffold_frame_small.bucket_pickaxes.banner_thin_yellow.banner_white`.split(`.`),n_=[...t_,`vampire_throne`,`paladin_statue`,`mushroom`],r_=2e3,i_=512,a_=4096,o_=-3;function s_(e,t,n){return Math.min(n,Math.max(t,e))}function c_(e){if(!Yd(e))return null;let t=e.model;if(!Zd(t)||t.length===0||t.length>64||!Xd(e.x)||!Xd(e.y)||!Xd(e.rot)||!Xd(e.scale))return null;let n=e.lie;if(n!==void 0&&n!==!0&&n!==!1)return null;let r=e.h;if(r!==void 0&&!Xd(r))return null;let i=d(e.x,e.y,o_),a={model:t,x:i.x,y:i.y,rot:e.rot,scale:s_(e.scale,.05,10)};return n===!0&&(a.lie=!0),r!==void 0&&(a.h=s_(r,-10,20)),a}function l_(e){if(!Yd(e)||!Xd(e.x)||!Xd(e.y)||!Xd(e.radius)||!Xd(e.height))return null;let t=e.model;if(t!==void 0&&(!Zd(t)||t.length===0||t.length>64))return null;let n=d(e.x,e.y,o_),r={x:n.x,y:n.y,radius:s_(e.radius,.05,20),height:s_(e.height,.1,30)};return t!==void 0&&(r.model=t),r}function u_(e){return $g.some(t=>t===e)}var d_=e=>Math.round(e/4)*4;function f_(e){return!Yd(e)||!Xd(e.x)||!Xd(e.y)||!u_(e.t)?null:{x:d_(s_(e.x,-200,200)),y:d_(s_(e.y,-200,200)),t:e.t}}function p_(e){if(!Yd(e)||e.version!==1)return null;let t=e.props,n=e.colliders;if(!Array.isArray(t)||!Array.isArray(n)||t.length>r_||n.length>i_)return null;let r=t,i=n,a=[];for(let e of r){let t=c_(e);if(!t)return null;a.push(t)}let o=[];for(let e of i){let t=l_(e);if(!t)return null;o.push(t)}let s={version:1,props:a,colliders:o},c=e.floor;if(c!==void 0){if(!Array.isArray(c)||c.length>a_)return null;let e=c,t=[];for(let n of e){let e=f_(n);if(!e)return null;t.push(e)}t.length>0&&(s.floor=t)}return s}function m_(e){return JSON.stringify(e,null,2)}var h_=`modulepreload`,g_=function(e,t){return new URL(e,t).href},__={},v_=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=g_(t,n),t=s(t),t in __)return;__[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:h_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},y_=document.getElementById(`game`),b_=document.getElementById(`loading`),x_=document.getElementById(`bar-fill`),S_=[`Knight`,`Ranger`,`Mage`,`Rogue_Hooded`,`Paladin_with_Helmet`,`Witch`],C_=`Skeleton_Golem`,w_=[`Skeleton_Warrior`,`Skeleton_Mage`,`Skeleton_Minion`,`FrostGolem`],T_=[`sword_2handed`,`dagger`,`paladin_hammer`,`paladin_shield`,`bow`,`staff`,`wand_A`],E_=[`Skeleton_Staff`,`FrostGolem_Axe_Large`,`sword_A`,`sword_D`,`axe_A`,`hammer_B`,`dagger_A`,`spear_A`,`staff_B`,`wand_B`],D_=`Rig_Medium_General`,O_=[`Rig_Medium_MovementBasic`,`Rig_Medium_MovementAdvanced`,`Rig_Medium_CombatMelee`,`Rig_Medium_CombatRanged`,`Rig_Medium_Special`],k_=[`Rig_Large_General`,`Rig_Large_MovementBasic`,`Rig_Large_MovementAdvanced`,`Rig_Large_CombatMelee`,`Rig_Large_Simulation`],A_=[...t_.map(e=>({name:e,url:`./models/dungeon/${e}.gltf`})),{name:`vampire_throne`,url:`./models/props/Vampire_Throne.gltf`},{name:`paladin_statue`,url:`./models/props/paladin_statue.gltf`},{name:`mushroom`,url:`./models/props/Mushroom.gltf`}];async function j_(){try{let e=await fetch(`./maps/default.json`);if(!e.ok)return null;let t=p_(await e.json());return t||console.warn(`[map] maps/default.json is invalid — using the procedural arena`),t}catch{return null}}function M_(){let e=localStorage.getItem(e_);if(e===null)return null;try{let t=p_(JSON.parse(e));return t||console.warn(`[map] localStorage ${e_} is invalid — ignoring`),t}catch{return console.warn(`[map] localStorage ${e_} is not JSON — ignoring`),null}}async function N_(e){let t=0;x_&&(x_.style.width=`0%`),await Promise.all(e.map(async n=>{await n,t++,x_&&(x_.style.width=`${Math.round(t/e.length*100)}%`)}))}function P_(e){b_&&(b_.style.display=e?`flex`:`none`)}function F_(e){console.error(e),b_&&(b_.style.display=`flex`,b_.innerHTML=`<div style="color:#ff6a6a;font:14px monospace;padding:20px;text-align:center">Failed to load:<br>${e instanceof Error?e.message:String(e)}</div>`)}async function I_(){let e=new es(y_),t=new vo,n=j_();await N_([...S_.map(e=>t.loadCharacter(e,`./models/characters/${e}.glb`)),...T_.map(e=>t.loadCharacter(e,`./models/weapons/${e}.gltf`)),t.loadClips(`./models/animations/${D_}.glb`)]);let r=null,i=!1,a=async()=>{await N_([t.loadCharacter(C_,`./models/characters/${C_}.glb`),...w_.map(e=>t.loadCharacter(e,`./models/characters/${e}.glb`)),...O_.map(e=>t.loadClips(`./models/animations/${e}.glb`)),...k_.map(e=>t.loadClips(`./models/animations/${e}.glb`,`Large/`)),...A_.map(e=>t.loadCharacter(e.name,e.url,e.url.includes(`/dungeon/`)?{matte:!0,tint:13286303}:{matte:!0})),...E_.map(e=>t.loadCharacter(e,`./models/weapons/${e}.gltf`))]),i=!0},o=()=>r??=a(),s=new URLSearchParams(location.search);if((s.has(`trailer`)||s.has(`editor`)||s.has(`viewer`)||s.has(`auto`)||s.has(`online`))&&await o(),P_(!1),s.has(`trailer`)){let{runBattleArenaTrailer:n}=await v_(async()=>{let{runBattleArenaTrailer:e}=await import(`./trailer-director-Dm1fifkp.js`);return{runBattleArenaTrailer:e}},__vite__mapDeps([0,1]),import.meta.url);n(e,t),window.addEventListener(`resize`,()=>e.resize());return}if(s.has(`editor`)){let{EditorScene:n}=await v_(async()=>{let{EditorScene:e}=await import(`./editor-scene-DZeplL6I.js`);return{EditorScene:e}},__vite__mapDeps([2,1]),import.meta.url),r=new n(e,t);await r.init();let i=new tn;e.renderer.setAnimationLoop(e=>{i.update(e),r.update(Math.min(i.getDelta(),1/30))}),window.addEventListener(`resize`,()=>e.resize());return}if(s.has(`viewer`)){let{ViewerScene:n}=await v_(async()=>{let{ViewerScene:e}=await import(`./viewer-scene-9SicLp_g.js`);return{ViewerScene:e}},__vite__mapDeps([3,1]),import.meta.url),r=new n(e,t);r.init();let i=new tn;e.renderer.setAnimationLoop(e=>{i.update(e),r.update(Math.min(i.getDelta(),1/30))}),window.addEventListener(`resize`,()=>e.resize());return}let c=await n,l=M_(),u=new tn,d=null,f=!1,p=!1,m=e=>{u.update(e);let t=Math.min(u.getDelta(),1/30);d?.update(t)},h=n=>{An(),f=n.online;let r=(n.online?null:l)??c;r&&(ve(r),Rh(r.props));let i=new Ts(e.renderer.domElement),a=new Vs,o=new Ig(e,t,i,n,a);d=o,Xn({mute:{get:()=>o.audio.isMuted,set:e=>o.audio.setMuted(e)}}),e.renderer.setAnimationLoop(m)},g=async e=>{P_(!0),await o(),P_(!1),h(e)},_=e=>{let t=Rn()&&e.online?{...e,online:!1,room:``}:e;if(i){h(t);return}g(t).catch(F_)},v=ls({isLive:()=>f});if(Fn({onPause:()=>{v.show(),!(f||!d)&&(p=!0,e.renderer.setAnimationLoop(null),d.pauseAudio())},onResume:()=>{v.hide(),p&&(p=!1,u.reset(),e.renderer.setAnimationLoop(m),d?.resumeAudio())}}),s.has(`auto`)||s.has(`online`))_({champId:zg(),name:Bg(),online:s.has(`online`),room:Ud(s.get(`room`)??``)});else{let n=e.renderer.domElement,r=zg(),i,a=new Qg(e.renderer,t,e=>i.setSelected(e)),s=e=>a.onPointerMove(e.clientX,e.clientY),c=e=>void a.onClick(e.clientX,e.clientY),l=()=>a.resize();i=new Gg({initial:r,onSelect:e=>a.select(e),onStart:t=>{e.renderer.setAnimationLoop(null),n.removeEventListener(`pointermove`,s),n.removeEventListener(`click`,c),window.removeEventListener(`resize`,l),a.dispose(),_(t)}}),n.addEventListener(`pointermove`,s),n.addEventListener(`click`,c),window.addEventListener(`resize`,l);let u=()=>{window.removeEventListener(`pointerdown`,u),window.removeEventListener(`keydown`,u),o().catch(()=>void 0)};window.addEventListener(`pointerdown`,u),window.addEventListener(`keydown`,u),a.select(r);let d=new tn;e.renderer.setAnimationLoop(e=>{d.update(e),a.update(Math.min(d.getDelta(),1/30)),a.render()})}window.addEventListener(`resize`,()=>e.resize())}I_().catch(F_);export{Ec as A,$c as C,Wc as D,Kc as E,As as F,xo as I,ho as L,Fs as M,Os as N,Mc as O,ks as P,ll as S,Uc as T,$l as _,m_ as a,hu as b,Bh as c,vd as d,cd as f,uu as g,Ul as h,p_ as i,Ps as j,Tc as k,Eh as l,Mu as m,e_ as n,sg as o,sd as p,n_ as r,Vh as s,$g as t,Am as u,Kl as v,Gc as w,jl as x,du as y};