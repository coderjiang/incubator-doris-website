(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{424:function(t,e,a){"use strict";a.r(e);var s=a(43),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"get-ddl-statement-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-ddl-statement-action"}},[t._v("#")]),t._v(" Get DDL Statement Action")]),t._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[a("code",[t._v("GET /api/_get_ddl")])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Used to get the table creation statement, partition creation statement and rollup statement of the specified table.")]),t._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),a("p",[t._v("None")]),t._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("db")])]),t._v(" "),a("p",[t._v("Specify database")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("table")])]),t._v(" "),a("p",[t._v("Specify table")])])]),t._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),a("p",[t._v("None")]),t._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": {\n\t\t"create_partition": ["ALTER TABLE `tbl1` ADD PARTITION ..."],\n\t\t"create_table": ["CREATE TABLE `tbl1` ...],\n\t\t"create_rollup": ["ALTER TABLE `tbl1` ADD ROLLUP ..."]\n\t},\n\t"count": 0\n}\n')])])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Get the DDL statement of the specified table")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('GET GET /api/_get_ddl?db=db1&table=tbl1\n\nResponse\n{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": {\n\t\t"create_partition": [],\n\t\t"create_table": ["CREATE TABLE `tbl1` (\\n  `k1` int(11) NULL COMMENT \\"\\",\\n  `k2` int(11) NULL COMMENT \\"\\"\\n) ENGINE=OLAP\\nDUPLICATE KEY(`k1`, `k2`)\\nCOMMENT \\"OLAP\\"\\nDISTRIBUTED BY HASH(`k1`) BUCKETS 1\\nPROPERTIES (\\n\\"replication_num\\" = \\"1\\",\\n\\"version_info\\" = \\"1,0\\",\\n\\"in_memory\\" = \\"false\\",\\n\\"storage_format\\" = \\"DEFAULT\\"\\n);"],\n\t\t"create_rollup": []\n\t},\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);