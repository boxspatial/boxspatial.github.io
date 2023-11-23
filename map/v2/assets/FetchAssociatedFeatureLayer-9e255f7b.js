import{jp as g,hW as E,N as f,H as T,G as h,k0 as R,k1 as A,f7 as P,X as m,I as w,eo as U}from"./index-eed032b4.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-0e1007d7.js";import{r as C,e as D,I as v}from"./I3SBinaryReader-00a7d3f0.js";import"./spatialReferenceEllipsoidUtils-2c452f46.js";import"./symbolColorUtils-9eb3953d.js";import{e as F}from"./quatf64-3363c48e.js";import{t as $}from"./vec3f32-ad1dc57f.js";import"./plane-874ee002.js";import S from"./FeatureLayer-96bccf25.js";const X={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}};var y;(function(s){s[s.INVISIBLE=0]="INVISIBLE",s[s.TRANSPARENT=1]="TRANSPARENT",s[s.OPAQUE=2]="OPAQUE"})(y||(y={}));function N(s){return{...O,...s,type:"solid"}}const O={color:g(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:y.OPAQUE,hasSlicePlane:!1};g(0,0,0,.2),y.OPAQUE;function x(s=[0,0,0],r=[-1,-1,-1],t=F()){return{center:E(s),halfSize:$(r),quaternion:C(t)}}(()=>{const s=new Int8Array(162);let r=0;const t=o=>{for(let a=0;a<o.length;a++)s[r+a]=o[a];r+=6};return t([6,2,3,1,5,4]),t([0,2,3,1,5,4]),t([0,2,3,7,5,4]),t([0,1,3,2,6,4]),t([0,1,3,2,0,0]),t([0,1,5,7,3,2]),t([0,1,3,7,6,4]),t([0,1,3,7,6,2]),t([0,1,5,7,6,2]),t([0,1,5,4,6,2]),t([0,1,5,4,0,0]),t([0,1,3,7,5,4]),t([0,2,6,4,0,0]),t([0,0,0,0,0,0]),t([1,3,7,5,0,0]),t([2,3,7,6,4,0]),t([2,3,7,6,0,0]),t([2,3,1,5,7,6]),t([0,1,5,7,6,2]),t([0,1,5,7,6,4]),t([0,1,3,7,6,4]),t([4,5,7,6,2,0]),t([4,5,7,6,0,0]),t([4,5,1,3,7,6]),t([0,2,3,7,5,4]),t([6,2,3,7,5,4]),t([6,2,3,1,5,4]),s})();f();var I;function Z(s,r,t,o,a){const n=[];for(const e of r)if(e&&a.includes(e.name)){const p=`${s}/nodes/${t}/attributes/${e.key}/0`;n.push({url:p,storageInfo:e})}return T(n.map(e=>h(e.url,{responseType:"array-buffer"}).then(p=>v(e.storageInfo,p.data)))).then(e=>{const p=[];for(const d of o){const u={};for(let i=0;i<e.length;i++){const c=e[i].value;c!=null&&(u[n[i].storageInfo.name]=M(c,d))}p.push(u)}return p})}(function(s){s[s.OUTSIDE=0]="OUTSIDE",s[s.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",s[s.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",s[s.INSIDE=3]="INSIDE"})(I||(I={}));const Q=-32768,j=-(2**31);function M(s,r){if(!s)return null;const t=s[r];return R(s)?t===Q?null:t:A(s)?t===j?null:t:t!=t?null:t}N({color:[0,0,0,0],opacity:0});new Array(24);D();f();f();x();new Array(72);class J{constructor(r,t,o,a){var e;this._parsedUrl=r,this._portalItem=t,this._apiKey=o,this.signal=a,this._rootDocument=null;const n=(e=this._parsedUrl)==null?void 0:e.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);n&&(this._urlParts={root:n[1],layerId:parseInt(n[2],10)})}async fetch(){if(!this._urlParts)return null;const r=this._portalItem??await this._portalItemFromServiceItemId();if(r==null)return this._loadFromUrl();const t=await this._findAndLoadRelatedPortalItem(r);return t==null?null:this._loadFeatureLayerFromPortalItem(t)}async fetchPortalItem(){if(!this._urlParts)return null;const r=this._portalItem??await this._portalItemFromServiceItemId();return r==null?null:this._findAndLoadRelatedPortalItem(r)}async _fetchRootDocument(){if(this._rootDocument!=null)return this._rootDocument;if(this._urlParts==null)return this._rootDocument={},{};const r={query:{f:"json",token:this._apiKey},responseType:"json",signal:this.signal},t=`${this._urlParts.root}/SceneServer`;try{const o=await h(t,r);this._rootDocument=o.data}catch{this._rootDocument={}}return this._rootDocument}async _fetchServiceOwningPortalUrl(){var a,n;const r=(a=this._parsedUrl)==null?void 0:a.path,t=r?(n=P)==null?void 0:n.findServerInfo(r):null;if(t!=null&&t.owningSystemUrl)return t.owningSystemUrl;const o=r?r.replace(/(.*\/rest)\/.*/i,"$1")+"/info":null;try{const e=(await h(o,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(e){m(e)}return null}async _findAndLoadRelatedPortalItem(r){try{return(await r.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find(t=>t.type==="Feature Service")||null}catch(t){return m(t),null}}async _loadFeatureLayerFromPortalItem(r){await r.load({signal:this.signal});const t=await this._findMatchingAssociatedSublayerUrl(r.url??"");return new S({url:t,portalItem:r}).load({signal:this.signal})}async _loadFromUrl(){var t;const r=await this._findMatchingAssociatedSublayerUrl(`${(t=this._urlParts)==null?void 0:t.root}/FeatureServer`);return new S({url:r}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(r){var c;const t=r.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),o=(c=this._urlParts)==null?void 0:c.layerId,a=this._fetchRootDocument(),n=l=>{const _={query:{f:"json"},responseType:"json",authMode:l,signal:this.signal};return h(t,_)},e=n("anonymous").catch(()=>n("no-prompt")),[p,d]=await Promise.all([e,a]),u=d&&d.layers,i=p.data&&p.data.layers;if(!Array.isArray(i))throw new Error("expected layers array");if(Array.isArray(u)){for(let l=0;l<Math.min(u.length,i.length);l++)if(u[l].id===o)return`${t}/${i[l].id}`}else if(o!=null&&o<i.length)return`${t}/${i[o].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const r=(await this._fetchRootDocument()).serviceItemId;if(!r)return null;const t=new w({id:r,apiKey:this._apiKey}),o=await this._fetchServiceOwningPortalUrl();o!=null&&(t.portal=new U({url:o}));try{return t.load({signal:this.signal})}catch(a){return m(a),null}}}export{J as i,Z as l,X as t};
