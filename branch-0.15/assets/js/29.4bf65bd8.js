(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{420:function(a,e,t){"use strict";t.r(e);var s=t(43),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"cancel-load-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cancel-load-action"}},[a._v("#")]),a._v(" Cancel Load Action")]),a._v(" "),t("h2",{attrs:{id:"request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[a._v("#")]),a._v(" Request")]),a._v(" "),t("p",[t("code",[a._v("POST /api/<db>/_cancel")])]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),t("p",[a._v("Used to cancel the load transaction of the specified label.")]),a._v(" "),t("h2",{attrs:{id:"path-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[a._v("#")]),a._v(" Path parameters")]),a._v(" "),t("ul",[t("li",[t("p",[t("code",[a._v("<db>")])]),a._v(" "),t("p",[a._v("Specify the database name")])])]),a._v(" "),t("h2",{attrs:{id:"query-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[a._v("#")]),a._v(" Query parameters")]),a._v(" "),t("ul",[t("li",[t("p",[t("code",[a._v("<label>")])]),a._v(" "),t("p",[a._v("Specify the load label")])])]),a._v(" "),t("h2",{attrs:{id:"request-body"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[a._v("#")]),a._v(" Request body")]),a._v(" "),t("p",[a._v("None")]),a._v(" "),t("h2",{attrs:{id:"response"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[a._v("#")]),a._v(" Response")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Cancel success")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": null,\n\t"count": 0\n}\n')])])])]),a._v(" "),t("li",[t("p",[a._v("Cancel failed")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{\n\t"msg": "Error msg...",\n\t"code": 1,\n\t"data": null,\n\t"count": 0\n}\n')])])])])]),a._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Cancel the load transaction of the specified label")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('POST /api/example_db/_cancel?label=my_label1\n\nResponse:\n{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": null,\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);