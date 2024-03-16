"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[27630,38749,47918,19786,45453,69111,23331,2987,75557,13482,29721,33812,74855,1175,19020,37511,41934,40449],{92084:function(e,r,n){n.r(r),n.d(r,{CpasCarouselPanel:function(){return w}});var t=n(45761),u=n(83025),c=n(87462),l=n(63366),a=n(67294),o=n(94184),i=n.n(o),s=n(47689),f=n(43002),d="a2lV-",v="b2lV-",b="c2lV-",m="d2lV-",h="e2lV-",C=["direction","disabled"],p=n(23493),E=n.n(p),y=n(13713),_=["header"],w=(0,t.A)({Layout:u.c,ScrollSelector:function(e){var r,n,t=e.direction,u=void 0===t?"forward":t,o=e.disabled,p=void 0!==o&&o,E=(0,l.Z)(e,C);return a.createElement("button",(0,c.Z)({className:h,disabled:p},E),(n=i()(d,v,(r={},r[m]=p,r[b]=!p,r)),{forward:a.createElement(f.jG,{className:n}),back:a.createElement(s.ye,{className:n})})[u])},styles:{carouselHeaderContainer:"a15lT",card:"b15lT",carouselNavigation:"c15lT",scrollableContainer:"d15lT",carouselContentContainer:"e15lT",withoutTransition:"f15lT"}})((function(e){var r=e.Layout,n=e.ScrollSelector,t=e.autoplay,u=e.className,c=e.styles,o=function(e){var r,n=e.autoplay,t=e.children,u=e.styles,c=(0,a.useRef)(null),o=(0,a.useRef)(null),i=(0,a.useRef)(null),s=(0,a.useRef)(null),f=(0,a.useRef)(null),d=(0,a.useRef)({}),v=(0,a.useRef)(0),b=(0,a.useRef)(0),m=(0,a.useRef)(0),h=(0,a.useRef)("1"),C=(0,a.useState)(0),p=C[0],w=C[1],R=(0,a.useState)(n),g=R[0],N=R[1],L=(0,a.useState)(!0),j=L[0],O=L[1],A=(0,a.useState)(!1),k=A[0],M=A[1],S=(0,y.sj)(t),T=S.header,B=(0,l.Z)(S,_),D=(0,a.useCallback)((function(e){var r=Object.entries(d.current).reduce((function(r,n){var t=n[0],u=n[1];return Math.abs(e)>=u?t:r}),h.current);r!==h.current&&(h.current=r)}),[]),H=(0,a.useCallback)((function(){"1"===h.current&&(O(!0),M(!1)),"1"!==h.current&&m.current<v.current&&(O(!1),M(!1)),Math.abs(m.current)>=v.current&&M(!0)}),[]),V=(0,a.useCallback)((function(e){var r;m.current=e,null==(r=o.current)||r.scroll({left:e,behavior:"smooth"})}),[]),W=(0,a.useCallback)(E()((function(e){if("forward"===e){if(v.current-Math.abs(m.current-b.current)<b.current)return void V(m.current-(v.current-Math.abs(m.current)));if(m.current===v.current)return;V(d.current[Number(h.current)+1])}else if("back"===e){if(1===Number(h.current))return;V(d.current[Number(h.current)-1])}}),500),[V]),Z=(0,a.useMemo)((function(){return Object.entries(B).map((function(e,r){var n=e[0],t=e[1];return n.includes("carouselCard")?a.createElement("div",{key:n,ref:0===r?i:void 0,className:u.card},t):null}))}),[B,u.card]);return(0,a.useEffect)((function(){var e;null==(e=o.current)||e.addEventListener("scroll",(function(){var e,r;m.current=(null==(e=o.current)?void 0:e.scrollLeft)||0,D((null==(r=o.current)?void 0:r.scrollLeft)||0),H()}),!1)}),[D,H,u.withoutTransition]),(0,a.useEffect)((function(){var e,r,n=(null==(e=c.current)||null==(r=e.childNodes[0])?void 0:r.childNodes[0]).getBoundingClientRect().left;w(n)}),[c]),(0,a.useEffect)((function(){var e=0;setTimeout((function(){var r,n,t;e=(null==(r=i.current)?void 0:r.clientWidth)||0,b.current=e+24,d.current=Object.entries(B).reduce((function(e,r,n){var t;return Object.assign({},e,((t={})[n+1]=n*b.current,t))}),{}),v.current=((null==(n=s.current)?void 0:n.scrollWidth)||0)-((null==(t=o.current)?void 0:t.offsetWidth)||0)+2*p}))}),[B,null==(r=i.current)?void 0:r.clientWidth,p,u.withoutTransition]),(0,a.useEffect)((function(){return g&&(f.current=setInterval((function(){Math.abs(m.current)+p<v.current&&V(m.current+.5)}),20)),function(){return clearInterval(f.current)}}),[g,p,V]),{arrowsHandler:W,backArrowCondition:j,carouselContentContainerRef:s,forwardarrowCondition:k,header:T,layoutRef:c,renderCards:Z,scrollableContainerRef:o,setAutoplayCondition:N}}(e),i=o.arrowsHandler,s=o.backArrowCondition,f=o.carouselContentContainerRef,d=o.forwardarrowCondition,v=o.header,b=o.layoutRef,m=o.renderCards,h=o.scrollableContainerRef,C=o.setAutoplayCondition;return a.createElement("section",{className:u,onMouseOut:function(){t&&C(!0)},onMouseOver:function(){C(!1)}},a.createElement("div",{ref:b},a.createElement(r,null,a.createElement("div",{className:c.carouselHeaderContainer},a.createElement("div",null,v),a.createElement("div",{className:c.carouselNavigation},a.createElement(n,{direction:"back",disabled:s,onClick:function(){return i("back")}}),a.createElement(n,{disabled:d,onClick:function(){return i("forward")}}))))),a.createElement("div",{ref:h,className:c.scrollableContainer},a.createElement("div",{ref:f,className:c.carouselContentContainer},m)))}))},47689:function(e,r,n){var t,u=n(48461),c=(t=n(67294))&&"object"==typeof t&&"default"in t?t.default:t,l=function(e){return c.createElement("svg",u.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),c.createElement("path",{d:"M15 22L5 12 15 2l2.5 2.5L10 12l7.5 7.5L15 22z",fillRule:"evenodd",clipRule:"evenodd"}))};r.ye=l},43002:function(e,r,n){var t,u=n(48461),c=(t=n(67294))&&"object"==typeof t&&"default"in t?t.default:t,l=function(e){return c.createElement("svg",u.__assign({role:"img",focusable:"false",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},e),c.createElement("path",{d:"M9 2l10 10L9 22l-2.5-2.5L14 12 6.5 4.5 9 2z",fillRule:"evenodd",clipRule:"evenodd"}))};r.jG=l},48461:function(e,r){r.__assign=function(){return r.__assign=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var u in r=arguments[n])Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u]);return e},r.__assign.apply(this,arguments)}},13713:function(e,r,n){n.d(r,{$9:function(){return u},Ww:function(){return c},tA:function(){return l},f8:function(){return a},sj:function(){return o}});var t=n(67294);function u(e){return Boolean("object"==typeof e&&null!==e&&"NamedContainer"===e.props.is&&e.props.name)}function c(e){return t.Children.toArray(e).reduce((function(e,r){if(u(r)){if("children"!==r.props.name){var n;return Object.assign({},e,((n={})[r.props.name]=r.props.children,n))}}else e.children.push(r);return e}),{children:[]})}function l(e){return t.Children.toArray(e).reduce((function(e,r){var n;return u(r)?Object.assign({},e,((n={})[r.props.name]=r.props.children,n)):e}),{})}function a(e){return(0,t.useMemo)((function(){return c(e)}),[e])}function o(e){return(0,t.useMemo)((function(){return l(e)}),[e])}}}]);
//# sourceMappingURL=ExperimentalCpasCarouselPanel.144bd0f0.es5.js.map