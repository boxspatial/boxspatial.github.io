import{x as p,ak as a,V as o,aF as g,ah as s,ai as m,al as l}from"./index-edf1cead.js";import{f as c,d as n}from"./LayerView-3e008698.js";import{i as d}from"./GraphicContainer-d37adaa8.js";import{o as u}from"./GraphicsView2D-4936cf93.js";import"./Container-93bc143e.js";import"./EffectView-caaae2d8.js";import"./definitions-4e50b8bb.js";import"./enums-b14466b3.js";import"./Texture-fa872f05.js";import"./color-4180df3d.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-fc34a333.js";import"./FeatureContainer-fa087d0b.js";import"./AttributeStoreView-9715ba03.js";import"./TiledDisplayObject-c6bd6cb6.js";import"./WGLContainer-7b621762.js";import"./VertexArrayObject-4993c7e2.js";import"./ProgramTemplate-b85ac4aa.js";import"./GeometryUtils-87d0ec45.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./earcut-c3520e2b.js";import"./visualVariablesUtils-44c6f339.js";import"./cimAnalyzer-a3b0bb67.js";import"./fontUtils-5dd2e502.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./utils-a941d33c.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-fe80be7e.js";import"./floatRGBA-2a9b8092.js";import"./ExpandedCIM-2a39fa6f.js";import"./clusterUtils-5ded844a.js";import"./util-421799ed.js";import"./TileContainer-d7453e14.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtilsSync-f11102c4.js";import"./projectionSupport-1a5588c8.js";import"./json-48e3ea08.js";import"./Matcher-867ec160.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-3d6b2927.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-7ce2d52a.js";import"./ComputedAttributeStorage-07dd2af1.js";import"./arcadeTimeUtils-c60ee006.js";import"./executionError-c92d3b85.js";const w={remove(){},pause(){},resume(){}};let e=class extends c(n){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new d(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):o.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(g);return r!=null&&r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};s([m()],e.prototype,"graphicsView",void 0),e=s([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const ni=e;export{ni as default};
