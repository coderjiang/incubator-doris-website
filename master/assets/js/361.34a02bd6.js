(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{812:function(t,a,e){"use strict";e.r(a);var s=e(55),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bitmap-union-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-union-function"}},[t._v("#")]),t._v(" bitmap_union function")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("p",[t._v("Aggregate function, used to calculate the grouped bitmap union. Common usage scenarios such as: calculating PV, UV.")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("p",[e("code",[t._v("BITMAP BITMAP_UNION(BITMAP value)")])]),t._v(" "),e("p",[t._v("Enter a set of bitmap values, find the union of this set of bitmap values, and return.")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> select page_id, bitmap_union(user_id) from table group by page_id;\n")])])]),e("p",[t._v("Combined with the bitmap_count function, the PV data of the web page can be obtained")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> select page_id, bitmap_count(bitmap_union(user_id)) from table group by page_id;\n")])])]),e("p",[t._v("When the user_id field is int, the above query semantics is equivalent to")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> select page_id, count(distinct user_id) from table group by page_id;\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("BITMAP_UNION, BITMAP\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);