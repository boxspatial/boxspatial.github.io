import{aT as ue,ah as t,ai as s,cO as x,fV as ce,jU as q,al as p,jV as he,J as j,fg as Y,dw as ee,ey as fe,fE as ge,G as te,aC as me,cZ as ve,q as I,ak as be,bq as we,bF as re,iI as Se,fS as $e,fQ as Oe,bl as je,gb as se,df as Ie,V as b,e_ as xe,jW as Fe,ds as g,d5 as u,jX as Le,jY as Te,fo as Be,fp as Ee,fq as Ae,fm as _e,fr as qe,ft as Ne,cm as Re,fw as Pe,X as ke,jZ as Me,j_ as Qe,fO as Ue,g3 as Ke,b8 as Ve}from"./index-edf1cead.js";import ie from"./FeatureLayer-90942b2f.js";import{t as Ce,l as De,i as Je}from"./FetchAssociatedFeatureLayer-d0f96a4c.js";import{s as Ze}from"./fieldProperties-1ad3ab72.js";import{r as Ge,N as He,K as J}from"./SceneService-a4381872.js";import{s as Xe,l as We,u as ze,m as Ye}from"./I3SLayerDefinitions-2fb81b36.js";import{n as et,p as tt}from"./popupUtils-c39281df.js";import"./FeatureLayerBase-88b29b5b.js";import"./featureLayerUtils-71d00558.js";import"./RelationshipQuery-d43a5602.js";import"./editsZScale-f46e6921.js";import"./EditBusLayer-244198d8.js";import"./FeatureEffectLayer-74d758a7.js";import"./FeatureEffect-92c7e9d5.js";import"./FeatureReductionLayer-745a30db.js";import"./clusterUtils-5ded844a.js";import"./OrderedLayer-e038abc4.js";import"./styleUtils-60111c84.js";import"./TopFeaturesQuery-d9df3d33.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-85c3d5c4.js";import"./quatf64-3363c48e.js";import"./I3SBinaryReader-ca159bf5.js";import"./VertexAttribute-9f2e53ec.js";import"./spatialReferenceEllipsoidUtils-7e7f13df.js";import"./symbolColorUtils-c811671b.js";import"./vec3f32-ad1dc57f.js";import"./plane-e3508ab5.js";import"./sphere-20a0c9fc.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-23093893.js";let y=class extends ue(he){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(r,i){return typeof i.alias=="string"?i.alias:typeof i.name=="string"?i.name:""}readIdOnlyOnce(r){return this.id!==-1?this.id:typeof r=="number"?r:-1}};t([s({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([x("service","title",["alias","name"])],y.prototype,"readTitle",null),t([s()],y.prototype,"layer",void 0),t([s({type:ce,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([x("service","id")],y.prototype,"readIdOnlyOnce",null),t([s(q(String))],y.prototype,"modelName",void 0),t([s(q(Boolean))],y.prototype,"isEmpty",void 0),t([s({type:Boolean,nonNullable:!0})],y.prototype,"legendEnabled",void 0),t([s({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([s({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([p("esri.layers.buildingSublayers.BuildingSublayer")],y);const oe=y,ae="esri.layers.buildingSublayers.BuildingComponentSublayer",rt=j.getLogger(ae),Z=Ze();let a=class extends Y.LoadableMixin(ee(oe)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,r;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(r=this.layer.parsedUrl)==null?void 0:r.query}:{path:""}}get fieldsIndex(){return new fe(this.fields)}readAssociatedLayer(e,r){const i=this.layer.associatedFeatureServiceItem,o=r.associatedLayerID;return i!=null&&typeof o=="number"?new ie({portalItem:i,layerId:o}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=e!=null?e.signal:null,i=this._fetchService(r).then(()=>{this.indexInfo=Ge(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,rt,r)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return ge(this,e)}async _fetchService(e){const r=(await te(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var o,n,c;const i=(n=(o=this.getFeatureType(r==null?void 0:r.feature))==null?void 0:o.domains)==null?void 0:n[e];return i&&i.type!=="inherited"?i:((c=this.getField(e))==null?void 0:c.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Ce,{query:r,data:{supportsZ:i,supportsM:o,isVersioned:n}}=e;return{query:r,data:{supportsZ:i,supportsM:o,isVersioned:n}}}createQuery(){const e=new me;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),r)).then(i=>{if(i!=null&&i.features)for(const o of i.features)o.layer=this.layer,o.sourceLayer=this;return i})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryObjectIds(e||this.createQuery(),r))}async queryCachedAttributes(e,r){const i=ve(this.fieldsIndex,await et(this,tt(this)));return De(this.parsedUrl.path,this.attributeStorageInfo,e,r,i)}async queryCachedFeature(e,r){const i=await this.queryCachedAttributes(e,[r]);if(!i||i.length===0)throw new I("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new be;return o.attributes=i[0],o.layer=this,o.sourceLayer=this,o}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new I("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new I("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([s({readOnly:!0})],a.prototype,"parsedUrl",null),t([s({type:Xe,readOnly:!0})],a.prototype,"nodePages",void 0),t([s({type:[We],readOnly:!0})],a.prototype,"materialDefinitions",void 0),t([s({type:[ze],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),t([s({type:[Ye],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),t([s({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),t([s({readOnly:!0})],a.prototype,"store",void 0),t([s({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),t([s({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),t([s(Z.fields)],a.prototype,"fields",void 0),t([s({readOnly:!0})],a.prototype,"fieldsIndex",null),t([s({readOnly:!0,type:ie})],a.prototype,"associatedLayer",void 0),t([x("service","associatedLayer",["associatedLayerID"])],a.prototype,"readAssociatedLayer",null),t([s(Z.outFields)],a.prototype,"outFields",void 0),t([s({type:String,readOnly:!0})],a.prototype,"objectIdField",null),t([s({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),t([s({readOnly:!0,type:String})],a.prototype,"apiKey",null),t([s({readOnly:!0,type:we})],a.prototype,"fullExtent",null),t([s({readOnly:!0,type:re})],a.prototype,"spatialReference",null),t([s({readOnly:!0})],a.prototype,"version",null),t([s({readOnly:!0,type:Se})],a.prototype,"elevationInfo",null),t([s({readOnly:!0,type:Number})],a.prototype,"minScale",null),t([s({readOnly:!0,type:Number})],a.prototype,"maxScale",null),t([s({readOnly:!0,type:Number})],a.prototype,"effectiveScaleRange",null),t([s({type:["hide","show"],json:{write:!0}})],a.prototype,"listMode",void 0),t([s({types:$e,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",void 0),t([s({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),t([s(Oe)],a.prototype,"popupEnabled",void 0),t([s({type:je,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],a.prototype,"popupTemplate",void 0),t([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),t([s({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),t([s()],a.prototype,"types",null),t([s()],a.prototype,"typeIdField",null),t([s({json:{write:!1}}),se(new Ie({"3DObject":"3d-object",Point:"point"}))],a.prototype,"layerType",void 0),t([s()],a.prototype,"geometryType",null),t([s()],a.prototype,"profile",null),t([s({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),a=t([p(ae)],a);const N=a;var R;const G={type:b,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ne}}},read:!1}};function ne(e,r,i){if(e&&Array.isArray(e))return new b(e.map(o=>{const n=st(o);if(n){const c=new n;return c.read(o,i),c}return i&&i.messages&&o&&i.messages.push(new xe("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(o.type||"unknown")+"' are not supported",{definition:o,context:i})),null}))}let f=R=class extends oe{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Fe(this,e=>R.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};function st(e){return e.layerType==="group"?f:N}t([s({type:["hide","show","hide-children"],json:{write:!0}})],f.prototype,"listMode",void 0),t([s(G)],f.prototype,"sublayers",void 0),f=R=t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")],f),function(e){function r(i,o){i.forEach(n=>{o(n),n.type==="building-group"&&r(n.sublayers,o)})}e.sublayersProperty=G,e.readSublayers=ne,e.forEachSublayer=r}(f||(f={}));const m=f;let F=class extends g{constructor(){super(...arguments),this.type=null}};t([s({type:String,readOnly:!0,json:{write:!0}})],F.prototype,"type",void 0),F=t([p("esri.layers.support.BuildingFilterAuthoringInfo")],F);const le=F;var P;let w=P=class extends g{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new P({filterType:this.filterType,filterValues:u(this.filterValues)})}};t([s({type:String,json:{write:!0}})],w.prototype,"filterType",void 0),t([s({type:[String],json:{write:!0}})],w.prototype,"filterValues",void 0),w=P=t([p("esri.layers.support.BuildingFilterAuthoringInfoType")],w);const it=w;var k;const ot=b.ofType(it);let L=k=class extends g{clone(){return new k({filterTypes:u(this.filterTypes)})}};t([s({type:ot,json:{write:!0}})],L.prototype,"filterTypes",void 0),L=k=t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],L);const at=L;var M;const nt=b.ofType(at);let S=M=class extends le{constructor(){super(...arguments),this.type="checkbox"}clone(){return new M({filterBlocks:u(this.filterBlocks)})}};t([s({type:["checkbox"]})],S.prototype,"type",void 0),t([s({type:nt,json:{write:!0}})],S.prototype,"filterBlocks",void 0),S=M=t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],S);const H=S;let T=class extends g{};t([s({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),T=t([p("esri.layers.support.BuildingFilterMode")],T);const A=T;var Q;let B=Q=class extends A{constructor(){super(...arguments),this.type="solid"}clone(){return new Q}};t([s({type:["solid"],readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),B=Q=t([p("esri.layers.support.BuildingFilterModeSolid")],B);const U=B;var K;let $=K=class extends A{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new K({edges:u(this.edges)})}};t([se({wireFrame:"wire-frame"})],$.prototype,"type",void 0),t([s(Le)],$.prototype,"edges",void 0),$=K=t([p("esri.layers.support.BuildingFilterModeWireFrame")],$);const X=$;var V;let E=V=class extends A{constructor(){super(...arguments),this.type="x-ray"}clone(){return new V}};t([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],E.prototype,"type",void 0),E=V=t([p("esri.layers.support.BuildingFilterModeXRay")],E);const W=E;var C;const lt={nonNullable:!0,types:{key:"type",base:A,typeMap:{solid:U,"wire-frame":X,"x-ray":W}},json:{read:e=>{switch(e&&e.type){case"solid":return U.fromJSON(e);case"wireFrame":return X.fromJSON(e);case"x-ray":return W.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let v=C=class extends g{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new U,this.title=""}clone(){return new C({filterExpression:this.filterExpression,filterMode:u(this.filterMode),title:this.title})}};t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"filterExpression",void 0),t([s(lt)],v.prototype,"filterMode",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"title",void 0),v=C=t([p("esri.layers.support.BuildingFilterBlock")],v);const pt=v;var D;const yt=b.ofType(pt);let h=D=class extends g{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Te(),this.name=null}clone(){return new D({description:this.description,filterBlocks:u(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:u(this.filterAuthoringInfo)})}};t([s({type:String,json:{write:!0}})],h.prototype,"description",void 0),t([s({type:yt,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterBlocks",void 0),t([s({types:{key:"type",base:le,typeMap:{checkbox:H}},json:{read:e=>(e&&e.type)==="checkbox"?H.fromJSON(e):null,write:!0}})],h.prototype,"filterAuthoringInfo",void 0),t([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"id",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"name",void 0),h=D=t([p("esri.layers.support.BuildingFilter")],h);const dt=h;let d=class extends g{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([s({type:String})],d.prototype,"fieldName",void 0),t([s({type:String})],d.prototype,"modelName",void 0),t([s({type:String})],d.prototype,"label",void 0),t([s({type:Number})],d.prototype,"min",void 0),t([s({type:Number})],d.prototype,"max",void 0),t([s({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],d.prototype,"mostFrequentValues",void 0),t([s({type:[Number]})],d.prototype,"subLayerIds",void 0),d=t([p("esri.layers.support.BuildingFieldStatistics")],d);let O=class extends Y.LoadableMixin(ee(g)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(j.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await te(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([s({constructOnly:!0,type:String})],O.prototype,"url",void 0),t([s({readOnly:!0,type:[d],json:{read:{source:"summary"}}})],O.prototype,"fields",null),O=t([p("esri.layers.support.BuildingSummaryStatistics")],O);const pe=O,ye=b.ofType(dt),de=u(m.sublayersProperty);var z;const _=(z=de.json)==null?void 0:z.origins;_&&(_["web-scene"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_["portal-item"]={type:[N],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let l=class extends He(Be(Ee(Ae(_e(qe(Ne(Ve))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Re({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new ye,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,i){const o=m.readSublayers(e,r,i);return m.forEachSublayer(o,n=>n.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(o,this._sublayerOverrides),this._sublayerOverrides=null),o}applySublayerOverrides(e,{overrides:r,context:i}){m.forEachSublayer(e,o=>o.read(r.get(o.id),i))}readSublayerOverrides(e,r){var o;const i=new Map;for(const n of e)n!=null&&typeof n=="object"&&typeof n.id=="number"?i.set(n.id,n):(o=r.messages)==null||o.push(new I("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}));return{overrides:i,context:r}}writeSublayerOverrides(e,r,i){const o=[];m.forEachSublayer(this.sublayers,n=>{const c=n.write({},i);Object.keys(c).length>1&&o.push(c)}),o.length>0&&(r.sublayers=o)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(i=>{r.sublayers.push(u(i))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this._sublayerOverrides=i}}readSummaryStatistics(e,r){var i;if(typeof r.statisticsHRef=="string"){const o=Pe((i=this.parsedUrl)==null?void 0:i.path,r.statisticsHRef);return new pe({url:o})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(ke).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return Me(this,e=>{m.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(J.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(J.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new I("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&j.getLogger(this).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&j.getLogger(this).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const r=new Je(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem()}catch(i){j.getLogger(this).warn("Associated feature service item could not be loaded",i)}}};t([s({type:["BuildingSceneLayer"]})],l.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],l.prototype,"allSublayers",void 0),t([s(de)],l.prototype,"sublayers",void 0),t([x("service","sublayers")],l.prototype,"readSublayers",null),t([s({type:ye,nonNullable:!0,json:{write:!0}})],l.prototype,"filters",void 0),t([s({type:String,json:{write:!0}})],l.prototype,"activeFilterId",void 0),t([s({readOnly:!0,type:pe})],l.prototype,"summaryStatistics",void 0),t([x("summaryStatistics",["statisticsHRef"])],l.prototype,"readSummaryStatistics",null),t([s({type:[String],json:{read:!1}})],l.prototype,"outFields",void 0),t([s(Qe)],l.prototype,"fullExtent",void 0),t([s(Ue)],l.prototype,"legendEnabled",void 0),t([s({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),t([s(q(re))],l.prototype,"spatialReference",void 0),t([s(Ke)],l.prototype,"elevationInfo",null),t([s({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([s()],l.prototype,"associatedFeatureServiceItem",void 0),l=t([p("esri.layers.BuildingSceneLayer")],l);const Zt=l;export{Zt as default};
