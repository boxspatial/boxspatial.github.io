import{eo as q,ep as v,aH as w,S as H,eq as V,bm as R,er as d,ej as A,es as Z}from"./index-e5973b57.js";import{t as z}from"./json-48e3ea08.js";function M(e,n){return e?n?4:3:n?3:2}function X(e,n,s,r,i){if(n==null||!n.lengths.length)return null;const l=(i==null?void 0:i.originPosition)==="upperLeft"?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const t=e.coords,c=[],u=s?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:m,coords:p}=n,_=M(s,r);let T=0;for(const o of m){const h=L(u,p,T,o,s,r,l);h&&c.push(h),T+=o*_}if(c.sort((o,h)=>{let f=l*o[2]-l*h[2];return f===0&&s&&(f=o[4]-h[4]),f}),c.length){let o=6*c[0][2];t[0]=c[0][0]/o,t[1]=c[0][1]/o,s&&(o=6*c[0][4],t[2]=o!==0?c[0][3]/o:0),(t[0]<u[0]||t[0]>u[1]||t[1]<u[2]||t[1]>u[3]||s&&(t[2]<u[4]||t[2]>u[5]))&&(t.length=0)}if(!t.length){const o=n.lengths[0]?k(p,0,m[0],s,r):null;if(!o)return null;t[0]=o[0],t[1]=o[1],s&&o.length>2&&(t[2]=o[2])}return e}function L(e,n,s,r,i,l,t=1){const c=M(i,l);let u=s,m=s+c,p=0,_=0,T=0,o=0,h=0;for(let E=0,x=r-1;E<x;E++,u+=c,m+=c){const I=n[u],g=n[u+1],a=n[u+2],N=n[m],S=n[m+1],F=n[m+2];let b=I*S-N*g;o+=b,p+=(I+N)*b,_+=(g+S)*b,i&&(b=I*F-N*a,T+=(a+F)*b,h+=b),I<e[0]&&(e[0]=I),I>e[1]&&(e[1]=I),g<e[2]&&(e[2]=g),g>e[3]&&(e[3]=g),i&&(a<e[4]&&(e[4]=a),a>e[5]&&(e[5]=a))}if(o*t>0&&(o*=-1),h*t>0&&(h*=-1),!o)return null;const f=[p,_,.5*o];return i&&(f[3]=T,f[4]=.5*h),f}function k(e,n,s,r,i){const l=M(r,i);let t=n,c=n+l,u=0,m=0,p=0,_=0;for(let T=0,o=s-1;T<o;T++,t+=l,c+=l){const h=e[t],f=e[t+1],E=e[t+2],x=e[c],I=e[c+1],g=e[c+2],a=r?C(h,f,E,x,I,g):B(h,f,x,I);if(a)if(u+=a,r){const N=J(h,f,E,x,I,g);m+=a*N[0],p+=a*N[1],_+=a*N[2]}else{const N=D(h,f,x,I);m+=a*N[0],p+=a*N[1]}}return u>0?r?[m/u,p/u,_/u]:[m/u,p/u]:s>0?r?[e[n],e[n+1],e[n+2]]:[e[n],e[n+1]]:null}function B(e,n,s,r){const i=s-e,l=r-n;return Math.sqrt(i*i+l*l)}function C(e,n,s,r,i,l){const t=r-e,c=i-n,u=l-s;return Math.sqrt(t*t+c*c+u*u)}function D(e,n,s,r){return[e+.5*(s-e),n+.5*(r-n)]}function J(e,n,s,r,i,l){return[e+.5*(r-e),n+.5*(i-n),s+.5*(l-s)]}const y=[0,0];function P(e,n){if(!n)return null;if("x"in n){const s={x:0,y:0};return[s.x,s.y]=e(n.x,n.y,y),n.z!=null&&(s.z=n.z),n.m!=null&&(s.m=n.m),s}if("xmin"in n){const s={xmin:0,ymin:0,xmax:0,ymax:0};return[s.xmin,s.ymin]=e(n.xmin,n.ymin,y),[s.xmax,s.ymax]=e(n.xmax,n.ymax,y),n.hasZ&&(s.zmin=n.zmin,s.zmax=n.zmax,s.hasZ=!0),n.hasM&&(s.mmin=n.mmin,s.mmax=n.mmax,s.hasM=!0),s}return"rings"in n?{rings:Y(n.rings,e),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:Y(n.paths,e),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:j(n.points,e),hasM:n.hasM,hasZ:n.hasZ}:null}function Y(e,n){const s=[];for(const r of e)s.push(j(r,n));return s}function j(e,n){const s=[];for(const r of e){const i=n(r[0],r[1],[0,0]);s.push(i),r.length>2&&i.push(r[2]),r.length>3&&i.push(r[3])}return s}async function $(e,n){if(!e||!n)return;const s=Array.isArray(e)?e.map(r=>r.geometry!=null?r.geometry.spatialReference:null).filter(w):[e];await H(s.map(r=>({source:r,dest:n})))}const G=P.bind(null,q),O=P.bind(null,v);function nn(e,n,s,r){if(!e||(s||(s=n,n=e.spatialReference),!V(n)||!V(s)||R(n,s)))return e;if(d(n,s)){const i=A(s)?G(e):O(e);return i.spatialReference=s,i}return Z(z,[e],n,s,null,r)[0]}class K{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(n,s,r){if(!n||!n.length||!s||!r||R(s,r))return n;const i={geometries:n,inSpatialReference:s,outSpatialReference:r,resolve:null};return this._jobs.push(i),new Promise(l=>{i.resolve=l,this._timer===null&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null;const n=this._jobs.shift();if(!n)return;const{geometries:s,inSpatialReference:r,outSpatialReference:i,resolve:l}=n;d(r,i)?A(i)?l(s.map(G)):l(s.map(O)):l(Z(z,s,r,i,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const Q=new K;function en(e,n,s){return Q.push(e,n,s)}export{en as M,$ as f,nn as g,X as t};
