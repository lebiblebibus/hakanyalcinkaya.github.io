(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{216:function(t,e,n){"use strict";var i=n(17),r=n(57)(3);i(i.P+i.F*!n(39)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},218:function(t,e,n){},219:function(t,e,n){},220:function(t,e,n){},221:function(t,e,n){},222:function(t,e,n){},223:function(t,e,n){},224:function(t,e,n){},225:function(t,e,n){},226:function(t,e,n){},227:function(t,e,n){},228:function(t,e,n){},229:function(t,e,n){},230:function(t,e,n){},232:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},233:function(t,e,n){"use strict";var i=n(53),r=n(38),s=n(234),o=n(235);n(236)("match",1,function(t,e,n,a){return[function(n){var i=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=a(n,t,this);if(e.done)return e.value;var u=i(t),c=String(this);if(!u.global)return o(u,c);var l=u.unicode;u.lastIndex=0;for(var f,h=[],p=0;null!==(f=o(u,c));){var d=String(f[0]);h[p]=d,""===d&&(u.lastIndex=s(c,r(u.lastIndex),l)),p++}return 0===p?null:h}]})},234:function(t,e,n){"use strict";var i=n(131)(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},235:function(t,e,n){"use strict";var i=n(251),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var s=n.call(t,e);if("object"!=typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},236:function(t,e,n){"use strict";n(252);var i=n(56),r=n(18),s=n(54),o=n(36),a=n(11),u=n(237),c=a("species"),l=!s(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=a(t),p=!s(function(){var e={};return e[h]=function(){return 7},7!=""[t](e)}),d=p?!s(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[h](""),!e}):void 0;if(!p||!d||"replace"===t&&!l||"split"===t&&!f){var v=/./[h],g=n(o,h,""[t],function(t,e,n,i,r){return e.exec===u?p&&!r?{done:!0,value:v.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),m=g[0],b=g[1];i(String.prototype,t,m),r(RegExp.prototype,h,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},237:function(t,e,n){"use strict";var i,r,s=n(238),o=RegExp.prototype.exec,a=String.prototype.replace,u=o,c=(i=/a/,r=/b*/g,o.call(i,"a"),o.call(r,"a"),0!==i.lastIndex||0!==r.lastIndex),l=void 0!==/()??/.exec("")[1];(c||l)&&(u=function(t){var e,n,i,r,u=this;return l&&(n=new RegExp("^"+u.source+"$(?!\\s)",s.call(u))),c&&(e=u.lastIndex),i=o.call(u,t),c&&i&&(u.lastIndex=u.global?i.index+i[0].length:e),l&&i&&i.length>1&&a.call(i[0],n,function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)}),i}),t.exports=u},238:function(t,e,n){"use strict";var i=n(53);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},239:function(t,e,n){"use strict";var i=n(53),r=n(59),s=n(38),o=n(60),a=n(234),u=n(235),c=Math.max,l=Math.min,f=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(236)("replace",2,function(t,e,n,d){return[function(i,r){var s=t(this),o=null==i?void 0:i[e];return void 0!==o?o.call(i,s,r):n.call(String(s),i,r)},function(t,e){var r=d(n,t,this,e);if(r.done)return r.value;var f=i(t),h=String(this),p="function"==typeof e;p||(e=String(e));var g=f.global;if(g){var m=f.unicode;f.lastIndex=0}for(var b=[];;){var _=u(f,h);if(null===_)break;if(b.push(_),!g)break;""===String(_[0])&&(f.lastIndex=a(h,s(f.lastIndex),m))}for(var x,k="",y=0,$=0;$<b.length;$++){_=b[$];for(var C=String(_[0]),S=c(l(o(_.index),h.length),0),w=[],L=1;L<_.length;L++)w.push(void 0===(x=_[L])?x:String(x));var E=_.groups;if(p){var I=[C].concat(w,S,h);void 0!==E&&I.push(E);var O=String(e.apply(void 0,I))}else O=v(C,h,S,w,E,e);S>=y&&(k+=h.slice(y,S)+O,y=S+C.length)}return k+h.slice(y)}];function v(t,e,i,s,o,a){var u=i+t.length,c=s.length,l=p;return void 0!==o&&(o=r(o),l=h),n.call(a,l,function(n,r){var a;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(u);case"<":a=o[r.slice(1,-1)];break;default:var l=+r;if(0===l)return r;if(l>c){var h=f(l/10);return 0===h?r:h<=c?void 0===s[h-1]?r.charAt(1):s[h-1]+r.charAt(1):r}a=s[l-1]}return void 0===a?"":a})}})},241:function(t,e,n){var i,r;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(r="function"==typeof(i=function(){var t,e,n={version:"0.2.0"},i=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function r(t,e,n){return t<e?e:t>n?n:t}function s(t){return 100*(-1+t)}n.configure=function(t){var e,n;for(e in t)void 0!==(n=t[e])&&t.hasOwnProperty(e)&&(i[e]=n);return this},n.status=null,n.set=function(t){var e=n.isStarted();t=r(t,i.minimum,1),n.status=1===t?null:t;var u=n.render(!e),c=u.querySelector(i.barSelector),l=i.speed,f=i.easing;return u.offsetWidth,o(function(e){""===i.positionUsing&&(i.positionUsing=n.getPositioningCSS()),a(c,function(t,e,n){var r;return(r="translate3d"===i.positionUsing?{transform:"translate3d("+s(t)+"%,0,0)"}:"translate"===i.positionUsing?{transform:"translate("+s(t)+"%,0)"}:{"margin-left":s(t)+"%"}).transition="all "+e+"ms "+n,r}(t,l,f)),1===t?(a(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){a(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){n.remove(),e()},l)},l)):setTimeout(e,l)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout(function(){n.status&&(n.trickle(),t())},i.trickleSpeed)};return i.trickle&&t(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var e=n.status;return e?("number"!=typeof t&&(t=(1-e)*r(Math.random()*e,.1,.95)),e=r(e+t,0,.994),n.set(e)):n.start()},n.trickle=function(){return n.inc(Math.random()*i.trickleRate)},t=0,e=0,n.promise=function(i){return i&&"resolved"!==i.state()?(0===e&&n.start(),t++,e++,i.always(function(){0==--e?(t=0,n.done()):n.set((t-e)/t)}),this):this},n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=i.template;var r,o=e.querySelector(i.barSelector),u=t?"-100":s(n.status||0),l=document.querySelector(i.parent);return a(o,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),i.showSpinner||(r=e.querySelector(i.spinnerSelector))&&h(r),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(e),e},n.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(i.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&h(t)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var o=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),a=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()}),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var i,r=t.length,s=e.charAt(0).toUpperCase()+e.slice(1);r--;)if((i=t[r]+s)in n)return i;return e}(n))}function i(t,e,i){e=n(e),t.style[e]=i}return function(t,e){var n,r,s=arguments;if(2==s.length)for(n in e)void 0!==(r=e[n])&&e.hasOwnProperty(n)&&i(t,n,r);else i(t,s[1],s[2])}}();function u(t,e){var n="string"==typeof t?t:f(t);return n.indexOf(" "+e+" ")>=0}function c(t,e){var n=f(t),i=n+e;u(n,e)||(t.className=i.substring(1))}function l(t,e){var n,i=f(t);u(t,e)&&(n=i.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function f(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function h(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return n})?i.call(e,n,e,t):i)||(t.exports=r)},242:function(t,e,n){"use strict";n(243)("link",function(t){return function(e){return t(this,"a","href",e)}})},243:function(t,e,n){var i=n(17),r=n(54),s=n(36),o=/"/g,a=function(t,e,n,i){var r=String(s(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),a+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(a),i(i.P+i.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},244:function(t,e,n){"use strict";var i=n(218);n.n(i).a},245:function(t,e,n){t.exports=n(246)},246:function(t,e,n){n(247),t.exports=n(1).parseInt},247:function(t,e,n){var i=n(2),r=n(248);i(i.G+i.F*(parseInt!=r),{parseInt:r})},248:function(t,e,n){var i=n(3).parseInt,r=n(249).trim,s=n(232),o=/^[-+]?0[xX]/;t.exports=8!==i(s+"08")||22!==i(s+"0x16")?function(t,e){var n=r(String(t),3);return i(n,e>>>0||(o.test(n)?16:10))}:i},249:function(t,e,n){var i=n(2),r=n(63),s=n(14),o=n(232),a="["+o+"]",u=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),l=function(t,e,n){var r={},a=s(function(){return!!o[t]()||"​"!="​"[t]()}),u=r[t]=a?e(f):o[t];n&&(r[n]=u),i(i.P+i.F*a,"String",r)},f=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},250:function(t,e,n){"use strict";var i=n(219);n.n(i).a},251:function(t,e,n){var i=n(58),r=n(11)("toStringTag"),s="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:s?i(e):"Object"==(o=i(e))&&"function"==typeof e.callee?"Arguments":o}},252:function(t,e,n){"use strict";var i=n(237);n(17)({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},253:function(t,e,n){"use strict";var i=n(17),r=n(129)(!1),s=[].indexOf,o=!!s&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(o||!n(39)(s)),"Array",{indexOf:function(t){return o?s.apply(this,arguments)||0:r(this,t,arguments[1])}})},254:function(t,e,n){"use strict";n(255)("trim",function(t){return function(){return t(this,3)}})},255:function(t,e,n){var i=n(17),r=n(36),s=n(54),o=n(256),a="["+o+"]",u=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),l=function(t,e,n){var r={},a=s(function(){return!!o[t]()||"​"!="​"[t]()}),u=r[t]=a?e(f):o[t];n&&(r[n]=u),i(i.P+i.F*a,"String",r)},f=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},256:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},257:function(t,e,n){"use strict";var i=n(220);n.n(i).a},258:function(t,e,n){var i=n(13),r=n(259),s=n(37).f,o=n(263).f,a=n(130),u=n(238),c=i.RegExp,l=c,f=c.prototype,h=/a/g,p=/a/g,d=new c(h)!==h;if(n(22)&&(!d||n(54)(function(){return p[n(11)("match")]=!1,c(h)!=h||c(p)==p||"/a/i"!=c(h,"i")}))){c=function(t,e){var n=this instanceof c,i=a(t),s=void 0===e;return!n&&i&&t.constructor===c&&s?t:r(d?new l(i&&!s?t.source:t,e):l((i=t instanceof c)?t.source:t,i&&s?u.call(t):e),n?this:f,c)};for(var v=function(t){t in c||s(c,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=o(l),m=0;g.length>m;)v(g[m++]);f.constructor=c,c.prototype=f,n(56)(i,"RegExp",c)}n(264)("RegExp")},259:function(t,e,n){var i=n(23),r=n(260).set;t.exports=function(t,e,n){var s,o=e.constructor;return o!==n&&"function"==typeof o&&(s=o.prototype)!==n.prototype&&i(s)&&r&&r(t,s),t}},260:function(t,e,n){var i=n(23),r=n(53),s=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{(i=n(90)(Function.call,n(261).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:s}},261:function(t,e,n){var i=n(262),r=n(89),s=n(61),o=n(127),a=n(40),u=n(126),c=Object.getOwnPropertyDescriptor;e.f=n(22)?c:function(t,e){if(t=s(t),e=o(e,!0),u)try{return c(t,e)}catch(t){}if(a(t,e))return r(!i.f.call(t,e),t[e])}},262:function(t,e){e.f={}.propertyIsEnumerable},263:function(t,e,n){var i=n(128),r=n(91).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},264:function(t,e,n){"use strict";var i=n(13),r=n(37),s=n(22),o=n(11)("species");t.exports=function(t){var e=i[t];s&&e&&!e[o]&&r.f(e,o,{configurable:!0,get:function(){return this}})}},265:function(t,e,n){"use strict";var i=n(221);n.n(i).a},266:function(t,e,n){"use strict";var i=n(222);n.n(i).a},267:function(t,e,n){"use strict";var i=n(223);n.n(i).a},268:function(t,e,n){"use strict";var i=n(224);n.n(i).a},269:function(t,e,n){"use strict";var i=n(225);n.n(i).a},270:function(t,e,n){"use strict";var i=n(226);n.n(i).a},271:function(t,e,n){"use strict";var i=n(227);n.n(i).a},272:function(t,e,n){"use strict";var i=n(228);n.n(i).a},273:function(t,e,n){"use strict";var i=n(229);n.n(i).a},274:function(t,e,n){"use strict";var i=n(230);n.n(i).a},281:function(t,e,n){"use strict";n.r(e);n(92);var i=n(0),r=n(241),s=n.n(r),o=n(32),a=n.n(o);n(216),n(242);const u=/#.*$/,c=/\.(md|html)$/,l=/\/$/,f=/^(https?:|mailto:|tel:)/;function h(t){return decodeURI(t).replace(u,"").replace(c,"")}function p(t){return f.test(t)}function d(t){if(p(t))return t;const e=t.match(u),n=e?e[0]:"",i=h(t);return l.test(i)?t:i+".html"+n}function v(t,e){const n=t.hash,i=function(t){const e=t.match(u);if(e)return e[0]}(e);return(!i||n===i)&&h(t.path)===h(e)}function g(t,e,n){n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=h(e);return i in t?Object.assign({},t[i],{type:"page",path:d(t[i].path)}):(console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{})}function m(t,e,n,i){const{pages:r,themeConfig:s}=n,o=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return function(t){const e=b(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const a=o.sidebar||s.sidebar,u=r.reduce((t,e)=>(t[h(e.regularPath)]=e,t),{});if(a){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(i))return{base:i,config:e[i]};var n;return{}}(e,a);return n?n.map(e=>(function t(e,n,i,r){if("string"==typeof e)return g(n,e,i);if(Array.isArray(e))return Object.assign(g(n,e[0],i),{title:e[1]});{r&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const s=e.children||[];return{type:"group",title:e.title,children:s.map(e=>t(e,n,i,!0)),collapsable:!1!==e.collapsable}}})(e,u,t)):[]}return[]}function b(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function _(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var x={props:{item:{required:!0}},computed:{link:function(){return d(this.item.link)},exact:function(){var t=this;return this.$site.locales?a()(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:p,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},k=n(35),y=Object(k.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);y.options.__file="NavLink.vue";var $=y.exports,C={components:{NavLink:$},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},S=(n(244),Object(k.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null));S.options.__file="Home.vue";var w=S.exports,L=n(245),E=n.n(L),I=(n(250),Object(k.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null));I.options.__file="SidebarButton.vue";var O=I.exports,T=(n(233),n(93),n(108)),N=n.n(T),P=n(21),j=n.n(P),R=(n(253),n(254),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},r=[],s=0;s<e.length&&!(r.length>=5);s++){var o=e[s];if(this.getPageLocalePath(o)===n&&this.isSearchable(o))if(i(o))r.push(o);else if(o.headers)for(var a=0;a<o.headers.length&&!(r.length>=5);a++){var u=o.headers[a];i(u)&&r.push(j()({},o,{path:o.path+"#"+u.slug,header:u}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=N()(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),U=(n(257),Object(k.a)(R,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){t.go(i)},mouseenter:function(e){t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null));U.options.__file="SearchBox.vue";var M=U.exports,D=(n(258),n(50)),A=(n(239),n(55),{name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}}),W=(n(265),Object(k.a)(A,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null));W.options.__file="DropdownTransition.vue";var B=W.exports,H={components:{NavLink:$,DropdownTransition:B},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},G=(n(266),Object(k.a)(H,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null));G.options.__file="DropdownLink.vue";var q={components:{NavLink:$,DropdownLink:G.exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&a()(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:a()(e).map(function(s){var o,a=e[s],u=r[s]&&r[s].label||a.lang;return a.lang===t.$lang?o=n:(o=n.replace(t.$localeConfig.path,s),i.some(function(t){return t.path===o})||(o=s)),{text:u,link:o}})};return[].concat(Object(D.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return j()(_(t),{items:(t.items||[]).map(_)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},z=(n(267),Object(k.a)(q,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null));z.options.__file="NavLinks.vue";var F=z.exports;function X(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var J={components:{SidebarButton:O,NavLinks:F,SearchBox:M,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=E()(X(this.$el,"paddingLeft"))+E()(X(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},Y=(n(268),Object(k.a)(J,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null));Y.options.__file="Navbar.vue";var K=Y.exports;n(41),n(62);function V(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(D.a)(t.children||[])):i.push(t)});for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[r+n]}}var Q={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?g(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,V(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?g(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,V(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,r=void 0===i?"":i,s=t.docsBranch,o=void 0===s?"master":s,a=t.docsRepo,u=void 0===a?e:a,c=h(this.$page.path);return l.test(c)?c+="README.md":c+=".md",u&&n?this.createEditLink(e,u,r,o,c):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){return/bitbucket.org/.test(t)?(f.test(e)?e:t).replace(l,"")+"/".concat(i)+(n?"/"+n.replace(l,""):"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(f.test(e)?e:"https://github.com/".concat(e)).replace(l,"")+"/edit/".concat(i)+(n?"/"+n.replace(l,""):"")+r}}},Z=(n(269),Object(k.a)(Q,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));Z.options.__file="Page.vue";var tt=Z.exports;function et(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function nt(t,e,n,i,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>r?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var o=v(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[et(t,n+"#"+e.slug,e.title,o),nt(t,e.children,n,i,r,s+1)])}))}var it={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,r=n.$site,s=n.$route,o=e.props.item,a=v(s,o.path),c="auto"===o.type?a||o.children.some(function(t){return v(s,o.basePath+"#"+t.slug)}):a,l=et(t,o.path,o.title||o.path,c),f=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:r.themeConfig.sidebarDepth,h=null==f?1:f,p=!!r.themeConfig.displayAllHeaders;return"auto"===o.type?[l,nt(t,o.children,o.basePath,s,h)]:(c||p)&&o.headers&&!u.test(o.path)?[l,nt(t,b(o.headers),o.path,s,h)]:l}},rt=(n(270),Object(k.a)(it,void 0,void 0,!1,null,null,null));rt.options.__file="SidebarLink.vue";var st=rt.exports,ot={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:st,DropdownTransition:B}},at=(n(271),Object(k.a)(ot,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)}),0):t._e()])],1)},[],!1,null,null,null));at.options.__file="SidebarGroup.vue";var ut={components:{SidebarGroup:at.exports,SidebarLink:st,NavLinks:F},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return v(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return v(this.$route,t.regularPath)}}},ct=(n(272),Object(k.a)(ut,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)}),0):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));ct.options.__file="Sidebar.vue";var lt={components:{Home:w,Page:tt,Sidebar:ct.exports,Navbar:K},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return m(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;s.a.configure({showSpinner:!1}),this.$router.beforeEach(function(t,e,n){t.path===e.path||i.a.component(t.name)||s.a.start(),n()}),this.$router.afterEach(function(){s.a.done(),t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},ft=(n(273),n(274),Object(k.a)(lt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));ft.options.__file="Layout.vue";e.default=ft.exports}}]);