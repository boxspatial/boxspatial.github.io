import{T as R,L as k,G as z,bi as D,V as B,z as N,y as O,x as C,bu as $,bI as F,bJ as U,bK as W,bL as A,bM as H,bN as K,ai as v,aj as S,am as J}from"./index-03946ec7.js";import{b as P,g as Y,d as Q}from"./kmlUtils-0ad67f87.js";import{w as X,b as Z,T as tt}from"./Bitmap-6a1dbcb0.js";import{a as et}from"./BitmapContainer-de6b5d5f.js";import{f as it,d as at}from"./LayerView-129ed54e.js";import{i as M}from"./GraphicContainer-c46e15cd.js";import{o as T}from"./GraphicsView2D-46719485.js";import{C as st,$ as rt}from"./rasterProjectionHelper-5030a44c.js";import{n as ot}from"./WGLContainer-07698e25.js";import{P as nt,o as lt}from"./RenderingContext-5b8ab91c.js";import{D as E,G as ht,U as pt,X as L}from"./enums-b14466b3.js";import{x as mt}from"./VertexArrayObject-354b8b46.js";import{m as ct}from"./rasterUtils-37975308.js";import{e as j,T as dt}from"./Texture-d0a2a46a.js";import"./Container-22067ae8.js";import"./EffectView-f80ea10d.js";import"./definitions-e7328148.js";import"./color-5406070d.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-b10c3fe1.js";import"./FeatureContainer-7b6883ef.js";import"./AttributeStoreView-e4a40bac.js";import"./TiledDisplayObject-c9554654.js";import"./visualVariablesUtils-c4f75e00.js";import"./GeometryUtils-4b12b5aa.js";import"./alignmentUtils-ae955d28.js";import"./cimAnalyzer-c6a6b42a.js";import"./fontUtils-bb45034d.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./utils-2c77cd42.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-5a3540a4.js";import"./floatRGBA-d52d0df9.js";import"./ExpandedCIM-c7e7cdbf.js";import"./util-f32dc3be.js";import"./TileContainer-44415971.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtilsSync-6c96db4e.js";import"./projectionSupport-5d9d0a66.js";import"./json-48e3ea08.js";import"./Matcher-c45918b2.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-fe104382.js";import"./earcut-432fba72.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-ebf96412.js";import"./ComputedAttributeStorage-9d1480fb.js";import"./arcadeTimeUtils-59fe24a8.js";import"./executionError-c92d3b85.js";import"./ProgramTemplate-503e4e27.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./programUtils-9509822e.js";import"./NestedMap-1b5db22e.js";import"./OrderIndependentTransparency-309a1bc3.js";import"./basicInterfaces-4ab7cc6a.js";import"./testSVGPremultipliedAlpha-203e60ec.js";import"./doublePrecisionUtils-e3c3d0d8.js";class p{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(p._instance)return p._instanceRefCount++,p._instance;p._instanceRefCount=1,p._instance=this,this._ownsRctx=!0;const e=document.createElement("canvas").getContext("webgl");e.getExtension("OES_texture_float"),this._rctx=new nt(e,{})}const a={applyProjection:!0,bilinear:!1,bicubic:!1},r=lt("raster/reproject","raster/reproject",new Map([["a_position",0]]),a);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new ot(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,a,r=!1){const e=R(t.extent,a),s=new k({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:o,y:h}=st(s,a,t.extent);let n=(o+h)/2;const l=Math.round((e.xmax-e.xmin)/n),u=Math.round((e.ymax-e.ymin)/n);n=(e.width/l+e.height/u)/2;const I=new k({x:n,y:n,spatialReference:e.spatialReference}),g=rt({projectedExtent:e,srcBufferExtent:t.extent,pixelSize:I,hasWrapAround:!0,spacing:[16,16]}),w=ct(this._rctx,g),y=new j(l,u);y.wrapMode=E.CLAMP_TO_EDGE;const m=new mt(this._rctx,y);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,l,u),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(w,1),this._quad.bind();const{width:x=0,height:b=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",x,b),this._program.setUniform2fv("u_transformSpacing",g.spacing),this._program.setUniform2fv("u_transformGridSize",g.size),this._program.setUniform2f("u_targetImageSize",l,u),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),w.dispose(),r){const{width:c,height:V}=m,_=new ImageData(c??0,V??0);m.readPixels(0,0,c??0,V??0,ht.RGBA,pt.UNSIGNED_BYTE,_.data);const G=m.detachColorTexture(L.COLOR_ATTACHMENT0);return m.dispose(),{texture:G,extent:e,imageData:_}}const f=m.detachColorTexture(L.COLOR_ATTACHMENT0);return m.dispose(),{texture:f,extent:e}}reprojectBitmapData(t,a){const r=X(t.bitmapData)?Z(t.bitmapData):t.bitmapData,e=new j;e.wrapMode=E.CLAMP_TO_EDGE,e.width=t.bitmapData.width,e.height=t.bitmapData.height;const s=new dt(this._rctx,e,r),o=this.reprojectTexture({texture:s,extent:t.extent},a,!0);o.texture.dispose();const h=document.createElement("canvas"),n=o.imageData;return h.width=n.width,h.height=n.height,h.getContext("2d").putImageData(n,0,0),{bitmapData:h,extent:o.extent}}async loadAndReprojectBitmapData(t,a,r){const e=(await z(t,{responseType:"image"})).data,s=document.createElement("canvas");s.width=e.width,s.height=e.height;const o=s.getContext("2d");o.drawImage(e,0,0);const h=o.getImageData(0,0,s.width,s.height);if(a.spatialReference.equals(r))return{bitmapData:h,extent:a};const n=this.reprojectBitmapData({bitmapData:h,extent:a},r);return{bitmapData:n.bitmapData,extent:n.extent}}destroy(){this._ownsRctx?(p._instanceRefCount--,p._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),p._instance=null)):(this._quad.dispose(),this._program.dispose())}}p._instanceRefCount=0;class q{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends it(at){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new et,this._kmlVisualData=new q,this._fetchController=null,this.allVisiblePoints=new D,this.allVisiblePolylines=new D,this.allVisiblePolygons=new D,this.allVisibleMapImages=new B}async hitTest(i,t){var r,e,s;const a=this.layer;return[(r=this._pointsView)==null?void 0:r.hitTest(i),(e=this._polylinesView)==null?void 0:e.hitTest(i),(s=this._polygonsView)==null?void 0:s.hitTest(i)].flat().filter(Boolean).map(o=>(o.layer=a,o.sourceLayer=a,{type:"graphic",graphic:o,layer:a,mapPoint:i}))}update(i){this._polygonsView&&this._polygonsView.processUpdate(i),this._polylinesView&&this._polylinesView.processUpdate(i),this._pointsView&&this._pointsView.processUpdate(i)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new T({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new T({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new T({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",i=>{i.added.forEach(t=>this._addMapImage(t)),i.removed.forEach(t=>this._removeMapImage(t))}),N(()=>this.layer.visibleSublayers,i=>{for(const[t,a]of this._kmlVisualData.allSublayers)a.visibility=0;for(const t of i){const a=this._kmlVisualData.allSublayers.get(t.id);a&&(a.visibility=1)}this._refreshCollections()})]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new p}detach(){this._fetchController=O(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=C(this._polygonsView),this._polylinesView=C(this._polylinesView),this._pointsView=C(this._pointsView),this._imageReprojector=C(this._imageReprojector)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(i){var t,a;((t=this.view.spatialReference)!=null&&t.isWGS84||(a=this.view.spatialReference)!=null&&a.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(i.href,$.fromJSON(i.extent),this.view.spatialReference).then(r=>{const e=new tt(r.bitmapData);e.x=r.extent.xmin,e.y=r.extent.ymax,e.resolution=r.extent.width/r.bitmapData.width,e.rotation=i.rotation,this._mapImageContainer.addChild(e),this._bitmapIndex.set(i,e)})}async _getViewDependentUrl(i,t){const{viewFormat:a,viewBoundScale:r,httpQuery:e}=i;if(a!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let s;if(await F(),r!=null&&r!==1){const c=new $(t.extent);c.expand(r),s=c}else s=t.extent;s=R(s,U.WGS84);const o=R(s,U.WebMercator),h=s.xmin,n=s.xmax,l=s.ymin,u=s.ymax,I=t.size[0]*t.pixelRatio,g=t.size[1]*t.pixelRatio,w=Math.max(o.width,o.height),y={"[bboxWest]":h.toString(),"[bboxEast]":n.toString(),"[bboxSouth]":l.toString(),"[bboxNorth]":u.toString(),"[lookatLon]":s.center.x.toString(),"[lookatLat]":s.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":s.center.x.toString(),"[lookatTerrainLat]":s.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":s.center.x.toString(),"[cameraLat]":s.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":I.toString(),"[vertPixels]":g.toString(),"[terrainEnabled]":"0","[clientVersion]":W,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},m=c=>{for(const V in c){let _;for(_ in y)c[V]=c[V].replace(_,y[_])}},x=A(a);m(x);let b={};e!=null&&(b=A(e),m(b));const f=H(i.href);return f.query={...f.query,...x,...b},`${f.path}?${K(x)}`}return i.href}async _fetchService(i){const t=new q;await this._loadVisualData(this.layer.url,t,i),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i))}_isSublayerVisible(i){const t=this._kmlVisualData.allSublayers.get(i);return!!(t!=null&&t.visibility)&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(i,t,a){return this._fetchParsedKML(i,a).then(async r=>{for(const e of r.sublayers){t.allSublayers.set(e.id,e);const s=e.points?await P(e.points):[],o=e.polylines?await P(e.polylines):[],h=e.polygons?await P(e.polygons):[],n=e.mapImages||[];if(t.allPoints.push(...s.map(l=>({item:l,sublayerId:e.id}))),t.allPolylines.push(...o.map(l=>({item:l,sublayerId:e.id}))),t.allPolygons.push(...h.map(l=>({item:l,sublayerId:e.id}))),t.allMapImages.push(...n.map(l=>({item:l,sublayerId:e.id}))),e.networkLink){const l=await this._getViewDependentUrl(e.networkLink,this.view.state);await this._loadVisualData(l,t,a)}}})}_fetchParsedKML(i,t){return Y(i,this.layer.spatialReference,this.layer.refreshInterval,t).then(a=>Q(a.data))}_removeMapImage(i){const t=this._bitmapIndex.get(i);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(i))}};v([S()],d.prototype,"_pointsView",void 0),v([S()],d.prototype,"_polylinesView",void 0),v([S()],d.prototype,"_polygonsView",void 0),v([S()],d.prototype,"updating",void 0),d=v([J("esri.views.2d.layers.KMLLayerView2D")],d);const fe=d;export{fe as default};