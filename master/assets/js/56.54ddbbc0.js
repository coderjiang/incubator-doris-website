(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{453:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"query-detail-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-detail-action"}},[t._v("#")]),t._v(" Query Detail Action")]),t._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("code",[t._v("GET /api/query_detail")])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Used to obtain information about all queries after a specified time point")]),t._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),a("p",[t._v("None")]),t._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("event_time")])]),t._v(" "),a("p",[t._v("At the specified time point (Unix timestamp, in milliseconds), obtain query information after that time point.")])])]),t._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),a("p",[t._v("无")]),t._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"query_details": [{\n\t\t\t"eventTime": 1596462699216,\n\t\t\t"queryId": "f732084bc8e74f39-8313581c9c3c0b58",\n\t\t\t"startTime": 1596462698969,\n\t\t\t"endTime": 1596462699216,\n\t\t\t"latency": 247,\n\t\t\t"state": "FINISHED",\n\t\t\t"database": "db1",\n\t\t\t"sql": "select * from tbl1"\n\t\t}, {\n\t\t\t"eventTime": 1596463013929,\n\t\t\t"queryId": "ed2d0d80855d47a5-8b518a0f1472f60c",\n\t\t\t"startTime": 1596463013913,\n\t\t\t"endTime": 1596463013929,\n\t\t\t"latency": 16,\n\t\t\t"state": "FINISHED",\n\t\t\t"database": "db1",\n\t\t\t"sql": "select k1 from tbl1"\n\t\t}]\n\t},\n\t"count": 0\n}\n')])])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Get query details after the specified time point.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET /api/query_detail?event_time=1596462079958\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"query_details": [{\n\t\t\t"eventTime": 1596462699216,\n\t\t\t"queryId": "f732084bc8e74f39-8313581c9c3c0b58",\n\t\t\t"startTime": 1596462698969,\n\t\t\t"endTime": 1596462699216,\n\t\t\t"latency": 247,\n\t\t\t"state": "FINISHED",\n\t\t\t"database": "db1",\n\t\t\t"sql": "select * from tbl1"\n\t\t}, {\n\t\t\t"eventTime": 1596463013929,\n\t\t\t"queryId": "ed2d0d80855d47a5-8b518a0f1472f60c",\n\t\t\t"startTime": 1596463013913,\n\t\t\t"endTime": 1596463013929,\n\t\t\t"latency": 16,\n\t\t\t"state": "FINISHED",\n\t\t\t"database": "db1",\n\t\t\t"sql": "select k1 from tbl1"\n\t\t}]\n\t},\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);