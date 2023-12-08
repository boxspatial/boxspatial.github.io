import{al as u,V as f,aH as w,z as o,B as p,as as y,ai as _,am as V}from"./index-efef4772.js";import{h as v}from"./Container-dc903d08.js";import{r as C}from"./GroupContainer-5e7c9709.js";import{f as H,d as b}from"./LayerView-8810d71f.js";import{i as c}from"./GraphicContainer-e8dfd68f.js";import{o as g}from"./GraphicsView2D-8f8530bd.js";import"./EffectView-88cf4334.js";import"./definitions-838da113.js";import"./enums-b14466b3.js";import"./Texture-46a0d29f.js";import"./WGLContainer-1a170e79.js";import"./VertexArrayObject-7660fad3.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-8a8b1498.js";import"./enums-55085e26.js";import"./number-e491b09e.js";import"./ProgramTemplate-0a1f878c.js";import"./GeometryUtils-2c6d668c.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./earcut-00ef0f46.js";import"./BaseGraphicContainer-9510550c.js";import"./FeatureContainer-34b5ccc1.js";import"./AttributeStoreView-f5278c8f.js";import"./TiledDisplayObject-9730a14f.js";import"./visualVariablesUtils-fe0435c8.js";import"./cimAnalyzer-139e1e4c.js";import"./fontUtils-ace31181.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./utils-7685c378.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-ca0cc80d.js";import"./floatRGBA-94fad0a9.js";import"./ExpandedCIM-b55558c6.js";import"./util-066d9298.js";import"./TileContainer-ceba5fb3.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtilsSync-d204d375.js";import"./projectionSupport-ab9cb325.js";import"./json-48e3ea08.js";import"./Matcher-9cb7e617.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-fb05f5cb.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-3295b6c7.js";import"./ComputedAttributeStorage-4b162209.js";import"./arcadeTimeUtils-9f278e0b.js";import"./executionError-c92d3b85.js";const m="sublayers",n="layerView",T=Object.freeze({remove(){},pause(){},resume(){}});let l=class extends H(b){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new C}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const a=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&a.popupTemplate&&(r.popupTemplate=a.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),{remove:()=>{this._removeHighlight(e)}}):T}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const a=new c(this.view.featuresTilingScheme),r=new g({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([o(()=>s.visible,h=>r.container.visible=h,p),o(()=>r.updating,()=>this.notifyChange("updating"),p)],n)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.removeHandles(m)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new v,r=new c(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const h=new g({view:t,graphics:s.graphics,requestUpdateCallback:e,container:r});this.addHandles([s.on("graphic-update",h.graphicUpdateHandler),o(()=>s.visible,d=>h.container.visible=d,p),o(()=>h.updating,()=>this.notifyChange("updating"),p)],n),a.addChild(h.container),this.container.addChild(a),i.push(h)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=_([V("esri.views.2d.layers.MapNotesLayerView2D")],l);const Ci=l;export{Ci as default};