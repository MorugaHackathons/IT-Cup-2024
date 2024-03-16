"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[34737],{50659:function(e,t,n){function i(e,t,n){return Array.from(e).sort((function(e,n){return+e[t]-+n[t]})).find((function(e,i,r){return r.length-1===i||e[t]>=n}))}n.d(t,{j:function(){return a}});var r=n(70264),a=function(){function e(e,t){this.config=e,this.currency=t}var t=e.prototype;return t.filterDepositsByMinAmount=function(e){var t=this;return this.config.filter((function(n){var i=n.minAmounts[t.currency]||0;return e>i}))},t.findDeposit=function(e,t,n){return n?this.config.find((function(n){return n.addition===e&&n.additionWithdrawal===t})):this.config.find((function(n){return n.addition===e&&n.additionWithdrawal===t}))||this.config.find((function(n){return n.addition===e||n.additionWithdrawal===t}))},t.isDepositWithOptionsAvailable=function(e,t,n,i){var r=this,a=this.findDeposit(t,n,i);return!(null==a||!a.currencies.find((function(e){return e.currency===r.currency})))&&((null==a?void 0:a.minAmounts[this.currency])||0)<e},t.fixPeriod=function(e,t,n){var i=this.findPeriods(e,t);return i?i.some((function(e){return e.period===n}))?n:i.reduce((function(e,t){return t.period>e?t.period:e}),0)||0:n},t.findPeriods=function(e,t){var n,i=this,r=this.config.find((function(n){return n.addition===e&&n.additionWithdrawal===t}));return null==r||null==(n=r.currencies.find((function(e){return e.currency===i.currency})))?void 0:n.maxAmounts[0].periods},t.isTimePeriodAvailable=function(e,t,n){var i=this.findPeriods(e,t);return null==i?void 0:i.some((function(e){return n===e.period}))},t.calculate=function(e,t,n,r){var a,o=this,l=i((null==(a=e.currencies.find((function(e){return e.currency===o.currency})))?void 0:a.maxAmounts)||[],"maxAmount",t),d=i((null==l?void 0:l.periods)||[],"period",n),c=(null==d?void 0:d.packages.standard.defRate)||0,u=(null==d?void 0:d.packages.premium.defRate)||0,s=null==d?void 0:d.packages.standard.capitalization,m=null==d?void 0:d.packages.premium.capitalization,f=c;r&&s&&(f+=s);var p=u;r&&m&&(p+=m);var h=t*(n/12)*(f/100),v=t*(n/12)*(p/100);return{standard:[Number(f.toFixed(2)),Number((h+t).toFixed(0)),Number(h.toFixed(0))],premium:[Number(p.toFixed(2)),Number((v+t).toFixed(0)),Number(v.toFixed(0))],premiumCapitalization:m}},t.calculateByConditions=function(e,t,n,i,r){var a=this.findDeposit(n,i);return this.calculate(a,e,t,r)},t.findMaxRate=function(e,t){var n=this,i=this.config.map((function(i){return n.calculate(i,e,t).premium[0]})),r=i.indexOf(Math.max.apply(Math,i)),a=this.config[r];return{addition:a.addition,additionWithdrawal:a.additionWithdrawal,capitalization:a.capitalization}},t.formatCalculation=function(e,t){var n=e[0],i=e[1],a=e[2];return[(0,r.s5)(n),(0,r.OH)(i,t),"+ "+(0,r.OH)(a,t)]},e}()},54632:function(e,t,n){n.d(t,{S:function(){return o}});var i=n(87462),r=n(67294),a=n(4940),o=function(e){return r.createElement(a.a,(0,i.Z)({indentType:"none",marker:"•"},e))}},21232:function(e,t,n){n.d(t,{B:function(){return d}});var i=n(67294),r=n(94184),a=n.n(r),o=n(35244),l=n(6293),d=function(e){var t,n=e.List,r=e.Text,d=e.Tooltip,c=e.children,u=e.currency,s=e.isMobile,m=e.premiumInfo,f=e.showCloseButton,p=void 0!==f&&f,h=e.styles;return i.createElement(d,{className:a()((t={},t[l.Z.tooltip]=s,t[l.Z.external]=s,t[o.Z.tooltip]=!s,t[o.Z.external]=!s,t)),content:i.createElement(i.Fragment,null,i.createElement(r,{styler:{marginTop:0},view:s?"secondary-medium":"primary-small"},m.text),i.createElement(n,{className:a()(h.premiumInfoList,h.external),indentType:"none",marker:"•"},m.list.map((function(e){return i.createElement(r,{key:e,styler:{marginTop:0,marginBottom:0},view:s?"secondary-medium":"primary-small"},e)})))),contentContainerProps:{showCloseButton:p},dataTestId:"premiumLabel-"+u,placement:"top",tooltipHideTimeout:100},c)}},38536:function(e,t,n){n.d(t,{i:function(){return u}});var i=n(2154),r=n(13729),a=n(67294),o=n(94184),l=n.n(o),d=n(35244),c=n(6293),u=function(e){var t,n=e.children,o=e.className,u=e.dataTestId,s=e.isMobile,m=void 0!==s&&s,f=e.showCloseButton,p=void 0!==f&&f;return a.createElement("span",{className:o},a.createElement(r.W,{className:l()((t={},t[c.Z.tooltip]=m,t[c.Z.external]=m,t[d.Z.tooltip]=!m,t[d.Z.external]=!m,t)),content:n,contentContainerProps:{showCloseButton:p},dataTestId:u,isHover:!m,placement:"top",tooltipHideTimeout:m?void 0:100},a.createElement("span",{className:d.Z.tooltipIcon},a.createElement(i.q,{height:16,width:16}))))}},28569:function(e,t,n){n.d(t,{R:function(){return p}});var i=n(67294),r=n(94184),a=n.n(r),o=n(98007),l=n(88959),d=n(71240),c=n(38536),u="a1JYN",s="b1JYN",m="c1JYN",f="d1JYN",p=function(e){var t=e.capitalization,n=e.currency,r=e.isMobile,p=e.mainSettingsText,h=p.markedCheckbox,v=p.markedCheckboxInfo,g=p.usdTitle;return i.createElement(i.Fragment,null,i.createElement(l.x,{className:a()(u,s),kind:"caption",view:"component-secondary"},g),t,i.createElement("div",{className:d.Z.verticalAlign,"data-test-id":"fake-checkbox",style:{marginTop:8}},i.createElement("div",{className:f},(0,o.w)("checkmark","m")),i.createElement(l.x,{className:a()(m,s),styler:{margin:0}},h),i.createElement(c.i,{className:a()(d.Z.simpleTooltip,d.Z.external),dataTestId:"infoAboutConditions-"+n,isMobile:r,showCloseButton:r},i.createElement(l.x,{styler:{marginTop:0,marginBottom:0},view:r?"secondary-medium":"primary-small"},v[n]))))}},39898:function(e,t,n){n.d(t,{aL:function(){return i},qP:function(){return r},qE:function(){return a},Dw:function(){return o}});var i={amount:"amount",period:"period",refill:"refill",withdrawal:"withdrawal",terms:"terms",capitalization:"capitalization"},r={min:500,max:1e5,step:5e3},a=2e4,o=12},21676:function(e,t,n){n.d(t,{m:function(){return d}});var i=n(95142),r=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},a=function(e,t){return e===t},o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){var n={};return e.subscribe((function(o){var l=o.values;e.batch((function(){var o=function(t,a,o){var d=l&&(0,i.u9)(l,t),c=n&&(0,i.u9)(n,t);if(!a(d,c))if("function"==typeof o){var u=o(d,t,l,n);r(u)?u.then((function(t){Object.keys(t).forEach((function(n){e.change(n,t[n])}))})):Object.keys(u).forEach((function(t){e.change(t,u[t])}))}else Object.keys(o).forEach((function(t){var i=(0,o[t])(d,l,n);r(i)?i.then((function(n){e.change(t,n)})):e.change(t,i)}))},d=e.getRegisteredFields();t.forEach((function(e){var t=e.field,n=e.isEqual,i=e.updates;if("string"==typeof t)o(t,n||a,i);else{var r=Array.isArray(t)?function(e){return~t.indexOf(e)||-1!==t.findIndex((function(t){return t instanceof RegExp&&t.test(e)}))}:function(e){return t.test(e)};d.forEach((function(e){r(e)&&o(e,n||a,i)}))}})),n=l}))}),{values:!0})}},l=n(39898),d=function(e,t){var n,i,r,a,d,c=function(e){return function(t,n){var i=n.amount,r=n.capitalization,a=n.period,o=n.refill,l=n.withdrawal;return r&&e.calculateByConditions(i,a,o,l,!0)}}(t);return o({field:l.aL.terms,updates:(n={},n[l.aL.refill]=function(e,n){var i=n.amount,r=n.period;return t.findMaxRate(i,r).addition},n[l.aL.withdrawal]=function(e,n){var i=n.amount,r=n.period;return t.findMaxRate(i,r).additionWithdrawal},n[l.aL.capitalization]=c,n)},{field:l.aL.refill,updates:(i={},i[l.aL.capitalization]=c,i[l.aL.period]=function(e,n){var i=n.period,r=n.refill,a=n.withdrawal;return t.fixPeriod(r,a,i)},i)},{field:l.aL.withdrawal,updates:(r={},r[l.aL.capitalization]=c,r[l.aL.refill]=function(e,n){var i=n.refill,r=t.findDeposit(i,e);return r?r.addition:i},r[l.aL.period]=function(e,n){var i=n.period,r=n.refill,a=n.withdrawal;return t.fixPeriod(r,a,i)},r)},{field:l.aL.period,updates:(a={},a[l.aL.capitalization]=c,a)},{field:l.aL.amount,updates:(d={},d[l.aL.capitalization]=c,d[l.aL.refill]=function(e,n){var i=n.refill,r=t.filterDepositsByMinAmount(e);return 1===r.length?r[0].addition:i},d[l.aL.withdrawal]=function(e,n){var i=n.withdrawal,r=t.filterDepositsByMinAmount(e);return 1===r.length?r[0].additionWithdrawal:i},d)})}},70264:function(e,t,n){n.d(t,{s5:function(){return r},KY:function(){return a},OH:function(){return o}});var i=n(2097),r=function(e){return new Intl.NumberFormat("ru-RU",{style:"percent",minimumFractionDigits:2}).format(e/100)},a=function(e){return i.uA.money[e]},o=function(e,t){return void 0===t&&(t="rub"),new Intl.NumberFormat("ru-RU",{minimumFractionDigits:0}).format(e)+" "+a(t)}},40642:function(e,t,n){n.d(t,{I:function(){return a}});var i=n(67294),r=n(39898);function a(e){var t=e.calculatorCore,n=e.currency,a=e.defaultSumAndPeriodByCurrency;return(0,i.useMemo)((function(){var e,i,o,l,d,c=null!==(e=null==(i=a[n])?void 0:i.sum)&&void 0!==e?e:r.qE,u=null!==(o=null==(l=a[n])?void 0:l.period)&&void 0!==o?o:r.Dw,s=t.findMaxRate(c,u),m=s.addition,f=s.additionWithdrawal;return(d={})[r.aL.amount]=c,d[r.aL.period]=u,d[r.aL.refill]=m,d[r.aL.withdrawal]=f,d[r.aL.capitalization]=!0,d[r.aL.terms]="max",d}),[t,a,n])}},28992:function(e,t,n){n.d(t,{u:function(){return i}});var i=function(e,t){return function(n){var i=parseInt(n,10);return i&&i>=e?void 0:t}}},55195:function(e,t,n){n.d(t,{b:function(){return d},i:function(){return u}});var i=n(67294),r=n(94184),a=n.n(r),o=n(88959),l=n(6293),d=["interestRate","amountAtTheEnd","depositIncome"],c=function(e){var t,n=e.dataTest,r=e.highlight,c=e.isShort,u=e.label,s=e.value,m=n,f=m.currency,p=m.position;return i.createElement("div",{className:a()(l.Z.tableRow,l.Z.external,(t={},t[l.Z.short]=c,t))},i.createElement(o.x,{dataTestId:d[p]+"-"+f,styler:{marginTop:0,marginBottom:0},view:"primary-small"},u),i.createElement(o.x,{className:a()(l.Z.tableValue,l.Z.external,r&&l.Z.tableValueHighlight),dataTestId:d[p]+"-value-"+f,styler:{marginTop:0,marginBottom:0}},s))},u=function(e){var t=e.currency,n=e.highlightFirstRow,r=e.isShort,a=e.labels,o=e.values;return i.createElement("div",{className:l.Z.table},a.map((function(e,a){return i.createElement(c,{key:e,dataTest:{currency:t,position:a},highlight:n&&0===a,isShort:r,label:e,value:o[a]})})))}},4940:function(e,t,n){n.d(t,{a:function(){return l}});var i=n(45761),r=n(67294),a=n(94184),o=n.n(a),l=(0,i.A)({styles:{marker:"a2Tco",listItem:"b2Tco",horizontalListItem:"c2Tco",indent_12:"d2Tco",indent12:"d2Tco",indent_24:"e2Tco",indent24:"e2Tco",indent_horizontal:"f2Tco",indentHorizontal:"f2Tco",list:"g2Tco",orderedList:"h2Tco",listNowrap:"i2Tco",orderedListItem:"j2Tco",indent_default:"k2Tco",indentDefault:"k2Tco",marginCollapseFirst:"l2Tco",marginCollapseLast:"m2Tco",redMarker:"n2Tco"}})((function(e){var t,n,i,a=e.children,l=e.className,d=e.horizontal,c=void 0!==d&&d,u=e.indentType,s=void 0===u?"default":u,m=e.itemClassName,f=e.marginCollapseFirst,p=void 0!==f&&f,h=e.marginCollapseLast,v=void 0!==h&&h,g=e.marker,k=void 0===g?"—":g,b=e.markerColor,y=void 0===b?"rgb(239, 49, 36)":b,w=e.nowrap,I=void 0!==w&&w,x=e.olRedMarker,T=void 0!==x&&x,L=e.olType,E=e.styles,N=e.svgMargin,A=void 0===N?"0 8px 0 0":N,B=e.svgSrc,C=void 0===B?"":B,z=e.svgWidth,F=void 0===z?"auto":z,Q=e.type;switch(void 0===Q?"div":Q){case"ul":n="ul",i="li";break;case"ol":n="ol",i="li";break;default:n="div",i="div"}return r.createElement(n,{className:o()(E.list,(t={},t[E.orderedList]=L,t[E.listNowrap]=I,t),l),type:L},r.Children.toArray(a).map((function(e,t){var n,a,l;return r.createElement(i,{key:"listItem-"+t,className:o()(Object.assign((n={},n[E.listItem]=!c,n[E.horizontalListItem]=c,n),"none"===s?{indent_none:!0}:(a={},a[E["indent_"+s]]=s,a),(l={},l[E.marginCollapseFirst]=p,l[E.marginCollapseLast]=v,l[E.orderedListItem]=L,l[E.redMarker]=T,l)),m)},(k||C)&&r.createElement("div",{className:E.marker,style:{color:y,margin:A}},C?r.createElement("img",{alt:"icon",src:C,style:{width:F}}):k),(0,r.cloneElement)(e,{style:{margin:0,padding:0}}))})))}))},53026:function(e,t,n){n.d(t,{E:function(){return d}});var i=n(45761),r=n(67294),a=n(94184),o=n.n(a),l=(0,r.memo)((function(e){var t=e.align,n=void 0===t?"vertical":t,i=e.children,a=e.className,l=e.styles;return r.createElement("div",{className:o()(l.radioGroup,l[n+"Align"],a)},r.Children.map(i,(function(e){return r.createElement("div",{className:l.item},e)})))}));l.displayName="RadioGroup";var d=(0,i.A)({styles:{radioGroup:"aqG0O",verticalAlign:"bqG0O",horizontalAlign:"cqG0O",item:"dqG0O"}})(l)},5140:function(e,t,n){n.r(t),n.d(t,{Radio:function(){return d}});var i=n(45761),r=n(67294),a=n(94184),o=n.n(a),l=(0,r.memo)((function(e){var t,n=e.checked,i=e.children,a=e.dataTestId,l=void 0===a?"radio":a,d=e.defaultChecked,c=e.disabled,u=e.forwardedRef,s=e.name,m=e.onBlur,f=e.onChange,p=e.onFocus,h=e.size,v=void 0===h?"s":h,g=e.styles,k=e.tabIndex,b=e.theme,y=void 0===b?"white":b,w=e.value,I=o()(g.radio,g[v+"Size"],g[y+"Theme"],((t={})[g.disabled]=c,t[g.checked]=n&&!c,t));return r.createElement("label",{className:I,"data-test-id":l,tabIndex:k},r.createElement("input",{ref:u,checked:n,defaultChecked:d,disabled:c,name:s,onBlur:m,onChange:function(e){f&&f(e)},onFocus:p,type:"radio",value:w}),r.createElement("div",{className:g.radioBlock},r.createElement("div",{className:g.control}),r.createElement("div",{className:g.label},i)))}));l.displayName="Radio";var d=(0,i.A)({styles:{radio:"a1HFB",control:"b1HFB",checked:"c1HFB",disabled:"d1HFB",whiteTheme:"e1HFB",blueTheme:"f1HFB",blackTheme:"g1HFB",sSize:"h1HFB",label:"i1HFB",mSize:"j1HFB",lSize:"k1HFB",radioBlock:"l1HFB"}})(l)},18445:function(e,t,n){n.d(t,{V:function(){return l}});var i=n(88959),r=n(45761),a=n(33372),o=n(57767),l=(0,r.A)({styles:o.Z,Text:i.x})(a.V)},33372:function(e,t,n){n.d(t,{V:function(){return d}});var i=n(67294),r=n(94184),a=n.n(r),o=function(){},l={xs:"component-secondary",s:"component",m:"component",l:"primary-large"},d=(0,i.memo)((function(e){var t,n,r,d,c=e.Text,u=e.bordered,s=e.className,m=e.classNames,f=e.dataTestId,p=e.disabled,h=e.forwardedRef,v=e.label,g=e.onClick,k=void 0===g?o:g,b=e.selected,y=e.size,w=void 0===y?"m":y,I=e.styles,x=e.tabIndex,T=e.role,L=e.returnEvent,E=e.allOnclickArguments,N=void 0!==E&&E,A=e.value,B=e.inline,C=e.theme,z=void 0===C?"white":C,F=e.rightAddons,Q=e.leftAddons,H=A===b,R=a()(I.tag,I.size,((t={})[I.selected]=H,t[I.hovered]=!H&&!p,t[I.disabled]=p,t[I.withRightAddons]=Boolean(F),t[I.withLeftAddons]=Boolean(Q),t),I[w+"Size"],((n={})[I.bordered]=u,n),I[z],m,s),Z=a()(I.external,I.text,((r={})[I.selectedText]=H,r));return i.createElement("button",{ref:h,className:R,"data-test-id":f,"data-test-selected":H||void 0,onClick:function(e){N?k(e,A):k(L?e:A)},role:T,tabIndex:x,type:"button"},Q?i.createElement("span",{className:I.addons},Q):null,i.createElement(c,{className:a()(Z,(d={},d[a()(I.block,I.external)]=!B,d)),styler:{margin:0},tag:"span",view:l[w]},v),F?i.createElement("span",{className:I.addons},F):null)}))},35244:function(e,t){t.Z={wrapper:"a2lIQ",short:"b2lIQ",container:"c2lIQ",tagsWrapper:"d2lIQ",tableWrapper:"e2lIQ",tableFooter:"f2lIQ",footerLink:"g2lIQ",caption:"h2lIQ",buttonsLine:"i2lIQ",withoutCurrencies:"j2lIQ",leftButton:"k2lIQ",external:"l2lIQ",rightButton:"m2lIQ",calcButtons:"n2lIQ",labelWithIcon:"o2lIQ",fakeDisableCheckbox:"p2lIQ",icon:"q2lIQ",previewText:"r2lIQ",capitalizationHeader:"s2lIQ",periodHolder:"t2lIQ",periodTag:"u2lIQ",currencyHolder:"v2lIQ",calcFooterText:"w2lIQ",maxRateHolder:"x2lIQ",maxRateTooltip:"y2lIQ",premiumInfoList:"z2lIQ",positivePercent:"A2lIQ",tooltipIcon:"B2lIQ",info:"C2lIQ",infoLink:"D2lIQ",error:"E2lIQ",termsChoosingRadio:"F2lIQ",optionsWrapper:"G2lIQ",tooltip:"H2lIQ",label:"I2lIQ"}},6293:function(e,t){t.Z={lightBg:"andk1",fakeDisableTag:"bndk1",external:"cndk1",whiteBg:"dndk1",header:"endk1",tagsRow:"fndk1",tagsRowWrapper:"gndk1",tagsRowIndent:"hndk1",footerItem:"indk1",footerText:"jndk1",fieldsHolder:"kndk1",periodRow:"lndk1",maxRateHolder:"mndk1",termsRow:"nndk1",table:"ondk1",tableRow:"pndk1",short:"qndk1",tableValue:"rndk1",tableValueHighlight:"sndk1",premiumLabel:"tndk1",takePremiumLabel:"undk1",premiumLabelTextWrapper:"vndk1",premiumLabelIcon:"wndk1",premiumInfoList:"xndk1",takePremiumLink:"yndk1",takePremiumProfit:"zndk1",moreOptionsButton:"Andk1",moreOptionsButtonCounter:"Bndk1",moreOptionsButtonArrow:"Cndk1",optionsModalContent:"Dndk1",optionsModalLayout:"Endk1",optionsModalLayoutContent:"Fndk1",optionsModalChildren:"Gndk1",positivePercent:"Hndk1",minAmountBox:"Indk1",minAmountHeader:"Jndk1",minAmountDesc:"Kndk1",info:"Lndk1",infoLink:"Mndk1",error:"Nndk1",tooltip:"Ondk1"}},71240:function(e,t){t.Z={verticalAlign:"a3p4e",simpleTooltip:"b3p4e",external:"c3p4e"}},57767:function(e,t){t.Z={tag:"a28gX",disabled:"b28gX",addons:"c28gX",withRightAddons:"d28gX",xsSize:"e28gX",sSize:"f28gX",mSize:"g28gX",lSize:"h28gX",withLeftAddons:"i28gX",white:"j28gX",text:"k28gX",external:"l28gX",selected:"m28gX",selectedText:"n28gX",hovered:"o28gX",bordered:"p28gX",lightInverted:"q28gX",size:"r28gX",block:"s28gX"}}}]);
//# sourceMappingURL=34737.5cb67330.es5.js.map