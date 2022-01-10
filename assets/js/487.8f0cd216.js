(window.webpackJsonp=window.webpackJsonp||[]).push([[487],{930:function(e,t,o){"use strict";o.r(t);var r=o(52),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"alter-system"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alter-system"}},[e._v("#")]),e._v(" ALTER SYSTEM")]),e._v(" "),o("h2",{attrs:{id:"description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),o("p",[e._v("This statement is used to operate on nodes in a system. (Administrator only!)\nGrammar:")]),e._v(" "),o("ol",[o("li",[e._v('Adding nodes (without multi-tenant functionality, add in this way)\nALTER SYSTEM ADD BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...];')]),e._v(" "),o("li",[e._v('Adding idle nodes (that is, adding BACKEND that does not belong to any cluster)\nALTER SYSTEM ADD FREE BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...];')]),e._v(" "),o("li",[e._v('Adding nodes to a cluster\nALTER SYSTEM ADD BACKEND TO cluster_name "host:heartbeat_port"[,"host:heartbeat_port"...];')]),e._v(" "),o("li",[e._v('Delete nodes\nALTER SYSTEM DROP BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...];')]),e._v(" "),o("li",[e._v('Node offline\nALTER SYSTEM DECOMMISSION BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...];\n6)226;- 21152;-Broker\nALTER SYSTEM ADD BROKER broker_name "host:port"[,"host:port"...];\n(7) 20943;"23569;" Broker\nALTER SYSTEM DROP BROKER broker_name "host:port"[,"host:port"...];')]),e._v(" "),o("li",[e._v("Delete all Brokers\nALTER SYSTEM DROP ALL BROKER broker_name")]),e._v(" "),o("li",[e._v('Set up a Load error hub for centralized display of import error information\nALTER SYSTEM SET LOAD ERRORS HUB PROPERTIES ("key" = "value"[, ...]);')]),e._v(" "),o("li",[e._v('Modify property of BE\nALTER SYSTEM MODIFY BACKEND "host:heartbeat_port" SET ("key" = "value"[, ...]);')])]),e._v(" "),o("p",[e._v("Explain:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Host can be hostname or IP address")])]),e._v(" "),o("li",[o("p",[e._v("heartbeat_port is the heartbeat port of the node")])]),e._v(" "),o("li",[o("p",[e._v("Adding and deleting nodes are synchronous operations. These two operations do not take into account the existing data on the node, the node is directly deleted from the metadata, please use cautiously.")])]),e._v(" "),o("li",[o("p",[e._v("Node offline operations are used to secure offline nodes. This operation is asynchronous. If successful, the node will eventually be removed from the metadata. If it fails, the offline will not be completed.")])]),e._v(" "),o("li",[o("p",[e._v("The offline operation of the node can be cancelled manually. See CANCEL DECOMMISSION for details")])]),e._v(" "),o("li",[o("p",[e._v('Load error hub:\nCurrently, two types of Hub are supported: Mysql and Broker. You need to specify "type" = "mysql" or "type" = "broker" in PROPERTIES.\nIf you need to delete the current load error hub, you can set type to null.')]),e._v(" "),o("ol",[o("li",[e._v("When using the Mysql type, the error information generated when importing will be inserted into the specified MySQL library table, and then the error information can be viewed directly through the show load warnings statement.")])]),e._v(" "),o("p",[e._v("Hub of Mysql type needs to specify the following parameters:\nhost: mysql host\nport: mysql port\nuser: mysql user\npassword: mysql password\ndatabase mysql database\ntable: mysql table")]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("When the Broker type is used, the error information generated when importing will form a file and be written to the designated remote storage system through the broker. Make sure that the corresponding broker is deployed\nHub of Broker type needs to specify the following parameters:\nBroker: Name of broker\nPath: Remote Storage Path\nOther properties: Other information necessary to access remote storage, such as authentication information.")])])]),e._v(" "),o("li",[o("p",[e._v("Modify BE node attributes currently supports the following attributes:")]),e._v(" "),o("ol",[o("li",[e._v("tag.location：Resource tag")]),e._v(" "),o("li",[e._v("disable_query: Query disabled attribute")]),e._v(" "),o("li",[e._v("disable_load: Load disabled attribute")])])])]),e._v(" "),o("h2",{attrs:{id:"example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),o("ol",[o("li",[o("p",[e._v('Add a node\nALTER SYSTEM ADD BACKEND "host:port";')])]),e._v(" "),o("li",[o("p",[e._v('Adding an idle node\nALTER SYSTEM ADD FREE BACKEND "host:port";')])]),e._v(" "),o("li",[o("p",[e._v('Delete two nodes\nALTER SYSTEM DROP BACKEND "host1:port", "host2:port";')])]),e._v(" "),o("li",[o("p",[e._v('offline two nodes\nALTER SYSTEM DECOMMISSION BACKEND "host1:port", "host2:port";')])]),e._v(" "),o("li",[o("p",[e._v('Add two Hdfs Broker\nALTER SYSTEM ADD BROKER hdfs "host1:port", "host2:port";')])]),e._v(" "),o("li",[o("p",[e._v('Add a load error hub of Mysql type\nALTER SYSTEM SET LOAD ERRORS HUB PROPERTIES\n("type"= "mysql",\n"host" = "192.168.1.17"\n"port" = "3306",\n"User" = "my" name,\n"password" = "my_passwd",\n"database" = "doris_load",\n"table" = "load_errors"\n);')])]),e._v(" "),o("li",[o("p",[e._v('添加一个 Broker 类型的 load error hub\nALTER SYSTEM SET LOAD ERRORS HUB PROPERTIES\n("type"= "broker",\n"Name" = BOS,\n"path" = "bos://backup-cmy/logs",\n"bos_endpoint" ="http://gz.bcebos.com",\n"bos_accesskey" = "069fc278xxxxxx24ddb522",\n"bos_secret_accesskey"="700adb0c6xxxxxx74d59eaa980a"\n);')])]),e._v(" "),o("li",[o("p",[e._v('Delete the current load error hub\nALTER SYSTEM SET LOAD ERRORS HUB PROPERTIES\n("type"= "null");')])]),e._v(" "),o("li",[o("p",[e._v("Modify BE resource tag")])])]),e._v(" "),o("p",[e._v('ALTER SYSTEM MODIFY BACKEND "host1:9050" SET ("tag.location" = "group_a");')]),e._v(" "),o("ol",{attrs:{start:"10"}},[o("li",[e._v("Modify the query disabled attribute of BE")])]),e._v(" "),o("p",[e._v('ALTER SYSTEM MODIFY BACKEND "host1:9050" SET ("disable_query" = "true");')]),e._v(" "),o("ol",{attrs:{start:"11"}},[o("li",[e._v("Modify the load disabled attribute of BE")])]),e._v(" "),o("p",[e._v('ALTER SYSTEM MODIFY BACKEND "host1:9050" SET ("disable_load" = "true");')]),e._v(" "),o("h2",{attrs:{id:"keyword"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),o("p",[e._v("AGE,SYSTEM,BACKGROUND,BROKER,FREE")])])}),[],!1,null,null,null);t.default=a.exports}}]);