import{lY as t}from"./index-e5973b57.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.1
 */const o=new WeakMap,a=new WeakMap;function i(e){a.set(e,new Promise(n=>o.set(e,n)))}function p(e){o.get(e)()}function s(e){return a.get(e)}async function c(e){return await s(e),t(e),new Promise(n=>requestAnimationFrame(()=>n()))}export{p as a,c,i as s};
