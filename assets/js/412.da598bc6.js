(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{1661:function(t,a,s){"use strict";s.r(a);var n=s(55),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"st-contains"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#st-contains"}},[t._v("#")]),t._v(" `ST_Contains'")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("p",[s("code",[t._v("BOOL ST_Contains(GEOMETRY shape1, GEOMETRY shape2)")])]),t._v(" "),s("p",[t._v("Judging whether geometric shape 1 can contain geometric shape 2 completely")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> SELECT ST_Contains(ST_Polygon(\"POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))\"), ST_Point(5, 5));\n+----------------------------------------------------------------------------------------+\n| st_contains(st_polygon('POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))'), st_point(5.0, 5.0)) |\n+----------------------------------------------------------------------------------------+\n|                                                                                      1 |\n+----------------------------------------------------------------------------------------+\n\nmysql> SELECT ST_Contains(ST_Polygon(\"POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))\"), ST_Point(50, 50));\n+------------------------------------------------------------------------------------------+\n| st_contains(st_polygon('POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))'), st_point(50.0, 50.0)) |\n+------------------------------------------------------------------------------------------+\n|                                                                                        0 |\n+------------------------------------------------------------------------------------------+\n")])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("p",[t._v("ST_CONTAINS,ST,CONTAINS\nw")])])}),[],!1,null,null,null);a.default=e.exports}}]);