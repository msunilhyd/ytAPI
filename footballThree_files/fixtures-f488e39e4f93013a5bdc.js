_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[49],{"3Ls3":function(t,e,n){"use strict";n.r(e);n("4mDm"),n("07d7"),n("5s+n"),n("PKPk"),n("3bBZ");var a=n("o0o1"),i=n.n(a),r=n("ODXe"),o=(n("ls82"),n("HaE+")),s=n("q1tI"),c=n.n(s),u=n("G9T2"),l=n("AEn9"),d=n("8FYC"),m=n("hhhN"),p=n("nUWD"),f=n("TKWq"),h=n("qL5p"),g=n("ZxMf"),b=c.a.createElement,v=function(t){var e=t.matches,n=t.competitions,a=t.hasError;return b(u.a,{sport:"football",title:"Today's Fixtures - Football - Sporting Life"},b(g.a,null,a?Object(f.a)():b(d.a,{matches:e,competitions:n,fixturesResults:"fixtures"})),b(h.a,null,b(l.a,{sport:"football",content:["topMpu","flashtalkingWidget"]})))};v.getInitialProps=Object(o.a)(i.a.mark((function t(){var e,n,a,o,s,c,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(p.g)("YYYY-MM-DD"),t.prev=1,"/football/competition",n="football/match_day?match_date=".concat(e),a={match_date:e},t.next=7,Promise.all([m.a.get("/football/competition"),m.a.get(n,{params:a})]);case 7:return o=t.sent,s=Object(r.a)(o,2),c=s[0],u=s[1],t.abrupt("return",{matches:u.data,competitions:c.data,hasError:!1});case 14:return t.prev=14,t.t0=t.catch(1),console.log(t.t0.stack),t.abrupt("return",{date:e,hasError:!0});case 18:case"end":return t.stop()}}),t,null,[[1,14]])}))),e.default=v},"8FYC":function(t,e,n){"use strict";n("ma9I");var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("nUWD"),s=n("YeY2"),c=n("gZW2"),u=n("ZG2R"),l=n("94eq"),d=n("DUv6"),m=n("Bj8a"),p=n("PXBV"),f=n("Wp/D"),h=n("bImJ"),g=n("krMf"),b=i.a.createElement,v=r.e.div.withConfig({displayName:"FootballFixturesResults__HeadingWrapper",componentId:"sc-13fgzoi-0"})(["margin-bottom:",";"],(function(t){return t.theme.sizes.mediumLargeGap})),w=r.e.div.withConfig({displayName:"FootballFixturesResults__NoMatchesMessage",componentId:"sc-13fgzoi-1"})(["background:white;padding:",";text-align:center;"],(function(t){return t.theme.sizes.mediumLargeGap}));e.a=function(t){var e=t.matches,n=t.competitions,i=t.fixturesResults,D=t.date,y=Object(p.b)(),x="fixtures"===i?"Fixtures":"Results",_=Object(m.a)(!0,!1,D,y.mobile,"fixtures"===i,"/football/".concat(i)),k=Object(a.useContext)(r.a);return b("div",{"data-test-id":"football-fixtures-results"},b(g.a,null,b(s.a,{title:"COMPETITIONS",shouldNavigate:!0,options:Object(f.b)(n,i),className:"competitions-dropdown","data-test-id":"competitions-dropdown",zIndex:k.layout.zIndex.footballDropdownFirst})),b(h.a,null,b(v,null,b(l.a,null,x))),b(d.a,{title:function(){if(D){var t=Object(o.C)(D);return"".concat(t," ").concat(x)}return"Today's ".concat(x)}(),navData:_,calendarCurrentDate:D,urlBase:"/football/".concat(i),withDatePicker:"results"===i}),b(h.a,null,e.length>0?b(c.a,{matchList:e}):b(w,null,u.d[i])))}},Bj8a:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("ma9I"),n("brp2"),n("DQNa");var a=n("nUWD"),i=function(t,e,n,i){for(var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"/racing/results",c=[],u=new Date(Date.now()),l=0;l<7;l++){var d=Object(a.d)(u,0,{convertToday:t,convertYesterday:e}),m=d.substr(1),p=i?Object(a.z)(u,{convertToday:t,convertYesterday:e}):Object(a.y)(u,{convertToday:t,convertYesterday:e});c.push({id:l,href:d?"/".concat(s,"/[date]"):s,as:"".concat(s).concat(d),displayText:p,active:r(n,m),navItemDate:m}),o?u.setDate(u.getDate()+1):u.setDate(u.getDate()-1)}return c},r=function(t,e){return!(e||!Object(a.l)(t))||t===e}},DUv6:function(t,e,n){"use strict";n("+2oP"),n("rB9j"),n("Rm1S"),n("zHFu"),n("yWo2");var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("6wDg"),s=n("4vO8"),c=i.a.createElement,u=r.e.div.withConfig({displayName:"DatePickerWithTabsHeader__Header",componentId:"sc-191u80g-0"})(["height:100px;padding:"," 0;background-color:",";border-radius:",";margin-bottom:",";@media (max-width:","){height:70px;padding:"," 0;border-radius:0;margin-bottom:",";}"],(function(t){return t.theme.sizes.largeGap}),(function(t){return t.theme.colours.invertedNavPrimary}),(function(t){return t.theme.sizes.border.mediumRadius}),(function(t){return t.theme.sizes.extraLargeGap}),(function(t){return t.theme.breakpoints.maxMobileWidth}),(function(t){return t.theme.sizes.mediumLargeGap}),(function(t){return t.theme.sizes.mediumLargeGap})),l=r.e.div.withConfig({displayName:"DatePickerWithTabsHeader__TitleContainer",componentId:"sc-191u80g-1"})(["display:inline-flex;@media (max-width:","){display:none;}"],(function(t){return t.theme.breakpoints.maxMobileWidth})),d=r.e.div.withConfig({displayName:"DatePickerWithTabsHeader__Title",componentId:"sc-191u80g-2"})(["font-family:",";font-weight:",";font-size:",";line-height:0.9;margin:0 0 "," 0;padding:0 ",";background-color:transparent;height:15px;letter-spacing:normal;color:",";"],(function(t){return t.theme.fonts.family.heading}),(function(t){return t.theme.fonts.weight.bold}),(function(t){return t.theme.fonts.size.title}),(function(t){return t.theme.sizes.extraLargeGap}),(function(t){return t.theme.layout.gutter}),(function(t){return t.theme.colours.invertedNavSecondary})),m=r.e.span.withConfig({displayName:"DatePickerWithTabsHeader__DatePickerWrapper",componentId:"sc-191u80g-3"})(["display:inline-flex;float:right;margin-left:auto;padding-right:",";@media (max-width:","){display:none;}"],(function(t){return t.theme.sizes.mediumLargeGap}),(function(t){return t.theme.breakpoints.maxMobileWidth})),p=r.e.div.withConfig({displayName:"DatePickerWithTabsHeader__TabsWrapper",componentId:"sc-191u80g-4"})([""]),f=r.e.div.withConfig({displayName:"DatePickerWithTabsHeader__MobileTabDay",componentId:"sc-191u80g-5"})(["padding-right:",";@media (max-width:","){padding:0;margin:0;}}"],(function(t){return t.theme.sizes.smallGap}),(function(t){return t.theme.breakpoints.maxMobileWidth})),h=r.e.div.withConfig({displayName:"DatePickerWithTabsHeader__MobileTabDate",componentId:"sc-191u80g-6"})(["@media (max-width:","){font-size:",";padding:0;margin:0;display:block;}"],(function(t){return t.theme.breakpoints.maxMobileWidth}),(function(t){return t.theme.fonts.size.small})),g=function(t){if(!t)return null;var e=t.match(/^(\S+)\s(.*)/);if(!e)return t;var n=e.slice(1);return c(i.a.Fragment,null,c(f,null,n[0]),c(h,null,n[1]))};e.a=function(t){var e=t.title,n=t.navData,a=t.calendarCurrentDate,i=t.withDatePicker,r=void 0===i||i,f=t.urlBase,h=void 0===f?"/racing/results":f;return c(u,null,c(l,null,c(d,null,e)),r&&c(m,null,c(s.a,{urlBase:h,date:a})),c(p,null,c(o.a,{data:n,visibleArrows:!0,withCalendar:r,calendarCurrentDate:a,mobileTabTextFunction:g,urlBase:h})))}},VT1K:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/football/fixtures",function(){return n("3Ls3")}])},bImJ:function(t,e,n){"use strict";n("q1tI");var a=n("vOnD").e.div.withConfig({displayName:"FootballLiveContentWrapper",componentId:"j22qcv-0"})(["margin:0 ",";@media (min-width:","){margin-left:0;margin-right:0;}"],(function(t){return t.theme.sizes.mediumGap}),(function(t){return t.theme.breakpoints.layoutBreakWidth}));e.a=a},gZW2:function(t,e,n){"use strict";n("2B1R"),n("sMBO");var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("6QvU"),s=n("Wp/D"),c=n("FkdA"),u=n("+fTz"),l=i.a.createElement,d=r.e.ul.withConfig({displayName:"FootballLiveCompetitionList__CompetitionListWrapper",componentId:"sc-112crmw-0"})(["list-style:none;padding-left:0;"]),m=r.e.li.withConfig({displayName:"FootballLiveCompetitionList__CompetitionListItem",componentId:"sc-112crmw-1"})(["margin-bottom:",";"],(function(t){return t.theme.sizes.mediumGap})),p=r.e.div.withConfig({displayName:"FootballLiveCompetitionList__FootballMatchList",componentId:"sc-112crmw-2"})([""]);e.a=function(t){var e=t.matchList,n=void 0===e?[]:e,a=Object(s.f)(n)||[];return l(d,null,a.map((function(t){var e=t.id,n=t.name,a=t.matchList,i=void 0===a?[]:a;return l(m,{key:e},l(p,{id:Object(c.a)(n)},l(u.a,{title:n,panelId:Object(c.a)(n)+e},l(o.a,{matchList:i}))))})))}},krMf:function(t,e,n){"use strict";var a=n("vOnD").e.div.withConfig({displayName:"DropdownWrapper",componentId:"sc-10f8is0-0"})(["background-color:",";padding:",";margin-bottom:",";@media (min-width:","){border-radius:",";}"],(function(t){return t.theme.colours.componentBackground}),(function(t){return t.theme.sizes.largeGap}),(function(t){return t.theme.sizes.extraLargeGap}),(function(t){return t.theme.breakpoints.maxMobileWidth}),(function(t){return t.theme.sizes.border.mediumRadius}));e.a=a}},[["VT1K",2,3,4,9,10,1,5,7,8,6,11,13,19,18,24,0]]]);