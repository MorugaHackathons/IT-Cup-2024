"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[35799,92910],{18438:function(e,t,n){n.d(t,{L:function(){return r}});var r=function(e){if("undefined"==typeof document)return 0;if(document.body&&(!document.readyState||"loading"!==document.readyState)){if(!0!==e&&"number"==typeof r.__cache)return r.__cache;var t=document.createElement("div"),n=t.style;n.display="block",n.position="absolute",n.width="100px",n.height="100px",n.left="-999px",n.top="-999px",n.overflow="scroll",document.body.insertBefore(t,null);var o=t.clientWidth;if(0!==o)return r.__cache=100-o,document.body.removeChild(t),r.__cache;document.body.removeChild(t)}}},90741:function(e,t,n){n.d(t,{q:function(){return c}});var r=n(63366),o=n(41609),i=n.n(o),s=function(e){return!i()(e)},u=["ymEvent"],c=function(e){void 0===e&&(e={});var t,n=window,o=e,i=o.ymEvent,c=(0,r.Z)(o,u);if((t=n)&&t.dataLayer&&s(c)){var f=Object.assign({path:n.location.pathname},c);n.dataLayer.push(f)}(function(e){return!!e&&"function"==typeof e.ym})(n)&&s(i)&&[i].flat().forEach((function(e){var t=e.method,r=void 0===t?"reachGoal":t,o=e.params;n.ym.apply(n,[""+(window||self).__CLIENT_ENV__.CUSTOM_YTM_ID,r].concat([o].flat()))}))}},9316:function(e,t,n){n.d(t,{n:function(){return i}});var r=n(87462),o=n(67294),i=function(e){return o.createElement("svg",(0,r.Z)({height:"50",viewBox:"0 0 33 50",width:"33"},e),o.createElement("path",{clipRule:"evenodd",d:"M0 49.982v-6.825h32.61v6.825H0zm11.646-28.764h9.064L16.39 7.526h-.17l-4.573 13.692h-.001zm10.587-16.22l9.615 28.887h-7.115l-2.16-6.866H9.698l-2.33 6.867H.679l10.09-28.887C11.746 2.197 12.887 0 16.559 0s4.744 2.206 5.674 4.999v-.001z",fill:"currentColor",fillRule:"evenodd"}))}},73592:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(97326),o=n(94578),i=n(67294),s=n(73935),u=n(58875),c="alfa-portal-container";function f(){var e=document.querySelector("[alfa-portal-container]");return e||function(){var e=document.createElement("div");return e.setAttribute(c,""),document.body.appendChild(e),e}()}var a=function(e){function t(t){var n;if((n=e.call(this,t)||this).state={mounted:!1},n.el=void 0,!u.canUseDOM)return(0,r.Z)(n);var o=f();return n.el=document.createElement("div"),o.appendChild(n.el),n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({mounted:!0})},n.componentWillUnmount=function(){var e=f();this.el&&e.removeChild(this.el)},n.render=function(){var e=this.state.mounted,t=this.props.children;return e&&this.el?(0,s.createPortal)(t,this.el):null},t}(i.Component)},38046:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(67294),o=function(e){var t=e.className;return r.createElement("svg",{className:t,viewBox:"0 0 26 26",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M23.6 1a1 1 0 0 1 1.5 1.4L2.4 25.1A1 1 0 0 1 1 23.6L23.6 1z"}),r.createElement("path",{d:"M1 2.4A1 1 0 0 1 2.4 1l22.7 22.6a1 1 0 0 1-1.5 1.5L1 2.4z"}))}},76113:function(e,t,n){n.d(t,{KF:function(){return i},lv:function(){return s},ej:function(){return u}});var r=n(83790),o="body_overflow_shift",i=function(e){(0,r.nY)(o,e)},s=function(e){(0,r.Ld)(o,e)},u=function(e){(0,r.r1)(o,e)}},84357:function(e,t,n){n.d(t,{N:function(){return s}});var r=n(67294),o=n(18438),i=n(76113),s=function(e){(0,r.useEffect)((function(){var t=document.body.style,n=t.overflow,r=t.paddingRight,s=(0,o.L)(e),u=window.innerWidth>document.body.offsetWidth;return"hidden"!==n&&(document.body.style.overflow="hidden"),s&&u&&(document.body.style.paddingRight=(parseInt(getComputedStyle(document.body).paddingRight,10)||0)+s+"px",(0,i.KF)(s)),function(){var e=document.body.style.overflow;s&&u&&(document.body.style.paddingRight=r,(0,i.KF)(0)),e!==n&&(document.body.style.overflow=n)}}),[e])}},17187:function(e){var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise((function(n,r){function o(n){e.removeListener(t,i),r(n)}function i(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}p(e,t,i,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&p(e,"error",t,n)}(e,o,{once:!0})}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var s=10;function u(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){var o,i,s,f;if(u(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),s=i[t]),void 0===s)s=i[t]=n,++e._eventsCount;else if("function"==typeof s?s=i[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=c(e))>0&&s.length>o&&!s.warned){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,f=a,console&&console.warn&&console.warn(f)}return e}function a(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=a.bind(r);return o.listener=n,r.wrapFn=o,o}function d(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):h(o,o.length)}function v(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function h(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function p(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(i){r.once&&e.removeEventListener(t,o),n(i)}))}}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return c(this)},i.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,i=this._events;if(void 0!==i)o=o&&void 0===i.error;else if(!o)return!1;if(o){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var c=i[e];if(void 0===c)return!1;if("function"==typeof c)r(c,this,t);else{var f=c.length,a=h(c,f);for(n=0;n<f;++n)r(a[n],this,t)}return!0},i.prototype.addListener=function(e,t){return f(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return f(this,e,t,!0)},i.prototype.once=function(e,t){return u(t),this.on(e,l(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,l(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,r,o,i,s;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},i.prototype.listeners=function(e){return d(this,e,!0)},i.prototype.rawListeners=function(e){return d(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):v.call(e,t)},i.prototype.listenerCount=v,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}}]);
//# sourceMappingURL=35799.1aee8d89.es5.js.map