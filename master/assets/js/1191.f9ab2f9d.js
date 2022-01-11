(window.webpackJsonp=window.webpackJsonp||[]).push([[1191],{1644:function(a,t,e){"use strict";e.r(t);var s=e(55),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[a._v("#")]),a._v(" UPDATE")]),a._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("UPDATE table_name \n    SET assignment_list\n    WHERE expression\n\nvalue:\n    {expr | DEFAULT}\n\nassignment:\n    col_name = value\n\nassignment_list:\n    assignment [, assignment] ...\n")])])]),e("h3",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),e("ul",[e("li",[a._v("table_name: 待更新数据的目标表。可以是 'db_name.table_name' 形式")]),a._v(" "),e("li",[a._v("assignment_list: 待更新的目标列，形如 'col_name = value, col_name = value' 格式")]),a._v(" "),e("li",[a._v("where expression: 期望更新的条件，一个返回 true 或者 false 的表达式即可")])]),a._v(" "),e("h3",{attrs:{id:"note"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[a._v("#")]),a._v(" Note")]),a._v(" "),e("p",[a._v("当前 UPDATE 语句仅支持在 Unique 模型上的行更新，存在并发更新导致的数据冲突可能。\n目前 Doris 并不处理这类问题，需要用户从业务侧规避这类问题。")]),a._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("p",[e("code",[a._v("test")]),a._v(" 表是一个 unique 模型的表，包含: k1, k2, v1, v2  四个列。其中 k1, k2 是 key，v1, v2 是value，聚合方式是 Replace。")]),a._v(" "),e("ol",[e("li",[a._v("将 'test' 表中满足条件 k1 =1 , k2 =2 的 v1 列更新为 1")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("UPDATE test SET v1 = 1 WHERE k1=1 and k2=2;\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("将 'test' 表中 k1=1 的列的 v1 列自增1")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("UPDATE test SET v1 = v1+1 WHERE k1=1;\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("UPDATE\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);