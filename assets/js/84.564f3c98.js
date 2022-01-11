(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{538:function(e,t,a){"use strict";a.r(t);var n=a(55),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"binlog-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binlog-load"}},[e._v("#")]),e._v(" Binlog Load")]),e._v(" "),a("p",[e._v("The Binlog Load feature enables Doris to incrementally synchronize update operations in MySQL, so as to CDC(Change Data Capture) of data on Mysql.")]),e._v(" "),a("h2",{attrs:{id:"scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenarios"}},[e._v("#")]),e._v(" Scenarios")]),e._v(" "),a("ul",[a("li",[e._v("Support insert / update / delete operations")]),e._v(" "),a("li",[e._v("Filter query")]),e._v(" "),a("li",[e._v("Temporarily incompatible with DDL statements")])]),e._v(" "),a("h2",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("ul",[a("li",[e._v("FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access.")]),e._v(" "),a("li",[e._v("BE: Backend, the backend node of Doris. Responsible for query execution and data storage.")]),e._v(" "),a("li",[e._v("Canal: Alibaba's open source MySQL binlog parsing tool. Support incremental data subscription & consumption.")]),e._v(" "),a("li",[e._v("Batch: A batch of data sent by canal to the client with a globally unique self-incrementing ID.")]),e._v(" "),a("li",[e._v("SyncJob: A data synchronization job submitted by the user.")]),e._v(" "),a("li",[e._v("Receiver: Responsible for subscribing to and receiving data from canal.")]),e._v(" "),a("li",[e._v("Consumer: Responsible for distributing the data received by the Receiver to each channel.")]),e._v(" "),a("li",[e._v("Channel: The channel that receives the data distributed by Consumer, it creates tasks for sending data, and controls the begining, committing and aborting of transaction in one table.")]),e._v(" "),a("li",[e._v("Task: Task created by channel, sends data to Be when executing.")])]),e._v(" "),a("h2",{attrs:{id:"principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),a("p",[e._v("In the design of phase one, Binlog Load needs to rely on canal as an intermediate medium, so that canal can be pretended to be a slave node to get and parse the binlog on the MySQL master node, and then Doris can get the parsed data on the canal. This process mainly involves mysql, canal and Doris. The overall data flow is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+---------------------------------------------+\n|                    Mysql                    |\n+----------------------+----------------------+\n                       | Binlog\n+----------------------v----------------------+\n|                 Canal Server                |\n+-------------------+-----^-------------------+\n               Get  |     |  Ack\n+-------------------|-----|-------------------+\n| FE                |     |                   |\n| +-----------------|-----|----------------+  |\n| | Sync Job        |     |                |  |\n| |    +------------v-----+-----------+    |  |\n| |    | Canal Client                 |    |  |\n| |    |   +-----------------------+  |    |  |\n| |    |   |       Receiver        |  |    |  |\n| |    |   +-----------------------+  |    |  |\n| |    |   +-----------------------+  |    |  |\n| |    |   |       Consumer        |  |    |  |\n| |    |   +-----------------------+  |    |  |\n| |    +------------------------------+    |  |\n| +----+---------------+--------------+----+  |\n|      |               |              |       |\n| +----v-----+   +-----v----+   +-----v----+  |\n| | Channel1 |   | Channel2 |   | Channel3 |  |\n| | [Table1] |   | [Table2] |   | [Table3] |  |\n| +----+-----+   +-----+----+   +-----+----+  |\n|      |               |              |       |\n|   +--|-------+   +---|------+   +---|------+|\n|  +---v------+|  +----v-----+|  +----v-----+||\n| +----------+|+ +----------+|+ +----------+|+|\n| |   Task   |+  |   Task   |+  |   Task   |+ |\n| +----------+   +----------+   +----------+  |\n+----------------------+----------------------+\n     |                 |                  |\n+----v-----------------v------------------v---+\n|                 Coordinator                 |\n|                     BE                      |\n+----+-----------------+------------------+---+\n     |                 |                  |\n+----v---+         +---v----+        +----v---+\n|   BE   |         |   BE   |        |   BE   |\n+--------+         +--------+        +--------+\n\n")])])]),a("p",[e._v("As shown in the figure above, the user first submits a SyncJob to the Fe.")]),e._v(" "),a("p",[e._v("Then, Fe will start a Canal Client for each SyncJob to subscribe to and get data from the Canal Server.")]),e._v(" "),a("p",[e._v("The Receiver in the Canal Client will receives data by the GET request. Every time a Batch is received, it will be distributed by the Consumer to different Channels according to the corresponding target table. Once a channel received data distributed by Consumer, it will submit a send task for sending data.")]),e._v(" "),a("p",[e._v("A Send task is a request from Channel to Be, which contains the data of the same Batch distributed to the current channel.")]),e._v(" "),a("p",[e._v("Channel controls the begin, commit and abort of transaction of single table. In a transaction, the consumer may distribute multiple Batches of data to a channel, so multiple send tasks may be generated. These tasks will not actually take effect until the transaction is committed successfully.")]),e._v(" "),a("p",[e._v("When certain conditions are met (for example, a certain period of time was passed, reach the maximun data size of commit), the Consumer will block and notify each channel to try commit the transaction.")]),e._v(" "),a("p",[e._v("If and only if all channels are committed successfully, Canal Server will be notified by the ACK request and Canal Client continue to get and consume data.")]),e._v(" "),a("p",[e._v("If there are any Channel fails to commit, it will retrieve data from the location where the last consumption was successful and commit again (the Channel that has successfully commited before will not commmit again to ensure the idempotency of commit).")]),e._v(" "),a("p",[e._v("In the whole cycle of a SyncJob, Canal Client continuously received data from Canal Server and send it to Be through the above process to complete data synchronization.")]),e._v(" "),a("h2",{attrs:{id:"configure-mysql-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-mysql-server"}},[e._v("#")]),e._v(" Configure MySQL Server")]),e._v(" "),a("p",[e._v("In the master-slave synchronization of MySQL Cluster mode, the binary log file (binlog) records all data changes on the master node. Data synchronization and backup among multiple nodes of the cluster should be carried out through binlog logs, so as to improve the availability of the cluster.")]),e._v(" "),a("p",[e._v("The architecture of master-slave synchronization is usually composed of a master node (responsible for writing) and one or more slave nodes (responsible for reading). All data changes on the master node will be copied to the slave node.")]),e._v(" "),a("p",[a("strong",[e._v("Note that: Currently, you must use MySQL version 5.7 or above to support Binlog Load")])]),e._v(" "),a("p",[e._v("To enable the binlog of MySQL, you need to edit the my.cnf file and set it like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[mysqld]\nlog-bin = mysql-bin # 开启 binlog\nbinlog-format=ROW # 选择 ROW 模式\n")])])]),a("h3",{attrs:{id:"principle-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principle-description"}},[e._v("#")]),e._v(" Principle Description")]),e._v(" "),a("p",[e._v("On MySQL, the binlog files usually name as mysql-bin.000001, mysql-bin.000002... And MySQL will automatically segment the binlog file when certain conditions are met:")]),e._v(" "),a("ol",[a("li",[e._v("MySQL is restarted")]),e._v(" "),a("li",[e._v("The user enters the "),a("code",[e._v("flush logs")]),e._v(" command")]),e._v(" "),a("li",[e._v("The binlog file size exceeds 1G")])]),e._v(" "),a("p",[e._v("To locate the latest consumption location of binlog, the binlog file name and position (offset) must be needed.")]),e._v(" "),a("p",[e._v("For instance, the binlog location of the current consumption so far will be saved on each slave node to prepare for disconnection, reconnection and continued consumption at any time.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("---------------------                                ---------------------\n|       Slave       |              read              |      Master       |\n| FileName/Position | <<<--------------------------- |    Binlog Files   |\n---------------------                                ---------------------\n")])])]),a("p",[e._v("For the master node, it is only responsible for writing to the binlog. Multiple slave nodes can be connected to a master node at the same time to consume different parts of the binlog log without affecting each other.")]),e._v(" "),a("p",[e._v("Binlog log supports two main formats (in addition to mixed based mode):")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Statement-based format:")]),e._v(" "),a("p",[e._v("Binlog only records the SQL statements executed on the master node, and the slave node copies them to the local node for re-execution.")])]),e._v(" "),a("li",[a("p",[e._v("Row-based format:")]),e._v(" "),a("p",[e._v("Binlog will record the data change information of each row and all columns of the master node, and the slave node will copy and execute the change of each row to the local node.")])])]),e._v(" "),a("p",[e._v("The first format only writes the executed SQL statements. Although the log volume will be small, it has the following disadvantages:")]),e._v(" "),a("ol",[a("li",[e._v("The actual data of each row is not recorded")]),e._v(" "),a("li",[e._v("The UDF, random and time functions executed on the master node will have inconsistent results on the slave node")]),e._v(" "),a("li",[e._v("The execution order of limit statements may be inconsistent")])]),e._v(" "),a("p",[e._v("Therefore, we need to choose the second format which parses each row of data from the binlog log.")]),e._v(" "),a("p",[e._v("In the row-based format, binlog will record the timestamp, server ID, offset and other information of each binlog event. For instance, the following transaction with two insert statements:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("begin;\ninsert into canal_test.test_tbl values (3, 300);\ninsert into canal_test.test_tbl values (4, 400);\ncommit;\n")])])]),a("p",[e._v("There will be four binlog events, including one begin event, two insert events and one commit event:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SET TIMESTAMP=1538238301/*!*/; \nBEGIN\n/*!*/.\n# at 211935643\n# at 211935698\n#180930 0:25:01 server id 1 end_log_pos 211935698 Table_map: 'canal_test'.'test_tbl' mapped to number 25 \n#180930 0:25:01 server id 1 end_log_pos 211935744 Write_rows: table-id 25 flags: STMT_END_F\n...\n'/*!*/;\n### INSERT INTO canal_test.test_tbl\n### SET\n### @1=1\n### @2=100\n# at 211935744\n#180930 0:25:01 server id 1 end_log_pos 211935771 Xid = 2681726641\n...\n'/*!*/;\n### INSERT INTO canal_test.test_tbl\n### SET\n### @1=2\n### @2=200\n# at 211935771\n#180930 0:25:01 server id 1 end_log_pos 211939510 Xid = 2681726641 \nCOMMIT/*!*/;\n")])])]),a("p",[e._v("As shown above, each insert event contains modified data. During delete/update, an event can also contain multiple rows of data, making the binlog more compact.")]),e._v(" "),a("h3",{attrs:{id:"open-gtid-mode-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-gtid-mode-optional"}},[e._v("#")]),e._v(" Open GTID mode (Optional)")]),e._v(" "),a("p",[e._v("A global transaction ID (global transaction identifier) identifies a transaction that has been committed on the master node, which is unique and valid in global. After binlog is enabled, the gtid will be written to the binlog file.")]),e._v(" "),a("p",[e._v("To open the gtid mode of MySQL, you need to edit the my.cnf configuration file and set it like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gtid-mode=on // Open gtid mode\nenforce-gtid-consistency=1 // Enforce consistency between gtid and transaction\n")])])]),a("p",[e._v("In gtid mode, the master server can easily track transactions, recover data and replicas without binlog file name and offset.")]),e._v(" "),a("p",[e._v("In gtid mode, due to the global validity of gtid, the slave node will no longer need to locate the binlog location on the master node by saving the file name and offset, but can be located by the data itself. During SyncJob, the slave node will skip the execution of any gtid transaction already executed before.")]),e._v(" "),a("p",[e._v("Gtid is expressed as a pair of coordinates, "),a("code",[e._v("source_ID")]),e._v(" identifies the master node, "),a("code",[e._v("transaction_ID")]),e._v(" indicates the order in which this transaction is executed on the master node (max 2"),a("sup",[e._v("63")]),e._v("-1).")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GTID = source_id:transaction_id\n")])])]),a("p",[e._v("For example, the gtid of the 23rd transaction executed on the same master node is:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("3E11FA47-71CA-11E1-9E33-C80AA9429562:23\n")])])]),a("h2",{attrs:{id:"configure-canal-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-canal-server"}},[e._v("#")]),e._v(" Configure Canal Server")]),e._v(" "),a("p",[e._v("Canal is a sub project of Alibaba Otter project. Its main purpose is to provide incremental data subscription and consumption based on MySQL database binlog analysis, which is originally used to solve the scenario of cross machine-room synchronization.")]),e._v(" "),a("p",[e._v("Canal version 1.1.5 and above is recommended. "),a("a",{attrs:{href:"https://github.com/alibaba/canal/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("download link"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("After downloading, please follow the steps below to complete the deployment.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Unzip the canal deployer")])]),e._v(" "),a("li",[a("p",[e._v("Create a new directory under the conf folder and rename it as the root directory of instance. The directory name is the destination mentioned later.")])]),e._v(" "),a("li",[a("p",[e._v("Modify the instance configuration file (you can copy from "),a("code",[e._v("conf/example/instance.properties")]),e._v(")")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vim conf/{your destination}/instance.properties\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("## canal instance serverId\ncanal.instance.mysql.slaveId = 1234\n## mysql adress\ncanal.instance.master.address = 127.0.0.1:3306 \n## mysql username/password\ncanal.instance.dbUsername = canal\ncanal.instance.dbPassword = canal\n")])])])]),e._v(" "),a("li",[a("p",[e._v("start up canal server")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sh bin/startup.sh\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Validation start up successfully")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat logs/{your destination}/{your destination}.log\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2013-02-05 22:50:45.636 [main] INFO  c.a.o.c.i.spring.support.PropertyPlaceholderConfigurer - Loading properties file from class path resource [canal.properties]\n2013-02-05 22:50:45.641 [main] INFO  c.a.o.c.i.spring.support.PropertyPlaceholderConfigurer - Loading properties file from class path resource [xxx/instance.properties]\n2013-02-05 22:50:45.803 [main] INFO  c.a.otter.canal.instance.spring.CanalInstanceWithSpring - start CannalInstance for 1-xxx \n2013-02-05 22:50:45.810 [main] INFO  c.a.otter.canal.instance.spring.CanalInstanceWithSpring - start successful....\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"principle-description-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principle-description-2"}},[e._v("#")]),e._v(" Principle Description")]),e._v(" "),a("p",[e._v("By faking its own MySQL dump protocol, canal disguises itself as a slave node, get and parses the binlog of the master node.")]),e._v(" "),a("p",[e._v("Multiple instances can be started on the canal server. An instance can be regarded as a slave node. Each instance consists of the following parts:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-------------------------------------------------\n|  Server                                       |\n|  -------------------------------------------- |\n|  |  Instance 1                              | |\n|  |  -----------   -----------  -----------  | |\n|  |  |  Parser |   |  Sink   |  | Store   |  | |\n|  |  -----------   -----------  -----------  | |\n|  |  -----------------------------------     | |\n|  |  |             MetaManager         |     | |\n|  |  -----------------------------------     | |\n|  -------------------------------------------- |\n-------------------------------------------------\n")])])]),a("ul",[a("li",[e._v("Parser: Access the data source, simulate the dump protocol, interact with the master, and analyze the protocol")]),e._v(" "),a("li",[e._v("Sink: Linker between parser and store, for data filtering, processing and distribution")]),e._v(" "),a("li",[e._v("Store: Data store")]),e._v(" "),a("li",[e._v("Meta Manager: Metadata management module")])]),e._v(" "),a("p",[e._v("Each instance has its own unique ID in the cluster, that is, server ID.")]),e._v(" "),a("p",[e._v("In the canal server, the instance is identified by a unique string named destination. The canal client needs destination to connect to the corresponding instance.")]),e._v(" "),a("p",[a("strong",[e._v("Note that: canal client and canal instance should correspond to each other one by one")])]),e._v(" "),a("p",[e._v("Binlog load has forbidded multiple SyncJobs to connect to the same destination.")]),e._v(" "),a("p",[e._v("The data flow direction in instance is binlog -> Parser -> sink -> store.")]),e._v(" "),a("p",[e._v("Instance parses binlog logs through the parser module, and the parsed data is cached in the store. When the user submits a SyncJob to Fe, it will start a Canal Client to subscripe and get the data in the store in the corresponding instance.")]),e._v(" "),a("p",[e._v("The store is actually a ring queue. Users can configure its length and storage space by themselves.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/canal_store.png"),alt:"store"}}),e._v(" "),a("p",[e._v("Store manages the data in the queue through three pointers:")]),e._v(" "),a("ol",[a("li",[e._v("Get pointer: the GET pointer points to the last location get by the Canal Client.")]),e._v(" "),a("li",[e._v("Ack pointer: the ACK pointer points to the location of the last successful consumption.")]),e._v(" "),a("li",[e._v("Put pointer: the PUT pointer points to the location where the sink module successfully wrote to the store at last.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("canal client asynchronously get data in the store\n\n       get 0        get 1       get 2                    put\n         |            |           |         ......        |\n         v            v           v                       v\n--------------------------------------------------------------------- store ring queue\n         ^            ^\n         |            |\n       ack 0        ack 1\n")])])]),a("p",[e._v("When the Canal Client calls the Get command, the Canal Server will generate data batches and send them to the Canal Client, and move the Get pointer to the right. The Canal Client can get multiple batches until the Get pointer catches up with the Put pointer.")]),e._v(" "),a("p",[e._v("When the consumption of data is successful, the Canal Client will return Ack + Batch ID, notify that the consumption has been successful, and move the Ack pointer to the right. The store will delete the data of this batch from the ring queue, make room to get data from the upstream sink module, and then move the Put pointer to the right.")]),e._v(" "),a("p",[e._v("When the data consumption fails, the client will return a rollback notification of the consumption failure, and the store will reset the Get pointer to the left to the Ack pointer's position, so that the next data get by the Canal Client can start from the Ack pointer again.")]),e._v(" "),a("p",[e._v("Like the slave node in mysql, Canal Server also needs to save the latest consumption location of the client. All metadata in Canal Server (such as gtid and binlog location) is managed by the metamanager. At present, these metadata is persisted in the meta.dat file in the instance's root directory in JSON format by default.")]),e._v(" "),a("h2",{attrs:{id:"basic-operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operation"}},[e._v("#")]),e._v(" Basic Operation")]),e._v(" "),a("h3",{attrs:{id:"configure-target-table-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-target-table-properties"}},[e._v("#")]),e._v(" Configure Target Table Properties")]),e._v(" "),a("p",[e._v("User needs to first create the target table which is corresponding to the MySQL side.")]),e._v(" "),a("p",[e._v("Binlog Load can only support unique target tables from now, and the batch delete feature of the target table must be activated.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('-- create target table\nCREATE TABLE `test1` (\n  `a` int(11) NOT NULL COMMENT "",\n  `b` int(11) NOT NULL COMMENT ""\n) ENGINE=OLAP\nUNIQUE KEY(`a`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`a`) BUCKETS 8;\n\n-- enable batch delete\nALTER TABLE canal_test.test1 ENABLE FEATURE "BATCH_DELETE";\n')])])]),a("h3",{attrs:{id:"create-syncjob"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-syncjob"}},[e._v("#")]),e._v(" Create SyncJob")]),e._v(" "),a("p",[e._v("The detailed syntax of creating a SyncJob can be viewd in "),a("code",[e._v("help create sync job")]),e._v(" command. Here we mainly introduce the precautions when creating a SyncJob.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("job_name")]),e._v(" "),a("p",[a("code",[e._v("job_Name")]),e._v(" is the unique identifier of the SyncJob in the current database. With a specified job name, only one SyncJob can be running at the same time.")])]),e._v(" "),a("li",[a("p",[e._v("channel_desc")]),e._v(" "),a("p",[a("code",[e._v("column_Mapping")]),e._v(" mainly refers to the mapping relationship between the columns of the MySQL source table and the Doris target table.")]),e._v(" "),a("p",[e._v("If it is not specified, the columns of the source table and the target table will consider correspond one by one in order.")]),e._v(" "),a("p",[e._v("However, we still recommend explicitly specifying the mapping relationship of columns, so that when the schema-change of the target table (such as adding a nullable column), data synchronization can still be carried out.")]),e._v(" "),a("p",[e._v("Otherwise, when the schema-change occur, because the column mapping relationship is no longer one-to-one, the SyncJob will report an error.")])]),e._v(" "),a("li",[a("p",[e._v("binlog_desc")]),e._v(" "),a("p",[a("code",[e._v("binlog_desc")]),e._v(" defines some necessary information for docking the remote binlog address.")]),e._v(" "),a("p",[e._v("At present, the only supported docking type is the canal type. In canal type, all configuration items need to be prefixed with the canal prefix.")]),e._v(" "),a("ol",[a("li",[e._v("canal.server.ip: the address of the canal server")]),e._v(" "),a("li",[e._v("canal.server.port: the port of canal server")]),e._v(" "),a("li",[e._v("canal.destination: the identifier of the instance")]),e._v(" "),a("li",[e._v("canal.batchSize: the maximum batch size get from the canal server for each batch. Default 8192")]),e._v(" "),a("li",[e._v("canal.username: the username of instance")]),e._v(" "),a("li",[e._v("canal.password: the password of instance")]),e._v(" "),a("li",[e._v("canal.debug: when set to true, the details message of each batch and each row will be printed, which may affect the performance.")])])])]),e._v(" "),a("h3",{attrs:{id:"show-job-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-job-status"}},[e._v("#")]),e._v(" Show Job Status")]),e._v(" "),a("p",[e._v("Specific commands and examples for showing job status can be found in "),a("code",[e._v("help show sync job;")]),e._v(" command.")]),e._v(" "),a("p",[e._v("The parameters in the result set have the following meanings:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("State")]),e._v(" "),a("p",[e._v("The current stage of the job. The transition between job states is shown in the following figure:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                   +-------------+\n       create job  |  PENDING    |    resume job\n       +-----------+             <-------------+\n       |           +-------------+             |\n  +----v-------+                       +-------+----+\n  |  RUNNING   |     pause job         |  PAUSED    |\n  |            +-----------------------\x3e            |\n  +----+-------+     run error         +-------+----+\n       |           +-------------+             |\n       |           | CANCELLED   |             |\n       +-----------\x3e             <-------------+\n      stop job     +-------------+    stop job\n      system error\n")])])]),a("p",[e._v("After the SyncJob is submitted, the status is pending.")]),e._v(" "),a("p",[e._v("After the Fe scheduler starts the canal client, the status becomes running.")]),e._v(" "),a("p",[e._v("User can control the status of the job by three commands: "),a("code",[e._v("stop/pause/resume")]),e._v(". After the operation, the job status is "),a("code",[e._v("cancelled/paused/running")]),e._v(" respectively.")]),e._v(" "),a("p",[e._v("There is only one final stage of the job, Cancelled. When the job status changes to \bCanceled, it cannot be resumed again.")]),e._v(" "),a("p",[e._v("When an error occurs during SyncJob is running, if the error is unrecoverable, the status will change to cancelled, otherwise it will change to paused.")])]),e._v(" "),a("li",[a("p",[e._v("Channel")]),e._v(" "),a("p",[e._v("The mapping relationship between all source tables and target tables of the job.")])]),e._v(" "),a("li",[a("p",[e._v("Status")]),e._v(" "),a("p",[e._v("The latest consumption location of the current binlog (if the gtid mode is on, the gtid will be displayed), and the delay time of the Doris side compared with the MySQL side.")])]),e._v(" "),a("li",[a("p",[e._v("JobConfig")]),e._v(" "),a("p",[e._v("The remote server information of the docking, such as the address of the Canal Server and the destination of the connected instance.")])])]),e._v(" "),a("h3",{attrs:{id:"control-operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#control-operation"}},[e._v("#")]),e._v(" Control Operation")]),e._v(" "),a("p",[e._v("Users can control the status of jobs through "),a("code",[e._v("stop/pause/resume")]),e._v(" commands.")]),e._v(" "),a("p",[e._v("You can use "),a("code",[e._v("HELP STOP SYNC JOB;")]),e._v(", "),a("code",[e._v("HELP PAUSE SYNC JOB")]),e._v("; And "),a("code",[e._v("HELP RESUME SYNC JOB;")]),e._v(" commands to view help and examples.")]),e._v(" "),a("h2",{attrs:{id:"related-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-parameters"}},[e._v("#")]),e._v(" Related Parameters")]),e._v(" "),a("h3",{attrs:{id:"canal-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canal-configuration"}},[e._v("#")]),e._v(" Canal configuration")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("canal.ip")])]),e._v(" "),a("p",[e._v("canal server's ip address")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("canal.port")])]),e._v(" "),a("p",[e._v("canal server's port")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("canal.instance.memory.buffer.size")])]),e._v(" "),a("p",[e._v("The queue length of the store ring queue, must be set to the power of 2, the default length is 16384. This value is equal to the maximum number of events that can be cached on the canal side and directly determines the maximum number of events that can be accommodated in a transaction on the Doris side. It is recommended to make it large enough to prevent the upper limit of the amount of data that can be accommodated in a transaction on the Doris side from being too small, resulting in too frequent transaction submission and data version accumulation.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("canal.instance.memory.buffer.memunit")])]),e._v(" "),a("p",[e._v("The default space occupied by an event at the canal end, default value is 1024 bytes. This value multiplied by "),a("code",[e._v("canal.instance.memory.buffer.size")]),e._v(" is equal to the maximum space of the store. For example, if the queue length of the store is 16384, the space of the store is 16MB. However, the actual size of an event is not actually equal to this value, but is determined by the number of rows of data in the event and the length of each row of data. For example, the insert event of a table with only two columns is only 30 bytes, but the delete event may reach thousands of bytes. This is because the number of rows of delete event is usually more than that of insert event.")])])]),e._v(" "),a("h3",{attrs:{id:"fe-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe-configuration"}},[e._v("#")]),e._v(" Fe configuration")]),e._v(" "),a("p",[e._v("The following configuration belongs to the system level configuration of SyncJob. The configuration value can be modified in configuration file fe.conf.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("enable_create_sync_job")])]),e._v(" "),a("p",[e._v("Turn on the Binlog Load feature. The default value is false. This feature is turned off.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("sync_commit_interval_second")])]),e._v(" "),a("p",[e._v("Maximum interval time between commit transactions. If there is still data in the channel that has not been committed after this time, the consumer will notify the channel to commit the transaction.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("min_sync_commit_size")])]),e._v(" "),a("p",[e._v("The minimum number of events required to commit a transaction. If the number of events received by Fe is less than it, Fe will continue to wait for the next batch of data until the time exceeds "),a("code",[e._v("sync_commit_interval_second")]),e._v(". The default value is 10000 events. If you want to modify this configuration, please ensure that this value is less than the "),a("code",[e._v("canal.instance.memory.buffer.size")]),e._v(" configuration on the canal side (16384 by default). Otherwise, Fe will try to get more events than the length of the store queue without ack, causing the store queue to block until timeout.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("min_bytes_sync_commit")])]),e._v(" "),a("p",[e._v("The minimum data size required to commit a transaction. If the data size received by Fe is smaller than it, it will continue to wait for the next batch of data until the time exceeds "),a("code",[e._v("sync_commit_interval_second")]),e._v(". The default value is 15MB. If you want to modify this configuration, please ensure that this value is less than the product "),a("code",[e._v("canal.instance.memory.buffer.size")]),e._v(" and "),a("code",[e._v("canal.instance.memory.buffer.memunit")]),e._v(" on the canal side (16MB by default). Otherwise, Fe will try to get data from canal larger than the store space without ack, causing the store queue to block until timeout.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("max_bytes_sync_commit")])]),e._v(" "),a("p",[e._v("The maximum size of the data when the transaction is committed. If the data size received by Fe is larger than it, it will immediately commit the transaction and send the accumulated data. The default value is 64MB. If you want to modify this configuration, please ensure that this value is greater than the product of "),a("code",[e._v("canal.instance.memory.buffer.size")]),e._v(" and "),a("code",[e._v("canal.instance.memory.buffer.mmemunit")]),e._v(" on the canal side (16MB by default) and "),a("code",[e._v("min_bytes_sync_commit")]),e._v("。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("max_sync_task_threads_num")])]),e._v(" "),a("p",[e._v("The maximum number of threads in the SyncJobs' thread pool. There is only one thread pool in the whole Fe for synchronization, which is used to process the tasks created by all SyncJobs in the Fe.")])])]),e._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Will modifying the table structure affect data synchronization?")]),e._v(" "),a("p",[e._v("Yes. The SyncJob cannot prohibit "),a("code",[e._v("alter table")]),e._v(" operation.\nWhen the table's schema changes, if the column mapping cannot match, the job may be suspended incorrectly. It is recommended to reduce such problems by explicitly specifying the column mapping relationship in the data synchronization job, or by adding nullable columns or columns with default values.")])]),e._v(" "),a("li",[a("p",[e._v("Will the SyncJob continue to run after the database is deleted?")]),e._v(" "),a("p",[e._v("No. In this case, the SyncJob will be checked by the Fe's scheduler thread \band be stopped.")])]),e._v(" "),a("li",[a("p",[e._v("Can multiple SyncJobs be configured with the same "),a("code",[e._v("IP:Port + destination")]),e._v("?")]),e._v(" "),a("p",[e._v("No. When creating a SyncJob, FE will check whether the "),a("code",[e._v("IP:Port + destination")]),e._v(" is duplicate with the existing job to prevent multiple jobs from connecting to the same instance.")])]),e._v(" "),a("li",[a("p",[e._v("Why is the precision of floating-point type different between MySQL and Doris during data synchronization?")]),e._v(" "),a("p",[e._v("The precision of Doris floating-point type is different from that of MySQL. You can choose to use decimal type instead.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);