"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[86261],{84815:function(e,t,n){n.d(t,{q:function(){return l}});var a=n(63366),i=n(41609),r=n.n(i),c=function(e){return!r()(e)},s=["ymEvent"],l=function(e){void 0===e&&(e={});var t,n=window,i=e,r=i.ymEvent,l=(0,a.Z)(i,s);if((t=n)&&t.dataLayer&&c(l)){var o=Object.assign({path:n.location.pathname},l);n.dataLayer.push(o)}(function(e){return!!e&&"function"==typeof e.ym})(n)&&c(r)&&[r].flat().forEach((function(e){var t=e.method,a=void 0===t?"reachGoal":t,i=e.params;n.ym.apply(n,[""+(window||self).__CLIENT_ENV__.CUSTOM_YTM_ID,a].concat([i].flat()))}))}},20771:function(e,t,n){n.d(t,{E:function(){return d}});var a=n(45761),i=n(87462),r=n(63366),c=n(67294),s=n(94184),l=n.n(s),o=["alt","className","lazy","radiusKind","responsive","srcRetina","styles","verticalAlign"],d=(0,a.A)({styles:{baseline:"aJBcI",bottom:"bJBcI",middle:"cJBcI",top:"dJBcI",defaultKindRadius:"eJBcI",containerKindRadius:"fJBcI",cardKindRadius:"gJBcI",iconKindRadius:"hJBcI",responsive:"iJBcI"}})((function(e){var t,n=e.alt,a=e.className,s=e.lazy,d=void 0===s||s,u=e.radiusKind,f=void 0===u?"default":u,m=e.responsive,v=void 0!==m&&m,g=e.srcRetina,R=e.styles,h=e.verticalAlign,K=void 0===h?"baseline":h,b=(0,r.Z)(e,o);return c.createElement("img",(0,i.Z)({alt:n,className:l()(R[""+K],R[f+"KindRadius"],(t={},t[R.responsive]=v,t),a),loading:d?"lazy":void 0,srcSet:g?g+" 2x":void 0},b))}))},75553:function(e,t,n){n.d(t,{V:function(){return u}});var a=n(28496),i=n(45761),r=n(67294),c=n(94184),s=n.n(c),l=function(){},o={xs:"component-secondary",s:"component",m:"component",l:"primary-large"},d=(0,r.memo)((function(e){var t,n,a,i,c=e.Text,d=e.bordered,u=e.className,f=e.classNames,m=e.dataTestId,v=e.disabled,g=e.forwardedRef,R=e.label,h=e.onClick,K=void 0===h?l:h,b=e.selected,p=e.size,y=void 0===p?"m":p,E=e.styles,I=e.tabIndex,A=e.role,T=e.returnEvent,_=e.allOnclickArguments,x=void 0!==_&&_,N=e.value,w=e.inline,B=e.theme,C=void 0===B?"white":B,L=e.rightAddons,z=e.leftAddons,S=N===b,k=s()(E.tag,E.size,((t={})[E.selected]=S,t[E.hovered]=!S&&!v,t[E.disabled]=v,t[E.withRightAddons]=Boolean(L),t[E.withLeftAddons]=Boolean(z),t),E[y+"Size"],((n={})[E.bordered]=d,n),E[C],f,u),D=s()(E.external,E.text,((a={})[E.selectedText]=S,a));return r.createElement("button",{ref:g,className:k,"data-test-id":m,"data-test-selected":S||void 0,onClick:function(e){x?K(e,N):K(T?e:N)},role:A,tabIndex:I,type:"button"},z?r.createElement("span",{className:E.addons},z):null,r.createElement(c,{className:s()(D,(i={},i[s()(E.block,E.external)]=!w,i)),styler:{margin:0},tag:"span",view:o[y]},R),L?r.createElement("span",{className:E.addons},L):null)})),u=(0,i.A)({styles:{tag:"a1RKc",disabled:"b1RKc",addons:"c1RKc",withRightAddons:"d1RKc",xsSize:"e1RKc",sSize:"f1RKc",mSize:"g1RKc",lSize:"h1RKc",withLeftAddons:"i1RKc",white:"j1RKc",text:"k1RKc",external:"l1RKc",selected:"m1RKc",selectedText:"n1RKc",hovered:"o1RKc",bordered:"p1RKc",lightInverted:"q1RKc",size:"r1RKc",block:"s1RKc"},Text:a.x})(d)},90106:function(e,t,n){n.d(t,{R:function(){return o}});var a=n(87462),i=n(94184),r=n.n(i),c=n(67294),s=n(84815),l=function(e){return function(t){var n=t.currentTarget;if(null!=e&&e.current&&n){var a=e.current,i=a.getBoundingClientRect().width,r=n.getBoundingClientRect().width;a.scrollTo({left:n.offsetLeft-i/2+r/2,top:0,behavior:"smooth"})}}},o=function(e){var t,n=e.Img,i=e.Tag,o=e.align,d=e.className,u=e.column,f=void 0!==u&&u,m=e.dataTestId,v=void 0===m?"tabs-list":m,g=e.inline,R=void 0===g||g,h=e.onChange,K=e.scroll,b=e.selectedID,p=e.size,y=e.styles,E=e.theme,I=e.titles,A=(0,c.useRef)(null),T=function(e){var t=(0,c.useRef)(null);return(0,c.useEffect)((function(){t.current&&l(e)({currentTarget:t.current})}),[e]),t}(A);return c.createElement("div",{ref:A,className:r()(y.tagsContainer,(t={},t[y.alignCenter]="center"===o,t[y.scroll]=K,t[y.column]=f,t),d),"data-test-id":v,role:"tablist"},I.map((function(e,t){var o=e.iconSrc&&c.createElement(n,{key:e.id,src:e.iconSrc}),d=e.id===b?{forwardedRef:T}:void 0;return c.createElement(i,(0,a.Z)({key:e.id,classNames:r()(y.external,y.tag),dataTestId:v&&v+"-tabTitle-"+t,inline:R,label:e.title,leftAddons:o,onClick:function(t){return function(e,t,n){l(A)(e),n&&(0,s.q)(n),h({event:e,id:t})}(t,e.id,e.dataLayer)},returnEvent:!0,role:"tab",selected:b,size:p,tabIndex:0,theme:E,value:e.id},d))})))}},52698:function(e,t,n){n.r(t),n.d(t,{TabsTagsDesktop:function(){return o}});var a=n(45761),i=n(75553),r=n(20771),c=n(90106),s=(0,a.A)({Img:r.E,Tag:i.V,styles:{tagsContainer:"a2fhK",alignCenter:"b2fhK",external:"c2fhK",tag:"d2fhK",scroll:"e2fhK",column:"f2fhK"}})(c.R),l=n(41554),o=(0,a.A)({TabsList:s})(l.m)}}]);
//# sourceMappingURL=TabsDesktop.411764aa.es5.js.map