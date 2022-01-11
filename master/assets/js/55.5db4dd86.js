(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{509:function(e,t,a){"use strict";a.r(t);var r=a(55),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"query-profile-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-profile-action"}},[e._v("#")]),e._v(" Query Profile Action")]),e._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" Request")]),e._v(" "),a("p",[a("code",[e._v("GET /rest/v2/manager/query/query_info")])]),e._v(" "),a("p",[a("code",[e._v("GET /rest/v2/manager/query/sql/{query_id}")])]),e._v(" "),a("p",[a("code",[e._v("GET /rest/v2/manager/query/profile/text/{query_id}")])]),e._v(" "),a("p",[a("code",[e._v("GET /rest/v2/manager/query/profile/fragments/{query_id}")])]),e._v(" "),a("p",[a("code",[e._v("GET /rest/v2/manager/query/profile/graph/{query_id}")])]),e._v(" "),a("h2",{attrs:{id:"get-the-query-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-query-information"}},[e._v("#")]),e._v(" Get the query information")]),e._v(" "),a("p",[a("code",[e._v("GET /rest/v2/manager/query/query_info")])]),e._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Gets information about select queries for all fe nodes in the cluster.")]),e._v(" "),a("h3",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("query_id")])]),e._v(" "),a("p",[e._v("Optional, specifies the query ID of the query to be returned, default returns information for all queries.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("search")])]),e._v(" "),a("p",[e._v("Optional, specifies that query information containing strings is returned, currently only string matches are performed.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("is_all_node")])]),e._v(" "),a("p",[e._v("Optional, if true, returns query information for all fe nodes, if false, returns query information for the current fe node. The default is true.")])])]),e._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Query ID",\n            "FE节点",\n            "查询用户",\n            "执行数据库",\n            "Sql",\n            "查询类型",\n            "开始时间",\n            "结束时间",\n            "执行时长",\n            "状态"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')])])]),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('GET /rest/v2/manager/query/query_info\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Query ID",\n            "FE节点",\n            "查询用户",\n            "执行数据库",\n            "Sql",\n            "查询类型",\n            "开始时间",\n            "结束时间",\n            "执行时长",\n            "状态"\n        ],\n        "rows": [\n            [\n                "d7c93d9275334c35-9e6ac5f295a7134b",\n                "127.0.0.1:8030",\n                "root",\n                "default_cluster:testdb",\n                "select c.id, c.name, p.age, p.phone, c.date, c.cost from cost c join people p on c.id = p.id where p.age > 20 order by c.id",\n                "Query",\n                "2021-07-29 16:59:12",\n                "2021-07-29 16:59:12",\n                "109ms",\n                "EOF"\n            ]\n        ]\n    },\n    "count": 0\n}\n')])])]),a("h2",{attrs:{id:"get-the-sql-and-text-profile-for-the-specified-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-sql-and-text-profile-for-the-specified-query"}},[e._v("#")]),e._v(" Get the sql and text profile for the specified query")]),e._v(" "),a("p",[a("code",[e._v("GET /rest/v2/manager/query/sql/{query_id}")])]),e._v(" "),a("p",[a("code",[e._v("GET /rest/v2/manager/query/profile/text/{query_id}")])]),e._v(" "),a("h3",{attrs:{id:"description-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Get the sql and profile text for the specified query id.")]),e._v(" "),a("h3",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[e._v("#")]),e._v(" Path parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("query_id")])]),e._v(" "),a("p",[e._v("The query id.")])])]),e._v(" "),a("h3",{attrs:{id:"query-parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-2"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("is_all_node")])]),e._v(" "),a("p",[e._v("Optional, if true then query for the specified query id in all fe nodes, if false then query for the specified query id in the currently connected fe nodes. The default is true.")])])]),e._v(" "),a("h3",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "sql": ""\n    },\n    "count": 0\n}\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "profile": ""\n    },\n    "count": 0\n}\n')])])]),a("h3",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("get sql.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('GET /rest/v2/manager/query/sql/d7c93d9275334c35-9e6ac5f295a7134b\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "sql": "select c.id, c.name, p.age, p.phone, c.date, c.cost from cost c join people p on c.id = p.id where p.age > 20 order by c.id"\n    },\n    "count": 0\n}\n')])])])])]),e._v(" "),a("h2",{attrs:{id:"get-the-specified-query-fragment-and-instance-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-specified-query-fragment-and-instance-information"}},[e._v("#")]),e._v(" Get the specified query fragment and instance information")]),e._v(" "),a("p",[a("code",[e._v("GET /rest/v2/manager/query/profile/fragments/{query_id}")])]),e._v(" "),a("h3",{attrs:{id:"description-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Get the fragment name, instance id and execution time for the specified query id.")]),e._v(" "),a("h3",{attrs:{id:"path-parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters-2"}},[e._v("#")]),e._v(" Path parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("query_id")])]),e._v(" "),a("p",[e._v("The query id.")])])]),e._v(" "),a("h3",{attrs:{id:"query-parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-3"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("is_all_node")])]),e._v(" "),a("p",[e._v("Optional, if true then query for the specified query id in all fe nodes, if false then query for the specified query id in the currently connected fe nodes. The default is true.")])])]),e._v(" "),a("h3",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        {\n            "fragment_id": "",\n            "time": "",\n            "instance_id": {\n                "": ""\n            }\n        }\n    ],\n    "count": 0\n}\n')])])]),a("h3",{attrs:{id:"examples-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('```\nGET /rest/v2/manager/query/profile/fragments/d7c93d9275334c35-9e6ac5f295a7134b\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        {\n            "fragment_id": "0",\n            "time": "36.169ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134e": "36.169ms"\n            }\n        },\n        {\n            "fragment_id": "1",\n            "time": "20.710ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134c": "20.710ms"\n            }\n        },\n        {\n            "fragment_id": "2",\n            "time": "7.83ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134d": "7.83ms"\n            }\n        }\n    ],\n    "count": 0\n}\n```\n')])])]),a("h2",{attrs:{id:"get-the-specified-query-id-tree-profile-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-specified-query-id-tree-profile-information"}},[e._v("#")]),e._v(" Get the specified query id tree profile information")]),e._v(" "),a("p",[a("code",[e._v("GET /rest/v2/manager/query/profile/graph/{query_id}")])]),e._v(" "),a("h3",{attrs:{id:"description-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-4"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Get the tree profile information of the specified query id, same as "),a("code",[e._v("show query profile")]),e._v(" command.")]),e._v(" "),a("h3",{attrs:{id:"path-parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters-3"}},[e._v("#")]),e._v(" Path parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("query_id")])]),e._v(" "),a("p",[e._v("The query id.")])])]),e._v(" "),a("h3",{attrs:{id:"query-parameters-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-4"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("fragment_id")]),e._v(" and "),a("code",[e._v("instance_id")])]),e._v(" "),a("p",[e._v("Optional, both parameters must be specified or not."),a("br"),e._v("\nIf both are not specified, a simple tree of profiles is returned, equivalent to "),a("code",[e._v("show query profile '/query_id'")]),e._v(";"),a("br"),e._v("\nIf both are specified, a detailed profile tree is returned, which is equivalent to "),a("code",[e._v("show query profile '/query_id/fragment_id/instance_id'")]),e._v(".")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("is_all_node")])]),e._v(" "),a("p",[e._v("Optional, if true then query information about the specified query id in all fe nodes, if false then query information about the specified query id in the currently connected fe nodes. The default is true.")])])]),e._v(" "),a("h3",{attrs:{id:"response-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "graph":""\n    },\n    "count": 0\n}\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);