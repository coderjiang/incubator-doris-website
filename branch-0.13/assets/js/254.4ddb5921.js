(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{640:function(e,t,n){"use strict";n.r(t);var a=n(43),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"delete"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" DELETE")]),e._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('This statement is used to conditionally delete data in the specified table (base index) partition.\nThis action deletes the rollup index data associated with this base index at the same time.\nGrammar:\n    DELETE FROM table_name [PARTITION partition_name]\n    WHERE\n    column_name1 op { value | value_list } [ AND column_name2 op { value | value_list } ...];\n\nExplain:\n    1) Optional types of OP include: =, >, <, >=, <=, <=, <=, !=, in, not in\n    2) Conditions on key columns can only be specified.\n    2) When the selected key column does not exist in a rollup, delete cannot be performed.\n    3) The relationship between conditions can only be "and".\n    If you want to achieve the "or" relationship, you need to divide the conditions into two DELETE statements.\n    4) If you partition a table for RANGE, you must specify PARTITION. If it is a single partition table, you can not specify it.\n\nNotice:\n    This statement may reduce query efficiency for a period of time after execution.\n    The degree of impact depends on the number of deletion conditions specified in the statement.\n    The more conditions specified, the greater the impact.\n')])])]),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('1. Delete rows whose K1 column value is 3 in my_table partition p 1\nDELETE FROM my_table PARTITION p1\nWHERE k1 = 3;\n\n2. Delete rows whose K1 column value is greater than or equal to 3 and whose K2 column value is "abc" in my_table partition P1\nDELETE FROM my_table PARTITION p1\nWHERE k1 >= 3 AND k2 = "abc";\n')])])]),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("DELETE\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);