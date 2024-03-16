(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[93169,38749,61495,47918,39301,19786,45453,69111,23331,2987,75557,13482,29721,33812,24006,74855,1175,19020,37511,41934,40449,27730,59745,29990,23287],{93121:function(t,e,n){"use strict";n.d(e,{a:function(){return c}});var r=n(67294),o=n(17998),i=n.n(o),a="loader__component_19o1e";n(91197);var c=function(t){var e=t.className,n=t.dataTestId;return r.createElement("div",{className:i()(a,e),"data-test-id":n},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},32011:function(t,e,n){"use strict";n.d(e,{R0:function(){return r},Xu:function(){return o},wn:function(){return i},nk:function(){return a}});var r=4,o=8,i=!0,a=["primary","filled","transparent","secondary","outlined","tertiary","link","ghost"];a.filter((function(t){return!["filled","outlined","transparent"].includes(t)}))},12044:function(t,e,n){"use strict";n.d(e,{z:function(){return w}});var r=n(45761),o=n(67294),i=n(8668),a=n.n(i),c=n(35878),l=n(85038),u=n(93121),s=function(){return s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},s.apply(this,arguments)};function d(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}var f={component:"button__component_1mgd7",focused:"button__focused_1mgd7",loading:"button__loading_1mgd7",text:"button__text_1mgd7",addons:"button__addons_1mgd7",stretchText:"button__stretchText_1mgd7",loader:"button__loader_1mgd7",xxs:"button__xxs_1mgd7",iconOnly:"button__iconOnly_1mgd7",xs:"button__xs_1mgd7",s:"button__s_1mgd7",m:"button__m_1mgd7",l:"button__l_1mgd7",xl:"button__xl_1mgd7",withRightAddons:"button__withRightAddons_1mgd7",ghost:"button__ghost_1mgd7",withLeftAddons:"button__withLeftAddons_1mgd7",link:"button__link_1mgd7",block:"button__block_1mgd7",nowrap:"button__nowrap_1mgd7"};n(8478);n(29203);n(2991);var m={default:{primary:"button__primary_zsrtz",secondary:"button__secondary_zsrtz",outlined:"button__outlined_zsrtz",tertiary:"button__tertiary_zsrtz",filled:"button__filled_zsrtz",transparent:"button__transparent_zsrtz",link:"button__link_zsrtz",ghost:"button__ghost_zsrtz",component:"button__component_zsrtz",loading:"button__loading_zsrtz"},inverted:{primary:"button__primary_oiqbk",secondary:"button__secondary_oiqbk",outlined:"button__outlined_oiqbk",tertiary:"button__tertiary_oiqbk",filled:"button__filled_oiqbk",transparent:"button__transparent_oiqbk",link:"button__link_oiqbk",ghost:"button__ghost_oiqbk",component:"button__component_oiqbk",loading:"button__loading_oiqbk"}},h=o.forwardRef((function(t,e){var n,r,i,h=t.children,_=t.view,p=void 0===_?"secondary":_,g=t.leftAddons,v=t.rightAddons,b=t.size,y=void 0===b?"m":b,E=t.block,w=void 0!==E&&E,O=t.className,k=t.dataTestId,C=t.href,z=t.loading,N=void 0!==z&&z,A=t.nowrap,x=void 0!==A&&A,S=t.colors,L=void 0===S?"default":S,T=t.Component,W=void 0===T?C?"a":"button":T,R=d(t,["children","view","leftAddons","rightAddons","size","block","className","dataTestId","href","loading","nowrap","colors","Component"]);["outlined","filled","transparent"].includes(p);var j=(0,o.useRef)(null),B=(0,l.useFocus)(j,"keyboard")[0],M=(0,o.useState)(!0),G=M[0],q=M[1],I=(0,o.useRef)(0),D=N||!G,P=!h,V={className:a()(f.component,f[p],f[y],m[L].component,m[L][p],(n={},n[f.focused]=B,n[f.block]=w,n[f.iconOnly]=P,n[f.loading]=D,n[f.withRightAddons]=Boolean(v)&&!P,n[f.withLeftAddons]=Boolean(g)&&!P,n[m[L].loading]=D,n),O),"data-test-id":k||null},F=o.createElement(o.Fragment,null,g&&o.createElement("span",{className:f.addons},g),h&&o.createElement("span",{className:a()(f.text,(r={},r[f.nowrap]=x,r[f.stretchText]=!(g||v),r))},h),D&&o.createElement(u.a,{className:f.loader}),v&&o.createElement("span",{className:f.addons},v));if((0,o.useEffect)((function(){N&&(q(!1),I.current=window.setTimeout((function(){q(!0)}),500))}),[N]),(0,o.useEffect)((function(){return function(){window.clearTimeout(I.current)}}),[]),C){var Z=R.target,H=((i={})["string"==typeof W?"href":"to"]=C,i);return o.createElement(W,s({rel:"_blank"===Z?"noreferrer noopener":void 0},V,R,H,{ref:(0,c.default)([j,e])}),F)}var U=R,$=U.disabled,K=U.type,X=void 0===K?"button":K,J=d(U,["disabled","type"]);return o.createElement(W,s({},V,J,{type:X,disabled:$||D,ref:(0,c.default)([j,e])}),F)}));h.defaultProps={view:"secondary",size:"m",block:!1,loading:!1,nowrap:!1};var _=n(87462),p=n(63366),g=n(94184),v=n.n(g),b=n(13713),y=n(32011),E=["CoreButton","block","borderRadius","children","className","colors","hasAnimation","innerClassName","loading","nowrap","size","styles","view","leftAddons","rightAddons"],w=(0,r.A)({CoreButton:h,styles:{external:"a3SCh",deprecatedBorderRadius:"b3SCh",hasAnimation:"c3SCh",container:"d3SCh"}},{priorityStyler:!0})((function(t){var e,n,r=t.CoreButton,i=t.block,a=void 0!==i&&i,c=t.borderRadius,l=void 0===c?y.Xu:c,u=t.children,s=t.className,d=t.colors,f=void 0===d?"default":d,m=t.hasAnimation,h=void 0===m?y.wn:m,g=t.innerClassName,w=t.loading,O=void 0!==w&&w,k=t.nowrap,C=void 0!==k&&k,z=t.size,N=void 0===z?"m":z,A=t.styles,x=t.view,S=void 0===x?"secondary":x,L=t.leftAddons,T=t.rightAddons,W=(0,p.Z)(t,E),R=(0,b.f8)(u),j=R.children,B=R.leftAddons,M=R.rightAddons,G=o.createElement(r,(0,_.Z)({block:a,className:v()(A.external,(e={},e[A.deprecatedBorderRadius]=l===y.R0,e[A.hasAnimation]=h,e),g),colors:f,leftAddons:B||L,loading:O,nowrap:C,rightAddons:M||T,size:N,view:S},W),j.length>0&&j);return s?o.createElement("div",{className:v()((n={},n[A.container]=!a,n),s)},G):G}))},87017:function(t,e,n){"use strict";n.r(e),n.d(e,{CardCarousel:function(){return P}});var r=n(83025),o=n(99511),i=n(12044),a=n(88959),c=n(49730),l=n(45761),u=n(90741),s=n(11401),d=n(80090),f=n(13171),m=n(1672),h=n(67294),_=n(94184),p=n.n(_),g="a2llO",v="b2llO",b="c2llO",y="d2llO",E="e2llO",w="f2llO",O="g2llO",k="h2llO",C="j2llO",z="k2llO",N="l2llO",A="m2llO",x=n(40307),S=function(t){var e,n=t.children,r=t.className,o=t.dataTestId,a=t.onClick,c=t.visible;return h.createElement(i.z,{"data-test-id":o,innerClassName:p()(v,y,(e={},e[E]=c,e),r),onClick:a,view:"ghost"},n)},L=function(t){return h.createElement(S,t,h.createElement(x.D,{height:14,width:20}))},T=n(99997),W=function(t){return h.createElement(S,t,h.createElement(T.E,{height:14,width:20}))},R=n(87462),j=n(23493),B=n.n(j),M=function(t,e,n){return t.reduce((function(t,r){var o=t+r;return o>=e?t:o+n}),0)},G=n(56275),q={cardSpacing:0,currentScroll:0,scrollWidth:0,cardWidths:[],clientWidth:0,canGoRight:!1,canGoLeft:!1},I=function(t,e){switch(e.type){case"reset":return Object.assign({},q,e.payload);case"setscroll":return Object.assign({},t,{currentScroll:e.payload,canGoLeft:e.payload>0,canGoRight:e.payload+5<t.scrollWidth-t.clientWidth});default:throw new Error}},D=n(42899),P=(0,l.A)({config:{animation:{cubicBezier:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",duration:1},card:{spacing:25,containerWidth:1140}},styles:{layout:"a298M",dark:"b298M",light:"c298M",transparent:"d298M",colFlex:"e298M",external:"f298M",desktop:"g298M",arrowContainer:"h298M",gridContainer:"i298M"},Layout:r.c,Link:s.r,Text:a.x,Grid:o.r,Button:i.z,MoveableContent:c.k,FontStyreneText:m.J,NavContainer:function(t){var e=t.canGoLeft,n=t.canGoRight,r=t.children,o=t.dataTestId,i=void 0===o?"Carousel":o,a=t.onLeft,c=t.onRight;return h.createElement("div",{className:g},h.createElement(L,{className:p()(O,b),dataTestId:i+"-NavButton-Left",onClick:a,visible:e}),e&&h.createElement("div",{className:C},h.createElement("div",{className:p()(k,N)})),r,h.createElement(W,{className:p()(w,b),dataTestId:i+"-NavButton-Right",onClick:c,visible:n}),n&&h.createElement("div",{className:z},h.createElement("div",{className:p()(k,A)})))},calculateCardWidths:function(t,e,n){return h.Children.map(t,(function(t){if(!(0,h.isValidElement)(t))return 0;var r=t.props.proportion;return(e-n*(r-1))/r}))||[]},renderCards:D.U,sendEvent:u.q,mapSpacerVerticalToStyler:d.N,parseNewLines:f.z})((function(t){var e=t.FontStyreneText,n=t.Grid,r=t.Layout,o=t.NavContainer,i=t.Link,a=t.Text,c=t.calculateCardWidths,l=t.children,u=t.config.card,s=u.containerWidth,d=u.spacing,f=t.dataTestId,m=t.headerBottomPadding,_=void 0===m?32:m,g=t.headingText,v=t.subheadingText,b=t.headingUrl,y=t.headingColor,E=void 0===y?"light":y,w=t.headingVariant,O=void 0===w?"main":w,k=t.id,C=t.layoutWidth,z=void 0===C?s:C,N=t.parseNewLines,A=t.mapSpacerVerticalToStyler,x=t.fullWidth,S=t.renderCards,L=t.styles,T=t.theme,W=void 0===T?"light":T,j=t.analytics,D=t.sendEvent,P=t.className,V=(0,h.useReducer)(I,q),F=V[0],Z=V[1],H=F.canGoLeft,U=F.canGoRight,$=(0,h.useRef)(null),K=(0,h.useMemo)((function(){return c(l,z,d)}),[c,z,d]),X=(0,h.useMemo)((function(){return K.reduce((function(t,e){return t+e+d}),0)-d}),[K,d]);(0,G.g)($,l),(0,h.useEffect)((function(){var t=B()((function(){var t,e=null==(t=$.current)?void 0:t.scrollLeft;Z({type:"setscroll",payload:null!=e?e:0})}),50);if($.current){var e=$.current;e.addEventListener("scroll",t,!0);var n=$.current.offsetWidth;return Z({type:"reset",payload:{clientWidth:n,scrollWidth:X,cardWidths:K,cardSpacing:d,canGoRight:X>n}}),function(){e.removeEventListener("scroll",t)}}return function(){}}),[K,d,X]),(0,h.useEffect)((function(){if($.current&&0===F.clientWidth&&"ResizeObserver"in window){var t=new ResizeObserver((function(t){t.forEach((function(t){Z({type:"reset",payload:Object.assign({},F,{scrollWidth:X,cardSpacing:d,cardWidths:K,clientWidth:t.target.clientWidth,canGoRight:X>t.target.clientWidth})})}))}));return t.observe($.current),function(){$.current&&t.unobserve($.current)}}}),[K,X,d,F]);var J=(0,h.useCallback)((function(t){D(j),$.current&&$.current.scrollTo({top:0,left:t,behavior:"smooth"})}),[j,D]),Y=h.createElement(o,(0,R.Z)({},t,{canGoLeft:H,canGoRight:U,dataTestId:f,onLeft:function(){return J(function(t){var e=t.cardSpacing,n=t.cardWidths,r=t.clientWidth,o=t.currentScroll,i=M(n,o,e)-r-e;return i<=0?0:i}(F))},onRight:function(){return J(function(t){var e=t.cardSpacing,n=t.cardWidths,r=t.clientWidth,o=t.currentScroll,i=t.scrollWidth,a=M(n,o,e)+r+e;return a>=i-r?i-r:a}(F))}}),h.createElement("div",{ref:$,className:L.gridContainer},h.createElement(n,{classNames:{col:p()(L.external,L.colFlex)},columnsWidth:K,justify:"start"},S(t,K)))),Q=N(g),tt=h.createElement(a,{styler:{marginTop:0,marginBottom:v?16:A(_)},tag:"h2",theme:E,view:"medium"},b?h.createElement(i,{href:b},Q):Q);return h.createElement("div",{className:p()(L.layout,L[W],P),"data-test-id":f,id:k},h.createElement(r,{hasPadding:!1},g&&"main"===O&&tt,g&&"fancy"===O&&h.createElement(e,null,tt),v&&h.createElement(a,{styler:{marginTop:0,marginBottom:32},tag:"div",view:"primary-medium"},v),!x&&Y),x&&Y)}))},90741:function(t,e,n){"use strict";n.d(e,{q:function(){return l}});var r=n(63366),o=n(41609),i=n.n(o),a=function(t){return!i()(t)},c=["ymEvent"],l=function(t){void 0===t&&(t={});var e,n=window,o=t,i=o.ymEvent,l=(0,r.Z)(o,c);if((e=n)&&e.dataLayer&&a(l)){var u=Object.assign({path:n.location.pathname},l);n.dataLayer.push(u)}(function(t){return!!t&&"function"==typeof t.ym})(n)&&a(i)&&[i].flat().forEach((function(t){var e=t.method,r=void 0===e?"reachGoal":e,o=t.params;n.ym.apply(n,[""+(window||self).__CLIENT_ENV__.CUSTOM_YTM_ID,r].concat([o].flat()))}))}},40307:function(t,e,n){"use strict";n.d(e,{D:function(){return i}});var r=n(87462),o=n(67294),i=function(t){return o.createElement("svg",(0,r.Z)({height:"14",viewBox:"0 0 20 14",width:"20"},t),o.createElement("path",{d:"M.272 6.342L6.224.391a.93.93 0 011.315 1.315L3.175 6.07H19.07a.93.93 0 010 1.86H3.175l4.364 4.364a.93.93 0 11-1.315 1.315L.272 7.658a.93.93 0 010-1.316z",fill:"currentColor"}))}},99997:function(t,e,n){"use strict";n.d(e,{E:function(){return i}});var r=n(87462),o=n(67294),i=function(t){return o.createElement("svg",(0,r.Z)({height:"14",viewBox:"0 0 20 14",width:"20"},t),o.createElement("path",{d:"M19.728 6.342L13.776.391a.93.93 0 00-1.315 1.315l4.364 4.364H.93a.93.93 0 000 1.86h15.895l-4.364 4.364a.93.93 0 101.315 1.315l5.952-5.951a.93.93 0 000-1.316z",fill:"currentColor"}))}},13713:function(t,e,n){"use strict";n.d(e,{$9:function(){return o},Ww:function(){return i},tA:function(){return a},f8:function(){return c},sj:function(){return l}});var r=n(67294);function o(t){return Boolean("object"==typeof t&&null!==t&&"NamedContainer"===t.props.is&&t.props.name)}function i(t){return r.Children.toArray(t).reduce((function(t,e){if(o(e)){if("children"!==e.props.name){var n;return Object.assign({},t,((n={})[e.props.name]=e.props.children,n))}}else t.children.push(e);return t}),{children:[]})}function a(t){return r.Children.toArray(t).reduce((function(t,e){var n;return o(e)?Object.assign({},t,((n={})[e.props.name]=e.props.children,n)):t}),{})}function c(t){return(0,r.useMemo)((function(){return i(t)}),[t])}function l(t){return(0,r.useMemo)((function(){return a(t)}),[t])}},29203:function(t,e,n){"use strict";n.r(e)},8478:function(t,e,n){"use strict";n.r(e)},2991:function(t,e,n){"use strict";n.r(e)},91197:function(t,e,n){"use strict";n.r(e)},69590:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(t[l],a[l]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(l=c;0!=l--;)if(t[l]!==a[l])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof a.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof a.toString)return t.toString()===a.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(e&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!i(t[u[l]],a[u[l]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(t){if((t.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw t}}},35878:function(t,e,n){"use strict";n.r(e),e.default=function(t){return function(e){t.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))}}}}]);
//# sourceMappingURL=CardCarouselV2Desktop.4080e6ec.es5.js.map