(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{341:function(t,e,a){},342:function(t,e,a){"use strict";a(344);var r={computed:{thisYear:function(){return(new Date).getFullYear()}}},i=(a(343),a(52)),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-wrapper"},[a("p",{staticClass:"apache-info"},[a("a",{attrs:{href:"https://apache.org"}},[a("img",{attrs:{width:"200",src:t.$withBase("/images/asf_logo.svg"),alt:"The Apache Software Foundation"}})]),t._v(" "),t._m(0)]),t._m(1),t._v(" "),a("p",[a("br"),t._v(" "),a("span",{staticClass:"footer-text"},[t._v("© Copyright "+t._s(t.thisYear)+", Apache Doris(Incubating) ")]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"footer-text"},[t._v("\n      Apache Doris(incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.\n    ")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticStyle:{float:"right"},attrs:{href:"https://www.apache.org/events/current-event.html"}},[e("img",{attrs:{src:"https://www.apache.org/events/current-event-234x60.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"https://www.apache.org/licenses/"}},[this._v("License")]),this._v(" | "),e("a",{attrs:{href:"https://www.apache.org/security/"}},[this._v("Security")]),this._v(" | "),e("a",{attrs:{href:"https://www.apache.org/foundation/thanks.html"}},[this._v("Thanks")]),this._v(" | "),e("a",{attrs:{href:"https://www.apache.org/foundation/sponsorship.html"}},[this._v("Sponsorship")])])}],!1,null,null,null);e.a=s.exports},343:function(t,e,a){"use strict";a(341)},384:function(t,e,a){},439:function(t,e,a){"use strict";var r=a(1),i=a(2),s=a(26),n=a(13),o=a(23),c=a(20),u=a(3),l=a(355),h=a(39),f=a(440),p=a(441),v=a(40),m=a(442),g=[],d=i(g.sort),_=i(g.push),w=u((function(){g.sort(void 0)})),b=u((function(){g.sort(null)})),C=h("sort"),x=!u((function(){if(v)return v<70;if(!(f&&f>3)){if(p)return!0;if(m)return m<603;var t,e,a,r,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(r=0;r<47;r++)g.push({k:e+r,v:a})}for(g.sort((function(t,e){return e.v-t.v})),r=0;r<g.length;r++)e=g[r].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}}));r({target:"Array",proto:!0,forced:w||!b||!C||!x},{sort:function(t){void 0!==t&&s(t);var e=n(this);if(x)return void 0===t?d(e):d(e,t);var a,r,i=[],u=o(e);for(r=0;r<u;r++)r in e&&_(i,e[r]);for(l(i,function(t){return function(e,a){return void 0===a?-1:void 0===e?1:void 0!==t?+t(e,a)||0:c(e)>c(a)?1:-1}}(t)),a=i.length,r=0;r<a;)e[r]=i[r++];for(;r<u;)delete e[r++];return e}})},440:function(t,e,a){var r=a(53).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},441:function(t,e,a){var r=a(53);t.exports=/MSIE|Trident/.test(r)},442:function(t,e,a){var r=a(53).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},443:function(t,e,a){"use strict";a(384)},455:function(t,e,a){"use strict";a.r(e);a(34),a(7),a(439),a(344),a(57);var r=a(342),i=a(348),s={name:"ArticleList",components:{CustomFooter:r.a,Navbar:i.a},data:function(){return{pageNumber:1,pageSize:8}},computed:{articleList:function(){var t=this;return this.$site.pages.filter((function(e){return e.frontmatter.isArticle&&e.frontmatter.language===t.$lang})).sort((function(t,e){return Date.parse(e.frontmatter.date)-Date.parse(t.frontmatter.date)}))},currentArticleList:function(){var t=(this.pageNumber-1)*this.pageSize,e=t+this.pageSize;return this.articleList.slice(t,e)},hasNextPaginationButton:function(){return this.pageNumber*this.pageSize<this.articleList.length}},methods:{nextPage:function(){this.pageNumber++},prePage:function(){this.pageNumber--}}},n=(a(443),a(52)),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-wrap"},[a("Navbar"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"article-list"},[t._l(t.currentArticleList,(function(e){return a("article",{key:e.key,staticClass:"article-item"},[a("header",{staticClass:"article-item-title"},[a("router-link",{staticClass:"nav-link",attrs:{to:e.path}},[t._v(t._s(e.frontmatter.title))])],1),t._v(" "),a("p",{staticClass:"article-item-summary"},[t._v(t._s(e.frontmatter.description))]),t._v(" "),a("footer",[a("div",{staticClass:"article-item-meta article-item-time"},[t._v("\n            "+t._s(t.$themeLocaleConfig.article.metaTime)+"："),a("span",[t._v(t._s(e.frontmatter.date))])]),t._v(" "),a("div",{staticClass:"article-item-meta article-item-author"},[t._v("\n            "+t._s(t.$themeLocaleConfig.article.metaAuthor)+"："),a("span",[t._v(t._s(e.frontmatter.author))])])])])})),t._v(" "),a("div",{staticClass:"article-pagination-wrap"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.pageNumber>1,expression:"pageNumber > 1"}],staticClass:"article-pagination-button pre",on:{click:t.prePage}},[t._v(t._s(t.$themeLocaleConfig.article.paginationPre))]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.hasNextPaginationButton,expression:"hasNextPaginationButton"}],staticClass:"article-pagination-button next",on:{click:t.nextPage}},[t._v(t._s(t.$themeLocaleConfig.article.paginationNext))])])],2),t._v(" "),a("footer",{staticClass:"article-footer"},[a("CustomFooter")],1)])],1)}),[],!1,null,null,null);e.default=o.exports}}]);