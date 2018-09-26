(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{702:function(t,a,s){"use strict";s.r(a);var n=s(43),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bitmap-from-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-from-string"}},[t._v("#")]),t._v(" bitmap_from_string")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("p",[s("code",[t._v("BITMAP BITMAP_FROM_STRING(VARCHAR input)")])]),t._v(" "),s("p",[t._v('Convert a string into a bitmap. The input string should be a comma separated UNIT32.\nFor example: input string "0, 1, 2" will be converted to a Bitmap with bit 0, 1, 2 set.\nIf input string is invalid, return NULL.')]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> select bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n\nmysql> select bitmap_to_string(bitmap_from_string(\"0, 1, 2\"));\n+-------------------------------------------------+\n| bitmap_to_string(bitmap_from_string('0, 1, 2')) |\n+-------------------------------------------------+\n| 0,1,2                                           |\n+-------------------------------------------------+\n\nmysql> select bitmap_from_string(\"-1, 0, 1, 2\");\n+-----------------------------------+\n| bitmap_from_string('-1, 0, 1, 2') |\n+-----------------------------------+\n| NULL                              |\n+-----------------------------------+\n")])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("BITMAP_FROM_STRING,BITMAP\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);