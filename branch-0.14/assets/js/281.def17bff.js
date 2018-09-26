(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{670:function(e,t,a){"use strict";a.r(t);var s=a(43),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"create-table-like"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-table-like"}},[e._v("#")]),e._v(" CREATE TABLE LIKE")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("Use CREATE TABLE ... LIKE to create an empty table based on the definition of another table, including any column attributes, table partitions and table properties defined in the original table:\nSyntax：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name LIKE [database.]table_name\n")])])]),a("p",[e._v("Explain:\n1. The replicated table structures include Column Definition, Partitions, Table Properties, and so on\n2. The SELECT privilege is required on the original table.\n3. Support to copy external table such as MySQL.")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1. Under the test1 Database, create an empty table with the same table structure as table1, named table2\n\n    CREATE TABLE test1.table2 LIKE test1.table1\n\n2. Under the test2 Database, create an empty table with the same table structure as test1.table1, named table2\n\n    CREATE TABLE test2.table2 LIKE test1.table1\n\n3. Under the test1 Database, create an empty table with the same table structure as MySQL's external table1, called table2\n\n    CREATE TABLE test1.table2 LIKE test1.table1\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    CREATE,TABLE,LIKE\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);