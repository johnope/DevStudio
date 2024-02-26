(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function r(r){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?e(Object(n),!0).forEach((function(e){var o,i,a,s;o=r,i=e,a=n[e],s=function(e,r){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i),(i="symbol"==t(s)?s:String(s))in o?Object.defineProperty(o,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[i]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))}))}return r}var o={"fade-up":{standard:function(t,e){return gsap.from(t,{opacity:0,y:50,duration:e.duration,ease:e.ease||"power1.out",scrollTrigger:e.scrollTrigger})},scroll:function(t,e){return gsap.fromTo(t,{opacity:0,y:-50},{opacity:1,y:0,duration:e.duration,ease:e.ease||"power1.out",scrollTrigger:r(r({},e.scrollTrigger),{},{scrub:!0})})},stagger:function(t,e){return gsap.from(t.children(),{opacity:0,y:50,duration:e.duration,ease:e.ease||"power1.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})},words:function(t,e){return gsap.from(t.find(".word"),{opacity:0,yPercent:120,duration:e.duration,ease:e.ease||"back.out(2)",stagger:e.stagger,scrollTrigger:e.scrollTrigger})},letters:function(t,e){return gsap.from(t.find(".char"),{yPercent:120,duration:e.duration,ease:e.ease||"power1.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})}},"fade-down":{standard:function(t,e){return gsap.from(t,{opacity:0,y:-50,duration:e.duration,ease:e.ease||"power1.out",scrollTrigger:e.scrollTrigger})},scroll:function(t,e){return gsap.fromTo(t,{opacity:0,y:-50},{opacity:1,y:0,duration:e.duration,ease:e.ease||"power1.out",scrollTrigger:r(r({},e.scrollTrigger),{},{scrub:!0})})},stagger:function(t,e){return gsap.from(t.children(),{opacity:0,y:-50,duration:e.duration,ease:e.ease||"power1.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})},words:function(t,e){return gsap.from(t.find(".word"),{yPercent:-120,duration:e.duration,ease:e.ease||"power1.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})},letters:function(t,e){return gsap.from(t.find(".char"),{yPercent:-120,duration:e.duration,ease:e.ease||"power1.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})}},"fade-in":{standard:function(t,e){return gsap.from(t,{opacity:0,duration:e.duration,ease:e.ease||"power1.out",scrollTrigger:e.scrollTrigger})},scroll:function(t,e){return gsap.fromTo(t,{opacity:0},{opacity:1,duration:e.duration,ease:e.ease||"power1.out",scrollTrigger:r(r({},e.scrollTrigger),{},{scrub:!0})})},stagger:function(t,e){return gsap.from(t.children(),{opacity:0,duration:e.duration,ease:e.ease||"power1.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})},words:function(t,e){return gsap.from(t.find(".word"),{opacity:0,duration:e.duration,ease:e.ease||"power1.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})},letters:function(t,e){return gsap.from(t.find(".char"),{opacity:0,duration:e.duration,ease:e.ease||"power1.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})}},"fade-right":{standard:function(t,e){return gsap.from(t,{opacity:0,x:50,duration:e.duration,ease:e.ease||"power1.out",scrollTrigger:e.scrollTrigger})},scroll:function(t,e){return gsap.fromTo(t,{opacity:0,x:50},{opacity:1,x:0,duration:e.duration,ease:e.ease||"power1.out",scrollTrigger:r(r({},e.scrollTrigger),{},{scrub:!0})})},stagger:function(t,e){return gsap.from(t.children(),{opacity:0,x:50,duration:e.duration,ease:e.ease||"power1.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})},words:function(t,e){return gsap.from(t.find(".word"),{opacity:0,x:20,duration:e.duration,ease:e.ease||"power2.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})},letters:function(t,e){return gsap.from(t.find(".char"),{opacity:0,x:20,duration:e.duration,ease:e.ease||"power2.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})}},"fade-left":{standard:function(t,e){return gsap.from(t,{opacity:0,x:-50,duration:e.duration,ease:e.ease||"power1.out",scrollTrigger:e.scrollTrigger})},scroll:function(t,e){return gsap.fromTo(t,{opacity:0,x:-50},{opacity:1,x:0,duration:e.duration,ease:e.ease||"power1.out",scrollTrigger:r(r({},e.scrollTrigger),{},{scrub:!0})})},stagger:function(t,e){return gsap.from(t.children(),{opacity:0,x:-50,duration:e.duration,ease:e.ease||"power1.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})},words:function(t,e){return gsap.from(t.find(".word"),{opacity:0,x:-20,duration:e.duration,ease:e.ease||"power2.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})},letters:function(t,e){return gsap.from(t.find(".char"),{opacity:0,x:-20,duration:e.duration,ease:e.ease||"power2.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})}},"scale-up":{standard:function(t,e){return gsap.from(t,{opacity:0,y:50,scale:.6,duration:e.duration,ease:e.ease||"power1.out",scrollTrigger:e.scrollTrigger})},scroll:function(t,e){return gsap.fromTo(t,{opacity:0,y:50,scale:.8},{opacity:1,y:0,scale:1,duration:e.duration,ease:e.ease||"power1.out",scrollTrigger:r(r({},e.scrollTrigger),{},{scrub:!0})})},stagger:function(t,e){return gsap.from(t.children(),{opacity:0,y:50,scale:.9,duration:e.duration,ease:e.ease||"power1.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})},words:function(t,e){return gsap.from(t.find(".word"),{opacity:0,scale:.8,duration:e.duration,ease:e.ease||"power2.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})},letters:function(t,e){return gsap.from(t.find(".char"),{opacity:0,scale:.6,duration:e.duration,ease:e.ease||"power2.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})}},"scale-in":{standard:function(t,e){return gsap.from(t,{opacity:0,scale:.6,duration:e.duration,ease:e.ease||"power1.out",scrollTrigger:e.scrollTrigger})},scroll:function(t,e){return gsap.fromTo(t,{opacity:0,scale:.8},{opacity:1,scale:1,duration:e.duration,ease:e.ease||"power1.out",scrollTrigger:r(r({},e.scrollTrigger),{},{scrub:!0})})},stagger:function(t,e){return gsap.from(t.children(),{opacity:0,scale:.9,duration:e.duration,ease:e.ease||"power1.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})},words:function(t,e){return gsap.from(t.find(".word"),{opacity:0,scale:.8,duration:e.duration,ease:e.ease||"power2.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})},letters:function(t,e){return gsap.from(t.find(".char"),{opacity:0,scale:.6,duration:e.duration,ease:e.ease||"power2.out",stagger:e.stagger,scrollTrigger:e.scrollTrigger})}},skew:{scroll:function(t,e){var r={skew:0},o=gsap.quickSetter(t,"skewY","deg"),n=gsap.utils.clamp(-20,20);ScrollTrigger.create({trigger:t,start:"top bottom",end:"bottom top",scrub:!0,onUpdate:function(t){var e=n(t.getVelocity()/-300);Math.abs(e)>Math.abs(r.skew)&&(r.skew=e,gsap.to(r,{skew:0,duration:.8,ease:"power3",overwrite:!0,onUpdate:function(){return o(r.skew)}}))}}),gsap.set(t,{transformOrigin:"right center",force3D:!0})}}};function n(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],o=!0,n=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);o=!0);}catch(t){n=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(n)throw i}}return r}}(t,e)||g(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||g(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){if(t){if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function d(t,e){return Object.getOwnPropertyNames(Object(t)).reduce((function(r,o){var n=Object.getOwnPropertyDescriptor(Object(t),o),i=Object.getOwnPropertyDescriptor(Object(e),o);return Object.defineProperty(r,o,i||n)}),{})}function f(t){return"string"==typeof t}function h(t){return Array.isArray(t)}function y(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=d(e);return void 0!==r.types?t=r.types:void 0!==r.split&&(t=r.split),void 0!==t&&(r.types=(f(t)||h(t)?String(t):"").split(",").map((function(t){return String(t).trim()})).filter((function(t){return/((line)|(word)|(char))/i.test(t)}))),(r.absolute||r.position)&&(r.absolute=r.absolute||/absolute/.test(e.position)),r}function m(t){var e=f(t)||h(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function w(t){return null!==t&&"object"==typeof t}function b(t){return w(t)&&/^(1|3|11)$/.test(t.nodeType)}function v(t){return h(t)?t:null==t?[]:function(t){return w(t)&&function(t){return"number"==typeof t&&t>-1&&t%1==0}(t.length)}(t)?Array.prototype.slice.call(t):[t]}function T(t){var e=t;return f(t)&&(e=/^(#[a-z]\w+)$/.test(t.trim())?document.getElementById(t.trim().slice(1)):document.querySelectorAll(t)),v(e).reduce((function(t,e){return[].concat(u(t),u(v(e).filter(b)))}),[])}!function(){function t(){for(var t=arguments.length,e=0;e<t;e++){var r=e<0||arguments.length<=e?void 0:arguments[e];1===r.nodeType||11===r.nodeType?this.appendChild(r):this.appendChild(document.createTextNode(String(r)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function r(){for(var t=this.parentNode,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var n=r.length;if(t)for(n||t.removeChild(this);n--;){var i=r[n];"object"!=typeof i?i=this.ownerDocument.createTextNode(i):i.parentNode&&i.parentNode.removeChild(i),n?t.insertBefore(this.previousSibling,i):t.replaceChild(i,this)}}"undefined"!=typeof Element&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=r,DocumentFragment.prototype.replaceWith=r))}();var O=Object.entries,j="_splittype",S={},E=0;function C(t,e,r){if(!w(t))return console.warn("[data.set] owner is not an object"),null;var o=t[j]||(t[j]=++E),n=S[o]||(S[o]={});return void 0===r?e&&Object.getPrototypeOf(e)===Object.prototype&&(S[o]=c(c({},n),e)):void 0!==e&&(n[e]=r),r}function x(t,e){var r=w(t)?t[j]:null,o=r&&S[r]||{};return void 0===e?o:o[e]}function P(t){var e=t&&t[j];e&&(delete t[e],delete S[e])}var k="\\ud800-\\udfff",D="\\u0300-\\u036f\\ufe20-\\ufe23",A="\\u20d0-\\u20f0",W="\\ufe0e\\ufe0f",N="[".concat(k,"]"),F="[".concat(D).concat(A,"]"),M="\\ud83c[\\udffb-\\udfff]",R="(?:".concat(F,"|").concat(M,")"),B="[^".concat(k,"]"),I="(?:\\ud83c[\\udde6-\\uddff]){2}",L="[\\ud800-\\udbff][\\udc00-\\udfff]",H="\\u200d",U="".concat(R,"?"),V="[".concat(W,"]?"),q=V+U+"(?:"+H+"(?:"+[B,I,L].join("|")+")"+V+U+")*",z="(?:".concat(["".concat(B).concat(F,"?"),F,I,L,N].join("|"),"\n)"),Y=RegExp("".concat(M,"(?=").concat(M,")|").concat(z).concat(q),"g"),X=RegExp("[".concat([H,k,D,A,W].join(""),"]"));function _(t){return X.test(t)}function G(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t=null==(e=t)?"":String(e))&&f(t)&&!r&&_(t)?function(t){return _(t)?function(t){return t.match(Y)||[]}(t):function(t){return t.split("")}(t)}(t):t.split(r)}function J(t,e){var r=document.createElement(t);return e?(Object.keys(e).forEach((function(t){var o=e[t],n=f(o)?o.trim():o;null!==n&&""!==n&&("children"===t?r.append.apply(r,u(v(n))):r.setAttribute(t,n))})),r):r}var K={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function Q(t,e){var r=t.nodeType,o={words:[],chars:[]};if(!/(1|3|11)/.test(r))return o;if(3===r&&/\S/.test(t.nodeValue))return function(t,e){var r,o=m((e=d(K,e)).types),n=e.tagName,i=t.nodeValue,a=document.createDocumentFragment(),s=[];return/^\s/.test(i)&&a.append(" "),r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return(t?String(t):"").trim().replace(/\s+/g," ").split(e)}(i).reduce((function(t,r,i,c){var l,g;return o.chars&&(g=G(r).map((function(t){var r=J(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:t});return C(r,"isChar",!0),s=[].concat(u(s),[r]),r}))),o.words||o.lines?(C(l=J(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(o.words&&e.absolute?"position: relative;":""),children:o.chars?g:r}),{isWord:!0,isWordStart:!0,isWordEnd:!0}),a.appendChild(l)):g.forEach((function(t){a.appendChild(t)})),i<c.length-1&&a.append(" "),o.words?t.concat(l):t}),[]),/\s$/.test(i)&&a.append(" "),t.replaceWith(a),{words:r,chars:s}}(t,e);var n=v(t.childNodes);if(n.length&&(C(t,"isSplit",!0),!x(t).isRoot)){t.style.display="inline-block",t.style.position="relative";var i=t.nextSibling,a=t.previousSibling,s=t.textContent||"",c=i?i.textContent:" ",l=a?a.textContent:" ";C(t,{isWordEnd:/\s$/.test(s)||/^\s/.test(c),isWordStart:/^\s/.test(s)||/\s$/.test(l)})}return n.reduce((function(t,r){var o=Q(r,e),n=o.words,i=o.chars;return{words:[].concat(u(t.words),u(n)),chars:[].concat(u(t.chars),u(i))}}),o)}function Z(t){x(t).isWord?(P(t),t.replaceWith.apply(t,u(t.childNodes))):v(t.children).forEach((function(t){return Z(t)}))}function tt(t,e,r){var o,n,i,a=m(e.types),s=e.tagName,c=t.getElementsByTagName("*"),u=[],g=[],p=null,d=[],f=t.parentElement,h=t.nextElementSibling,y=document.createDocumentFragment(),w=window.getComputedStyle(t),b=w.textAlign,T=.2*parseFloat(w.fontSize);return e.absolute&&(i={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},n=t.offsetWidth,o=t.offsetHeight,C(t,{cssWidth:t.style.width,cssHeight:t.style.height})),v(c).forEach((function(o){var n=o.parentElement===t,i=function(t,e,r,o){if(!r.absolute)return{top:e?t.offsetTop:null};var n=t.offsetParent,i=l(o,2),a=i[0],s=i[1],c=0,u=0;if(n&&n!==document.body){var g=n.getBoundingClientRect();c=g.x+a,u=g.y+s}var p=t.getBoundingClientRect(),d=p.width,f=p.height,h=p.x;return{width:d,height:f,top:p.y+s-u,left:h+a-c}}(o,n,e,r),s=i.width,c=i.height,d=i.top,f=i.left;/^br$/i.test(o.nodeName)||(a.lines&&n&&((null===p||d-p>=T)&&(p=d,u.push(g=[])),g.push(o)),e.absolute&&C(o,{top:d,left:f,width:s,height:c}))})),f&&f.removeChild(t),a.lines&&(d=u.map((function(t){var r=J(s,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(b,"; width: 100%;")});C(r,"isLine",!0);var o={height:0,top:1e4};return y.appendChild(r),t.forEach((function(t,e,n){var i=x(t),a=i.isWordEnd,s=i.top,c=i.height,l=n[e+1];o.height=Math.max(o.height,c),o.top=Math.min(o.top,s),r.appendChild(t),a&&x(l).isWordStart&&r.append(" ")})),e.absolute&&C(r,{height:o.height,top:o.top}),r})),a.words||Z(y),t.replaceChildren(y)),e.absolute&&(t.style.width="".concat(t.style.width||n,"px"),t.style.height="".concat(o,"px"),v(c).forEach((function(t){var e=x(t),r=e.isLine,o=e.top,n=e.left,a=e.width,s=e.height,c=x(t.parentElement),l=!r&&c.isLine;t.style.top="".concat(l?o-c.top:o,"px"),t.style.left="".concat(r?i.left:n-(l?i.left:0),"px"),t.style.height="".concat(s,"px"),t.style.width="".concat(r?i.width:a,"px"),t.style.position="absolute"}))),f&&(h?f.insertBefore(t,h):f.appendChild(t)),d}var et=d(K,{}),rt=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.isSplit=!1,this.settings=d(et,y(r)),this.elements=T(e),this.split()}return i(t,null,[{key:"clearData",value:function(){Object.keys(S).forEach((function(t){delete S[t]}))}},{key:"setDefaults",value:function(t){return et=d(et,y(t)),K}},{key:"revert",value:function(t){T(t).forEach((function(t){var e=x(t),r=e.isSplit,o=e.html,n=e.cssWidth,i=e.cssHeight;r&&(t.innerHTML=o,t.style.width=n||"",t.style.height=i||"",P(t))}))}},{key:"create",value:function(e,r){return new t(e,r)}},{key:"data",get:function(){return S}},{key:"defaults",get:function(){return et},set:function(t){et=d(et,y(t))}}]),i(t,[{key:"split",value:function(t){var e=this;this.revert(),this.elements.forEach((function(t){C(t,"html",t.innerHTML)})),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];void 0!==t&&(this.settings=d(this.settings,y(t)));var o=m(this.settings.types);o.none||(this.elements.forEach((function(t){C(t,"isRoot",!0);var r=Q(t,e.settings),o=r.words,n=r.chars;e.words=[].concat(u(e.words),u(o)),e.chars=[].concat(u(e.chars),u(n))})),this.elements.forEach((function(t){if(o.lines||e.settings.absolute){var n=tt(t,e.settings,r);e.lines=[].concat(u(e.lines),u(n))}})),this.isSplit=!0,window.scrollTo(r[0],r[1]),O(S).forEach((function(t){var e=l(t,2),r=e[0],o=e[1],n=o.isRoot,i=o.isSplit;n&&i||(S[r]=null,delete S[r])})))}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}();$(document).ready((function(){gsap.registerPlugin(ScrollTrigger);$("[goo]").each((function(){var t=$(this),e=$(window).width(),r=t.attr("goo-disable"),n="true"===t.attr("goo-debug"),i=t.attr("goo"),a=t.attr("goo-type");if(!("mobile"===r&&e<=767||"tablet"===r&&e<=991)){["words","letters"].includes(a)&&new rt(t[0],{types:["words","chars"],tagName:"span"});var s=parseFloat(t.attr("goo-duration"))||1,c=parseFloat(t.attr("goo-stagger"))||.5,l={duration:s,ease:t.data("goo-easing")||"power1.out",stagger:c,scrollTrigger:{trigger:t,start:t.attr("goo-start")||"top 90%",end:t.attr("goo-end")||"bottom top",toggleActions:t.attr("goo-actions")||"play none none reverse",markers:n}};i in o&&a in o[i]&&o[i][a](t,l)}}))}))})();