import{C as A,d5 as I,q as l,lI as v,a6 as b,J as $,V as h,eN as E,hf as S,ak as R,jN as O,jM as k}from"./index-edf1cead.js";import{n as L,l as U}from"./EditBusLayer-244198d8.js";function F(e){return e&&e.applyEdits!=null}function j(e){return typeof e=="object"&&e!=null&&"objectId"in e&&!!e.objectId}function M(e){return e.every(j)}function G(e){return typeof e=="object"&&e!=null&&"globalId"in e&&!!e.globalId}function N(e){return e.every(G)}async function Z(e,t,a,s={}){var o;let n;if(L(e)&&e.url)n=U(e.url,e.layerId,s.returnServiceEditsOption==="original-and-current-features");else{n=A(),n.promise.then(d=>{(d.addedFeatures.length||d.updatedFeatures.length||d.deletedFeatures.length||d.addedAttachments.length||d.updatedAttachments.length||d.deletedAttachments.length)&&e.emit("edits",d)});const i={result:n.promise};e.emit("apply-edits",i)}try{const{results:i,edits:d}=await B(e,t,a,s),r=u=>u.filter(c=>!c.error).map(I),p={edits:d,addedFeatures:r(i.addFeatureResults),updatedFeatures:r(i.updateFeatureResults),deletedFeatures:r(i.deleteFeatureResults),addedAttachments:r(i.addAttachmentResults),updatedAttachments:r(i.updateAttachmentResults),deletedAttachments:r(i.deleteAttachmentResults),exceededTransferLimit:!1};return(o=i.editedFeatureResults)!=null&&o.length&&(p.editedFeatures=i.editedFeatureResults),n.resolve(p),i}catch(i){throw n.reject(i),i}}async function B(e,t,a,s){var i,d,r,p,u,c;if(await e.load(),!F(t))throw new l(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!v(e))throw new l(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:n,options:o}=await W(e,a,s);return(i=n.addFeatures)!=null&&i.length||(d=n.updateFeatures)!=null&&d.length||(r=n.deleteFeatures)!=null&&r.length||(p=n.addAttachments)!=null&&p.length||(u=n.updateAttachments)!=null&&u.length||(c=n.deleteAttachments)!=null&&c.length?{edits:n,results:await t.applyEdits(n,o)}:{edits:n,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function W(e,t,a){const s=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),n=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),o=e.infoFor3D!=null;if(!t||!s&&!n)throw new l(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");const i=b(e);if(!i.data.isVersioned&&(a!=null&&a.gdbVersion))throw new l(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!i.editing.supportsRollbackOnFailure&&(a!=null&&a.rollbackOnFailureEnabled))throw new l(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!i.editing.supportsGlobalId&&(a!=null&&a.globalIdUsed))throw new l(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!i.editing.supportsGlobalId&&n)throw new l(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!(a!=null&&a.globalIdUsed)&&n)throw new l(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const d={...a};if(d.rollbackOnFailureEnabled!=null||i.editing.supportsRollbackOnFailure||(d.rollbackOnFailureEnabled=!0),d.rollbackOnFailureEnabled||d.returnServiceEditsOption!=="original-and-current-features"||(d.rollbackOnFailureEnabled===!1&&$.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),d.rollbackOnFailureEnabled=!0),!i.editing.supportsReturnServiceEditsInSourceSpatialReference&&d.returnServiceEditsInSourceSR)throw new l(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(d.returnServiceEditsInSourceSR&&d.returnServiceEditsOption!=="original-and-current-features")throw new l(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const r={...t};if(r.addFeatures=t&&h.isCollection(t.addFeatures)?t.addFeatures.toArray():r.addFeatures||[],r.updateFeatures=t&&h.isCollection(t.updateFeatures)?t.updateFeatures.toArray():r.updateFeatures||[],r.deleteFeatures=t&&h.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():r.deleteFeatures||[],r.addFeatures.length&&!i.operations.supportsAdd)throw new l(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(r.updateFeatures.length&&!i.operations.supportsUpdate)throw new l(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(r.deleteFeatures.length&&!i.operations.supportsDelete)throw new l(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");r.addAttachments=r.addAttachments||[],r.updateAttachments=r.updateAttachments||[],r.deleteAttachments=r.deleteAttachments||[],r.addFeatures=r.addFeatures.map(m),r.updateFeatures=r.updateFeatures.map(m),r.addAssetFeatures=[];const p=(a==null?void 0:a.globalIdUsed)||o;return r.addFeatures.forEach(u=>T(u,e,p)),r.updateFeatures.forEach(u=>V(u,e,p)),r.deleteFeatures.forEach(u=>D(u,e,p)),r.addAttachments.forEach(u=>f(u,e)),r.updateAttachments.forEach(u=>f(u,e)),o&&await C(r,e),{edits:await q(r),options:d}}function y(e,t,a){var s,n;if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new l(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new l(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&e.geometry!=null){if(e.geometry.hasZ&&((s=t.capabilities)==null?void 0:s.data.supportsZ)===!1)throw new l(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&((n=t.capabilities)==null?void 0:n.data.supportsM)===!1)throw new l(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function w(e,t){var a;if("geometry"in e&&((a=e.geometry)==null?void 0:a.type)==="mesh"){const{geometry:s}=e;if(s.vertexSpace.isGeoreferenced)throw new l(`${t.type}-layer:georeferenced-mesh-unsupported`,"Uploading georeferenced meshes to a layer is not supported.")}}function T(e,t,a){y(e,t,a),w(e,t)}function D(e,t,a){y(e,t,a)}function V(e,t,a){y(e,t,a),w(e,t);const s=b(t);if("geometry"in e&&e.geometry!=null&&!(s!=null&&s.editing.supportsGeometryUpdate))throw new l(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function f(e,t){var n;const{feature:a,attachment:s}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new l(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new l(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!s.globalId)throw new l(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!s.data&&!s.uploadId)throw new l(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(s.data instanceof File&&s.data.name)&&!s.name)throw new l(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!((n=t.capabilities)!=null&&n.editing.supportsUploadWithItemId)&&s.uploadId)throw new l(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof s.data=="string"){const o=E(s.data);if(o&&!o.isBase64)throw new l(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function q(e){const t=e.addFeatures??[],a=e.updateFeatures??[],s=t.concat(a).map(d=>d.geometry),n=await S(s),o=t.length,i=a.length;return n.slice(0,o).forEach((d,r)=>t[r].geometry=d),n.slice(o,o+i).forEach((d,r)=>a[r].geometry=d),e}function m(e){const t=new R;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function C(e,t){if(t.infoFor3D==null)return;const{infoFor3D:a}=t,s=O("model/gltf-binary",a.supportedFormats)??k("glb",a.supportedFormats);if(!(s&&a.editFormats.includes(s)))throw new l(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??(e.addAssetFeatures=[]);const{addAssetFeatures:n}=e;for(const o of e.addFeatures??[])g(o)&&n.push(o);for(const o of e.updateFeatures??[])g(o)&&n.push(o)}function g(e){var t;return((t=e==null?void 0:e.geometry)==null?void 0:t.type)==="mesh"}function J(e,t,a,s){if(!F(t))throw new l(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new l(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,s)}export{Z as applyEdits,N as isFeatureIdentifierArrayWithGlobalId,M as isFeatureIdentifierArrayWithObjectId,G as isFeatureIdentifierWithGlobalId,j as isFeatureIdentifierWithObjectId,J as uploadAssets};
