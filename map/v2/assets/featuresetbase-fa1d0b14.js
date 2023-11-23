import{c as ge}from"./arcadeTimeUtils-12bfe600.js";import{Q as A,V as L,A as R,L as P,c as x,aj as we,S as Ie,B as oe,v as S,I as j,z as N,E as B,P as Fe,q as z,ak as Ee,O as De,b as H,h as be,al as xe,am as q,a0 as K,an as Y}from"./arcadeUtils-4fc1b402.js";import{t as p,e as y}from"./executionError-c92d3b85.js";import{e as le,j as Ae,q as fe,f as Ne,c as ce,a as Te,b as Se,d as Le,g as X,k as ve,F as Pe,T as Re,y as k,x as Ce,E as V,D as v,A as _}from"./featureSetUtils-e3941b52.js";import{t as Me}from"./portalUtils-b917e5c1.js";import{e as Oe,N as ue}from"./SpatialFilter-335aea63.js";import{eo as de,jR as ke,gj as W}from"./index-eed032b4.js";import{f as b}from"./WhereClause-c83dcc9b.js";import $ from"./FeatureLayer-96bccf25.js";import"./number-1a84fa92.js";import"./clusterUtils-d077d77a.js";import"./AttachmentInfo-e8c393ca.js";import"./RelationshipQuery-4b5cdfd6.js";import"./TopFeaturesQuery-cef97b61.js";import"./SubtypeGroupLayer-47821a1e.js";import"./EditBusLayer-a6a5507e.js";import"./FeatureLayerBase-32e123ac.js";import"./featureLayerUtils-71d8b720.js";import"./fieldProperties-233fbbe4.js";import"./geometryEngineAsync-e444c352.js";import"./editsZScale-0594243d.js";import"./FeatureEffectLayer-6e78ef43.js";import"./FeatureEffect-fa9becb0.js";import"./FeatureReductionLayer-dfeafac1.js";import"./OrderedLayer-0a78e45e.js";import"./styleUtils-f9f86ae1.js";function ze(s,n,a,d){if(d.length===1){if(N(d[0]))return Y(s,d[0],-1);if(z(d[0]))return Y(s,d[0].toArray(),-1)}return Y(s,d,-1)}async function ee(s,n,a){const d=s.getVariables();if(d.length>0){const E=[];for(let i=0;i<d.length;i++){const t={name:d[i]};E.push(await n.evaluateIdentifier(a,t))}const e={};for(let i=0;i<d.length;i++)e[d[i]]=E[i];return s.parameters=e,s}return s}function c(s,n,a=null){for(const d in s)if(d.toLowerCase()===n.toLowerCase())return s[d];return a}function me(s){if(s===null)return null;const n={type:c(s,"type",""),name:c(s,"name","")};if(n.type==="range")n.range=c(s,"range",[]);else{n.codedValues=[];for(const a of c(s,"codedValues",[]))n.codedValues.push({name:c(a,"name",""),code:c(a,"code",null)})}return n}function ne(s){if(s===null)return null;const n={},a=c(s,"wkt",null);a!==null&&(n.wkt=a);const d=c(s,"wkid",null);return d!==null&&(n.wkid=d),n}function pe(s){if(s===null)return null;const n={hasZ:c(s,"hasz",!1),hasM:c(s,"hasm",!1)},a=c(s,"spatialreference",null);a&&(n.spatialReference=ne(a));const d=c(s,"x",null);if(d!==null)return n.x=d,n.y=c(s,"y",null),n;const E=c(s,"rings",null);if(E!==null)return n.rings=E,n;const e=c(s,"paths",null);if(e!==null)return n.paths=e,n;const i=c(s,"points",null);if(i!==null)return n.points=i,n;for(const t of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const u=c(s,t,null);u!==null&&(n[t]=u)}return n}function je(s,n){for(const a of n)if(a===s)return!0;return!1}function He(s){return!!s.layerDefinition&&!!s.featureSet&&je(s.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&N(s.layerDefinition.fields)!==!1&&N(s.featureSet.features)!==!1}function mn(s){s.mode==="async"&&(s.functions.timezone=function(n,a){return s.standardFunctionAsync(n,a,async(d,E,e)=>{if(A(e,1,2,n,a),L(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(e[1]instanceof R)||e[1].hasField("type")===!1)throw new p(n,y.InvalidParameter,a);const u=e[1].field("type");if(P(u)===!1)throw new p(n,y.InvalidParameter,a);switch(x(u).toLowerCase()){case"preferredtimezone":return e[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;case"editfieldsinfo":return e[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case"timeinfo":return e[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case"field":if(e[1].hasField("fieldname")&&P(e[1].field("fieldname")))return e[0].dateTimeReferenceFieldIndex.fieldTimeZone(x(e[1].field("fieldname")))}throw new p(n,y.InvalidParameter,a)}const i=we(e[0],Ie(n));if(i===null)return null;const t=i.timeZone;return t==="system"?ge.systemTimeZoneCanonicalName:t})},s.functions.sqltimestamp=function(n,a){return s.standardFunctionAsync(n,a,async(d,E,e)=>{A(e,1,3,n,a);const i=e[0];if(oe(i)){if(e.length===1)return i.toSQLString();if(e.length===2)return i.changeTimeZone(x(e[1])).toSQLString();throw new p(n,y.InvalidParameter,a)}if(L(i)){if(e.length!==3)throw new p(n,y.InvalidParameter,a);await i.load();const t=x(e[1]);if(oe(e[2])===!1)throw new p(n,y.InvalidParameter,a);const u=i.fieldTimeZone(t);return u===null?e[2].toSQLString():e[2].changeTimeZone(u).toSQLString()}throw new p(n,y.InvalidParameter,a)})},s.signatures.push({name:"sqltimestamp",min:2,max:4}),s.functions.featuresetbyid=function(n,a){return s.standardFunctionAsync(n,a,(d,E,e)=>{if(A(e,2,4,n,a),e[0]instanceof le){const i=x(e[1]);let t=S(e[2],null);const u=j(S(e[3],!0));if(t===null&&(t=["*"]),N(t)===!1)throw new p(n,y.InvalidParameter,a);return e[0].featureSetById(i,u,t)}throw new p(n,y.InvalidParameter,a)})},s.signatures.push({name:"featuresetbyid",min:2,max:4}),s.functions.getfeatureset=function(n,a){return s.standardFunctionAsync(n,a,(d,E,e)=>{if(A(e,1,2,n,a),B(e[0])){let i=S(e[1],"datasource");return i===null&&(i="datasource"),i=x(i).toLowerCase(),Ae(e[0].fullSchema(),i,n.lrucache,n.interceptor,n.spatialReference)}throw new p(n,y.InvalidParameter,a)})},s.signatures.push({name:"getfeatureset",min:1,max:2}),s.functions.featuresetbyportalitem=function(n,a){return s.standardFunctionAsync(n,a,(d,E,e)=>{var l;if(A(e,2,5,n,a),e[0]===null)throw new p(n,y.PortalRequired,a);if(e[0]instanceof Fe){const r=x(e[1]),o=x(e[2]);let f=S(e[3],null);const h=j(S(e[4],!0));if(f===null&&(f=["*"]),N(f)===!1)throw new p(n,y.InvalidParameter,a);let g=null;return g=n.services&&n.services.portal?n.services.portal:de.getDefault(),g=Me(e[0],g),fe(r,o,n.spatialReference,f,h,g,n.lrucache,n.interceptor)}if(P(e[0])===!1)throw new p(n,y.PortalRequired,a);const i=x(e[0]),t=x(e[1]);let u=S(e[2],null);const m=j(S(e[3],!0));if(u===null&&(u=["*"]),N(u)===!1)throw new p(n,y.InvalidParameter,a);return fe(i,t,n.spatialReference,u,m,((l=n.services)==null?void 0:l.portal)??de.getDefault(),n.lrucache,n.interceptor)})},s.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),s.functions.featuresetbyname=function(n,a){return s.standardFunctionAsync(n,a,(d,E,e)=>{if(A(e,2,4,n,a),e[0]instanceof le){const i=x(e[1]);let t=S(e[2],null);const u=j(S(e[3],!0));if(t===null&&(t=["*"]),N(t)===!1)throw new p(n,y.InvalidParameter,a);return e[0].featureSetByName(i,u,t)}throw new p(n,y.InvalidParameter,a)})},s.signatures.push({name:"featuresetbyname",min:2,max:4}),s.functions.featureset=function(n,a){return s.standardFunction(n,a,(d,E,e)=>{var u;A(e,1,1,n,a);let i=e[0];const t={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(P(i))i=JSON.parse(i),i.layerDefinition!==void 0?(t.layerDefinition=i.layerDefinition,t.featureSet=i.featureSet,i.layerDefinition.spatialReference&&(t.layerDefinition.spatialReference=i.layerDefinition.spatialReference)):(t.featureSet.features=i.features,t.featureSet.geometryType=i.geometryType,t.layerDefinition.geometryType=t.featureSet.geometryType,t.layerDefinition.objectIdField=i.objectIdFieldName??"",t.layerDefinition.typeIdField=i.typeIdFieldName,t.layerDefinition.globalIdField=i.globalIdFieldName,t.layerDefinition.fields=i.fields,i.spatialReference&&(t.layerDefinition.spatialReference=i.spatialReference));else{if(!(e[0]instanceof R))throw new p(n,y.InvalidParameter,a);{i=JSON.parse(e[0].castToText(!0));const m=c(i,"layerdefinition");if(m!==null){t.layerDefinition.geometryType=c(m,"geometrytype",""),t.featureSet.geometryType=t.layerDefinition.geometryType,t.layerDefinition.globalIdField=c(m,"globalidfield",""),t.layerDefinition.objectIdField=c(m,"objectidfield",""),t.layerDefinition.typeIdField=c(m,"typeidfield",""),t.layerDefinition.hasZ=c(m,"hasz",!1)===!0,t.layerDefinition.hasM=c(m,"hasm",!1)===!0;const l=c(m,"spatialreference",null);l&&(t.layerDefinition.spatialReference=ne(l));for(const o of c(m,"fields",[])){const f={name:c(o,"name",""),alias:c(o,"alias",""),type:c(o,"type",""),nullable:c(o,"nullable",!0),editable:c(o,"editable",!0),length:c(o,"length",null),domain:me(c(o,"domain"))};t.layerDefinition.fields.push(f)}const r=c(i,"featureset",null);if(r){const o={};for(const f of t.layerDefinition.fields)o[f.name.toLowerCase()]=f.name;for(const f of c(r,"features",[])){const h={},g=c(f,"attributes",{});for(const I in g)h[o[I.toLowerCase()]]=g[I];t.featureSet.features.push({attributes:h,geometry:pe(c(f,"geometry",null))})}}}else{t.layerDefinition.hasZ=c(i,"hasz",!1)===!0,t.layerDefinition.hasM=c(i,"hasm",!1)===!0,t.layerDefinition.geometryType=c(i,"geometrytype",""),t.featureSet.geometryType=t.layerDefinition.geometryType,t.layerDefinition.objectIdField=c(i,"objectidfieldname",""),t.layerDefinition.typeIdField=c(i,"typeidfieldname","");const l=c(i,"spatialreference",null);l&&(t.layerDefinition.spatialReference=ne(l));let r=c(i,"fields",null);if(N(r))for(const h of r){const g={name:c(h,"name",""),alias:c(h,"alias",""),type:c(h,"type",""),nullable:c(h,"nullable",!0),editable:c(h,"editable",!0),length:c(h,"length",null),domain:me(c(h,"domain"))};t.layerDefinition.fields.push(g)}else r=null,t.layerDefinition.fields=r;const o={};for(const h of t.layerDefinition.fields)o[h.name.toLowerCase()]=h.name;let f=c(i,"features",null);if(N(f))for(const h of f){const g={},I=c(h,"attributes",{});for(const D in I)g[o[D.toLowerCase()]]=I[D];t.featureSet.features.push({attributes:g,geometry:pe(c(h,"geometry",null))})}else f=null,t.featureSet.features=f}}}if(He(t)===!1)throw new p(n,y.InvalidParameter,a);return(((u=t==null?void 0:t.layerDefinition)==null?void 0:u.geometryType)||"")===""&&(t.layerDefinition.geometryType="esriGeometryNull"),Ne.create(t,n.spatialReference)})},s.signatures.push({name:"featureset",min:1,max:1}),s.functions.filter=function(n,a){return s.standardFunctionAsync(n,a,async(d,E,e)=>{if(A(e,2,2,n,a),N(e[0])||z(e[0])){const i=[];let t=e[0];t instanceof Ee&&(t=t.toArray());let u=null;if(!De(e[1]))throw new p(n,y.InvalidParameter,a);u=e[1].createFunction(n);for(const m of t){const l=u(m);ke(l)?await l===!0&&i.push(m):l===!0&&i.push(m)}return i}if(L(e[0])){const i=await e[0].load(),t=b.create(e[1],i.getFieldsIndex()),u=t.getVariables();if(u.length>0){const m=[];for(let r=0;r<u.length;r++){const o={name:u[r]};m.push(await s.evaluateIdentifier(n,o))}const l={};for(let r=0;r<u.length;r++)l[u[r]]=m[r];return t.parameters=l,new ce({parentfeatureset:e[0],whereclause:t})}return new ce({parentfeatureset:e[0],whereclause:t})}throw new p(n,y.InvalidParameter,a)})},s.signatures.push({name:"filter",min:2,max:2}),s.functions.orderby=function(n,a){return s.standardFunctionAsync(n,a,async(d,E,e)=>{if(A(e,2,2,n,a),L(e[0])){const i=new Te(e[1]);return new Se({parentfeatureset:e[0],orderbyclause:i})}throw new p(n,y.InvalidParameter,a)})},s.signatures.push({name:"orderby",min:2,max:2}),s.functions.top=function(n,a){return s.standardFunctionAsync(n,a,async(d,E,e)=>{if(A(e,2,2,n,a),L(e[0]))return new Le({parentfeatureset:e[0],topnum:e[1]});if(N(e[0]))return H(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,H(e[1]));if(z(e[0]))return H(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,H(e[1]));throw new p(n,y.InvalidParameter,a)})},s.signatures.push({name:"top",min:2,max:2}),s.functions.first=function(n,a){return s.standardFunctionAsync(n,a,async(d,E,e)=>{if(A(e,1,1,n,a),L(e[0])){const i=await e[0].first(d.abortSignal);if(i!==null){const t=be.createFromGraphicLikeObject(i.geometry,i.attributes,e[0],n.timeReference);return t._underlyingGraphic=i,t}return i}return N(e[0])?e[0].length===0?null:e[0][0]:z(e[0])?e[0].length()===0?null:e[0].get(0):null})},s.signatures.push({name:"first",min:1,max:1}),s.functions.attachments=function(n,a){return s.standardFunctionAsync(n,a,async(d,E,e)=>{A(e,1,2,n,a);const i={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof R){if(e[1].hasField("minsize")&&(i.minsize=H(e[1].field("minsize"))),e[1].hasField("metadata")&&(i.returnMetadata=j(e[1].field("metadata"))),e[1].hasField("maxsize")&&(i.maxsize=H(e[1].field("maxsize"))),e[1].hasField("types")){const t=xe(e[1].field("types"),!1);t.length>0&&(i.types=t)}}else if(e[1]!==null)throw new p(n,y.InvalidParameter,a)}if(B(e[0])){let t=e[0]._layer;return t instanceof $&&(t=X(t,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),t===null?[]:L(t)===!1?[]:(await t.load(),t.queryAttachments(e[0].field(t.objectIdField),i.minsize,i.maxsize,i.types,i.returnMetadata))}if(e[0]===null)return[];throw new p(n,y.InvalidParameter,a)})},s.signatures.push({name:"attachments",min:1,max:2}),s.functions.featuresetbyrelationshipname=function(n,a){return s.standardFunctionAsync(n,a,async(d,E,e)=>{A(e,2,4,n,a);const i=e[0],t=x(e[1]);let u=S(e[2],null);const m=j(S(e[3],!0));if(u===null&&(u=["*"]),N(u)===!1)throw new p(n,y.InvalidParameter,a);if(e[0]===null)return null;if(!B(e[0]))throw new p(n,y.InvalidParameter,a);let l=i._layer;if(l instanceof $&&(l=X(l,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),l===null||L(l)===!1)return null;l=await l.load();const r=l.relationshipMetaData().filter(I=>I.name===t);if(r.length===0)return null;if(r[0].relationshipTableId!==void 0&&r[0].relationshipTableId!==null&&r[0].relationshipTableId>-1)return ve(l,r[0],i.field(l.objectIdField),l.spatialReference,u,m,n.lrucache,n.interceptor);let o=l.serviceUrl();if(!o)return null;o=o.charAt(o.length-1)==="/"?o+r[0].relatedTableId.toString():o+"/"+r[0].relatedTableId.toString();const f=await Pe(o,l.spatialReference,u,m,n.lrucache,n.interceptor);await f.load();let h=f.relationshipMetaData();if(h=h.filter(I=>I.id===r[0].id),i.hasField(r[0].keyField)===!1||i.field(r[0].keyField)===null){const I=await l.getFeatureByObjectId(i.field(l.objectIdField),[r[0].keyField]);if(I){const D=b.create(h[0].keyField+"= @id",f.getFieldsIndex());return D.parameters={id:I.attributes[r[0].keyField]},f.filter(D)}return new Oe({parentfeatureset:f})}const g=b.create(h[0].keyField+"= @id",f.getFieldsIndex());return g.parameters={id:i.field(r[0].keyField)},f.filter(g)})},s.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),s.functions.featuresetbyassociation=function(n,a){return s.standardFunctionAsync(n,a,async(d,E,e)=>{A(e,2,3,n,a);const i=e[0],t=x(S(e[1],"")).toLowerCase(),u=P(e[2])?x(e[2]):null;if(e[0]===null)return null;if(!B(e[0]))throw new p(n,y.InvalidParameter,a);let m=i._layer;if(m instanceof $&&(m=X(m,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),m===null||L(m)===!1)return null;await m.load();const l=m.serviceUrl(),r=await Re(l,n.spatialReference);let o=null,f=null,h=!1;if(u!==null&&u!==""&&u!==void 0){for(const F of r.terminals)F.terminalName===u&&(f=F.terminalId);f===null&&(h=!0)}const g=r.associations.getFieldsIndex(),I=g.get("TOGLOBALID").name,D=g.get("FROMGLOBALID").name,Q=g.get("TOTERMINALID").name,J=g.get("FROMTERMINALID").name,Z=g.get("FROMNETWORKSOURCEID").name,G=g.get("TONETWORKSOURCEID").name,O=g.get("ASSOCIATIONTYPE").name,ye=g.get("ISCONTENTVISIBLE").name,he=g.get("OBJECTID").name;for(const F of m.fields)if(F.type==="global-id"){o=i.field(F.name);break}let C=null,te=new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),b.create("0",r.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),b.create("''",r.associations.getFieldsIndex()));const T="globalid",ae="globalId",re={};for(const F in r.lkp)re[F]=r.lkp[F].sourceId;const M=new Ce(new W({name:"classname",alias:"classname",type:"string"}),null,re);let w="";switch(t){case"midspan":{w=`((${I}='${o}') OR ( ${D}='${o}')) AND (${O} IN (5))`,M.codefield=b.create(`CASE WHEN (${I}='${o}') THEN ${Z} ELSE ${G} END`,r.associations.getFieldsIndex());const F=K(v.findField(r.associations.fields,D));F.name=T,F.alias=T,C=new k(F,b.create(`CASE WHEN (${D}='${o}') THEN ${I} ELSE ${D} END`,r.associations.getFieldsIndex())),te=r.unVersion>=4?new _(v.findField(r.associations.fields,g.get("PERCENTALONG").name)):new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),b.create("0",r.associations.getFieldsIndex()));break}case"junctionedge":{w=`((${I}='${o}') OR ( ${D}='${o}')) AND (${O} IN (4,6))`,M.codefield=b.create(`CASE WHEN (${I}='${o}') THEN ${Z} ELSE ${G} END`,r.associations.getFieldsIndex());const F=K(v.findField(r.associations.fields,D));F.name=T,F.alias=T,C=new k(F,b.create(`CASE WHEN (${D}='${o}') THEN ${I} ELSE ${D} END`,r.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),b.create(`CASE WHEN (${O}=4) THEN 'from' ELSE 'to' END`,r.associations.getFieldsIndex()));break}case"connected":{let F=`${I}='@T'`,se=`${D}='@T'`;f!==null&&(F+=` AND ${Q}=@A`,se+=` AND ${J}=@A`),w="(("+F+") OR ("+se+"))",w=q(w,"@T",o??""),F=q(F,"@T",o??""),f!==null&&(F=q(F,"@A",f.toString()),w=q(w,"@A",f.toString())),M.codefield=b.create("CASE WHEN "+F+` THEN ${Z} ELSE ${G} END`,r.associations.getFieldsIndex());const U=K(v.findField(r.associations.fields,D));U.name=T,U.alias=T,C=new k(U,b.create("CASE WHEN "+F+` THEN ${D} ELSE ${I} END`,r.associations.getFieldsIndex()));break}case"container":w=`${I}='${o}' AND ${O} = 2`,f!==null&&(w+=` AND ${Q} = `+f.toString()),M.codefield=Z,w="( "+w+" )",C=new V(v.findField(r.associations.fields,D),T,T);break;case"content":w=`(${D}='${o}' AND ${O} = 2)`,f!==null&&(w+=` AND ${J} = `+f.toString()),M.codefield=G,w="( "+w+" )",C=new V(v.findField(r.associations.fields,I),T,T);break;case"structure":w=`(${I}='${o}' AND ${O} = 3)`,f!==null&&(w+=` AND ${Q} = `+f.toString()),M.codefield=Z,w="( "+w+" )",C=new V(v.findField(r.associations.fields,D),T,ae);break;case"attached":w=`(${D}='${o}' AND ${O} = 3)`,f!==null&&(w+=` AND ${J} = `+f.toString()),M.codefield=G,w="( "+w+" )",C=new V(v.findField(r.associations.fields,I),T,ae);break;default:throw new p(n,y.InvalidParameter,a)}return h&&(w="1 <> 1"),new v({parentfeatureset:r.associations,adaptedFields:[new _(v.findField(r.associations.fields,he)),new _(v.findField(r.associations.fields,ye)),C,ie,M,te],extraFilter:w?b.create(w,r.associations.getFieldsIndex()):null})})},s.signatures.push({name:"featuresetbyassociation",min:2,max:6}),s.functions.groupby=function(n,a){return s.standardFunctionAsync(n,a,async(d,E,e)=>{if(A(e,3,3,n,a),!L(e[0]))throw new p(n,y.InvalidParameter,a);const i=await e[0].load(),t=[],u=[];let m=!1,l=[];if(P(e[1]))l.push(e[1]);else if(e[1]instanceof R)l.push(e[1]);else if(N(e[1]))l=e[1];else{if(!z(e[1]))throw new p(n,y.InvalidParameter,a);l=e[1].toArray()}for(const r of l)if(P(r)){const o=b.create(x(r),i.getFieldsIndex()),f=ue(o)===!0?x(r):"%%%%FIELDNAME";t.push({name:f,expression:o}),f==="%%%%FIELDNAME"&&(m=!0)}else{if(!(r instanceof R))throw new p(n,y.InvalidParameter,a);{const o=r.hasField("name")?r.field("name"):"%%%%FIELDNAME",f=r.hasField("expression")?r.field("expression"):"";if(o==="%%%%FIELDNAME"&&(m=!0),!o)throw new p(n,y.InvalidParameter,a);t.push({name:o,expression:b.create(f||o,i.getFieldsIndex())})}}if(l=[],P(e[2]))l.push(e[2]);else if(N(e[2]))l=e[2];else if(z(e[2]))l=e[2].toArray();else{if(!(e[2]instanceof R))throw new p(n,y.InvalidParameter,a);l.push(e[2])}for(const r of l){if(!(r instanceof R))throw new p(n,y.InvalidParameter,a);{const o=r.hasField("name")?r.field("name"):"",f=r.hasField("statistic")?r.field("statistic"):"",h=r.hasField("expression")?r.field("expression"):"";if(!o||!f||!h)throw new p(n,y.InvalidParameter,a);u.push({name:o,statistic:f.toLowerCase(),expression:b.create(h,i.getFieldsIndex())})}}if(m){const r={};for(const f of i.fields)r[f.name.toLowerCase()]=1;for(const f of t)f.name!=="%%%%FIELDNAME"&&(r[f.name.toLowerCase()]=1);for(const f of u)f.name!=="%%%%FIELDNAME"&&(r[f.name.toLowerCase()]=1);let o=0;for(const f of t)if(f.name==="%%%%FIELDNAME"){for(;r["field_"+o.toString()]===1;)o++;r["field_"+o.toString()]=1,f.name="FIELD_"+o.toString()}}for(const r of t)await ee(r.expression,s,n);for(const r of u)await ee(r.expression,s,n);return e[0].groupby(t,u)})},s.signatures.push({name:"groupby",min:3,max:3}),s.functions.distinct=function(n,a){return s.standardFunctionAsync(n,a,async(d,E,e)=>{if(L(e[0])){A(e,2,2,n,a);const i=await e[0].load(),t=[];let u=[];if(P(e[1]))u.push(e[1]);else if(e[1]instanceof R)u.push(e[1]);else if(N(e[1]))u=e[1];else{if(!z(e[1]))throw new p(n,y.InvalidParameter,a);u=e[1].toArray()}let m=!1;for(const l of u)if(P(l)){const r=b.create(x(l),i.getFieldsIndex()),o=ue(r)===!0?x(l):"%%%%FIELDNAME";t.push({name:o,expression:r}),o==="%%%%FIELDNAME"&&(m=!0)}else{if(!(l instanceof R))throw new p(n,y.InvalidParameter,a);{const r=l.hasField("name")?l.field("name"):"%%%%FIELDNAME",o=l.hasField("expression")?l.field("expression"):"";if(r==="%%%%FIELDNAME"&&(m=!0),!r)throw new p(n,y.InvalidParameter,a);t.push({name:r,expression:b.create(o||r,i.getFieldsIndex())})}}if(m){const l={};for(const o of i.fields)l[o.name.toLowerCase()]=1;for(const o of t)o.name!=="%%%%FIELDNAME"&&(l[o.name.toLowerCase()]=1);let r=0;for(const o of t)if(o.name==="%%%%FIELDNAME"){for(;l["field_"+r.toString()]===1;)r++;l["field_"+r.toString()]=1,o.name="FIELD_"+r.toString()}}for(const l of t)await ee(l.expression,s,n);return e[0].groupby(t,[])}return ze("distinct",d,E,e)})})}export{mn as registerFunctions};
