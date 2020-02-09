(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{105:function(t,e,a){"use strict";var s=a(52);a.n(s).a},106:function(t,e,a){},128:function(t,e,a){"use strict";a(77),a(78),a(43),a(95);var s=a(97),n=a(98),i=[["",void 0],["",void 0],["",void 0],["",void 0],["Document Dataset","/jobs/document-dataset/"],["",void 0],["Have a Data Hub","/jobs/have-a-data-hub/"],["",void 0],["Find Datasets","/jobs/find-datasets/"],["Pull Dataset","/jobs/pull-dataset/"],["Version Dataset","/jobs/version-dataset/"],["Validate Dataset","/jobs/validate-dataset/"],["Pipeline\nTransformations","/jobs/pipeline-transformations/"],["Publish Dataset","/jobs/publish-dataset/"],["Do Analysis &\nMachine Learning","/jobs/do-analysis-and-machine-learning/"],["Scale Scope","/jobs/scale-scope/"],["Data Audit","/jobs/data-audit/"],["Do Initial\nData Exploration","/jobs/do-initial-data-exploration/"],["Quickly\nEdit Dataset","/jobs/quickly-edit-dataset/"],["Store Dataset","/jobs/store-dataset/"],["Data API","/jobs/data-api/"],["Create\nVisualizations","/jobs/create-visualizations/"],["Orchestrate\nData Platform","/jobs/orchestrate-data-platform/"],["Scale Size","/jobs/scale-size/"],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0]],r=function(){function t(e){Object(s.a)(this,t),this.shape=[8,3],this.domNode=e}return Object(n.a)(t,[{key:"configure",value:function(){var t=this,e=Honeycomb.extendHex({size:71,orientation:"flat",currentIndex:function(){var e=this.toPoint(),a=t.gridType.pointToHex([e.x,e.y]);return a.x+1+(a.y+1)*t.shape[0]},render:function(e){var a=this.toPoint(),s=a.x,n=a.y,r=this.toPoint(),o=this.center().add(r),l=(t.gridType.pointToHex([r.x,r.y]),this.corners()),c=this.currentIndex(),u={width:1,color:"#999"};""===i[c][0]&&(u={}),this.draw=e.polygon(l.map((function(t){var e=t.x,a=t.y;return"".concat(e,",").concat(a)}))).fill("none").stroke(u).translate(s,n);var d=i[c][0],h=d.includes("\n")?o.y-26:o.y-13;e.text(d).font({size:13,anchor:"middle",leading:1.4,fill:"#1A98FF"}).translate(o.x,h)},openAnchor:function(){var t=this.currentIndex();""!==i[t][0]&&window.open(i[t][1])},highlight:function(){var t=this.currentIndex();""!==i[t][0]&&this.draw.stop(!0,!0).fill({opacity:.2,color:"#6a8bad"}).animate(1e3).fill({opacity:0,color:"none"})}});this.gridType=Honeycomb.defineGrid(e)}},{key:"setup",value:function(){var t=this.shape;this.configure();var e=SVG(this.domNode);this.gridInstance=this.gridType.rectangle({width:t[0],height:t[1],onCreate:function(t){t.render(e)}})}},{key:"setupMouseOverEvent",value:function(){var t=this;this.domNode.addEventListener("mouseover",(function(e){var a=e.offsetX,s=e.offsetY,n=t.gridType.pointToHex([a,s]),i=t.gridInstance.get(n);i&&i.highlight()}))}},{key:"setupClickEvent",value:function(){var t=this;this.domNode.addEventListener("click",(function(e){var a=e.offsetX,s=e.offsetY,n=t.gridType.pointToHex([a,s]),i=t.gridInstance.get(n);i&&i.openAnchor()}))}}]),t}(),o={mounted:function(){var t=new r(this.$refs.diagram);t.setup(),t.setupMouseOverEvent(),t.setupClickEvent()}},l=(a(105),a(0)),c=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"diagram",staticClass:"jobs-diagram"})}),[],!1,null,"0d86f00b",null);e.a=c.exports},288:function(t,e,a){"use strict";var s=a(90);a.n(s).a},289:function(t,e,a){"use strict";var s=a(91);a.n(s).a},291:function(t,e,a){var s={"./af":133,"./af.js":133,"./ar":134,"./ar-dz":135,"./ar-dz.js":135,"./ar-kw":136,"./ar-kw.js":136,"./ar-ly":137,"./ar-ly.js":137,"./ar-ma":138,"./ar-ma.js":138,"./ar-sa":139,"./ar-sa.js":139,"./ar-tn":140,"./ar-tn.js":140,"./ar.js":134,"./az":141,"./az.js":141,"./be":142,"./be.js":142,"./bg":143,"./bg.js":143,"./bm":144,"./bm.js":144,"./bn":145,"./bn.js":145,"./bo":146,"./bo.js":146,"./br":147,"./br.js":147,"./bs":148,"./bs.js":148,"./ca":149,"./ca.js":149,"./cs":150,"./cs.js":150,"./cv":151,"./cv.js":151,"./cy":152,"./cy.js":152,"./da":153,"./da.js":153,"./de":154,"./de-at":155,"./de-at.js":155,"./de-ch":156,"./de-ch.js":156,"./de.js":154,"./dv":157,"./dv.js":157,"./el":158,"./el.js":158,"./en-SG":159,"./en-SG.js":159,"./en-au":160,"./en-au.js":160,"./en-ca":161,"./en-ca.js":161,"./en-gb":162,"./en-gb.js":162,"./en-ie":163,"./en-ie.js":163,"./en-il":164,"./en-il.js":164,"./en-nz":165,"./en-nz.js":165,"./eo":166,"./eo.js":166,"./es":167,"./es-do":168,"./es-do.js":168,"./es-us":169,"./es-us.js":169,"./es.js":167,"./et":170,"./et.js":170,"./eu":171,"./eu.js":171,"./fa":172,"./fa.js":172,"./fi":173,"./fi.js":173,"./fo":174,"./fo.js":174,"./fr":175,"./fr-ca":176,"./fr-ca.js":176,"./fr-ch":177,"./fr-ch.js":177,"./fr.js":175,"./fy":178,"./fy.js":178,"./ga":179,"./ga.js":179,"./gd":180,"./gd.js":180,"./gl":181,"./gl.js":181,"./gom-latn":182,"./gom-latn.js":182,"./gu":183,"./gu.js":183,"./he":184,"./he.js":184,"./hi":185,"./hi.js":185,"./hr":186,"./hr.js":186,"./hu":187,"./hu.js":187,"./hy-am":188,"./hy-am.js":188,"./id":189,"./id.js":189,"./is":190,"./is.js":190,"./it":191,"./it-ch":192,"./it-ch.js":192,"./it.js":191,"./ja":193,"./ja.js":193,"./jv":194,"./jv.js":194,"./ka":195,"./ka.js":195,"./kk":196,"./kk.js":196,"./km":197,"./km.js":197,"./kn":198,"./kn.js":198,"./ko":199,"./ko.js":199,"./ku":200,"./ku.js":200,"./ky":201,"./ky.js":201,"./lb":202,"./lb.js":202,"./lo":203,"./lo.js":203,"./lt":204,"./lt.js":204,"./lv":205,"./lv.js":205,"./me":206,"./me.js":206,"./mi":207,"./mi.js":207,"./mk":208,"./mk.js":208,"./ml":209,"./ml.js":209,"./mn":210,"./mn.js":210,"./mr":211,"./mr.js":211,"./ms":212,"./ms-my":213,"./ms-my.js":213,"./ms.js":212,"./mt":214,"./mt.js":214,"./my":215,"./my.js":215,"./nb":216,"./nb.js":216,"./ne":217,"./ne.js":217,"./nl":218,"./nl-be":219,"./nl-be.js":219,"./nl.js":218,"./nn":220,"./nn.js":220,"./pa-in":221,"./pa-in.js":221,"./pl":222,"./pl.js":222,"./pt":223,"./pt-br":224,"./pt-br.js":224,"./pt.js":223,"./ro":225,"./ro.js":225,"./ru":226,"./ru.js":226,"./sd":227,"./sd.js":227,"./se":228,"./se.js":228,"./si":229,"./si.js":229,"./sk":230,"./sk.js":230,"./sl":231,"./sl.js":231,"./sq":232,"./sq.js":232,"./sr":233,"./sr-cyrl":234,"./sr-cyrl.js":234,"./sr.js":233,"./ss":235,"./ss.js":235,"./sv":236,"./sv.js":236,"./sw":237,"./sw.js":237,"./ta":238,"./ta.js":238,"./te":239,"./te.js":239,"./tet":240,"./tet.js":240,"./tg":241,"./tg.js":241,"./th":242,"./th.js":242,"./tl-ph":243,"./tl-ph.js":243,"./tlh":244,"./tlh.js":244,"./tr":245,"./tr.js":245,"./tzl":246,"./tzl.js":246,"./tzm":247,"./tzm-latn":248,"./tzm-latn.js":248,"./tzm.js":247,"./ug-cn":249,"./ug-cn.js":249,"./uk":250,"./uk.js":250,"./ur":251,"./ur.js":251,"./uz":252,"./uz-latn":253,"./uz-latn.js":253,"./uz.js":252,"./vi":254,"./vi.js":254,"./x-pseudo":255,"./x-pseudo.js":255,"./yo":256,"./yo.js":256,"./zh-cn":257,"./zh-cn.js":257,"./zh-hk":258,"./zh-hk.js":258,"./zh-tw":259,"./zh-tw.js":259};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id=291},292:function(t,e,a){"use strict";var s=a(92);a.n(s).a},293:function(t,e,a){"use strict";var s=a(106);a.n(s).a},422:function(t,e,a){"use strict";a.r(e);a(74);var s={components:{NavLink:a(129).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},n=(a(288),a(0)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"main container mx-auto w-full"},[a("header",{staticClass:"hero h-screen flex flex-row items-center"},[a("div",{staticClass:"container self-center w-2/3"},[null!==t.data.heroText?a("h1",{staticClass:"text-5xl pb-2 pl-6",attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Frictionless Data"))]):t._e(),t._v(" "),a("p",{staticClass:"description pl-6 pb-6 text-2xl"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"container"},[t.data.heroImage?a("img",{staticClass:"pl-48",attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e()])]),t._v(" "),a("Content",{staticClass:"theme-default-content custom"})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container pl-6"},[e("button",{staticClass:"button w-40 rounded-full button-hero h-12 font-medium text-lg shadow-lg"},[this._v("Learn more")])])}],!1,null,null,null).exports,r={computed:{data:function(){return this.$page.frontmatter}}},o=(a(289),Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{attrs:{"aria-labelledby":"main-title"}},[a("header",{staticClass:"hero"},[a("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.title||"Product ..."))]),t._v(" "),t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),a("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"}):t._e()]),t._v(" "),a("Content",{staticClass:"theme-default-content custom"})],1)}),[],!1,null,null,null).exports),l=a(14),c=a.n(l),u=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"w-4 h-4 inline text-lg",attrs:{src:"https://image.flaticon.com/icons/png/512/94/94699.png"}}),t._v(" "),t._l(t.$page.frontmatter.tags,(function(e){return a("router-link",{key:e,attrs:{to:{path:"/tags.html#"+e}}},[t._v("\n    "+t._s(e)+"\n  ")])}))],2)}),[],!1,null,null,null).exports,d={components:{TagLinks:u},methods:{formatDate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MMM D, YYYY";return c()(t).format(e)}}},h=(a(292),Object(n.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"blog-home",attrs:{"aria-labelledby":"main-title"}},[a("div",{staticClass:"container"},[a("h1",{staticClass:"text-3xl pt-48 pb-20"},[t._v("Frictionless Blog")]),t._v(" "),a("ul",{staticClass:"flex flex-col",attrs:{id:"default-layout"}},t._l(t.$pagination.pages,(function(e){return a("li",{},[a("div",{staticClass:"container mt-6 pb-6 shadow-lg inline-block"},[a("div",{staticClass:"container pt-8 pb-4"},[a("router-link",{staticClass:"text-2xl pt-4 page-link pl-4",attrs:{to:e.path}},[t._v(t._s(e.title))]),a("br"),t._v(" "),a("p",{staticClass:"text-sm italic inline-block pt-2 pl-4"},[t._v(" "+t._s(t.formatDate(t.$page.frontmatter.date))+" by Frictionless Data ")]),t._v(" "),a("TagLinks",{staticClass:"inline pl-3 pl-4"}),t._v(" "),a("p",{staticClass:"pt-4 text-xl pl-4"},[t._v(" "+t._s(e.frontmatter.summary))])],1)]),t._v(" "),a("hr",{})])})),0),t._v(" "),a("div",{staticClass:"pt-12",attrs:{id:"pagination"}},[t.$pagination.hasPrev?a("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("Prev")]):t._e(),t._v(" "),t.$pagination.hasNext?a("router-link",{staticClass:"pl-6",attrs:{to:t.$pagination.nextLink}},[t._v("Next")]):t._e()],1)])])}),[],!1,null,null,null).exports),p={components:{TagLinks:u},methods:{formatDate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MMM D, YYYY";return c()(t).format(e)}}},f=Object(n.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container"},[a("div",{staticClass:"container w-2/5 pt-56 mx-auto"},[a("a",{staticClass:"font-light",attrs:{href:""}},[t._v(" < Go back")]),t._v(" "),a("h1",{staticClass:"text-3xl pt-6 pb-4  "},[t._v(t._s(t.$page.frontmatter.title))]),t._v(" "),a("p",{staticClass:"text-xl pb-12"},[t._v(t._s(t.$page.frontmatter.summary)+" ")]),t._v(" "),a("time",{staticClass:"italic"},[t._v(" "+t._s(t.formatDate(t.$page.frontmatter.date))+" by Max Examplemann ")]),t._v(" "),a("TagLinks",{staticClass:"pt-2 text-blue-500"}),t._v(" "),a("Content",{staticClass:"pt-12"})],1)])}),[],!1,null,null,null).exports,v={components:{JobsDiagram:a(128).a},computed:{data:function(){return this.$page.frontmatter}}},m=(a(293),Object(n.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{attrs:{"aria-labelledby":"main-title"}},[a("header",{staticClass:"hero"},[a("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.title))]),t._v(" "),a("p",{staticClass:"description"},[t._v(t._s(t.data.tagline))])]),t._v(" "),a("JobsDiagram"),t._v(" "),a("p",[t._v(t._s(t.data.description))]),t._v(" "),a("h2",[t._v("Context")]),t._v(" "),a("p",[t._v(t._s(t.data.context))]),t._v(" "),a("p",[t._v(t._s(t.data.pain))]),t._v(" "),a("Content")],1)}),[],!1,null,null,null).exports),g=a(419),j=a(418),b=a(420),_=(a(81),a(261),a(260),a(85),a(357),a(43),a(358),a(73),/#.*$/),y=/\.(md|html)$/,x=/\/$/,k=/^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/;function C(t){return decodeURI(t).replace(_,"").replace(y,"")}function $(t){return k.test(t)}function w(t){if($(t))return t;var e=t.match(_),a=e?e[0]:"",s=C(t);return x.test(s)?t:s+".html"+a}function S(t,e,a){if($(e))return{type:"external",path:e};a&&(e=function(t,e,a){var s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;var n=e.split("/");a&&n[n.length-1]||n.pop();for(var i=t.replace(/^\//,"").split("/"),r=0;r<i.length;r++){var o=i[r];".."===o?n.pop():"."!==o&&n.push(o)}""!==n[0]&&n.unshift("");return n.join("/")}(e,a));for(var s=C(e),n=0;n<t.length;n++)if(C(t[n].regularPath)===s)return Object.assign({},t[n],{type:"page",path:w(t[n].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function D(t,e,a,s){var n=a.pages,i=a.themeConfig,r=s&&i.locales&&i.locales[s]||i;if("auto"===(t.frontmatter.sidebar||r.sidebar||i.sidebar))return function(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=r.sidebar||i.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var a in e)if(0===(s=t,/(\.html|\/)$/.test(s)?s:s+"/").indexOf(encodeURI(a)))return{base:a,config:e[a]};var s;return{}}(e,o),c=l.base,u=l.config;return u?u.map((function(t){return function t(e,a,s){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return S(a,e,s);if(Array.isArray(e))return Object.assign(S(a,e[0],s),{title:e[1]});n>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var i=e.children||[];return 0===i.length&&e.path?Object.assign(S(a,e.path,s),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:i.map((function(e){return t(e,a,s,n+1)})),collapsable:!1!==e.collapsable}}(t,n,c)})):[]}return[]}var z={components:{Home:i,Product:o,BlogIndex:h,BlogPost:f,Job:m,Page:j.a,Sidebar:b.a,Navbar:g.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return"home"==!t.layout&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return D(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass,e=this.$page.frontmatter.layout;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},e,t]},isBlogIndexPage:function(){return!(!this.$page.frontmatter.title||!this.$page.frontmatter.title.match(/(?:Page \d+ \| )?Blog/))}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},T=Object(n.a)(z,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),"home"===t.$page.frontmatter.layout?a("Home"):"product"===t.$page.frontmatter.layout?a("Product"):t.isBlogIndexPage?a("BlogIndex"):"Post"===t.$page.frontmatter.layout?a("BlogPost"):"job"===t.$page.frontmatter.layout?a("Job"):a("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),a("p",[t._v("Frontmatter "+t._s(t.$page.frontmatter))])],1)}),[],!1,null,null,null);e.default=T.exports},52:function(t,e,a){},90:function(t,e,a){},91:function(t,e,a){},92:function(t,e,a){}}]);