"use strict";(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_minimal_v2=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_minimal_v2||[]).push([[311],{6311:function(t,e,n){n.r(e),n.d(e,{default:function(){return P}});var r,o=n(7378),i=n(2757),a=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(t){function e(e){var n=t.call(this,e)||this;return n.name="AssertionError",n}return a(e,t),e}(Error);function c(t,e){if(!t)throw new l(e)}function u(t){var e=Object.entries(t).filter((function(t){var e=t[1];return null!=e})).map((function(t){var e=t[0],n=t[1];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(String(n)))}));return e.length>0?"?".concat(e.join("&")):""}var s=n(42),h=n.n(s),f=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(){return d=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},d.apply(this,arguments)},p=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(e){i(e)}}function l(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,l)}c((r=r.apply(t,e||[])).next())}))},w=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(l){i=[6,l],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},y=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};var b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var n,r,o=e.props,i=o.onShareWindowClose,a=o.windowHeight,l=void 0===a?400:a,c=o.windowPosition,u=void 0===c?"windowCenter":c,s=o.windowWidth,h=void 0===s?550:s;!function(t,e,n){var r=e.height,o=e.width,i=y(e,["height","width"]),a=d({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),l=window.open(t,"",Object.keys(a).map((function(t){return"".concat(t,"=").concat(a[t])})).join(", "));if(n)var c=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(c),n(l))}catch(t){console.error(t)}}),1e3)}(t,d({height:l,width:h},"windowCenter"===u?(n=h,r=l,{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-n/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-r/2}):function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}}(h,l)),i)},e.handleClick=function(t){return p(e,void 0,void 0,(function(){var e,n,r,o,i,a,l,c,u,s;return w(this,(function(h){switch(h.label){case 0:return e=this.props,n=e.beforeOnClick,r=e.disabled,o=e.networkLink,i=e.onClick,a=e.url,l=e.openShareDialogOnClick,c=e.opts,u=o(a,c),r?[2]:(t.preventDefault(),n?(s=n(),!(f=s)||"object"!=typeof f&&"function"!=typeof f||"function"!=typeof f.then?[3,2]:[4,s]):[3,2]);case 1:h.sent(),h.label=2;case 2:return l&&this.openShareDialog(u),i&&i(t,u),[2]}var f}))}))},e}return f(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),n=t.className,r=t.disabled,i=t.disabledStyle,a=t.forwardedRef,l=(t.networkLink,t.networkName),c=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),u=t.style,s=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,y(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=h()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=d(d(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),r&&i);return o.createElement("button",d({},s,{"aria-label":s["aria-label"]||l,className:f,onClick:this.handleClick,ref:a,style:p}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(o.Component),v=b,g=function(){return g=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},g.apply(this,arguments)};var m=function(t,e,n,r){function i(i,a){var l=n(i),c=g({},i);return Object.keys(l).forEach((function(t){delete c[t]})),o.createElement(v,g({},r,c,{forwardedRef:a,networkName:t,networkLink:e,opts:n(i)}))}return i.displayName="ShareButton-".concat(t),(0,o.forwardRef)(i)};var k=m("facebook",(function(t,e){var n=e.quote,r=e.hashtag;return c(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+u({u:t,quote:n,hashtag:r})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400});var O=m("twitter",(function(t,e){var n=e.title,r=e.via,o=e.hashtags,i=void 0===o?[]:o,a=e.related,l=void 0===a?[]:a;return c(t,"twitter.url"),c(Array.isArray(i),"twitter.hashtags is not an array"),c(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+u({url:t,text:n,via:r,hashtags:i.length>0?i.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400});var _=m("linkedin",(function(t,e){var n=e.title,r=e.summary,o=e.source;return c(t,"linkedin.url"),"https://linkedin.com/shareArticle"+u({url:t,mini:"true",title:n,summary:r,source:o})}),(function(t){return{title:t.title,summary:t.summary,source:t.source}}),{windowWidth:750,windowHeight:600});var j=m("email",(function(t,e){var n=e.subject,r=e.body,o=e.separator;return"mailto:"+u({subject:n,body:r?r+o+t:t})}),(function(t){return{subject:t.subject,body:t.body,separator:t.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(t,e){window.location.href=e}}),C=n(2551),S=n(4359);const x={wrapper:{alignItems:"center"},heading:{color:"omegaDark",mr:1,mb:0}};var P=t=>{let{location:e,title:n}=t;const r=e&&e.href,o={facebook:t=>{let{children:e}=t;return(0,S.tZ)(k,{url:r,quote:n},e)},twitter:t=>{let{children:e}=t;return(0,S.tZ)(O,{url:r,title:n},e)},linkedin:t=>{let{children:e}=t;return(0,S.tZ)(_,{url:r,quote:n},e)},email:t=>{let{children:e}=t;return(0,S.tZ)(j,{url:r,subject:n},e)}},a=(0,C.Z)(Object.keys(o).map((t=>({name:t}))));return(0,S.tZ)(i.kC,{sx:x.wrapper},(0,S.tZ)(i.X6,{variant:"h5",sx:x.heading},"Share"),a.map((t=>{let{name:e,color:n,Icon:r}=t;const a=o[e];return a&&(0,S.tZ)(i.hU,{as:"span",variant:"simple",key:"share-"+e,sx:{color:n}},(0,S.tZ)(a,null,(0,S.tZ)(r,null)))})))}}}]);
//# sourceMappingURL=311-843905573227c84ced1c.js.map