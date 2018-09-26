(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{781:function(t,a,e){"use strict";e.r(a);var s=e(43),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"row-count-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#row-count-action"}},[t._v("#")]),t._v(" Row Count Action")]),t._v(" "),e("h2",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("p",[e("code",[t._v("GET /api/rowcount")])]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("用于手动更新指定表的行数统计信息。在更新行数统计信息的同时，也会以 JSON 格式返回表以及对应rollup的行数")]),t._v(" "),e("h2",{attrs:{id:"path-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),e("p",[t._v("无")]),t._v(" "),e("h2",{attrs:{id:"query-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("db")])]),t._v(" "),e("p",[t._v("指定的数据库")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("table")])]),t._v(" "),e("p",[t._v("指定的表名")])])]),t._v(" "),e("h2",{attrs:{id:"request-body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),e("p",[t._v("无")]),t._v(" "),e("h2",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"tbl1": 10000\n\t},\n\t"count": 0\n}\n')])])]),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("更新并获取指定 Table 的行数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('GET /api/rowcount?db=example_db&table=tbl1\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"tbl1": 10000\n\t},\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);