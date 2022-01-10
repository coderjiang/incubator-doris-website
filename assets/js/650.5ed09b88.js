(window.webpackJsonp=window.webpackJsonp||[]).push([[650],{1093:function(n,e,t){"use strict";t.r(e);var a=t(52),s=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"node-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-action"}},[n._v("#")]),n._v(" Node Action")]),n._v(" "),t("h2",{attrs:{id:"request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[n._v("#")]),n._v(" Request")]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/frontends")])]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/backends")])]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/brokers")])]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/configuration_name")])]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/node_list")])]),n._v(" "),t("p",[t("code",[n._v("POST /rest/v2/manager/node/configuration_info")])]),n._v(" "),t("p",[t("code",[n._v("POST /rest/v2/manager/node/set_config/fe")])]),n._v(" "),t("p",[t("code",[n._v("POST /rest/v2/manager/node/set_config/be")])]),n._v(" "),t("h2",{attrs:{id:"获取fe-be-broker节点信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取fe-be-broker节点信息"}},[n._v("#")]),n._v(" 获取fe, be, broker节点信息")]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/frontends")])]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/backends")])]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/brokers")])]),n._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[n._v("#")]),n._v(" Description")]),n._v(" "),t("p",[n._v("用于获取集群获取fe, be, broker节点信息。")]),n._v(" "),t("h3",{attrs:{id:"response"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[n._v("#")]),n._v(" Response")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('frontends:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Name",\n            "IP",\n            "HostName",\n            "EditLogPort",\n            "HttpPort",\n            "QueryPort",\n            "RpcPort",\n            "Role",\n            "IsMaster",\n            "ClusterId",\n            "Join",\n            "Alive",\n            "ReplayedJournalId",\n            "LastHeartbeat",\n            "IsHelper",\n            "ErrMsg",\n            "Version"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('backends:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "BackendId",\n            "Cluster",\n            "IP",\n            "HostName",\n            "HeartbeatPort",\n            "BePort",\n            "HttpPort",\n            "BrpcPort",\n            "LastStartTime",\n            "LastHeartbeat",\n            "Alive",\n            "SystemDecommissioned",\n            "ClusterDecommissioned",\n            "TabletNum",\n            "DataUsedCapacity",\n            "AvailCapacity",\n            "TotalCapacity",\n            "UsedPct",\n            "MaxDiskUsedPct",\n            "ErrMsg",\n            "Version",\n            "Status"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('brokers:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Name",\n            "IP",\n            "HostName",\n            "Port",\n            "Alive",\n            "LastStartTime",\n            "LastUpdateTime",\n            "ErrMsg"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')])])]),t("h2",{attrs:{id:"获取节点配置信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取节点配置信息"}},[n._v("#")]),n._v(" 获取节点配置信息")]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/configuration_name")])]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/node_list")])]),n._v(" "),t("p",[t("code",[n._v("POST /rest/v2/manager/node/configuration_info")])]),n._v(" "),t("h3",{attrs:{id:"description-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[n._v("#")]),n._v(" Description")]),n._v(" "),t("p",[n._v("configuration_name 用于获取节点配置项名称。"),t("br"),n._v("\nnode_list 用于获取节点列表。"),t("br"),n._v("\nconfiguration_info 用于获取节点配置详细信息。")]),n._v(" "),t("h3",{attrs:{id:"query-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[n._v("#")]),n._v(" Query parameters")]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/configuration_name")]),t("br"),n._v("\n无")]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/node_list")]),t("br"),n._v("\n无")]),n._v(" "),t("p",[t("code",[n._v("POST /rest/v2/manager/node/configuration_info")])]),n._v(" "),t("ul",[t("li",[n._v("type\n值为 fe 或 be， 用于指定获取fe的配置信息或be的配置信息。")])]),n._v(" "),t("h3",{attrs:{id:"request-body"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[n._v("#")]),n._v(" Request body")]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/configuration_name")]),t("br"),n._v("\n无")]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/node_list")]),t("br"),n._v("\n无")]),n._v(" "),t("p",[t("code",[n._v("POST /rest/v2/manager/node/configuration_info")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n\t"conf_name": [\n\t\t""\n\t],\n\t"node": [\n\t\t""\n\t]\n}\n\n若不带body，body中的参数都使用默认值。  \nconf_name 用于指定返回哪些配置项的信息， 默认返回所有配置项信息；\nnode 用于指定返回哪些节点的配置项信息，默认为全部fe节点或be节点配置项信息。\n')])])]),t("h3",{attrs:{id:"response-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[n._v("#")]),n._v(" Response")]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/configuration_name")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "backend":[\n            ""\n        ],\n        "frontend":[\n            ""\n        ]\n    },\n    "count": 0\n}\n')])])]),t("p",[t("code",[n._v("GET /rest/v2/manager/node/node_list")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "backend": [\n            ""\n        ],\n        "frontend": [\n            ""\n        ]\n    },\n    "count": 0\n}\n')])])]),t("p",[t("code",[n._v("POST /rest/v2/manager/node/configuration_info?type=fe")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "配置项",\n            "节点",\n            "节点类型",\n            "配置值类型",\n            "MasterOnly",\n            "配置值",\n            "可修改"\n        ],\n        "rows": [\n            [\n                ""\n            ]\n        ]\n    },\n    "count": 0\n}\n')])])]),t("p",[t("code",[n._v("POST /rest/v2/manager/node/configuration_info?type=be")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "配置项",\n            "节点",\n            "节点类型",\n            "配置值类型",\n            "配置值",\n            "可修改"\n        ],\n        "rows": [\n            [\n                ""\n            ]\n        ]\n    },\n    "count": 0\n}\n')])])]),t("h3",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[n._v("#")]),n._v(" Examples")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("获取fe agent_task_resend_wait_time_ms 配置项信息：")]),n._v(" "),t("p",[n._v("POST /rest/v2/manager/node/configuration_info?type=fe"),t("br"),n._v("\nbody:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n    "conf_name":[\n        "agent_task_resend_wait_time_ms"\n    ]\n}\n')])])]),t("p",[n._v("Response:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "配置项",\n            "节点",\n            "节点类型",\n            "配置值类型",\n            "MasterOnly",\n            "配置值",\n            "可修改"\n        ],\n        "rows": [\n            [\n                "agent_task_resend_wait_time_ms",\n                "127.0.0.1:8030",\n                "FE",\n                "long",\n                "true",\n                "50000",\n                "true"\n            ]\n        ]\n    },\n    "count": 0\n}\n')])])])])]),n._v(" "),t("h2",{attrs:{id:"修改配置值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置值"}},[n._v("#")]),n._v(" 修改配置值")]),n._v(" "),t("p",[t("code",[n._v("POST /rest/v2/manager/node/set_config/fe")])]),n._v(" "),t("p",[t("code",[n._v("POST /rest/v2/manager/node/set_config/be")])]),n._v(" "),t("h3",{attrs:{id:"description-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[n._v("#")]),n._v(" Description")]),n._v(" "),t("p",[n._v("用于修改fe或be节点配置值")]),n._v(" "),t("h3",{attrs:{id:"request-body-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-body-2"}},[n._v("#")]),n._v(" Request body")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n\t"config_name":{\n\t\t"node":[\n\t\t\t""\n\t\t],\n\t\t"value":"",\n\t\t"persist":\n\t}\n}\n\nconfig_name为对应的配置项；  \nnode为关键字，表示要修改的节点列表;  \nvalue为配置的值；  \npersist为 true 表示永久修改， false 表示临时修改。永久修改重启后能生效， 临时修改重启后失效。\n')])])]),t("h3",{attrs:{id:"response-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[n._v("#")]),n._v(" Response")]),n._v(" "),t("p",[t("code",[n._v("GET /rest/v2/manager/node/configuration_name")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n\t"msg": "",\n\t"code": 0,\n\t"data": {\n\t\t"failed":[\n\t\t\t{\n\t\t\t\t"config_name":"name",\n\t\t\t\t"value"="",\n\t\t\t\t"node":"",\n\t\t\t\t"err_info":""\n\t\t\t}\n\t\t]\n\t},\n\t"count": 0\n}\n\nfailed 表示修改失败的配置信息。\n')])])]),t("h3",{attrs:{id:"examples-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[n._v("#")]),n._v(" Examples")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("修改fe 127.0.0.1:8030 节点中 agent_task_resend_wait_time_ms 和alter_table_timeout_second 配置值：")]),n._v(" "),t("p",[n._v("POST /rest/v2/manager/node/set_config/fe\nbody:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n    "agent_task_resend_wait_time_ms":{\n        "node":[\n\t    \t"127.0.0.1:8030"\n\t    ],\n\t    "value":"10000",\n\t    "persist":"true"\n    },\n    "alter_table_timeout_second":{\n        "node":[\n\t    \t"127.0.0.1:8030"\n\t    ],\n\t    "value":"true",\n\t    "persist":"true"\n    }\n}\n')])])]),t("p",[n._v("Response:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "failed": [\n            {\n                "config_name": "alter_table_timeout_second",\n                "node": "10.81.85.89:8837",\n                "err_info": "Unsupported configuration value type.",\n                "value": "true"\n            }\n        ]\n    },\n    "count": 0\n}\n\nagent_task_resend_wait_time_ms 配置值修改成功，alter_table_timeout_second 修改失败。\n')])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);