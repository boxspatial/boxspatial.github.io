import{h9 as xt,hl as vt,hm as dt,hn as wt,ho as Mt,bH as Rt,ai as y,aj as F,am as bt,dD as Ct,a as H,hp as _t,bO as it,hq as b,hr as Ot,hs as st,ht as K,hu as Et,K as lt,hv as j,hw as B,hx as k,fB as Q,fA as X,hy as Nt,hf as St,hz as jt,hA as Bt,hB as zt,hC as z,hD as ct,hE as Z,hF as Lt,hG as Vt,fm as Gt,hH as It,hI as Wt,fT as qt,hJ as Dt}from"./index-efef4772.js";import{e as ut}from"./mat3f64-221ce671.js";import{e as w,o as N}from"./mat4f64-1413b4a7.js";import{c as R}from"./spatialReferenceEllipsoidUtils-ca30daa1.js";import{m as Ht,p as Ut,t as tt,o as Yt}from"./MeshLocalVertexSpace-8031cf08.js";import{m as Jt}from"./MeshGeoreferencedRelativeVertexSpace-4f0d7b2f.js";import{v as I,y as Kt,x as kt}from"./quat-08b43bbe.js";import{e as U}from"./quatf64-3363c48e.js";import{n as x,s as ft,r as M}from"./vec32-22960fb5.js";import{i as $,T as A}from"./BufferView-f541be9b.js";function T(t=pt){return[t[0],t[1],t[2],t[3]]}function S(t,r,n=T()){return xt(n,t),n[3]=r,n}function rt(t,r,n=T()){return I(C,t,W(t)),I(nt,r,W(r)),Kt(C,nt,C),Xt(n,vt(kt(n,C)))}function Er(t,r,n,e=T()){return S(dt,t,_),S(wt,r,et),S(Mt,n,ot),rt(_,et,_),rt(_,ot,e),e}function Nr(t){return t}function Qt(t){return t[3]}function W(t){return Rt(t[3])}function Xt(t,r){return t[3]=r,t}const pt=[0,0,1,0],C=U(),nt=U();T();const _=T(),et=T(),ot=T();var q;let h=q=class extends Ct{constructor(t){super(t),this.translation=H(),this.rotationAxis=_t(pt),this.rotationAngle=0,this.scale=it(1,1,1)}get rotation(){return S(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=b(t),this.rotationAngle=Qt(t)}get localMatrix(){const t=w();return I(at,this.rotation,W(this.rotation)),Ot(t,at,this.translation,this.scale),t}get localMatrixInverse(){return st(w(),this.localMatrix)}applyLocal(t,r){return K(r,t,this.localMatrix)}applyLocalInverse(t,r){return K(r,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&Et(this.localMatrix,t.localMatrix)}clone(){const t={translation:b(this.translation),rotationAxis:b(this.rotationAxis),rotationAngle:this.rotationAngle,scale:b(this.scale)};return new q(t)}};y([F({type:[Number],nonNullable:!0,json:{write:!0}})],h.prototype,"translation",void 0),y([F({type:[Number],nonNullable:!0,json:{write:!0}})],h.prototype,"rotationAxis",void 0),y([F({type:Number,nonNullable:!0,json:{write:!0}})],h.prototype,"rotationAngle",void 0),y([F({type:[Number],nonNullable:!0,json:{write:!0}})],h.prototype,"scale",void 0),y([F()],h.prototype,"rotation",null),y([F()],h.prototype,"localMatrix",null),y([F()],h.prototype,"localMatrixInverse",null),h=q=y([bt("esri.geometry.support.MeshTransform")],h);const at=U(),Zt=h;function gt(t,r){return t.isGeographic||t.isWebMercator&&((r==null?void 0:r.geographic)??!0)}function Sr(t,r,n){const e=!t.isGeoreferenced;(n==null?void 0:n.geographic)!=null&&n.geographic!==e&&lt.getLogger(r).warnOnce(`Specifying the 'geographic' parameter (${n.geographic}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}const L=lt.getLogger("esri.geometry.support.meshUtils.normalProjection");function tr(t,r,n,e,o){return G(e)?(V(m.TO_PCPF,$.fromTypedArray(t),A.fromTypedArray(r),A.fromTypedArray(n),e,$.fromTypedArray(o)),o):(L.error("Cannot convert spatial reference to PCPF"),o)}function rr(t,r,n,e,o){return G(e)?(V(m.FROM_PCPF,$.fromTypedArray(t),A.fromTypedArray(r),A.fromTypedArray(n),e,$.fromTypedArray(o)),o):(L.error("Cannot convert to spatial reference from PCPF"),o)}function nr(t,r,n){return j(t,r,0,n,R(r),0,t.length/3),n}function er(t,r,n){return j(t,R(n),0,r,n,0,t.length/3),r}function or(t,r,n){return z(u,n),x(r,t,u),ct(u)||ft(r,r),r}function ar(t,r,n){if(z(u,n),x(r,t,u,4),ct(u)||ft(r,r,4),t!==r)for(let e=3;e<t.length;e+=4)r[e]=t[e];return r}function ir(t,r,n,e,o){if(!G(e))return L.error("Cannot convert spatial reference to PCPF"),o;V(m.TO_PCPF,$.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),A.fromTypedArray(r),A.fromTypedArray(n),e,$.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function sr(t,r,n,e,o){if(!G(e))return L.error("Cannot convert to spatial reference from PCPF"),o;V(m.FROM_PCPF,$.fromTypedArray(t,16),A.fromTypedArray(r),A.fromTypedArray(n),e,$.fromTypedArray(o,16));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function V(t,r,n,e,o,a){if(!r)return;const i=n.count,c=R(o);if(ht(o))for(let s=0;s<i;s++)e.getVec(s,O),r.getVec(s,g),B(c,O,E,c),k(u,E),t===m.FROM_PCPF&&Q(u,u),X(g,g,u),a.setVec(s,g);else for(let s=0;s<i;s++){e.getVec(s,O),r.getVec(s,g),B(c,O,E,c),k(u,E);const l=Nt(n.get(s,1));let f=Math.cos(l);t===m.TO_PCPF&&(f=1/f),u[0]*=f,u[1]*=f,u[2]*=f,u[3]*=f,u[4]*=f,u[5]*=f,t===m.FROM_PCPF&&Q(u,u),X(g,g,u),St(g,g),a.setVec(s,g)}return a}function G(t){return ht(t)||lr(t)}function ht(t){return t.isWGS84||jt(t)||Bt(t)||zt(t)}function lr(t){return t.isWebMercator}var m;(function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"})(m||(m={}));const O=H(),g=H(),E=w(),u=ut();function Y(t,r,n){return gt(r.spatialReference,n)?gr(t,r,n):pr(t,r,n)}function mt(t,r,n,e){const{position:o,normal:a,tangent:i}=t;if(!r.isRelative)return{position:o,normal:a,tangent:i};const c=(n==null?void 0:n.localMatrix)??N;return Y({position:M(new Float64Array(o.length),o,c),normal:a!=null?or(a,new Float32Array(a.length),c):null,tangent:i!=null?ar(i,new Float32Array(i.length),c):null},r.getOriginPoint(e),{geographic:!r.isGeoreferenced})}function cr(t,r,n){if(n!=null&&n.useTransform){const{position:e,normal:o,tangent:a}=t,{x:i,y:c,z:s}=r,l=it(i,c,s??0);return{vertexAttributes:{position:e,normal:o,tangent:a},vertexSpace:n.geographic??1?new Ht({origin:l}):new Jt({origin:l}),transform:new Zt}}return{vertexAttributes:Y(t,r,n),vertexSpace:new Ut,transform:null}}function D(t,r,n){return gt(r.spatialReference,n)?$r(t,r,n):yt(t,r,n)}function ur(t,r,n,e,o){if(!r.isRelative)return D(t,e,o);const{spatialReference:a}=e,i=mt(t,r,n,a);return e.equals(r.getOriginPoint(a))?yt(i,e,o):D(i,e,o)}function fr({positions:t,transform:r,vertexSpace:n,inSpatialReference:e,outSpatialReference:o,outPositions:a,local:i}){const c=n.isRelative?n.origin:Z,s=n.isRelative?(r==null?void 0:r.localMatrix)??N:N;if(n.isGeoreferenced){const p=a??tt(t.length);if(Lt(s,N)?Yt(p,t):M(p,t,s),!Vt(c,Z)){const[Ft,Pt,Tt]=c;for(let d=0;d<p.length;d+=3)p[d]+=Ft,p[d+1]+=Pt,p[d+2]+=Tt}return j(p,e,0,p,o,0,p.length/3),p}const l=R(e),f=!i&&Gt(e,l)?l:e;B(e,c,P,f),It(P,P,s);const v=a??tt(t.length);return M(v,t,P),j(v,f,0,v,o,0,v.length/3),v}function pr(t,r,n){const e=new Float64Array(t.position.length),o=t.position,a=r.x,i=r.y,c=r.z??0,s=J(n?n.unit:null,r.spatialReference);for(let l=0;l<o.length;l+=3)e[l]=o[l]*s+a,e[l+1]=o[l+1]*s+i,e[l+2]=o[l+2]*s+c;return{position:e,normal:t.normal,tangent:t.tangent}}function gr(t,r,n){const e=r.spatialReference,o=$t(r,n,P),a=new Float64Array(t.position.length),i=hr(t.position,o,e,a),c=z(At,o);return{position:i,normal:mr(i,a,t.normal,c,e),tangent:yr(i,a,t.tangent,c,e)}}function hr(t,r,n,e){M(e,t,r);const o=new Float64Array(t.length);return er(e,o,n)}function mr(t,r,n,e,o){if(n==null)return null;const a=new Float32Array(n.length);return x(a,n,e),rr(a,t,r,o,a),a}function yr(t,r,n,e,o){if(n==null)return null;const a=new Float32Array(n.length);x(a,n,e,4);for(let i=3;i<a.length;i+=4)a[i]=n[i];return sr(a,t,r,o,a),a}function yt(t,r,n){const e=new Float64Array(t.position.length),o=t.position,a=r.x,i=r.y,c=r.z??0,s=J(n?n.unit:null,r.spatialReference);for(let l=0;l<o.length;l+=3)e[l]=(o[l]-a)/s,e[l+1]=(o[l+1]-i)/s,e[l+2]=(o[l+2]-c)/s;return{position:e,normal:t.normal,tangent:t.tangent}}function $r(t,r,n){const e=r.spatialReference;$t(r,n,P);const o=st(Tr,P),a=new Float64Array(t.position.length),i=Ar(t.position,e,o,a),c=z(At,o);return{position:i,normal:Fr(t.normal,t.position,a,e,c),tangent:Pr(t.tangent,t.position,a,e,c)}}function $t(t,r,n){B(t.spatialReference,[t.x,t.y,t.z??0],n,R(t.spatialReference));const e=J(r?r.unit:null,t.spatialReference);return Wt(n,n,[e,e,e]),n}function Ar(t,r,n,e){const o=nr(t,r,e),a=new Float64Array(o.length);return M(a,o,n),a}function Fr(t,r,n,e,o){if(t==null)return null;const a=tr(t,r,n,e,new Float32Array(t.length));return x(a,a,o),a}function Pr(t,r,n,e,o){if(t==null)return null;const a=ir(t,r,n,e,new Float32Array(t.length));return x(a,a,o,4),a}function J(t,r){if(t==null)return 1;const n=qt(r);return 1/Dt(n,"meters",t)}const P=w(),Tr=w(),At=ut(),jr=Object.freeze(Object.defineProperty({__proto__:null,georeference:Y,georeferenceApplyTransform:mt,georeferenceByTransform:cr,project:fr,ungeoreference:D,ungeoreferenceByTransform:ur},Symbol.toStringTag,{value:"Module"}));export{D,er as E,fr as I,Zt as N,Y as O,ir as R,mt as T,tr as _,T as a,ur as b,jr as c,rt as g,nr as h,rr as j,Er as l,Sr as o,cr as q,gt as r,sr as v,W as w,Nr as x};