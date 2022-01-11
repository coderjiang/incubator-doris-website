(window.webpackJsonp=window.webpackJsonp||[]).push([[593],{1043:function(e,t,a){"use strict";a.r(t);var l=a(55),r=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"lateral-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lateral-view"}},[e._v("#")]),e._v(" Lateral View")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("Lateral view syntax can be used with Table Function to fulfill the requirement of expanding one row of data into multiple rows (column to rows).")]),e._v(" "),a("p",[e._v("grammar:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("...\nFROM table_name\nlateral_view_ref[ lateral_view_ref ...]\n\nlateral_view_ref:\n\nLATERAL VIEW table_function(...) view_alias as col_name\n")])])]),a("p",[e._v("The Lateral view clause must follow the table name or subquery. Can contain multiple Lateral view clauses. "),a("code",[e._v("view_alias")]),e._v(" is the name of the corresponding Lateral View. "),a("code",[e._v("col_name")]),e._v(" is the name of the column produced by the table function "),a("code",[e._v("table_function")]),e._v(".")]),e._v(" "),a("p",[e._v("Table functions currently supported:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("explode_split")])]),e._v(" "),a("li",[a("code",[e._v("explode_bitmap")])]),e._v(" "),a("li",[a("code",[e._v("explode_json_array")])])]),e._v(" "),a("p",[e._v("For specific function descriptions, please refer to the corresponding syntax help documentation.")]),e._v(" "),a("p",[e._v("The data in the table will be Cartesian product with the result set produced by each Lateral View and then return to the upper level.")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("p",[e._v("Here, only the syntax example of Lateral View is given. For the specific meaning and output result description, please refer to the help document of the corresponding table function.")]),e._v(" "),a("ol",[a("li")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select k1, e1 from tbl1\nlateral view explode_split(v1,',') tmp1 as e1 where e1 = \"abc\";\n")])])]),a("ol",{attrs:{start:"2"}},[a("li")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select k1, e1, e2 from tbl2\nlateral view explode_split(v1,',') tmp1 as e1\nlateral view explode_bitmap(bitmap1) tmp2 as e2\nwhere e2> 3;\n")])])]),a("ol",{attrs:{start:"3"}},[a("li")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('select k1, e1, e2 from tbl3\nlateral view explode_json_array_int("[1,2,3]") tmp1 as e1\nlateral view explode_bitmap(bitmap_from_string("4,5,6")) tmp2 as e2;\n')])])]),a("ol",{attrs:{start:"4"}},[a("li")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select k1, e1 from (select k1, bitmap_union(members) as x from tbl1 where k1=10000 group by k1)tmp1\nlateral view explode_bitmap(x) tmp2 as e1;\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("lateral view\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);