import{J as j,ah as r,ai as i,al as b,fg as J,aV as w,bk as N,bq as O,q as f,co as $,cU as R,g as q,jv as I,fs as P,fk as T,fl as k,fm as D,fn as L,fp as G,fq as C,fr as Q,bF as E,X as z,fx as m,fG as Z,eo as g,_ as V,fE as U,aC as c,g3 as A,gi as B,fI as M,fJ as W,fK as K,fL as X,fO as H,k6 as Y,fQ as ee,bl as te,fR as re,fS as se,fT as ie,fz as oe,fD as ne,g8 as ae,b8 as le}from"./index-edf1cead.js";import{c as ue}from"./clientSideDefaults-e624a586.js";import{p as de}from"./FeatureEffectLayer-74d758a7.js";import{n as pe}from"./FeatureReductionLayer-745a30db.js";import{c as he}from"./OrderedLayer-e038abc4.js";import{s as ce}from"./fieldProperties-1ad3ab72.js";import"./QueryEngineCapabilities-42e44ded.js";import"./FeatureEffect-92c7e9d5.js";import"./clusterUtils-5ded844a.js";import"./featureLayerUtils-71d00558.js";import"./RelationshipQuery-d43a5602.js";const F="esri.layers.graphics.sources.GeoJSONSource",v=j.getLogger(F);let p=class extends J{constructor(){super(...arguments),this.type="geojson",this.refresh=w(async e=>{await this.load();const{extent:t,timeExtent:s}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,s&&(this.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(s=>N.fromJSON(s))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(s=>({count:s.count,extent:O.fromJSON(s.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new f("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,s=[],n=[],d=[];if(e.addFeatures)for(const a of e.addFeatures)s.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)d.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:s,updates:d,deletes:n}).then(({extent:a,timeExtent:l,featureEditResults:u})=>(this.sourceJSON.extent=a,l&&(this.sourceJSON.timeInfo.timeExtent=[l.start,l.end]),this._createEditsResult(u)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new f("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,s=this._geometryForSerialization(e);return s?{geometry:s.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?$.fromExtent(t.extent):t}async _startWorker(e){this._connection=await R("GeoJSONSourceWorker",{strategy:q("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:s,hasZ:n,geometryType:d,objectIdField:a,url:l,timeInfo:u,customParameters:S}=this.layer,_=this.layer.originOf("spatialReference")==="defaults",x={url:l,customParameters:S,fields:t&&t.map(y=>y.toJSON()),geometryType:I.toJSON(d),hasZ:n,objectIdField:a,timeInfo:u?u.toJSON():null,spatialReference:_?null:s&&s.toJSON()},h=await this._connection.invoke("load",x,{signal:e});for(const y of h.warnings)v.warn(y.message,{layer:this.layer,warning:y});h.featureErrors.length&&v.warn(`Encountered ${h.featureErrors.length} validation errors while loading features`,h.featureErrors),this.sourceJSON=h.layerDefinition,this.capabilities=ue(this.sourceJSON.hasZ,!0)}};r([i()],p.prototype,"capabilities",void 0),r([i()],p.prototype,"type",void 0),r([i({constructOnly:!0})],p.prototype,"layer",void 0),r([i()],p.prototype,"sourceJSON",void 0),p=r([b(F)],p);const ye=ce();let o=class extends he(P(pe(de(T(k(D(L(G(C(Q(le))))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new p({layer:this}),this.spatialReference=E.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(z).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),m(this.renderer,this.fieldsIndex),Z(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?g(this.url):null}set renderer(e){m(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=g(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:s}=await V(()=>import("./editingSupport-5796dfb5.js"),["assets/editingSupport-5796dfb5.js","assets/index-edf1cead.js","assets/index-dc13cc80.css","assets/EditBusLayer-244198d8.js"]);await this.load();const n=await s(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return U(this,e)}createQuery(){const e=new c,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:s,timeExtent:n}=this;return e.timeExtent=s!=null&&n!=null?n.offset(-s.value,s.unit):n||null,e}getFieldDomain(e,t){let s,n=!1;const d=t&&t.feature,a=d&&d.attributes,l=this.typeIdField&&a&&a[this.typeIdField];return l!=null&&this.types&&(n=this.types.some(u=>u.id==l&&(s=u.domains&&u.domains[e],s&&s.type==="inherited"&&(s=this._getLayerDomain(e)),!0))),n||s||(s=this._getLayerDomain(e)),s}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(c.from(e)||this.createQuery(),t)).then(s=>{if(s!=null&&s.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(c.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(c.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(c.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some(s=>(s.name===e&&(t=s.domain),!!t)),t}};r([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",null),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"createQueryVersion",null),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Boolean})],o.prototype,"editingEnabled",void 0),r([i(A)],o.prototype,"elevationInfo",void 0),r([i({type:[B],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),r([i(ye.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({type:O,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),r([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:I.read}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean})],o.prototype,"hasZ",void 0),r([i(M)],o.prototype,"id",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i(W)],o.prototype,"labelsVisible",void 0),r([i({type:[K],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:X},write:!0}})],o.prototype,"labelingInfo",void 0),r([i(H)],o.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i(Y)],o.prototype,"opacity",void 0),r([i({type:["GeoJSON"]})],o.prototype,"operationalLayerType",void 0),r([i({readOnly:!0})],o.prototype,"parsedUrl",null),r([i(ee)],o.prototype,"popupEnabled",void 0),r([i({type:te,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:re,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:se}}}})],o.prototype,"renderer",null),r([i(ie)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({type:E})],o.prototype,"spatialReference",void 0),r([i({type:[oe]})],o.prototype,"templates",void 0),r([i()],o.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),r([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([i({type:[ne]})],o.prototype,"types",void 0),r([i(ae)],o.prototype,"url",null),o=r([b("esri.layers.GeoJSONLayer")],o);const xe=o;export{xe as default};
