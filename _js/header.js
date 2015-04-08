window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&g[o]!==n)return"pfx"==t?o:!0}return!1}function l(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function c(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+E.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):(i=(e+" "+z.join(r+" ")+r).split(" "),l(i,t,n))}function s(){f.input=function(n){for(var r=0,o=n.length;o>r;r++)S[n[r]]=!!(n[r]in b);return S.list&&(S.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),S}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(e){for(var r,o,i,a=0,l=e.length;l>a;a++)b.setAttribute("type",o=e[a]),r="text"!==b.type,r&&(b.value=w,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&b.style.WebkitAppearance!==n?(h.appendChild(b),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,h.removeChild(b)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?b.checkValidity&&b.checkValidity()===!1:b.value!=w)),T[e[a]]=!!r;return T}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var u,d,p="2.8.3",f={},m=!0,h=t.documentElement,y="modernizr",v=t.createElement(y),g=v.style,b=t.createElement("input"),w=":)",x=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),j="Webkit Moz O ms",E=j.split(" "),z=j.toLowerCase().split(" "),M={svg:"http://www.w3.org/2000/svg"},C={},T={},S={},k=[],O=k.slice,N=function(e,n,r,o){var i,a,l,c,s=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)l=t.createElement("div"),l.id=o?o[r]:y+(r+1),s.appendChild(l);return i=["&#173;",'<style id="s',y,'">',e,"</style>"].join(""),s.id=y,(u?s:d).innerHTML+=i,d.appendChild(s),u||(d.style.background="",d.style.overflow="hidden",c=h.style.overflow,h.style.overflow="hidden",h.appendChild(d)),a=n(s,e),u?s.parentNode.removeChild(s):(d.parentNode.removeChild(d),h.style.overflow=c),!!a},A={}.hasOwnProperty;d=o(A,"undefined")||o(A.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return A.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=O.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(O.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(O.call(arguments)))};return r}),C.flexbox=function(){return c("flexWrap")},C.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:N(["@media (",x.join("touch-enabled),("),y,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},C.svg=function(){return!!t.createElementNS&&!!t.createElementNS(M.svg,"svg").createSVGRect};for(var L in C)d(C,L)&&(u=L.toLowerCase(),f[u]=C[L](),k.push((f[u]?"":"no-")+u));return f.input||s(),f.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&f.addTest(r,e[r]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(h.className+=" "+(t?"":"no-")+e),f[e]=t}return f},r(""),v=b=null,f._version=p,f._prefixes=x,f._domPrefixes=z,f._cssomPrefixes=E,f.testProp=function(e){return a([e])},f.testAllProps=c,f.testStyles=N,h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+k.join(" "):""),f}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==y.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function l(){var e=v.shift();g=1,e?e.t?m(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),l()):g=0}function c(e,n,r,o,i,c,s){function u(t){if(!f&&a(d.readyState)&&(b.r=f=1,!g&&l(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&m(function(){x.removeChild(d)},50);for(var r in C[n])C[n].hasOwnProperty(r)&&C[n][r].onload()}}var s=s||p.errorTimeout,d=t.createElement(e),f=0,y=0,b={t:r,s:n,e:i,a:c,x:s};1===C[n]&&(y=1,C[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,y)},v.splice(o,0,b),"img"!=e&&(y||2===C[n]?(x.insertBefore(d,w?null:h),m(u,s)):C[n].push(d))}function s(e,t,n,r,i){return g=0,t=t||"j",o(e)?c("c"==t?E:j,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&l()),this}function u(){var e=p;return e.loader={load:s,i:0},e}var d,p,f=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],y={}.toString,v=[],g=0,b="MozAppearance"in f.style,w=b&&!!t.createRange().compareNode,x=w?f:h.parentNode,f=e.opera&&"[object Opera]"==y.call(e.opera),f=!!t.attachEvent&&!f,j=b?"object":f?"script":"img",E=f?"script":j,z=Array.isArray||function(e){return"[object Array]"==y.call(e)},M=[],C={},T={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};p=function(e){function t(e){var t,n,r,e=e.split("!"),o=M.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=T[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=M[n](i);return i}function a(e,o,i,a,l){var c=t(e),s=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,o,i,a,l):(C[c.url]?c.noexec=!0:C[c.url]=1,i.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(o)||r(s))&&i.load(function(){u(),o&&o(c.origUrl,l,a),s&&s(c.origUrl,l,a),C[c.url]=2})))}function l(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments);p.apply(this,e),f()}),a(e,d,t,0,s);else if(Object(e)===e)for(c in l=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--l&&(r(d)?d=function(){var e=[].slice.call(arguments);p.apply(this,e),f()}:d[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(p[c])),a(e[c],d,t,c,s))}else!n&&f()}var l,c,s=!!e.test,u=e.load||e.both,d=e.callback||i,p=d,f=e.complete||i;n(s?e.yep:e.nope,!!u),u&&n(u)}var c,s,d=this.yepnope.loader;if(o(e))a(e,0,d,0);else if(z(e))for(c=0;c<e.length;c++)s=e[c],o(s)?a(s,0,d,0):z(s)?p(s):Object(s)===s&&l(s,d);else Object(e)===e&&l(e,d)},p.addPrefix=function(e,t){T[e]=t},p.addFilter=function(e){M.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=l,e.yepnope.injectJs=function(e,n,r,o,c,s){var u,d,f=t.createElement("script"),o=o||p.errorTimeout;f.src=e;for(d in r)f.setAttribute(d,r[d]);n=s?l:n||i,f.onreadystatechange=f.onload=function(){!u&&a(f.readyState)&&(u=1,n(),f.onload=f.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),c?f.onload():h.parentNode.insertBefore(f,h)},e.yepnope.injectCss=function(e,n,r,o,a,c){var s,o=t.createElement("link"),n=c?l:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(s in r)o.setAttribute(s,r[s]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("cssfilters",function(){var e=document.createElement("div");return e.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!e.style.length&&(void 0===document.documentMode||document.documentMode>9)}),Modernizr.addTest("cssscrollbar",function(){var e,t="#modernizr{overflow: scroll; width: 40px }#"+Modernizr._prefixes.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}";return Modernizr.testStyles(t,function(t){e="scrollWidth"in t&&40==t.scrollWidth}),e}),Modernizr.addTest("placeholder",function(){return!!("placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea")))}),Modernizr.load([{test:Modernizr.touch,yep:"/wp-content/themes/adallom/js/fastclick.js"},{test:Modernizr.placeholder,nope:"/wp-content/themes/adallom/js/placeholders.js"}]);