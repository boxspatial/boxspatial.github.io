import{hV as c,a,hE as h,hJ as e,hF as m,ji as p,ca as j,D as b,hL as w}from"./index-edf1cead.js";import{s as x,c as A}from"./sphere-20a0c9fc.js";function s(r){return r?{origin:c(r.origin),vector:c(r.vector)}:{origin:a(),vector:a()}}function J(r,o,n=s()){return h(n.origin,r),e(n.vector,o,r),n}function L(r,o,n){return D(r,o,0,1,n)}function D(r,o,n,u,i){const{vector:t,origin:v}=r,f=e(A.get(),o,v),g=m(t,f)/p(t);return j(i,t,b(g,n,u)),w(i,i,r.origin)}new x(()=>s());export{J as b,L as j,s as v};
