import{fm as m,d1 as I}from"./index-e5973b57.js";async function T(e,d=e.popupTemplate){var n,o;if(d==null)return[];const s=await d.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:r}=d,{objectIdField:t,typeIdField:a,globalIdField:u,relationships:i}=e;if(s.includes("*"))return["*"];const c=r?await m(e):[],l=I(e.fieldsIndex,[...s,...c]);return a&&l.push(a),l&&t&&((n=e.fieldsIndex)!=null&&n.has(t))&&!l.includes(t)&&l.push(t),l&&u&&((o=e.fieldsIndex)!=null&&o.has(u))&&!l.includes(u)&&l.push(u),i&&i.forEach(h=>{var f;const{keyField:p}=h;l&&p&&((f=e.fieldsIndex)!=null&&f.has(p))&&!l.includes(p)&&l.push(p)}),l}function F(e,d){return e.popupTemplate?e.popupTemplate:d!=null&&d.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}export{T as n,F as p};
