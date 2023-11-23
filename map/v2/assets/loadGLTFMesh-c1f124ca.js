import{G as L,bQ as _,dm as B,i6 as C,lX as S,jp as P,bL as z,hR as D}from"./index-eed032b4.js";import{e as A}from"./mat3f64-221ce671.js";import{p as G,m as N,c as q,g as Q,a as K}from"./meshFeatureSet-fcdfcf3f.js";import{c as O,x as j,L as U,O as E,i as F,E as V,T as X,u as k}from"./BufferView-ed587754.js";import{t as H,f as J,i as W,o as M}from"./vec32-33d99223.js";import{n as Y,l as Z,o as ee,f as te,r as oe,a as ne,b as v,c as re,d as se,e as I,g as le,h as ae,i as ue}from"./DefaultMaterial_COLOR_GAMMA-dd1e8e1b.js";import{e as ie}from"./types-1305598a.js";import{q as ce}from"./georeference-13a6e65f.js";import{t as fe}from"./resourceUtils-1d112ccb.js";import{D as w}from"./enums-b14466b3.js";import"./imageUtils-c2d0d1ae.js";import"./MeshGeoreferencedRelativeVertexSpace-578fc903.js";import"./MeshLocalVertexSpace-eed424c3.js";import"./earcut-3e9b4557.js";import"./Indices-79a50390.js";import"./deduplicate-bcef8d64.js";import"./External-1e6998a2.js";import"./mat4f64-1413b4a7.js";import"./spatialReferenceEllipsoidUtils-2c452f46.js";import"./quat-0e1007d7.js";import"./quatf64-3363c48e.js";import"./basicInterfaces-4ab7cc6a.js";function me(e,o,t){const l=e.typedBuffer,s=e.typedBufferStride,r=o.typedBuffer,f=o.typedBufferStride,a=t?t.count:o.count;let u=(t&&t.dstIndex?t.dstIndex:0)*s,c=(t&&t.srcIndex?t.srcIndex:0)*f;for(let i=0;i<a;++i){for(let n=0;n<9;++n)l[u+n]=r[c+n];u+=s,c+=f}}Object.freeze(Object.defineProperty({__proto__:null,copy:me},Symbol.toStringTag,{value:"Module"}));function pe(e,o,t){const l=e.typedBuffer,s=e.typedBufferStride,r=o.typedBuffer,f=o.typedBufferStride,a=t?t.count:o.count;let u=(t&&t.dstIndex?t.dstIndex:0)*s,c=(t&&t.srcIndex?t.srcIndex:0)*f;for(let i=0;i<a;++i){for(let n=0;n<16;++n)l[u+n]=r[c+n];u+=s,c+=f}}Object.freeze(Object.defineProperty({__proto__:null,copy:pe},Symbol.toStringTag,{value:"Module"}));function T(e,o){return new e(new ArrayBuffer(o*e.ElementCount*ie(e.ElementType)))}async function Xe(e,o,t){const l={...t,useTransform:(t==null?void 0:t.useTransform)??!0},s=new Y(de(l)),r=(await Z(s,o,l,!0)).model,f=r.lods.shift(),a=new Map,u=new Map;r.textures.forEach((g,h)=>a.set(h,Te(g))),r.materials.forEach((g,h)=>u.set(h,$e(g,a)));const c=ge(f);for(const g of c.parts)ye(c,g,u);const{position:i,normal:n,tangent:m,color:p,texCoord0:y}=c.vertexAttributes,b={position:i.typedBuffer,normal:n!=null?n.typedBuffer:null,tangent:m!=null?m.typedBuffer:null,uv:y!=null?y.typedBuffer:null,color:p!=null?p.typedBuffer:null},x=ce(b,e,l);return{transform:x.transform,vertexSpace:x.vertexSpace,components:c.components,spatialReference:e.spatialReference,vertexAttributes:new G({position:x.vertexAttributes.position,normal:x.vertexAttributes.normal,tangent:x.vertexAttributes.tangent,color:b.color,uv:b.uv})}}function de(e){const o=e==null?void 0:e.resolveFile;return o?{busy:!1,request:async(t,l,s)=>{const r=o(t);return(await L(r,{responseType:l==="image"?"image":l==="binary"?"array-buffer":"json",signal:s!=null?s.signal:null})).data}}:null}function $(e,o){if(e==null)return"-";const t=e.typedBuffer;return`${_(o,t.buffer,()=>o.size)}/${t.byteOffset}/${t.byteLength}`}function xe(e){return e!=null?e.toString():"-"}function ge(e){let o=0;const t={color:!1,tangent:!1,normal:!1,texCoord0:!1},l=new Map,s=new Map,r=[];for(const f of e.parts){const{attributes:{position:a,normal:u,color:c,tangent:i,texCoord0:n}}=f,m=`
      ${$(a,l)}/
      ${$(u,l)}/
      ${$(c,l)}/
      ${$(i,l)}/
      ${$(n,l)}/
      ${xe(f.transform)}
    `;let p=!1;const y=_(s,m,()=>(p=!0,{start:o,length:a.count}));p&&(o+=a.count),u&&(t.normal=!0),c&&(t.color=!0),i&&(t.tangent=!0),n&&(t.texCoord0=!0),r.push({gltf:f,writeVertices:p,region:y})}return{vertexAttributes:{position:T(X,o),normal:t.normal?T(F,o):null,tangent:t.tangent?T(O,o):null,color:t.color?T(j,o):null,texCoord0:t.texCoord0?T(k,o):null},parts:r,components:[]}}function Te(e){return new N({data:(fe(e.data),e.data),wrap:ve(e.parameters.wrap)})}function $e(e,o){const t=new B(we(e.color,e.opacity)),l=e.emissiveFactor?new B(Be(e.emissiveFactor)):null,s=r=>r?new K({scale:r.scale?[r.scale[0],r.scale[1]]:[1,1],rotation:D(r.rotation??0),offset:r.offset?[r.offset[0],r.offset[1]]:[0,0]}):null;return new q({color:t,colorTexture:o.get(e.textureColor),normalTexture:o.get(e.textureNormal),emissiveColor:l,emissiveTexture:o.get(e.textureEmissive),occlusionTexture:o.get(e.textureOcclusion),alphaMode:he(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:o.get(e.textureMetallicRoughness),colorTextureTransform:s(e.colorTextureTransform),normalTextureTransform:s(e.normalTextureTransform),occlusionTextureTransform:s(e.occlusionTextureTransform),emissiveTextureTransform:s(e.emissiveTextureTransform),metallicRoughnessTextureTransform:s(e.metallicRoughnessTextureTransform)})}function ye(e,o,t){o.writeVertices&&be(e,o);const{indices:l,attributes:s,primitiveType:r,material:f}=o.gltf;let a=ee(l||s.position.count,r);const u=o.region.start;if(u){const c=new Uint32Array(a);for(let i=0;i<a.length;i++)c[i]+=u;a=c}e.components.push(new Q({faces:a,material:t.get(f),shading:s.normal?"source":"flat",trustSourceNormals:!0}))}function be(e,o){const{position:t,normal:l,tangent:s,color:r,texCoord0:f}=e.vertexAttributes,a=o.region.start,{attributes:u,transform:c}=o.gltf,i=u.position.count;if(H(t.slice(a,i),u.position,c),u.normal!=null&&l!=null){const n=C(A(),c),m=l.slice(a,i);J(m,u.normal,n),S(n)&&W(m,m)}else l!=null&&te(l,0,0,1,{dstIndex:a,count:i});if(u.tangent!=null&&s!=null){const n=C(A(),c),m=s.slice(a,i);oe(m,u.tangent,n),S(n)&&ne(m,m)}else s!=null&&v(s,0,0,1,1,{dstIndex:a,count:i});if(u.texCoord0!=null&&f!=null?re(f.slice(a,i),u.texCoord0):f!=null&&se(f,0,0,{dstIndex:a,count:i}),u.color!=null&&r!=null){const n=u.color,m=r.slice(a,i);if(n.elementCount===4)n instanceof O?I(m,n,255):n instanceof j?le(m,n):n instanceof U&&I(m,n,1/256);else{v(m,255,255,255,255);const p=E.fromTypedArray(m.typedBuffer,m.typedBufferStride);n instanceof F?M(p,n,255):n instanceof E?ae(p,n):n instanceof V&&M(p,n,1/256)}}else r!=null&&v(r.slice(a,i),255,255,255,255)}function he(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function ve(e){return{horizontal:R(e.s),vertical:R(e.t)}}function R(e){switch(e){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function d(e){return e**(1/ue)*255}function we(e,o){return P(d(e[0]),d(e[1]),d(e[2]),o)}function Be(e){return z(d(e[0]),d(e[1]),d(e[2]))}export{Xe as loadGLTFMesh};
