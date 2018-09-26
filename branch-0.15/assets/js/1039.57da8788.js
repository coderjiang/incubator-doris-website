(window.webpackJsonp=window.webpackJsonp||[]).push([[1039],{1428:function(t,e,n){"use strict";n.r(e);var a=n(43),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"show-functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#show-functions"}},[t._v("#")]),t._v(" SHOW FUNCTIONS")]),t._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),n("h3",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("SHOW [FULL] [BUILTIN] FUNCTIONS [IN|FROM db] [LIKE 'function_pattern']\n")])])]),n("h3",{attrs:{id:"parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("full")]),t._v(":表示显示函数的详细信息\n"),n("code",[t._v("builtin")]),t._v(":表示显示系统提供的函数\n"),n("code",[t._v("db")]),t._v(": 要查询的数据库名字\n"),n("code",[t._v("function_pattern")]),t._v(": 用来过滤函数名称的参数")])]),t._v(" "),n("p",[t._v("查看数据库下所有的自定义(系统提供)的函数。如果用户指定了数据库，那么查看对应数据库的，否则直接查询当前会话所在数据库")]),t._v(" "),n("p",[t._v("需要对这个数据库拥有 "),n("code",[t._v("SHOW")]),t._v(" 权限")]),t._v(" "),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('mysql> show full functions in testDb\\G\n*************************** 1. row ***************************\n        Signature: my_add(INT,INT)\n      Return Type: INT\n    Function Type: Scalar\nIntermediate Type: NULL\n       Properties: {"symbol":"_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_","object_file":"http://host:port/libudfsample.so","md5":"cfe7a362d10f3aaf6c49974ee0f1f878"}\n*************************** 2. row ***************************\n        Signature: my_count(BIGINT)\n      Return Type: BIGINT\n    Function Type: Aggregate\nIntermediate Type: NULL\n       Properties: {"object_file":"http://host:port/libudasample.so","finalize_fn":"_ZN9doris_udf13CountFinalizeEPNS_15FunctionContextERKNS_9BigIntValE","init_fn":"_ZN9doris_udf9CountInitEPNS_15FunctionContextEPNS_9BigIntValE","merge_fn":"_ZN9doris_udf10CountMergeEPNS_15FunctionContextERKNS_9BigIntValEPS2_","md5":"37d185f80f95569e2676da3d5b5b9d2f","update_fn":"_ZN9doris_udf11CountUpdateEPNS_15FunctionContextERKNS_6IntValEPNS_9BigIntValE"}\n*************************** 3. row ***************************\n        Signature: id_masking(INT)\n      Return Type: VARCHAR\n    Function Type: Alias\nIntermediate Type: NULL\n       Properties: {"parameter":"id","origin_function":"concat(left(`id`, 3), `****`, right(`id`, 4))"}\n\n3 rows in set (0.00 sec)\nmysql> show builtin functions in testDb like \'year%\';\n+---------------+\n| Function Name |\n+---------------+\n| year          |\n| years_add     |\n| years_diff    |\n| years_sub     |\n+---------------+\n2 rows in set (0.00 sec)\n')])])]),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("SHOW,FUNCTIONS\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);