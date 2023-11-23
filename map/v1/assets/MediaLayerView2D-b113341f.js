import{bV as J,z as W,B as A,a_ as Z,m as K,J as k,q as ee,t as te,n as z,bW as $,bX as re,bY as se,e as ie,bZ as ne,bu as ae,bx as oe,M as le,bv as he,f as me,c as ce,b_ as de,bz as pe,V as ue,ar as I,bg as fe,bh as _e,b$ as ye,aX as ve,bq as ge,bP as we,ah as x,ai as G,al as be,N as Re,c0 as $e}from"./index-edf1cead.js";import{j as xe,i as H}from"./perspectiveUtils-d1ec6b76.js";import"./Rasterizer-edba21d8.js";import"./EffectView-caaae2d8.js";import{a as Me}from"./Container-93bc143e.js";import"./BufferPool-a1cb4da5.js";import{T as Te}from"./color-4180df3d.js";import{i as Ee,w as Ve}from"./WGLContainer-7b621762.js";import{D as Ce,F as L}from"./enums-b14466b3.js";import{e as Se,T as qe}from"./Texture-fa872f05.js";import"./ProgramTemplate-b85ac4aa.js";import"./definitions-4e50b8bb.js";import"./GeometryUtils-87d0ec45.js";import{c as Q,u as Ae}from"./VertexArrayObject-4993c7e2.js";import"./number-e491b09e.js";import"./StyleDefinition-fbc907c2.js";import"./enums-fb086c25.js";import"./MagnifierPrograms-9b3e6e9f.js";import"./OrderIndependentTransparency-309a1bc3.js";import"./floatRGBA-2a9b8092.js";import"./testSVGPremultipliedAlpha-96192c60.js";import"./GraphicsView2D-4936cf93.js";import"./AttributeStoreView-9715ba03.js";import"./earcut-c3520e2b.js";import{r as Ge}from"./vec3f32-ad1dc57f.js";import{e as De}from"./mat3f64-221ce671.js";import{f as Pe,d as Oe}from"./LayerView-3e008698.js";import"./normalizeUtilsSync-f11102c4.js";import"./cimAnalyzer-a3b0bb67.js";import"./fontUtils-5dd2e502.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./utils-a941d33c.js";import"./alignmentUtils-ae955d28.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-fe80be7e.js";import"./rasterizingUtils-2b30e95a.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./imageutils-9ee1a468.js";import"./Matcher-867ec160.js";import"./visualVariablesUtils-44c6f339.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-3d6b2927.js";import"./ExpandedCIM-2a39fa6f.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-7ce2d52a.js";import"./CircularArray-ef508845.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-07dd2af1.js";import"./arcadeTimeUtils-c60ee006.js";import"./executionError-c92d3b85.js";import"./projectionSupport-1a5588c8.js";import"./json-48e3ea08.js";import"./basicInterfaces-4ab7cc6a.js";import"./TiledDisplayObject-c6bd6cb6.js";import"./clusterUtils-5ded844a.js";import"./util-421799ed.js";const y=De();let je=class extends Me{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=J(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(W(()=>this.elementView.element.opacity,t=>this.opacity=t,A),W(()=>[this.elementView.coords],()=>{this.requestRender()},A),Z(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&t.content!=null&&this._handles.push(K(t.content,"play",()=>this.requestRender()))},A)),e.element.load().catch(t=>{k.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new ee("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){this._handles.forEach(e=>e.remove()),this.texture=te(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,s=this.elementView.element.content;if(s!=null){const i=s instanceof HTMLImageElement,n=s instanceof HTMLVideoElement,o=i?s.naturalWidth:n?s.videoWidth:s.width,a=i?s.naturalHeight:n?s.videoHeight:s.height;if(this._updatePerspectiveTransform(o,a),this.texture)n&&!s.paused&&(this.texture.setData(s),this.requestRender(),(t.type===z.WEBGL2||$(o)&&$(a))&&this.texture.generateMipmap());else{const m=new Se;m.wrapMode=Ce.CLAMP_TO_EDGE,m.preMultiplyAlpha=!0,m.width=o,m.height=a,this.texture=new qe(t,m,s),(t.type===z.WEBGL2||$(o)&&$(a))&&this.texture.generateMipmap(),n&&!s.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const s=this.elementView.coords;if(s==null)return;const[i,n,o,a]=s.rings[0],m=this._vertices,{x:l,y:h}=e,p=t!==0;p?m.set([n[0]-l,n[1]-h,i[0]-l,i[1]-h,o[0]-l,o[1]-h,a[0]-l,a[1]-h,a[0]-l,a[1]-h,n[0]+t-l,n[1]-h,n[0]+t-l,n[1]-h,i[0]+t-l,i[1]-h,o[0]+t-l,o[1]-h,a[0]+t-l,a[1]-h]):m.set([n[0]-l,n[1]-h,i[0]-l,i[1]-h,o[0]-l,o[1]-h,a[0]-l,a[1]-h]),this.isWrapAround=p}getVAO(e,t,s){if(this.elementView.coords==null)return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=Q.createVertex(e,L.DYNAMIC_DRAW,i);const n=Q.createVertex(e,L.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Ae(e,s,t,{geometry:this._geometryVbo,tex:n})}return this._vao}_updatePerspectiveTransform(e,t){const s=this._vertices;xe(y,[0,0,e,0,0,t,e,t],[s[0],s[1],s[4],s[5],s[2],s[3],s[6],s[7]]),re(this.perspectiveTransform,y[6]/y[8]*e,y[7]/y[8]*t)}};class Ue extends Ee{constructor(){super(...arguments),this._localOrigin=se(0,0),this._viewStateId=-1,this._dvsMat3=ie(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Ve.overlay],target:()=>this.children,drawPhase:Te.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:s,size:i,pixelRatio:n,resolution:o,rotation:a,viewpoint:m,displayMat3:l}=t;if(this._viewStateId===s)return;const h=Math.PI/180*a,p=n*i[0],f=n*i[1],{x:M,y:g}=m.targetGeometry,T=ne(M,t.spatialReference);this._localOrigin.x=T,this._localOrigin.y=g;const E=o*p,w=o*f,c=ae(this._dvsMat3);oe(c,c,l),le(c,c,he(p/2,f/2)),me(c,c,Ge(p/E,-f/w,1)),ce(c,c,-h),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:i,spatialReference:n,worldScreenWidth:o,size:a,viewpoint:m}=s,l=this._localOrigin;let h=0;const p=de(n);if(p&&n.isWrappable){const f=a[0],M=a[1],g=180/Math.PI*i,T=Math.abs(Math.cos(g)),E=Math.abs(Math.sin(g)),w=Math.round(f*T+M*E),[c,V]=p.valid,u=pe(n),{x:D,y:F}=m.targetGeometry,N=[D,F],C=[0,0];s.toScreen(C,N);const b=[0,0];let S;S=w>o?.5*o:.5*w;const P=Math.floor((D+.5*u)/u),X=c+P*u,Y=V+P*u,q=[C[0]+S,0];s.toMap(b,q),b[0]>Y&&(h=u),q[0]=C[0]-S,s.toMap(b,q),b[0]<X&&(h=-u);for(const R of t){const O=R.elementView.bounds;if(O==null)continue;const[j,,U]=O;j<c&&U>c?R.updateDrawCoords(l,u):U>V&&j<V?R.updateDrawCoords(l,-u):R.updateDrawCoords(l,h)}}else for(const f of t)f.updateDrawCoords(l,h)}}let _=class extends Pe(Oe){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new ue}attach(){this.addAttachHandles([I(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(r=>this._updateTile(r)),this.requestUpdate()}),I(()=>this.layer.effectiveSource,"change",({element:r})=>this._elementUpdateHandler(r))]),this._overlayContainer=new Ue,this.container.addChild(this._overlayContainer),this._fetchQueue=new fe({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(r,e)=>this._queryElements(r,e)}),this._tileStrategy=new _e({cachePolicy:"purge",resampling:!0,acquireTile:r=>this._acquireTile(r),releaseTile:r=>this._releaseTile(r),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var r;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(r=this._debugGraphicsView)==null||r.destroy()}supportsSpatialReference(r){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(r){var e;this._tileStrategy.update(r),(e=this._debugGraphicsView)==null||e.update(r)}async hitTest(r,e){const t=[],s=r.normalize(),i=[s.x,s.y];for(const{projectedElement:{normalizedCoords:n,element:o}}of this._elementReferences.values())n!=null&&ye(n.rings,i)&&t.push({type:"media",element:o,layer:this.layer,mapPoint:r});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(r=>this._updateTile(r))}_acquireTile(r){const e=new We(r.clone());return this._updateTile(e),e}_updateTile(r){this.updatingHandles.addPromise(this._fetchQueue.push(r.key).then(e=>{const[t,s]=r.setElements(e);this._referenceElements(r,t),this._dereferenceElements(r,s),this.requestUpdate()},e=>{ve(e)||k.getLogger(this).error(e)}))}_releaseTile(r){this._fetchQueue.abort(r.key.id),r.elements&&this._dereferenceElements(r,r.elements),this.requestUpdate()}async _queryElements(r,e){const t=this.layer.effectiveSource;if(t==null)return[];this.view.featuresTilingScheme.getTileBounds(d,r,!0);const s=new ge({xmin:d[0],ymin:d[1],xmax:d[2],ymax:d[3],spatialReference:this.view.spatialReference});return t.queryElements(s,e)}_referenceElements(r,e){if(this.layer.source!=null)for(const t of e)this._referenceElement(r,t)}_referenceElement(r,e){we(this._elementReferences,e.uid,()=>{const t=new H({element:e,spatialReference:this.view.spatialReference}),s=new je(t);return this._overlayContainer.addChild(s),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:s,debugGraphic:null}}).tiles.add(r)}_dereferenceElements(r,e){for(const t of e)this._dereferenceElement(r,t)}_dereferenceElement(r,e){var s;const t=this._elementReferences.get(e.uid);t.tiles.delete(r),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(s=this._debugGraphicsView)==null||s.graphics.remove(t.debugGraphic))}_elementUpdateHandler(r){var s;let e=this._elementReferences.get(r.uid);if(e){const i=e.projectedElement.normalizedCoords;if(i==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(r.uid),this.elements.remove(r),void((s=this._debugGraphicsView)==null?void 0:s.graphics.remove(e.debugGraphic));const n=[],o=[];for(const a of this._tileStrategy.tiles){const m=B(this.view.featuresTilingScheme,a,i);e.tiles.has(a)?m||o.push(a):m&&n.push(a)}for(const a of n)this._referenceElement(a,r);for(const a of o)this._dereferenceElement(a,r);return e=this._elementReferences.get(r.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new H({element:r,spatialReference:this.view.spatialReference}).normalizedCoords;if(t!=null)for(const i of this._tileStrategy.tiles)B(this.view.featuresTilingScheme,i,t)&&this._referenceElement(i,r)}};x([G()],_.prototype,"_fetchQueue",void 0),x([G()],_.prototype,"layer",void 0),x([G({readOnly:!0})],_.prototype,"elements",void 0),_=x([be("esri.views.2d.layers.MediaLayerView2D")],_);const d=Re(),v={xmin:0,ymin:0,xmax:0,ymax:0};function B(r,e,t){return r.getTileBounds(d,e.key,!0),v.xmin=d[0],v.ymin=d[1],v.xmax=d[2],v.ymax=d[3],$e(v,t)}class We{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],s=new Set(this.elements);this.elements=e;for(const i of e)s.has(i)?s.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(s)]}destroy(){}}const kt=_;export{kt as default};
