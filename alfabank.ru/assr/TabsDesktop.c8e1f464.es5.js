"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[86261],{90741:function(e,t,n){n.d(t,{q:function(){return o}});var a=n(63366),i=n(41609),r=n.n(i),s=function(e){return!r()(e)},l=["ymEvent"],o=function(e){void 0===e&&(e={});var t,n=window,i=e,r=i.ymEvent,o=(0,a.Z)(i,l);if((t=n)&&t.dataLayer&&s(o)){var d=Object.assign({path:n.location.pathname},o);n.dataLayer.push(d)}(function(e){return!!e&&"function"==typeof e.ym})(n)&&s(r)&&[r].flat().forEach((function(e){var t=e.method,a=void 0===t?"reachGoal":t,i=e.params;n.ym.apply(n,[""+(window||self).__CLIENT_ENV__.CUSTOM_YTM_ID,a].concat([i].flat()))}))}},34300:function(e,t,n){n.d(t,{X:function(){return a}});var a=function(e){return function(t){var n=t.currentTarget;if(null!=e&&e.current&&n){var a=e.current,i=a.getBoundingClientRect().width,r=n.getBoundingClientRect().width;a.scrollTo({left:n.offsetLeft-i/2+r/2,top:0,behavior:"smooth"})}}}},11062:function(e,t,n){n.d(t,{E:function(){return u}});var a=n(45761),i=n(18641),r=n(87462),s=n(63366),l=n(67294),o=n(94184),d=n.n(o),c=["alt","className","lazy","radiusKind","responsive","srcRetina","styles","verticalAlign"],u=(0,a.A)({styles:i.Z})((function(e){var t,n=e.alt,a=e.className,i=e.lazy,o=void 0===i||i,u=e.radiusKind,f=void 0===u?"default":u,m=e.responsive,v=void 0!==m&&m,g=e.srcRetina,p=e.styles,h=e.verticalAlign,b=void 0===h?"baseline":h,y=(0,s.Z)(e,c);return l.createElement("img",(0,r.Z)({alt:n,className:d()(p[""+b],p[f+"KindRadius"],(t={},t[p.responsive]=v,t),a),loading:o?"lazy":void 0,srcSet:g?g+" 2x":void 0},y))}))},50763:function(e,t,n){n.d(t,{R:function(){return d}});var a=n(87462),i=n(94184),r=n.n(i),s=n(67294),l=n(90741),o=n(34300),d=function(e){var t,n=e.Img,i=e.Tag,d=e.align,c=e.className,u=e.column,f=void 0!==u&&u,m=e.dataTestId,v=void 0===m?"tabs-list":m,g=e.inline,p=void 0===g||g,h=e.onChange,b=e.scroll,y=e.selectedID,K=e.size,E=e.styles,X=e.theme,A=e.titles,T=(0,s.useRef)(null),_=function(e){var t=(0,s.useRef)(null);return(0,s.useEffect)((function(){t.current&&(0,o.X)(e)({currentTarget:t.current})}),[e]),t}(T);return s.createElement("div",{ref:T,className:r()(E.tagsContainer,(t={},t[E.alignCenter]="center"===d,t[E.scroll]=b,t[E.column]=f,t),c),"data-test-id":v,role:"tablist"},A.map((function(e,t){var d=e.iconSrc&&s.createElement(n,{key:e.id,src:e.iconSrc}),c=e.id===y?{forwardedRef:_}:void 0;return s.createElement(i,(0,a.Z)({key:e.id,classNames:r()(E.external,E.tag),dataTestId:v&&v+"-tabTitle-"+t,inline:p,label:e.title,leftAddons:d,onClick:function(t){return function(e,t,n){(0,o.X)(T)(e),n&&(0,l.q)(n),h({event:e,id:t})}(t,e.id,e.dataLayer)},returnEvent:!0,role:"tab",selected:y,size:K,tabIndex:0,theme:X,value:e.id},c))})))}},52698:function(e,t,n){n.r(t),n.d(t,{TabsTagsDesktop:function(){return d}});var a=n(45761),i=n(37588),r=n(11062),s=n(50763),l=(0,a.A)({Img:r.E,Tag:i.V,styles:{tagsContainer:"a2fhKv",alignCenter:"b2fhKv",external:"c2fhKv",tag:"d2fhKv",scroll:"e2fhKv",column:"f2fhKv"}})(s.R),o=n(74868),d=(0,a.A)({TabsList:l})(o.m)},37588:function(e,t,n){n.d(t,{V:function(){return u}});var a=n(96930),i=n(45761),r=n(67294),s=n(94184),l=n.n(s),o=function(){},d={xs:"component-secondary",s:"component",m:"component",l:"primary-large"},c=(0,r.memo)((function(e){var t,n,a,i,s=e.Text,c=e.bordered,u=e.className,f=e.classNames,m=e.dataTestId,v=e.disabled,g=e.forwardedRef,p=e.label,h=e.onClick,b=void 0===h?o:h,y=e.selected,K=e.size,E=void 0===K?"m":K,X=e.styles,A=e.tabIndex,T=e.role,_=e.returnEvent,x=e.allOnclickArguments,R=void 0!==x&&x,N=e.value,w=e.inline,C=e.theme,L=void 0===C?"white":C,z=e.rightAddons,I=e.leftAddons,S=N===y,k=l()(X.tag,X.size,((t={})[X.selected]=S,t[X.hovered]=!S&&!v,t[X.disabled]=v,t[X.withRightAddons]=Boolean(z),t[X.withLeftAddons]=Boolean(I),t),X[E+"Size"],((n={})[X.bordered]=c,n),X[L],f,u),D=l()(X.external,X.text,((a={})[X.selectedText]=S,a));return r.createElement("button",{ref:g,className:k,"data-test-id":m,"data-test-selected":S||void 0,onClick:function(e){R?b(e,N):b(_?e:N)},role:T,tabIndex:A,type:"button"},I?r.createElement("span",{className:X.addons},I):null,r.createElement(s,{className:l()(D,(i={},i[l()(X.block,X.external)]=!w,i)),styler:{margin:0},tag:"span",view:d[E]},p),z?r.createElement("span",{className:X.addons},z):null)})),u=(0,i.A)({styles:{tag:"a28gXp",disabled:"b28gXp",addons:"c28gXp",withRightAddons:"d28gXp",xsSize:"e28gXp",sSize:"f28gXp",mSize:"g28gXp",lSize:"h28gXp",withLeftAddons:"i28gXp",white:"j28gXp",text:"k28gXp",external:"l28gXp",selected:"m28gXp",selectedText:"n28gXp",hovered:"o28gXp",bordered:"p28gXp",lightInverted:"q28gXp",size:"r28gXp",block:"s28gXp"},Text:a.x})(c)},18641:function(e,t){t.Z={baseline:"a1m2eK",bottom:"b1m2eK",middle:"c1m2eK",top:"d1m2eK",defaultKindRadius:"e1m2eK",containerKindRadius:"f1m2eK",cardKindRadius:"g1m2eK",iconKindRadius:"h1m2eK",responsive:"i1m2eK"}}}]);
//# sourceMappingURL=TabsDesktop.c8e1f464.es5.js.map