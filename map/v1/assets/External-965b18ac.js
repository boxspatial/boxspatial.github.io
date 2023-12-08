import{fX as N,s as y,G as A,fY as u,fZ as c}from"./index-efef4772.js";class b{constructor(r,s,t){this.assetName=r,this.assetMimeType=s,this.parts=t}equals(r){return this===r||this.assetName===r.assetName&&this.assetMimeType===r.assetMimeType&&N(this.parts,r.parts,(s,t)=>s.equals(t))}isOnService(r){return this.parts.every(s=>s.isOnService(r))}makeHash(){let r="";for(const s of this.parts)r+=s.partHash;return r}async toBlob(r){const{parts:s}=this;if(s.length===1)return s[0].toBlob(r);const t=await Promise.all(s.map(a=>a.toBlob(r)));return y(r),new Blob(t)}}class B{constructor(r,s){this.partUrl=r,this.partHash=s}equals(r){return this===r||this.partUrl===r.partUrl&&this.partHash===r.partHash}isOnService(r){return this.partUrl.startsWith(`${r.path}/assets/`)}async toBlob(r){const{data:s}=await A(this.partUrl,{responseType:"blob"});return y(r),s}}function H(e){return v(e==null?void 0:e.source)}function f(e){return Array.isArray(e)?e.every(r=>r instanceof b):!1}const l=/^(model\/gltf\+json)|(model\/gltf-binary)$/,h=/\.(gltf|glb)/i;function v(e){return e?Array.isArray(e)?e.some(p):p(e):!1}function p(e){if(e instanceof File){const{type:r,name:s}=e;return l.test(r)||h.test(s)}return l.test(e.assetMimeType)||h.test(e.assetName)}function M(e,r){if(!e)return!1;const{source:s}=e;return T(s,r)}function U(e,r){if(e===r)return!0;const{source:s}=e,{source:t}=r;if(s===t)return!0;if(f(s)&&f(t)){if(s.length!==t.length)return!1;const a=(n,o)=>n.assetName<o.assetName?-1:n.assetName>o.assetName?1:0,i=[...s].sort(a),g=[...t].sort(a);for(let n=0;n<i.length;++n)if(!i[n].equals(g[n]))return!1;return!0}return!1}function T(e,r){return Array.isArray(e)?e.every(s=>m(s,r)):m(e,r)}function m(e,r){return e instanceof b&&e.isOnService(r)}function q(e,r){return e instanceof File?u(e.name,r)??c(e.type,r):c(e.assetMimeType,r)??u(e.assetName,r)}function O(e){return Array.isArray(e)?e:[e]}function S(e){return!!e.original}export{S as A,O as N,b as a,q as g,U as h,B as i,M as m,H as o};
