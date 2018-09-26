(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{966:function(a,t,r){"use strict";r.r(t);var s=r(43),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"rpad"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rpad"}},[a._v("#")]),a._v(" rpad")]),a._v(" "),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),r("h3",{attrs:{id:"syntax"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),r("p",[r("code",[a._v("VARCHAR rpad(VARCHAR str, INT len, VARCHAR pad)")])]),a._v(" "),r("p",[a._v("返回 str 中长度为 len（从首字母开始算起）的字符串。如果 len 大于 str 的长度，则在 str 的后面不断补充 pad 字符，直到该字符串的长度达到 len 为止。如果 len 小于 str 的长度，该函数相当于截断 str 字符串，只返回长度为 len 的字符串。len 指的是字符长度而不是字节长度。")]),a._v(" "),r("h2",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("mysql> SELECT rpad(\"hi\", 5, \"xy\");\n+---------------------+\n| rpad('hi', 5, 'xy') |\n+---------------------+\n| hixyx               |\n+---------------------+\n\nmysql> SELECT rpad(\"hi\", 1, \"xy\");\n+---------------------+\n| rpad('hi', 1, 'xy') |\n+---------------------+\n| h                   |\n+---------------------+\n")])])]),r("h2",{attrs:{id:"keyword"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),r("p",[a._v("RPAD")])])}),[],!1,null,null,null);t.default=e.exports}}]);