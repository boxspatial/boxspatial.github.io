import{V as i,bt as n,ai as r,aj as s,bs as l,am as o}from"./index-03946ec7.js";import{f as h,d}from"./LayerView-129ed54e.js";import"./Container-22067ae8.js";import"./EffectView-f80ea10d.js";import"./definitions-e7328148.js";import"./enums-b14466b3.js";import"./Texture-d0a2a46a.js";let t=class extends h(d){constructor(e){super(e),this.layerViews=new i}set layerViews(e){this._set("layerViews",n(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,a)=>e+a.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,a)=>this.container.addChildAt(e.container,a))}};r([s({cast:l})],t.prototype,"layerViews",null),r([s({readOnly:!0})],t.prototype,"updatingProgress",null),t=r([o("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);const V=t;export{V as default};