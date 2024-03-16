"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[74093],{66688:function(e,t,n){n.d(t,{gN:function(){return _},l0:function(){return y},U$:function(){return C},cI:function(){return h},cl:function(){return O},i8:function(){return v}});var r=n(87462),i=n(63366),u=n(67294),a=n(95142);function o(e,t,n){var r=e.render,a=e.children,o=e.component,c=(0,i.Z)(e,["render","children","component"]);if(o)return(0,u.createElement)(o,Object.assign(t,c,{children:a,render:r}));if(r)return r(void 0===a?Object.assign(t,c):Object.assign(t,c,{children:a}));if("function"!=typeof a)throw new Error("Must specify either a render prop, a render function as children, or a component prop to "+n);return a(Object.assign(t,c))}function c(e,t,n){void 0===n&&(n=function(e,t){return e===t});var r=u.useRef(e);u.useEffect((function(){n(e,r.current)||(t(),r.current=e)}))}var l=function(e,t){if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<n.length;u++){var a=n[u];if(!i(a)||e[a]!==t[a])return!1}return!0},s=function(e){return!(!e||"function"!=typeof e.stopPropagation)},f=(0,u.createContext)();function d(e){var t=u.useRef(e);return u.useEffect((function(){t.current=e})),t}var v="6.4.0",m=function(e,t,n){n.forEach((function(n){Object.defineProperty(e,n,{get:function(){return t[n]},enumerable:!0})}))},p=function(e,t){return m(e,t,["active","dirty","dirtyFields","dirtySinceLastSubmit","dirtyFieldsSinceLastSubmit","error","errors","hasSubmitErrors","hasValidationErrors","initialValues","invalid","modified","pristine","submitError","submitErrors","submitFailed","submitSucceeded","submitting","touched","valid","validating","values","visited"])},b={"final-form":a.i8,"react-final-form":v},g=a._R.reduce((function(e,t){return e[t]=!0,e}),{});function y(e){var t,n,v=e.debug,m=e.decorators,y=e.destroyOnUnregister,h=e.form,O=e.initialValues,E=e.initialValuesEqual,S=e.keepDirtyOnReinitialize,V=e.mutators,F=e.onSubmit,w=e.subscription,C=void 0===w?g:w,_=e.validate,k=e.validateOnBlur,R=(0,i.Z)(e,["debug","decorators","destroyOnUnregister","form","initialValues","initialValuesEqual","keepDirtyOnReinitialize","mutators","onSubmit","subscription","validate","validateOnBlur"]),A={debug:v,destroyOnUnregister:y,initialValues:O,keepDirtyOnReinitialize:S,mutators:V,onSubmit:F,validate:_,validateOnBlur:k},B=(t=function(){var e=h||(0,a.Np)(A);return e.pauseValidation(),e},(n=u.useRef()).current||(n.current=t()),n.current),D=(0,u.useState)((function(){var e={};return B.subscribe((function(t){e=t}),C)(),e})),j=D[0],x=D[1],U=d(j);(0,u.useEffect)((function(){B.isValidationPaused()&&B.resumeValidation();var e=[B.subscribe((function(e){l(e,U.current)||x(e)}),C)].concat(m?m.map((function(e){return e(B)})):[]);return function(){B.pauseValidation(),e.reverse().forEach((function(e){return e()}))}}),[m]),c(v,(function(){B.setConfig("debug",v)})),c(y,(function(){B.destroyOnUnregister=!!y})),c(S,(function(){B.setConfig("keepDirtyOnReinitialize",S)})),c(O,(function(){B.setConfig("initialValues",O)}),E||l),c(V,(function(){B.setConfig("mutators",V)})),c(F,(function(){B.setConfig("onSubmit",F)})),c(_,(function(){B.setConfig("validate",_)})),c(k,(function(){B.setConfig("validateOnBlur",k)}));var L={form:(0,r.Z)({},B,{reset:function(e){s(e)?B.reset():B.reset(e)}}),handleSubmit:function(e){return e&&("function"==typeof e.preventDefault&&e.preventDefault(),"function"==typeof e.stopPropagation&&e.stopPropagation()),B.submit()}};return p(L,j),(0,u.createElement)(f.Provider,{value:B},o((0,r.Z)({},R,{__versions:b}),L,"ReactFinalForm"))}function h(e){var t=(0,u.useContext)(f);if(!t)throw new Error((e||"useForm")+" must be used inside of a <Form> component");return t}function O(e){var t=void 0===e?{}:e,n=t.onChange,r=t.subscription,i=void 0===r?g:r,a=h("useFormState"),o=(0,u.useRef)(!0),c=(0,u.useRef)(n);c.current=n;var l=(0,u.useState)((function(){var e={};return a.subscribe((function(t){e=t}),i)(),n&&n(e),e})),s=l[0],f=l[1];(0,u.useEffect)((function(){return a.subscribe((function(e){o.current?o.current=!1:(f(e),c.current&&c.current(e))}),i)}),[]);var d={};return p(d,s),d}var E="undefined"!=typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,S=a.bP.reduce((function(e,t){return e[t]=!0,e}),{}),V=function(e,t){return void 0===e?"":e},F=function(e,t){return""===e?void 0:e},w=function(e,t){return e===t};function C(e,t){void 0===t&&(t={});var n=t,i=n.afterSubmit,a=n.allowNull,o=n.component,c=n.data,l=n.defaultValue,s=n.format,f=void 0===s?V:s,v=n.formatOnBlur,p=n.initialValue,b=n.multiple,g=n.parse,y=void 0===g?F:g,O=n.subscription,C=void 0===O?S:O,_=n.type,k=n.validateFields,R=n.value,A=h("useField"),B=d(t),D=function(t,n){return A.registerField(e,t,C,{afterSubmit:i,beforeSubmit:function(){var t=B.current,n=t.beforeSubmit,r=t.formatOnBlur,i=t.format,u=void 0===i?V:i;if(r){var a=A.getFieldState(e).value,o=u(a,e);o!==a&&A.change(e,o)}return n&&n()},data:c,defaultValue:l,getValidator:function(){return B.current.validate},initialValue:p,isEqual:function(e,t){return(B.current.isEqual||w)(e,t)},silent:n,validateFields:k})},j=(0,u.useRef)(!0),x=(0,u.useState)((function(){var e={},t=A.destroyOnUnregister;return A.destroyOnUnregister=!1,D((function(t){e=t}),!0)(),A.destroyOnUnregister=t,e})),U=x[0],L=x[1];(0,u.useEffect)((function(){return D((function(e){j.current?j.current=!1:L(e)}),!1)}),[e,c,l,p]);var N={onBlur:(0,u.useCallback)((function(e){if(U.blur(),v){var t=A.getFieldState(U.name);U.change(f(t.value,U.name))}}),[U.name,f,v]),onChange:(0,u.useCallback)((function(t){var n=t&&t.target?function(e,t,n,r){if(!r&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(r&&e.nativeEvent)return e.nativeEvent.text;var i=e.target,u=i.type,a=i.value,o=i.checked;switch(u){case"checkbox":if(void 0!==n){if(o)return Array.isArray(t)?t.concat(n):[n];if(!Array.isArray(t))return t;var c=t.indexOf(n);return c<0?t:t.slice(0,c).concat(t.slice(c+1))}return!!o;case"select-multiple":return function(e){var t=[];if(e)for(var n=0;n<e.length;n++){var r=e[n];r.selected&&t.push(r.value)}return t}(e.target.options);default:return a}}(t,U.value,R,E):t;U.change(y(n,e))}),[R,e,y,U.change,U.value,_]),onFocus:(0,u.useCallback)((function(e){U.focus()}),[])},Z={};!function(e,t){m(e,t,["active","data","dirty","dirtySinceLastSubmit","error","initial","invalid","length","modified","pristine","submitError","submitFailed","submitSucceeded","submitting","touched","valid","validating","visited"])}(Z,U);var P=(0,r.Z)({name:e,get value(){var t=U.value;return v?"input"===o&&(t=V(t)):t=f(t,e),null!==t||a||(t=""),"checkbox"===_||"radio"===_?R:"select"===o&&b?t||[]:t},get checked(){return"checkbox"===_?void 0===R?!!U.value:!(!Array.isArray(U.value)||!~U.value.indexOf(R)):"radio"===_?U.value===R:void 0}},N);return b&&(P.multiple=b),void 0!==_&&(P.type=_),{input:P,meta:Z}}var _=function(e){var t=e.afterSubmit,n=e.allowNull,a=e.beforeSubmit,c=e.children,l=e.component,s=e.data,f=e.defaultValue,d=e.format,v=e.formatOnBlur,m=e.initialValue,p=e.isEqual,b=e.multiple,g=e.name,y=e.parse,h=e.subscription,O=e.type,E=e.validate,S=e.validateFields,V=e.value,F=(0,i.Z)(e,["afterSubmit","allowNull","beforeSubmit","children","component","data","defaultValue","format","formatOnBlur","initialValue","isEqual","multiple","name","parse","subscription","type","validate","validateFields","value"]),w=C(g,{afterSubmit:t,allowNull:n,beforeSubmit:a,children:c,component:l,data:s,defaultValue:f,format:d,formatOnBlur:v,initialValue:m,isEqual:p,multiple:b,parse:y,subscription:h,type:O,validate:E,validateFields:S,value:V});return"function"==typeof c?c((0,r.Z)({},w,{},F)):"string"==typeof l?(0,u.createElement)(l,(0,r.Z)({},w.input,{children:c},F)):o((0,r.Z)({children:c,component:l},F),w,"Field("+g+")")}}}]);
//# sourceMappingURL=peer-vendor-react-final-form.3fdad0c1.es5.js.map