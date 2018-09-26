(window.webpackJsonp=window.webpackJsonp||[]).push([[671],{1060:function(a,t,e){"use strict";e.r(t);var n=e(43),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"show-partitions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-partitions"}},[a._v("#")]),a._v(" SHOW PARTITIONS")]),a._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("该语句用于展示分区信息\n语法：\n    SHOW [TEMPORARY] PARTITIONS FROM [db_name.]table_name [WHERE] [ORDER BY] [LIMIT];\n说明:\n    支持PartitionId,PartitionName,State,Buckets,ReplicationNum,LastConsistencyCheckTime等列的过滤\n    TEMPORARY指定列出临时分区\n")])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('1.展示指定db下指定表的所有非临时分区信息\n    SHOW PARTITIONS FROM example_db.table_name;\n\n2.展示指定db下指定表的所有临时分区信息\n    SHOW TEMPORARY PARTITIONS FROM example_db.table_name;\n    \n3.展示指定db下指定表的指定非临时分区的信息\n    SHOW PARTITIONS FROM example_db.table_name WHERE PartitionName = "p1";\n\n4.展示指定db下指定表的最新非临时分区的信息\n    SHOW PARTITIONS FROM example_db.table_name ORDER BY PartitionId DESC LIMIT 1;\n')])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("SHOW,PARTITIONS\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);