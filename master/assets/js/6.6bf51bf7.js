(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{307:function(t,e,a){},309:function(t,e,a){"use strict";a(97);var s={computed:{thisYear:function(){return(new Date).getFullYear()}}},r=(a(310),a(43)),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-wrapper"},[a("p",{staticClass:"apache-info"},[a("a",{attrs:{href:"https://apache.org"}},[a("img",{attrs:{width:"200",src:t.$withBase("/images/asf_logo.svg"),alt:"The Apache Software Foundation"}})]),t._v(" "),t._m(0)]),t._m(1),t._v(" "),a("p",[a("br"),t._v(" "),a("span",{staticClass:"footer-text"},[t._v("© Copyright "+t._s(t.thisYear)+", Apache Doris(Incubating) ")]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"footer-text"},[t._v("\n      Apache Doris(incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.\n    ")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticStyle:{float:"right"},attrs:{href:"https://www.apache.org/events/current-event.html"}},[e("img",{attrs:{src:"https://www.apache.org/events/current-event-234x60.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"https://www.apache.org/licenses/"}},[this._v("License")]),this._v(" | "),e("a",{attrs:{href:"https://www.apache.org/security/"}},[this._v("Security")]),this._v(" | "),e("a",{attrs:{href:"https://www.apache.org/foundation/thanks.html"}},[this._v("Thanks")]),this._v(" | "),e("a",{attrs:{href:"https://www.apache.org/foundation/sponsorship.html"}},[this._v("Sponsorship")])])}],!1,null,null,null);e.a=n.exports},310:function(t,e,a){"use strict";var s=a(307);a.n(s).a},327:function(t,e,a){},396:function(t,e,a){"use strict";var s=a(327);a.n(s).a},405:function(t,e,a){"use strict";a.r(e);var s=a(309),r=a(330),n={name:"Article",components:{CustomFooter:s.a,Navbar:r.a},computed:{frontmatter:function(){return this.$page.frontmatter}}},i=(a(396),a(43)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-wrap"},[a("Navbar"),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"article-header"},[a("h1",[t._v(t._s(t.frontmatter.title))]),t._v(" "),a("div",{staticClass:"article-sub-header"},[t.frontmatter.date?a("span",{staticClass:"article-date article-header-item"},[t._v(t._s(t.$themeLocaleConfig.article.metaTime)+"：\n          "),a("span",{staticClass:"article-header-item-content"},[t._v(t._s(t.frontmatter.date))])]):t._e(),t._v(" "),t.frontmatter.author?a("span",{staticClass:"article-author article-header-item"},[t._v(t._s(t.$themeLocaleConfig.article.metaAuthor)+"：\n          "),a("span",{staticClass:"article-header-item-content"},[t._v(t._s(t.frontmatter.author))])]):t._e()])]),t._v(" "),a("Content"),t._v(" "),a("footer",{staticClass:"article-footer"},[a("CustomFooter")],1)],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);