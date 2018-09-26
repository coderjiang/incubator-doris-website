(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{995:function(t,e,a){"use strict";a.r(e);var s=a(43),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"statement-execution-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statement-execution-action"}},[t._v("#")]),t._v(" Statement Execution Action")]),t._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("POST /api/query/<ns_name>/<db_name>\n")])])]),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Statement Execution Action 用于执行语句并返回结果。")]),t._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("<db_name>")])]),t._v(" "),a("p",[t._v("指定数据库名称。该数据库会被视为当前session的默认数据库，如果在 SQL 中的表名没有限定数据库名称的话，则使用该数据库。")])])]),t._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),a("p",[t._v("无")]),t._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "stmt" : "select * from tbl1"\n}\n')])])]),a("ul",[a("li",[t._v("sql 字段为具体的 SQL")])]),t._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("返回结果集")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "type": "result_set",\n        "data": [\n            [1],\n            [2]\n        ],\n        "meta": [{\n            "name": "k1",\n            "type": "INT"\n        }],\n        "status": {},\n        "time": 10\n    },\n    "count": 0\n}\n')])])]),a("ul",[a("li",[t._v("type 字段为 "),a("code",[t._v("result_set")]),t._v(" 表示返回结果集。需要根据 meta 和 data 字段获取并展示结果。meta 字段描述返回的列信息。data 字段返回结果行。其中每一行的中的列类型，需要通过 meta 字段内容判断。status 字段返回 MySQL 的一些信息，如告警行数，状态码等。time 字段返回语句执行时间，单位毫秒。")])])]),t._v(" "),a("li",[a("p",[t._v("返回执行结果")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "type": "exec_status",\n        "status": {},\n        "time": 10\n    },\n    "count": 0\n}\n')])])]),a("ul",[a("li",[t._v("type 字段为 "),a("code",[t._v("exec_status")]),t._v(" 表示返回执行结果。目前收到该返回结果，则都表示语句执行成功。")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);