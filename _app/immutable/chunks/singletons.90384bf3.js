import{w as c}from"./index.b4a1b10e.js";const k="",h=__sveltekit_g5ueoi.assets,g="1679428674757",m="sveltekit:snapshot",w="sveltekit:scroll",A="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function R(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function I(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function _(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function S(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=_(e)}}function y(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!a||v(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:o,target:a}}function T(e){let t=null,n=null,a=null,o=null,s=e;for(;s&&s!==document.documentElement;)n===null&&(n=l(s,"preload-code")),a===null&&(a=l(s,"preload-data")),t===null&&(t=l(s,"noscroll")),o===null&&(o=l(s,"reload")),s=_(s);return{preload_code:d[n??"off"],preload_data:d[a??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function p(e){const t=c(e);let n=!0;function a(){n=!0,t.update(r=>r)}function o(r){n=!1,t.set(r)}function s(r){let i;return t.subscribe(u=>{(i===void 0||n&&u!==i)&&r(i=u)})}return{notify:a,set:o,subscribe:s}}function b(){const{set:e,subscribe:t}=c(!1);let n;async function a(){clearTimeout(n);const o=await fetch(`${h}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const r=(await o.json()).version!==g;return r&&(e(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:a}}function v(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function x(e){e.client}const O={url:p({}),page:p({}),navigating:c(null),updated:b()};export{A as I,f as P,w as S,m as a,y as b,T as c,I as d,k as e,S as f,R as g,x as h,v as i,O as s};
