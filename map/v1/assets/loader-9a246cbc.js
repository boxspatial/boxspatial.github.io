import{dx as S,dy as C,dA as a,dC as M}from"./index-edf1cead.js";import{g as $}from"./guid-0d265cb2.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.1
 */function B(){return navigator.userAgentData}function H(){const e=B();return e!=null&&e.brands?e.brands.map(({brand:t,version:r})=>`${t}/${r}`).join(" "):navigator.userAgent}const i=/firefox/i.test(H()),o=i?new WeakMap:null;function P(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function p(e){const t=e.target;if(i&&!o.get(t))return;const{disabled:r}=t;r&&e.preventDefault()}const b=["mousedown","mouseup","click"];function z(e){if(i&&!o.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const s={capture:!0};function G(e,t=!1){if(e.disabled){e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),_(e);return}x(e),typeof t=="function"?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):t===!0?e.el.setAttribute("tabindex","0"):t===!1&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function _(e){e.el.click=P,U(i?y(e):e.el)}function U(e){e&&(e.addEventListener("pointerdown",p,s),b.forEach(t=>e.addEventListener(t,z,s)))}function y(e){return o.get(e.el)}function x(e){delete e.el.click,W(i?y(e):e.el)}function W(e){e&&(e.removeEventListener("pointerdown",p,s),b.forEach(t=>e.removeEventListener(t,z,s)))}function J(e){if(!e.disabled||!i)return;const t=e.el.parentElement||e.el;o.set(e.el,t),_(e)}function K(e){i&&(o.delete(e.el),x(e))}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.1
 */const j='@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem)}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}',F=S(class extends C{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inline=!1,this.label=void 0,this.scale="m",this.type=void 0,this.value=0,this.text=""}render(){const{el:e,inline:t,label:r,scale:u,text:m,type:w,value:l}=this,E=e.id||$(),A=.45,n=t?this.getInlineSize(u):this.getSize(u),v=n*A,c=`0 0 ${n} ${n}`,d=w==="determinate",g=2*v*Math.PI,h=l/100*g,I=g-h,k=Math.floor(l),L={"aria-valuenow":k,"aria-valuemin":0,"aria-valuemax":100,complete:k===100},f={r:v,cx:n/2,cy:n/2},D={"stroke-dasharray":`${h} ${I}`};return a(M,{"aria-label":r,id:E,role:"progressbar",...d?L:{}},a("div",{class:"loader__svgs"},a("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--1",viewBox:c},a("circle",{...f})),a("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--2",viewBox:c},a("circle",{...f})),a("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--3",viewBox:c,...d?{style:D}:{}},a("circle",{...f}))),m&&a("div",{class:"loader__text"},m),d&&a("div",{class:"loader__percentage"},l))}getSize(e){return{s:32,m:56,l:80}[e]}getInlineSize(e){return{s:12,m:16,l:20}[e]}get el(){return this}static get style(){return j}},[1,"calcite-loader",{inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1]}]);function O(){if(typeof customElements>"u")return;["calcite-loader"].forEach(t=>{switch(t){case"calcite-loader":customElements.get(t)||customElements.define(t,F);break}})}O();export{K as a,J as c,O as d,G as u};
