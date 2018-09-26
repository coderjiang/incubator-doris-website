(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{858:function(e,a,t){"use strict";t.r(a);var s=t(43),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-view"}},[e._v("#")]),e._v(" CREATE VIEW")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('This statement is used to create a logical view\nGrammar:\n\n    CREATE VIEW [IF NOT EXISTS]\n    [db_name.]view_name\n    (column1[ COMMENT "col comment"][, column2, ...])\n    AS query_stmt\n\nExplain:\n\n    1. Views are logical views without physical storage. All queries on views are equivalent to sub-queries corresponding to views.\n    2. query_stmt is arbitrarily supported SQL.\n')])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('1. Create view example_view on example_db\n\n    CREATE VIEW example_db.example_view (k1, k2, k3, v1)\n    AS\n    SELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\n    WHERE k1 = 20160112 GROUP BY k1,k2,k3;\n    \n2. Create view with comment\n\n    CREATE VIEW example_db.example_view\n    (\n        k1 COMMENT "first key",\n        k2 COMMENT "second key",\n        k3 COMMENT "third key",\n        v1 COMMENT "first value"\n    )\n    COMMENT "my first view"\n    AS\n    SELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\n    WHERE k1 = 20160112 GROUP BY k1,k2,k3;\n')])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("CREATE,VIEW\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);