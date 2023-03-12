import{S as Y,i as Z,s as $,k as w,l as v,m as E,h,n as g,b as P,H as ee,o as ge,J as Q,K as x,w as X,C as pe,a as T,c as U,G as m,L as te,D as we,E as ve,F as ye,g as R,v as De,d as C,f as Ie,M as Le,q as N,y as ne,r as j,z as re,A as se,B as oe,N as ue,O as Te,P as fe,I as Ue,u as We}from"../chunks/index.45ad9d22.js";import{_ as Pe}from"../chunks/preload-helper.41c905a7.js";import{r as Re}from"../chunks/index.b4a1b10e.js";function Se(){return new Worker(""+new URL("../workers/editor.worker-d809e5e3.js",import.meta.url).href)}function Ve(n){let e,t;return{c(){e=w("div"),this.h()},l(r){e=v(r,"DIV",{class:!0}),E(e).forEach(h),this.h()},h(){g(e,"class",t="monaco-container "+(n[1].class??""))},m(r,s){P(r,e,s),n[7](e)},p(r,[s]){s&2&&t!==(t="monaco-container "+(r[1].class??""))&&g(e,"class",t)},i:ee,o:ee,d(r){r&&h(e),n[7](null)}}}function Ce(n,e,t){if(!e)return;const r=e.getModel();r&&n.editor.setModelMarkers(r,"emblem",t.map(s=>({severity:n.MarkerSeverity.Error,startLineNumber:s.location[0],startColumn:s.location[1],endLineNumber:s.location[2],endColumn:s.location[3],message:s.message})))}function Oe(n,e,t){let{value:r}=e,{theme:s}=e,{errors:o}=e,a,c,f;ge(async()=>{var i;t(5,a=await Pe(()=>import("../chunks/editor.main.c3cd4c92.js").then(d=>d.e),["../chunks/editor.main.c3cd4c92.js","../chunks/preload-helper.41c905a7.js","../assets/editor.911c6360.css"],import.meta.url)),window.MonacoEnvironment={globalAPI:!0,getWorker(){return new Se}},t(6,c=a.editor.create(f,{automaticLayout:!0,theme:s,value:r}));const l=(i=c.getModel())==null?void 0:i.onDidChangeContent(()=>{t(2,r=c.getValue())});return()=>{l==null||l.dispose(),c.dispose()}});function _(l){X[l?"unshift":"push"](()=>{f=l,t(0,f)})}return n.$$set=l=>{t(1,e=Q(Q({},e),x(l))),"value"in l&&t(2,r=l.value),"theme"in l&&t(3,s=l.theme),"errors"in l&&t(4,o=l.errors)},n.$$.update=()=>{n.$$.dirty&40&&s&&a&&a.editor.setTheme(s),n.$$.dirty&112&&Ce(a,c,o)},e=x(e),[f,e,r,s,o,a,c,_]}class Ne extends Y{constructor(e){super(),Z(this,e,Oe,Ve,$,{value:2,theme:3,errors:4})}}let p;const Ee=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Ee.decode();let H=null;function G(){return(H===null||H.byteLength===0)&&(H=new Uint8Array(p.memory.buffer)),H}function ae(n,e){return Ee.decode(G().subarray(n,n+e))}const W=new Array(128).fill(void 0);W.push(void 0,null,!0,!1);let J=W.length;function de(n){J===W.length&&W.push(W.length+1);const e=J;return J=W[e],W[e]=n,e}let q=null;function S(){return(q===null||q.byteLength===0)&&(q=new Int32Array(p.memory.buffer)),q}let B=0;const K=new TextEncoder("utf-8"),je=typeof K.encodeInto=="function"?function(n,e){return K.encodeInto(n,e)}:function(n,e){const t=K.encode(n);return e.set(t),{read:n.length,written:t.length}};function ke(n,e,t){if(t===void 0){const c=K.encode(n),f=e(c.length);return G().subarray(f,f+c.length).set(c),B=c.length,f}let r=n.length,s=e(r);const o=G();let a=0;for(;a<r;a++){const c=n.charCodeAt(a);if(c>127)break;o[s+a]=c}if(a!==r){a!==0&&(n=n.slice(a)),s=t(s,r,r=a+n.length*3);const c=G().subarray(s+a,s+r),f=je(n,c);a+=f.written}return B=a,s}let z=null;function le(){return(z===null||z.byteLength===0)&&(z=new Uint32Array(p.memory.buffer)),z}function Be(n,e){return le().subarray(n/4,n/4+e)}function Fe(n,e){const t=e(n.length*4);return le().set(n,t/4),B=n.length,t}function He(n){return W[n]}function qe(n){n<132||(W[n]=J,J=n)}function Me(n){const e=He(n);return qe(n),e}function ze(n,e){const r=le().subarray(n/4,n/4+e),s=[];for(let o=0;o<r.length;o++)s.push(Me(r[o]));return s}function Je(n){try{const a=p.__wbindgen_add_to_stack_pointer(-16),c=ke(n,p.__wbindgen_malloc,p.__wbindgen_realloc),f=B;p.build(a,c,f);var e=S()[a/4+0],t=S()[a/4+1],r=S()[a/4+2],s=S()[a/4+3];if(s)throw Me(r);var o=ze(e,t).slice();return p.__wbindgen_free(e,t*4),o}finally{p.__wbindgen_add_to_stack_pointer(16)}}class ie{static __wrap(e){const t=Object.create(ie.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_emblemerror_free(e)}get message(){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.__wbg_get_emblemerror_message(r,this.ptr);var e=S()[r/4+0],t=S()[r/4+1];return ae(e,t)}finally{p.__wbindgen_add_to_stack_pointer(16),p.__wbindgen_free(e,t)}}set message(e){const t=ke(e,p.__wbindgen_malloc,p.__wbindgen_realloc),r=B;p.__wbg_set_emblemerror_message(this.ptr,t,r)}get locations(){try{const s=p.__wbindgen_add_to_stack_pointer(-16);p.__wbg_get_emblemerror_locations(s,this.ptr);var e=S()[s/4+0],t=S()[s/4+1],r=Be(e,t).slice();return p.__wbindgen_free(e,t*4),r}finally{p.__wbindgen_add_to_stack_pointer(16)}}set locations(e){const t=Fe(e,p.__wbindgen_malloc),r=B;p.__wbg_set_emblemerror_locations(this.ptr,t,r)}}async function Ge(n,e){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,e)}catch(r){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}function Ke(){const n={};return n.wbg={},n.wbg.__wbg_emblemerror_new=function(e){const t=ie.__wrap(e);return de(t)},n.wbg.__wbindgen_string_new=function(e,t){const r=ae(e,t);return de(r)},n.wbg.__wbindgen_throw=function(e,t){throw new Error(ae(e,t))},n}function Qe(n,e){return p=n.exports,Ae.__wbindgen_wasm_module=e,q=null,z=null,H=null,p}async function Ae(n){typeof n>"u"&&(n=new URL(""+new URL("../assets/emblem_wasm_bg.f64ced44.wasm",import.meta.url).href,self.location));const e=Ke();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:t,module:r}=await Ge(await n,e);return Qe(t,r)}const xe=n=>Re(null,t=>{if(!globalThis.matchMedia)return;const r=globalThis.matchMedia(n);t(r.matches);const s=o=>t(o.matches);return r.addEventListener("change",s),()=>{r.removeEventListener("change",s)}}),_e="https://github.com/TheSignPainter98/emblem#26f2ee9a278f5d1188bc761138ce86a6ac7108c6",Xe=n=>({}),he=n=>({});function me(n){let e,t;const r=n[6].default,s=pe(r,n,n[5],null);return{c(){e=w("div"),s&&s.c(),this.h()},l(o){e=v(o,"DIV",{class:!0});var a=E(e);s&&s.l(a),a.forEach(h),this.h()},h(){g(e,"class","fixed z-1 right-0")},m(o,a){P(o,e,a),s&&s.m(e,null),t=!0},p(o,a){s&&s.p&&(!t||a&32)&&we(s,r,o,o[5],t?ye(r,o[5],a,null):ve(o[5]),null)},i(o){t||(R(s,o),t=!0)},o(o){C(s,o),t=!1},d(o){o&&h(e),s&&s.d(o)}}}function Ye(n){let e,t,r,s,o,a,c;const f=n[6].button,_=pe(f,n,n[5],he);let l=n[0]&&me(n);return{c(){e=w("div"),t=w("button"),_&&_.c(),s=T(),l&&l.c(),this.h()},l(i){e=v(i,"DIV",{});var d=E(e);t=v(d,"BUTTON",{class:!0});var D=E(t);_&&_.l(D),D.forEach(h),s=U(d),l&&l.l(d),d.forEach(h),this.h()},h(){g(t,"class",r=n[4].class??"")},m(i,d){P(i,e,d),m(e,t),_&&_.m(t,null),m(e,s),l&&l.m(e,null),n[7](e),o=!0,a||(c=[te(window,"mousedown",n[3]),te(t,"click",n[2])],a=!0)},p(i,[d]){_&&_.p&&(!o||d&32)&&we(_,f,i,i[5],o?ye(f,i[5],d,Xe):ve(i[5]),he),(!o||d&16&&r!==(r=i[4].class??""))&&g(t,"class",r),i[0]?l?(l.p(i,d),d&1&&R(l,1)):(l=me(i),l.c(),R(l,1),l.m(e,null)):l&&(De(),C(l,1,1,()=>{l=null}),Ie())},i(i){o||(R(_,i),R(l),o=!0)},o(i){C(_,i),C(l),o=!1},d(i){i&&h(e),_&&_.d(i),l&&l.d(),n[7](null),a=!1,Le(c)}}}function Ze(n,e,t){let{$$slots:r={},$$scope:s}=e,{open:o=!1}=e,a;function c(){t(0,o=!o)}function f(l){o&&!a.contains(l.target)&&t(0,o=!1)}function _(l){X[l?"unshift":"push"](()=>{a=l,t(1,a)})}return n.$$set=l=>{t(4,e=Q(Q({},e),x(l))),"open"in l&&t(0,o=l.open),"$$scope"in l&&t(5,s=l.$$scope)},e=x(e),[o,a,c,f,e,s,r,_]}class $e extends Y{constructor(e){super(),Z(this,e,Ze,Ye,$,{open:0})}}function et(n){let e,t,r,s,o,a,c=_e.split("#")[1].substring(0,8)+"",f,_,l,i,d,D,M,k,y;return{c(){e=w("div"),t=w("div"),r=N(`Using emblem_core
					`),s=w("a"),o=w("span"),a=T(),f=N(c),_=T(),l=w("div"),i=w("input"),d=T(),D=w("label"),M=N("Show debug"),this.h()},l(b){e=v(b,"DIV",{class:!0});var u=E(e);t=v(u,"DIV",{});var A=E(t);r=j(A,`Using emblem_core
					`),s=v(A,"A",{class:!0,href:!0});var L=E(s);o=v(L,"SPAN",{class:!0}),E(o).forEach(h),a=U(L),f=j(L,c),L.forEach(h),A.forEach(h),_=U(u),l=v(u,"DIV",{});var I=E(l);i=v(I,"INPUT",{id:!0,type:!0}),d=U(I),D=v(I,"LABEL",{for:!0});var V=E(D);M=j(V,"Show debug"),V.forEach(h),I.forEach(h),u.forEach(h),this.h()},h(){g(o,"class","i-ph-git-commit"),g(s,"class","text-inherit no-underline rounded hover:text-accent px-1 bg-bg-muted"),g(s,"href",_e),g(i,"id","show-debug"),g(i,"type","checkbox"),g(D,"for","show-debug"),g(e,"class","bg-bg-default w-80 p-3 shadow-lg flex flex-col gap-4")},m(b,u){P(b,e,u),m(e,t),m(t,r),m(t,s),m(s,o),m(s,a),m(s,f),m(e,_),m(e,l),m(l,i),i.checked=n[0],m(l,d),m(l,D),m(D,M),k||(y=te(i,"change",n[1]),k=!0)},p(b,u){u&1&&(i.checked=b[0])},d(b){b&&h(e),k=!1,y()}}}function tt(n){let e;return{c(){e=w("span"),this.h()},l(t){e=v(t,"SPAN",{class:!0,slot:!0}),E(e).forEach(h),this.h()},h(){g(e,"class","i-ph-list"),g(e,"slot","button")},m(t,r){P(t,e,r)},p:ee,d(t){t&&h(e)}}}function nt(n){let e,t,r,s,o,a,c,f,_,l,i,d,D;return d=new $e({props:{class:"h-full w-10 ml-auto bg-transparent b-0 text-inherit hover:bg-bg-muted text-6",$$slots:{button:[tt],default:[et]},$$scope:{ctx:n}}}),{c(){e=w("nav"),t=w("h1"),r=N("Emblem Playground"),s=T(),o=w("a"),a=w("span"),c=T(),f=w("a"),_=N("Docs"),l=T(),i=w("div"),ne(d.$$.fragment),this.h()},l(M){e=v(M,"NAV",{class:!0});var k=E(e);t=v(k,"H1",{class:!0});var y=E(t);r=j(y,"Emblem Playground"),y.forEach(h),s=U(k),o=v(k,"A",{class:!0,href:!0});var b=E(o);a=v(b,"SPAN",{class:!0}),E(a).forEach(h),b.forEach(h),c=U(k),f=v(k,"A",{class:!0,href:!0});var u=E(f);_=j(u,"Docs"),u.forEach(h),l=U(k),i=v(k,"DIV",{class:!0});var A=E(i);re(d.$$.fragment,A),A.forEach(h),k.forEach(h),this.h()},h(){g(t,"class","m-0 pl-3 text-5"),g(a,"class","text-5 i-ph-github-logo"),g(o,"class","text-inherit no-underline hover:text-accent"),g(o,"href","https://github.com/jf908/emblem-playground"),g(f,"class","text-inherit no-underline hover:text-accent"),g(f,"href","https://kcza.net/emblem/introduction.html"),g(i,"class","ml-auto h-full flex"),g(e,"class","flex items-center h-45px gap-4 text-fg-default bg-bg-default select-none")},m(M,k){P(M,e,k),m(e,t),m(t,r),m(e,s),m(e,o),m(o,a),m(e,c),m(e,f),m(f,_),m(e,l),m(e,i),se(d,i,null),D=!0},p(M,[k]){const y={};k&5&&(y.$$scope={dirty:k,ctx:M}),d.$set(y)},i(M){D||(R(d.$$.fragment,M),D=!0)},o(M){C(d.$$.fragment,M),D=!1},d(M){M&&h(e),oe(d)}}}function rt(n,e,t){let{showDebug:r}=e;function s(){r=this.checked,t(0,r)}return n.$$set=o=>{"showDebug"in o&&t(0,r=o.showDebug)},[r,s]}class st extends Y{constructor(e){super(),Z(this,e,rt,nt,$,{showDebug:0})}}function be(n){let e,t,r;return{c(){e=w("article"),t=w("pre"),r=N(n[2]),this.h()},l(s){e=v(s,"ARTICLE",{class:!0});var o=E(e);t=v(o,"PRE",{class:!0,id:!0});var a=E(t);r=j(a,n[2]),a.forEach(h),o.forEach(h),this.h()},h(){g(t,"class","min-h-100%"),g(t,"id","debug"),g(e,"class","flex-1 overflow-auto markdown-body")},m(s,o){P(s,e,o),m(e,t),m(t,r)},p(s,o){o&4&&We(r,s[2])},d(s){s&&h(e)}}}function ot(n){let e,t,r,s,o,a,c,f,_,l,i,d;function D(u){n[10](u)}let M={};n[3]!==void 0&&(M.showDebug=n[3]),r=new st({props:M}),X.push(()=>ue(r,"showDebug",D));function k(u){n[11](u)}let y={class:"flex-1 overflow-hidden",theme:n[4],errors:n[5]};n[0]!==void 0&&(y.value=n[0]),c=new Ne({props:y}),X.push(()=>ue(c,"value",k));let b=n[3]&&be(n);return{c(){e=T(),t=w("div"),ne(r.$$.fragment),o=T(),a=w("div"),ne(c.$$.fragment),_=T(),l=w("article"),i=T(),b&&b.c(),this.h()},l(u){Te("svelte-1w3bpid",document.head).forEach(h),e=U(u),t=v(u,"DIV",{class:!0});var L=E(t);re(r.$$.fragment,L),o=U(L),a=v(L,"DIV",{class:!0});var I=E(a);re(c.$$.fragment,I),_=U(I),l=v(I,"ARTICLE",{class:!0,id:!0});var V=E(l);V.forEach(h),i=U(I),b&&b.l(I),I.forEach(h),L.forEach(h),this.h()},h(){document.title="Emblem Playground",g(l,"class","flex-1 overflow-auto markdown-body p-3"),g(l,"id","output"),g(a,"class","flex min-h-0 h-full"),g(t,"class","flex flex-col h-100vh")},m(u,A){P(u,e,A),P(u,t,A),se(r,t,null),m(t,o),m(t,a),se(c,a,null),m(a,_),m(a,l),l.innerHTML=n[1],m(a,i),b&&b.m(a,null),d=!0},p(u,[A]){const L={};!s&&A&8&&(s=!0,L.showDebug=u[3],fe(()=>s=!1)),r.$set(L);const I={};A&16&&(I.theme=u[4]),A&32&&(I.errors=u[5]),!f&&A&1&&(f=!0,I.value=u[0],fe(()=>f=!1)),c.$set(I),(!d||A&2)&&(l.innerHTML=u[1]),u[3]?b?b.p(u,A):(b=be(u),b.c(),b.m(a,null)):b&&(b.d(1),b=null)},i(u){d||(R(r.$$.fragment,u),R(c.$$.fragment,u),d=!0)},o(u){C(r.$$.fragment,u),C(c.$$.fragment,u),d=!1},d(u){u&&h(e),u&&h(t),oe(r),oe(c),b&&b.d()}}}function at(n,e,t){let r,{data:s}=e,o=!1,a=s.samples[Math.floor(Math.random()*s.samples.length)],c="",f="",_=!1,l="vs-dark",i=[];const d=xe("(prefers-color-scheme: dark)");Ue(n,d,y=>t(9,r=y));function D(y,b){if(!y)return;let u;try{u=Je(b)}catch(I){const V=I,F=V.locations,ce=[];for(let O=0;O<F.length;O+=4)ce.push({message:V.message,location:[F[O],F[O+1],F[O+2],F[O+3]]});t(5,i=ce);return}t(5,i=[]);const[A,L]=u;t(1,c=A),t(2,f=L)}ge(()=>{Ae().then(()=>{t(8,o=!0)})});function M(y){_=y,t(3,_)}function k(y){a=y,t(0,a)}return n.$$set=y=>{"data"in y&&t(7,s=y.data)},n.$$.update=()=>{n.$$.dirty&512&&t(4,l=r?"vs-dark":"vs"),n.$$.dirty&257&&D(o,a)},[a,c,f,_,l,i,d,s,o,r,M,k]}class ut extends Y{constructor(e){super(),Z(this,e,at,ot,$,{data:7})}}export{ut as default};
