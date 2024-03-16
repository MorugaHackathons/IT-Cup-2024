(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[25478],{72340:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AppCore",{enumerable:!0,get:function(){return s}});var n=r(86947),o=function(e){return e&&e.__esModule?e:{default:e}}(r(67294)),c=r(15482),i=r(36391),a=r(99849),u=r(4256);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}(0,i.refillPIDCookie)();var s=function(e){var t=e.collectorData,r=e.logger,i=e.seo||{},l=i.linkCanonical,s=i.meta,p=i.title,d=s&&(Array.isArray(s)?{meta:s}:{meta:[s]}),y=l&&{link:[{rel:"canonical",href:l}]},m=p&&{title:p},v=f({},u.helmet,y,d,m);return o.default.createElement(n.BaseLayer,null,o.default.createElement(c.Helmet,v),o.default.createElement(a.Renderer,{collectorData:t,logger:r}))}},88826:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AppCore",{enumerable:!0,get:function(){return n.AppCore}});var n=r(72340)},7935:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Application",{enumerable:!0,get:function(){return s}});var n=r(18749),o=r(12929),c=r(78527),i=function(e){return e&&e.__esModule?e:{default:e}}(r(67294)),a=r(88826);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}var s=function(e){var t=e.cityInfo,r=e.collectorData,u=e.fetchProcess,s=e.pageContent,p=e.queryParams;return i.default.createElement(n.GeoInfoProvider,{value:t},i.default.createElement(o.QueryParamsContext.Provider,{value:p},i.default.createElement(c.SsrPromiseContext.Provider,{value:f(l({},u),{meta:{collectorData:r}})},i.default.createElement(a.AppCore,{collectorData:r,logger:console,seo:s.seo}))))}},1449:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ASSR_VIEW_MODE:function(){return r},defaultCity:function(){return n},WIDGET_REGISTRY_DEVICES:function(){return o},ERROR_STATUSES:function(){return c},EXTENDED_LOG_FIELDS:function(){return i},SCHEMA_TYPES:function(){return a},SCHEMA_TYPES_MAP:function(){return u}});var r="assr-view-mode",n={fiasId:"0c5b2444-70a0-4932-980c-b4dc0d3f02b5",id:21,cityTitle:"Москва",cityPath:"moscow",regionId:77},o={desktop:"desktop",mobile:"mobile",common:"common"},c={VALIDATION_ERROR:400,NOT_FOUND:404,INTERNAL_SERVER_ERROR:500,GATEWAY_TIMEOUT:504},i={registry:{api_operation_type:"registry",api_operation_target:"widgets"},render:{api_operation_type:"render",api_operation_target:"page"}},a=["schema","childrenSchema","semanticSchema"],u={children:"childrenSchema",semantic:"semanticSchema"}},93682:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getKeyValueFromSearchStr",{enumerable:!0,get:function(){return r}});var r=function(e){if("undefined"==typeof window)return{};var t=(e||window.location.search).replace(/^.*\?/,""),r=t.split("#");t=r[0];var n={};return t.split("&").forEach((function(e){var t=e.split("="),r=t[0],o=t[1];n[r]=o})),n}},50884:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"mapObjectValues",{enumerable:!0,get:function(){return c}});var n=r(67294),o=function(e){return!("object"!=typeof e||(0,n.isValidElement)(e)||null===e||e instanceof RegExp||e instanceof Error||e instanceof Date)},c=function e(t,r){var n=function t(n){return Array.isArray(n)?n.map((function(e){return t(e)})):o(n)?e(n,r):r(n)};return Object.entries(t).reduce((function(e,t){var r=t[0],o=t[1];return e[r]=n(o),e}),{})}},36391:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"refillPIDCookie",{enumerable:!0,get:function(){return a}});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(36808)),o=r(93682);var c="platformId",i="alfasite";function a(){if("undefined"!=typeof window){var e="."+window.location.hostname,t=(0,o.getKeyValueFromSearchStr)()[c];t&&n.default.set(c,t,{domain:e,expires:30}),n.default.get(c)||n.default.set(c,i,{domain:e,expires:30})}}},42212:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getWidgetRecord",{enumerable:!0,get:function(){return u}});var n=r(90920);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=function(e,t){var r=(0,n.getWidgetsManifests)()[e];if(r){var o=r.device[t]||r.device.common;if(o){r.device;return i(c({},a(r,["device"])),{componentRecord:o})}}return null}},62969:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{Consumer:function(){return o},Provider:function(){return c}});var n=(0,r(67294).createContext)({device:"desktop",widgets:[]}),o=n.Consumer,c=n.Provider},99849:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Renderer",{enumerable:!0,get:function(){return i}});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(67294)),o=r(28398),c=r(62969);var i=function(e){var t=e.collectorData,r=e.logger,i=void 0===r?console:r;return n.default.createElement(c.Consumer,null,(function(e){var r=e.device,n=e.widgets;return(0,o.createReactTree)(n,r,i,t)}))}},40923:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Markdown",{enumerable:!0,get:function(){return a}});var n=r(64840),o=r(30889),c=r(34938),i=r(38983),a=function(e){var t=e.value;return(0,o.compiler)(t,{forceInline:!0,overrides:{strong:{component:n.Strong},p:{component:i.Paragraph},a:{component:c.MarkdownLink}}})}},91119:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{createMarkdown:function(){return i},mapMarkdownProps:function(){return a}});var n=r(67294),o=r(50884),c=r(40923);function i(e){return void 0===e&&(e=""),(0,n.createElement)(c.Markdown,{value:e})}var a=function(e,t){void 0===t&&(t="md:");var r=new RegExp("^"+t+"\\s*");return(0,o.mapObjectValues)(e,(function(e){return"string"==typeof e&&e.startsWith(t)?i(e.replace(r,"")):e}))}},34938:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MarkdownLink",{enumerable:!0,get:function(){return c}});var n=r(63658),o=function(e){return e&&e.__esModule?e:{default:e}}(r(67294));var c=function(e){var t=e.children,r=e.href;return o.default.createElement(n.Link,{href:r},t)}},38983:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Paragraph",{enumerable:!0,get:function(){return c}});var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=c?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r(67294));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}var c=function(e){var t=e.children;return n.default.createElement(n.Fragment,null,t)}},28398:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createReactTree",{enumerable:!0,get:function(){return s}});var n=r(47581),o=r(67294),c=r(1449),i=r(42212),a=r(91119);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t,r,u){var p=c.EXTENDED_LOG_FIELDS.registry,d=[];return e.forEach((function(e,c){var y=e.name,m=e.properties,v=e.children,g=void 0===v?[]:v,b=e.uid,h=e.version,O=e.presetUuid,k=(0,i.getWidgetRecord)(y,t)||{},j=k.componentRecord,P=k.fallbackWidget,w=void 0===P?"":P;if(j){var E=j.component,_=j.defaultProps,S=(0,a.mapMarkdownProps)(l({},_,m)),C=f(l({},S),{key:c,"data-widget-name":y,"data-widget-uid":b,"data-widget-version":h,"data-preset-uuid":O});k.rendersTree&&(C.createTree=function(e){return s(e,t,r,u)}),k.withCollectorData&&(C.collectorData=u);var x=((0,i.getWidgetRecord)(w,t)||{}).componentRecord,D=(0,n.withErrorBoundary)(E,null==x?void 0:x.component),T=o.createElement.apply(void 0,[D,C].concat(s(g,t,r,u)));d.push(T)}else r.error(l({},p),"TreeBuilder: widget "+y+" with uid "+b+" for device "+t+" not found in registry")})),d}},64840:function(e,t,r){"use strict";r.r(t),r.d(t,{Strong:function(){return n.c}});var n=r(33389)},33389:function(e,t,r){"use strict";r.d(t,{c:function(){return a}});var n=r(45761),o=r(67294),c=r(94184),i=r.n(c),a=(0,n.A)({styles:{bold:"a2jE8",medium:"b2jE8"}})((function(e){var t=e.children,r=e.className,n=e.styles,c=e.weight,a=void 0===c?"bold":c;return o.createElement("span",{className:i()(n[a],r)},t)}))},18749:function(e,t,r){"use strict";r.r(t),r.d(t,{GeoInfoConsumer:function(){return a},GeoInfoProvider:function(){return c.D},withGeoInfo:function(){return i.W}});var n=r(42739),o=r(67294),c=r(13583),i=r(37664),a=(0,n.o)()((function(e){var t=e.children,r=e.geo;return o.createElement(c.$,null,(function(e){return(0,o.cloneElement)(o.Children.only(t),{geo:r||e})}))}))},13583:function(e,t,r){"use strict";r.d(t,{$:function(){return o},D:function(){return c}});var n=(0,r(67294).createContext)(void 0),o=n.Consumer,c=n.Provider},37664:function(e,t,r){"use strict";r.d(t,{W:function(){return a}});var n=r(87462),o=r(94578),c=r(67294),i=r(13583);function a(e){var t=e.displayName||e.name||"Component",r=function(t){function r(){return t.apply(this,arguments)||this}return(0,o.Z)(r,t),r.prototype.render=function(){var t=this;return c.createElement(i.$,null,(function(r){return c.createElement(e,(0,n.Z)({},t.props,{geo:r}))}))},r}(c.PureComponent);return r.displayName="WithGeoInfo("+t+")",r}},86947:function(e,t,r){"use strict";r.r(t),r.d(t,{BaseLayer:function(){return d},Layer:function(){return d},Overlay:function(){return m}});var n,o=r(15482),c=r(45761),i=r(67294),a={overlays:{},queue:[],removeFromOverlay:function(){},renderOnOverlay:function(){}},u=(0,i.createContext)(a),l=u.Consumer,f=u.Provider,s=r(94578),p=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))||this).state={queue:[],overlays:{}},t.removeFromOverlay=function(e){t.setState((function(t){var r,n=t.overlays;return{queue:t.queue.filter((function(t){return t!==e})),overlays:Object.assign({},n,(r={},r[e]=null,r))}}))},t.renderOnOverlay=function(e){var r=e.id,n=e.node;t.setState((function(e){var t,o=e.overlays,c=e.queue;return{queue:o[r]?c:[].concat(c,[r]),overlays:Object.assign({},o,(t={},t[r]=n,t))}}))},t.refArrived=function(e){var t=document.body;e?n=t.scrollTop:t.scrollTop=n},t}return(0,s.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.Helmet,r=e.Provider,n=e.children,o=e.dataTestId,c=e.styles,a=this.state,u=a.overlays,l=a.queue,f=l.length>0,s=l[0];return i.createElement(r,{value:Object.assign({},this.state,{removeFromOverlay:this.removeFromOverlay,renderOnOverlay:this.renderOnOverlay})},i.createElement("div",{className:f?c.blocked:void 0,"data-test-id":o},n),f&&i.createElement(i.Fragment,null,i.createElement(t,null,i.createElement("body",{className:c.blockedBody})),i.createElement("div",{ref:this.refArrived,className:c.overlay},u[s])))},t}(i.PureComponent),d=(0,c.A)({Helmet:o.Helmet,Provider:f,styles:{blocked:"a3psE",blockedBody:"b3psE",overlay:"c3psE"}})(p),y=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).openOnUpdate=function(){var e=t.props,r=e.children,n=e.id;(0,e.renderOnOverlay)({node:r,id:n})},t}(0,s.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.openOnUpdate()},r.componentDidUpdate=function(){this.openOnUpdate()},r.componentWillUnmount=function(){var e=this.props,t=e.id;(0,e.removeFromOverlay)(t)},r.render=function(){return null},t}(i.PureComponent),m=(0,c.A)({Consumer:l,OverlayController:y})((function(e){var t=e.Consumer,r=e.OverlayController,n=e.children,o=e.id;return i.createElement(t,null,(function(e){var t=e.removeFromOverlay,c=e.renderOnOverlay;return i.createElement(r,{key:o,id:o,removeFromOverlay:t,renderOnOverlay:c},n)}))}))},78527:function(e,t,r){"use strict";r.r(t),r.d(t,{SsrPromiseContext:function(){return n.m},useSsrPromise:function(){return o.S}});var n=r(30802),o=r(50875)},30802:function(e,t,r){"use strict";r.d(t,{m:function(){return n}});var n=r(67294).createContext({})},50875:function(e,t,r){"use strict";r.d(t,{S:function(){return c}});var n=r(67294),o=r(30802);function c(e){var t=(0,n.useContext)(o.m);return(0,n.useMemo)((function(){var r=e.asyncFunc,n=e.criticalErrorCode,o=e.name,c=e.responseFallback,i=t.isFirstServerRender,a=t.meta,u=void 0===a?{}:a,l=t.results,f=void 0===l?[]:l,s=t.requests,p=void 0===s?[]:s;if(i){var d=r(u);return p.find((function(e){return e.name===o}))||p.push({promise:d,name:o,criticalErrorCode:n}),[c,!1]}var y=f.find((function(e){return e.name===o})).response;return"fulfilled"===y.status?[y.value,!0]:[c,!1]}),[])}},30889:function(e,t,r){"use strict";r.r(t),r.d(t,{compiler:function(){return $e},default:function(){return Be}});var n=r(67294),o=r(2793),c=r.n(o),i=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var u={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},l={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},f=["style","script"],s=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,p=/mailto:/i,d=/\n{2,}$/,y=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,m=/^ *> ?/gm,v=/^ {2,}\n/,g=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,b=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,h=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,O=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,k=/^(?:\n *)*\n/,j=/\r\n?/g,P=/^\[\^([^\]]+)](:.*)\n/,w=/^\[\^([^\]]+)]/,E=/\f/g,_=/^\s*?\[(x|\s)\]/,S=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,C=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,x=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,D=/&([a-z]+);/g,T=/^<!--.*?-->/,M=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,A=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,R=/^\{.*\}$/,I=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,L=/^<([^ >]+@[^ >]+)>/,U=/^<([^ >]+:\/[^ >]+)>/,N=/ *\n+$/,W=/(?:^|\n)( *)$/,F=/-([a-z])?/gi,$=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,B=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,q=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,z=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,G=/^\[([^\]]*)\] ?\[([^\]]*)\]/,V=/(\[|\])/g,H=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Z=/\t/g,Y=/^ *\| */,K=/(^ *\||\| *$)/g,Q=/ *$/,X=/^ *:-+: *$/,J=/^ *:-+ *$/,ee=/^ *-+: *$/,te=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,re=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ne=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,oe=/^\\([^0-9A-Za-z\s])/,ce=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ie=/(^\n+|\n+$|\s+$)/g,ae=/^([ \t]*)/,ue=/\\([^0-9A-Z\s])/gi,le=/^( *)((?:[*+-]|\d+\.)) +/,fe=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,se=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,pe=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,de=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,ye=[y,h,b,S,C,x,T,A,fe,se,$,B];function me(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ve(e){return ee.test(e)?"right":X.test(e)?"center":J.test(e)?"left":null}function ge(e,t,r){var n=r.inTable;r.inTable=!0;var o=t(e.trim(),r);r.inTable=n;var c=[[]];return o.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==o.length-1&&c.push([]):("text"===e.type&&(null==o[t+1]||"tableSeparator"===o[t+1].type)&&(e.content=e.content.replace(Q,"")),c[c.length-1].push(e))})),c}function be(e,t,r){r.inline=!0;var n=ge(e[1],t,r),o=function(e){return e.replace(K,"").split("|").map(ve)}(e[2]),c=function(e,t,r){return e.trim().split("\n").map((function(e){return ge(e,t,r)}))}(e[3],t,r);return r.inline=!1,{align:o,cells:c,header:n,type:"table"}}function he(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Oe(e){function t(n,o){for(var c=[],i="";n;)for(var a=0;a<r.length;){var u=r[a],l=e[u],f=l.match(n,o,i);if(f){var s=f[0];n=n.substring(s.length);var p=l.parse(f,t,o);null==p.type&&(p.type=u),c.push(p),i=s;break}a++}return c}var r=Object.keys(e);return r.sort((function(t,r){var n=e[t].order,o=e[r].order;return n===o?t<r?-1:1:n-o})),function(e,r){return t(function(e){return e.replace(j,"\n").replace(E,"").replace(Z,"    ")}(e),r)}}function ke(e){return function(t,r){return r.inline?e.exec(t):null}}function je(e){return function(t,r){return r.inline||r.simple?e.exec(t):null}}function Pe(e){return function(t,r){return r.inline||r.simple?null:e.exec(t)}}function we(e){return function(t){return e.exec(t)}}function Ee(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function _e(e){return e.replace(ue,"$1")}function Se(e,t,r){var n=r.inline||!1,o=r.simple||!1;r.inline=!0,r.simple=!0;var c=e(t,r);return r.inline=n,r.simple=o,c}function Ce(e,t,r){var n=r.inline||!1,o=r.simple||!1;r.inline=!1,r.simple=!0;var c=e(t,r);return r.inline=n,r.simple=o,c}function xe(e,t,r){return r.inline=!1,e(t+"\n\n",r)}function De(e,t,r){return{content:Se(t,e[1],r)}}function Te(){return{}}function Me(){return null}function Ae(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}function Re(e,t,r){for(var n=e,o=t.split(".");o.length&&void 0!==(n=n[o[0]]);)o.shift();return n||r}function Ie(e,t){var r=Re(t,e);return r?"function"==typeof r||"object"===(void 0===r?"undefined":a(r))&&"render"in r?r:Re(t,e+".component",e):e}var Le=1,Ue=2,Ne=3,We=4,Fe=5;function $e(e,t){function r(e,r){for(var n=Re(t.overrides,e+".props",{}),o=arguments.length,c=Array(o>2?o-2:0),a=2;a<o;a++)c[a-2]=arguments[a];return j.apply(void 0,[Ie(e,t.overrides),i({},r,n,{className:Ae(r&&r.className,n.className)||void 0})].concat(c))}function o(e){var n=!1;t.forceInline?n=!0:!t.forceBlock&&(n=!1===H.test(e));var o=X(Q(n?e:e.replace(ie,"")+"\n\n",{inline:n})),c=void 0;return o.length>1?c=r(n?"span":"div",{key:"outer"},o):1===o.length?"string"==typeof(c=o[0])&&(c=r("span",{key:"outer"},c)):c=r("span",{key:"outer"}),c}function a(e){var t=e.match(s);return t?t.reduce((function(e,t,r){var i=t.indexOf("=");if(-1!==i){var a=function(e){return-1!==e.indexOf("-")&&null===e.match(M)&&(e=e.replace(F,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,i)).trim(),l=c()(t.slice(i+1).trim()),f=u[a]||a,s=e[f]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var r=t.slice(0,t.indexOf(":")),n=r.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[n]=t.slice(r.length+1).trim(),e}),{}):"href"===e?Ee(t):(t.match(R)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(a,l);(x.test(s)||A.test(s))&&(e[f]=n.cloneElement(o(s.trim()),{key:r}))}else"style"!==t&&(e[u[t]||t]=!0);return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||me,t.namedCodesToUnicode=t.namedCodesToUnicode?i({},l,t.namedCodesToUnicode):l;var j=t.createElement||n.createElement;var E=[],Z={},K={blockQuote:{match:Pe(y),order:Ue,parse:function(e,t,r){return{content:t(e[0].replace(m,""),r)}},react:function(e,t,n){return r("blockquote",{key:n.key},t(e.content,n))}},breakLine:{match:we(v),order:Ue,parse:Te,react:function(e,t,n){return r("br",{key:n.key})}},breakThematic:{match:Pe(g),order:Ue,parse:Te,react:function(e,t,n){return r("hr",{key:n.key})}},codeBlock:{match:Pe(h),order:Le,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,n){return r("pre",{key:n.key},r("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Pe(b),order:Le,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:je(O),order:We,parse:function(e){return{content:e[2]}},react:function(e,t,n){return r("code",{key:n.key},e.content)}},footnote:{match:Pe(P),order:Le,parse:function(e){return E.push({footnote:e[2],identifier:e[1]}),{}},react:Me},footnoteReference:{match:ke(w),order:Ue,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,n){return r("a",{key:n.key,href:Ee(e.target)},r("sup",{key:n.key},e.content))}},gfmTask:{match:ke(_),order:Ue,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,n){return r("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})}},heading:{match:Pe(S),order:Ue,parse:function(e,r,n){return{content:Se(r,e[2],n),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,n){return r("h"+e.level,{id:e.id,key:n.key},t(e.content,n))}},headingSetext:{match:Pe(C),order:Le,parse:function(e,t,r){return{content:Se(t,e[1],r),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:we(T),order:Ue,parse:function(){return{}},react:Me},image:{match:je(de),order:Ue,parse:function(e){return{alt:e[1],target:_e(e[2]),title:e[3]}},react:function(e,t,n){return r("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:Ee(e.target)})}},link:{match:ke(pe),order:We,parse:function(e,t,r){return{content:Ce(t,e[1],r),target:_e(e[2]),title:e[3]}},react:function(e,t,n){return r("a",{key:n.key,href:Ee(e.target),title:e.title},t(e.content,n))}},linkAngleBraceStyleDetector:{match:ke(U),order:Le,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:ke(I),order:Le,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:ke(L),order:Le,parse:function(e){var t=e[1],r=e[1];return p.test(r)||(r="mailto:"+r),{content:[{content:t.replace("mailto:",""),type:"text"}],target:r,type:"link"}}},list:{match:function(e,t,r){var n=W.exec(r),o=t._list||!t.inline;return n&&o?(e=n[1]+e,se.exec(e)):null},order:Ue,parse:function(e,t,r){var n=e[2],o=n.length>1,c=o?+n:void 0,i=e[0].replace(d,"\n").match(fe),a=!1,u=i.map((function(e,n){var o=le.exec(e)[0].length,c=new RegExp("^ {1,"+o+"}","gm"),u=e.replace(c,"").replace(le,""),l=n===i.length-1,f=-1!==u.indexOf("\n\n")||l&&a;a=f;var s,p=r.inline,d=r._list;r._list=!0,f?(r.inline=!1,s=u.replace(N,"\n\n")):(r.inline=!0,s=u.replace(N,""));var y=t(s,r);return r.inline=p,r._list=d,y}));return{items:u,ordered:o,start:c}},react:function(e,t,n){return r(e.ordered?"ol":"ul",{key:n.key,start:e.start},e.items.map((function(e,o){return r("li",{key:o},t(e,n))})))}},newlineCoalescer:{match:Pe(k),order:We,parse:Te,react:function(){return"\n"}},paragraph:{match:Pe(B),order:We,parse:De,react:function(e,t,n){return r("p",{key:n.key},t(e.content,n))}},ref:{match:ke(q),order:Le,parse:function(e){return Z[e[1]]={target:e[2],title:e[4]},{}},react:Me},refImage:{match:je(z),order:Le,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,n){return r("img",{key:n.key,alt:e.alt,src:Ee(Z[e.ref].target),title:Z[e.ref].title})}},refLink:{match:ke(G),order:Le,parse:function(e,t,r){return{content:t(e[1],r),fallbackContent:t(e[0].replace(V,"\\$1"),r),ref:e[2]}},react:function(e,t,n){return Z[e.ref]?r("a",{key:n.key,href:Ee(Z[e.ref].target),title:Z[e.ref].title},t(e.content,n)):r("span",{key:n.key},t(e.fallbackContent,n))}},table:{match:Pe($),order:Ue,parse:be,react:function(e,t,n){return r("table",{key:n.key},r("thead",null,r("tr",null,e.header.map((function(o,c){return r("th",{key:c,style:he(e,c)},t(o,n))})))),r("tbody",null,e.cells.map((function(o,c){return r("tr",{key:c},o.map((function(o,c){return r("td",{key:c,style:he(e,c)},t(o,n))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?Y.exec(e):null},order:Ue,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:we(ce),order:Fe,parse:function(e){return{content:e[0].replace(D,(function(e,r){return t.namedCodesToUnicode[r]?t.namedCodesToUnicode[r]:e}))}},react:function(e){return e.content}},textBolded:{match:je(te),order:Ne,parse:function(e,t,r){return{content:t(e[2],r)}},react:function(e,t,n){return r("strong",{key:n.key},t(e.content,n))}},textEmphasized:{match:je(re),order:We,parse:function(e,t,r){return{content:t(e[2],r)}},react:function(e,t,n){return r("em",{key:n.key},t(e.content,n))}},textEscaped:{match:je(oe),order:Ue,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:je(ne),order:We,parse:De,react:function(e,t,n){return r("del",{key:n.key},t(e.content,n))}}};!0!==t.disableParsingRawHTML&&(K.htmlBlock={match:we(x),order:Ue,parse:function(e,t,r){var n=e[3].match(ae)[1],o=new RegExp("^"+n,"gm"),c=e[3].replace(o,""),i=function(e){return ye.some((function(t){return t.test(e)}))}(c)?xe:Se,u=e[1].toLowerCase(),l=-1!==f.indexOf(u);return{attrs:a(e[2]),content:l?e[3]:i(t,c,r),noInnerParse:l,tag:l?u:e[1]}},react:function(e,t,n){return r(e.tag,i({key:n.key},e.attrs),e.noInnerParse?e.content:t(e.content,n))}},K.htmlSelfClosing={match:we(A),order:Ue,parse:function(e){return{attrs:a(e[2]||""),tag:e[1]}},react:function(e,t,n){return r(e.tag,i({},e.attrs,{key:n.key}))}});var Q=Oe(K),X=function(e){return function t(r,n){if(n=n||{},Array.isArray(r)){for(var o=n.key,c=[],i=!1,a=0;a<r.length;a++){n.key=a;var u=t(r[a],n),l="string"==typeof u;l&&i?c[c.length-1]+=u:c.push(u),i=l}return n.key=o,c}return e(r,t,n)}}(function(e){return function(t,r,n){return e[t.type].react(t,r,n)}}(K)),J=o(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return E.length&&J.props.children.push(r("footer",{key:"footer"},E.map((function(e){return r("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,X(Q(e.footnote,{inline:!0})))})))),J}function Be(e){var t=e.children,r=e.options,o=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["children","options"]);return n.cloneElement($e(t,r),o)}},27418:function(e){"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var c,i,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var l in c=Object(arguments[u]))r.call(c,l)&&(a[l]=c[l]);if(t){i=t(c);for(var f=0;f<i.length;f++)n.call(c,i[f])&&(a[i[f]]=c[i[f]])}}return a}},92703:function(e,t,r){"use strict";var n=r(50414);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,c,i){if(i!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:o};return r.PropTypes=r,r}},45697:function(e,t,r){e.exports=r(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},83524:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=r(67294),c=n(o),i=n(r(96774));function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,f=[];function s(){l=e(f.map((function(e){return e.props}))),p.canUseDOM?t(l):r&&(l=r(l))}var p=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,f=[],e};var a=o.prototype;return a.shouldComponentUpdate=function(e){return!i(e,this.props)},a.componentWillMount=function(){f.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=f.indexOf(this);f.splice(e,1),s()},a.render=function(){return c.createElement(n,this.props)},o}(o.Component);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(p,"canUseDOM",u),p}}},96774:function(e){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var c=Object.keys(e),i=Object.keys(t);if(c.length!==i.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),u=0;u<c.length;u++){var l=c[u];if(!a(l))return!1;var f=e[l],s=t[l];if(!1===(o=r?r.call(n,f,s,l):void 0)||void 0===o&&f!==s)return!1}return!0}},2793:function(e){var t=/[\'\"]/;e.exports=function(e){return e?(t.test(e.charAt(0))&&(e=e.substr(1)),t.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}}}]);
//# sourceMappingURL=25478.6bed9706.es5.js.map