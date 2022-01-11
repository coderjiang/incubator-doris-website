(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{882:function(t,a,e){"use strict";e.r(a);var s=e(55),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"group-concat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#group-concat"}},[t._v("#")]),t._v(" group_concat")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("p",[e("code",[t._v("VARCHAR group_concat(VARCHAR str[, VARCHAR sep])")])]),t._v(" "),e("p",[t._v("This function is an aggregation function similar to sum (), and group_concat links multiple rows of results in the result set to a string. The second parameter, sep, is a connection symbol between strings, which can be omitted. This function usually needs to be used with group by statements.")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> select value from test;\n+-------+\n| value |\n+-------+\n| a     |\n| b     |\n| c     |\n+-------+\n\nmysql> select group_concat(value) from test;\n+-----------------------+\n| group_concat(`value`) |\n+-----------------------+\n| a, b, c               |\n+-----------------------+\n\nmysql> select group_concat(value, \" \") from test;\n+----------------------------+\n| group_concat(`value`, ' ') |\n+----------------------------+\n| a b c                      |\n+----------------------------+\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("p",[t._v("GROUP_CONCAT,GROUP,CONCAT")])])}),[],!1,null,null,null);a.default=n.exports}}]);