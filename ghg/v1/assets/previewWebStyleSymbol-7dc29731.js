import{G as l,u as a}from"./index-e5973b57.js";import{v as p}from"./symbolUtils-e7bc5adb.js";import{q as n}from"./utils-fd1a3076.js";import"./colorUtils-c0f43caf.js";import"./webStyleSymbolUtils-e017b235.js";import"./devEnvironmentUtils-5002a058.js";import"./utils-663907ae.js";function z(i,e,t){const r=i.thumbnail&&i.thumbnail.url;return r?l(r,{responseType:"image"}).then(o=>{const m=u(o.data,t);return t&&t.node?(t.node.appendChild(m),t.node):m}):n(i).then(o=>o?e(o,t):null)}function u(i,e){const t=!/\\.svg$/i.test(i.src)&&e&&e.disableUpsampling,r=Math.max(i.width,i.height);let o=e&&e.maxSize!=null?a(e.maxSize):p.maxSize;t&&(o=Math.min(r,o));const m=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null,h=Math.min(o,m!=null?a(m):r);if(h!==r){const s=i.width!==0&&i.height!==0?i.width/i.height:1;s>=1?(i.width=h,i.height=h/s):(i.width=h*s,i.height=h)}return i}export{z as previewWebStyleSymbol};
