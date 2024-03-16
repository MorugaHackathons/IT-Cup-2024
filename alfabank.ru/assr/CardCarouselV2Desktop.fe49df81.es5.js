"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[93169],{89237:function(e,t,n){n.r(t),n.d(t,{CardCarousel:function(){return H}});var r=n(23975),a=n(99511),i=n(43424),c=n(90383),l=n(49730),o=n(45761),d=n(26546),s=n(50085),u=n(92209),h=n(17468),f=n(43110),m=n(67294),v=n(94184),g=n.n(v),p="a2llO",E="b2llO",y="c2llO",L="d2llO",C="e2llO",W="f2llO",b="g2llO",N="h2llO",O="j2llO",w="k2llO",S="l2llO",T="m2llO",G=n(87462),M=function(e){return m.createElement("svg",(0,G.Z)({height:"14",viewBox:"0 0 20 14",width:"20"},e),m.createElement("path",{d:"M.272 6.342L6.224.391a.93.93 0 011.315 1.315L3.175 6.07H19.07a.93.93 0 010 1.86H3.175l4.364 4.364a.93.93 0 11-1.315 1.315L.272 7.658a.93.93 0 010-1.316z",fill:"currentColor"}))},R=function(e){var t,n=e.children,r=e.className,a=e.dataTestId,c=e.onClick,l=e.visible;return m.createElement(i.z,{"data-test-id":a,innerClassName:g()(E,L,(t={},t[C]=l,t),r),onClick:c,view:"ghost"},n)},x=function(e){return m.createElement(R,e,m.createElement(M,{height:14,width:20}))},_=function(e){return m.createElement("svg",(0,G.Z)({height:"14",viewBox:"0 0 20 14",width:"20"},e),m.createElement("path",{d:"M19.728 6.342L13.776.391a.93.93 0 00-1.315 1.315l4.364 4.364H.93a.93.93 0 000 1.86h15.895l-4.364 4.364a.93.93 0 101.315 1.315l5.952-5.951a.93.93 0 000-1.316z",fill:"currentColor"}))},k=function(e){return m.createElement(R,e,m.createElement(_,{height:14,width:20}))},B=n(23493),z=n.n(B),A=function(e,t,n){return e.reduce((function(e,r){var a=e+r;return a>=t?e:a+n}),0)},V=n(992),D={cardSpacing:0,currentScroll:0,scrollWidth:0,cardWidths:[],clientWidth:0,canGoRight:!1,canGoLeft:!1},I=function(e,t){switch(t.type){case"reset":return Object.assign({},D,t.payload);case"setscroll":return Object.assign({},e,{currentScroll:t.payload,canGoLeft:t.payload>0,canGoRight:t.payload+5<e.scrollWidth-e.clientWidth});default:throw new Error}},j=n(42899),H=(0,o.A)({config:{animation:{cubicBezier:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",duration:1},card:{spacing:25,containerWidth:1140}},styles:{layout:"a298M",dark:"b298M",light:"c298M",transparent:"d298M",colFlex:"e298M",external:"f298M",desktop:"g298M",arrowContainer:"h298M",gridContainer:"i298M"},Layout:r.c,Link:s.r,Text:c.x,Grid:a.r,Button:i.z,MoveableContent:l.k,FontStyreneText:f.J,NavContainer:function(e){var t=e.canGoLeft,n=e.canGoRight,r=e.children,a=e.dataTestId,i=void 0===a?"Carousel":a,c=e.onLeft,l=e.onRight;return m.createElement("div",{className:p},m.createElement(x,{className:g()(b,y),dataTestId:i+"-NavButton-Left",onClick:c,visible:t}),t&&m.createElement("div",{className:O},m.createElement("div",{className:g()(N,S)})),r,m.createElement(k,{className:g()(W,y),dataTestId:i+"-NavButton-Right",onClick:l,visible:n}),n&&m.createElement("div",{className:w},m.createElement("div",{className:g()(N,T)})))},calculateCardWidths:function(e,t,n){return m.Children.map(e,(function(e){if(!(0,m.isValidElement)(e))return 0;var r=e.props.proportion;return(t-n*(r-1))/r}))||[]},renderCards:j.U,sendEvent:d.q,mapSpacerVerticalToStyler:u.N,parseNewLines:h.z})((function(e){var t=e.FontStyreneText,n=e.Grid,r=e.Layout,a=e.NavContainer,i=e.Link,c=e.Text,l=e.calculateCardWidths,o=e.children,d=e.config.card,s=d.containerWidth,u=d.spacing,h=e.dataTestId,f=e.headerBottomPadding,v=void 0===f?32:f,p=e.headingText,E=e.subheadingText,y=e.headingUrl,L=e.headingColor,C=void 0===L?"light":L,W=e.headingVariant,b=void 0===W?"main":W,N=e.id,O=e.layoutWidth,w=void 0===O?s:O,S=e.parseNewLines,T=e.mapSpacerVerticalToStyler,M=e.fullWidth,R=e.renderCards,x=e.styles,_=e.theme,k=void 0===_?"light":_,B=e.analytics,j=e.sendEvent,H=e.className,F=(0,m.useReducer)(I,D),U=F[0],Z=F[1],K=U.canGoLeft,P=U.canGoRight,q=(0,m.useRef)(null),J=(0,m.useMemo)((function(){return l(o,w,u)}),[l,w,u]),Q=(0,m.useMemo)((function(){return J.reduce((function(e,t){return e+t+u}),0)-u}),[J,u]);(0,V.g)(q,o),(0,m.useEffect)((function(){var e=z()((function(){var e,t=null==(e=q.current)?void 0:e.scrollLeft;Z({type:"setscroll",payload:null!=t?t:0})}),50);if(q.current){var t=q.current;t.addEventListener("scroll",e,!0);var n=q.current.offsetWidth;return Z({type:"reset",payload:{clientWidth:n,scrollWidth:Q,cardWidths:J,cardSpacing:u,canGoRight:Q>n}}),function(){t.removeEventListener("scroll",e)}}return function(){}}),[J,u,Q]),(0,m.useEffect)((function(){if(q.current&&0===U.clientWidth&&"ResizeObserver"in window){var e=new ResizeObserver((function(e){e.forEach((function(e){Z({type:"reset",payload:Object.assign({},U,{scrollWidth:Q,cardSpacing:u,cardWidths:J,clientWidth:e.target.clientWidth,canGoRight:Q>e.target.clientWidth})})}))}));return e.observe(q.current),function(){q.current&&e.unobserve(q.current)}}}),[J,Q,u,U]);var X=(0,m.useCallback)((function(e){j(B),q.current&&q.current.scrollTo({top:0,left:e,behavior:"smooth"})}),[B,j]),Y=m.createElement(a,(0,G.Z)({},e,{canGoLeft:K,canGoRight:P,dataTestId:h,onLeft:function(){return X(function(e){var t=e.cardSpacing,n=e.cardWidths,r=e.clientWidth,a=e.currentScroll,i=A(n,a,t)-r-t;return i<=0?0:i}(U))},onRight:function(){return X(function(e){var t=e.cardSpacing,n=e.cardWidths,r=e.clientWidth,a=e.currentScroll,i=e.scrollWidth,c=A(n,a,t)+r+t;return c>=i-r?i-r:c}(U))}}),m.createElement("div",{ref:q,className:x.gridContainer},m.createElement(n,{classNames:{col:g()(x.external,x.colFlex)},columnsWidth:J,justify:"start"},R(e,J)))),$=S(p),ee=m.createElement(c,{styler:{marginTop:0,marginBottom:E?16:T(v)},tag:"h2",theme:C,view:"medium"},y?m.createElement(i,{href:y},$):$);return m.createElement("div",{className:g()(x.layout,x[k],H),"data-test-id":h,id:N},m.createElement(r,{hasPadding:!1},p&&"main"===b&&ee,p&&"fancy"===b&&m.createElement(t,null,ee),E&&m.createElement(c,{styler:{marginTop:0,marginBottom:32},tag:"div",view:"primary-medium"},E),!M&&Y),M&&Y)}))},23975:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(45761),a=n(98907),i=(0,r.A)({styles:{layout:"a3buV",layoutContent:"b3buV",scrollLayout:"c3buV",scrollLayoutContent:"d3buV"}})(a.A)}}]);
//# sourceMappingURL=CardCarouselV2Desktop.fe49df81.es5.js.map