"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[21290],{90741:function(e,t,n){n.d(t,{q:function(){return u}});var r=n(63366),o=n(41609),i=n.n(o),a=function(e){return!i()(e)},c=["ymEvent"],u=function(e){void 0===e&&(e={});var t,n=window,o=e,i=o.ymEvent,u=(0,r.Z)(o,c);if((t=n)&&t.dataLayer&&a(u)){var l=Object.assign({path:n.location.pathname},u);n.dataLayer.push(l)}(function(e){return!!e&&"function"==typeof e.ym})(n)&&a(i)&&[i].flat().forEach((function(e){var t=e.method,r=void 0===t?"reachGoal":t,o=e.params;n.ym.apply(n,[""+(window||self).__CLIENT_ENV__.CUSTOM_YTM_ID,r].concat([o].flat()))}))}},40676:function(e,t,n){n.d(t,{m:function(){return i}});var r=n(67294),o=n(13713),i=function(e){var t=e.Icon,n=e.backgroundColor,i=e.backgroundIcon,a=e.border,c=e.bottomAddons,u=e.children,l=e.className,f=e.dataTestId,s=void 0===f?"icon-view":f,d=e.imageUrl,h=e.indicator,v=e.size,y=e.topAddons,p=(0,o.f8)(u),b=p.bottomAddonsSlot,m=p.children,w=p.indicatorSlot,_=p.topAddonsSlot;return r.createElement(t,{backgroundColor:n,backgroundIcon:i,border:a,bottomAddons:c||b,className:l,dataTestId:s,imageUrl:d,indicator:h||w,size:v,topAddons:y||_},m)}},98903:function(e,t,n){n.d(t,{D:function(){return a}});var r=n(45761),o=n(19611),i=n(40676),a=(0,r.A)({Icon:o.n})(i.m)},39110:function(e,t,n){n.d(t,{L:function(){return r}});var r={FOCUSED:2,DEFAULT:5,POSITIONER:20,OVERLAY:30}},8454:function(e,t,n){n.d(t,{K:function(){return u}});var r=n(63366),o=n(67294),i=n(39110),a=(0,o.createContext)(i.L.DEFAULT),c=["children","value"],u=function(e){var t=e.children,n=e.value,u=void 0===n?i.L.DEFAULT:n,l=(0,r.Z)(e,c);return o.createElement(a.Consumer,null,(function(e){var n=Math.max(u,e),r=n+1;return o.createElement(a.Provider,{value:r},(0,o.cloneElement)(t(n),Object.assign({},l)))}))}},21857:function(e,t,n){n.d(t,{p:function(){return l}});var r=n(67294),o=n(94184),i=n.n(o),a=n(8454),c=n(98903),u=n(58521),l=function(e){var t=e.alignStyle,n=e.browser,o=void 0===n?u.F:n,l=e.className,f=e.dataTestId,s=e.headerContainer,d=e.headerList,h=e.iconBackgroundColor,v=e.linePosition,y=e.lineWidth,p=e.onClick,b=e.onTouchEnd,m=e.onTouchStart,w=e.onTabMouseDown,_=e.onTabMouseUp,g=e.selectedID,S=e.selectedTab,O=e.styles,E=e.tabInlineStyle,T=e.themeStyle,I=e.titles,x=e.translateX;return r.createElement("div",{ref:s,className:i()(O.headerContainer,O[T],l),"data-test-id":f,onTouchEnd:b,onTouchStart:m},r.createElement("div",{ref:d,className:i()(O.headerList,O[t]),role:"tablist",style:{transform:"translateX("+x+"px)"}},r.createElement(a.K,null,(function(e){return r.createElement("div",{className:O.indicator,style:{zIndex:e,transform:"translateX("+v+"px)",width:y}})})),I.map((function(e){return r.createElement(a.K,{key:e.id},(function(t){var n;return r.createElement("div",{key:e.id,ref:g===e.id?S:null,"aria-selected":g===e.id,className:i()(O.header,(n={},n[O.selected]=g===e.id,n[O.mobile]=o.mobile,n)),"data-test-id":f+"-"+e.id,onClick:function(t){return p(t,e.id,e.dataLayer)},onKeyDown:function(){},onMouseDown:function(e){return null==w?void 0:w(e)},onMouseUp:function(e){return null==_?void 0:_(e)},role:"tab",style:Object.assign({zIndex:t},E),tabIndex:-1},e.iconSrc&&r.createElement(c.D,{backgroundColor:h,imageUrl:e.iconSrc,size:40}),e.title)}))}))))}},89431:function(e,t,n){n.d(t,{t0:function(){return r},aX:function(){return o},zp:function(){return i}});var r="white",o=45,i=350},6964:function(e,t,n){n.d(t,{d:function(){return d}});var r=n(90741),o=n(23493),i=n.n(o),a=n(67294),c=n(73969),u=n(21794),l=n(89431),f=function(e){var t=e.browser,n=e.coords,r=e.headerContainer,o=e.headerContainerWidth,i=e.headerList,c=e.isScrollable,u=e.minxtranslateX,f=e.move,s=e.selectedID,d=e.selectedTab,h=e.setState,v=e.start,y=e.state,p=e.titles,b=(0,a.useCallback)((function(e,t){var n,r,i,a,f=d.current;if(f){var v=p.findIndex((function(t){return e===t.id})),y=p.findIndex((function(e){return t===e.id})),b=(y=-1===y?0:y)-v,m=f.offsetWidth,w=null==(n=d.current)?void 0:n.parentElement,_=null!==(r=null==w?void 0:w.getBoundingClientRect().left)&&void 0!==r?r:0,g=(null!==(i=null==(a=d.current)?void 0:a.getBoundingClientRect().left)&&void 0!==i?i:0)-_,S=0;c.current&&(b<0&&(S=l.aX-g)<u.current&&(S=u.current),b>0&&(S=o.current-(g+m+l.aX))>0&&(S=0)),h({selectedID:s,translateX:S,lineWidth:m,linePosition:g})}}),[d.current,p]),m=function(e){var t=e.changedTouches[0],r=t.clientX,o=t.clientY;v.current&&1===e.touches.length&&(!f.current&&Math.abs(n.current.x-r)<Math.abs(n.current.y-o)?v.current=!1:(e.preventDefault(),function(e){n.current.x!==e&&(f.current=!0,h((function(t){var r=t.translateX;return r+=e-n.current.x,n.current=Object.assign({},n.current,{x:e}),r<u.current-100&&(r=u.current-100),r>100&&(r=100),Object.assign({},t,{translateX:r})})))}(r)))};return{init:function(){var e=r.current,n=i.current;if(e&&n){var a=n.getBoundingClientRect().width,l=e.getBoundingClientRect().width,f=y.selectedID;o.current!==l&&(o.current=l,u.current=l-a,u.current>=0?(c.current=!1,function(){var e=r.current;e&&e.removeEventListener("touchmove",m)}()):(c.current=!0,function(){var e=r.current;t.mobile&&e&&e.addEventListener("touchmove",m)}()),b(f))}},onTouchStart:function(e){if(c.current){var t=e.changedTouches[0],r=t.clientX,o=t.clientY;1===e.touches.length&&function(e){var t=e.clientX,r=e.clientY,o=i.current;if(o){n.current={x:t,y:r},v.current=!0;var a=window.getComputedStyle(o).transform,c=new(0,window.WebKitCSSMatrix)(a).e;h((function(e){var t=e.translateX;return Object.assign({},e,{translateX:t===c?t:c})}))}}({clientX:r,clientY:o})}},onTouchEnd:function(e){c.current&&function(e){v.current&&(f.current?(f.current=!1,v.current=!1,h((function(t){var r=t.translateX;return r+=e-n.current.x,n.current=Object.assign({},n.current,{x:e}),r<u.current&&(r=u.current),r>0&&(r=0),Object.assign({},t,{translateX:r})}))):v.current=!1)}(e.changedTouches[0].clientX)},changePositionToSelectedID:b}},s=n(58521),d=function(e){var t=e.align,n=e.browser,o=void 0===n?s.F:n,d=e.onChange,h=e.selectedID,v=e.theme,y=void 0===v?l.t0:v,p=e.titles,b=p[0].id,m=p.reduce((function(e,t){return t.iconSrc?e+1:e}),0)>0,w=(0,a.useRef)(null),_=(0,a.useRef)(null),g=(0,a.useRef)(null),S=(0,a.useRef)(!1),O=(0,a.useRef)(!1),E=(0,a.useRef)(!1),T=(0,a.useRef)({x:0,y:0}),I=(0,a.useRef)(0),x=(0,a.useRef)(0),j=(0,a.useState)({translateX:0,lineWidth:0,linePosition:0,selectedID:h||0===h?h:b}),P=j[0],C=j[1],D=f({browser:o,coords:T,headerList:_,headerContainer:w,headerContainerWidth:I,isScrollable:E,minxtranslateX:x,move:O,selectedID:null!=h?h:b,selectedTab:g,setState:C,start:S,state:P,titles:p}),L=D.changePositionToSelectedID,A=D.init,X=D.onTouchEnd,R=D.onTouchStart;(0,u.default)((function(){h&&L(h)}),[p.length,I]),(0,a.useEffect)((function(){setTimeout(A,l.zp)}),[]),(0,a.useEffect)((function(){h&&h!==P.selectedID&&L(h,P.selectedID)}),[L,h,P.selectedID]);var k=i()(A);(0,c.default)("resize",k);return{alignStyle:t+"Align",headerContainer:w,headerList:_,linePosition:P.linePosition,lineWidth:P.lineWidth,onClick:function(e,t,n){n&&(0,r.q)(n),d({event:e,id:t})},onTouchEnd:X,onTouchStart:R,selectedTab:g,translateX:P.translateX,themeStyle:y+"Theme",withIcon:m}}},70655:function(e,t,n){n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return i},__rest:function(){return a},__decorate:function(){return c},__param:function(){return u},__metadata:function(){return l},__awaiter:function(){return f},__generator:function(){return s},__createBinding:function(){return d},__exportStar:function(){return h},__values:function(){return v},__read:function(){return y},__spread:function(){return p},__spreadArrays:function(){return b},__spreadArray:function(){return m},__await:function(){return w},__asyncGenerator:function(){return _},__asyncDelegator:function(){return g},__asyncValues:function(){return S},__makeTemplateObject:function(){return O},__importStar:function(){return T},__importDefault:function(){return I},__classPrivateFieldGet:function(){return x},__classPrivateFieldSet:function(){return j}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function u(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function h(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function p(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function b(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r}function m(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||t)}function w(e){return this instanceof w?(this.v=e,this):new w(e)}function _(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=o[e](t)).value instanceof w?Promise.resolve(n.value.v).then(u,l):f(i[0][2],n)}catch(e){f(i[0][3],e)}var n}function u(e){c("next",e)}function l(e){c("throw",e)}function f(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}function g(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:w(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function S(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=v(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var E=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function T(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return E(t,e),t}function I(e){return e&&e.__esModule?e:{default:e}}function x(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function j(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}}}]);
//# sourceMappingURL=21290.623a70ef.es5.js.map