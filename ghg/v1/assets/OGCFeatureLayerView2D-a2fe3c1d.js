import{ai as t,aj as p,am as e}from"./index-e5973b57.js";import a from"./FeatureLayerView2D-7695d4f1.js";import"./EffectView-b6dd8328.js";import"./definitions-c3d1333d.js";import"./LayerView-38cc892e.js";import"./Container-a4cf9d00.js";import"./enums-b14466b3.js";import"./Texture-a64cd0af.js";import"./AttributeStoreView-efbffaf0.js";import"./TiledDisplayObject-a9a8ada9.js";import"./color-fc59f67c.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-b0a90dc0.js";import"./VertexArrayObject-9e7dbad6.js";import"./ProgramTemplate-2d406836.js";import"./GeometryUtils-6c3f0209.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./earcut-70056802.js";import"./visualVariablesUtils-f34f48f8.js";import"./cimAnalyzer-d612a1cf.js";import"./fontUtils-2b05e912.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./utils-663907ae.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-cde352fa.js";import"./floatRGBA-8415f0b0.js";import"./ExpandedCIM-7f584703.js";import"./util-47e5b7af.js";import"./BitmapTileContainer-8a5ee5f5.js";import"./Bitmap-31db8bfc.js";import"./TileContainer-f1255f45.js";import"./CircularArray-ef508845.js";import"./BufferPool-9072da9b.js";import"./FeatureContainer-54fb47e9.js";import"./popupUtils-55bdac4e.js";import"./RefreshableLayerView-a23ceb7d.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const X=o;export{X as default};