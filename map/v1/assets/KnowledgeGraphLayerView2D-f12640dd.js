import{V as i,bp as l,ah as r,ai as s,bo as n,al as o}from"./index-edf1cead.js";import{f as h,d}from"./LayerView-3e008698.js";import"./Container-93bc143e.js";import"./EffectView-caaae2d8.js";import"./definitions-4e50b8bb.js";import"./enums-b14466b3.js";import"./Texture-fa872f05.js";let t=class extends h(d){constructor(e){super(e),this.layerViews=new i}set layerViews(e){this._set("layerViews",l(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,a)=>e+a.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,a)=>this.container.addChildAt(e.container,a))}};r([s({cast:n})],t.prototype,"layerViews",null),r([s({readOnly:!0})],t.prototype,"updatingProgress",null),t=r([o("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);const V=t;export{V as default};
