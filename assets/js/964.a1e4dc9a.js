(window.webpackJsonp=window.webpackJsonp||[]).push([[964],{1407:function(t,a,e){"use strict";e.r(a);var r=e(52),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"orthogonal-bitmap-intersect-count"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-intersect-count"}},[t._v("#")]),t._v(" orthogonal_bitmap_intersect_count")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("p",[e("code",[t._v("BITMAP ORTHOGONAL_BITMAP_INTERSECT_COUNT(bitmap_column, column_to_filter, filter_values)")]),t._v("\n求bitmap交集大小的函数, 第一个参数是Bitmap列，第二个参数是用来过滤的维度列，第三个参数是变长参数，含义是过滤维度列的不同取值")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> select orthogonal_bitmap_intersect_count(members, tag_group, 1150000, 1150001, 390006) from tag_map where  tag_group in ( 1150000, 1150001, 390006);\n+-------------------------------------------------------------------------------------+\n| orthogonal_bitmap_intersect_count(`members`, `tag_group`, 1150000, 1150001, 390006) |\n+-------------------------------------------------------------------------------------+\n|                                                                                   0 |\n+-------------------------------------------------------------------------------------+\n1 row in set (3.382 sec)\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("ORTHOGONAL_BITMAP_INTERSECT_COUNT,BITMAP\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);