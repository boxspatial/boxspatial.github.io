import{bf as w,bg as y,bh as I,bi as V,z as v,bj as H,aX as n,bk as g,J as T,ah as o,ai as m,al as b}from"./index-eed032b4.js";import"./Rasterizer-d868c919.js";import"./EffectView-f21b790b.js";import"./Container-7664f554.js";import"./BufferPool-ed7e530d.js";import"./color-82eb9d53.js";import"./WGLContainer-1ddd0e61.js";import"./enums-b14466b3.js";import"./Texture-b27e2ed5.js";import"./ProgramTemplate-c203c82b.js";import"./definitions-c49e2c1e.js";import"./GeometryUtils-017e7c0c.js";import"./VertexArrayObject-6676a928.js";import"./number-e491b09e.js";import"./StyleDefinition-fbc907c2.js";import"./enums-fb086c25.js";import"./MagnifierPrograms-9b763256.js";import"./OrderIndependentTransparency-309a1bc3.js";import"./floatRGBA-3a08c070.js";import"./testSVGPremultipliedAlpha-9a9aceb3.js";import{o as q}from"./GraphicsView2D-62e59b66.js";import"./AttributeStoreView-1e813df9.js";import"./earcut-3e9b4557.js";import"./vec3f32-ad1dc57f.js";import{t as U,o as f,n as d}from"./imageUtils-b4c7eb94.js";import{f as Q,d as S}from"./LayerView-8c849c97.js";import{n as C}from"./HighlightGraphicContainer-3aeef62a.js";import{a as k}from"./RefreshableLayerView-23ff684b.js";import{S as F,U as R,r as z}from"./drapedUtils-ec0b423f.js";import"./cimAnalyzer-249b67c5.js";import"./fontUtils-c4906c91.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./utils-fb8f30fc.js";import"./alignmentUtils-ae955d28.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-7a483037.js";import"./rasterizingUtils-fa89fcf9.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./imageutils-6c3ff994.js";import"./Matcher-2d1dc9bd.js";import"./visualVariablesUtils-8f78c9ca.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-6feabd94.js";import"./ExpandedCIM-b2cd66b9.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-8aaf42ac.js";import"./CircularArray-ef508845.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-bebfb184.js";import"./arcadeTimeUtils-12bfe600.js";import"./executionError-c92d3b85.js";import"./projectionSupport-b33ba616.js";import"./json-48e3ea08.js";import"./basicInterfaces-4ab7cc6a.js";import"./normalizeUtilsSync-0205a13e.js";import"./TiledDisplayObject-140c5b09.js";import"./clusterUtils-d077d77a.js";import"./util-83127115.js";import"./BitmapTileContainer-0e2ab2d1.js";import"./Bitmap-370c07bd.js";import"./TileContainer-23df8a83.js";import"./BaseGraphicContainer-64e198ba.js";import"./FeatureContainer-4622de9f.js";import"./popupUtils-88e1b549.js";const G=[0,0];let s=class extends k(U(Q(S))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var e;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(e=this._highlightView)==null||e.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,e=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,e==null?void 0:e.effectiveMinLOD,e==null?void 0:e.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,r)=>this.fetchTile(i,r)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),F(this,this.layer)){const i=this._highlightView=new q({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new R({createFetchPopupFeaturesQueryGeometry:(r,h)=>z(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{i.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this.updatingHandles})}this.requestUpdate(),this.addAttachHandles(v(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeatures(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):{remove(){}}}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return H((e=this.layer.tileInfo)==null?void 0:e.spatialReference,t)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._enqueueTileFetch(t)))}isUpdating(){var t;return((t=this._fetchQueue)==null?void 0:t.updating)??!1}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(G,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(e),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i=this.tilemapCache,{signal:r,resamplingLevel:h=0}=e;if(!i)try{return await this._fetchImage(t,r)}catch(a){if(!n(a)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(h<3){const u=this._tileInfoView.getTileParentId(t.id);if(u){const c=new g(u),_=await this.fetchTile(c,{...e,resamplingLevel:h+1});return d(this._tileInfoView,_,c,t)}}throw a}const p=new g(0,0,0,0);let l;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,p,{signal:r}),p.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);l=await this._fetchImage(p,r)}catch(a){if(n(a))throw a;l=await this._fetchImage(t,r)}return this.resampling?d(this._tileInfoView,l,p,t):l}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.requestRender(),t.once("attach",()=>this.requestUpdate())}catch(e){n(e)||T.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};o([m()],s.prototype,"_fetchQueue",void 0),o([m()],s.prototype,"resampling",null),o([m()],s.prototype,"tilemapCache",null),s=o([b("esri.views.2d.layers.TileLayerView2D")],s);const Kt=s;export{Kt as default};