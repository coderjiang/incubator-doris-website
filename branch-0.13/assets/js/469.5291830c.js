(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{856:function(a,t,s){"use strict";s.r(t);var e=s(43),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"lpad"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lpad"}},[a._v("#")]),a._v(" lpad")]),a._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),s("p",[s("code",[a._v("VARCHAR lpad(VARCHAR str, INT len, VARCHAR pad)")])]),a._v(" "),s("p",[a._v("返回 str 中长度为 len（从首字母开始算起）的字符串。如果 len 大于 str 的长度，则在 str 的前面不断补充 pad 字符，直到该字符串的长度达到 len 为止。如果 len 小于 str 的长度，该函数相当于截断 str 字符串，只返回长度为 len 的字符串。len 指的是字符长度而不是字节长度。")]),a._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql> SELECT lpad(\"hi\", 5, \"xy\");\n+---------------------+\n| lpad('hi', 5, 'xy') |\n+---------------------+\n| xyxhi               |\n+---------------------+\n\nmysql> SELECT lpad(\"hi\", 1, \"xy\");\n+---------------------+\n| lpad('hi', 1, 'xy') |\n+---------------------+\n| h                   |\n+---------------------+\n")])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),s("p",[a._v("LPAD")])])}),[],!1,null,null,null);t.default=r.exports}}]);