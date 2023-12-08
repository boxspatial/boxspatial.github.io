import{bi as w,bj as y,bk as I,bl as V,z as v,bm as H,a_ as n,bn as g,K as T,ai as o,aj as m,am as b}from"./index-efef4772.js";import"./Rasterizer-3dc1d9cd.js";import"./EffectView-88cf4334.js";import"./Container-dc903d08.js";import"./BufferPool-09d35b6c.js";import"./color-8a8b1498.js";import"./WGLContainer-1a170e79.js";import"./enums-b14466b3.js";import"./Texture-46a0d29f.js";import"./ProgramTemplate-0a1f878c.js";import"./definitions-838da113.js";import"./GeometryUtils-2c6d668c.js";import"./VertexArrayObject-7660fad3.js";import"./number-e491b09e.js";import"./StyleDefinition-fbc907c2.js";import"./enums-fb086c25.js";import"./MagnifierPrograms-a9e173bb.js";import"./OrderIndependentTransparency-309a1bc3.js";import"./floatRGBA-94fad0a9.js";import"./testSVGPremultipliedAlpha-a5c87195.js";import{o as q}from"./GraphicsView2D-8f8530bd.js";import"./AttributeStoreView-f5278c8f.js";import"./earcut-00ef0f46.js";import"./vec3f32-ad1dc57f.js";import{t as U,o as f,n as d}from"./imageUtils-490da745.js";import{f as Q,d as S}from"./LayerView-8810d71f.js";import{n as C}from"./HighlightGraphicContainer-cf427be5.js";import{a as k}from"./RefreshableLayerView-17d8f49d.js";import{S as F,U as R,r as z}from"./drapedUtils-48153261.js";import"./cimAnalyzer-139e1e4c.js";import"./fontUtils-ace31181.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./utils-7685c378.js";import"./alignmentUtils-ae955d28.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-ca0cc80d.js";import"./rasterizingUtils-851cf3a3.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./imageutils-bdba6a2b.js";import"./Matcher-9cb7e617.js";import"./visualVariablesUtils-fe0435c8.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-fb05f5cb.js";import"./ExpandedCIM-b55558c6.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-3295b6c7.js";import"./CircularArray-ef508845.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-4b162209.js";import"./arcadeTimeUtils-9f278e0b.js";import"./executionError-c92d3b85.js";import"./projectionSupport-ab9cb325.js";import"./json-48e3ea08.js";import"./basicInterfaces-4ab7cc6a.js";import"./normalizeUtilsSync-d204d375.js";import"./TiledDisplayObject-9730a14f.js";import"./util-066d9298.js";import"./BitmapTileContainer-46bbf93e.js";import"./Bitmap-d330470a.js";import"./TileContainer-ceba5fb3.js";import"./BaseGraphicContainer-9510550c.js";import"./FeatureContainer-34b5ccc1.js";import"./popupUtils-22253ca6.js";const G=[0,0];let s=class extends k(U(Q(S))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var e;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(e=this._highlightView)==null||e.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,e=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,e==null?void 0:e.effectiveMinLOD,e==null?void 0:e.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,r)=>this.fetchTile(i,r)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),F(this,this.layer)){const i=this._highlightView=new q({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new R({createFetchPopupFeaturesQueryGeometry:(r,h)=>z(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{i.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this.updatingHandles})}this.requestUpdate(),this.addAttachHandles(v(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeatures(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):{remove(){}}}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return H((e=this.layer.tileInfo)==null?void 0:e.spatialReference,t)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._enqueueTileFetch(t)))}isUpdating(){var t;return((t=this._fetchQueue)==null?void 0:t.updating)??!1}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(G,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(e),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i=this.tilemapCache,{signal:r,resamplingLevel:h=0}=e;if(!i)try{return await this._fetchImage(t,r)}catch(a){if(!n(a)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(h<3){const u=this._tileInfoView.getTileParentId(t.id);if(u){const c=new g(u),_=await this.fetchTile(c,{...e,resamplingLevel:h+1});return d(this._tileInfoView,_,c,t)}}throw a}const p=new g(0,0,0,0);let l;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,p,{signal:r}),p.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);l=await this._fetchImage(p,r)}catch(a){if(n(a))throw a;l=await this._fetchImage(t,r)}return this.resampling?d(this._tileInfoView,l,p,t):l}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.requestRender(),t.once("attach",()=>this.requestUpdate())}catch(e){n(e)||T.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};o([m()],s.prototype,"_fetchQueue",void 0),o([m()],s.prototype,"resampling",null),o([m()],s.prototype,"tilemapCache",null),s=o([b("esri.views.2d.layers.TileLayerView2D")],s);const Jt=s;export{Jt as default};