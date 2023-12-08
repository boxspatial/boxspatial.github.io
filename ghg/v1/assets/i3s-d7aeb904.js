import{dB as ur}from"./index-e5973b57.js";function cr(k,H){for(var P=0;P<H.length;P++){const i=H[P];if(typeof i!="string"&&!Array.isArray(i)){for(const E in i)if(E!=="default"&&!(E in k)){const x=Object.getOwnPropertyDescriptor(i,E);x&&Object.defineProperty(k,E,x.get?x:{enumerable:!0,get:()=>i[E]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var Ot,ct,Dt,tt={exports:{}};tt.exports,Ot=tt,tt.exports,ct=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,Dt=function(k={}){var H,P,i=k!==void 0?k:{};i.ready=new Promise((t,e)=>{H=t,P=e});var E=Object.assign({},i),x=typeof window=="object",q=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var et,b="";function zt(t){return i.locateFile?i.locateFile(t,b):b+t}(x||q)&&(q?b=self.location.href:typeof document<"u"&&document.currentScript&&(b=document.currentScript.src),ct&&(b=ct),b=b.indexOf("blob:")!==0?b.substr(0,b.replace(/[?#].*/,"").lastIndexOf("/")+1):"",q&&(et=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var z,N,Vt=i.print||console.log.bind(console),U=i.printErr||console.warn.bind(console);Object.assign(i,E),E=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(z=i.wasmBinary),i.noExitRuntime,typeof WebAssembly!="object"&&$("no native wasm support detected");var j,v,I,L,F,p,st,ft,lt,dt=!1;function pt(){var t=N.buffer;i.HEAP8=j=new Int8Array(t),i.HEAP16=I=new Int16Array(t),i.HEAP32=F=new Int32Array(t),i.HEAPU8=v=new Uint8Array(t),i.HEAPU16=L=new Uint16Array(t),i.HEAPU32=p=new Uint32Array(t),i.HEAPF32=st=new Float32Array(t),i.HEAPF64=ft=new Float64Array(t)}var vt=[],ht=[],mt=[];function Bt(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)Nt(i.preRun.shift());rt(vt)}function Mt(){rt(ht)}function qt(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)$t(i.postRun.shift());rt(mt)}function Nt(t){vt.unshift(t)}function Lt(t){ht.unshift(t)}function $t(t){mt.unshift(t)}var R=0,V=null;function Gt(t){R++,i.monitorRunDependencies&&i.monitorRunDependencies(R)}function Xt(t){if(R--,i.monitorRunDependencies&&i.monitorRunDependencies(R),R==0&&V){var e=V;V=null,e()}}function $(t){i.onAbort&&i.onAbort(t),U(t="Aborted("+t+")"),dt=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw P(e),e}var B,Zt="data:application/octet-stream;base64,";function gt(t){return t.startsWith(Zt)}function yt(t){try{if(t==B&&z)return new Uint8Array(z);if(et)return et(t);throw"both async and sync fetching of the wasm failed"}catch(e){$(e)}}function Jt(t){return z||!x&&!q||typeof fetch!="function"?Promise.resolve().then(()=>yt(t)):fetch(t,{credentials:"same-origin"}).then(e=>{if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()}).catch(()=>yt(t))}function _t(t,e,r){return Jt(t).then(n=>WebAssembly.instantiate(n,e)).then(n=>n).then(r,n=>{U("failed to asynchronously prepare wasm: "+n),$(n)})}function Kt(t,e,r,n){return t||typeof WebAssembly.instantiateStreaming!="function"||gt(e)||typeof fetch!="function"?_t(e,r,n):fetch(e,{credentials:"same-origin"}).then(o=>WebAssembly.instantiateStreaming(o,r).then(n,function(u){return U("wasm streaming compile failed: "+u),U("falling back to ArrayBuffer instantiation"),_t(e,r,n)}))}function Qt(){var t={env:St,wasi_snapshot_preview1:St};function e(n,o){var u=n.exports;return i.asm=u,N=i.asm.memory,pt(),lt=i.asm.__indirect_function_table,Lt(i.asm.__wasm_call_ctors),Xt(),u}function r(n){e(n.instance)}if(Gt(),i.instantiateWasm)try{return i.instantiateWasm(t,e)}catch(n){U("Module.instantiateWasm callback failed with error: "+n),P(n)}return Kt(z,B,t,r).catch(P),{}}function rt(t){for(;t.length>0;)t.shift()(i)}gt(B="i3s.wasm")||(B=zt(B));var G=[];function nt(t){var e=G[t];return e||(t>=G.length&&(G.length=t+1),G[t]=e=lt.get(t)),e}function Yt(t,e){nt(t)(e)}function te(t){this.excPtr=t,this.ptr=t-24,this.set_type=function(e){p[this.ptr+4>>2]=e},this.get_type=function(){return p[this.ptr+4>>2]},this.set_destructor=function(e){p[this.ptr+8>>2]=e},this.get_destructor=function(){return p[this.ptr+8>>2]},this.set_caught=function(e){e=e?1:0,j[this.ptr+12>>0]=e},this.get_caught=function(){return j[this.ptr+12>>0]!=0},this.set_rethrown=function(e){e=e?1:0,j[this.ptr+13>>0]=e},this.get_rethrown=function(){return j[this.ptr+13>>0]!=0},this.init=function(e,r){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(r)},this.set_adjusted_ptr=function(e){p[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return p[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Ut(this.get_type()))return p[this.excPtr>>2];var e=this.get_adjusted_ptr();return e!==0?e:this.excPtr}}function ee(t,e,r){throw new te(t).init(e,r),t}var X={};function wt(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function Z(t){return this.fromWireType(F[t>>2])}var O={},S={},J={},re=48,ne=57;function ie(t){if(t===void 0)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=re&&e<=ne?"_"+t:t}function oe(t,e){return{[t=ie(t)]:function(){return e.apply(this,arguments)}}[t]}function it(t,e){var r=oe(e,function(n){this.name=e,this.message=n;var o=new Error(n).stack;o!==void 0&&(this.stack=this.toString()+`
`+o.replace(/^Error(:[^\n]*)?\n/,""))});return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},r}var bt=void 0;function At(t){throw new bt(t)}function Tt(t,e,r){function n(a){var s=r(a);s.length!==t.length&&At("Mismatched type converter count");for(var f=0;f<t.length;++f)A(t[f],s[f])}t.forEach(function(a){J[a]=e});var o=new Array(e.length),u=[],c=0;e.forEach((a,s)=>{S.hasOwnProperty(a)?o[s]=S[a]:(u.push(a),O.hasOwnProperty(a)||(O[a]=[]),O[a].push(()=>{o[s]=S[a],++c===u.length&&n(o)}))}),u.length===0&&n(o)}function ae(t){var e=X[t];delete X[t];var r=e.rawConstructor,n=e.rawDestructor,o=e.fields;Tt([t],o.map(u=>u.getterReturnType).concat(o.map(u=>u.setterArgumentType)),u=>{var c={};return o.forEach((a,s)=>{var f=a.fieldName,l=u[s],d=a.getter,C=a.getterContext,y=u[s+o.length],_=a.setter,W=a.setterContext;c[f]={read:w=>l.fromWireType(d(C,w)),write:(w,ut)=>{var Y=[];_(W,w,y.toWireType(Y,ut)),wt(Y)}}}),[{name:e.name,fromWireType:function(a){var s={};for(var f in c)s[f]=c[f].read(a);return n(a),s},toWireType:function(a,s){for(var f in c)if(!(f in s))throw new TypeError('Missing field:  "'+f+'"');var l=r();for(f in c)c[f].write(l,s[f]);return a!==null&&a.push(n,l),l},argPackAdvance:8,readValueFromPointer:Z,destructorFunction:n}]})}function ue(t,e,r,n,o){}function ot(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}function ce(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);Ct=t}var Ct=void 0;function h(t){for(var e="",r=t;v[r];)e+=Ct[v[r++]];return e}var Pt=void 0;function m(t){throw new Pt(t)}function A(t,e,r={}){if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=e.name;if(t||m('type "'+n+'" must have a positive integer typeid pointer'),S.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;m("Cannot register type '"+n+"' twice")}if(S[t]=e,delete J[t],O.hasOwnProperty(t)){var o=O[t];delete O[t],o.forEach(u=>u())}}function se(t,e,r,n,o){var u=ot(r);A(t,{name:e=h(e),fromWireType:function(c){return!!c},toWireType:function(c,a){return a?n:o},argPackAdvance:8,readValueFromPointer:function(c){var a;if(r===1)a=j;else if(r===2)a=I;else{if(r!==4)throw new TypeError("Unknown boolean type size: "+e);a=F}return this.fromWireType(a[c>>u])},destructorFunction:null})}function fe(){this.allocated=[void 0],this.freelist=[],this.get=function(t){return this.allocated[t]},this.allocate=function(t){let e=this.freelist.pop()||this.allocated.length;return this.allocated[e]=t,e},this.free=function(t){this.allocated[t]=void 0,this.freelist.push(t)}}var g=new fe;function Et(t){t>=g.reserved&&--g.get(t).refcount==0&&g.free(t)}function le(){for(var t=0,e=g.reserved;e<g.allocated.length;++e)g.allocated[e]!==void 0&&++t;return t}function de(){g.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),g.reserved=g.allocated.length,i.count_emval_handles=le}var K={toValue:t=>(t||m("Cannot use deleted val. handle = "+t),g.get(t).value),toHandle:t=>{switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return g.allocate({refcount:1,value:t})}}};function pe(t,e){A(t,{name:e=h(e),fromWireType:function(r){var n=K.toValue(r);return Et(r),n},toWireType:function(r,n){return K.toHandle(n)},argPackAdvance:8,readValueFromPointer:Z,destructorFunction:null})}function ve(t,e){switch(e){case 2:return function(r){return this.fromWireType(st[r>>2])};case 3:return function(r){return this.fromWireType(ft[r>>3])};default:throw new TypeError("Unknown float type: "+t)}}function he(t,e,r){var n=ot(r);A(t,{name:e=h(e),fromWireType:function(o){return o},toWireType:function(o,u){return u},argPackAdvance:8,readValueFromPointer:ve(e,n),destructorFunction:null})}function me(t,e,r,n,o,u){var c=e.length;c<2&&m("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=e[1]!==null&&r!==null,s=!1,f=1;f<e.length;++f)if(e[f]!==null&&e[f].destructorFunction===void 0){s=!0;break}var l=e[0].name!=="void",d=c-2,C=new Array(d),y=[],_=[];return function(){var W;arguments.length!==d&&m("function "+t+" called with "+arguments.length+" arguments, expected "+d+" args!"),_.length=0,y.length=a?2:1,y[0]=o,a&&(W=e[1].toWireType(_,this),y[1]=W);for(var w=0;w<d;++w)C[w]=e[w+2].toWireType(_,arguments[w]),y.push(C[w]);function ut(Y){if(s)wt(_);else for(var D=a?1:2;D<e.length;D++){var ar=D===1?W:C[D-2];e[D].destructorFunction!==null&&e[D].destructorFunction(ar)}if(l)return e[0].fromWireType(Y)}return ut(n.apply(null,y))}}function ge(t,e,r){if(t[e].overloadTable===void 0){var n=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||m("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[n.argCount]=n}}function ye(t,e,r){i.hasOwnProperty(t)?((r===void 0||i[t].overloadTable!==void 0&&i[t].overloadTable[r]!==void 0)&&m("Cannot register public name '"+t+"' twice"),ge(i,t,t),i.hasOwnProperty(r)&&m("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),i[t].overloadTable[r]=e):(i[t]=e,r!==void 0&&(i[t].numArguments=r))}function _e(t,e){for(var r=[],n=0;n<t;n++)r.push(p[e+4*n>>2]);return r}function we(t,e,r){i.hasOwnProperty(t)||At("Replacing nonexistant public symbol"),i[t].overloadTable!==void 0&&r!==void 0?i[t].overloadTable[r]=e:(i[t]=e,i[t].argCount=r)}function be(t,e,r){var n=i["dynCall_"+t];return r&&r.length?n.apply(null,[e].concat(r)):n.call(null,e)}function Ae(t,e,r){return t.includes("j")?be(t,e,r):nt(e).apply(null,r)}function Te(t,e){var r=[];return function(){return r.length=0,Object.assign(r,arguments),Ae(t,e,r)}}function M(t,e){function r(){return t.includes("j")?Te(t,e):nt(e)}t=h(t);var n=r();return typeof n!="function"&&m("unknown function pointer with signature "+t+": "+e),n}var Wt=void 0;function kt(t){var e=xt(t),r=h(e);return T(e),r}function Ce(t,e){var r=[],n={};function o(u){n[u]||S[u]||(J[u]?J[u].forEach(o):(r.push(u),n[u]=!0))}throw e.forEach(o),new Wt(t+": "+r.map(kt).join([", "]))}function Pe(t,e,r,n,o,u,c){var a=_e(e,r);t=h(t),o=M(n,o),ye(t,function(){Ce("Cannot call "+t+" due to unbound types",a)},e-1),Tt([],a,function(s){var f=[s[0],null].concat(s.slice(1));return we(t,me(t,f,null,o,u),e-1),[]})}function Ee(t,e,r){switch(e){case 0:return r?function(n){return j[n]}:function(n){return v[n]};case 1:return r?function(n){return I[n>>1]}:function(n){return L[n>>1]};case 2:return r?function(n){return F[n>>2]}:function(n){return p[n>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function We(t,e,r,n,o){e=h(e);var u=ot(r),c=l=>l;if(n===0){var a=32-8*r;c=l=>l<<a>>>a}var s=e.includes("unsigned"),f=(l,d)=>{};A(t,{name:e,fromWireType:c,toWireType:s?function(l,d){return f(d,this.name),d>>>0}:function(l,d){return f(d,this.name),d},argPackAdvance:8,readValueFromPointer:Ee(e,u,n!==0),destructorFunction:null})}function ke(t,e,r){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function o(u){var c=p,a=c[u>>=2],s=c[u+1];return new n(c.buffer,s,a)}A(t,{name:r=h(r),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})}function je(t,e,r,n){if(!(n>0))return 0;for(var o=r,u=r+n-1,c=0;c<t.length;++c){var a=t.charCodeAt(c);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++c)),a<=127){if(r>=u)break;e[r++]=a}else if(a<=2047){if(r+1>=u)break;e[r++]=192|a>>6,e[r++]=128|63&a}else if(a<=65535){if(r+2>=u)break;e[r++]=224|a>>12,e[r++]=128|a>>6&63,e[r++]=128|63&a}else{if(r+3>=u)break;e[r++]=240|a>>18,e[r++]=128|a>>12&63,e[r++]=128|a>>6&63,e[r++]=128|63&a}}return e[r]=0,r-o}function Fe(t,e,r){return je(t,v,e,r)}function Re(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++r):e+=3}return e}var jt=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Ft(t,e,r){for(var n=e+r,o=e;t[o]&&!(o>=n);)++o;if(o-e>16&&t.buffer&&jt)return jt.decode(t.subarray(e,o));for(var u="";e<o;){var c=t[e++];if(128&c){var a=63&t[e++];if((224&c)!=192){var s=63&t[e++];if((c=(240&c)==224?(15&c)<<12|a<<6|s:(7&c)<<18|a<<12|s<<6|63&t[e++])<65536)u+=String.fromCharCode(c);else{var f=c-65536;u+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else u+=String.fromCharCode((31&c)<<6|a)}else u+=String.fromCharCode(c)}return u}function Se(t,e){return t?Ft(v,t,e):""}function xe(t,e){var r=(e=h(e))==="std::string";A(t,{name:e,fromWireType:function(n){var o,u=p[n>>2],c=n+4;if(r)for(var a=c,s=0;s<=u;++s){var f=c+s;if(s==u||v[f]==0){var l=Se(a,f-a);o===void 0?o=l:(o+=String.fromCharCode(0),o+=l),a=f+1}}else{var d=new Array(u);for(s=0;s<u;++s)d[s]=String.fromCharCode(v[c+s]);o=d.join("")}return T(n),o},toWireType:function(n,o){var u;o instanceof ArrayBuffer&&(o=new Uint8Array(o));var c=typeof o=="string";c||o instanceof Uint8Array||o instanceof Uint8ClampedArray||o instanceof Int8Array||m("Cannot pass non-string to std::string"),u=r&&c?Re(o):o.length;var a=at(4+u+1),s=a+4;if(p[a>>2]=u,r&&c)Fe(o,s,u+1);else if(c)for(var f=0;f<u;++f){var l=o.charCodeAt(f);l>255&&(T(s),m("String has UTF-16 code units that do not fit in 8 bits")),v[s+f]=l}else for(f=0;f<u;++f)v[s+f]=o[f];return n!==null&&n.push(T,a),a},argPackAdvance:8,readValueFromPointer:Z,destructorFunction:function(n){T(n)}})}var Rt=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function Ue(t,e){for(var r=t,n=r>>1,o=n+e/2;!(n>=o)&&L[n];)++n;if((r=n<<1)-t>32&&Rt)return Rt.decode(v.subarray(t,r));for(var u="",c=0;!(c>=e/2);++c){var a=I[t+2*c>>1];if(a==0)break;u+=String.fromCharCode(a)}return u}function Ie(t,e,r){if(r===void 0&&(r=2147483647),r<2)return 0;for(var n=e,o=(r-=2)<2*t.length?r/2:t.length,u=0;u<o;++u){var c=t.charCodeAt(u);I[e>>1]=c,e+=2}return I[e>>1]=0,e-n}function Oe(t){return 2*t.length}function De(t,e){for(var r=0,n="";!(r>=e/4);){var o=F[t+4*r>>2];if(o==0)break;if(++r,o>=65536){var u=o-65536;n+=String.fromCharCode(55296|u>>10,56320|1023&u)}else n+=String.fromCharCode(o)}return n}function He(t,e,r){if(r===void 0&&(r=2147483647),r<4)return 0;for(var n=e,o=n+r-4,u=0;u<t.length;++u){var c=t.charCodeAt(u);if(c>=55296&&c<=57343&&(c=65536+((1023&c)<<10)|1023&t.charCodeAt(++u)),F[e>>2]=c,(e+=4)+4>o)break}return F[e>>2]=0,e-n}function ze(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&++r,e+=4}return e}function Ve(t,e,r){var n,o,u,c,a;r=h(r),e===2?(n=Ue,o=Ie,c=Oe,u=()=>L,a=1):e===4&&(n=De,o=He,c=ze,u=()=>p,a=2),A(t,{name:r,fromWireType:function(s){for(var f,l=p[s>>2],d=u(),C=s+4,y=0;y<=l;++y){var _=s+4+y*e;if(y==l||d[_>>a]==0){var W=n(C,_-C);f===void 0?f=W:(f+=String.fromCharCode(0),f+=W),C=_+e}}return T(s),f},toWireType:function(s,f){typeof f!="string"&&m("Cannot pass non-string to C++ string type "+r);var l=c(f),d=at(4+l+e);return p[d>>2]=l>>a,o(f,d+4,l+e),s!==null&&s.push(T,d),d},argPackAdvance:8,readValueFromPointer:Z,destructorFunction:function(s){T(s)}})}function Be(t,e,r,n,o,u){X[t]={name:h(e),rawConstructor:M(r,n),rawDestructor:M(o,u),fields:[]}}function Me(t,e,r,n,o,u,c,a,s,f){X[t].fields.push({fieldName:h(e),getterReturnType:r,getter:M(n,o),getterContext:u,setterArgumentType:c,setter:M(a,s),setterContext:f})}function qe(t,e){A(t,{isVoid:!0,name:e=h(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(r,n){}})}function Ne(t){t>4&&(g.get(t).refcount+=1)}var Le={};function $e(t){var e=Le[t];return e===void 0?h(t):e}function Ge(t){return K.toHandle($e(t))}function Xe(t,e){var r=S[t];return r===void 0&&m(e+" has unknown type "+kt(t)),r}function Ze(t,e){var r=(t=Xe(t,"_emval_take_value")).readValueFromPointer(e);return K.toHandle(r)}function Je(){$("")}function Ke(t,e,r){v.copyWithin(t,e,e+r)}function Qe(){return 2147483648}function Ye(t){var e=N.buffer;try{return N.grow(t-e.byteLength+65535>>>16),pt(),1}catch{}}function tr(t){var e=v.length;t>>>=0;var r=Qe();if(t>r)return!1;let n=(c,a)=>c+(a-c%a)%a;for(var o=1;o<=4;o*=2){var u=e*(1+.2/o);if(u=Math.min(u,t+100663296),Ye(Math.min(r,n(Math.max(t,u),65536))))return!0}return!1}function er(t){return 52}function rr(t,e,r,n,o){return 70}var nr=[null,[],[]];function ir(t,e){var r=nr[t];e===0||e===10?((t===1?Vt:U)(Ft(r,0)),r.length=0):r.push(e)}function or(t,e,r,n){for(var o=0,u=0;u<r;u++){var c=p[e>>2],a=p[e+4>>2];e+=8;for(var s=0;s<a;s++)ir(t,v[c+s]);o+=a}return p[n>>2]=o,0}bt=i.InternalError=it(Error,"InternalError"),ce(),Pt=i.BindingError=it(Error,"BindingError"),de(),Wt=i.UnboundTypeError=it(Error,"UnboundTypeError");var St={__call_sighandler:Yt,__cxa_throw:ee,_embind_finalize_value_object:ae,_embind_register_bigint:ue,_embind_register_bool:se,_embind_register_emval:pe,_embind_register_float:he,_embind_register_function:Pe,_embind_register_integer:We,_embind_register_memory_view:ke,_embind_register_std_string:xe,_embind_register_std_wstring:Ve,_embind_register_value_object:Be,_embind_register_value_object_field:Me,_embind_register_void:qe,_emval_decref:Et,_emval_incref:Ne,_emval_new_cstring:Ge,_emval_take_value:Ze,abort:Je,emscripten_memcpy_big:Ke,emscripten_resize_heap:tr,fd_close:er,fd_seek:rr,fd_write:or};Qt();var at=function(){return(at=i.asm.malloc).apply(null,arguments)},T=function(){return(T=i.asm.free).apply(null,arguments)},xt=function(){return(xt=i.asm.__getTypeName).apply(null,arguments)};i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm._embind_initialize_bindings).apply(null,arguments)};var Q,Ut=function(){return(Ut=i.asm.__cxa_is_pointer_type).apply(null,arguments)};function It(){function t(){Q||(Q=!0,i.calledRun=!0,dt||(Mt(),H(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),qt()))}R>0||(Bt(),R>0||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),t()},1)):t()))}if(i.dynCall_vij=function(){return(i.dynCall_vij=i.asm.dynCall_vij).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)},V=function t(){Q||It(),Q||(V=t)},i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return It(),k.ready},Ot.exports=Dt;var Ht=tt.exports;const fr=cr({__proto__:null,default:ur(Ht)},[Ht]);export{fr as i};
