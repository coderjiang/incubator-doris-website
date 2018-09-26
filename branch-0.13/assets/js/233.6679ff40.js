(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{621:function(e,o,r){"use strict";r.r(o);var a=r(43),s=Object(a.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"create-repository"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-repository"}},[e._v("#")]),e._v(" CREATE REPOSITORY")]),e._v(" "),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),r("p",[e._v("This statement is used to create the warehouse. The warehouse is used for backup or recovery. Only root or superuser users can create warehouses.\nGrammar:\nCREATE [READ ONLY] REPOSITORY "),r("code",[e._v("repo_name")]),e._v("\nWITH BROKER "),r("code",[e._v("broker_name")]),e._v("\nON LOCATION "),r("code",[e._v("repo_location")]),e._v('\nPROPERTIES ("key"="value", ...);')]),e._v(" "),r("p",[e._v("Explain:")]),e._v(" "),r("ol",[r("li",[e._v("The creation of warehouses depends on existing brokers")]),e._v(" "),r("li",[e._v("If it is a read-only warehouse, it can only be restored on the warehouse. If not, you can backup and restore operations.")]),e._v(" "),r("li",[e._v("According to the different types of broker, PROPERTIES is different, see the example.")])]),e._v(" "),r("h2",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),r("ol",[r("li",[r("p",[e._v('Create a warehouse named bos_repo, which relies on BOS broker "bos_broker", and the data root directory is: bos://palo_backup.\nCREATE REPOSITORY '),r("code",[e._v("bos_repo")]),e._v("\nWITH BROKER "),r("code",[e._v("bos_broker")]),e._v('\nON LOCATION "bos://palo_backup"\nPROPERTIES\n(\n"bosu endpoint" ="http://gz.bcebos.com",\n"bos_accesskey" = "069fc2786e664e63a5f111111114ddbs22",\n"bos_secret_accesskey"="70999999999999de274d59eaa980a"\n);')])]),e._v(" "),r("li",[r("p",[e._v("Create the same warehouse as in Example 1, but with read-only attributes:\nCREATE READ ONLY REPOSITORY "),r("code",[e._v("bos_repo")]),e._v("\nWITH BROKER "),r("code",[e._v("bos_broker")]),e._v('\nON LOCATION "bos://palo_backup"\nPROPERTIES\n(\n"bosu endpoint" ="http://gz.bcebos.com",\n"bos_accesskey" = "069fc2786e664e63a5f111111114ddbs22",\n"bos_secret_accesskey"="70999999999999de274d59eaa980a"\n);')])]),e._v(" "),r("li",[r("p",[e._v('Create a warehouse named hdfs_repo, which relies on Baidu HDFS broker "hdfs_broker", and the data root directory is: hdfs://hadoop-name-node:54310/path/to/repo./\nCREATE REPOSITORY '),r("code",[e._v("hdfs_repo")]),e._v("\nWITH BROKER "),r("code",[e._v("hdfs_broker")]),e._v('\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n"Username" = "User"\n"password" = "password"\n);')])])]),e._v(" "),r("h2",{attrs:{id:"keyword"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),r("p",[e._v("CREATE REPOSITORY")])])}),[],!1,null,null,null);o.default=s.exports}}]);