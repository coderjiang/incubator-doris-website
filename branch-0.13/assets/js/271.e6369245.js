(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{657:function(e,t,i){"use strict";i.r(t);var s=i(43),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"show-export"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#show-export"}},[e._v("#")]),e._v(" SHOW EXPORT")]),e._v(" "),i("h2",{attrs:{id:"description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),i("p",[e._v('This statement is used to show the execution of the specified export task\nGrammar:\nSHOW EXPORT\n[FROM both names]\n[\nWHERE\n[EXPORT_JOB_ID = your_job_id]\n[STATE = ["PENDING"|"EXPORTING"|"FINISHED"|"CANCELLED"]]\n]\n[ORDER BY ...]\n[LIMIT limit];')]),e._v(" "),i("p",[e._v("Explain:")]),e._v(" "),i("ol",[i("li",[e._v("If db_name is not specified, use the current default DB")]),e._v(" "),i("li",[e._v("If STATE is specified, the EXPORT state is matched")]),e._v(" "),i("li",[e._v("Any column combination can be sorted using ORDER BY")]),e._v(" "),i("li",[e._v("If LIMIT is specified, the limit bar matching record is displayed. Otherwise, all of them will be displayed.")])]),e._v(" "),i("h2",{attrs:{id:"example"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Show all export tasks of default DB\nSHOW EXPORT;")])]),e._v(" "),i("li",[i("p",[e._v("Show the export tasks of the specified db, sorted in descending order by StartTime\nSHOW EXPORT FROM example_db ORDER BY StartTime DESC;")])]),e._v(" "),i("li",[i("p",[e._v('Show the export task of the specified db, state is "exporting" and sorted in descending order by StartTime\nSHOW EXPORT FROM example_db WHERE STATE = "exporting" ORDER BY StartTime DESC;')])]),e._v(" "),i("li",[i("p",[e._v("Show the export task of specifying dB and job_id\nSHOW EXPORT FROM example_db WHERE EXPORT_JOB_ID = job_id;")])])]),e._v(" "),i("h2",{attrs:{id:"keyword"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),i("p",[e._v("SHOW,EXPORT")])])}),[],!1,null,null,null);t.default=a.exports}}]);