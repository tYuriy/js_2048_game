parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r){return t(r)||e(r)||i(r)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function t(r){if(Array.isArray(r))return a(r)}function o(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=i(r))){var n=0,e=function(){};return{s:e,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var t,o,a=!0,u=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return a=r.done,r},e:function(r){u=!0,o=r},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function i(r,n){if(r){if("string"==typeof r)return a(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(r,n):void 0}}function a(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}var u=document.querySelector(".game-field tbody"),c=document.querySelector(".message-start"),f=document.querySelector(".message-win"),l=document.querySelector(".message-lose"),d=document.querySelector(".start"),s=document.querySelector(".game-score"),y=0,m=!1,v=!1,h=!1,p=!1,g=0,w=4,b=w,A=2048,L=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];function S(){var r,n=o(L);try{for(n.s();!(r=n.n()).done;){r.value.fill(0)}}catch(e){n.e(e)}finally{n.f()}h=!1,v=!1,d.innerText="Restart",d.classList.add("restart"),f.classList.add("hidden"),l.classList.add("hidden"),x()}function x(){s.innerText=y;for(var r=u.children,n=0;n<r.length;n++)for(var e=r[n].children,t=0;t<e.length;t++){var o=e[t];o.classList.remove("field-cell--".concat(o.innerText)),o.innerText=0===L[n][t]?"":L[n][t],o.classList.add("field-cell--".concat(L[n][t]))}}function I(){var n;return(n=[]).concat.apply(n,r(L)).some(function(r){return 0===r})}function q(){var n;return(n=[]).concat.apply(n,r(L)).map(function(r,n){return{value:r,index:n}}).filter(function(r){return 0===r.value}).map(function(r){return r.index})}function T(){var r=q(),n=j(0,r.length-1);return{y:Math.floor(r[n]/b),x:r[n]%b}}function j(r,n){return Math.floor(Math.random()*(n-r+1)+r)}function E(){var r=j(1,10);return 4===r?r:2}function k(r){if(I()){var n=T();r[n.y][n.x]=E()}}function M(r){return r.map(function(n,e){return r.map(function(r){return r[e]})})}function R(n,e){for(var t="ArrowLeft"===e||"ArrowRight"===e?r(n):M(n),o=0;o<t.length;o++)t[o]="ArrowLeft"===e||"ArrowUp"===e?O(t[o]):O(t[o].reverse()).reverse();L="ArrowLeft"===e||"ArrowRight"===e?t:M(t),h=!I()&&!C(L)&&!C(M(L))}function O(r){for(var n,e=r.findIndex(function(r){return 0===r}),t=0;t<r.length;t++)0!==r[t]&&(r[n]===r[t]?(g=2*r[t],r[n]=g,y+=g,n=t,r[t]=0,v||(v=g===A),p=!0):n=t,e<t&&e>=0&&(r[e]=r[t],r[t]=0,n=e,p=!0),e=r.findIndex(function(r){return 0===r}));return r}function U(r){for(var n=0;n<r.length-1;n++)if(r[n]===r[n+1])return!0;return!1}function C(r){var n,e=o(r);try{for(e.s();!(n=e.n()).done;){if(U(n.value))return!0}}catch(t){e.e(t)}finally{e.f()}return!1}document.addEventListener("onload",x()),d.addEventListener("click",function(){m=!0,c.classList.add("hidden"),S(),k(L),k(L),x()}),document.addEventListener("keydown",function(r){m&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r.key)&&(R(L,r.key),p&&(k(L),p=!1),v&&(m=!1,c.classList.add("hidden"),f.classList.remove("hidden")),h&&(m=!1,c.classList.add("hidden"),l.classList.remove("hidden")),x())});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.631c1cc3.js.map