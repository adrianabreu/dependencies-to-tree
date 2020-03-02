(function(e){function n(n){for(var r,i,c=n[0],u=n[1],s=n[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,i=1;i<t.length;i++){var u=t[i];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},a={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e4528":"649503e7"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=a[e]=[n,r]}));n.push(t[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var s=new Error;o=function(n){u.onerror=u.onload=null,clearTimeout(p);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,t[1](s)}a[e]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/dependencies-to-tree/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var p=0;p<u.length;p++)n(u[p]);var l=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),a=t.n(r);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e._m(0),t("div",{staticClass:"form"},[t("div",{staticClass:"form-body"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inputJson,expression:"inputJson"}],staticClass:"form-body_input",domProps:{value:e.inputJson},on:{input:function(n){n.target.composing||(e.inputJson=n.target.value)}}})]),t("div",{staticClass:"form-submit"},[t("button",{attrs:{type:"button"},on:{click:function(n){return e.drawGraph(e.inputJson)}}},[e._v("Draw graph")])])]),t("div",{attrs:{id:"graph"}})])},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"header"},[t("h2",[e._v("Dependencies to tree")])])}],i=(t("d81d"),t("d3b7"),t("5530")),c=(t("e2b0"),t("99af"),t("4de4"),t("13d5"),t("a9e3"),t("8ba4"),t("9129"),t("b64b"),t("2909"));function u(e){var n=p(l(e.jobs)),t=s(e.jobs);return{nodes:f(n),edges:t}}function s(e){return e.filter((function(e){return Array.isArray(e.dependencies)})).map((function(e,n){return e.dependencies.map((function(t,r){return{id:n+"a"+r+"e",source:t.jobName,target:e.jobName}}))})).reduce((function(e,n){return e.concat(n)}),[])}function p(e){var n={},t=e.map((function(e){return Object(i["a"])({},e,{y:+Array.isArray(e.dependencies)})}));while(Object.keys(n).length!=e.length)t=t.map((function(e){if(0!=e.y){var t=Math.max.apply(Math,Object(c["a"])(e.dependencies.map((function(e){return n[e.jobName]}))))+1;return isNaN(t)?Object(i["a"])({},e):(n[e.jobName]=t,Object(i["a"])({},e,{y:t}))}return n[e.jobName]=0,Object(i["a"])({},e)}));return t}function l(e){console.log(e);var n=0,t={},r=e.map((function(e){return Array.isArray(e.dependencies)?Object(i["a"])({},e):(t[e.jobName]=n,n++,Object(i["a"])({},e,{x:t[e.jobName]}))}));while(Object.keys(t).length!=e.length)r=r.map((function(e){var n;return Array.isArray(e.dependencies)?(n=1===e.dependencies.length?t[e.dependencies[0].jobName]:Math.ceil(e.dependencies.map((function(e){return t[e.jobName]})).reduce((function(e,n){return e+n}))/e.dependencies.length),!Number.isNaN(n)&&Number.isInteger(n)&&(t[e.jobName]=n),Object(i["a"])({},e,{x:t[e.jobName]})):e}));return r}function f(e){for(var n=e.map((function(e){return{id:e.jobName,label:e.jobName,x:e.x,y:e.y,size:2}})),t=Math.max.apply(Math,Object(c["a"])(n.map((function(e){return e.y})))),r=[],a=function(e){for(var t=n.filter((function(n){return n.y==e})),a=[],o=Math.max.apply(Math,Object(c["a"])(t.map((function(e){return e.x})))),u=function(e){var n=t.filter((function(n){return n.x==e})),r=n.length;if(r>1)for(var o=1/r,u=-1,s=0;s<n.length;u++,s++)a=a.concat(Object(i["a"])({},n[s],{x:n[s].x+o*u}));else a=a.concat(Object(c["a"])(n))},s=0;s<=o;s++)u(s);r=r.concat(a)},o=0;o<=t;o++)a(o);return r}t.e("chunk-2d0e4528").then(t.t.bind(null,"9072",7));var d={name:"App",components:{},sigma:null,data:function(){return{inputJson:'{\n    "jobs": [\n        {\n            "jobName": "a"\n        },\n        {\n            "jobName": "b",\n            "dependencies": [\n                {\n                    "jobName": "a"\n                }\n            ]\n        },\n        {\n            "jobName": "c",\n            "dependencies": [\n                {\n                    "jobName": "b"\n                }\n            ]\n        }\n    ]\n}'}},methods:{drawGraph:function(e){this.sigma&&this.clearGraph(),this.sigma=new sigma({graph:this.applyScale(u(JSON.parse(e))),container:"graph"}),this.sigma.refresh()},clearGraph:function(){this.sigma.graph.clear(),this.sigma.refresh(),this.sigma.kill()},applyScale:function(e){return Object(i["a"])({},e,{nodes:e.nodes.map((function(e){return Object(i["a"])({},e,{y:4*e.y,x:10*e.x})}))})}}},m=d,b=(t("034f"),t("2877")),h=Object(b["a"])(m,a,o,!1,null,null,null),v=h.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.848355bd.js.map