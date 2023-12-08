import{K as m,me as y,_ as h,mf as v,q as d,a6 as w,a9 as b,aF as x,a4 as _,mg as F}from"./index-efef4772.js";const p=m.getLogger("esri.layers.support.labelFormatUtils"),g={type:"simple",evaluate:()=>null},E={getAttribute:(t,n)=>t.field(n)};async function A(t,n,r){if(!t||!t.symbol||!n)return g;const s=t.where,l=y(t),i=s?await h(()=>import("./WhereClause-1000016d.js").then(e=>e.W),["assets/WhereClause-1000016d.js","assets/index-efef4772.js","assets/index-dc13cc80.css","assets/executionError-c92d3b85.js"]):null;let o;if(l.type==="arcade"){const e=await v(l.expression,r,n);if(e==null)return g;o={type:"arcade",evaluate(u){try{const a=e.evaluate({$feature:"attributes"in u?e.repurposeFeature(u):u},e.services);if(a!=null)return a.toString()}catch(a){p.error(new d("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:a,feature:u,expression:l}))}return null},needsHydrationToEvaluate:()=>F(l.expression)==null}}else o={type:"simple",evaluate:e=>l.expression.replaceAll(/{[^}]*}/g,u=>{const a=u.slice(1,-1),c=n.get(a);if(!c)return u;let f=null;return"attributes"in e?e&&e.attributes&&(f=e.attributes[c.name]):f=e.field(c.name),f==null?"":$(f,c)})};if(s){let e;try{e=i.WhereClause.create(s,n)}catch(a){return p.error(new d("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:s,error:a})),g}const u=o.evaluate;o.evaluate=a=>{const c="attributes"in a?void 0:E;try{if(e.testFeature(a,c))return u(a)}catch(f){p.error(new d("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:s,feature:a,error:f}))}return null}}return o}function $(t,n){if(t==null)return"";const r=n.domain;if(r){if(r.type==="codedValue"||r.type==="coded-value"){const l=t;for(const i of r.codedValues)if(i.code===l)return i.name}else if(r.type==="range"){const l=+t,i="range"in r?r.range[0]:r.minValue,o="range"in r?r.range[1]:r.maxValue;if(i<=l&&l<=o)return r.name}}let s=t;return n.type==="date"||n.type==="esriFieldTypeDate"?s=w(s,b("short-date")):x(n)&&(s=_(+s)),s||""}export{A as createLabelFunction,$ as formatField};
