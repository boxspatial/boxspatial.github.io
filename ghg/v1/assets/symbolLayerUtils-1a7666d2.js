import{ds as v,q as n,G as y,_ as p,mg as c,fw as w,mh as b,a as l}from"./index-03946ec7.js";let s=f();function f(){return new v(50)}function T(){s=f()}async function x(r,o){var i,t;if((i=r.resource)!=null&&i.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(o=>o.data)}async function B(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await p(()=>import("./objectResourceUtils-b497de9f.js").then(d=>d.o),["assets/objectResourceUtils-b497de9f.js","assets/devEnvironmentUtils-5002a058.js","assets/index-03946ec7.js","assets/index-dc13cc80.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-fdce3070.js","assets/vec32-f5c104dc.js","assets/DefaultMaterial_COLOR_GAMMA-2cfed628.js","assets/enums-b14466b3.js","assets/quat-67180b72.js","assets/quatf64-3363c48e.js","assets/resourceUtils-1d112ccb.js","assets/basicInterfaces-4ab7cc6a.js","assets/Indices-d601fce2.js","assets/byteSizeEstimations-7cf1c05d.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-aa38cfc1.js","assets/InterleavedLayout-a697dbca.js","assets/types-1305598a.js","assets/sphere-4a8b56a5.js","assets/lineSegment-2e9a38b9.js","assets/VertexAttribute-9f2e53ec.js","assets/Texture-d0a2a46a.js","assets/OrderIndependentTransparency-309a1bc3.js","assets/vec3f32-ad1dc57f.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/symbolColorUtils-6a623b31.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-354b8b46.js"]),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=w(b(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{T as clearBoundingBoxCache,x as computeIconLayerResourceSize,B as computeObjectLayerResourceSize};