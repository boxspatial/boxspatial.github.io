import{jo as w,jY as $,jp as I,kU as j,kV as O,gg as T,gh as E,gi as k,gj as M,jq as R,jD as L,jV as P,ay as q,Y as F,kG as b,j5 as g,kW as v,kX as N,kl as J,G as f,bu as U,fQ as A,jE as _,kp as V,q as S,a_ as G,ai as i,aj as n,kY as x,cS as z,fI as D,gm as W,am as Y,bb as B,kZ as C,fl as H}from"./index-03946ec7.js";import{m as K}from"./ExportImageParameters-7dae7150.js";let s=class extends w($(I(j(O(T(E(k(M(R(L(P(q(B))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeReference=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,a){return typeof e=="string"?{url:e,...a}:e}load(e){const a=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(F).then(()=>this._fetchService(a))),Promise.resolve(this)}readImageFormat(e,a){const p=a.supportedImageFormatTypes;return p&&p.includes("PNG32")?"png32":"png24"}writeSublayers(e,a,p,t){var d;if(!this.loaded||!e)return;const o=e.slice().reverse().flatten(({sublayers:r})=>r&&r.toArray().reverse()).toArray();let l=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((d=this.capabilities.exportMap)!=null&&d.supportsDynamicLayers)){const r=b(t.origin);if(r===g.PORTAL_ITEM){const y=this.createSublayersForOrigin("service").sublayers;l=v(o,y,g.SERVICE)}else if(r>g.PORTAL_ITEM){const y=this.createSublayersForOrigin("portal-item");l=v(o,y.sublayers,b(y.origin))}}const c=[],m={writeSublayerStructure:l,...t};let h=l;o.forEach(r=>{const y=r.write({},m);c.push(y),h=h||r.originOf("visible")==="user"}),c.some(r=>Object.keys(r).length>1)&&(a.layers=c),h&&(a.visibleLayers=o.filter(r=>r.visible).map(r=>r.id))}createExportImageParameters(e,a,p,t){const o=t&&t.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const l=new K({layer:this,floors:t==null?void 0:t.floors,scale:N({extent:e,width:a})*o}),c=l.toJSON();l.destroy();const m=!t||!t.rotation||this.version<10.3?{}:{rotation:-t.rotation},h=e&&e.spatialReference,d=h.wkid||JSON.stringify(h.toJSON());c.dpi*=o;const r={};if(t!=null&&t.timeExtent){const{start:y,end:u}=t.timeExtent.toJSON();r.time=y&&u&&y===u?""+y:`${y??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(r.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:d,imageSR:d,size:a+","+p,...c,...m,...r}}async fetchImage(e,a,p,t){const{data:o}=await this._fetchImage("image",e,a,p,t);return o}async fetchImageBitmap(e,a,p,t){const{data:o,url:l}=await this._fetchImage("blob",e,a,p,t);return J(o,l,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const a={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:p}=await f(this.url,a),{extent:t,fullExtent:o,timeExtent:l}=p,c=t||o;return{fullExtent:c&&U.fromJSON(c),timeExtent:l&&A.fromJSON({start:l[0],end:l[1]})}}loadAll(){return _(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return V(this,e)}async _fetchImage(e,a,p,t,o){var m,h,d;const l={responseType:e,signal:(o==null?void 0:o.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(a,p,t,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},c=this.parsedUrl.path+"/export";if(((m=l.query)==null?void 0:m.dynamicLayers)!=null&&!((d=(h=this.capabilities)==null?void 0:h.exportMap)!=null&&d.supportsDynamicLayers))throw new S("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:l.query});try{const{data:r}=await f(c,l);return{data:r,url:c}}catch(r){throw G(r)?r:new S("mapimagelayer:image-fetch-error",`Unable to load image: ${c}`,{error:r})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:a,ssl:p}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});p&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=a,this.read(a,{origin:"service",url:this.parsedUrl})}};i([n({type:x})],s.prototype,"dateFieldsTimeReference",void 0),i([n({type:Boolean})],s.prototype,"datesInUnknownTimezone",void 0),i([n()],s.prototype,"dpi",void 0),i([n()],s.prototype,"gdbVersion",void 0),i([n()],s.prototype,"imageFormat",void 0),i([z("imageFormat",["supportedImageFormatTypes"])],s.prototype,"readImageFormat",null),i([n({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],s.prototype,"imageMaxHeight",void 0),i([n({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],s.prototype,"imageMaxWidth",void 0),i([n()],s.prototype,"imageTransparency",void 0),i([n({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"labelsVisible",void 0),i([n({type:["ArcGISMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),i([n({type:x})],s.prototype,"preferredTimeReference",void 0),i([n()],s.prototype,"sourceJSON",void 0),i([n({json:{write:{ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),i([D("sublayers",{layers:{type:[C]},visibleLayers:{type:[H]}})],s.prototype,"writeSublayers",null),i([n({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),i([n({json:{read:!1},readOnly:!0,value:"map-image"})],s.prototype,"type",void 0),i([n(W)],s.prototype,"url",void 0),s=i([Y("esri.layers.MapImageLayer")],s);const Z=s;export{Z as default};