"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[54777,38749,61495,39301,19786,45453,69111,23331,2987,75557,13482,29721,33812,74855,1175,19020,37511,41934,40449,27730,59745,29990,23287],{93121:function(t,n,e){e.d(n,{a:function(){return d}});var o=e(67294),r=e(17998),i=e.n(r),a="loader__component_19o1e";e(91197);var d=function(t){var n=t.className,e=t.dataTestId;return o.createElement("div",{className:i()(a,n),"data-test-id":e},o.createElement("div",null),o.createElement("div",null),o.createElement("div",null))}},52962:function(t,n,e){e.d(n,{J:function(){return i}});var o=e(67294),r=e(13171);function i(t,n,e){var i=t.Link,a=t.Text,d=t.Tooltip,l=n.subtitle,u=n.tooltipContent;return o.createElement(a,{"data-test-id":"benefit-"+(e+1),kind:"caption",styler:{marginTop:0,marginBottom:0},view:"component-secondary"},o.createElement(d,{content:o.createElement(a,{styler:{marginTop:0,marginBottom:0},view:"component-secondary"},(0,r.z)(u))},o.createElement(i,{border:"dashed",kind:"caption",pseudo:!0},l)))}},82189:function(t,n,e){e.d(n,{Br:function(){return d}});var o=e(45761),r=e(67294),i=e(94184),a=e.n(i),d=(0,o.A)({styles:{block:"a1tCw"}})((function(t){var n,e=t.inline,o=void 0!==e&&e,i=t.styles,d=a()(((n={})[i.block]=!o,n))||void 0;return r.createElement("span",{className:d},o&&" ")}))},32011:function(t,n,e){e.d(n,{R0:function(){return o},Xu:function(){return r},wn:function(){return i},nk:function(){return a}});var o=4,r=8,i=!0,a=["primary","filled","transparent","secondary","outlined","tertiary","link","ghost"];a.filter((function(t){return!["filled","outlined","transparent"].includes(t)}))},12044:function(t,n,e){e.d(n,{z:function(){return A}});var o=e(45761),r=e(67294),i=e(8668),a=e.n(i),d=e(35878),l=e(85038),u=e(93121),s=function(){return s=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},s.apply(this,arguments)};function c(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(e[o[r]]=t[o[r]])}return e}var _={component:"button__component_1mgd7",focused:"button__focused_1mgd7",loading:"button__loading_1mgd7",text:"button__text_1mgd7",addons:"button__addons_1mgd7",stretchText:"button__stretchText_1mgd7",loader:"button__loader_1mgd7",xxs:"button__xxs_1mgd7",iconOnly:"button__iconOnly_1mgd7",xs:"button__xs_1mgd7",s:"button__s_1mgd7",m:"button__m_1mgd7",l:"button__l_1mgd7",xl:"button__xl_1mgd7",withRightAddons:"button__withRightAddons_1mgd7",ghost:"button__ghost_1mgd7",withLeftAddons:"button__withLeftAddons_1mgd7",link:"button__link_1mgd7",block:"button__block_1mgd7",nowrap:"button__nowrap_1mgd7"};e(8478);e(29203);e(2991);var f={default:{primary:"button__primary_zsrtz",secondary:"button__secondary_zsrtz",outlined:"button__outlined_zsrtz",tertiary:"button__tertiary_zsrtz",filled:"button__filled_zsrtz",transparent:"button__transparent_zsrtz",link:"button__link_zsrtz",ghost:"button__ghost_zsrtz",component:"button__component_zsrtz",loading:"button__loading_zsrtz"},inverted:{primary:"button__primary_oiqbk",secondary:"button__secondary_oiqbk",outlined:"button__outlined_oiqbk",tertiary:"button__tertiary_oiqbk",filled:"button__filled_oiqbk",transparent:"button__transparent_oiqbk",link:"button__link_oiqbk",ghost:"button__ghost_oiqbk",component:"button__component_oiqbk",loading:"button__loading_oiqbk"}},m=r.forwardRef((function(t,n){var e,o,i,m=t.children,p=t.view,b=void 0===p?"secondary":p,g=t.leftAddons,v=t.rightAddons,h=t.size,y=void 0===h?"m":h,w=t.block,A=void 0!==w&&w,k=t.className,E=t.dataTestId,z=t.href,N=t.loading,O=void 0!==N&&N,x=t.nowrap,C=void 0!==x&&x,B=t.colors,j=void 0===B?"default":B,R=t.Component,T=void 0===R?z?"a":"button":R,q=c(t,["children","view","leftAddons","rightAddons","size","block","className","dataTestId","href","loading","nowrap","colors","Component"]);["outlined","filled","transparent"].includes(b);var L=(0,r.useRef)(null),S=(0,l.useFocus)(L,"keyboard")[0],D=(0,r.useState)(!0),P=D[0],I=D[1],F=(0,r.useRef)(0),H=O||!P,K=!m,M={className:a()(_.component,_[b],_[y],f[j].component,f[j][b],(e={},e[_.focused]=S,e[_.block]=A,e[_.iconOnly]=K,e[_.loading]=H,e[_.withRightAddons]=Boolean(v)&&!K,e[_.withLeftAddons]=Boolean(g)&&!K,e[f[j].loading]=H,e),k),"data-test-id":E||null},U=r.createElement(r.Fragment,null,g&&r.createElement("span",{className:_.addons},g),m&&r.createElement("span",{className:a()(_.text,(o={},o[_.nowrap]=C,o[_.stretchText]=!(g||v),o))},m),H&&r.createElement(u.a,{className:_.loader}),v&&r.createElement("span",{className:_.addons},v));if((0,r.useEffect)((function(){O&&(I(!1),F.current=window.setTimeout((function(){I(!0)}),500))}),[O]),(0,r.useEffect)((function(){return function(){window.clearTimeout(F.current)}}),[]),z){var X=q.target,Z=((i={})["string"==typeof T?"href":"to"]=z,i);return r.createElement(T,s({rel:"_blank"===X?"noreferrer noopener":void 0},M,q,Z,{ref:(0,d.default)([L,n])}),U)}var J=q,W=J.disabled,$=J.type,G=void 0===$?"button":$,Q=c(J,["disabled","type"]);return r.createElement(T,s({},M,Q,{type:G,disabled:W||H,ref:(0,d.default)([L,n])}),U)}));m.defaultProps={view:"secondary",size:"m",block:!1,loading:!1,nowrap:!1};var p=e(87462),b=e(63366),g=e(94184),v=e.n(g),h=e(13713),y=e(32011),w=["CoreButton","block","borderRadius","children","className","colors","hasAnimation","innerClassName","loading","nowrap","size","styles","view","leftAddons","rightAddons"],A=(0,o.A)({CoreButton:m,styles:{external:"a3SCh",deprecatedBorderRadius:"b3SCh",hasAnimation:"c3SCh",container:"d3SCh"}},{priorityStyler:!0})((function(t){var n,e,o=t.CoreButton,i=t.block,a=void 0!==i&&i,d=t.borderRadius,l=void 0===d?y.Xu:d,u=t.children,s=t.className,c=t.colors,_=void 0===c?"default":c,f=t.hasAnimation,m=void 0===f?y.wn:f,g=t.innerClassName,A=t.loading,k=void 0!==A&&A,E=t.nowrap,z=void 0!==E&&E,N=t.size,O=void 0===N?"m":N,x=t.styles,C=t.view,B=void 0===C?"secondary":C,j=t.leftAddons,R=t.rightAddons,T=(0,b.Z)(t,w),q=(0,h.f8)(u),L=q.children,S=q.leftAddons,D=q.rightAddons,P=r.createElement(o,(0,p.Z)({block:a,className:v()(x.external,(n={},n[x.deprecatedBorderRadius]=l===y.R0,n[x.hasAnimation]=m,n),g),colors:_,leftAddons:S||j,loading:k,nowrap:z,rightAddons:D||R,size:O,view:B},T),L.length>0&&L);return s?r.createElement("div",{className:v()((e={},e[x.container]=!a,e),s)},P):P}))},35086:function(t,n,e){e.d(n,{c:function(){return d}});var o=e(45761),r=e(67294),i=e(94184),a=e.n(i),d=(0,o.A)({styles:{bold:"a2jE8",medium:"b2jE8"}})((function(t){var n=t.children,e=t.className,o=t.styles,i=t.weight,d=void 0===i?"bold":i;return r.createElement("span",{className:a()(o[d],e)},n)}))},13171:function(t,n,e){e.d(n,{z:function(){return i}});var o=e(67294),r=e(82189),i=function(t,n,e){if(void 0===e&&(e=!1),!t)return"";var i=null!=n?n:o.Fragment,a=e&&Array.isArray(t);if("string"!=typeof t&&!a)return t;var d=a?t:t.split(/\\n|\n/);return d.map((function(t,n){return o.createElement(i,{key:n},"string"==typeof t?t.trim():t,n<d.length-1&&o.createElement(r.Br,null))}))}},13713:function(t,n,e){e.d(n,{$9:function(){return r},Ww:function(){return i},tA:function(){return a},f8:function(){return d},sj:function(){return l}});var o=e(67294);function r(t){return Boolean("object"==typeof t&&null!==t&&"NamedContainer"===t.props.is&&t.props.name)}function i(t){return o.Children.toArray(t).reduce((function(t,n){if(r(n)){if("children"!==n.props.name){var e;return Object.assign({},t,((e={})[n.props.name]=n.props.children,e))}}else t.children.push(n);return t}),{children:[]})}function a(t){return o.Children.toArray(t).reduce((function(t,n){var e;return r(n)?Object.assign({},t,((e={})[n.props.name]=n.props.children,e)):t}),{})}function d(t){return(0,o.useMemo)((function(){return i(t)}),[t])}function l(t){return(0,o.useMemo)((function(){return a(t)}),[t])}},29203:function(t,n,e){e.r(n)},8478:function(t,n,e){e.r(n)},2991:function(t,n,e){e.r(n)},91197:function(t,n,e){e.r(n)},35878:function(t,n,e){e.r(n),n.default=function(t){return function(n){t.forEach((function(t){"function"==typeof t?t(n):null!=t&&(t.current=n)}))}}}}]);
//# sourceMappingURL=54777.d5544297.es5.js.map