(()=>{"use strict";var e,r,t,o={225:(e,r,t)=>{var o=t(52);console.log("hello main"),console.log((0,o.S)(1,2,3)),document.getElementById("btn"),onclick=function(){t.e(293).then(t.bind(t,293)).then((e=>{console.log("模块加载成功",e.default(2,1))})).catch()}}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={exports:{}};return o[e](t,t.exports,i),t.exports}i.m=o,e=[],i.O=(r,t,o,n)=>{if(!t){var a=1/0;for(s=0;s<e.length;s++){for(var[t,o,n]=e[s],l=!0,c=0;c<t.length;c++)(!1&n||a>=n)&&Object.keys(i.O).every((e=>i.O[e](t[c])))?t.splice(c--,1):(l=!1,n<a&&(a=n));if(l){e.splice(s--,1);var u=o();void 0!==u&&(r=u)}}return r}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[t,o,n]},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="src:",i.l=(e,o,n,a)=>{if(r[e])r[e].push(o);else{var l,c;if(void 0!==n)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==t+n){l=d;break}}l||(c=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",t+n),l.src=e),r[e]=[o];var p=(t,o)=>{l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(delete r[e],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),c&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={179:0};i.f.j=(r,t)=>{var o=i.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=i.p+i.u(r),l=new Error;i.l(a,(t=>{if(i.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,o[1](l)}}),"chunk-"+r,r)}},i.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,[a,l,c]=t,u=0;if(a.some((r=>0!==e[r]))){for(o in l)i.o(l,o)&&(i.m[o]=l[o]);if(c)var s=c(i)}for(r&&r(t);u<a.length;u++)n=a[u],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(s)},t=self.webpackChunksrc=self.webpackChunksrc||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var a=i.O(void 0,[52],(()=>i(225)));a=i.O(a)})();