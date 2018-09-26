(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{633:function(t,a,e){"use strict";e.r(a);var n=e(43),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"split-part"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#split-part"}},[t._v("#")]),t._v(" split_part")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("p",[t._v("'VARCHAR split party (VARCHAR content, VARCHAR delimiter, INT field)'")]),t._v(" "),e("p",[t._v("Returns the specified partition (counting from the beginning) by splitting the string according to the partitioner.")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('mysql> select split_part("hello world", " ", 1);\n+----------------------------------+\n(hello world\',\'1)\'124split part\';\n+----------------------------------+\n| hello                            |\n+----------------------------------+\n\n\nmysql> select split_part("hello world", " ", 2);\n+----------------------------------+\n(hello world\',\'2)\'124u;\n+----------------------------------+\n| world                             |\n+----------------------------------+\n\nmysql> select split_part("2019年7月8号", "月", 1);\n+-----------------------------------------+\n(2019726376;821495;\',\'263761,\') 1244;\n+-----------------------------------------+\n| July 2019|\n+-----------------------------------------+\n\nmysql> select split_part("abca", "a", 1);\n+----------------------------+\nsplit part (\'abca\',\'a\', 1)\n+----------------------------+\n|                            |\n+----------------------------+\n')])])]),e("p",[t._v("##keyword\nSPLIT_PART,SPLIT,PART")])])}),[],!1,null,null,null);a.default=s.exports}}]);