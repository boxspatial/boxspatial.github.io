import{jP as r,aV as n,aW as o,aH as l,ai as e,aj as s,am as p,an as y}from"./index-efef4772.js";let d=0,t=class extends r(n(o(y))){constructor(i){super(i),this.id=`${Date.now().toString(16)}-analysis-${d++}`,this.title=null}get parent(){return this._get("parent")}set parent(i){const a=this.parent;if(a!=null)switch(a.type){case"line-of-sight":case"dimension":a.releaseAnalysis(this);break;case"2d":case"3d":a.analyses.includes(this)&&a.analyses.remove(this)}this._set("parent",i)}get isEditable(){return this.requiredPropertiesForEditing.every(l)}};e([s({type:String,constructOnly:!0,clonable:!1})],t.prototype,"id",void 0),e([s({type:String})],t.prototype,"title",void 0),e([s({constructOnly:!0})],t.prototype,"type",void 0),e([s({clonable:!1,value:null})],t.prototype,"parent",null),e([s({readOnly:!0})],t.prototype,"isEditable",null),e([s({readOnly:!0})],t.prototype,"requiredPropertiesForEditing",void 0),t=e([p("esri.analysis.Analysis")],t);const u=t;export{u as c};
