"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[58138],{49545:function(e,t,n){n.r(t),n.d(t,{SmeCarouselDesktop:function(){return l}});var o=n(45761),a=n(71702),r=n(58790),l=(0,o.A)({Dots:r.P,styles:{"background-$(backgroundColorBg)":"a2BRI","background-$(backgroundColor)":"b2BRI",root:"c2BRI",slider:"d2BRI",viewport:"e2BRI",trim:"f2BRI",container:"g2BRI",slide:"h2BRI",viewportNoPaddings:"i2BRI"},isMobile:!1})(a.T)},58790:function(e,t,n){n.d(t,{P:function(){return i}});var o=n(45761),a=n(67294),r=n(94184),l=n.n(r),i=(0,o.A)({styles:{"background-$(backgroundColorBg)":"a3FBu","background-$(backgroundColor)":"b3FBu",dots:"c3FBu",delay:"d3FBu",dot:"e3FBu",active:"f3FBu",autoplay:"g3FBu"}})((function(e){var t=e.autoplay,n=e.className,o=e.delay,r=e.onChange,i=e.selectedIndex,s=e.styles,d=e.total;return function(e){var t=e.delay,n=e.styles;(0,a.useEffect)((function(){var e=document.querySelector("."+n.dots);if(e){var o=getComputedStyle(e).getPropertyValue("--sme-carousel-duration-animation");o&&e.style.setProperty("--sme-carousel-duration-animation",o.replace(/\d+ms/,1e3*t+"ms"))}}),[t,n.dots])}({delay:o,styles:s}),a.createElement("div",{className:l()(n,s.dots)},Array.from({length:d},(function(e,n){var o;return a.createElement("button",{key:n,"aria-label":n===i?"Активный слайд #"+(n+1):"Переключиться на слайд #"+(n+1),className:l()(s.dot,(o={},o[s.active]=n===i,o[s.autoplay]=t,o)),"data-test-id":"dot-"+n,onClick:function(){null==r||r(n)}})})))}))},71702:function(e,t,n){n.d(t,{T:function(){return w}});var o=n(67294),a=n(94184),r=n.n(a),l=n(77576),i=n(22074),s=n(45761),d=n(64261),c=n(87462),u=n(63366);function m(e){return Boolean("object"==typeof e&&null!==e&&"NamedContainer"===e.props.is&&e.props.name)}function f(e){return(0,o.useMemo)((function(){return function(e){return o.Children.toArray(e).reduce((function(e,t){if(m(t)){if("children"!==t.props.name){var n;return Object.assign({},e,((n={})[t.props.name]=t.props.children,n))}}else e.children.push(t);return e}),{children:[]})}(e)}),[e])}["primary","filled","transparent","secondary","outlined","tertiary","link","ghost"].filter((function(e){return!["filled","outlined","transparent"].includes(e)}));var v=["CoreButton","block","borderRadius","children","className","colors","hasAnimation","innerClassName","loading","nowrap","size","styles","view","leftAddons","rightAddons"],p=(0,s.A)({CoreButton:d.z,styles:{"background-$(backgroundColorBg)":"a2LFd","background-$(backgroundColor)":"b2LFd",external:"c2LFd",deprecatedBorderRadius:"d2LFd",hasAnimation:"e2LFd",container:"f2LFd"}},{priorityStyler:!0})((function(e){var t,n,a=e.CoreButton,l=e.block,i=void 0!==l&&l,s=e.borderRadius,d=void 0===s?8:s,m=e.children,p=e.className,g=e.colors,y=void 0===g?"default":g,h=e.hasAnimation,b=void 0===h||h,k=e.innerClassName,C=e.loading,B=void 0!==C&&C,E=e.nowrap,N=void 0!==E&&E,A=e.size,R=void 0===A?"m":A,S=e.styles,w=e.view,F=void 0===w?"secondary":w,I=e.leftAddons,L=e.rightAddons,Z=(0,u.Z)(e,v),_=f(m),x=_.children,D=_.leftAddons,P=_.rightAddons,O=o.createElement(a,(0,c.Z)({block:i,className:r()(S.external,(t={},t[S.deprecatedBorderRadius]=4===d,t[S.hasAnimation]=b,t),k),colors:y,leftAddons:D||I,loading:B,nowrap:N,rightAddons:P||L,size:R,view:F},Z),x.length>0&&x);return p?o.createElement("div",{className:r()((n={},n[S.container]=!i,n),p)},O):O})),g=n(40307),y=n(99997),h="c3RZ-",b="d3RZ-",k="e3RZ-",C="f3RZ-",B="g3RZ-",E="i3RZ-",N="j3RZ-",A="k3RZ-",R="l3RZ-",S=(0,o.memo)((function(e){var t=e.direction,n=void 0===t?"left":t,a=e.onClick,l=e.shadow,i=void 0===l||l,s="left"===n,d=s?g.D:y.E,c=(0,o.useMemo)((function(){return i?s?o.createElement("div",{className:E},o.createElement("div",{className:r()(B,A)})):o.createElement("div",{className:N},o.createElement("div",{className:r()(B,R)})):null}),[s,i]);return o.createElement(o.Fragment,null,o.createElement(p,{hasAnimation:!1,innerClassName:r()(h,b,s?k:C),onClick:a,view:"ghost"},o.createElement(d,{height:14,width:20})),c)})),w=(0,o.memo)((function(e){var t,n=e.Dots,a=e.autoplay,s=void 0===a||a,d=e.children,c=e.className,u=e.constantWidth,m=void 0!==u&&u,f=e.dataTestId,v=e.delay,p=void 0===v?4:v,g=e.fullMode,y=void 0!==g&&g,h=e.gapBetweenSlides,b=e.inViewTSlides,k=void 0===b?1:b,C=e.isMobile,B=e.loop,E=void 0!==B&&B,N=e.noPaddings,A=void 0!==N&&N,R=e.showArrows,w=void 0===R||R,F=e.showDots,I=void 0===F||F,L=e.slidesToScroll,Z=void 0===L?1:L,_=e.styles,x=(0,o.useState)(s),D=x[0],P=x[1],O=(0,o.useMemo)((function(){return{loop:E,speed:10,align:"start",skipSnaps:!0,startIndex:0,slidesToScroll:Z}}),[E,Z]),M=(0,l.Z)(O,[(0,i.Z)({delay:1e3*p,playOnInit:D})]),T=M[0],$=M[1],j=(0,o.useState)([]),z=j[0],U=j[1],H=(0,o.useState)(0),K=H[0],V=H[1],q=(0,o.useState)(!0),W=q[0],G=q[1],J=(0,o.useState)(!0),Q=J[0],X=J[1],Y=(0,o.useCallback)((function(e){$&&(P(!1),$.scrollTo(e))}),[$]),ee=(0,o.useCallback)((function(e){U(e.scrollSnapList())}),[]),te=(0,o.useCallback)((function(e){V(e.selectedScrollSnap()),G(!e.canScrollPrev()),X(!e.canScrollNext())}),[]);(0,o.useEffect)((function(){$&&(ee($),te($),$.on("reInit",te),$.on("select",te),$.on("pointerUp",(function(){return P(!1)})))}),[$,ee,te]),(0,o.useEffect)((function(){$&&(ee($),te($))}),[$,Z,k,ee,te]),(0,o.useEffect)((function(){return P(s)}),[s]);var ne=(0,o.useMemo)((function(){return o.Children.map(d,(function(e,t){var n=Object.assign({},m?{flexBasis:"auto"}:{flexBasis:(C?97.5:100)/k+"%"},h&&{paddingLeft:h+"px"});return o.createElement("div",{key:t,className:_.slide,style:n},e)||[]}))}),[d,m,h,k,C,_.slide]),oe=(0,o.useCallback)((function(){null==$||$.scrollPrev(),P(!1)}),[$]),ae=(0,o.useCallback)((function(){null==$||$.scrollNext(),P(!1)}),[$]);return o.createElement("div",{className:r()(_.root,c),"data-test-id":f},o.createElement("div",{className:_.slider},o.createElement("div",{ref:T,className:r()(_.viewport,(t={},t[_.trim]=!y,t[_.viewportNoPaddings]=A,t))},o.createElement("div",{className:_.container,style:Object.assign({},h&&{marginLeft:"-"+h+"px"})},ne)),w&&!C&&o.createElement(o.Fragment,null,!W&&o.createElement(S,{direction:"left",onClick:oe,shadow:!y}),!Q&&o.createElement(S,{direction:"right",onClick:ae,shadow:!y}))),I&&o.createElement(n,{autoplay:D,delay:p,onChange:Y,selectedIndex:K,total:z.length}))}))}}]);
//# sourceMappingURL=SmeCarouselDesktop.fa9f6a56.es5.js.map