(window.webpackJsonp=window.webpackJsonp||[]).push([[482],{925:function(e,t,a){"use strict";a.r(t);var r=a(52),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"admin-show-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-show-config"}},[e._v("#")]),e._v(" ADMIN SHOW CONFIG")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("This statement is used to show the configuration of the current cluster (currently only supporting the display of FE configuration items)")]),e._v(" "),a("p",[e._v("Grammar:")]),e._v(" "),a("p",[e._v('ADMIN SHOW FRONTEND CONFIG [LIKE "pattern"];')]),e._v(" "),a("p",[e._v("Explain:")]),e._v(" "),a("p",[e._v("The implications of the results are as follows:")]),e._v(" "),a("ol",[a("li",[e._v("Key: Configuration item name")]),e._v(" "),a("li",[e._v("Value: Configuration item value")]),e._v(" "),a("li",[e._v("Type: Configuration item type")]),e._v(" "),a("li",[e._v("IsMutable: 是否可以通过 ADMIN SET CONFIG 命令设置")]),e._v(" "),a("li",[e._v("MasterOnly: 是否仅适用于 Master FE")]),e._v(" "),a("li",[e._v("Comment: Configuration Item Description")])]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[e._v("View the configuration of the current FE node")])]),e._v(" "),a("p",[e._v("ADMIN SHOW FRONTEND CONFIG;")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Search for a configuration of the current Fe node with like predicate")])]),e._v(" "),a("p",[e._v("mysql> ADMIN SHOW FRONTEND CONFIG LIKE '%check_java_version%';\n+--------------------+-------+---------+-----------+------------+---------+\n| Key                | Value | Type    | IsMutable | MasterOnly | Comment |\n+--------------------+-------+---------+-----------+------------+---------+\n| check_java_version | true  | boolean | false     | false      |         |\n+--------------------+-------+---------+-----------+------------+---------+\n1 row in set (0.00 sec)")]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("ADMIN,SHOW,CONFIG")])])}),[],!1,null,null,null);t.default=i.exports}}]);