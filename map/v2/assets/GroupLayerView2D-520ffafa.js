import{ah as a,ai as l,bp as d,al as o,V as p,z as h,b6 as y,bq as V}from"./index-eed032b4.js";import{r as w}from"./GroupContainer-6972c637.js";import{d as v,f as u}from"./LayerView-8c849c97.js";import"./WGLContainer-1ddd0e61.js";import"./definitions-c49e2c1e.js";import"./VertexArrayObject-6676a928.js";import"./Texture-b27e2ed5.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-82eb9d53.js";import"./enums-55085e26.js";import"./number-e491b09e.js";import"./ProgramTemplate-c203c82b.js";import"./GeometryUtils-017e7c0c.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./Container-7664f554.js";import"./EffectView-f21b790b.js";import"./earcut-3e9b4557.js";let t=class extends v{constructor(i){super(i),this.type="group",this.layerViews=new p}destroy(){this.handles.removeAll(),this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.handles.add([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),h(()=>{var i;return(i=this.layer)==null?void 0:i.visibilityMode},()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},y),h(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},y)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",V(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>{const s=this._findLayerViewForLayer(e);return!!(s!=null&&s.visible)});return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){i==null&&(i=this._firstVisibleOnLayerOrder())==null&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map(s=>h(()=>s.visible,r=>this._applyVisibility(()=>{r!==this.visible&&(s.visible=this.visible)},()=>this._applyExclusiveVisibility(r?s:null)),y)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e!=null&&e.visible?e:null))}_applyVisibility(i,e){var s,r;this._hasLayerViewVisibleOverrides()&&(((s=this.layer)==null?void 0:s.visibilityMode)==="inherited"?i():((r=this.layer)==null?void 0:r.visibilityMode)==="exclusive"&&e())}};a([l({cast:d})],t.prototype,"layerViews",null),a([l({readOnly:!0})],t.prototype,"updatingProgress",null),a([l()],t.prototype,"view",void 0),t=a([o("esri.views.layers.GroupLayerView")],t);const b=t;let n=class extends u(b){constructor(){super(...arguments),this.container=new w}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};n=a([o("esri.views.2d.layers.GroupLayerView2D")],n);const q=n;export{q as default};
