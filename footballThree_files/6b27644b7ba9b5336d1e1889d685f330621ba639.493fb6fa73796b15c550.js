(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{FkdA:function(e,o,t){"use strict";t.d(o,"a",(function(){return c}));t("ma9I"),t("QWBl"),t("oVuX"),t("2B1R"),t("DQNa"),t("tkto"),t("TWNs"),t("rB9j"),t("JfAA"),t("Rm1S"),t("UxlC"),t("EnZy"),t("FZtP");var a=t("rePB"),l=t("ODXe"),r=t("nUWD");function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){Object(a.a)(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function n(e){var o=e.length+1;return function(e){var t=e.substring(o).split("/"),a=Object(l.a)(t,1)[0];return Date.parse(a)}}function c(e){return e.replace(/\s+/g,"-").toLowerCase()}function f(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=o.preserveDate,l=void 0!==t&&t,i="".concat(e,"/[0-9-]+/[^/]+$"),s=n(e);return Object(a.a)({},i,(function(o){var t=o.input,a=e;if(l){var i=s(t);i&&(a="".concat(a,"/").concat(Object(r.o)(i)))}return a}))}function g(e){var o,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=t.allowTomorrow,i=void 0!==l&&l,s=t.allowYesterday,c=void 0!==s&&s,f=t.allowCompetitionTeams,g=void 0!==f&&f,u="".concat(e,"/[0-9](?!([0-9]{3}-[0-9]{2}-[0-9]{2}))"),b=n(e),p="";if(i||c||g){var h=[];i&&h.push("tomorrow"),c&&h.push("yesterday"),g&&(h.push("competitions"),h.push("teams")),p="(?!".concat(h.join("|"),")")}var m="".concat(e,"/").concat(p,"[^0-9]+");return o={},Object(a.a)(o,u,(function(o){var t=o.input,a=e,l=b(t);return l&&(a="".concat(a,"/").concat(Object(r.o)(l))),a})),Object(a.a)(o,"".concat(e,"/Today"),e),Object(a.a)(o,m,(function(e){var o=e.input;return"/error/404".concat(o)})),o}function u(e){return s(Object(a.a)({},"".concat(e,"(?!/news)/(.*)"),e),b(e))}function b(e){return s(Object(a.a)({},"".concat(e,"/news/article/[0-9]+/[0-9]+/.*"),e),h("".concat(e,"/news"),e))}function p(e,o){return s(Object(a.a)({},"".concat(e,"/(.*)"),o),h(e,o))}function h(e,o){return Object(a.a)({},"".concat(e,"$"),o)}s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s(s({},p("/bettingzone/cricket","/cricket")),h("/about-us","/")),h("/ascot","/racing")),h("/betting-blog","/")),h("/bettingzone","/")),p("/bettingzone/67","/")),p("/bettingzone/american-football","/nfl")),h("/bettingzone/calculator","/")),h("/bettingzone/cheeky-punt","/")),h("/bettingzone/converter","/")),p("/bettingzone/football","/football")),p("/bettingzone/golf","/golf")),h("/bettingzone/market_moves","/")),h("/bettingzone/market-movers","/")),h("/bettingzone/market-moves","/")),h("/bettingzone/news","/")),p("/bettingzone/news/racing","/racing")),p("/bettingzone/other-sports","/")),h("/bettingzone/our-best-bets","/")),p("/bettingzone/previews","/")),p("/bettingzone/racing","/racing")),h("/bettingzone/record","/")),p("/bettingzone/rugby-league","/rugby-league")),p("/bettingzone/tennis","/tennis")),p("/bettingzone/tipsters","/columnists")),p("/bettingzone","/")),u("/boxing")),h("/calendar","/")),h("/calendar/sportsday.html","/")),p("/clients/ft/racing/news","/racing")),p("/clients/planetf1","/formula1")),p("/clients/stanjames/football","/football")),p("/clients/tiscali/football/transfer_centre","/football")),h("/columns/quiz","/")),h("/columns/tv","/")),p("/commonwealth2006","/")),p("/comp","/")),h("/competitions","/")),h("/contact-us","/")),h("/other-sports/news/article/678/10108332/key-sports-dates-for-2016-sporting-events-calendar","/")),u("/cricket")),h("/darts/news/article/10310/10541021/premier-league-darts-2017-fixtures-results-table-dates-venues-tv-schedule-odds","/football/results/competitions/english-premier-league/1")),u("/darts")),h("/football/champions-league/table","/football/results/competitions/champions-league/63")),h("/football/news/article/226/10693286/details-of-the-champions-league-last-16-draw-arsenal-leicester-manchester-city","/football/fixtures/competitions/champions-league/63")),h("/football/news/article/165/10775746/tuesday-champions-league-betting-preview-and-tips","/football/results/competitions/champions-league/63")),h("/football/news/article/165/10551310/champions-league-draw-live","/football/fixtures/competitions/champions-league/63")),h("/football/news/article/165/10723563/fa-cup-fourth-round-draw","/football/fixtures/competitions/english-fa-cup/76")),h("/football/news/article/165/10684753/fa-cup-3rd-round-draw-holders-man-utd-to-host-reading-west-ham-v-man-city","/football/fixtures/competitions/english-fa-cup/76")),h("/football/news/article/165/10770833/fa-cup-team-statistics-betting-tips-predictions-and-kick-off-times","/football/fixtures/competitions/english-fa-cup/76")),h("/football/news/article/165/10738026/scottish-cup-fourth-round-review-and-results-saturday-january-21","/football/results/competitions/scottish-fa-cup/71")),h("/football/news/article/165/10724477/manchester-united-v-liverpool-team-news-predictions-statistics-odds-kick-off-time","/football/fixtures/competitions/english-premier-league/1")),h("/football/news/article/165/10697280/everton-v-liverpool-team-news-predictions-statistics-odds-kick-off-time","/football/fixtures/competitions/english-premier-league/1")),h("/football/news/article/165/10316446/scottish-premiership-fixtures-announced-rangers-to-visit-celtic-on-september-10","/football/fixtures/competitions/scottish-premiership/62")),h("/football/news/article/165/10741597/chelsea-v-arsenal-team-news-predictions-statistics-odds-kick-off-time","/football/fixtures/competitions/english-premier-league/1")),h("/football/news/article/165/9924995/world-cup-2018-qualifying-draw-groups-fixtures-schedule","/football/fixtures/competitions/world-cup/18")),h("/football/news/article/165/10727546/africa-cup-of-nations-2017-fixtures-schedule-groups-results-odds-tv-guide","/football/fixtures/competitions/african-world-cup-qualifiers/22")),h("/football/news/article/165/10614599/africa-cup-of-nations-2017-which-premier-league-players-are-off-to-gabon","/football/fixtures/competitions/african-world-cup-qualifiers/22")),h("/football/news/article/165/10704629/manchester-united-v-sunderland-team-news-predictions-statistics-odds-kick-off-time","/football/fixtures")),h("/football/news/article/165/10667289/liverpool-v-sunderland-team-news-statistics-predictions-odds-kick-off-time","/football/fixtures")),h("/football/news/article/165/10759538/arsenal-v-hull-team-news-predictions-statistics-odds-kick-off-time","/football/fixtures")),h("/football/news/article/165/9946849/premier-league-betting-tips-preview-of-aston-villa-v-man-utd","/football/fixtures")),h("/football/news/article/678/10735798/live-football-on-tv-today-plus-horse-racing-tennis-cricket-darts-golf","/football/fixtures")),h("/football/news/article/165/10685681/manchester-united-v-tottenham-team-news-predictions-statistics-odds-kick-off-time","/football/fixtures/competitions/english-premier-league/1")),h("/football/news/article/165/10678208/manchester-city-v-chelsea-team-news-statistics-predictions-odds-kick-off-time","/football/fixtures/competitions/english-premier-league/1")),h("/football/news/article/165/10770858/newcastle-united-v-aston-villa-football-betting-tips-team-news-manager-quotes-kick-off-time","/football/results/competitions/sky-bet-championship/10")),h("/football/news/article/165/10658399/tottenham-hotspur-v-west-ham-united-team-news-statistics-predictions-odds-kick-off-time-tv-channel","/football/fixtures/competitions/english-premier-league/1")),h("/football/news/article/165/10690767/everton-v-arsenal-team-news-predictions-statistics-odds-kick-off-time","/football/fixtures/competitions/english-premier-league/1")),h("/football/news/article/165/9913283/sky-sports-fantasy-football-is-back-for-the-new-barclays-premier-league-season","/football/tips-centre")),h("/football/news/article/3538/10630948/philippe-coutinho-eden-hazard-sadio-mane-in-sky-sports-fantasy-football-team-of-the-week","/football/tips-centre")),h("/football/news/article/165/10523475/efl-football-betting-tips-for-championship-league-one-and-league-two","/football/tips-centre")),h("/football/news/article/165/10188718/soccer-saturday-super-6-matches-on-saturday","/football/tips-centre")),h("/football/news/article/165/10588593/super-6-predictions-for-the-soccer-saturday-super-6-game","/football/tips-centre")),h("/football/video/24811/10626357/mersons-super-six-predictions","/football/tips-centre")),h("/football/news/article/165/10692375/premier-league-football-results-and-review-for-sunday-december-11","/football/results/competitions/english-premier-league/1")),h("/football/news/article/165/10704880/tottenham-v-chelsea-team-news-predictions-statistics-odds-kick-off-time","/football/fixtures/competitions/english-premier-league/1")),h("/football/europa-league/table","/football/fixtures/competitions/uefa-europa-league/70")),h("/football/fa-cup/results","/football/results/competitions/english-fa-cup/76")),h("/football/fa-cup","/football/fixtures/competitions/english-fa-cup/76")),h("/football/fa-cup/draw","/football/fixtures/competitions/english-fa-cup/76")),h("/snooker/news/article/663/10241983/world-championship-snooker-2016-draw-schedule-results","/snooker/news/world-championship-snooker-draw/146449")),h("/football/scottish-league-cup/draw","/football/fixtures/competitions/english-league-cup/50")),h("/football/efl-cup/draw","/football/fixtures/competitions/english-league-cup/50")),h("/football/video/24811/10740437/rodgers-enjoyable-scottish-cup-draw","/football/fixtures/competitions/scottish-fa-cup/71")),h("/football/scottish-league-cup/results","/football/results/competitions/scottish-fa-cup/71")),h("/football/live/match-preview/357153/celtic-v-aberdeen","/football/results/competitions/scottish-premiership/62")),h("/football/scottish-football","/football/league-tables/scottish-premiership/62")),{},{"/football/scottish-football/(.*)":"/football"},h("/football/scottish-premier/table","/football/league-tables/scottish-premiership/62")),h("/football/scottish-premier/fixtures","/football/results/competitions/scottish-premiership/62")),h("/football/premier-league/top-scorers","/football/league-tables/english-premier-league/1")),h("/football/premier-league/swansea-city/fixtures","/football/fixtures/teams/swansea-city/2/english-premier-league/1")),h("/football/premier-league/results","/football/results/competitions/english-premier-league/1")),h("/football/premier-league","/football/league-tables/english-premier-league/1")),h("/football/premier-league/hull-city/fixtures","/football/fixtures/competitions/sky-bet-championship/10")),h("/football/premier-league/teams","/football")),{},{"/football/premier-league/(.*)":"/football"},h("/football/teams/leicester-city/fixtures","/football/fixtures/teams/leicester-city/8/english-premier-league/1")),h("/football/teams/tottenham-hotspur","/football/results/competitions/english-premier-league/1")),h("/football/teams/manchester-city","/football/results/competitions/english-premier-league/1")),h("/football/teams/tottenham-hotspur","/football/results/competitions/english-premier-league/1")),h("/football/europa-league/fixtures","/football/fixtures/competitions/uefa-europa-league/70")),h("/football/europa-league/results","/football/results/competitions/uefa-europa-league/70")),h("/football/live/match-commentary/362915/malaga-v-las-palmas","/football/fixtures/teams/las-palmas/1082/spanish-la-liga/74")),h("/football/la-liga/results","/football/results/competitions/spanish-la-liga/74")),h("/football/la-liga(.*)","/football/league-tables/spanish-la-liga/74")),h("/football/la-liga","/football/league-tables/spanish-la-liga/74")),h("/football/teams/cardiff-city/fixtures","/football/fixtures/competitions/sky-bet-championship/10")),h("/football/live/latest-scores","/football/results/competitions/sky-bet-championship/10")),h("/football/live/league-tables/league-two","/football/league-tables/sky-bet-league-two/83")),h("/football/league-two","/football/league-tables/sky-bet-league-two/83")),h("/football/league-two/results","/football/results/competitions/sky-bet-league-two/83")),{},{"/football/league-two/(.*)":"/football"},h("/football/league-one/results","/football/results/competitions/sky-bet-league-one/16")),h("/football/league-one","/football/fixtures/competitions/sky-bet-league-one/16")),h("/football/league-one/(.*)","/football/results/competitions/sky-bet-league-one/16")),h("/football/teams/wigan-athletic/fixtures","/football/fixtures/teams/wigan-athletic/38/sky-bet-league-one/16")),h("/football/bundesliga","/football/league-tables/german-bundesliga/11")),h("/football/bundesliga/results","/football/results/competitions/german-bundesliga/11")),h("/football/bundesliga/fixtures","/football/fixtures/competitions/german-bundesliga/11")),{},{"/football/bundesliga/(.*)":"/football"},h("/football/teams/sunderland","/football/results")),h("/football/news/article/26854/10320946/football-fixture-list-for-premi_1","/football/fixtures")),h("/football/live/team-lineups","/football/fixtures")),b("/football")),p("/football/cc_championship","/football")),p("/football/cc_league1","/football")),p("/football/cc_league2","/football")),p("/football/champ_draw","/football")),h("/football/championship/sheffield-wednesday/fixtures","/football/fixtures/teams/sheffield-wednesday/221/sky-bet-championship/10")),h("/football/championship/top-scorers","/football/league-tables/sky-bet-championship/10")),h("/football/championship(.*)","/football/fixtures/competitions/sky-bet-championship/10")),p("/football/champions-league","/football")),p("/football/cups","/football")),p("/football/efl-cup","/football")),p("/football/eredivisie","/football")),p("/football/euro2004","/football")),p("/football/euro2012","/football")),p("/football/euro-2016","/football/results/competitions/european-world-cup-qualifiers/9")),p("/football/europa-league","/football")),p("/football/europa-league-qualifying","/football")),p("/video/23481/10755550/chelsea-v-arsenal-volley-challenge","/football")),h("/snooker/news/article/663/10638569/mark-selby-thrashes-ding-junhui-to-win-international-championship","/snooker/news/ding-destroys-xiao-to-reach-last-16/146782")),h("/racing/news/article/465/10743050/doncaster-takes-precautions-against-frost-fears","/racing/meeting/2018-04-27/doncaster/65010")),h("/racing/courses/doncaster","/racing/meeting/2018-04-27/doncaster/65010")),h("/racing/courses/chepstow","/racing/meeting/2018-04-27/chepstow/65011")),h("/racing/news/article/465/9712940/timeform","/racing/tips-centre")),h("/racing/meeting/goodwood/29-07-2016","/racing/racecards")),h("/racing/courses/aintree","/racing/racecards")),h("/racing/meeting/aintree/07-04-2016","/racing/racecards")),h("/racing/news/article/465/10512752/glorious-goodwood-full-recap","/racing/results")),h("/racing/news/article/465/10300765/epsom-derby-2016-betting-tips-odds-start-time-racecards-results","/racing/racecards")),h("/racing/courses/cartmel","/racing/racecards")),h("/racing/courses/beverley","/racing/racecards")),h("/racing/courses/goodwood","/racing/racecards")),h("/racing/courses/windsor","/racing/racecards")),h("/racing/meeting/haydock-park/02-07-2016","/racing/racecards")),h("/racing/courses/newmarket","/racing/racecards")),h("/racing/results/09-04-2016/wolverhampton/result/717616/like-wolverhampton-racecourse-on-facebook-handicap","/racing/racecards")),h("/racing/results/26-11-2016/newbury","/racing/racecards")),h("/racing/meeting/newbury/12-02-2011","/racing/racecards")),h("/racing/news/article/465/10735160/ascot-call-inspection-ahead-of-clarence-house-chase-fixture","/racing/racecards")),h("/racing/news/article/465/10243338/newbury-saturday-fixture-in-doubt-as-friday-card-abandoned","/racing/racecards")),h("/racing/results/06-07-2016/yarmouth/result/731709/great-yarmouth-mercury-handicap/video","/racing/results")),h("/racing/report/761621/disko-beats-flogas-rivals","/racing/results")),h("/racing/results/04-09-2016/philadelphia-park/result/742848/claiming","/racing/results")),h("/racing/racecards/01-01-2017/cheltenham/racecard/757505/betbright-casino-handicap-hurdle","/racing/tips-centre")),h("/racing/racecards/29-10-2016/wetherby/racecard/750422/olbg-com-mares-hurdle-listed","/racing/tips-centre")),h("/racing/news/article/465/10576301/ante-post-preview-for-the-william-hill-ayr-gold-cup","/racing/tips-centre")),h("/racing/racecards/05-11-2016/doncaster/racecard/751423/betfred-mobile-wentworth-stakes-listed","/racing/tips-centre")),h("/racing/news/article/465/10080027/cheltenham-festival-2017-schedule-racecards-betting-tips-odds-results-key-trials-form","/racing/tips-centre")),h("/racing/news/article/465/10220524/grand-national-2016-full-list-of-40-horses-odds-betting-tips-aintree-racecards-dates-times","/racing/tips-centre")),h("/racing/results/05-01-2016/southwell/result/707546/coral-mobile-just-three-clicks-to-bet-handicap","/racing/tips-centre")),h("/racing/profiles/horse/945637/bo-selecta","/racing/profiles/horse/18525")),h("/racing/profiles/horse/727538/embankment","/racing/profiles/horse/256855")),h("/racing/profiles/horse/739877/waldorf-salad","/racing/profiles/horse/263296")),h("/racing/profiles/horse/792740/modus","/racing/profiles/horse/473")),h("/racing/profiles/horse/852806/identity-thief","/racing/profiles/horse/9618")),h("/racing/profiles/horse/595764/jessie-jane-ire","/racing/profiles/horse/210351")),h("/racing/report/386354/cosmos-out-of-this-world-in-leger","/racing/profiles/horse/373713")),h("/racing/profiles/horse/2464/eliza-dolittle","/racing/profiles/horse/77714")),h("/racing/profiles/horse/61314/blue-tomato","/racing/profiles/horse/27159")),h("/racing/profiles/horse/858163/duke-street","/racing/profiles/horse/340377")),h("/racing/profiles/horse/879457/papa-luigi","/racing/profiles/horse/359659")),h("/racing/profiles/horse/648539/commentary","/racing/profiles/horse/880230")),h("/racing/results/17-03-2016/cheltenham/result/708886/pertemps-network-final-listed-handicap-hurdle","/racing/profiles/horse/51906")),h("/racing/profiles/horse/905484/just-fab","/racing/profiles/horse/24119")),h("/racing/profiles/horse/947968/bravissimo","/racing/profiles/horse/9668")),h("/racing/profiles/horse/756628/goldie-horn","/racing/profiles/horse/272768")),h("/racing/profiles/horse/896711/koora","/racing/profiles/horse/376889")),h("/racing/profiles/horse/629721/dancing-leopard","/racing/profiles/horse/259145")),h("/racing/profiles/horse/846417/sykes","/racing/profiles/horse/10944")),h("/racing/profiles/horse/744852/baby-jake","/racing/profiles/horse/265858")),h("/racing/profiles/horse/279838/sexy-lady","/racing/profiles/horse/319421")),h("/racing/profiles/horse/895788/lumiere","/racing/profiles/horse/375965")),h("/racing/profiles/horse/319766/slugger-otoole","/racing/profiles/horse/53561")),h("/racing/profiles/horse/399383/gentlemen","/racing/profiles/horse/799")),h("/racing/profiles/trainer/306/k-c-bailey","/racing/profiles/trainer/129")),h("/racing/profiles/trainer/4254/d-pipe","/racing/profiles/trainer/169")),h("/racing/profiles/horse/859035/wait-for-me","/racing/profiles/horse/10904")),h("/racing/profiles/horse/759175/vicente","/racing/profiles/horse/10972")),h("/racing/profiles/horse/914661/atomix","/racing/profiles/horse/14960")),h("/racing/profiles/horse/621963/go-indigo","/racing/profiles/horse/205515")),h("/racing/profiles/horse/709175/vicky-valentine","/racing/profiles/horse/247748")),h("/racing/profiles/horse/829096/rocky-rider","/racing/profiles/horse/320481")),h("/racing/profiles/horse/877711/a-boy-named-sue","/racing/profiles/horse/357931")),h("/racing/profiles/horse/231280/mister-apples-fr","/racing/profiles/horse/36724")),h("/racing/profiles/horse/907083/remarkable","/racing/profiles/horse/387252")),h("/racing/profiles/horse/843643/who-dares-wins","/racing/profiles/horse/468")),h("/racing/profiles/trainer/14461/miss-s-smith","/racing/profiles/trainer/121")),h("/racing/profiles/trainer/67965/i-jardine","/racing/profiles/trainer/346")),h("/racing/profiles/trainer/4193/w-p-mullins/future-entries","/racing/profiles/trainer/414")),h("/racing/profiles/trainer/36948/i-mohammed","/racing/profiles/trainer/178")),h("/racing/profiles/jockey/23721/a-kirby","/racing/profiles/jockey/793")),h("/racing/profiles/jockey/72764/s-de-sousa","/racing/profiles/jockey/3516")),h("/racing/profiles/jockey/98041/d-r-fox","/racing/profiles/jockey/754")),h("/racing/profiles/jockey/620/hayley-turner","/racing/profiles/jockey/2536")),h("/racing/profiles/horse/338216/virtual_2","/racing/abc-guide")),h("/racing/news/article/465/10776342/paul-nicholls-stable-tour-including-zarkandar-and-movewiththetimes","/racing/profiles/trainer/115")),h("/racing/profiles/trainer/15101/a-m-balding","/racing/profiles/trainer/3209")),h("/football/transfer-centre/paper-talk","/football/paper-talk")),g("/football/results",{allowCompetitionTeams:!0})),g("/football/fixtures",{allowCompetitionTeams:!0})),g("/football/fixtures-results")),p("/football/footballconference","/football")),p("/football/international","/football/results/competitions/internationals/65")),p("/football/la-liga","/football")),p("/football/league-cup","/football")),p("/football/ligue-1","/football")),h("/football/live/league-tables/championship","/football/live")),h("/football/live/latest_scores","/football/live")),h("/football/live/latest-commentary","/football/live")),h("/football/live/latestscores","/football/live")),h("/football/live/league-tables","/football")),p("/football/live/league-tables","/football")),p("/football/live/match","/football")),p("/football/live/match-betting","/football/tips-centre")),p("/football/live/match-commentary","/football/live")),p("/football/live/match-photos","/football/live")),p("/football/live/match-preview","/football/live")),h("/football/live/match-reaction","/football/live")),p("/football/live/match-reaction","/football/live")),p("/football/live/match-report","/football/live")),h("/football/live/match-reports","/football/live")),p("/football/live/match-stats","/football/live")),h("/football/live/reports","/football/live")),p("/football/live/tables","/football/live")),p("/football/live_match","/football/live")),p("/football/overseas","/football")),p("/football/photos","/football")),p("/football/player-profile","/football")),p("/football/popup","/football")),p("/football/premiership","/football")),p("/football/premteams","/football")),h("/football/scoreboard/index.html","/football/results")),p("/football/scotspremteams","/football")),p("/football/scottish1","/football")),p("/football/scottish-championship","/football")),p("/football/scottish-cup","/football")),p("/football/scottish-league-one","/football")),p("/football/scottish-premier","/football")),p("/football/scottishpremier","/football")),h("/football/serie-a","/football/league-tables/italian-serie-a/6")),h("/football/serie-a/(.*)","/football")),p("/football/suspensions","/football")),p("/football/tables","/football")),p("/football/team","/football")),p("/football/teams","/football")),p("/football/transfer_centre","/football")),p("/football/transfer-centre","/football")),h("/football/transfer-centre","/football")),h("/football/video","/football")),{},{"/football/video(.*)":"/football"},p("/football/world-cup","/football")),p("/football/worldcupfinals2002","/football")),u("/formula1")),u("/golf")),b("/greyhounds")),f("/greyhounds/racecards")),g("/greyhounds/racecards")),g("/greyhounds/results",{allowYesterday:!0})),h("/greyhounds/abc-guide","/greyhounds")),h("/greyhounds/live-shows","/greyhounds/racecards")),p("/greyhounds/preview","/greyhounds/racecards")),{},{"/greyhounds/selections(.*)":"/greyhounds"},u("/nfl")),h("/pick7","https://pick7.sportinglife.com?dcmp=sl_redirect")),u("/other-sports")),b("/racing")),p("/racing/ascot","/racing")),h("/racing/racecards/01-01-2015/southwell/racecard/655312/ladbrokes-mobile-handicap","/racing/tips-centre")),p("/racing/calendar","/racing/racecards")),h("/racing/columnists","/columnists")),p("/racing/courses","/racing")),p("/racing/draw_advantage","/racing")),p("/racing/goodwood","/racing")),h("/racing/live","/racing")),p("/racing/liveshows","/racing")),p("/racing/live-shows","/racing/racecards")),p("/racing/newbury","/racing")),h("/racing/notebook","/racing")),p("/racing/photos","/racing")),h("/racing/pointers","/racing")),p("/racing/racing_centre","/racing/tips-centre")),h("/racing/results/settlers.html","/racing/results")),f("/racing/racecards",{preserveDate:!0})),g("/racing/racecards",{allowTomorrow:!0})),h("/racing/results/08-12-2016/aqueduct/result/755856/maiden-special-weight","/nfl")),g("/racing/results",{allowYesterday:!0})),p("/racing/racing_tipping_centre","/racing/tips-centre")),p("/racing/report","/racing")),h("/racing/results/search","/racing/results")),p("/search","/racing/my-stable/search")),p("/racing/profiles/search","/racing/my-stable/search")),p("/racing/stats","/racing")),h("/racing/steamers-drifters","/racing/tips-centre")),h("/racing/ten_to_follow","/racing/tips-centre")),p("/racing/tips-centre","/racing/tips-centre")),h("/racing/video","/racing")),h("/racting","/racing")),h("/fastresults","/racing/fast-results")),{},{"/racing/video(.*)":"/racing"},h("/rugbyleague","/rugby-league")),u("/rugby-league")),p("/rugbyleague","/rugby-league")),p("/rugbyunion","/rugby-union")),u("/rugby-union")),u("/snooker")),p("/soccer","/football")),u("/tennis")),p("/video","/")),h("/zone/golf/betting","/golf")),h("/football/missing-men","/football")),h("/football/national-league/table","/football")),h("/football/pools","/football")),h("/football/portuguese-liga/table","/football")),h("/football/scottish-league-cup","/football")),h("/football/top-scorers","/football")),p("/greyhounds/fast-results","/greyhounds/fast-results")),p("/greyhounds/live-shows","/greyhounds/racecards")),h("/greyhounds/non-runners","/greyhounds/racecards")),p("/greyhounds/profile/dog","/greyhounds")),h("/nfl/schedule","/nfl")),h("/nfl/standings","/nfl")),h("/photos","/")),h("/racing/fast-results-legacy","/racing/fast-results")),h("/racing/meeting/aqueduct/20-02-2017/fast-results","/racing/fast-results")),h("/racing/meeting/sedgefield/27-09-2016/fast-results","/racing/fast-results")),p("/racing/fast-results-legacy","/racing/fast-results")),h("/racing/point-to-point","/racing")),p("/snooker/draw","/snooker")),h("/tennis/atp-world-rankings","/tennis")),h("/tennis/fed-cup","/tennis")),h("/tennis/live","/tennis")),p("/tennis/live","/tennis")),h("/tennis/net-talk","/tennis")),p("/tennis/player-profile","/tennis")),h("/tennis/race-to-the-wta-championships","/tennis")),h("/tennis/results","/tennis")),p("/tennis/results","/tennis")),p("/tennis/video","/tennis")),h("/tennis/wta-world-rankings","/tennis")),p("/tv2/transfer-centre","/")),p(".*/news/article/[0-9]+/[0-9]+","/"))},TWNs:function(e,o,t){var a=t("g6v/"),l=t("2oRo"),r=t("lMq5"),i=t("cVYH"),s=t("m/L8").f,n=t("JBy8").f,c=t("ROdP"),f=t("rW0t"),g=t("n3/R"),u=t("busE"),b=t("0Dky"),p=t("afO8").set,h=t("JiZb"),m=t("tiKp")("match"),d=l.RegExp,w=d.prototype,y=/a/g,v=/a/g,k=new d(y)!==y,x=g.UNSUPPORTED_Y;if(a&&r("RegExp",!k||x||b((function(){return v[m]=!1,d(y)!=y||d(v)==v||"/a/i"!=d(y,"i")})))){for(var j=function(e,o){var t,a=this instanceof j,l=c(e),r=void 0===o;if(!a&&l&&e.constructor===j&&r)return e;k?l&&!r&&(e=e.source):e instanceof j&&(r&&(o=f.call(e)),e=e.source),x&&(t=!!o&&o.indexOf("y")>-1)&&(o=o.replace(/y/g,""));var s=i(k?new d(e,o):d(e,o),a?this:w,j);return x&&t&&p(s,{sticky:t}),s},O=function(e){e in j||s(j,e,{configurable:!0,get:function(){return d[e]},set:function(o){d[e]=o}})},z=n(d),_=0;z.length>_;)O(z[_++]);w.constructor=j,j.prototype=w,u(l,"RegExp",j)}h("RegExp")}}]);