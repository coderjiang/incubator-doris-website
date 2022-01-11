(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{966:function(e,a,t){"use strict";t.r(a);var L=t(55),l=Object(L.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cancel-alter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cancel-alter"}},[e._v("#")]),e._v(" CANCEL ALTER")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("This statement is used to undo an ALTER operation.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("撤销 ALTER TABLE COLUMN 操作\nGrammar:\nCANCEL ALTER TABLE COLUMN\nFROM db_name.table_name")])]),e._v(" "),t("li",[t("p",[e._v("撤销 ALTER TABLE ROLLUP 操作\nGrammar:\nCANCEL ALTER TABLE ROLLUP\nFROM db_name.table_name")])]),e._v(" "),t("li",[t("p",[e._v("batch cancel rollup by job id\nGrammar:\nCANCEL ALTER TABLE ROLLUP\nFROM db_name.table_name (jobid,...)\nNote:\nBatch cancel rollup job is an async operation, use "),t("code",[e._v("show alter table rollup")]),e._v(" to see whether it executes successfully")])]),e._v(" "),t("li",[t("p",[e._v("OTHER CLUSTER\nGrammar:\n(To be realized...")])])]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("p",[e._v("[CANCEL ALTER TABLE COLUMN]")]),e._v(" "),t("ol",[t("li",[e._v("撤销针对 my_table 的 ALTER COLUMN 操作。\nCANCEL ALTER TABLE COLUMN\nFROM example_db.my_table;")])]),e._v(" "),t("p",[e._v("[CANCEL ALTER TABLE ROLLUP]")]),e._v(" "),t("ol",[t("li",[e._v("撤销 my_table 下的 ADD ROLLUP 操作。\nCANCEL ALTER TABLE ROLLUP\nFROM example_db.my_table;")])]),e._v(" "),t("p",[e._v("[CANCEL ALTER TABLE ROLLUP]")]),e._v(" "),t("ol",[t("li",[e._v("cancel rollup alter job by job id\nCANCEL ALTER TABLE ROLLUP\nFROM example_db.my_table (12801,12802);")])]),e._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("CANCEL,ALTER,TABLE,COLUMN,ROLLUP")])])}),[],!1,null,null,null);a.default=l.exports}}]);