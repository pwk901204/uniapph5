(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-agreement-agreement~pages-baojia-baojia~pages-bill_detail-bill_detail~pages-carmodal-carmodal~~6a947317"],{4127:function(e,t,r){"use strict";var n=r("d233"),o=r("b313"),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},u=function e(t,r,o,i,a,u,c,l,f,d,p,g){var y=t;if("function"===typeof c)y=c(r,y);else if(y instanceof Date)y=d(y);else if(null===y){if(i)return u&&!g?u(r,s.encoder):r;y=""}if("string"===typeof y||"number"===typeof y||"boolean"===typeof y||n.isBuffer(y)){if(u){var h=g?r:u(r,s.encoder);return[p(h)+"="+p(u(y,s.encoder))]}return[p(r)+"="+p(String(y))]}var m,v=[];if("undefined"===typeof y)return v;if(Array.isArray(c))m=c;else{var b=Object.keys(y);m=l?b.sort(l):b}for(var w=0;w<m.length;++w){var j=m[w];a&&null===y[j]||(v=Array.isArray(y)?v.concat(e(y[j],o(r,j),o,i,a,u,c,l,f,d,p,g)):v.concat(e(y[j],r+(f?"."+j:"["+j+"]"),o,i,a,u,c,l,f,d,p,g)))}return v};e.exports=function(e,t){var r=e,a=t?n.assign({},t):{};if(null!==a.encoder&&void 0!==a.encoder&&"function"!==typeof a.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"===typeof a.delimiter?s.delimiter:a.delimiter,l="boolean"===typeof a.strictNullHandling?a.strictNullHandling:s.strictNullHandling,f="boolean"===typeof a.skipNulls?a.skipNulls:s.skipNulls,d="boolean"===typeof a.encode?a.encode:s.encode,p="function"===typeof a.encoder?a.encoder:s.encoder,g="function"===typeof a.sort?a.sort:null,y="undefined"!==typeof a.allowDots&&a.allowDots,h="function"===typeof a.serializeDate?a.serializeDate:s.serializeDate,m="boolean"===typeof a.encodeValuesOnly?a.encodeValuesOnly:s.encodeValuesOnly;if("undefined"===typeof a.format)a.format=o["default"];else if(!Object.prototype.hasOwnProperty.call(o.formatters,a.format))throw new TypeError("Unknown format option provided.");var v,b,w=o.formatters[a.format];"function"===typeof a.filter?(b=a.filter,r=b("",r)):Array.isArray(a.filter)&&(b=a.filter,v=b);var j,O=[];if("object"!==typeof r||null===r)return"";j=a.arrayFormat in i?a.arrayFormat:"indices"in a?a.indices?"indices":"repeat":"indices";var x=i[j];v||(v=Object.keys(r)),g&&v.sort(g);for(var S=0;S<v.length;++S){var k=v[S];f&&null===r[k]||(O=O.concat(u(r[k],k,x,l,f,d?p:null,b,g,y,h,w,m)))}var R=O.join(c),_=!0===a.addQueryPrefix?"?":"";return R.length>0?_+R:""}},4328:function(e,t,r){"use strict";var n=r("4127"),o=r("9e6a"),i=r("b313");e.exports={formats:i,parse:o,stringify:n}},"890c":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.grant=s,t.login=u,t.H5login=c,t.activation=l,t.devices=f,t.mileage=d,t.getBrands=p,t.getSeries=g,t.getModels=y,t.getDevice=h,t.getLoc=m,t.getInsurance=v,t.getTriplatest=b,t.getDayTrip=w,t.getScorelatest=j,t.getDayScore=O,t.getBills=x,t.getBilling=S,t.getPrices=k,t.alarm=R,t.getOrders=_,t.getOrderDetail=A,t.quotations=P,t.getVechileData=C,t.getModelExactness=L,t.getModelMistiness=D,t.getEffectiveDate=E,t.getExactQoute=T,t.applyUnderwrite=H,t.deposit=q,t.recurring=M,t.basic=N,t.result=B,t.quotationsToOrder=F,t.pay=U,t.insurance=I,t.ocr=z,t.vehicle=J,t.getQuotations=Q,t.history=V,t.orderStaus=G,t.dlrLogin=$,t.dlrLoginCode=W,t.dlrHandleLogin=X,t.dlrRegisterCode=K,t.dlrRegister=Y,t.getRegions=Z,t.getPosterImg=ee,t.getMyAssets=te,t.bindCard=re,t.withdraw=ne,t.getWithdrawRecord=oe,t.getIncomeRecord=ie,t.syncBizId=ae,t.BASE_IMAGE_URL=void 0;var n=o(r("f00c"));function o(e){return e&&e.__esModule?e:{default:e}}var i=r("4328"),a="https://api.kaikaibao.com.cn/lccx/images/";function s(e){return n.default.post("3.1/mina/grant",i.stringify(e))}function u(e){return n.default.post("3.1/mina/login",i.stringify(e))}function c(e){return n.default.post("3.1/login",i.stringify(e))}function l(e){return n.default.post("3.1/send/device/activation",i.stringify(e))}function f(e){return n.default.post("3.1/devices",i.stringify(e))}function d(e){return n.default.upload("3.1/device/mileage",{image:fs.createReadStream(e)})}function p(){return n.default.get("3.1/vehicle/brands")}function g(e){return n.default.get("3.1/vehicle/series/"+e)}function y(e){return n.default.get("3.1/vehicle/models/"+e)}function h(){return n.default.get("3.1/devices")}function m(){return n.default.get("3.1/loc")}function v(){return n.default.get("3.1/insurance")}function b(){return n.default.get("3.1/triplatest")}function w(e){return n.default.get("3.1/trips/"+e)}function j(){return n.default.get("3.1/scorelatest")}function O(e){return n.default.get("3.1/score/"+e)}function x(){return n.default.get("3.1/bills")}function S(){return n.default.get("3.1/billing/history")}function k(){return n.default.get("3.1/prices")}function R(e){return n.default.put("3.1/alarm",i.stringify(e))}function _(){return n.default.get("3.1/orders")}function A(e){return n.default.get("3.1/orders/"+e)}function P(e){return n.default.post("3.1/quotations",i.stringify(e))}function C(e){return n.default.post("3.1/getVechileData",i.stringify(e))}function L(e){return n.default.post("3.1/getModelExactness",i.stringify(e))}function D(e){return n.default.post("3.1/getModelMistiness",i.stringify(e))}function E(e){return n.default.post("3.1/getEffectiveDate",i.stringify(e))}function T(e){return n.default.post("3.1/getExactQoute",i.stringify(e))}function H(e){return n.default.post("3.1/applyUnderwrite",i.stringify(e))}function q(e){return n.default.post("3.1/deposit",i.stringify(e))}function M(e){return n.default.post("3.1/recurring",i.stringify(e))}function N(e,t){return n.default.put("3.1/quotations/"+e+"/basic",i.stringify(t))}function B(e){return n.default.get("3.1/quotations/"+e+"/result",{},{timeout:2e4})}function F(e,t){return n.default.put("3.1/quotations/"+e+"/order",i.stringify(t))}function U(e,t){return n.default.post("3.1/orders/"+e+"/pay",i.stringify(t))}function I(e,t){return n.default.put("3.1/quotations/"+e+"/insurance",t)}function z(e){return n.default.post("3.1/ocr",i.stringify(e))}function J(e,t){return n.default.put("3.1/quotations/"+e+"/vehicle",i.stringify(t))}function Q(e){return n.default.get("3.1/quotations/"+e)}function V(e){return n.default.get("3.1/billing/history/"+e)}function G(e){return n.default.post("3.1/orderStaus",i.stringify(e))}function $(e){return n.default.get("3.1/agents/session?openid="+e)}function W(e){return n.default.post("1.0/send/login",i.stringify(e))}function X(e){return n.default.post("3.1/agents/login",i.stringify(e))}function K(e){return n.default.post("1.0/send/register",i.stringify(e))}function Y(e){return n.default.post("3.1/agents/register",i.stringify(e))}function Z(){return n.default.get("3.1/agents/regions")}function ee(){return n.default.get("3.1/agents/posters")}function te(){return n.default.get("3.1/agents/assets")}function re(e){return n.default.put("3.1/agents/bank_card",i.stringify(e))}function ne(e){return n.default.post("3.1/agents/withdraw",i.stringify(e))}function oe(){return n.default.get("3.1/agents/withdrew")}function ie(){return n.default.get("3.1/agents/incomes")}function ae(e){return n.default.post("3.1/syncBizId",i.stringify(e))}t.BASE_IMAGE_URL=a},"9e6a":function(e,t,r){"use strict";var n=r("d233"),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,s=n.split(t.delimiter,a),u=0;u<s.length;++u){var c,l,f=s[u],d=f.indexOf("]="),p=-1===d?f.indexOf("="):d+1;-1===p?(c=t.decoder(f,i.decoder),l=t.strictNullHandling?null:""):(c=t.decoder(f.slice(0,p),i.decoder),l=t.decoder(f.slice(p+1),i.decoder)),o.call(r,c)?r[c]=[].concat(r[c]).concat(l):r[c]=l}return r},s=function(e,t,r){for(var n=t,o=e.length-1;o>=0;--o){var i,a=e[o];if("[]"===a)i=[],i=i.concat(n);else{i=r.plainObjects?Object.create(null):{};var s="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,u=parseInt(s,10);!isNaN(u)&&a!==s&&String(u)===s&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(i=[],i[u]=n):i[s]=n}n=i}return n},u=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,u=i.exec(n),c=u?n.slice(0,u.index):n,l=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;l.push(c)}var f=0;while(null!==(u=a.exec(n))&&f<r.depth){if(f+=1,!r.plainObjects&&o.call(Object.prototype,u[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(u[1])}return u&&l.push("["+n.slice(u.index)+"]"),s(l,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"===typeof r.depth?r.depth:i.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:i.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var o="string"===typeof e?a(e,r):e,s=r.plainObjects?Object.create(null):{},c=Object.keys(o),l=0;l<c.length;++l){var f=c[l],d=u(f,o[f],r);s=n.merge(s,d,r)}return n.compact(s)}},a34a:function(e,t,r){e.exports=r("bbdd")},ac60:function(e,t,r){(function(t,r){e.exports=r()})(0,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports={type:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isObject:function(e,t){return t?"object"===this.type(e):e&&"object"===("undefined"===typeof e?"undefined":n(e))},isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},encode:function(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")},formatParams:function(e){var t="",r=!0,o=this;if("object"!=("undefined"===typeof e?"undefined":n(e)))return e;function i(e,n){var a=o.encode,s=o.type(e);if("array"==s)e.forEach(function(e,t){i(e,n+"%5B%5D")});else if("object"==s)for(var u in e)i(e[u],n?n+"%5B"+a(u)+"%5D":a(u));else r||(t+="&"),r=!1,t+=n+"="+a(e)}return i(e,""),t},merge:function(e,t){for(var r in t)e.hasOwnProperty(r)?this.isObject(t[r],1)&&this.isObject(e[r],1)&&this.merge(e[r],t[r]):e[r]=t[r];return e}}},function(e,t,r){var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=r(0),s="undefined"!==typeof document;function u(e){var t=function(){function t(){i(this,t),this.requestHeaders={},this.readyState=0,this.timeout=0,this.responseURL="",this.responseHeaders={}}return o(t,[{key:"_call",value:function(e){this[e]&&this[e].apply(this,[].splice.call(arguments,1))}},{key:"_changeReadyState",value:function(e){this.readyState=e,this._call("onreadystatechange")}},{key:"open",value:function(e,t){if(this.method=e,t){if(t=a.trim(t),0!==t.indexOf("http")&&s){var r=document.createElement("a");r.href=t,t=r.href}}else t=location.href;this.responseURL=t,this._changeReadyState(1)}},{key:"send",value:function(t){var r=this;t=t||null;var o=this;if(e){var i,u={method:o.method,url:o.responseURL,headers:o.requestHeaders||{},body:t};a.merge(u,o._options||{}),"GET"===u.method&&(u.body=null),o._changeReadyState(3),o.timeout=o.timeout||0,o.timeout>0&&(i=setTimeout(function(){3===o.readyState&&(r._call("onloadend"),o._changeReadyState(0),o._call("ontimeout"))},o.timeout)),u.timeout=o.timeout,e(u,function(e){function t(t){var r=e[t];return delete e[t],r}if(3===o.readyState){clearTimeout(i),o.status=t("statusCode")-0;var r=t("responseText"),a=t("statusMessage");if(o.status){var u=t("headers"),c={};for(var l in u){var f=u[l],d=l.toLowerCase();"object"===("undefined"===typeof f?"undefined":n(f))?c[d]=f:(c[d]=c[d]||[],c[d].push(f))}var p=c["set-cookie"];s&&p&&p.forEach(function(e){document.cookie=e.replace(/;\s*httpOnly/gi,"")}),o.responseHeaders=c,o.statusText=a||"",o.response=o.responseText=r,o._response=e,o._changeReadyState(4),o._call("onload")}else o.statusText=r,o._call("onerror",{msg:a});o._call("onloadend")}})}else console.error("Ajax require adapter")}},{key:"setRequestHeader",value:function(e,t){this.requestHeaders[a.trim(e)]=t}},{key:"getResponseHeader",value:function(e){return(this.responseHeaders[e.toLowerCase()]||"").toString()||null}},{key:"getAllResponseHeaders",value:function(){var e="";for(var t in this.responseHeaders)e+=t+":"+this.getResponseHeader(t)+"\r\n";return e||null}},{key:"abort",value:function(e){this._changeReadyState(0),this._call("onerror",{msg:e}),this._call("onloadend")}}],[{key:"setAdapter",value:function(t){e=t}}]),t}();return t}e.exports=u},function(e,t,r){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=r(0),a="undefined"!==typeof document,s=function(){function e(t){function r(e){var t,r;function n(){e.p=t=r=null}i.merge(e,{lock:function(){t||(e.p=new Promise(function(e,n){t=e,r=n}))},unlock:function(){t&&(t(),n())},clear:function(){r&&(r("cancel"),n())}})}o(this,e),this.engine=t||XMLHttpRequest,this.default=this;var n=this.interceptors={response:{use:function(e,t){this.handler=e,this.onerror=t}},request:{use:function(e){this.handler=e}}},a=n.request,s=n.response;r(s),r(a),this.config={method:"GET",baseURL:"",headers:{},timeout:0,params:{},parseJson:!0,withCredentials:!1}}return n(e,[{key:"request",value:function(e,t,r){var n=this,o=new this.engine,s="Content-Type",u=s.toLowerCase(),c=this.interceptors,l=c.request,f=c.response,d=l.handler,p=new Promise(function(c,p){function g(e){return e&&e.then&&e.catch}function y(e,t){e?e.then(function(){t()}):t()}function h(r){t=r.body,e=i.trim(r.url);var n=i.trim(r.baseURL||"");if(e||!a||n||(e=location.href),0!==e.indexOf("http")){var l="/"===e[0];if(!n&&a){var d=location.pathname.split("/");d.pop(),n=location.protocol+"//"+location.host+(l?"":d.join("/"))}if("/"!==n[n.length-1]&&(n+="/"),e=n+(l?e.substr(1):e),a){var h=document.createElement("a");h.href=e,e=h.href}}var m=i.trim(r.responseType||""),v="GET"===r.method,b=i.type(t),w=r.params||{};v&&"object"===b&&(w=i.merge(t,w)),w=i.formatParams(w);var j=[];w&&j.push(w),v&&t&&"string"===b&&j.push(t),j.length>0&&(e+=(-1===e.indexOf("?")?"?":"&")+j.join("&")),o.open(r.method,e);try{o.withCredentials=!!r.withCredentials,o.timeout=r.timeout||0,"stream"!==m&&(o.responseType=m)}catch(A){}var O=r.headers[s]||r.headers[u],x="application/x-www-form-urlencoded";for(var S in i.trim((O||"").toLowerCase())===x?t=i.formatParams(t):i.isFormData(t)||-1===["object","array"].indexOf(i.type(t))||(x="application/json;charset=utf-8",t=JSON.stringify(t)),O||v||(r.headers[s]=x),r.headers)if(S===s&&i.isFormData(t))delete r.headers[S];else try{o.setRequestHeader(S,r.headers[S])}catch(A){}function k(e,t,n){y(f.p,function(){if(e){n&&(t.request=r);var o=e.call(f,t,Promise);t=void 0===o?t:o}g(t)||(t=Promise[0===n?"resolve":"reject"](t)),t.then(function(e){c(e)}).catch(function(e){p(e)})})}function R(e){e.engine=o,k(f.onerror,e,-1)}function _(e,t){this.message=e,this.status=t}o.onload=function(){var e=o.response||o.responseText;e&&r.parseJson&&-1!==(o.getResponseHeader(s)||"").indexOf("json")&&!i.isObject(e)&&(e=JSON.parse(e));var t=o.responseHeaders;if(!t){t={};var n=(o.getAllResponseHeaders()||"").split("\r\n");n.pop(),n.forEach(function(e){if(e){var r=e.split(":")[0];t[r]=o.getResponseHeader(r)}})}var a=o.status,u=o.statusText,c={data:e,headers:t,status:a,statusText:u};if(i.merge(c,o._response),a>=200&&a<300||304===a)c.engine=o,c.request=r,k(f.handler,c,0);else{var l=new _(u,a);l.response=c,R(l)}},o.onerror=function(e){R(new _(e.msg||"Network Error",0))},o.ontimeout=function(){R(new _("timeout [ "+o.timeout+"ms ]",1))},o._options=r,setTimeout(function(){o.send(v?null:t)},0)}i.isObject(e)&&(r=e,e=r.url),r=r||{},r.headers=r.headers||{},y(l.p,function(){i.merge(r,n.config);var o=r.headers;o[s]=o[s]||o[u]||"",delete o[u],r.body=t||r.body,e=i.trim(e||""),r.method=r.method.toUpperCase(),r.url=e;var a=r;d&&(a=d.call(l,r,Promise)||r),g(a)||(a=Promise.resolve(a)),a.then(function(e){e===r?h(e):c(e)},function(e){p(e)})})});return p.engine=o,p}},{key:"all",value:function(e){return Promise.all(e)}},{key:"spread",value:function(e){return function(t){return e.apply(null,t)}}}]),e}();s.default=s,["get","post","put","patch","head","delete"].forEach(function(e){s.prototype[e]=function(t,r,n){return this.request(t,r,i.merge({method:e},n))}}),["lock","unlock","clear"].forEach(function(e){s.prototype[e]=function(){this.interceptors.request[e]()}}),e.exports=s},,,,function(e,t,r){"use strict";e.exports=function(e,t){var r={method:e.method,url:e.url,dataType:e.dataType||void 0,header:e.headers,data:e.body||{},success:function(e){t({statusCode:e.statusCode,responseText:e.data,headers:e.header,statusMessage:e.errMsg})},fail:function(e){t({statusCode:e.statusCode||0,statusMessage:e.errMsg})}};wx.request(r)}},,,,,function(e,t,r){"use strict";var n=r(2),o=r(1),i=r(6),a=o(i);e.exports=function(e){return new n(e||a)}}])})},b313:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},bbdd:function(e,t,r){var n=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r("96cf"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(a){n.regeneratorRuntime=void 0}},d233:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e){var t;while(e.length){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],o=0;o<t.length;++o)"undefined"!==typeof t[o]&&n.push(t[o]);r.obj[r.prop]=n}}return t},a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r},s=function e(t,r,o){if(!r)return t;if("object"!==typeof r){if(Array.isArray(t))t.push(r);else{if("object"!==typeof t)return[t,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!==typeof t)return[t].concat(r);var i=t;return Array.isArray(t)&&!Array.isArray(r)&&(i=a(t,o)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,i){n.call(t,i)?t[i]&&"object"===typeof t[i]?t[i]=e(t[i],r,o):t.push(r):t[i]=r}),t):Object.keys(r).reduce(function(t,i){var a=r[i];return n.call(t,i)?t[i]=e(t[i],a,o):t[i]=a,t},i)},u=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},c=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},l=function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),r="",n=0;n<t.length;++n){var i=t.charCodeAt(n);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?r+=t.charAt(n):i<128?r+=o[i]:i<2048?r+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?r+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(n+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(n)),r+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return r},f=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],a=o.obj[o.prop],s=Object.keys(a),u=0;u<s.length;++u){var c=s[u],l=a[c];"object"===typeof l&&null!==l&&-1===r.indexOf(l)&&(t.push({obj:a,prop:c}),r.push(l))}return i(t)},d=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},p=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:a,assign:u,compact:f,decode:c,encode:l,isBuffer:p,isRegExp:d,merge:s}},f00c:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,o)}function a(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function s(e){i(a,n,o,s,u,"next",e)}function u(e){i(a,n,o,s,u,"throw",e)}s(void 0)})}}var s=r("ac60"),u=new s,c=new s,l=r("4328");function f(e){return d.apply(this,arguments)}function d(){return d=a(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.post("3.1/login",l.stringify(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),d.apply(this,arguments)}u.config.timeout=6e4,u.config.baseURL="https://api.kaikaibao.com.cn",c.config=u.config,u.interceptors.request.use(function(e){uni.showLoading({title:"加载中..."}),console.log("----------------");var t=uni.getStorageSync("token");return t&&(e.headers["Authorization"]="Bearer "+t),console.log(e.url),-1!=e.url.indexOf("result")&&(e.headers["Content-Type"]="application/json"),e}),u.interceptors.response.use(function(e,t){return console.log("interceptors.response",e),uni.hideLoading(),t.resolve(e.data)},function(e,t){console.log("error-interceptor",e),uni.hideLoading(),e.request.url.indexOf("result");var r="";if(401==e.status){console.log("token失效，重新请求token...");var n={partner_id:uni.getStorageSync("partner_id"),imei:uni.getStorageSync("imei")};f(n).then(function(e){console.log(JSON.stringify(e.data));var t=e.data.data.token;console.log("token已更新，值为: "+t),uni.setStorageSync("token",t)})}else if(500==e.status)r=e.response.data.msg,console.log(r);else if(0==e.status)r="服务器异常";else if(1==e.status)r="网络连接超时";else if(422==e.status)if(e.response.data.errors){for(var o in e.response.data.errors)if(o){r=e.response.data.errors[o][0];break}}else r=e.response.data.msg;else r=e.response.data.errors&&e.response.data.errors.code?e.response.data.errors.code[0]:"请求数据失败,请稍后再试";return r&&uni.showToast({title:r,icon:"none",duration:2e3}),t.reject()});var p=u;t.default=p}}]);