(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[81943],{13234:function(e,t){function n(e){if(e&&"object"==typeof e){var t=e.which||e.keyCode||e.charCode;t&&(e=t)}if("number"==typeof e)return l[e];var n,r=String(e);return(n=o[r.toLowerCase()])?n:(n=i[r.toLowerCase()])||(1===r.length?r.charCodeAt(0):void 0)}n.isEventKey=function(e,t){if(e&&"object"==typeof e){var n=e.which||e.keyCode||e.charCode;if(null==n)return!1;if("string"==typeof t){var r;if(r=o[t.toLowerCase()])return r===n;if(r=i[t.toLowerCase()])return r===n}else if("number"==typeof t)return t===n;return!1}};var o=(t=e.exports=n).code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},i=t.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};for(r=97;r<123;r++)o[String.fromCharCode(r)]=r-32;for(var r=48;r<58;r++)o[r-48]=r;for(r=1;r<13;r++)o["f"+r]=r+111;for(r=0;r<10;r++)o["numpad "+r]=r+96;var l=t.names=t.title={};for(r in o)l[o[r]]=r;for(var a in i)o[a]=i[a]},16046:function(e,t,n){"use strict";n.d(t,{e:function(){return c}});var o=n(45761),i=n(87462),r=n(63366),l=n(67294),a=n(94184),s=n.n(a),u=["isOpen","styles"],c=(0,o.A)({styles:{arrowIcon:"a1bjM",arrowIconOpened:"b1bjM"}})((function(e){var t,n=e.isOpen,o=void 0===n||n,a=e.styles,c=(0,r.Z)(e,u),d=s()(a.arrowIcon,((t={})[a.arrowIconOpened]=o,t));return l.createElement("svg",(0,i.Z)({className:d,"data-test-id":"arrow",fill:"none",height:"30",viewBox:"0 0 30 30",width:"30",xmlns:"http://www.w3.org/2000/svg"},c),l.createElement("path",{d:"M14.8925 17.186L20.4325 11.646L21.1395 12.354L14.8925 18.6L8.64648 12.354L9.35448 11.646L14.8925 17.186Z",fill:"black"}))}))},81943:function(e,t,n){"use strict";n.d(t,{P:function(){return L}});var o=n(26229),i=n(45761),r=n(16046),l=n(13713),a=n(67294),s=function(e){return 40*(e+1)},u=function(e){var t=e.highlightedItem,n=e.prevIndex,o=e.scrollTop,i=e.shift;return t<n?function(e){var t=e.highlightedItem,n=e.scrollTop,o=e.shift-(s(t)-40*(t+4));return o<n?o:n}({highlightedItem:t,scrollTop:o,shift:i}):function(e){var t=e.highlightedItem,n=e.scrollTop,o=e.shift-(s(t)-40*(t+1));return o>n?o:n}({highlightedItem:t,scrollTop:o,shift:i})},c=function(e){var t=e.highlightedItem;return function(e){var t=e.highlightedItem,n=e.prevIndex,o=e.scrollTop,i=e.shift;return Number.isFinite(n)?u({highlightedItem:t,prevIndex:n,scrollTop:o,shift:i}):function(e){return e+40}(i)}({highlightedItem:t,prevIndex:e.prevIndex,scrollTop:e.scrollTop,shift:s(t)-160})},d=(0,i.A)({styles:{autocomplete:"a3ADP",option:"b3ADP",subLabel:"c3ADP"},useNamedContainers:l.sj})((function(e){var t=e.autocompleteRef,n=e.children,o=e.highlightedItem,i=void 0===o?-1:o,r=e.onEmptyListMessageClick,l=e.onSelect,s=e.options,u=e.allowToShowEmptyListMessage,d=void 0!==u&&u,p=e.styles,h=e.useNamedContainers,f=function(e){var t,n=(0,a.useRef)();return(0,a.useEffect)((function(){n.current=e}),[e]),null!==(t=n.current)&&void 0!==t?t:e}(i),m=h(n).emptyListMessage,v=d&&!s.length&&m;return(0,a.useEffect)((function(){i<0||null==t||!t.current||(t.current.scrollTop=c({highlightedItem:i,prevIndex:f,scrollTop:t.current.scrollTop}))}),[i,t,f]),a.createElement("ul",{ref:t,className:p.autocomplete,"data-test-id":"autocomplete",role:"listbox",tabIndex:-1},v&&a.createElement("li",{"data-test-id":"autocomplete-0",onClick:function(){return null==r?void 0:r()}},m),s.map((function(e,t){return a.createElement("li",{key:e.id+e.label,"aria-selected":i===t,className:p.option,"data-test-id":"autocomplete-"+t,onClick:function(t){return null==l?void 0:l({event:t,value:e})},role:"option"},e.label,e.subLabel&&a.createElement("div",{className:p.subLabel},e.subLabel))})))})),p=n(94184),h=n.n(p),f=n(63366),m=n(13234),v=n.n(m),g=["setHighlightedItem"],I=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=[]),t.findIndex((function(t){return t.label===e}))},w=function(e){var t=e.name,n=e.onSelect,o=e.options,i=e.setHighlightedItem,r=e.setInputValue,l=e.setIsOpen;return function(e){var a=e.event,s=e.value,u=void 0===s?{}:s;a.preventDefault();var c=u.label,d=Object.assign({},u,{name:t,value:c,event:a});n(d),r(c),i(I(c,o)),setTimeout((function(){l(!1)}),0)}},y=function(e){var t=e.highlightedItem,n=e.name,o=e.onSelect,i=e.options,r=e.setHighlightedItem,l=e.setInputValue,a=e.setIsOpen;return function(e){var s=e.event;if(s.keyCode===v()("Esc"))return a(!1);if(s.keyCode===v()("Up"))return s.preventDefault(),function(e){var t=e.highlightedItem,n=e.setHighlightedItem;t>0&&n(t-1)}({highlightedItem:t,setHighlightedItem:r});if(s.keyCode===v()("Down"))return s.preventDefault(),function(e){var t,n,o=e.setHighlightedItem,i=(0,f.Z)(e,g);return o((n=(t=i).highlightedItem)<t.options.length-1?n+1:n)}({highlightedItem:t,setHighlightedItem:r,options:i});var u=i[t];return s.keyCode===v()("Enter")&&u?w({name:n,options:i,onSelect:o,setInputValue:l,setIsOpen:a,setHighlightedItem:r})({value:u,event:s}):null}},b=function(e,t){setTimeout((function(){var n;(null==(n=e.current)?void 0:n.contains(document.activeElement))||t()}),0)},C=function(e){var t=e.onBlur,n=e.setIsOpen,o=e.wrapperRef;return function(e){null!=o&&o.current&&b(o,(function(){n(!1),t(e)}))}},E=function(){},L=(0,i.A)({Autocomplete:d,Input:o.I,ArrowIcon:r.e,styles:{wrapper:"ae0oo"}})((function(e){var t=e.allowToShowEmptyListMessage,n=e.dataTestId,o=void 0===n?"input":n,i=e.ArrowIcon,r=e.Autocomplete,l=e.Input,s=e.addHiddenInput,u=void 0!==s&&s,c=e.arrow,d=void 0===c||c,p=e.autoComplete,f=void 0===p?"off":p,m=e.caption,v=void 0===m?"":m,g=e.children,L=e.disabled,k=void 0!==L&&L,O=e.error,S=void 0!==O&&O,T=e.forwardedRef,A=e.name,x=void 0===A?"":A,D=e.onCancel,H=e.onChange,_=e.onEmptyListMessageClick,N=e.options,M=void 0===N?[]:N,R=e.placeholder,B=void 0===R?"":R,j=e.onClick,V=e.readOnly,K=void 0!==V&&V,P=e.styles,Z=e.success,F=void 0!==Z&&Z,U=e.value,q=void 0===U?"":U,z=e.type,G=void 0===z?"text":z,J=e.onBlur,Q=void 0===J?E:J,W=e.onFocus,X=void 0===W?E:W,Y=e.className,$=e.onSelect,ee=void 0===$?E:$,te=(0,a.useRef)(null),ne=T||(0,a.createRef)(),oe=(0,a.useRef)(null),ie=(0,a.useState)(!1),re=ie[0],le=ie[1],ae=(0,a.useState)(q),se=ae[0],ue=ae[1],ce=(0,a.useState)(I(se,M)),de=ce[0],pe=ce[1];return(0,a.useEffect)((function(){pe(I(q,M))}),[q,M]),a.createElement("div",{ref:te,className:h()(P.wrapper,Y)},a.createElement(l,{addHiddenInput:u,autoComplete:f,caption:v,dataTestId:o,disabled:k,error:S,forwardedRef:ne,hideStatusIcon:!H,name:x,onBlur:C({wrapperRef:te,setIsOpen:le,onBlur:Q}),onCancel:D,onChange:function(e){null==H||H(e),re||le(!0)},onClick:function(){return le(!0)},onFocus:function(e){le(!0),X(e)},onKeyDown:y({name:x,options:M,highlightedItem:de,setInputValue:ue,setIsOpen:le,setHighlightedItem:pe,onSelect:ee}),placeholder:B,readOnly:K,success:F,type:G,value:q}),d&&!H&&a.createElement(i,{isOpen:re&&!k,onBlur:function(){b(te,(function(){le(!1)}))},onClick:function(e){null==j||j({event:e}),le(!re)},tabIndex:-1}),re&&!k&&a.createElement(r,{allowToShowEmptyListMessage:t,autocompleteRef:oe,highlightedItem:de,onEmptyListMessageClick:_,onSelect:w({name:x,options:M,onSelect:ee,setInputValue:ue,setIsOpen:le,setHighlightedItem:pe}),options:M},g))}))}}]);
//# sourceMappingURL=81943.6ea0d871.es5.js.map