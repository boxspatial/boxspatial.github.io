import{ji as j,G as R,aG as l,bM as f,bo as p}from"./index-e5973b57.js";function S(r,t){const e=r.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!(t!=null&&t.returnCountOnly)?e.outFields.includes("*")?e.outFields="*":e.outFields=e.outFields.join(","):delete e.outFields,e.outSpatialReference&&(e.outSR=e.outSR.wkid||JSON.stringify(e.outSR.toJSON()),delete e.outSpatialReference),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}async function b(r,t,e){const a=await y(r,t,e),o=a.data,s=o.geometryType,n=o.spatialReference,c={};for(const d of o.relatedRecordGroups){const u={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:n,hasZ:!!o.hasZ,hasM:!!o.hasM,features:d.relatedRecords};if(d.objectId!=null)c[d.objectId]=u;else for(const i of Object.keys(d))i!=="relatedRecords"&&(c[d[i]]=u)}return{...a,data:c}}async function m(r,t,e){const a=await y(r,t,e,{returnCountOnly:!0}),o=a.data,s={};for(const n of o.relatedRecordGroups)n.objectId!=null&&(s[n.objectId]=n.count);return{...a,data:s}}async function y(r,t,e={},a){const o=j({...r.query,f:"json",...a,...S(t,a)});return R(r.path+"/queryRelatedRecords",{...e,query:{...e.query,...o}})}async function h(r,t,e){t=l.from(t);const a=f(r);return b(a,t,e).then(o=>{const s=o.data,n={};return Object.keys(s).forEach(c=>n[c]=p.fromJSON(s[c])),n})}async function O(r,t,e){t=l.from(t);const a=f(r);return m(a,t,{...e}).then(o=>o.data)}export{h as executeRelationshipQuery,O as executeRelationshipQueryForCount};