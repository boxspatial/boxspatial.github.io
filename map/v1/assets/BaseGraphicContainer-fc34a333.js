import{e as f,t as A,bZ as R,bu as D,bx as E,M as O,bv as C,f as I,c as L,x as N}from"./index-edf1cead.js";import{o as S}from"./FeatureContainer-fa087d0b.js";import{r as $}from"./vec3f32-ad1dc57f.js";import{a as T}from"./Container-93bc143e.js";import{e as w}from"./color-4180df3d.js";import{c as p,u as F}from"./VertexArrayObject-4993c7e2.js";import{R as m,E as P,C as x,F as g,I as U}from"./enums-b14466b3.js";const W=Math.PI/180,q=4;class V extends T{constructor(r){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=f(),this._localOrigin={x:0,y:0},this._getBounds=r}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=A(this._program)}doRender(r){const{context:t}=r,a=this._getBounds();if(a.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(r),this._updateBufferData(t,a),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(m.ONE,m.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const h=this._program;t.bindVAO(this._vao),t.useProgram(h),h.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(P.LINES,8*a.length,x.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:f()}}_createShaderProgram(r){if(this._program)return;const t=`precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,a=`precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;this._program=r.programCache.acquire(t,a,v().attributes)}_updateMatricesAndLocalOrigin(r){const{state:t}=r,{displayMat3:a,size:h,resolution:u,pixelRatio:n,rotation:o,viewpoint:e}=t,l=W*o,{x:i,y:b}=e.targetGeometry,y=R(i,t.spatialReference);this._localOrigin.x=y,this._localOrigin.y=b;const _=n*h[0],c=n*h[1],B=u*_,M=u*c,d=D(this._dvsMat3);E(d,d,a),O(d,d,C(_/2,c/2)),I(d,d,$(h[0]/B,-c/M,1)),L(d,d,-l)}_updateBufferData(r,t){const{x:a,y:h}=this._localOrigin,u=2*q*t.length,n=new Float32Array(u),o=new Uint32Array(8*t.length);let e=0,l=0;for(const i of t)i&&(n[2*e]=i[0]-a,n[2*e+1]=i[1]-h,n[2*e+2]=i[0]-a,n[2*e+3]=i[3]-h,n[2*e+4]=i[2]-a,n[2*e+5]=i[3]-h,n[2*e+6]=i[2]-a,n[2*e+7]=i[1]-h,o[l]=e+0,o[l+1]=e+3,o[l+2]=e+3,o[l+3]=e+2,o[l+4]=e+2,o[l+5]=e+1,o[l+6]=e+1,o[l+7]=e+0,e+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(n.buffer):this._vertexBuffer=p.createVertex(r,g.DYNAMIC_DRAW,n.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=p.createIndex(r,g.DYNAMIC_DRAW,o),!this._vao){const i=v();this._vao=new F(r,i.attributes,i.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const v=()=>w("bounds",{geometry:[{location:0,name:"a_position",count:2,type:x.FLOAT}]});let Z=class extends S{constructor(s){super(s),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=N(this._boundsRenderer)}enableRenderingBounds(s){this._boundsRenderer=new V(s),this.requestRender()}get hasLabels(){return!1}onTileData(s,r){s.patch(r),this.contains(s)||this.addChild(s),this.requestRender()}onTileError(s){s.clear(),this.contains(s)||this.addChild(s)}_renderChildren(s,r){for(const t of this.children)t.isReady&&t.hasData&&(t.commit(s),s.context.setStencilFunction(U.EQUAL,t.stencilRef,255),t.getDisplayList().replay(s,t,r))}};export{Z as n};
