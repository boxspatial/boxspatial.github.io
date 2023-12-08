import{s as Z,cV as A,u as F,mf as $,G as ee,dx as te,ec as E}from"./index-e5973b57.js";import{r as ae,n as B,d as L,k as ie,G as re,V as oe,Q as ne}from"./cimAnalyzer-d612a1cf.js";import{h as se}from"./CIMResourceManager-4b039837.js";import{c as le}from"./Rasterizer-9fa06fa4.js";import{O as K,c as ce,t as z,r as X}from"./utils-663907ae.js";import{m as he}from"./utils-fd1a3076.js";import{v as H,k as me}from"./symbolUtils-e7bc5adb.js";import"./fontUtils-2b05e912.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./alignmentUtils-ae955d28.js";import"./definitions-c3d1333d.js";import"./number-e491b09e.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-cde352fa.js";import"./floatRGBA-8415f0b0.js";import"./imageutils-d3027b70.js";import"./rasterizingUtils-d227ee1e.js";import"./colorUtils-c0f43caf.js";import"./webStyleSymbolUtils-e017b235.js";import"./devEnvironmentUtils-5002a058.js";var T;(function(u){u.Legend="legend",u.Preview="preview"})(T||(T={}));const G=u=>u&&u.scaleFactor?u.scaleFactor:1,ge=96/72;class ue{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._imageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new ae,this._cimResourceManager=new se,this._rasterizer=new le(this._cimResourceManager)}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,s,a,i,o,l,r){if(!e)return null;const{data:f}=e;if(!f||f.type!=="CIMSymbolReference"||!f.symbol)return null;const{symbol:p}=f;o||(o=K(p));const d=await B.resolveSymbolOverrides(f,t,this._spatialReference,i,o,l,r);this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const m=this._imageDataCanvas,h=this._cimResourceManager,y=[];L.fetchResources(d,h,y),L.fetchFonts(d,h,y),y.length>0&&await Promise.all(y);const{width:c,height:g}=s,C=fe(o,c,g,a),n=L.getEnvelope(d,C,h);if(!n)return null;const x=(window.devicePixelRatio||1)*ge;let w=1,v=0,b=0;switch(p.type){case"CIMPointSymbol":case"CIMTextSymbol":{let S=1;n.width>c&&(S=c/n.width);let D=1;n.height>g&&(D=g/n.height),a==="preview"&&(n.width<c&&(S=c/n.width),n.height<g&&(D=g/n.height)),w=Math.min(S,D),v=n.x+n.width/2,b=n.y+n.height/2}break;case"CIMLineSymbol":{let S=1;n.height>g&&(S=g/n.height),w=S,b=n.y+n.height/2;const D=n.x*w+c/2,I=(n.x+n.width)*w+c/2;if(D<0){const{paths:R}=C;R[0][0][0]-=D}if(I>c){const{paths:R}=C;R[0][2][0]-=I-c}}break;case"CIMPolygonSymbol":{v=n.x+n.width/2,b=n.y+n.height/2;const S=n.x*w+c/2,D=(n.x+n.width)*w+c/2,I=n.y*w+g/2,R=(n.y+n.height)*w+g/2,{rings:k}=C;S<0&&(k[0][0][0]-=S,k[0][3][0]-=S,k[0][4][0]-=S),I<0&&(k[0][0][1]+=I,k[0][1][1]+=I,k[0][4][1]+=I),D>c&&(k[0][1][0]-=D-c,k[0][2][0]-=D-c),R>g&&(k[0][2][1]+=R-g,k[0][3][1]+=R-g)}}m.width=c*x,m.height=g*x;const M=1;m.width+=2*M,m.height+=2*M;const _=m.getContext("2d"),P=ne.createIdentity();return P.translate(-v,-b),P.scale(w*x,-w*x),P.translate(c*x/2+M,g*x/2+M),_.clearRect(0,0,m.width,m.height),new ie(_,h,P,!0).drawSymbol(d,C),_.getImageData(0,0,m.width,m.height)}async analyzeCIMSymbol3D(e,t,s,a,i){const o=[],l=t?{geometryType:a,spatialReference:this._spatialReference,fields:t}:null,r=[];L.fetchFonts(e.data.symbol,this._cimResourceManager,r),await Promise.all(r);const f=new re(this._cimResourceManager,l);let p;await f.analyzeSymbolReference(e.data,this._avoidSDF,o),Z(i);for(const d of o)d.cim.type!=="CIMPictureMarker"&&d.cim.type!=="CIMPictureFill"&&d.cim.type!=="CIMPictureStroke"||(p||(p=[]),p.push(this._fetchPictureMarkerResource(d,i))),s&&d.type==="text"&&typeof d.text=="string"&&d.text.includes("[")&&(d.text=ce(s,d.text,d.cim.textCase));return p&&await Promise.all(p),o}rasterizeCIMSymbol3D(e,t,s,a,i,o){const l=[];for(const r of e){a&&typeof a.scaleFactor=="function"&&(a.scaleFactor=a.scaleFactor(t,i,o));const f=this._getRasterizedResource(r,t,s,a,i,o);if(!f)continue;let p=0,d=f.anchorX||0,m=f.anchorY||0,h=!1,y=0,c=0;if(s==="esriGeometryPoint"){const g=G(a);if(y=z(r.offsetX,t,i,o)*g||0,c=z(r.offsetY,t,i,o)*g||0,r.type==="marker")p=z(r.rotation,t,i,o)||0,h=r.rotateClockwise??!1;else if(r.type==="text"){if(p=z(r.angle,t,i,o)||0,r.horizontalAlignment!==void 0)switch(r.horizontalAlignment){case"left":d=-.5;break;case"right":d=.5;break;default:d=0}if(r.verticalAlignment!==void 0)switch(r.verticalAlignment){case"top":m=.5;break;case"bottom":m=-.5;break;case"baseline":m=-.25;break;default:m=0}}}f!=null&&l.push({angle:p,rotateClockWise:h,anchorX:d,anchorY:m,offsetX:y,offsetY:c,rasterizedResource:f})}return this.getSymbolImage(l)}getSymbolImage(e){const t=document.createElement("canvas"),s=A(t.getContext("2d"));let a=0,i=0,o=0,l=0;const r=[];for(let m=0;m<e.length;m++){const h=e[m],y=h.rasterizedResource;if(!y)continue;const c=y.size,g=h.offsetX,C=h.offsetY,n=h.anchorX,x=h.anchorY,w=h.rotateClockWise||!1;let v=h.angle,b=F(g)-c[0]*(.5+n),M=F(C)-c[1]*(.5+x),_=b+c[0],P=M+c[1];if(v){w&&(v=-v);const I=Math.sin(v*Math.PI/180),R=Math.cos(v*Math.PI/180),k=b*R-M*I,W=b*I+M*R,j=b*R-P*I,V=b*I+P*R,N=_*R-P*I,U=_*I+P*R,q=_*R-M*I,J=_*I+M*R;b=Math.min(k,j,N,q),M=Math.min(W,V,U,J),_=Math.max(k,j,N,q),P=Math.max(W,V,U,J)}a=b<a?b:a,i=M<i?M:i,o=_>o?_:o,l=P>l?P:l;const S=s.createImageData(y.size[0],y.size[1]);S.data.set(new Uint8ClampedArray(y.image.buffer));const D={offsetX:g,offsetY:C,rotateClockwise:w,angle:v,rasterizedImage:S,anchorX:n,anchorY:x};r.push(D)}t.width=o-a,t.height=l-i;const f=-a,p=l;for(let m=0;m<r.length;m++){const h=r[m],y=this._imageDataToCanvas(h.rasterizedImage),c=h.rasterizedImage.width,g=h.rasterizedImage.height,C=f-c*(.5+h.anchorX),n=p-g*(.5-h.anchorY);if(h.angle){const x=(360-h.angle)*Math.PI/180;s.save(),s.translate(F(h.offsetX),-F(h.offsetY)),s.translate(f,p),s.rotate(x),s.translate(-f,-p),s.drawImage(y,C,n),s.restore()}else s.drawImage(y,C+F(h.offsetX),n-F(h.offsetY))}const d=new $({x:f/t.width-.5,y:p/t.height-.5});return{imageData:t.width!==0&&t.height!==0?s.getImageData(0,0,t.width,t.height):s.createImageData(1,1),anchorPosition:d}}async _fetchPictureMarkerResource(e,t){const s=e.materialHash;if(!this._pictureMarkerCache.get(s)){const a=(await ee(e.cim.url,{responseType:"image",signal:t&&t.signal})).data;this._pictureMarkerCache.set(s,a)}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const t=this._imageDataCanvas,s=A(t.getContext("2d"));return t.width=e.width,t.height=e.height,s.putImageData(e,0,0),t}_imageTo32Array(e,t,s,a){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const i=this._imageDataCanvas,o=A(i.getContext("2d"));if(i.width=t,i.height=s,o.drawImage(e,0,0,t,s),a){o.save();const l=new te(a);o.fillStyle=l.toHex(),o.globalCompositeOperation="multiply",o.fillRect(0,0,t,s),o.globalCompositeOperation="destination-atop",o.drawImage(e,0,0,t,s),o.restore()}return new Uint32Array(o.getImageData(0,0,t,s).data.buffer)}_getRasterizedResource(e,t,s,a,i,o){let l,r,f;if(e.type==="text")return this._rasterizeTextResource(e,t,a,i,o);({analyzedCIM:l,hash:r}=de(e,t,i,o));const m=G(a);if(e.cim.type==="CIMPictureMarker"){const c=z(e.size,t,i,o)*m,{image:g,width:C,height:n}=A(this._getPictureResource(e,c,z(e.color,t,i,o)));return f={image:g,size:[C,n],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},f}he(l,m,{preserveOutlineWidth:!1});const h=l;r+=s,a&&(r+=JSON.stringify(a));const y=this._resourceCache;return y.has(r)?y.get(r):(f=this._rasterizer.rasterizeJSONResource({cim:h,type:e.type,url:e.url,mosaicHash:r,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),y.set(r,f),f)}_rasterizeTextResource(e,t,s,a,i){var M,_,P;const o=G(s),l=z(e.text,t,a,i);if(!l||l.length===0)return null;const r=e.cim,f=z((r==null?void 0:r.fontFamilyName)||e.fontName,t,a,i),p=z(((M=r==null?void 0:r.font)==null?void 0:M.style)||e.style,t,a,i),d=z(((_=r==null?void 0:r.font)==null?void 0:_.weight)||e.weight,t,a,i),m=z(((P=r==null?void 0:r.font)==null?void 0:P.decoration)||e.decoration,t,a,i),h=z(e.size,t,a,i)*o,y=z(e.horizontalAlignment,t,a,i),c=z(e.verticalAlignment,t,a,i),g=X(z(e.color,t,a,i)),C=X(z(e.outlineColor,t,a,i)),n=z(e.outlineSize,t,a,i),x=e.backgroundColor!=null?X(e.backgroundColor):null,w=e.borderLineColor!=null?X(e.borderLineColor):null,v=e.borderLineWidth!=null?e.borderLineWidth:null,b={color:g,size:h,horizontalAlignment:y,verticalAlignment:c,font:{family:f,style:p,weight:d,decoration:m},halo:{size:n||0,color:C,style:p},backgroundColor:x,borderLine:w!=null&&v!=null?{color:w,size:v}:null,pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(l,b)}_getPictureResource(e,t,s){const a=this._pictureMarkerCache.get(e.materialHash);if(!a)return null;const i=a.height/a.width,o=t?i>1?F(t):F(t)/i:a.width,l=t?i>1?F(t)*i:F(t):a.height;return{image:this._imageTo32Array(a,o,l,s),width:o,height:l}}}function fe(u,e,t,s){const i=-e/2+1,o=e/2-1,l=t/2-1,r=-t/2+1;switch(u){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[i,0],[0,0],[o,0]]]};default:return s==="legend"?{rings:[[[i,l],[o,0],[o,r],[i,r],[i,l]]]}:{rings:[[[i,l],[o,l],[o,r],[i,r],[i,l]]]}}}function de(u,e,t,s){let a,i;return typeof u.materialHash=="function"?(a=(0,u.materialHash)(e,t,s),i=oe(u.cim,u.materialOverrides)):(a=u.materialHash,i=u.cim),{analyzedCIM:i,hash:a}}const Y=new ue(null,!0),O=E(H.size),Q=E(H.maxSize),ye=E(H.lineWidth),pe=1;function we(u){const e=u==null?void 0:u.size;return typeof e=="number"?{width:e,height:e}:{width:e!=null&&typeof e=="object"&&"width"in e?e.width:null,height:e!=null&&typeof e=="object"&&"height"in e?e.height:null}}async function He(u,e={}){var x;const{node:t,opacity:s,symbolConfig:a}=e,i=a!=null&&typeof a=="object"&&"isSquareFill"in a&&a.isSquareFill,o=e.cimOptions||e,l=o.geometryType||K((x=u==null?void 0:u.data)==null?void 0:x.symbol),r=we(e),{feature:f,fieldMap:p}=o;if(r.width==null||r.height==null){const w=await B.resolveSymbolOverrides(u.data,f,null,p,l);if(!w)return null;(u=u.clone()).data={type:"CIMSymbolReference",symbol:w},u.data.primitiveOverrides=void 0;const v=[];L.fetchResources(w,Y.resourceManager,v),L.fetchFonts(w,Y.resourceManager,v),v.length>0&&await Promise.all(v);const b=L.getEnvelope(w,null,Y.resourceManager),M=b==null?void 0:b.width,_=b==null?void 0:b.height;r.width=l==="esriGeometryPolygon"?O:l==="esriGeometryPolyline"?ye:M!=null&&isFinite(M)?Math.min(M,Q):O,r.height=l==="esriGeometryPolygon"?O:_!=null&&isFinite(_)?Math.max(Math.min(_,Q),pe):O}const d=await Y.rasterizeCIMSymbolAsync(u,f,r,i||l!=="esriGeometryPolygon"?T.Preview:T.Legend,p,l);if(!d)return null;const{width:m,height:h}=d,y=document.createElement("canvas");y.width=m,y.height=h,y.getContext("2d").putImageData(d,0,0);const c=F(r.width),g=F(r.height),C=new Image(c,g);C.src=y.toDataURL(),C.ariaLabel=e.ariaLabel??null,C.alt=e.ariaLabel??"",s!=null&&(C.style.opacity=`${s}`);let n=C;if(e.effectView!=null){const w={shape:{type:"image",x:0,y:0,width:c,height:g,src:C.src},fill:null,stroke:null,offset:[0,0]};n=me([[w]],[c,g],{effectView:e.effectView,ariaLabel:e.ariaLabel})}return t&&n&&t.appendChild(n),n}export{He as previewCIMSymbol};
