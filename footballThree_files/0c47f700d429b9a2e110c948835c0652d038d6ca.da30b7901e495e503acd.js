(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"+eJU":function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));r("DQNa"),r("sMBO"),r("rB9j"),r("EnZy");var n=r("XVxM"),o=(r("ma9I"),r("TeQF"),r("oVuX"),r("2B1R"),r("E9XD"),r("zKZe"),r("tkto"),r("KQm4")),i=r("rePB"),a=r("1OyB"),c=r("vuIU"),u=r("ReuC"),s=r("Ji7U"),f=r("md7G"),p=r("foSv"),l=r("zOTh"),d=r("P9eV"),b=r("qhky");function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var o=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var g=function(e){Object(s.a)(r,e);var t=h(r);function r(e,n){var o;if(Object(a.a)(this,r),(o=t.call(this,"Omniture","omniture",e)).getState=function(){return n},window.s_gi){var i=o.s=window.s_gi(e.suite);i.trackingServer="metrics.sky.com",i.trackingServerSecure="smetrics.sky.com",i.trackDownloadLinks=!1,i.trackExternalLinks=!0,i.trackInlineStats=!0,i.linkInternalFilters="javascript:,".concat(window.location.hostname),i.linkLeaveQueryString=!1,i.linkTrackVars="None",i.linkTrackEvents="None",i.server=window.location.hostname}return o}return Object(c.a)(r,[{key:"isSetUp",value:function(){return!!this.s}},{key:"pageView",value:function(){var e,t=b.a.peek(),n=t&&t.title?t.title:document.getElementsByTagName("title")[0].innerHTML;this.s.pageName=n;var o=window.location.pathname.substr(1),i=o.split("/"),a=i.length;this.s.prop25="",this.s.prop27="",this.s.prop31="",a>0&&(this.s.prop25=i[0],this.s.channel=i[0]||"home"),a>1&&(this.s.prop27="".concat(i[0],"/").concat(i[1])),a>2&&(this.s.prop31=o),this.s.prop9=window.location.href;for(var c=arguments.length,s=new Array(c),f=0;f<c;f++)s[f]=arguments[f];(e=Object(u.a)(Object(p.a)(r.prototype),"pageView",this)).call.apply(e,[this].concat(s))}},{key:"getQueryStringValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.getState(),r=t.query,n=void 0===r?{}:r,o=Object.keys(n).reduce((function(e,t){return Object.assign(e,Object(i.a)({},t.toLowerCase(),n[t]))}),{}),a=o[e.toLowerCase()];return a}},{key:"getQueryStringVar",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return t.map((function(t){return e.getQueryStringValue(t)})).filter((function(e){return!!e})).join(r)}},{key:"permanentEvars",value:function(){return{eVar11:this.getState().auth.loggedIn?"logged-in":"not logged-in",eVar57:this.getQueryStringVar(["app","version"]),eVar37:""}}},{key:"permanentProps",value:function(){var e=this.getState().query,t=(e=void 0===e?{}:e).DCMP,r=void 0===t?"":t,n=e.aff;return{prop45:r,prop47:void 0===n?"":n}}},{key:"transformParams",value:function(e,t){var r=t.events,n=void 0===r?[]:r,o=t.evars,i=t.props;return{events:n,evars:o?Object(d.b)(e,o):{},props:i?Object(d.b)(e,i):{}}}},{key:"sendTracking",value:function(e,t,r){var n=t.events,i=void 0===n?[]:n,a=t.evars,c=void 0===a?{}:a,u=t.props,s=void 0===u?{}:u,f=r.isPage,p=void 0!==f&&f;c=v(v({},this.permanentEvars()),c),s=v(v({},this.permanentProps()),s);var l=[].concat(Object(o.a)(Object.keys(c)),Object(o.a)(Object.keys(s)),["events"]);this.setOmnitureVars(l,i),p?this.trackPage(c,s,i):this.trackLink(c,s,e),this.resetOmnitureVars()}},{key:"trackPage",value:function(e,t,r){this.s.t(v(v(v({},e),t),{},{events:r.join()}))}},{key:"trackLink",value:function(e,t,r){this.s.tl(!0,"o",r,v(v({},e),t),!1)}},{key:"setOmnitureVars",value:function(e,t){this.s.linkTrackVars=e.join(),this.s.linkTrackEvents=t.join(),this.s.events=t.join()}},{key:"resetOmnitureVars",value:function(){this.s.linkTrackVars="",this.s.linkTrackEvents="",this.s.events=""}}]),r}(l.a);function m(e,t){var r=e.signal,o=function(e,r){var n=e.setup;return{name:e.name,api:new r(n,t)}};return{vendors:[o(e.omniture,g),o(r,n.b)],pageDefaults:function(e){var t=e.pathname.substr(1).split("/");return{timestamp:new Date,build:1,siteName:"sptlfe-dev",category:t[0]?t[0]:"landing"}},pageViewEvent:"pageView"}}},"1OyB":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},"8+s/":function(e,t,r){"use strict";var n,o=r("q1tI"),i=(n=o)&&"object"===typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof r&&"function"!==typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!==typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),p.canUseDOM?t(u):r&&(u=r(u))}var p=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(p,"canUseDOM",c),p}}},BTho:function(e,t,r){"use strict";var n=r("HAuM"),o=r("hh1v"),i=[].slice,a={},c=function(e,t,r){if(!(t in a)){for(var n=[],o=0;o<t;o++)n[o]="a["+o+"]";a[t]=Function("C,a","return new C("+n.join(",")+")")}return a[t](e,r)};e.exports=Function.bind||function(e){var t=n(this),r=i.call(arguments,1),a=function(){var n=r.concat(i.call(arguments));return this instanceof a?c(t,n.length,n):t.apply(e,n)};return o(t.prototype)&&(a.prototype=t.prototype),a}},JX7q:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},Ji7U:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return o}))},NvsP:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return p}));var n=r("rePB"),o=r("q1tI"),i=r.n(o),a=r("20a2"),c=i.a.createElement;function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var s=Object(o.createContext)(),f=function(e){var t=e.children,r=Object(a.useRouter)(),i=Object(o.useState)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r.query))[0];return c(s.Provider,{value:{queryParamStore:i}},t)},p=function(){return Object(o.useContext)(s)}},P9eV:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));r("ma9I"),r("E9XD"),r("zKZe"),r("tkto"),r("rB9j"),r("UxlC");var n=r("rePB");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a=/([a-z])([A-Z])/g,c=function(e,t,r){return"".concat(t,"-").concat(r.toLowerCase())},u=function(e){return e.replace(a,c).toLowerCase()};function s(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(r){var n=i({eventName:e},t),o=function(e,t){return e["data-metrics-".concat(u(t))]=n[t],e};return Object.keys(n).reduce(o,{})}}function f(e,t){return Object.keys(e).reduce((function(r,n){return n in t&&(r[t[n]]=e[n]),r}),{})}},Qp06:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("yq1k"),r("JTJg");var n=r("2+Dk"),o=function(e){var t=Object(n.b)().authStore;return t.loggedIn&&t.user&&!t.user["com.sbgcore.can_link_to"].includes(e)}},ReuC:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("foSv");function o(e,t,r){return(o="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(n.a)(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}},U8pU:function(e,t,r){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,"a",(function(){return n}))},XVxM:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return l}));r("ma9I");var n=r("1OyB"),o=r("vuIU"),i=r("ReuC"),a=r("Ji7U"),c=r("md7G"),u=r("foSv"),s=r("zOTh");r("LvDl");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var p='!function(){"use strict";var n=function(n,t){return Object.prototype.hasOwnProperty.call(t,n)},t="function"==typeof Object.assign?Object.assign:function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),r=1,o=arguments.length;r<o;){var c=arguments[r];if(null!=c)for(var u in c)n(u,c)&&(e[u]=c[u]);r+=1}return e},e=function(n){return null!=n&&"object"==typeof n&&!0===n["@@functional/placeholder"]},r=function(n){return function t(r){return 0===arguments.length||e(r)?t:n.apply(this,arguments)}},o=function(n){return function t(o,c){switch(arguments.length){case 0:return t;case 1:return e(o)?t:r(function(t){return n(o,t)});default:return e(o)&&e(c)?t:e(o)?r(function(t){return n(t,c)}):e(c)?r(function(t){return n(o,t)}):n(o,c)}}}(function(n,e){return t({},n,e)});const c=(n,t,e)=>{const r=[],c=t=>{n.contentWindow.postMessage(t,e)};let u=!1;return n.addEventListener("load",()=>{u=!0,r.forEach(c)}),(n,e)=>{const a=o(e,{event:`${t}.${n}`});u?c(a):r.push(a)}},u=(n,t,e)=>{const r=n.createElement("iframe");return r.id="data-layer-iframe",r.sandbox="allow-scripts allow-same-origin",r.src=`${t}/tag-manager.html?consumer=${encodeURIComponent(e)}`,r.style.display="none",r};window.Taggert={report:((n,t)=>{const e=n.SIGNAL_CONSUMER||n.location.hostname,r=u(n.document,t,e);return document.body.appendChild(r),c(r,e,t)})(window,"https://www.bonne-terre-data-layer.com")}}();',l=function(e){Object(a.a)(r,e);var t=f(r);function r(e,o){return Object(n.a)(this,r),t.call(this,"SBG Signal","signal",e)}return Object(o.a)(r,[{key:"pageView",value:function(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];(e=Object(i.a)(Object(u.a)(r.prototype),"pageView",this)).call.apply(e,[this].concat(n)),this.trackDeviceId()}},{key:"trackDeviceId",value:function(){if(window.SkyBetAccount){var e=window.SkyBetAccount.getAppBridge();e&&e.trigger("getDeviceIDFA")}}},{key:"isSetUp",value:function(){return!!window.Taggert}},{key:"sendTracking",value:function(e,t){window.Taggert.report(e,t)}}]),r}(s.a)},amtG:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"c",(function(){return w})),r.d(t,"b",(function(){return j}));r("2B1R"),r("E9XD"),r("TFPT");var n=r("o0o1"),o=r.n(n),i=(r("ls82"),r("HaE+")),a=r("rePB"),c=r("q1tI"),u=r.n(c),s=r("LvDl"),f=r.n(s),p=r("2+Dk"),l=r("hhhN"),d=r("yHwE"),b=u.a.createElement;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=Object(c.createContext)(),g={loading:!1,loaded:!1,subscriptions:{}};var m=function(e,t){switch(t.type){case"subscriptionsLoading":return v(v({},e),{},{loading:!0});case"addSubscriptions":return v(v({},e),{},{loaded:!0,subscriptions:(r=e.subscriptions,n=t.subscriptions,n.reduce((function(e,t,r){var n=t.subscription_type,o=t.subscription_id,i=t.display_text,c=t.user_subscription_id;return f.a.merge(e,Object(a.a)({},n,Object(a.a)({},o,{text:i,subId:c})))}),r))});case"removeSubscription":return f.a.omit(e,[["subscriptions",t.subType,t.id]]);default:throw new Error("Unhandled action type: ".concat(t.type))}var r,n},O=function(e){var t=e.children,r=Object(c.useReducer)(m,g),n=r[0],o=r[1];return b(h.Provider,{value:{subscriptionStore:n,dispatch:o}},t)},w=function(){return Object(c.useContext)(h)},j=function(){var e=Object(p.b)().authStore,t=Object(d.b)().appBridgeStore,r=Object(p.c)().openLoginPrompt,n={user_reference:{external_reference:[{ref:"skybet",value:e.user.sub}]},email:e.user.email,roles:[{name:"PUNTER"}],devices:[{push_id:t.deviceId}]},a={headers:{Authorization:"Bearer "+localStorage.getItem("oauth_idToken")}},c=w(),u=c.subscriptionStore,s=c.dispatch;return{loadSubscriptions:function(){var t=Object(i.a)(o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!u.loaded&&!u.loading&&e.loggedIn){t.next=2;break}return t.abrupt("return");case 2:return s({type:"subscriptionsLoading"}),t.prev=3,t.next=6,l.a.post("/user/subscription/search",{user:n,filter:["HORSE","JOCKEY","TRAINER","RACE","FOOTBALL_MATCH"]},a);case 6:r=t.sent,s({type:"addSubscriptions",subscriptions:r.data.subscription}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log("error loading subscriptions");case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(){return t.apply(this,arguments)}}(),saveSubscriptions:function(){var t=Object(i.a)(o.a.mark((function t(i){var c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loggedIn){t.next=6;break}return c=i[i.length-1].type,"Add to My Stable",r(function(){switch(c){case"FOOTBALL_MATCH":case"RACE":return"Please log in on the iOS app to receive notifications for this event.";default:return"Follow and track your favourite Horses, Jockeys and Trainers. Never miss a race with automated alerts. Available with a FREE Sporting Life account."}}(),"Add to My Stable"),t.abrupt("return");case 6:return t.prev=6,t.next=9,l.a.post("/user/subscription",{user:n,subscription:i.map((function(e){return{subscription_id:e.id,subscription_type:e.type,display_text:e.text}}))},a);case 9:u=t.sent,s({type:"addSubscriptions",subscriptions:u.data.subscription}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),console.log("Error saving subscription");case 16:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(e){return t.apply(this,arguments)}}(),deleteSubscription:function(){var e=Object(i.a)(o.a.mark((function e(t,r){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=f.a.get(u,["subscriptions",t,r,"subId"])){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,l.a.delete("/user/subscription/".concat(n),a);case 6:s({type:"removeSubscription",subType:t,id:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("Error deleting subscription");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t,r){return e.apply(this,arguments)}}()}}},bmMU:function(e,t){var r="undefined"!==typeof Element,n="function"===typeof Map,o="function"===typeof Set,i="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var c,u,s,f;if(Array.isArray(e)){if((c=e.length)!=t.length)return!1;for(u=c;0!==u--;)if(!a(e[u],t[u]))return!1;return!0}if(n&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!t.has(u.value[0]))return!1;for(f=e.entries();!(u=f.next()).done;)if(!a(u.value[1],t.get(u.value[0])))return!1;return!0}if(o&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!t.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((c=e.length)!=t.length)return!1;for(u=c;0!==u--;)if(e[u]!==t[u])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(u=c;0!==u--;)if(!Object.prototype.hasOwnProperty.call(t,s[u]))return!1;if(r&&e instanceof Element)return!1;for(u=c;0!==u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!a(e[s[u]],t[s[u]]))return!1;return!0}return e!==e&&t!==t}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},foSv:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},md7G:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("U8pU"),o=r("JX7q");function i(e,t){return!t||"object"!==Object(n.a)(t)&&"function"!==typeof t?Object(o.a)(e):t}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return pe}));var n=r("17x9"),o=r.n(n),i=r("8+s/"),a=r.n(i),c=r("bmMU"),u=r.n(c),s=r("q1tI"),f=r.n(s),p=r("Qetd"),l=r.n(p),d="bodyAttributes",b="htmlAttributes",y="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},h=(Object.keys(v).map((function(e){return v[e]})),"charset"),g="cssText",m="href",O="http-equiv",w="innerHTML",j="itemprop",T="name",k="property",S="rel",P="src",E="target",A={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},C="defaultTitle",I="defer",D="encodeSpecialCharacters",L="onChangeClientState",x="titleTemplate",M=Object.keys(A).reduce((function(e,t){return e[A[t]]=t,e}),{}),R=[v.NOSCRIPT,v.SCRIPT,v.STYLE],_="data-react-helmet",B="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},N=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},H=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=X(e,v.TITLE),r=X(e,x);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,C);return t||n||void 0},z=function(e){return X(e,L)||function(){}},J=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&ee("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===S&&"canonical"===e[r].toLowerCase()||u===S&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==w&&c!==g&&c!==j||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=l()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},G=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout((function(){G(t)}),0)}}(),Z=function(e){return clearTimeout(e)},$="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||G:e.requestAnimationFrame||G,W="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Z:e.cancelAnimationFrame||Z,ee=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},te=null,re=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,p=e.title,l=e.titleAttributes;ie(v.BODY,n),ie(v.HTML,o),oe(p,l);var d={baseTag:ae(v.BASE,r),linkTags:ae(v.LINK,i),metaTags:ae(v.META,a),noscriptTags:ae(v.NOSCRIPT,c),scriptTags:ae(v.SCRIPT,s),styleTags:ae(v.STYLE,f)},b={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(b[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,b,y)},ne=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=ne(e)),ie(v.TITLE,t)},ie=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(_),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)r.removeAttribute(i[p]);o.length===i.length?r.removeAttribute(_):r.getAttribute(_)!==a.join(",")&&r.setAttribute(_,a.join(","))}},ae=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===w)r.innerHTML=t.innerHTML;else if(n===g)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c="undefined"===typeof t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(_,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ce=function(e){return Object.keys(e).reduce((function(t,r){var n="undefined"!==typeof e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[A[r]||r]=e[r],t}),t)},se=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return function(e,t,r){var n,o=((n={key:t})[_]=!0,n),i=ue(r,o);return[f.a.createElement(v.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,r,n){var o=ce(r),i=ne(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+H(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+H(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case d:case b:return{toComponent:function(){return ue(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[_]=!0,n);return Object.keys(t).forEach((function(e){var r=A[e]||e;if(r===w||r===g){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),f.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===w||e===g)})).reduce((function(e,t){var o="undefined"===typeof n[t]?t:t+'="'+H(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,p=void 0===f?"":f,l=e.titleAttributes;return{base:se(v.BASE,t,n),bodyAttributes:se(d,r,n),htmlAttributes:se(b,o,n),link:se(v.LINK,i,n),meta:se(v.META,a,n),noscript:se(v.NOSCRIPT,c,n),script:se(v.SCRIPT,u,n),style:se(v.STYLE,s,n),title:se(v.TITLE,{title:p,titleAttributes:l},n)}},pe=function(e){var t,r;return r=t=function(t){function r(){return V(this,r),q(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),r.prototype.shouldComponentUpdate=function(e){return!u()(this.props,e)},r.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},o,this.mapNestedChildrenToProps(r,i))]),t))},r.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case v.TITLE:return U({},o,((t={})[n.type]=a,t.titleAttributes=U({},i),t));case v.BODY:return U({},o,{bodyAttributes:U({},i)});case v.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((r={})[n.type]=U({},i),r))},r.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},r.prototype.warnOnInvalidChildren=function(e,t){return!0},r.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return f.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[M[r]||r]=e[r],t}),t)}(F(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},r.prototype.render=function(){var t=this.props,r=t.children,n=F(t,["children"]),o=U({},n);return r&&(o=this.mapChildrenToProps(r,o)),f.a.createElement(e,o)},N(r,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),r}(f.a.Component),t.propTypes={base:o.a.object,bodyAttributes:o.a.object,children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),defaultTitle:o.a.string,defer:o.a.bool,encodeSpecialCharacters:o.a.bool,htmlAttributes:o.a.object,link:o.a.arrayOf(o.a.object),meta:o.a.arrayOf(o.a.object),noscript:o.a.arrayOf(o.a.object),onChangeClientState:o.a.func,script:o.a.arrayOf(o.a.object),style:o.a.arrayOf(o.a.object),title:o.a.string,titleAttributes:o.a.object,titleTemplate:o.a.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r}(a()((function(e){return{baseTag:K([m,E],e),bodyAttributes:J(d,e),defer:X(e,I),encode:X(e,D),htmlAttributes:J(b,e),linkTags:Q(v.LINK,[S,m],e),metaTags:Q(v.META,[T,h,O,k,j],e),noscriptTags:Q(v.NOSCRIPT,[w],e),onChangeClientState:z(e),scriptTags:Q(v.SCRIPT,[P,w],e),styleTags:Q(v.STYLE,[g],e),title:Y(e),titleAttributes:J(y,e)}}),(function(e){te&&W(te),e.defer?te=$((function(){re(e,(function(){te=null}))})):(re(e),te=null)}),fe)((function(){return null})));pe.renderStatic=pe.rewind}).call(this,r("ntbh"))},sMBO:function(e,t,r){var n=r("g6v/"),o=r("m/L8").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,u="name";n&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(e){return""}}})},vuIU:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return o}))},wLYn:function(e,t,r){r("I+eb")({target:"Function",proto:!0},{bind:r("BTho")})},wx14:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},yHwE:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return w}));r("wLYn"),r("R5XZ");var n=r("rePB"),o=r("q1tI"),i=r.n(o),a=r("9/nS"),c=r("+eJU"),u=r("2+Dk"),s=r("obyI"),f=r("NvsP"),p=r("bhqO"),l=r("LvDl"),d=r.n(l),b=i.a.createElement;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=Object(o.createContext)(),g={ready:!1,asleep:!1,deviceId:""},m=function(e,t){switch(t.type){case"bridgeReady":return v(v({},e),{},{ready:!0});case"bridgeSleep":return v(v({},e),{},{asleep:!0});case"addDeviceId":return v(v({},e),{},{deviceId:t.deviceId});default:throw new Error("Unhandled action type: ".concat(t.type))}},O=function(t){var r=t.children,n=Object(o.useReducer)(m,g),i=n[0],l=n[1],y=Object(o.useState)(0),O=y[0],w=y[1],j=Object(u.b)().authStore,T=Object(f.b)().queryParamsStore;return Object(o.useEffect)((function(){try{var t=j.sba;if(!t||O>=100)return;var r=Object(c.a)(s.a.metricsVendors,{auth:{loggedIn:j.isLoggedIn},query:T,appBridge:i}),n=Object(a.createMetrics)(v({},r)),o=t.getAppBridge();if(!o)return void setTimeout((function(){return w(O+1)}),100);l({type:"bridgeReady"}),o.consumerReady(!0),o.trigger("shouldFeedbackIncrement"),o.bind("setDeviceIDFA",(function(e){var t=e.deviceIDFA;n.api.track("deviceIDFA",{deviceIDFA:t})})),o.bind("wake",(function(){window.location.reload()})),o.bind("sleep",(function(){l({type:"bridgeSleep"})})),o.bind("notificationToken",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l({type:"addDeviceId",deviceId:e.token}),n.api.track("reportTimings",t)})),o.trigger("getDeviceIDFA")}catch(b){console.log("App Bridge Error: ",b);var u=b.stack?b.stack:null,f=d.a.get(e,"navigator.userAgent","Not Available");Object(p.a)("appBridgeError",u,f)}}),[j.sbaReady]),b(h.Provider,{value:{appBridgeStore:i,dispatch:l}},r)},w=function(){return Object(o.useContext)(h)}}).call(this,r("ntbh"))},yWo2:function(e,t,r){"use strict";var n=r("I+eb"),o=r("hXpO");n({target:"String",proto:!0,forced:r("rwPt")("small")},{small:function(){return o(this,"small","","")}})},zKZe:function(e,t,r){var n=r("I+eb"),o=r("YNrV");n({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},zOTh:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r("sMBO"),r("07d7"),r("5s+n");var n=r("1OyB"),o=r("vuIU"),i={deviceIDFA:{signal:{paramMap:{deviceIDFA:"deviceIDFA"}}},pageView:{signal:{name:"pageLoad",paramMap:{pageUrl:"url"}},google:{name:"pageview"},omniture:{options:{isPage:!0}}},playVideo:{omniture:{paramMap:{events:["event11"],evars:{videoUri:"eVar28"}}}},followMatch:{omniture:{paramMap:{events:["event6"],evars:{matchId:"eVar75"}}}},followMeeting:{omniture:{paramMap:{events:["event6"],evars:{meetingId:"eVar76"}}}},followRace:{omniture:{paramMap:{events:["event6"],evars:{raceId:"eVar77"}}}},addToBetSlip:{omniture:{paramMap:{events:["event31"]}}},reportTimings:{omniture:{paramMap:{events:["event10"],evars:{LocationCheck:"eVar58",SiteLoad:"eVar59",applicationLoadTime:"eVar60"}}}},insidersLinkClick:{omniture:{paramMap:{props:{link:"prop15"}}}},insightsLinkClick:{omniture:{paramMap:{props:{link:"prop15"}}}},linkClick:{omniture:{paramMap:{props:{link:"prop15"}}}},arrivingUser:{omniture:{paramMap:{evars:{custId:"eVar39"}}}}},a=r("P9eV"),c=function(){function e(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(n.a)(this,e),this.name=t,this.vendorId=r,this.options=o}return Object(o.a)(e,[{key:"pageView",value:function(e,t){var r=window.location.pathname.substr(1);if(t.pageUrl=window.location.href,"error/500/from"!==r.substr(0,14))return this.track(e,t)}},{key:"user",value:function(e){var t=this;return new Promise((function(r){t.userId=e,r({userId:e})}))}},{key:"eventMapConfig",value:function(e,t){var r=i[e],n=(r=void 0===r?{}:r)[this.vendorId];if(n){var o=n.name,a=void 0===o?e:o,c=n.options,u=void 0===c?{}:c,s=n.paramMap,f=void 0===s?{}:s;return{name:a,options:u,params:this.transformParams(t,f)}}}},{key:"transformParams",value:function(){return a.b.apply(void 0,arguments)}},{key:"track",value:function(e,t){if(this.isSetUp()){var r=this.eventMapConfig(e,t);if(r){var n=r.name,o=r.params,i=r.options;this.sendTracking(n,o,i)}}}}]),e}()}}]);