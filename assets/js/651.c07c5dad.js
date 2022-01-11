(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{1101:function(e,a,r){"use strict";r.r(a);var s=r(55),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"query-profile-action"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-profile-action"}},[e._v("#")]),e._v(" Query Profile Action")]),e._v(" "),r("h2",{attrs:{id:"request"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" Request")]),e._v(" "),r("p",[r("code",[e._v("GET /rest/v2/manager/query/query_info")])]),e._v(" "),r("p",[r("code",[e._v("GET /rest/v2/manager/query/sql/{query_id}")])]),e._v(" "),r("p",[r("code",[e._v("GET /rest/v2/manager/query/profile/text/{query_id}")])]),e._v(" "),r("p",[r("code",[e._v("GET /rest/v2/manager/query/profile/fragments/{query_id}")])]),e._v(" "),r("p",[r("code",[e._v("GET /rest/v2/manager/query/profile/graph/{query_id}")])]),e._v(" "),r("h2",{attrs:{id:"获取查询信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取查询信息"}},[e._v("#")]),e._v(" 获取查询信息")]),e._v(" "),r("p",[r("code",[e._v("GET /rest/v2/manager/query/query_info")])]),e._v(" "),r("h3",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),r("p",[e._v("可获取集群所有 fe 节点 select 查询信息。")]),e._v(" "),r("h3",{attrs:{id:"query-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("query_id")])]),e._v(" "),r("p",[e._v("可选，指定返回查询的queryID， 默认返回所有查询的信息。")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("search")])]),e._v(" "),r("p",[e._v("可选，指定返回包含字符串的查询信息，目前仅进行字符串匹配。")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("is_all_node")])]),e._v(" "),r("p",[e._v("可选，若为 true 则返回所有fe节点的查询信息，若为 false 则返回当前fe节点的查询信息。默认为true。")])])]),e._v(" "),r("h3",{attrs:{id:"response"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Query ID",\n            "FE节点",\n            "查询用户",\n            "执行数据库",\n            "Sql",\n            "查询类型",\n            "开始时间",\n            "结束时间",\n            "执行时长",\n            "状态"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')])])]),r("h3",{attrs:{id:"examples"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('GET /rest/v2/manager/query/query_info\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Query ID",\n            "FE节点",\n            "查询用户",\n            "执行数据库",\n            "Sql",\n            "查询类型",\n            "开始时间",\n            "结束时间",\n            "执行时长",\n            "状态"\n        ],\n        "rows": [\n            [\n                "d7c93d9275334c35-9e6ac5f295a7134b",\n                "127.0.0.1:8030",\n                "root",\n                "default_cluster:testdb",\n                "select c.id, c.name, p.age, p.phone, c.date, c.cost from cost c join people p on c.id = p.id where p.age > 20 order by c.id",\n                "Query",\n                "2021-07-29 16:59:12",\n                "2021-07-29 16:59:12",\n                "109ms",\n                "EOF"\n            ]\n        ]\n    },\n    "count": 0\n}\n')])])]),r("h2",{attrs:{id:"获取指定查询的sql和文本profile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取指定查询的sql和文本profile"}},[e._v("#")]),e._v(" 获取指定查询的sql和文本profile")]),e._v(" "),r("p",[r("code",[e._v("GET /rest/v2/manager/query/sql/{query_id}")])]),e._v(" "),r("p",[r("code",[e._v("GET /rest/v2/manager/query/profile/text/{query_id}")])]),e._v(" "),r("h3",{attrs:{id:"description-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[e._v("#")]),e._v(" Description")]),e._v(" "),r("p",[e._v("用于获取指定query id的sql和profile文本。")]),e._v(" "),r("h3",{attrs:{id:"path-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[e._v("#")]),e._v(" Path parameters")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("query_id")])]),e._v(" "),r("p",[e._v("query id。")])])]),e._v(" "),r("h3",{attrs:{id:"query-parameters-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-2"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("is_all_node")])]),e._v(" "),r("p",[e._v("可选，若为 true 则在所有fe节点中查询指定query id的信息，若为 false 则在当前连接的fe节点中查询指定query id的信息。默认为true。")])])]),e._v(" "),r("h3",{attrs:{id:"response-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[e._v("#")]),e._v(" Response")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "sql": ""\n    },\n    "count": 0\n}\n')])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "profile": ""\n    },\n    "count": 0\n}\n')])])]),r("h3",{attrs:{id:"examples-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("获取 sql：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('GET /rest/v2/manager/query/sql/d7c93d9275334c35-9e6ac5f295a7134b\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "sql": "select c.id, c.name, p.age, p.phone, c.date, c.cost from cost c join people p on c.id   = p.id where p.age > 20 order by c.id"\n    },\n    "count": 0\n}\n')])])])])]),e._v(" "),r("h2",{attrs:{id:"获取指定查询fragment和instance信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取指定查询fragment和instance信息"}},[e._v("#")]),e._v(" 获取指定查询fragment和instance信息")]),e._v(" "),r("p",[r("code",[e._v("GET /rest/v2/manager/query/profile/fragments/{query_id}")])]),e._v(" "),r("h3",{attrs:{id:"description-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[e._v("#")]),e._v(" Description")]),e._v(" "),r("p",[e._v("用于获取指定query id的fragment名称，instance id和执行时长。")]),e._v(" "),r("h3",{attrs:{id:"path-parameters-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters-2"}},[e._v("#")]),e._v(" Path parameters")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("query_id")])]),e._v(" "),r("p",[e._v("query id。")])])]),e._v(" "),r("h3",{attrs:{id:"query-parameters-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-3"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("is_all_node")])]),e._v(" "),r("p",[e._v("可选，若为 true 则在所有fe节点中查询指定query id的信息，若为 false 则在当前连接的fe节点中查询指定query id的信息。默认为true。")])])]),e._v(" "),r("h3",{attrs:{id:"response-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[e._v("#")]),e._v(" Response")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        {\n            "fragment_id": "",\n            "time": "",\n            "instance_id": {\n                "": ""\n            }\n        }\n    ],\n    "count": 0\n}\n')])])]),r("h3",{attrs:{id:"examples-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('```\nGET /rest/v2/manager/query/profile/fragments/d7c93d9275334c35-9e6ac5f295a7134b\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        {\n            "fragment_id": "0",\n            "time": "36.169ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134e": "36.169ms"\n            }\n        },\n        {\n            "fragment_id": "1",\n            "time": "20.710ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134c": "20.710ms"\n            }\n        },\n        {\n            "fragment_id": "2",\n            "time": "7.83ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134d": "7.83ms"\n            }\n        }\n    ],\n    "count": 0\n}\n```\n')])])]),r("h2",{attrs:{id:"获取指定query-id树状profile信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取指定query-id树状profile信息"}},[e._v("#")]),e._v(" 获取指定query id树状profile信息")]),e._v(" "),r("p",[r("code",[e._v("GET /rest/v2/manager/query/profile/graph/{query_id}")])]),e._v(" "),r("h3",{attrs:{id:"description-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description-4"}},[e._v("#")]),e._v(" Description")]),e._v(" "),r("p",[e._v("获取指定query id树状profile信息，同 "),r("code",[e._v("show query profile")]),e._v(" 指令。")]),e._v(" "),r("h3",{attrs:{id:"path-parameters-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters-3"}},[e._v("#")]),e._v(" Path parameters")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("query_id")])]),e._v(" "),r("p",[e._v("query id。")])])]),e._v(" "),r("h3",{attrs:{id:"query-parameters-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-4"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("fragment_id")]),e._v(" 和 "),r("code",[e._v("instance_id")])]),e._v(" "),r("p",[e._v("可选，这两个参数需同时指定或同时不指定。"),r("br"),e._v("\n同时不指定则返回profile 简易树形图，相当于"),r("code",[e._v("show query profile '/query_id'")]),e._v(";"),r("br"),e._v("\n同时指定则返回指定instance详细profile树形图，相当于"),r("code",[e._v("show query profile '/query_id/fragment_id/instance_id'")]),e._v(".")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("is_all_node")])]),e._v(" "),r("p",[e._v("可选，若为 true 则在所有fe节点中查询指定query id的信息，若为 false 则在当前连接的fe节点中查询指定query id的信息。默认为true。")])])]),e._v(" "),r("h3",{attrs:{id:"response-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[e._v("#")]),e._v(" Response")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "graph":""\n    },\n    "count": 0\n}\n')])])])])}),[],!1,null,null,null);a.default=t.exports}}]);