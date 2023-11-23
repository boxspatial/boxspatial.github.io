import{h0 as N,b$ as S,K as G,ac as O,bG as A,u as B,h1 as R,h2 as j}from"./index-eed032b4.js";import{L as q}from"./quantizationUtils-7a483037.js";import{c as M,z as Y,m as _,f as k,d as K,g as L,x as U,F as Z,D as H,S as J,M as Q}from"./utils-589b0f1d.js";import"./generateRendererUtils-b8ecb23e.js";let v=null;function W(e,a,l){return e.x<0?e.x+=a:e.x>l&&(e.x-=a),e}function X(e,a,l,o){const n=N(l)?S(l):null,s=n?Math.round((n.valid[1]-n.valid[0])/a.scale[0]):null;return e.map(t=>{const i=new G(t.geometry);return q(a,i,i,i.hasZ,i.hasM),t.geometry=n?W(i,s??0,o[0]):i,t})}function aa(e,a=18,l,o,n,s){const t=new Float64Array(n*s);a=Math.round(B(a));let i=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,m=0,f=0,d=0,c=0;const z=R(o,l);for(const{geometry:T,attributes:y}of e){const{x:p,y:u}=T,x=Math.max(0,p-a),F=Math.max(0,u-a),b=Math.min(s,u+a),D=Math.min(n,p+a),g=+z(y);for(let h=F;h<b;h++)for(let $=x;$<D;$++){const E=h*n+$,P=j($-p,h-u,a),C=t[E];m=t[E]+=P*g;const V=m-C;f+=V,d+=V*V,m<i&&(i=m),m>r&&(r=m),c++}}if(!c)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const I=(r-i)/2;return{mean:f/c,stdDev:Math.sqrt((d-f*f/c)/c),min:i,max:r,mid:I,count:c}}async function w(e,a){if(!a)return[];const{field:l,field2:o,field3:n,fieldDelimiter:s}=e,t=e.valueExpression,i=e.normalizationType,r=e.normalizationField,m=e.normalizationTotal,f=[],d=e.viewInfoParams;let c=null,z=null;if(t){if(!v){const{arcadeUtils:y}=await O();v=y}v.hasGeometryOperations(t)&&await v.enableGeometryOperations(),c=v.createFunction(t),z=d&&v.getViewInfo({viewingMode:d.viewingMode,scale:d.scale,spatialReference:new A(d.spatialReference)})}const I=e.fieldInfos,T=!(a[0]&&"declaredClass"in a[0]&&a[0].declaredClass==="esri.Graphic")&&I?{fields:I}:null;return a.forEach(y=>{const p=y.attributes;let u;if(t){const x=T?{...y,layer:T}:y,F=v.createExecContext(x,z);u=v.executeFunction(c,F)}else p&&(u=p[l],o&&(u=`${M(u)}${s}${M(p[o])}`,n&&(u=`${u}${s}${M(p[n])}`)));if(i&&typeof u=="number"&&isFinite(u)){const x=p&&parseFloat(p[r]);u=Y(u,i,x,m)}f.push(u)}),f}async function oa(e){const{attribute:a,features:l}=e,{normalizationType:o,normalizationField:n,minValue:s,maxValue:t,fieldType:i}=a,r=await w({field:a.field,valueExpression:a.valueExpression,normalizationType:o,normalizationField:n,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l),m=_({normalizationType:o,normalizationField:n,minValue:s,maxValue:t}),f={value:.5,fieldType:i},d=i==="esriFieldTypeString"?k({values:r,supportsNullCount:m,percentileParams:f}):K({values:r,minValue:s,maxValue:t,useSampleStdDev:!o,supportsNullCount:m,percentileParams:f});return L(d,i==="esriFieldTypeDate")}async function la(e){const{attribute:a,features:l}=e,o=await w({field:a.field,field2:a.field2,field3:a.field3,fieldDelimiter:a.fieldDelimiter,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l),n=U(o);return Z(n,a.domains,a.returnAllCodedValues,a.fieldDelimiter)}async function sa(e){const{attribute:a,features:l}=e,{field:o,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i}=a,r=await w({field:o,valueExpression:a.valueExpression,normalizationType:n,normalizationField:s,normalizationTotal:t,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l),m=H(r,{field:o,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return J(m,i)}async function ra(e){const{attribute:a,features:l}=e,{field:o,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i}=a,r=await w({field:o,valueExpression:a.valueExpression,normalizationType:n,normalizationField:s,normalizationTotal:t,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},l);return Q(r,{field:o,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}async function ma(e){const{attribute:a,features:l}=e,{field:o,radius:n,fieldOffset:s,transform:t,spatialReference:i}=a,r=a.size??[0,0],m=X(l??[],t,i,r),{count:f,min:d,max:c,mean:z,stdDev:I}=aa(m,n??void 0,s,o,r[0],r[1]);return{count:f,min:d,max:c,avg:z,stddev:I}}export{sa as classBreaks,ma as heatmapStatistics,ra as histogram,oa as summaryStatistics,la as uniqueValues};
