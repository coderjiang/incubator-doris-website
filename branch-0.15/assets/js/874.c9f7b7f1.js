(window.webpackJsonp=window.webpackJsonp||[]).push([[874],{1263:function(t,a,s){"use strict";s.r(a);var e=s(43),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cast"}},[t._v("#")]),t._v(" CAST")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cast (input as type)\n")])])]),s("h3",{attrs:{id:"bigint-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bigint-type"}},[t._v("#")]),t._v(" BIGINT type")]),t._v(" "),s("h3",{attrs:{id:"syntax-bigint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax-bigint"}},[t._v("#")]),t._v(" Syntax(BIGINT)")]),t._v(" "),s("p",[s("code",[t._v("cast (input as BIGINT)")])]),t._v(" "),s("p",[t._v("将 input 转成 指定的 type")]),t._v(" "),s("p",[t._v("将当前列 input 转换为 BIGINT 类型")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("ol",[s("li",[t._v("转常量，或表中某列")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> select cast (1 as BIGINT);\n+-------------------+\n| CAST(1 AS BIGINT) |\n+-------------------+\n|                 1 |\n+-------------------+\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("转导入的原始数据")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(tmp_k1 as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n')])])]),s("p",[s("em",[t._v("注：在导入中，由于原始类型均为String，将值为浮点的原始数据做 cast的时候数据会被转换成 NULL ，比如 12.0 。Doris目前不会对原始数据做截断。")])]),t._v(" "),s("p",[t._v("如果想强制将这种类型的原始数据 cast to int 的话。请看下面写法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('curl --location-trusted -u root: -T ~/user_data/bigint -H "columns: tmp_k1, k1=cast(cast(tmp_k1 as DOUBLE) as BIGINT)"  http://host:port/api/test/bigint/_stream_load\n\nmysql> select cast(cast ("11.2" as double) as bigint);\n+----------------------------------------+\n| CAST(CAST(\'11.2\' AS DOUBLE) AS BIGINT) |\n+----------------------------------------+\n|                                     11 |\n+----------------------------------------+\n1 row in set (0.00 sec)\n')])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("p",[t._v("CAST")])])}),[],!1,null,null,null);a.default=r.exports}}]);