import{dq as C,cy as j,cz as v,gX as J,gN as Z,g2 as z,dE as B,cJ as y,cu as h,cI as V,bm as D,fo as Y,gY as K,gZ as L,ej as W,gI as A,_ as M,cB as S,g_ as G,cA as k,g$ as H,h0 as Q,h1 as X,h2 as tt,dA as N,h3 as et,h4 as rt,q as $,eq as _,cs as it}from"./index-e5973b57.js";import{f as I,g as F}from"./projectionSupport-b64b808a.js";const nt=new C({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),x=Object.freeze({}),E=new S,st=new S,P=new S,m={esriGeometryPoint:G,esriGeometryPolyline:k,esriGeometryPolygon:H,esriGeometryMultipoint:Q};function It(t,e,i,r=t.hasZ,n=t.hasM){if(e==null)return null;const l=t.hasZ&&r,s=t.hasM&&n;if(i){const a=v(P,e,t.hasZ,t.hasM,"esriGeometryPoint",i,r,n);return G(a,l,s)}return G(e,l,s)}function d(t,e,i,r,n,l,s=e,a=i){var R,p,g;const u=e&&s,o=i&&a,c=r!=null?"coords"in r?r:r.geometry:null;if(c==null)return null;if(n){let f=j(st,c,e,i,t,n,s,a);return l&&(f=v(P,f,u,o,t,l)),((R=m[t])==null?void 0:R.call(m,f,u,o))??null}if(l){const f=v(P,c,e,i,t,l,s,a);return((p=m[t])==null?void 0:p.call(m,f,u,o))??null}return J(E,c,e,i,s,a),((g=m[t])==null?void 0:g.call(m,E,u,o))??null}async function bt(t,e,i){const{outFields:r,orderByFields:n,groupByFieldsForStatistics:l,outStatistics:s}=t;if(r)for(let a=0;a<r.length;a++)r[a]=r[a].trim();if(n)for(let a=0;a<n.length;a++)n[a]=n[a].trim();if(l)for(let a=0;a<l.length;a++)l[a]=l[a].trim();if(s)for(let a=0;a<s.length;a++)s[a].onStatisticField&&(s[a].onStatisticField=s[a].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),lt(t,e,i)}async function lt(t,e,i){var l;if(!t)return null;let{where:r}=t;if(t.where=r=r&&r.trim(),(!r||/^1 *= *1$/.test(r)||e&&e===r)&&(t.where=null),!t.geometry)return t;let n=await ot(t);if(t.distance=0,t.units=null,t.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:s}=t.geometry;n=Z(n),n.spatialReference=s}if(n){await I(n.spatialReference,i),n=at(n,i);const s=(await z(B(n)))[0];if(s==null)throw x;const a="quantizationParameters"in t&&((l=t.quantizationParameters)==null?void 0:l.tolerance)||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,u=a&&q(n,i)?{densificationStep:8*a}:void 0,o=s.toJSON(),c=await F(o,o.spatialReference,i,u);if(!c)throw x;c.spatialReference=i,t.geometry=c}return t}function q(t,e){if(!t)return!1;const i=t.spatialReference;return(y(t)||h(t)||V(t))&&!D(i,e)&&!Y(i,e)}function at(t,e){const i=t.spatialReference;return q(t,e)&&y(t)?{spatialReference:i,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}async function ot(t){const{distance:e,units:i}=t,r=t.geometry;if(e==null||"vertexAttributes"in r)return r;const n=r.spatialReference,l=i?nt.fromJSON(i):K(n),s=n&&(L(n)||W(n))?r:await I(n,A).then(()=>F(r,A));return(await ut())(s.spatialReference,s,e,l)}async function ut(){return(await M(()=>import("./geometryEngineJSON-22d865a3.js"),["assets/geometryEngineJSON-22d865a3.js","assets/index-e5973b57.js","assets/index-dc13cc80.css","assets/geometryEngineJSON-96300b83.js","assets/json-48e3ea08.js"])).geodesicBuffer}function At(t){return t&&O in t?JSON.parse(JSON.stringify(t,ct)):t}const O="_geVersion",ct=(t,e)=>t!==O?e:void 0;function ft(t){return t==="mesh"?X:tt(t)}function T(t,e){return t?e?4:3:e?3:2}function mt(t,e,i,r){return U(t,e,i,r.coords[0],r.coords[1])}function pt(t,e,i,r,n,l){const s=T(n,l),{coords:a,lengths:u}=r;if(!u)return!1;for(let o=0,c=0;o<u.length;o++,c+=s)if(!U(t,e,i,a[c],a[c+1]))return!1;return!0}function U(t,e,i,r,n){if(!t)return!1;const l=T(e,i),{coords:s,lengths:a}=t;let u=!1,o=0;for(const c of a)u=yt(u,s,l,o,c,r,n),o+=c*l;return u}function yt(t,e,i,r,n,l,s){let a=t,u=r;for(let o=r,c=r+n*i;o<c;o+=i){u=o+i,u===c&&(u=r);const R=e[o],p=e[o+1],g=e[u],f=e[u+1];(p<s&&f>=s||f<s&&p>=s)&&R+(s-p)/(f-p)*(g-R)<l&&(a=!a)}return a}const w="feature-store:unsupported-query",Rt={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},b={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function St(t){return t!=null&&b.spatialRelationship[t]===!0}function gt(t){return t!=null&&b.queryGeometry[it(t)]===!0}function dt(t){return t!=null&&b.layerGeometry[t]===!0}function ht(){return M(()=>import("./geometryEngineJSON-22d865a3.js"),["assets/geometryEngineJSON-22d865a3.js","assets/index-e5973b57.js","assets/index-dc13cc80.css","assets/geometryEngineJSON-96300b83.js","assets/json-48e3ea08.js"])}function Nt(t,e,i,r,n){if(h(e)&&i==="esriGeometryPoint"&&(t==="esriSpatialRelIntersects"||t==="esriSpatialRelContains")){const l=N(new S,e,!1,!1);return Promise.resolve(s=>mt(l,!1,!1,s))}if(h(e)&&i==="esriGeometryMultipoint"){const l=N(new S,e,!1,!1);if(t==="esriSpatialRelContains")return Promise.resolve(s=>pt(l,!1,!1,s,r,n))}if(y(e)&&i==="esriGeometryPoint"&&(t==="esriSpatialRelIntersects"||t==="esriSpatialRelContains"))return Promise.resolve(l=>et(e,d(i,r,n,l)));if(y(e)&&i==="esriGeometryMultipoint"&&t==="esriSpatialRelContains")return Promise.resolve(l=>rt(e,d(i,r,n,l)));if(y(e)&&t==="esriSpatialRelIntersects"){const l=ft(i);return Promise.resolve(s=>l(e,d(i,r,n,s)))}return ht().then(l=>{const s=l[Rt[t]].bind(null,e.spatialReference,e);return a=>s(d(i,r,n,a))})}async function _t(t,e,i){const{spatialRel:r,geometry:n}=t;if(n){if(!St(r))throw new $(w,"Unsupported query spatial relationship",{query:t});if(_(n.spatialReference)&&_(i)){if(!gt(n))throw new $(w,"Unsupported query geometry type",{query:t});if(!dt(e))throw new $(w,"Unsupported layer geometry type",{query:t});if(t.outSR)return I(t.geometry&&t.geometry.spatialReference,t.outSR)}}}function xt(t){if(y(t))return!0;if(h(t)){for(const e of t.rings)if(e.length!==5||e[0][0]!==e[1][0]||e[0][0]!==e[4][0]||e[2][0]!==e[3][0]||e[0][1]!==e[3][1]||e[0][1]!==e[4][1]||e[1][1]!==e[2][1])return!1;return!0}return!1}async function Et(t,e){if(!t)return null;const i=e.featureAdapter,{startTimeField:r,endTimeField:n}=t;let l=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;if(r&&n)await e.forEach(a=>{const u=i.getAttribute(a,r),o=i.getAttribute(a,n);u==null||isNaN(u)||(l=Math.min(l,u)),o==null||isNaN(o)||(s=Math.max(s,o))});else{const a=r||n;await e.forEach(u=>{const o=i.getAttribute(u,a);o==null||isNaN(o)||(l=Math.min(l,o),s=Math.max(s,o))})}return{start:l,end:s}}function Mt(t,e,i){if(!e||!t)return null;const{startTimeField:r,endTimeField:n}=t;if(!r&&!n)return null;const{start:l,end:s}=e;return l===null&&s===null?null:l===void 0&&s===void 0?vt():r&&n?$t(i,r,n,l,s):wt(i,r||n,l,s)}function $t(t,e,i,r,n){return r!=null&&n!=null?l=>{const s=t.getAttribute(l,e),a=t.getAttribute(l,i);return(s==null||s<=n)&&(a==null||a>=r)}:r!=null?l=>{const s=t.getAttribute(l,i);return s==null||s>=r}:n!=null?l=>{const s=t.getAttribute(l,e);return s==null||s<=n}:void 0}function wt(t,e,i,r){return i!=null&&r!=null&&i===r?n=>t.getAttribute(n,e)===i:i!=null&&r!=null?n=>{const l=t.getAttribute(n,e);return l>=i&&l<=r}:i!=null?n=>t.getAttribute(n,e)>=i:r!=null?n=>t.getAttribute(n,e)<=r:void 0}function vt(){return()=>!1}export{It as G,xt as I,x as M,d as P,At as Z,Nt as a,_t as b,Mt as n,Et as t,bt as v,lt as z};
