(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{548:function(e,t,a){"use strict";a.r(t);var o=a(55),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"stream-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[e._v("#")]),e._v(" Stream load")]),e._v(" "),a("p",[e._v("Stream load is a synchronous way of importing. Users import local files or data streams into Doris by sending HTTP protocol requests. Stream load synchronously executes the import and returns the import result. Users can directly determine whether the import is successful by the return body of the request.")]),e._v(" "),a("p",[e._v("Stream load is mainly suitable for importing local files or data from data streams through procedures.")]),e._v(" "),a("h2",{attrs:{id:"basic-principles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-principles"}},[e._v("#")]),e._v(" Basic Principles")]),e._v(" "),a("p",[e._v("The following figure shows the main flow of Stream load, omitting some import details.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                         ^      +\n                         |      |\n                         |      | 1A. User submit load to FE\n                         |      |\n                         |   +--v-----------+\n                         |   | FE           |\n5. Return result to user |   +--+-----------+\n                         |      |\n                         |      | 2. Redirect to BE\n                         |      |\n                         |   +--v-----------+\n                         +---+Coordinator BE| 1B. User submit load to BE\n                             +-+-----+----+-+\n                               |     |    |\n                         +-----+     |    +-----+\n                         |           |          | 3. Distrbute data\n                         |           |          |\n                       +-v-+       +-v-+      +-v-+\n                       |BE |       |BE |      |BE |\n                       +---+       +---+      +---+\n")])])]),a("p",[e._v("In Stream load, Doris selects a node as the Coordinator node. This node is responsible for receiving data and distributing data to other data nodes.")]),e._v(" "),a("p",[e._v("Users submit import commands through HTTP protocol. If submitted to FE, FE forwards the request to a BE via the HTTP redirect instruction. Users can also submit import commands directly to a specified BE.")]),e._v(" "),a("p",[e._v("The final result of the import is returned to the user by Coordinator BE.")]),e._v(" "),a("h2",{attrs:{id:"support-data-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support-data-format"}},[e._v("#")]),e._v(" Support data format")]),e._v(" "),a("p",[e._v("Currently Stream Load supports two data formats: CSV (text) and JSON")]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic operations")]),e._v(" "),a("h3",{attrs:{id:"create-a-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-load"}},[e._v("#")]),e._v(" Create a Load")]),e._v(" "),a("p",[e._v("Stream load submits and transfers data through HTTP protocol. Here, the "),a("code",[e._v("curl")]),e._v(" command shows how to submit an import.")]),e._v(" "),a("p",[e._v("Users can also operate through other HTTP clients.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('curl --location-trusted -u user:passwd [-H ""...] -T data.file -XPUT http://fe_host:http_port/api/{db}/{table}/_stream_load\n\nThe properties supported in the header are described in "Load Parameters" below\nThe format is: - H "key1: value1"\n')])])]),a("p",[e._v("Examples:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('curl --location-trusted -u root -T date -H "label:123" http://abc.com:8030/api/test/date/_stream_load\n')])])]),a("p",[e._v("The detailed syntax for creating imports helps to execute "),a("code",[e._v("HELP STREAM LOAD")]),e._v(" view. The following section focuses on the significance of creating some parameters of Stream load.")]),e._v(" "),a("h4",{attrs:{id:"signature-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature-parameters"}},[e._v("#")]),e._v(" Signature parameters")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("user/passwd")]),e._v(" "),a("p",[e._v("Stream load uses the HTTP protocol to create the imported protocol and signs it through the Basic Access authentication. The Doris system verifies user identity and import permissions based on signatures.")])])]),e._v(" "),a("h4",{attrs:{id:"load-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-parameters"}},[e._v("#")]),e._v(" Load Parameters")]),e._v(" "),a("p",[e._v("Stream load uses HTTP protocol, so all parameters related to import tasks are set in the header. The significance of some parameters of the import task parameters of Stream load is mainly introduced below.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("label")]),e._v(" "),a("p",[e._v("Identity of import task. Each import task has a unique label inside a single database. Label is a user-defined name in the import command. With this label, users can view the execution of the corresponding import task.")]),e._v(" "),a("p",[e._v("Another function of label is to prevent users from importing the same data repeatedly. "),a("strong",[e._v("It is strongly recommended that users use the same label for the same batch of data. This way, repeated requests for the same batch of data will only be accepted once, guaranteeing at-Most-Once")])]),e._v(" "),a("p",[e._v("When the corresponding import operation state of label is CANCELLED, the label can be used again.")])]),e._v(" "),a("li",[a("p",[e._v("column_separator")]),e._v(" "),a("p",[e._v("Used to specify the column separator in the load file. The default is "),a("code",[e._v("\\t")]),e._v(". If it is an invisible character, you need to add "),a("code",[e._v("\\x")]),e._v(" as a prefix and hexadecimal to indicate the separator.")]),e._v(" "),a("p",[e._v("For example, the separator "),a("code",[e._v("\\x01")]),e._v(" of the hive file needs to be specified as "),a("code",[e._v('-H "column_separator:\\x01"')]),e._v(".")]),e._v(" "),a("p",[e._v("You can use a combination of multiple characters as the column separator.")])]),e._v(" "),a("li",[a("p",[e._v("line_delimiter")]),e._v(" "),a("p",[e._v("Used to specify the line delimiter in the load file. The default is "),a("code",[e._v("\\n")]),e._v(".")]),e._v(" "),a("p",[e._v("You can use a combination of multiple characters as the column separator.")])]),e._v(" "),a("li",[a("p",[e._v("max_filter_ratio")]),e._v(" "),a("p",[e._v("The maximum tolerance rate of the import task is 0 by default, and the range of values is 0-1. When the import error rate exceeds this value, the import fails.")]),e._v(" "),a("p",[e._v("If the user wishes to ignore the wrong row, the import can be successful by setting this parameter greater than 0.")]),e._v(" "),a("p",[e._v("The calculation formula is as follows:")]),e._v(" "),a("p",[a("code",[e._v("(dpp.abnorm.ALL / (dpp.abnorm.ALL + dpp.norm.ALL ) ) > max_filter_ratio")])]),e._v(" "),a("p",[a("code",[e._v("dpp.abnorm.ALL")]),e._v(" denotes the number of rows whose data quality is not up to standard. Such as type mismatch, column mismatch, length mismatch and so on.")]),e._v(" "),a("p",[a("code",[e._v("dpp.norm.ALL")]),e._v(" refers to the number of correct data in the import process. The correct amount of data for the import task can be queried by the ``SHOW LOAD` command.")])])]),e._v(" "),a("p",[e._v("The number of rows in the original file = "),a("code",[e._v("dpp.abnorm.ALL + dpp.norm.ALL")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("where")]),e._v(" "),a("p",[e._v("Import the filter conditions specified by the task. Stream load supports filtering of where statements specified for raw data. The filtered data will not be imported or participated in the calculation of filter ratio, but will be counted as "),a("code",[e._v("num_rows_unselected")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("partition")]),e._v(" "),a("p",[e._v("Partition information for tables to be imported will not be imported if the data to be imported does not belong to the specified Partition. These data will be included in "),a("code",[e._v("dpp.abnorm.ALL")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("columns")]),e._v(" "),a("p",[e._v("The function transformation configuration of data to be imported includes the sequence change of columns and the expression transformation, in which the expression transformation method is consistent with the query statement.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Examples of column order transformation: There are three columns of original data (src_c1,src_c2,src_c3), and there are also three columns （dst_c1,dst_c2,dst_c3) in the doris table at present. \nwhen the first column src_c1 of the original file corresponds to the dst_c1 column of the target table, while the second column src_c2 of the original file corresponds to the dst_c2 column of the target table and the third column src_c3 of the original file corresponds to the dst_c3 column of the target table,which is written as follows:\ncolumns: dst_c1, dst_c2, dst_c3\n\nwhen the first column src_c1 of the original file corresponds to the dst_c2 column of the target table, while the second column src_c2 of the original file corresponds to the dst_c3 column of the target table and the third column src_c3 of the original file corresponds to the dst_c1 column of the target table,which is written as follows:\ncolumns: dst_c2, dst_c3, dst_c1\n\nExample of expression transformation: There are two columns in the original file and two columns in the target table (c1, c2). However, both columns in the original file need to be transformed by functions to correspond to the two columns in the target table.\ncolumns: tmp_c1, tmp_c2, c1 = year(tmp_c1), c2 = mouth(tmp_c2)\nTmp_* is a placeholder, representing two original columns in the original file.\n")])])])]),e._v(" "),a("li",[a("p",[e._v("exec_mem_limit")]),e._v(" "),a("p",[e._v("Memory limit. Default is 2GB. Unit is Bytes")])]),e._v(" "),a("li",[a("p",[e._v("merge_type\nThe type of data merging supports three types: APPEND, DELETE, and MERGE. APPEND is the default value, which means that all this batch of data needs to be appended to the existing data. DELETE means to delete all rows with the same key as this batch of data. MERGE semantics Need to be used in conjunction with the delete condition, which means that the data that meets the delete condition is processed according to DELETE semantics and the rest is processed according to APPEND semantics")])])]),e._v(" "),a("h3",{attrs:{id:"return-results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-results"}},[e._v("#")]),e._v(" Return results")]),e._v(" "),a("p",[e._v("Since Stream load is a synchronous import method, the result of the import is directly returned to the user by creating the return value of the import.")]),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "TxnId": 1003,\n    "Label": "b6f3bc78-0d2c-45d9-9e4c-faa0a0149bee",\n    "Status": "Success",\n    "ExistingJobStatus": "FINISHED", // optional\n    "Message": "OK",\n    "NumberTotalRows": 1000000,\n    "NumberLoadedRows": 1000000,\n    "NumberFilteredRows": 1,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 40888898,\n    "LoadTimeMs": 2144,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 2,\n    "ReadDataTimeMs": 325,\n    "WriteDataTimeMs": 1933,\n    "CommitAndPublishTimeMs": 106,\n    "ErrorURL": "http://192.168.1.1:8042/api/_load_error_log?file=__shard_0/error_log_insert_stmt_db18266d4d9b4ee5-abb00ddd64bdf005_db18266d4d9b4ee5_abb00ddd64bdf005"\n}\n')])])]),a("p",[e._v("The following main explanations are given for the Stream load import result parameters:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("TxnId: The imported transaction ID. Users do not perceive.")])]),e._v(" "),a("li",[a("p",[e._v("Label: Import Label. User specified or automatically generated by the system.")])]),e._v(" "),a("li",[a("p",[e._v("Status: Import completion status.")]),e._v(" "),a("p",[e._v('"Success": Indicates successful import.')]),e._v(" "),a("p",[e._v('"Publish Timeout": This state also indicates that the import has been completed, except that the data may be delayed and visible without retrying.')]),e._v(" "),a("p",[e._v('"Label Already Exists": Label duplicate, need to be replaced Label.')]),e._v(" "),a("p",[e._v('"Fail": Import failed.')])]),e._v(" "),a("li",[a("p",[e._v("ExistingJobStatus: The state of the load job corresponding to the existing Label.")]),e._v(" "),a("p",[e._v('This field is displayed only when the status is "Label Already Exists". The user can know the status of the load job corresponding to Label through this state. "RUNNING" means that the job is still executing, and "FINISHED" means that the job is successful.')])]),e._v(" "),a("li",[a("p",[e._v("Message: Import error messages.")])]),e._v(" "),a("li",[a("p",[e._v("NumberTotalRows: Number of rows imported for total processing.")])]),e._v(" "),a("li",[a("p",[e._v("NumberLoadedRows: Number of rows successfully imported.")])]),e._v(" "),a("li",[a("p",[e._v("NumberFilteredRows: Number of rows that do not qualify for data quality.")])]),e._v(" "),a("li",[a("p",[e._v("NumberUnselectedRows: Number of rows filtered by where condition.")])]),e._v(" "),a("li",[a("p",[e._v("LoadBytes: Number of bytes imported.")])]),e._v(" "),a("li",[a("p",[e._v("LoadTimeMs: Import completion time. Unit milliseconds.")])]),e._v(" "),a("li",[a("p",[e._v("BeginTxnTimeMs: The time cost for RPC to Fe to begin a transaction, Unit milliseconds.")])]),e._v(" "),a("li",[a("p",[e._v("StreamLoadPutTimeMs: The time cost for RPC to Fe to get a stream load plan, Unit milliseconds.")])]),e._v(" "),a("li",[a("p",[e._v("ReadDataTimeMs: Read data time, Unit milliseconds.")])]),e._v(" "),a("li",[a("p",[e._v("WriteDataTimeMs: Write data time, Unit milliseconds.")])]),e._v(" "),a("li",[a("p",[e._v("CommitAndPublishTimeMs: The time cost for RPC to Fe to commit and publish a transaction, Unit milliseconds.")])]),e._v(" "),a("li",[a("p",[e._v("ErrorURL: If you have data quality problems, visit this URL to see specific error lines.")])])]),e._v(" "),a("blockquote",[a("p",[e._v("Note: Since Stream load is a synchronous import mode, import information will not be recorded in Doris system. Users cannot see Stream load asynchronously by looking at import commands. You need to listen for the return value of the create import request to get the import result.")])]),e._v(" "),a("h3",{attrs:{id:"cancel-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancel-load"}},[e._v("#")]),e._v(" Cancel Load")]),e._v(" "),a("p",[e._v("Users can't cancel Stream load manually. Stream load will be cancelled automatically by the system after a timeout or import error.")]),e._v(" "),a("h2",{attrs:{id:"relevant-system-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relevant-system-configuration"}},[e._v("#")]),e._v(" Relevant System Configuration")]),e._v(" "),a("h3",{attrs:{id:"fe-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe-configuration"}},[e._v("#")]),e._v(" FE configuration")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("stream_load_default_timeout_second")]),e._v(" "),a("p",[e._v("The timeout time of the import task (in seconds) will be cancelled by the system if the import task is not completed within the set timeout time, and will become CANCELLED.")]),e._v(" "),a("p",[e._v("At present, Stream load does not support custom import timeout time. All Stream load import timeout time is uniform. The default timeout time is 300 seconds. If the imported source file can no longer complete the import within the specified time, the FE parameter "),a("code",[e._v("stream_load_default_timeout_second")]),e._v(" needs to be adjusted.")])])]),e._v(" "),a("h3",{attrs:{id:"be-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#be-configuration"}},[e._v("#")]),e._v(" BE configuration")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("streaming_load_max_mb")]),e._v(" "),a("p",[e._v("The maximum import size of Stream load is 10G by default, in MB. If the user's original file exceeds this value, the BE parameter "),a("code",[e._v("streaming_load_max_mb")]),e._v(" needs to be adjusted.")])])]),e._v(" "),a("h2",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),a("h3",{attrs:{id:"application-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-scenarios"}},[e._v("#")]),e._v(" Application scenarios")]),e._v(" "),a("p",[e._v("The most appropriate scenario for using Stream load is that the original file is in memory or on disk. Secondly, since Stream load is a synchronous import method, users can also use this import if they want to obtain the import results in a synchronous manner.")]),e._v(" "),a("h3",{attrs:{id:"data-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-volume"}},[e._v("#")]),e._v(" Data volume")]),e._v(" "),a("p",[e._v("Since Stream load is based on the BE initiative to import and distribute data, the recommended amount of imported data is between 1G and 10G. Since the default maximum Stream load import data volume is 10G, the configuration of BE "),a("code",[e._v("streaming_load_max_mb")]),e._v(" needs to be modified if files exceeding 10G are to be imported.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("For example, the size of the file to be imported is 15G\nModify the BE configuration streaming_load_max_mb to 16000\n")])])]),a("p",[e._v("Stream load default timeout is 300 seconds, according to Doris currently the largest import speed limit, about more than 3G files need to modify the import task default timeout.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Import Task Timeout = Import Data Volume / 10M / s (Specific Average Import Speed Requires Users to Calculate Based on Their Cluster Conditions)\nFor example, import a 10G file\nTimeout = 1000s -31561;. 20110G / 10M /s\n")])])]),a("h3",{attrs:{id:"complete-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#complete-examples"}},[e._v("#")]),e._v(" Complete examples")]),e._v(" "),a("p",[e._v("Data situation: In the local disk path / home / store_sales of the sending and importing requester, the imported data is about 15G, and it is hoped to be imported into the table store_sales of the database bj_sales.")]),e._v(" "),a("p",[e._v("Cluster situation: The concurrency of Stream load is not affected by cluster size.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Step 1: Does the import file size exceed the default maximum import size of 10G")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("BE conf\nstreaming_load_max_mb = 16000\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Step 2: Calculate whether the approximate import time exceeds the default timeout value")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Import time 15000/10 = 1500s\nOver the default timeout time, you need to modify the FE configuration\nstream_load_default_timeout_second = 1500\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Step 3: Create Import Tasks")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('curl --location-trusted -u user:password -T /home/store_sales -H "label:abc" http://abc.com:8000/api/bj_sales/store_sales/_stream_load\n')])])])])]),e._v(" "),a("h2",{attrs:{id:"common-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-questions"}},[e._v("#")]),e._v(" Common Questions")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Label Already Exists")]),e._v(" "),a("p",[e._v("The Label repeat checking steps of Stream load are as follows:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Is there an import Label conflict that already exists with other import methods?")]),e._v(" "),a("p",[e._v("Because imported Label in Doris system does not distinguish between import methods, there is a problem that other import methods use the same Label.")]),e._v(" "),a("p",[e._v("Through "),a("code",[e._v('SHOW LOAD WHERE LABEL = "xxx"\'')]),e._v(", where XXX is a duplicate Label string, see if there is already a Label imported by FINISHED that is the same as the Label created by the user.")])]),e._v(" "),a("li",[a("p",[e._v("Are Stream loads submitted repeatedly for the same job?")]),e._v(" "),a("p",[e._v("Since Stream load is an HTTP protocol submission creation import task, HTTP Clients in various languages usually have their own request retry logic. After receiving the first request, the Doris system has started to operate Stream load, but because the result is not returned to the Client side in time, the Client side will retry to create the request. At this point, the Doris system is already operating on the first request, so the second request will be reported to Label Already Exists.")]),e._v(" "),a("p",[e._v("To sort out the possible methods mentioned above: Search FE Master's log with Label to see if there are two "),a("code",[e._v("redirect load action to destination =")]),e._v("redirect load action to destination cases in the same Label. If so, the request is submitted repeatedly by the Client side.")]),e._v(" "),a("p",[e._v("It is recommended that the user calculate the approximate import time based on the amount of data currently requested, and change the request overtime on the client side to a value greater than the import timeout time according to the import timeout time to avoid multiple submissions of the request by the client side.")])]),e._v(" "),a("li",[a("p",[e._v("Connection reset abnormal")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("In the community version 0.14.0 and earlier versions, the connection reset exception occurred after Http V2 was enabled, because the built-in web container is tomcat, and Tomcat has pits in 307 (Temporary Redirect). There is a problem with the implementation of this protocol. All In the case of using Stream load to import a large amount of data, a connect reset exception will occur. This is because tomcat started data transmission before the 307 jump, which resulted in the lack of authentication information when the BE received the data request. Later, changing the built-in container to Jetty solved this problem. If you encounter this problem, please upgrade your Doris or disable Http V2 (`enable_http_server_v2=false`).\n\nAfter the upgrade, also upgrade the http client version of your program to `4.5.13`，Introduce the following dependencies in your pom.xml file\n\n```xml\n    <dependency>\n      <groupId>org.apache.httpcomponents</groupId>\n      <artifactId>httpclient</artifactId>\n      <version>4.5.13</version>\n    </dependency>\n```\n")])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);