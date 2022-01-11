(window.webpackJsonp=window.webpackJsonp||[]).push([[958],{1406:function(t,a,s){"use strict";s.r(a);var e=s(55),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bitmap-subset-limit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-subset-limit"}},[t._v("#")]),t._v(" bitmap_subset_limit")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("p",[s("code",[t._v("BITMAP BITMAP_SUBSET_LIMIT(BITMAP src, BIGINT range_start, BIGINT cardinality_limit)")])]),t._v(" "),s("p",[t._v("生成 src 的子 BITMAP， 从不小于 range_start 的位置开始，大小限制为 cardinality_limit 。\nrange_start：范围起始点（含）\ncardinality_limit：子BIGMAP基数上限")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> select bitmap_to_string(bitmap_subset_limit(bitmap_from_string('1,2,3,4,5'), 0, 3)) value;\n+-----------+\n| value     |\n+-----------+\n| 1,2,3 |\n+-----------+\n\nmysql> select bitmap_to_string(bitmap_subset_limit(bitmap_from_string('1,2,3,4,5'), 4, 3)) value;\n+-------+\n| value |\n+-------+\n| 4，5     |\n+-------+\n")])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("BITMAP_SUBSET_LIMIT,BITMAP_SUBSET,BITMAP\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);