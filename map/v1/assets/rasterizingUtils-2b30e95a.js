import{o as x}from"./floatRGBA-2a9b8092.js";import{c6 as u}from"./index-edf1cead.js";const C=e=>e==="vertical"||e==="horizontal"||e==="cross"||e==="esriSFSCross"||e==="esriSFSVertical"||e==="esriSFSHorizontal";function y(e,i,T){const F=u(Math.ceil(T)),a=C(i)?8*F:16*F,o=2*F;e.width=a,e.height=a;const t=e.getContext("2d");t.strokeStyle="#FFFFFF",t.lineWidth=F,t.beginPath(),i!=="vertical"&&i!=="cross"&&i!=="esriSFSCross"&&i!=="esriSFSVertical"||(t.moveTo(a/2,-o),t.lineTo(a/2,a+o)),i!=="horizontal"&&i!=="cross"&&i!=="esriSFSCross"&&i!=="esriSFSHorizontal"||(t.moveTo(-o,a/2),t.lineTo(a+o,a/2)),i!=="forward-diagonal"&&i!=="diagonal-cross"&&i!=="esriSFSDiagonalCross"&&i!=="esriSFSForwardDiagonal"||(t.moveTo(-o,-o),t.lineTo(a+o,a+o),t.moveTo(a-o,-o),t.lineTo(a+o,o),t.moveTo(-o,a-o),t.lineTo(o,a+o)),i!=="backward-diagonal"&&i!=="diagonal-cross"&&i!=="esriSFSBackwardDiagonal"&&i!=="esriSFSDiagonalCross"||(t.moveTo(a+o,-o),t.lineTo(-o,a+o),t.moveTo(o,-o),t.lineTo(-o,o),t.moveTo(a+o,a-o),t.lineTo(a-o,a+o)),t.stroke();const d=t.getImageData(0,0,e.width,e.height),s=new Uint8Array(d.data);let l;for(let n=0;n<s.length;n+=4)l=s[n+3]/255,s[n]=s[n]*l,s[n+1]=s[n+1]*l,s[n+2]=s[n+2]*l;return[s,e.width,e.height]}function z(e,i){const T=i==="Butt",F=i==="Square",a=!T&&!F;e.length%2==1&&(e=[...e,...e]);const o=15.5,t=2*o;let d=0;for(const h of e)d+=h;const s=Math.round(d*o),l=new Float32Array(s*t),n=.5*o;let g=0,m=0,r=.5,M=!0;for(const h of e){for(g=m,m+=h*o;r<=m;){let S=.5;for(;S<t;){const w=(S-.5)*s+r-.5,c=a?(S-o)*(S-o):Math.abs(S-o);l[w]=M?T?Math.max(Math.max(g+n-r,c),Math.max(r-m+n,c)):c:a?Math.min((r-g)*(r-g)+c,(r-m)*(r-m)+c):F?Math.min(Math.max(r-g,c),Math.max(m-r,c)):Math.min(Math.max(r-g+n,c),Math.max(m+n-r,c)),S++}r++}M=!M}const f=l.length,v=new Uint8Array(4*f);for(let h=0;h<f;++h){const S=(a?Math.sqrt(l[h]):l[h])/o;x(S,v,4*h)}return[v,s,t]}export{z as e,y as r};
