(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{998:function(e,t,r){"use strict";r.r(t);var n=r(52),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"outfile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#outfile"}},[e._v("#")]),e._v(" OUTFILE")]),e._v(" "),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('The `SELECT INTO OUTFILE` statement can export the query results to a file. Currently supports export to remote storage through Broker process, or directly through S3, HDFS  protocol such as HDFS, S3, BOS and COS(Tencent Cloud) through the Broker process. The syntax is as follows:\n\nGrammar：\n    query_stmt\n    INTO OUTFILE "file_path"\n    [format_as]\n    [properties]\n\n1. file_path\n    `file_path` specify the file path and file name prefix. Like: `hdfs://path/to/my_file_`.\n    The final file name will be assembled as `my_file_`, file seq no and the format suffix. File seq no starts from 0, determined by the number of split.\n        my_file_abcdefg_0.csv\n        my_file_abcdefg_1.csv\n        my_file_abcdegf_2.csv\n\n2. format_as\n    FORMAT AS CSV\n    Specify the export format. The default is CSV.\n\n\n3. properties\n    Specify the relevant attributes. Currently it supports exporting through the Broker process, or through the S3, HDFS protocol.\n\n    Grammar：\n    [PROPERTIES ("key"="value", ...)]\n    The following parameters can be specified:\n      column_separator: Specifies the exported column separator, defaulting to t. Supports invisible characters, such as\'\\x07\'.\n      line_delimiter: Specifies the exported line separator, defaulting to\\n. Supports invisible characters, such as\'\\x07\'.\n      max_file_size: max size for each file\n\n    Broker related attributes need to be prefixed with `broker.`:\n    broker.name: broker name\n    broker.hadoop.security.authentication: Specify authentication as kerberos\n    broker.kerberos_principal: Specify the principal of kerberos\n    broker.kerberos_keytab: Specify the keytab path of kerberos, this file is the path on the broker.\n\n    HDFS protocal can directly execute HDFS protocal configuration:\n    hdfs.fs.defaultFS: namenode ip and port\n    hdfs.hdfs_user: hdfs user name\n\n    S3 protocol can directly execute S3 protocol configuration:\n    AWS_ENDPOINT\n    AWS_ACCESS_KEY\n    AWS_SECRET_KEY\n    AWS_REGION\n')])])]),r("h2",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('1. Export simple query results to the file `hdfs://path/to/result.txt`. Specify the export format as CSV. Use `my_broker` and set kerberos authentication information. Specify the column separator as `,` and the line delimiter as `\\n`.\nSELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "100MB"\n);\nIf the result is less than 100MB, file will be: `result_0.csv`.\nIf larger than 100MB, may be: `result_0.csv, result_1.csv, ...`.\n\n2. Export simple query results to the file `hdfs://path/to/result.parquet`. Specify the export format as PARQUET. Use `my_broker` and set kerberos authentication information. \nSELECT c1, c2, c3 FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "schema"="required,int32,c1;required,byte_array,c2;required,byte_array,c2"\n);\nIf the exported file format is PARQUET, `schema` must be specified.\n\n3. Export the query result of the CTE statement to the file `hdfs://path/to/result.txt`. The default export format is CSV. Use `my_broker` and set hdfs high availability information. Use the default column separators and line delimiter.\nWITH\nx1 AS\n(SELECT k1, k2 FROM tbl1),\nx2 AS\n(SELECT k3 FROM tbl2)\nSELEC k1 FROM x1 UNION SELECT k3 FROM x2\nINTO OUTFILE "hdfs://path/to/result_"\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.username"="user",\n    "broker.password"="passwd",\n    "broker.dfs.nameservices" = "my_ha",\n    "broker.dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "broker.dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\nIf the result is less than 1GB, file will be: `result_0.csv`.\nIf larger than 1GB, may be: `result_0.csv, result_1.csv, ...`.\n\n4. Export the query results of the UNION statement to the file `bos://bucket/result.parquet`. Specify the export format as PARQUET. Use `my_broker` and set hdfs high availability information. PARQUET format does not need to specify the column separator and line delimiter.\nSELECT k1 FROM tbl1 UNION SELECT k2 FROM tbl1\nINTO OUTFILE "bos://bucket/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.bos_endpoint" = "http://bj.bcebos.com",\n    "broker.bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "broker.bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyyy",\n    "schema"="required,int32,k1;required,byte_array,k2"\n);\n\n5. Export simple query results to the file `cos://${bucket_name}/path/result.txt`. Specify the export format as CSV.\nAnd create a mark file after export finished.\nselect k1,k2,v1 from tbl1 limit 100000\ninto outfile "s3a://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n   "broker.name" = "hdfs_broker",\n   "broker.fs.s3a.access.key" = "xxx",\n   "broker.fs.s3a.secret.key" = "xxxx",\n   "broker.fs.s3a.endpoint" = "https://cos.xxxxxx.myqcloud.com/",\n   "column_separator" = ",",\n   "line_delimiter" = "\\n",\n   "max_file_size" = "1024MB",\n   "success_file_name" = "SUCCESS"\n)\nPlease Note: \n    1. Paths that do not exist are automatically created.\n    2. These parameters(access.key/secret.key/endpointneed) need to be confirmed with `Tecent Cloud COS`. In particular, the value of endpoint does not need to be filled in bucket_name.\n\n6. Use the s3 protocol to export to bos, and concurrent export is enabled.\nset enable_parallel_outfile = true;\nselect k1 from tb1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "AWS_ENDPOINT" = "http://s3.bd.bcebos.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "bd"\n)\nThe final generated file prefix is `my_file_{fragment_instance_id}_`。\n\n7. Use the s3 protocol to export to bos, and enable concurrent export of session variables.\nset enable_parallel_outfile = true;\nselect k1 from tb1 order by k1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "AWS_ENDPOINT" = "http://s3.bd.bcebos.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "bd"\n)\nBut because the query statement has a top-level sorting node, even if the query is enabled for concurrently exported session variables, it cannot be exported concurrently.\n\n8. Use libhdfs to export to hdfs cluster. Export the query results of the UNION statement to the file `hdfs://path/to/result.txt`\n    Specify the export format as CSV. Use the user name as \'work\', the column separators as \',\' and line delimiter as \'\\n\'.\nSELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "hdfs.fs.defaultFS" = "hdfs://ip:port",\n    "hdfs.hdfs_user" = "work"\n);\nIf the result is less than 1GB, file will be: `my_file_0.csv`.\nIf larger than 1GB, may be: `my_file_0.csv, result_1.csv, ...`.\n')])])]),r("h2",{attrs:{id:"keyword"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("OUTFILE\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);