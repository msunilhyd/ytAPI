_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{"6+6p":function(t,e,n){"use strict";n.r(e);n("4mDm"),n("DQNa"),n("07d7"),n("5s+n"),n("PKPk"),n("3bBZ");var a=n("o0o1"),i=n.n(a),r=n("ODXe"),o=(n("ls82"),n("HaE+")),l=n("q1tI"),c=n.n(l),s=n("hhhN"),u=n("AEn9"),f=n("G9T2"),m=n("TKWq"),p=n("ZxMf"),d=n("qL5p"),h=n("yVmv"),v=n("CWsu"),b=n("7d81"),g=n("bImJ"),y=n("PXBV"),w=n("WrJx"),O=n("nUWD"),_=c.a.createElement,L=function(t){var e=t.matches,n=t.items,a=t.hasError,i=t.date,r=Object(w.a)({initialData:e,path:"/football/match_day",params:{match_date:i}}),o=Object(y.b)();return _(f.a,{sport:"football",title:"Live Scores - Football - Sporting Life"},_(p.a,null,_(g.a,null,_(h.a,null),a?Object(m.a)():_(c.a.Fragment,null,o.narrow&&_(v.a,{items:n}),_(b.a,{matches:r})))),_(d.a,null,_(u.a,{sport:"football",content:["topMpu","vidiPrinter","flashtalkingWidget"],vidiPrinterItems:n})))};L.getInitialProps=Object(o.a)(i.a.mark((function t(){var e,n,a,o,l,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(O.o)(new Date),t.prev=1,"/football/vidiprinter","/football/match_day",n={match_date:e},t.next=7,Promise.all([s.a.get("/football/match_day",{params:n}),s.a.get("/football/vidiprinter")]);case 7:return a=t.sent,o=Object(r.a)(a,2),l=o[0],c=o[1],t.abrupt("return",{matches:l.data,items:c.data,hasError:!1,date:e});case 14:return t.prev=14,t.t0=t.catch(1),console.log(t.t0.stack),t.abrupt("return",{matches:[],items:null,hasError:!0,date:e});case 18:case"end":return t.stop()}}),t,null,[[1,14]])}))),e.default=L},"7d81":function(t,e,n){"use strict";n("inlA");var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("20a2"),l=n("Wp/D"),c=n("LvDl"),s=n.n(c),u=n("gZW2"),f=n("o+/x"),m=n("6wDg"),p=i.a.createElement,d=r.e.div.withConfig({displayName:"FootballLiveHomeTabs__TabsWrapper",componentId:"v0kj4l-0"})(["margin-bottom:",";"],(function(t){return t.theme.sizes.mediumGap}));e.a=function(t){var e=s.a.get(t,"filterType","all"),n=s.a.get(t,"matches",[]),c=function(t){return t.endsWith("ongoing")?"ongoing":t.endsWith("up-next")?"upNext":t.endsWith("finished")?"finished":"all"}(e),h=Object(l.a)(n,"ongoing").length,v=Object(l.a)(n,c),b=Object(o.useRouter)().asPath,g=[{id:1,as:"/football/live",href:"/football/live",displayText:"All",active:"/football/live"===b},{id:2,as:"/football/live/filter/ongoing",href:"/football/live/filter/[filterType]",displayText:"Live".concat(h?" (".concat(h,")"):""),active:"/football/live/filter/ongoing"===b},{id:3,as:"/football/live/filter/up-next",href:"/football/live/filter/[filterType]",displayText:"Up Next",active:"/football/live/filter/up-next"===b},{id:4,as:"/football/live/filter/finished",href:"/football/live/filter/[filterType]",displayText:"Finished",active:"/football/live/filter/finished"===b}],y=Object(a.useContext)(r.a);return p(i.a.Fragment,null,p(d,null,p(m.a,{data:g,visibleArrows:!1,textColour:y.colours.textPrimary,underlineOpacity:"1",hideUnderlineOnMobile:!1})),v.length>0?p(u.a,{matchList:v}):p(f.a,{filter:c}))}},Ff2n:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("zLVn");function i(t,e){if(null==t)return{};var n,i,r=Object(a.a)(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}},GSmZ:function(t,e,n){"use strict";n("zHFu");var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=i.a.createElement,l=r.e.div.withConfig({displayName:"SubHeading__SubHeadingWrapper",componentId:"sc-1sj2rzg-0"})(["display:flex;margin-bottom:",";"],(function(t){return t.theme.sizes.mediumGap})),c=r.e.h2.withConfig({displayName:"SubHeading__Title",componentId:"sc-1sj2rzg-1"})(["font-family:",";font-size:",";font-weight:",";color:",";white-space:nowrap;"],(function(t){return t.theme.fonts.family.bodyCopyRegular}),(function(t){return t.theme.fonts.size.large}),(function(t){return t.theme.fonts.weight.bold}),(function(t){return t.theme.colours.titlePrimary}));e.a=function(t){var e=t.children;return o(l,null,o(c,null,e))}},TKWq:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("q1tI"),i=n.n(a).a.createElement;function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"This component has encountered an error, please refresh the page.";return i("div",{style:{padding:16,margin:8,backgroundColor:"white"}},t)}},WrJx:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("R5XZ");var a=n("o0o1"),i=n.n(a),r=(n("ls82"),n("HaE+")),o=n("q1tI"),l=n("hhhN");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.initialData,n=t.path,a=t.params,c=void 0===a?{}:a,s=t.pollFrequency,u=void 0===s?6e4:s,f=Object(o.useState)(e),m=f[0],p=f[1];return Object(o.useEffect)((function(){p(e)}),[e]),Object(o.useEffect)((function(){var t=setTimeout(Object(r.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get(n,{params:c});case 3:e=t.sent,p(e.data),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),u);return function(){return clearTimeout(t)}}),[n,c,u]),m}},bImJ:function(t,e,n){"use strict";n("q1tI");var a=n("vOnD").e.div.withConfig({displayName:"FootballLiveContentWrapper",componentId:"j22qcv-0"})(["margin:0 ",";@media (min-width:","){margin-left:0;margin-right:0;}"],(function(t){return t.theme.sizes.mediumGap}),(function(t){return t.theme.breakpoints.layoutBreakWidth}));e.a=a},gZW2:function(t,e,n){"use strict";n("2B1R"),n("sMBO");var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("6QvU"),l=n("Wp/D"),c=n("FkdA"),s=n("+fTz"),u=i.a.createElement,f=r.e.ul.withConfig({displayName:"FootballLiveCompetitionList__CompetitionListWrapper",componentId:"sc-112crmw-0"})(["list-style:none;padding-left:0;"]),m=r.e.li.withConfig({displayName:"FootballLiveCompetitionList__CompetitionListItem",componentId:"sc-112crmw-1"})(["margin-bottom:",";"],(function(t){return t.theme.sizes.mediumGap})),p=r.e.div.withConfig({displayName:"FootballLiveCompetitionList__FootballMatchList",componentId:"sc-112crmw-2"})([""]);e.a=function(t){var e=t.matchList,n=void 0===e?[]:e,a=Object(l.f)(n)||[];return u(f,null,a.map((function(t){var e=t.id,n=t.name,a=t.matchList,i=void 0===a?[]:a;return u(m,{key:e},u(p,{id:Object(c.a)(n)},u(s.a,{title:n,panelId:Object(c.a)(n)+e},u(o.a,{matchList:i}))))})))}},"o+/x":function(t,e,n){"use strict";n("TeQF");var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("ZG2R"),l=i.a.createElement,c=r.e.p.withConfig({displayName:"NoMatchMessage__Wrapper",componentId:"sc-9tocrg-0"})(["padding:",";text-align:center;"],(function(t){return t.theme.sizes.mediumGap}));e.a=function(t){var e=t.filter;return l(c,null,o.d[e])}},tWL2:function(t,e,n){"use strict";n("q1tI");var a=n("vOnD").e.div.withConfig({displayName:"LayoutWrapper",componentId:"sc-1lddiic-0"})(["margin-top:",";margin-bottom:",";"],(function(t){return t.theme.sizes.pageTopMargin}),(function(t){return t.theme.sizes.largeGap}));e.a=a},xzJL:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/football/live",function(){return n("6+6p")}])},yVmv:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("q1tI"),i=n.n(a),r=n("tWL2"),o=n("94eq"),l=n("GSmZ"),c=n("nNA6"),s=i.a.createElement;function u(){return s(r.a,{"data-test-id":"footballLiveHomeHeader"},s(o.a,null,"Live Scores"),s(l.a,null,s(c.b,null)))}}},[["xzJL",2,3,4,9,10,1,5,7,8,6,11,13,18,24,0]]]);