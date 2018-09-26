(window.webpackJsonp=window.webpackJsonp||[]).push([[1119],{1515:function(n,t,a){"use strict";a.r(t);var e=a(43),s=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"spark-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark-load"}},[n._v("#")]),n._v(" SPARK LOAD")]),n._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[n._v("#")]),n._v(" description")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("Spark load 通过外部的 Spark 资源实现对导入数据的预处理，提高 Doris 大数据量的导入性能并且节省 Doris 集群的计算资源。主要用于初次迁移，大数据量导入 Doris 的场景。\n\nSpark load 是一种异步导入方式，用户需要通过 MySQL 协议创建 Spark 类型导入任务，并通过 `SHOW LOAD` 查看导入结果。\n")])])]),a("p",[n._v("语法：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('LOAD LABEL load_label\n(\ndata_desc1[, data_desc2, ...]\n)\nWITH RESOURCE resource_name\n[resource_properties]\n[opt_properties];\n\n1. load_label\n\n    当前导入批次的标签。在一个 database 内唯一。\n    语法：\n    [database_name.]your_label\n \n2. data_desc\n\n    用于描述一批导入数据。\n    语法：\n        DATA INFILE\n        (\n        "file_path1"[, file_path2, ...]\n        )\n        [NEGATIVE]\n        INTO TABLE `table_name`\n        [PARTITION (p1, p2)]\n        [COLUMNS TERMINATED BY "column_separator"]\n        [FORMAT AS "file_type"]\n        [(column_list)]\n        [COLUMNS FROM PATH AS (col2, ...)]\n        [SET (k1 = func(k2))]\n        [WHERE predicate]    \n\n        DATA FROM TABLE hive_external_tbl\n        [NEGATIVE]\n        INTO TABLE tbl_name\n        [PARTITION (p1, p2)]\n        [SET (k1=f1(xx), k2=f2(xx))]\n        [WHERE predicate]\n\n    说明：\n        file_path: \n\n        文件路径，可以指定到一个文件，也可以用 * 通配符指定某个目录下的所有文件。通配符必须匹配到文件，而不能是目录。\n\n        hive_external_tbl:\n\n        hive 外部表名。\n        要求导入的 doris 表中的列必须在 hive 外部表中存在。\n        每个导入任务只支持从一个 hive 外部表导入。\n        不能与 file_path 方式同时使用。\n\n        PARTITION:\n\n        如果指定此参数，则只会导入指定的分区，导入分区以外的数据会被过滤掉。\n        如果不指定，默认导入table的所有分区。\n    \n        NEGATIVE：\n\n        如果指定此参数，则相当于导入一批“负”数据。用于抵消之前导入的同一批数据。\n        该参数仅适用于存在 value 列，并且 value 列的聚合类型仅为 SUM 的情况。\n        \n        column_separator：\n\n        用于指定导入文件中的列分隔符。默认为 \\t\n        如果是不可见字符，则需要加\\\\x作为前缀，使用十六进制来表示分隔符。\n        如hive文件的分隔符\\x01，指定为"\\\\x01"\n        \n        file_type：\n\n        用于指定导入文件的类型，目前仅支持csv。 \n\n        column_list：\n\n        用于指定导入文件中的列和 table 中的列的对应关系。\n        当需要跳过导入文件中的某一列时，将该列指定为 table 中不存在的列名即可。\n        语法：\n        (col_name1, col_name2, ...)\n        \n        SET:\n\n        如果指定此参数，可以将源文件某一列按照函数进行转化，然后将转化后的结果导入到table中。语法为 `column_name` = expression。\n        仅支持Spark SQL built-in functions，具体可参考 https://spark.apache.org/docs/2.4.6/api/sql/index.html。\n        举几个例子帮助理解。\n        例1: 表中有3个列“c1, c2, c3", 源文件中前两列依次对应(c1,c2)，后两列之和对应c3；那么需要指定 columns (c1,c2,tmp_c3,tmp_c4) SET (c3=tmp_c3+tmp_c4); \n        例2: 表中有3个列“year, month, day"，源文件中只有一个时间列，为”2018-06-01 01:02:03“格式。\n        那么可以指定 columns(tmp_time) set (year = year(tmp_time), month=month(tmp_time), day=day(tmp_time)) 完成导入。\n\n        WHERE:\n      \n        对做完 transform 的数据进行过滤，符合 where 条件的数据才能被导入。WHERE 语句中只可引用表中列名。\n3. resource_name\n\n    所使用的 spark 资源名称，可以通过 `SHOW RESOURCES` 命令查看。\n\n4. resource_properties\n\n    当用户有临时性的需求，比如增加任务使用的资源而修改 Spark configs，可以在这里设置，设置仅对本次任务生效，并不影响 Doris 集群中已有的配置。\n    另外不同的 broker，以及不同的访问方式，需要提供的信息不同。可以查看 broker 使用文档。\n\n4. opt_properties\n\n    用于指定一些特殊参数。\n    语法：\n    [PROPERTIES ("key"="value", ...)]\n    \n    可以指定如下参数：\n    timeout：         指定导入操作的超时时间。默认超时为4小时。单位秒。\n    max_filter_ratio：最大容忍可过滤（数据不规范等原因）的数据比例。默认零容忍。\n    strict mode：     是否对数据进行严格限制。默认为 false。\n    timezone:         指定某些受时区影响的函数的时区，如 strftime/alignment_timestamp/from_unixtime 等等，具体请查阅 [时区] 文档。如果不指定，则使用 "Asia/Shanghai" 时区。\n\n5. 导入数据格式样例\n\n    整型类（TINYINT/SMALLINT/INT/BIGINT/LARGEINT）：1, 1000, 1234\n    浮点类（FLOAT/DOUBLE/DECIMAL）：1.1, 0.23, .356\n    日期类（DATE/DATETIME）：2017-10-03, 2017-06-13 12:34:03。\n    （注：如果是其他日期格式，可以在导入命令中，使用 strftime 或者 time_format 函数进行转换）\n    字符串类（CHAR/VARCHAR）："I am a student", "a"\n    NULL值：\\N\n')])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[n._v("#")]),n._v(" example")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('1. 从 HDFS 导入一批数据，指定超时时间和过滤比例。使用名为 my_spark 的 spark 资源。\n\n    LOAD LABEL example_db.label1\n    (\n        DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n        INTO TABLE `my_table`\n    )\n    WITH RESOURCE \'my_spark\'\n    PROPERTIES\n    (\n        "timeout" = "3600",\n        "max_filter_ratio" = "0.1"\n    );\n\n    其中 hdfs_host 为 namenode 的 host，hdfs_port 为 fs.defaultFS 端口（默认9000）\n\n2. 从 HDFS 导入一批"负"数据，指定分隔符为逗号，使用通配符*指定目录下的所有文件，并指定 spark 资源的临时参数。\n\n    LOAD LABEL example_db.label3\n    (\n        DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/*")\n        NEGATIVE\n        INTO TABLE `my_table`\n        COLUMNS TERMINATED BY ","\n    )\n    WITH RESOURCE \'my_spark\'\n    (\n        "spark.executor.memory" = "3g",\n        "broker.username" = "hdfs_user",\n        "broker.password" = "hdfs_passwd"\n    );\n\n3. 从 HDFS 导入一批数据，指定分区, 并对导入文件的列做一些转化，如下：\n   表结构为：\n    k1 varchar(20)\n    k2 int\n\n    假设数据文件只有一行数据：\n\n    Adele,1,1\n\n    数据文件中各列，对应导入语句中指定的各列：\n    k1,tmp_k2,tmp_k3\n\n    转换如下：\n\n    1) k1: 不变换\n    2) k2：是 tmp_k2 和 tmp_k3 数据之和\n\n    LOAD LABEL example_db.label6\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    PARTITION (p1, p2)\n    COLUMNS TERMINATED BY ","\n    (k1, tmp_k2, tmp_k3)\n    SET (\n      k2 = tmp_k2 + tmp_k3\n    )\n    )\n    WITH RESOURCE \'my_spark\';\n\n4. 提取文件路径中的分区字段\n\n    如果需要，则会根据表中定义的字段类型解析文件路径中的分区字段（partitioned fields），类似Spark中Partition Discovery的功能\n\n    LOAD LABEL example_db.label10\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/dir/city=beijing/*/*")\n    INTO TABLE `my_table`\n    (k1, k2, k3)\n    COLUMNS FROM PATH AS (city, utc_date)\n    SET (uniq_id = md5sum(k1, city))\n    )\n    WITH RESOURCE \'my_spark\';\n\n    hdfs://hdfs_host:hdfs_port/user/palo/data/input/dir/city=beijing目录下包括如下文件：\n\n    [hdfs://hdfs_host:hdfs_port/user/palo/data/input/dir/city=beijing/utc_date=2019-06-26/0000.csv, hdfs://hdfs_host:hdfs_port/user/palo/data/input/dir/city=beijing/utc_date=2019-06-26/0001.csv, ...]\n\n    则提取文件路径的中的city和utc_date字段\n\n5. 对待导入数据进行过滤，k1 值大于 10 的列才能被导入。\n\n    LOAD LABEL example_db.label10\n    (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `my_table`\n    WHERE k1 > 10\n    )\n    WITH RESOURCE \'my_spark\';\n\n6. 从 hive 外部表导入，并将源表中的 uuid 列通过全局字典转化为 bitmap 类型。\n\n    LOAD LABEL db1.label1\n    (\n        DATA FROM TABLE hive_t1\n        INTO TABLE tbl1\n        SET\n        (\n            uuid=bitmap_dict(uuid)\n        )\n    )\n    WITH RESOURCE \'my_spark\';\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[n._v("#")]),n._v(" keyword")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("SPARK,LOAD\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);