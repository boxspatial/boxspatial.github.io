import{fn as V,bI as bn,bu as J,T as O,P as I,aH as Pn,cr as hn,L as N,fo as Sn,q as Gn,fp as v,fq as C,fr as en,fs as Nn,ft as En,bJ as kn,fu as on}from"./index-e5973b57.js";var Q;function mn(n,t,i){return!Sn(n,t,i)}function W(n,t,i){const s=mn(n,t,i);if(s&&!V())throw new Gn("rasterprojectionhelper-project","projection engine is not loaded");return s}(function(n){n[n.None=0]="None",n[n.North=1]="North",n[n.South=2]="South",n[n.Both=3]="Both"})(Q||(Q={}));const sn=(n,t,i,s=0)=>{if(i[0]===1)return[0,0];let r=1,e=-1,o=1,f=-1;for(let u=0;u<n.length;u+=2)isNaN(n[u])||(r=r>n[u]?n[u]:r,e=e>n[u]?e:n[u],o=o>n[u+1]?n[u+1]:o,f=f>n[u+1]?f:n[u+1]);const{cols:l,rows:a}=t,c=(e-r)/l/i[0],M=(f-o)/a/i[1],y=2*s;let x=0,h=!1,p=[0,0];for(let u=0;u<l-3;u++){for(let R=0;R<a-3;R++){const m=u*a*2+2*R,g=(n[m]+n[m+4]+n[m+4*a]+n[m+4*a+4])/4,d=(n[m+1]+n[m+5]+n[m+4*a+1]+n[m+4*a+5])/4,w=Math.abs((g-n[m+2*a+2])/c),b=Math.abs((d-n[m+2*a+3])/M);if(w+b>x&&(x=w+b,p=[w,b]),y&&x>y){h=!0;break}}if(h)break}return p},Tn={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},B=32,F=4,H=F,K=new Map,D=new Map,Y=500;async function In(){V()||await bn()}function jn(n,t,i){return W(n.spatialReference,t),i?on(t,n.spatialReference,n):on(n.spatialReference,t,n)}function rn(n,t,i,s=null){const r=n.spatialReference;if(r.equals(t))return n;W(r,t,s);const e=i.center,o=new J({xmin:e.x-n.x/2,xmax:e.x+n.x/2,ymin:e.y-n.y/2,ymax:e.y+n.y/2,spatialReference:r}),f=O(o,t,s),l=_(t);let a;if(f==null||l!=null&&f.width>=l){const c=I(r)/I(t);a={x:n.x*c,y:n.y*c}}else a={x:f.width,y:f.height};return a}function E(n,t=.01){return I(n)?t/I(n):0}function an(n,t,i=null,s=!0){const r=n.spatialReference;if(r.equals(t))return n;W(r,t,i);const e=O(n,t,i);return s&&e&&pn([n],[e],r,t),e}function pn(n,t,i,s){const r=q(i,!0),e=q(s,!0),o=E(i,Y),f=E(s,Y);if(o&&r!=null&&e!=null)for(let l=0;l<n.length;l++){const a=t[l];if(!a)continue;const{x:c}=n[l],{x:M}=a;M>=e[1]-f&&Math.abs(c-r[0])<o?a.x-=e[1]-e[0]:M<=e[0]+f&&Math.abs(c-r[1])<o&&(a.x+=e[1]-e[0])}}function Cn(n){const{inSR:t,outSR:i,datumTransformation:s,preferPE:r}=n;if(t.equals(i)){const{points:e}=Z(n,null);return e}return t.isWebMercator&&i.isWGS84||t.isWGS84&&i.isWebMercator?_n(n):W(t,i,s)&&r&&(t.isGeographic||L(t)!=null)?ln(n):vn(n)}function vn(n){const{points:t}=Z(n,null),{inSR:i,outSR:s,datumTransformation:r}=n,e=t.map(f=>new N(f[0],f[1],i)),o=O(e,s,r);return r&&pn(e,o,i,s),o.map(f=>f?[f.x,f.y]:[NaN,NaN])}function ln(n){const{inSR:t,outSR:i,datumTransformation:s}=n,r=L(t),{points:e,mask:o}=Z(n,r);if(!t.isGeographic){const l=t.wkid?v.coordsys(t.wkid):v.fromString(t.isGeographic?C.PE_TYPE_GEOGCS:C.PE_TYPE_PROJCS,t.wkt);en.projToGeog(l,e.length,e)}if(s!=null&&s.steps.length){let l;if(i.isGeographic&&(l=e.map(([c])=>c>179.9955?1:c<-179.9955?-1:0)),s.steps.forEach(c=>{const M=c.wkid?v.geogtran(c.wkid):v.fromString(C.PE_TYPE_GEOGTRAN,c.wkt);Nn.geogToGeog(M,e.length,e,null,c.isInverse?C.PE_TRANSFORM_2_TO_1:C.PE_TRANSFORM_1_TO_2)}),l)for(let c=0;c<e.length;c++){const M=l[c],y=e[c][0],x=y>179.9955?1:y<-179.9955?-1:0;M&&x&&M!==x&&(e[c][0]=M>0?y+360:y-360)}}if(!i.isGeographic){const l=L(i,!0),a=l!=null&&l.isEnvelope?[l.bbox[1],l.bbox[3]]:[-90,90];zn(e,a);const c=i.wkid?v.coordsys(i.wkid):v.fromString(i.isGeographic?C.PE_TYPE_GEOGCS:C.PE_TYPE_PROJCS,i.wkt);en.geogToProj(c,e.length,e)}let f=e;if(o&&e.length!==o.length){f=[];for(let l=0,a=0;l<o.length;l++)o[l]?f.push(e[a++]):f.push([NaN,NaN])}return f}function _n(n){const{cols:t,rows:i,xres:s,yres:r,usePixelCenter:e,inSR:o,outSR:f}=n;let{xmin:l,ymax:a}=n;e&&(l+=s/2,a-=r/2);const c=[],M=[],y=Math.max(t,i);for(let h=0;h<y;h++){const p=l+s*Math.min(t,h),u=a-r*Math.min(i,h),R=O(new N({x:p,y:u,spatialReference:o}),f);h<=t&&c.push(R.x),h<=i&&M.push(R.y)}const x=[];for(let h=0;h<t;h++)for(let p=0;p<i;p++)x.push([c[h],M[p]]);return x}function L(n,t=!1){let i=n.wkid||n.wkt;if(!i||n.isGeographic)return null;if(i=String(i),K.has(i)){const o=K.get(i);return t?o==null?void 0:o.gcs:o==null?void 0:o.pcs}const s=n.wkid?v.coordsys(n.wkid):v.fromString(n.isGeographic?C.PE_TYPE_GEOGCS:C.PE_TYPE_PROJCS,n.wkt),r=cn(s,E(n,1e-4)),e=cn(s,0,!0);return K.set(i,{pcs:r,gcs:e}),t?e:r}function cn(n,t=0,i=!1){const s=En.generate(n),r=i?n.horizonGcsGenerate():n.horizonPcsGenerate();if(!s||!(r!=null&&r.length))return null;let e=!1,o=r.find(u=>u.getInclusive()===1&&u.getKind()===1);if(!o){if(o=r.find(u=>u.getInclusive()===1&&u.getKind()===0),!o)return null;e=!0}const f=i?0:(s.getNorthPoleLocation()===2?1:0)|(s.getSouthPoleLocation()===2?2:0),l=s.isPannableRectangle(),a=o.getCoord();if(e)return{isEnvelope:e,isPannable:l,vertices:a,coef:null,bbox:[a[0][0]-t,a[0][1]-t,a[1][0]+t,a[1][1]+t],poleLocation:f};let c=0;const M=[];let[y,x]=a[0],[h,p]=a[0];for(let u=0,R=a.length;u<R;u++){c++,c===R&&(c=0);const[m,g]=a[u],[d,w]=a[c];if(w===g)M.push([m,d,g,w,2]);else{const b=(d-m)/(w-g||1e-4),T=m-b*g;g<w?M.push([b,T,g,w,0]):M.push([b,T,w,g,1])}y=y<m?y:m,x=x<g?x:g,h=h>m?h:m,p=p>g?p:g}return{isEnvelope:!1,isPannable:l,vertices:a,coef:M,bbox:[y,x,h,p],poleLocation:f}}function Z(n,t){const i=[],{cols:s,rows:r,xres:e,yres:o,usePixelCenter:f}=n;let{xmin:l,ymax:a}=n;if(f&&(l+=e/2,a-=o/2),t==null){for(let x=0;x<s;x++)for(let h=0;h<r;h++)i.push([l+e*x,a-o*h]);return{points:i}}const c=new Uint8Array(s*r);if(t.isEnvelope){const{bbox:[x,h,p,u]}=t;for(let R=0,m=0;R<s;R++){const g=l+e*R,d=t.isPannable||g>=x&&g<=p;for(let w=0;w<r;w++,m++){const b=a-o*w;d&&b>=h&&b<=u&&(i.push([g,b]),c[m]=1)}}return{points:i,mask:c}}const M=t.coef,y=[];for(let x=0;x<r;x++){const h=a-o*x,p=[],u=[];for(let m=0;m<M.length;m++){const[g,d,w,b,T]=M[m];if(h===w&&w===b)p.push(g),p.push(d),u.push(2),u.push(2);else if(h>=w&&h<=b){const $=g*h+d;p.push($),u.push(T)}}let R=p;if(p.length>2){let m=u[0]===2?0:u[0],g=p[0];R=[];for(let d=1;d<u.length;d++)u[d]===2&&d!==u.length-1||(u[d]!==m&&(R.push(m===0?Math.min(g,p[d-1]):Math.max(g,p[d-1])),m=u[d],g=p[d]),d===u.length-1&&R.push(u[d]===0?Math.min(g,p[d]):Math.max(g,p[d])));R.sort((d,w)=>d-w)}else p[0]>p[1]&&(R=[p[1],p[0]]);y.push(R)}for(let x=0,h=0;x<s;x++){const p=l+e*x;for(let u=0;u<r;u++,h++){const R=a-o*u,m=y[u];if(m.length===2)p>=m[0]&&p<=m[1]&&(i.push([p,R]),c[h]=1);else if(m.length>2){let g=!1;for(let d=0;d<m.length;d+=2)if(p>=m[d]&&p<=m[d+1]){g=!0;break}g&&(i.push([p,R]),c[h]=1)}}}return{points:i,mask:c}}function zn(n,t){const[i,s]=t;for(let r=0;r<n.length;r++){const e=n[r][1];(e<i||e>s)&&(n[r]=[NaN,NaN])}}function gn(n){const t=_(n[0].spatialReference);if(n.length<2||t==null)return n[0];const i=E(n[0].spatialReference);if((n=n.filter(f=>f.width>i)).length===1)return n[0];let{xmin:s,xmax:r,ymin:e,ymax:o}=n[0];for(let f=1;f<n.length;f++){const l=n[f];r=l.xmax+t*f,e=Math.min(e,l.ymin),o=Math.max(o,l.ymax)}return new J({xmin:s,xmax:r,ymin:e,ymax:o,spatialReference:n[0].spatialReference})}function yn(n,t,i=null,s=!0){const r=n.spatialReference;if(r.equals(t))return n;const e=On(n),o=_(r,!0),f=_(t);if(e===0||o==null||f==null){const a=fn(n,t,i,s);if(o==null&&f!=null&&Math.abs(a.width-f)<E(t)&&V()){const c=L(r);if(c!=null&&c.poleLocation===Q.None&&n.width<(c.bbox[2]-c.bbox[0])/2)return Ln(n,t)||a}return a}const l=n.clone().normalize();if(l.length===1&&n.xmax<o&&n.xmax-o/2>E(r)){const{xmin:a,xmax:c}=n;for(let M=0;M<=e;M++){const y=M===0?a:-o/2,x=M===e?c-o*M:o/2;l[M]=new J({xmin:y,xmax:x,ymin:n.ymin,ymax:n.ymax,spatialReference:r})}}return gn(l.map(a=>fn(a,t,i,s)).filter(Pn))}function An(n,t,i){if(n.type==="extent"){const{xmin:s,ymin:r,xmax:e,ymax:o,spatialReference:f}=n;n=new hn({rings:[[[s,o],[e,o],[e,r],[s,r],[s,o]]],spatialReference:f})}return n.spatialReference.equals(t)?n:(W(n.spatialReference,t,i),O(n,t,i))}function Ln(n,t){const i=_(t);if(i==null)return null;let{xmin:s,ymin:r,xmax:e,ymax:o}=n;const f=n.spatialReference,l=new hn({spatialReference:f,rings:[[[s,r],[e,r],[e,o],[s,o],[s,r]]]}),a=O(l,t);if(a.rings.length!==2||!a.rings[0].length||!a.rings[1].length)return null;const{rings:c}=a,M=E(f),y=new J({spatialReference:t});for(let x=0;x<2;x++){s=e=c[x][0][0],r=o=c[x][0][1];for(let h=0;h<c[x].length;h++)s=s>c[x][h][0]?c[x][h][0]:s,e=e<c[x][h][0]?c[x][h][0]:e,r=r>c[x][h][1]?c[x][h][1]:r,o=o<c[x][h][1]?c[x][h][1]:o;if(x===0)y.ymin=r,y.ymax=o,y.xmin=s,y.xmax=e;else if(y.ymin=Math.min(y.ymin,r),y.ymax=Math.max(y.ymax,o),Math.abs(e-i/2)<M)y.xmin=s,y.xmax=y.xmax+i;else{if(!(Math.abs(s+i/2)<M))return null;y.xmax=e+i}}return y}function fn(n,t,i=null,s=!0,r=!0){const e=n.spatialReference;if(e.equals(t)||!t)return n;W(e,t,i);const o=O(n,t,i);if(r&&t.isWebMercator&&o&&(o.ymax=Math.min(20037508342787e-6,o.ymax),o.ymin=Math.max(-20037508342787e-6,o.ymin),o.ymin>=o.ymax))return null;if(!s||!o)return o;const f=q(e,!0),l=q(t,!0);if(f==null||l==null)return o;const a=E(e,.001),c=E(e,Y),M=E(t,.001);if(Math.abs(o.xmin-l[0])<M&&Math.abs(o.xmax-l[1])<M){const y=Math.abs(n.xmin-f[0]),x=Math.abs(f[1]-n.xmax);if(y<a&&x>c){o.xmin=l[0];const h=[];h.push(new N(n.xmax,n.ymin,e)),h.push(new N(n.xmax,(n.ymin+n.ymax)/2,e)),h.push(new N(n.xmax,n.ymax,e));const p=h.map(u=>an(u,t,i)).filter(u=>!isNaN(u==null?void 0:u.x)).map(u=>u.x);o.xmax=Math.max.apply(null,p)}if(x<a&&y>c){o.xmax=l[1];const h=[];h.push(new N(n.xmin,n.ymin,e)),h.push(new N(n.xmin,(n.ymin+n.ymax)/2,e)),h.push(new N(n.xmin,n.ymax,e));const p=h.map(u=>an(u,t,i)).filter(u=>!isNaN(u==null?void 0:u.x)).map(u=>u.x);o.xmin=Math.min.apply(null,p)}}else{const y=E(t,.001);Math.abs(o.xmin-l[0])<y&&(o.xmin=l[0]),Math.abs(o.xmax-l[1])<y&&(o.xmax=l[1])}return o}function _(n,t=!1){if(!n)return null;const i=t?20037508342787e-6:20037508342788905e-9;return n.isWebMercator?2*i:n.wkid&&n.isGeographic?360:2*Tn[n.wkid]||null}function q(n,t=!1){if(n.isGeographic)return[-180,180];const i=_(n,t);return i!=null?[-i/2,i/2]:null}function un(n,t,i,s){let r=(n-t)/i;return r-Math.floor(r)!=0?r=Math.floor(r):s&&(r-=1),r}function On(n,t=!1){const i=_(n.spatialReference);if(i==null)return 0;const s=t?0:-(i/2),r=E(n.spatialReference),e=!t&&Math.abs(n.xmax-i/2)<r?i/2:n.xmax,o=!t&&Math.abs(n.xmin+i/2)<r?-i/2:n.xmin;return un(e,s,i,!0)-un(o,s,i,!1)}function Bn(n){const t=n.storageInfo.origin.x,i=_(n.spatialReference,!0);if(i==null)return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const s=i/2,{nativePixelSize:r,storageInfo:e,extent:o}=n,{maximumPyramidLevel:f,blockWidth:l,pyramidScalingFactor:a}=e;let c=r.x;const M=[],y=n.transform!=null&&n.transform.type==="gcs-shift",x=t+(y?0:s),h=y?i-t:s-t;for(let p=0;p<=f;p++){const u=(o.xmax-t)/c/l,R=u-Math.floor(u)==0?u:Math.ceil(u),m=h/c/l,g=m-Math.floor(m)==0?m:Math.ceil(m),d=Math.floor(x/c/l),w=Math.round(x/c)%l,b=(l-Math.round(h/c)%l)%l;M.push({resolutionX:c,blockWidth:l,datsetColumnCount:R,worldColumnCountFromOrigin:g,leftMargin:w,rightPadding:b,originColumnOffset:d}),c*=a}return{originX:t,halfWorldWidth:s,pyramidsInfo:M,hasGCSSShiftTransform:y}}function Wn(n){if(!n||n.isGeographic)return n;const t=String(n.wkid||n.wkt);let i;return D.has(t)?i=D.get(t):(i=(n.wkid?v.coordsys(n.wkid):v.fromString(C.PE_TYPE_PROJCS,n.wkt)).getGeogcs().getCode(),D.set(t,i)),new kn({wkid:i})}function Fn(n){const t=n.isAdaptive&&n.spacing==null;let i=n.spacing||[B,B],s=U(n),r={cols:s.size[0]+1,rows:s.size[1]+1};const e=s.outofBoundPointCount>0&&s.outofBoundPointCount<s.offsets.length/2;let o=s.outofBoundPointCount===s.offsets.length/2||t&&e?[0,0]:sn(s.offsets,r,i,H);const f=(o[0]+o[1])/2,l=n.projectedExtent.spatialReference,a=n.srcBufferExtent.spatialReference;if(t&&(e||f>H)&&(mn(l,a,n.datumTransformation)&&(l.isGeographic||L(l)),i=[F,F],s=U({...n,spacing:i}),r={cols:s.size[0]+1,rows:s.size[1]+1},o=sn(s.offsets,r,i,H)),s.error=o,i[0]>1&&(s.coefficients=xn(s.offsets,r,e)),n.includeGCSGrid&&!l.isGeographic&&!l.isWebMercator)if(a.isGeographic)s.gcsGrid={offsets:s.offsets,coefficients:s.coefficients,spacing:i};else{const c=L(l);if(c!=null&&!c.isEnvelope){const M=Wn(l),y=yn(n.projectedExtent,M),{offsets:x}=U({...n,srcBufferExtent:y,spacing:i}),h=xn(x,r,e);s.gcsGrid={offsets:x,coefficients:h,spacing:i}}}return s}function U(n){const{projectedExtent:t,srcBufferExtent:i,pixelSize:s,datumTransformation:r,rasterTransform:e}=n,o=t.spatialReference,f=i.spatialReference,l=W(o,f),{xmin:a,ymin:c,xmax:M,ymax:y}=t,x=_(f),h=x!=null&&(n.hasWrapAround||(e==null?void 0:e.type)==="gcs-shift"),p=n.spacing||[B,B],u=p[0]*s.x,R=p[1]*s.y,m=p[0]===1,g=Math.ceil((M-a)/u-.1/p[0])+(m?0:1),d=Math.ceil((y-c)/R-.1/p[1])+(m?0:1),w=Cn({cols:g,rows:d,xmin:a,ymax:y,xres:u,yres:R,inSR:o,outSR:f,datumTransformation:r,preferPE:p[0]<=F,usePixelCenter:m}),b=[];let T,$=0;const j=m?-1:NaN,{xmin:S,xmax:G,ymax:k,width:dn,height:Mn}=i,wn=E(f,Y),Rn=x!=null&&S>0&&G>x/2;let nn=!1;if(l){const z=L(o);nn=z!=null&&z.poleLocation>0}for(let z=0;z<g;z++){const X=[];for(let A=0;A<d;A++){let P=w[z*d+A];if(h&&P[0]>G&&P[0]>x/2-wn?P[0]-=x:h&&z===0&&P[0]<0&&Rn&&!e&&(P[0]+=x),!P||isNaN(P[0])||isNaN(P[1]))b.push(j),b.push(j),X.push(null),$++;else{if(e){const tn=e.inverseTransform(new N({x:P[0],y:P[1],spatialReference:f}));P=[tn.x,tn.y]}X.push(P),z>0&&h&&T[A]&&P[0]<T[A][0]&&(P[0]+=x,nn&&P[0]>G&&P[0]>x&&(P[0]-=x)),b.push((P[0]-S)/dn),b.push((k-P[1])/Mn)}}T=X}return{offsets:b,error:null,coefficients:null,outofBoundPointCount:$,spacing:p,size:m?[g,d]:[g-1,d-1]}}function xn(n,t,i){const{cols:s,rows:r}=t,e=new Float32Array((s-1)*(r-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),f=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let l=0;l<s-1;l++){for(let a=0;a<r-1;a++){let c=l*r*2+2*a;const M=n[c],y=n[c+1],x=n[c+2],h=n[c+3];c+=2*r;const p=n[c],u=n[c+1],R=n[c+2],m=n[c+3];let g=0,d=12*(a*(s-1)+l);for(let w=0;w<3;w++)e[d++]=o[g++]*M+o[g++]*x+o[g++]*R;g=0;for(let w=0;w<3;w++)e[d++]=o[g++]*y+o[g++]*h+o[g++]*m;g=0;for(let w=0;w<3;w++)e[d++]=f[g++]*M+f[g++]*p+f[g++]*R;g=0;for(let w=0;w<3;w++)e[d++]=f[g++]*y+f[g++]*u+f[g++]*m}if(i)for(let a=0;a<e.length;a++)isNaN(e[a])&&(e[a]=-1)}return e}function Yn(n){const t=n.clone().normalize();return t.length===1?t[0]:gn(t)}function qn(n,t,i){var h;const{storageInfo:s,pixelSize:r}=t;let e=0,o=!1;const{pyramidResolutions:f}=s,l=((h=s.tileInfo.format)==null?void 0:h.toLowerCase())==="mixed"?Math.max(1,Math.min(3,s.tileInfo.dpi/96)):1,a=(n.x+n.y)/2/l;if(f!=null&&f.length){const p=f[f.length-1],u=(p.x+p.y)/2,R=(r.x+r.y)/2;if(a<=R)e=0;else if(a>=u)e=f.length,o=a/u>8;else{let g,d=R;for(let w=1;w<=f.length;w++){if(g=(f[w-1].x+f[w-1].y)/2,a<=g){a===g?e=w:i==="down"?(e=w-1,o=a/d>8):e=i==="up"||a-d>g-a||a/d>2?w:w-1;break}d=g}}const m=e===0?r:f[e-1];return o&&Math.min(m.x,m.y)*I(t.spatialReference)>19567&&(o=!1),{pyramidLevel:e,pyramidResolution:new N({x:m.x,y:m.y,spatialReference:t.spatialReference}),excessiveReading:o}}const c=Math.log(n.x/r.x)/Math.LN2,M=Math.log(n.y/r.y)/Math.LN2,y=t.storageInfo.maximumPyramidLevel||0;e=i==="down"?Math.floor(Math.min(c,M)):i==="up"?Math.ceil(Math.max(c,M)):Math.round((c+M)/2),e<0?e=0:e>y&&(o=e>y+3,e=y);const x=2**e;return{pyramidLevel:e,pyramidResolution:new N({x:x*t.nativePixelSize.x,y:x*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:o}}function Jn(n,t,i){var j;const s=(i==null?void 0:i.tileSize)??512,r=(i==null?void 0:i.alignGlobalDatasetWithAGOL)??!0,e=!!(i!=null&&i.limitToSrcResolution),{extent:o,spatialReference:f,pixelSize:l}=n,a=rn(new N({x:l.x,y:l.y,spatialReference:f}),t,o);if(a==null)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const c=(a.x+a.y)/2,M=I(t),y=c*M*96*39.37,x=t.isGeographic?256/s*2958287637958547e-7:256/s*591657527591555e-6;let h=n.dataType==="vector-magdir"||n.dataType==="vector-uv";const p=yn(o,t),u=Math.min(Math.ceil(Math.log(Math.min(n.width,n.height)/32)/Math.LN2),Math.ceil(Math.log(x/2/y)/Math.LN2));if(!h&&r&&(t.isGeographic||t.isWebMercator)&&(h=p.xmin*p.xmax<0,!h&&u<3)){const S=_(t);if(S!=null){const G=2**u*c*s,k=Math.ceil(S/G);h=k===1||k===2&&S/2-p.xmax<G}}let R,m=y;const g=1.001,d=Math.min(2,Math.max(1.414,((j=n.storageInfo)==null?void 0:j.pyramidScalingFactor)||2));if(h){m=x;const S=t.isGeographic?1341104507446289e-21:.29858214164761665,G=S*(96*M*39.37),k=t.isGeographic?4326:3857;R=rn(new N({x:S,y:S,spatialReference:{wkid:k}}),f,p),R.x*=m/G,R.y*=m/G}else{R={x:l.x,y:l.y};let S=0;for(;m<x*(g/2)&&S<u;)S++,m*=d,R.x*=d,R.y*=d;Math.max(m,x)/Math.min(m,x)<=g&&(m=x)}const w=[m],b=[{x:R.x,y:R.y}],T=70.5310735,$=Math.min(T,y)/g;for(;m>=$;)m/=d,R.x/=d,R.y/=d,w.push(m),b.push({x:R.x,y:R.y});if(e){const S=.001*l.x;let G=b.findIndex(k=>k.x>=l.x-S&&k.x<=l.x+S);G>-1?(b.length=G+1,w.length=G+1):(G=b.findIndex(k=>k.x<=l.x+S),G>0&&(b.length=G,w.length=G))}return{projectedPixelSize:a,scales:w,srcResolutions:b,isCustomTilingScheme:!h}}export{Fn as $,rn as C,An as J,_ as K,On as Q,jn as T,Bn as V,an as _,mn as d,qn as i,In as k,Yn as n,Jn as o,yn as q};
