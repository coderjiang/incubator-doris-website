(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{696:function(e,t,a){"use strict";a.r(t);var o=a(43),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[e._v("#")]),e._v(" LOAD")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Palo currently supports the following four import methods:")]),e._v(" "),a("ol",[a("li",[e._v("Hadoop Load: Importing ETL based on MR.")]),e._v(" "),a("li",[e._v("Broker Load: Use broker to import data.")]),e._v(" "),a("li",[e._v("Mini Load: Upload files through HTTP protocol for batch data import.")]),e._v(" "),a("li",[e._v("Stream Load: Stream data import through HTTP protocol.")])]),e._v(" "),a("p",[e._v("This help mainly describes the first import method, namely Hadoop Load related help information. The rest of the import methods can use the following commands to view help:")]),e._v(" "),a("p",[e._v("This import method may not be supported in a subsequent version. It is recommended that other import methods be used for data import. !!!")]),e._v(" "),a("ol",[a("li",[e._v("help broker load;")]),e._v(" "),a("li",[e._v("help mini load;")]),e._v(" "),a("li",[e._v("help stream load;")])]),e._v(" "),a("p",[e._v("Hadoop Load is only applicable to Baidu's internal environment. Public, private and open source environments cannot use this import approach.\nThe import method must set up a Hadoop computing queue for ETL, which can be viewed through the help set property command.")]),e._v(" "),a("p",[e._v("Grammar:")]),e._v(" "),a("p",[e._v("LOAD LABEL load_label\n(\nDate of date of date of entry\n)\n[opt_properties];")]),e._v(" "),a("ol",[a("li",[e._v("load label")])]),e._v(" "),a("p",[e._v("The label of the current imported batch. Unique in a database.\nGrammar:\n[database_name.]your_label")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("data_desc")])]),e._v(" "),a("p",[e._v('Used to describe a batch of imported data.\nGrammar:\nDATA INFILE\n(\n"file_path1"[, file_path2, ...]\n)\n[NEGATIVE]\nINTO TABLE '),a("code",[e._v("table_name")]),e._v('\n[PARTITION (p1, P2)]\n[COLUMNS TERMINATED BY "column_separator"]\n[FORMAT AS "file_type"]\n[(column_list)]\n[set (k1 = fun (k2)]]')]),e._v(" "),a("p",[e._v("Explain:\nfile_path:")]),e._v(" "),a("p",[e._v("File paths can be specified to a file, or * wildcards can be used to specify all files in a directory. Wildcards must match to files, not directories.")]),e._v(" "),a("p",[e._v("PARTICIPATION:")]),e._v(" "),a("p",[e._v("If this parameter is specified, only the specified partition will be imported, and data outside the imported partition will be filtered out.\nIf not specified, all partitions of the table are imported by default.")]),e._v(" "),a("p",[e._v('NEGATIVE：\nIf this parameter is specified, it is equivalent to importing a batch of "negative" data. Used to offset the same batch of data imported before.\nThis parameter applies only to the case where there are value columns and the aggregation type of value columns is SUM only.')]),e._v(" "),a("p",[e._v("Column U separator:")]),e._v(" "),a("p",[e._v('Used to specify the column separator in the import file. Default tot\nIf the character is invisible, it needs to be prefixed with \\x, using hexadecimal to represent the separator.\nFor example, the separator X01 of the hive file is specified as "\\ x01"')]),e._v(" "),a("p",[e._v("File type:")]),e._v(" "),a("p",[e._v("Used to specify the type of imported file, such as parquet, orc, csv. The default value is determined by the file suffix name.")]),e._v(" "),a("p",[e._v("column_list：")]),e._v(" "),a("p",[e._v("Used to specify the correspondence between columns in the import file and columns in the table.\nWhen you need to skip a column in the import file, specify it as a column name that does not exist in the table.\nGrammar:\n(col_name1, col_name2, ...)")]),e._v(" "),a("p",[e._v("SET:")]),e._v(" "),a("p",[e._v("If this parameter is specified, a column of the source file can be transformed according to a function, and then the transformed result can be imported into the table.\nThe functions currently supported are:")]),e._v(" "),a("p",[e._v("Strftime (fmt, column) date conversion function\nFmt: Date format, such as% Y% m% d% H% M% S (year, month, day, hour, second)\nColumn: Column in column_list, which is the column in the input file. Storage content should be a digital timestamp.\nIf there is no column_list, the columns of the input file are entered by default in the column order of the Palo table.")]),e._v(" "),a("p",[e._v("time_format(output_fmt, input_fmt, column) 日期格式转化\nOutput_fmt: Converted date format, such as% Y% m% d% H% M% S (year, month, day, hour, second)\nInput_fmt: The date format of the column before transformation, such as% Y% m% d% H% M% S (days, hours, seconds, months, years)\nColumn: Column in column_list, which is the column in the input file. Storage content should be a date string in input_fmt format.\nIf there is no column_list, the columns of the input file are entered by default in the column order of the Palo table.")]),e._v(" "),a("p",[e._v("alignment_timestamp(precision, column) 将时间戳对齐到指定精度\nPrecision: year 124month;124day;124hour;\nColumn: Column in column_list, which is the column in the input file. Storage content should be a digital timestamp.\nIf there is no column_list, the columns of the input file are entered by default in the column order of the Palo table.\nNote: When the alignment accuracy is year and month, only the time stamps in the range of 20050101-20191231 are supported.")]),e._v(" "),a("p",[e._v("Default_value (value) sets the default value for a column import\nUse default values of columns when creating tables without specifying")]),e._v(" "),a("p",[e._v("Md5sum (column1, column2,...) evaluates the value of the specified imported column to md5sum, returning a 32-bit hexadecimal string")]),e._v(" "),a("p",[e._v("Replace_value (old_value [, new_value]) replaces old_value specified in the import file with new_value\nNew_value, if not specified, uses the default value of the column when building the table")]),e._v(" "),a("p",[e._v("Hll_hash (column) is used to transform a column in a table or data into a data structure of a HLL column")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("opt_properties")])]),e._v(" "),a("p",[e._v('Used to specify some special parameters.\nGrammar:\n[PROPERTIES ("key"="value", ...)]')]),e._v(" "),a("p",[e._v("The following parameters can be specified:\nCluster: Import the Hadoop computed queue used.\nTimeout: Specifies the timeout time of the import operation. The default timeout is 3 days. Unit seconds.\nMax_filter_ratio: The ratio of data that is most tolerant of being filterable (for reasons such as data irregularities). Default zero tolerance.\nLoad_delete_flag: Specifies whether the import deletes data by importing the key column, which applies only to UNIQUE KEY.\nValue column is not specified when importing. The default is false.")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Import data format sample")])]),e._v(" "),a("p",[e._v('Integer classes (TINYINT/SMALLINT/INT/BIGINT/LARGEINT): 1,1000,1234\nFloating Point Class (FLOAT/DOUBLE/DECIMAL): 1.1, 0.23, 356\nDate class (DATE/DATETIME): 2017-10-03, 2017-06-13 12:34:03.\n(Note: If it\'s in other date formats, you can use strftime or time_format functions to convert in the import command)\n字符串类（CHAR/VARCHAR）："I am a student", "a"\nNULL value: N')]),e._v(" "),a("p",[e._v("'35;'35; example")]),e._v(" "),a("ol",[a("li",[e._v("Import a batch of data, specify timeout time and filtering ratio. Specify the import queue as my_cluster.")])]),e._v(" "),a("p",[e._v('LOAD LABEL example db.label1\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\nINTO TABLE '),a("code",[e._v("my_table")]),e._v('\n)\nPROPERTIES\n(\n"cluster" ="my" cluster,\nTimeout ="3600",\n"max_filter_ratio" = "0.1"\n);')]),e._v(" "),a("p",[e._v("Where hdfs_host is the host of the namenode and hdfs_port is the fs.defaultFS port (default 9000)")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Import a batch of data, including multiple files. Import different tables, specify separators, and specify column correspondences")])]),e._v(" "),a("p",[e._v('LOAD LABEL example db.label2\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file1")\nINTO TABLE '),a("code",[e._v("my_table_1")]),e._v('\nCOLUMNS TERMINATED BY ","\n(k1, k3, k2, v1, v2),\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file2")\nINTO TABLE '),a("code",[e._v("my_table_2")]),e._v('\nCOLUMNS TERMINATED BY "\\t"\n(k1, k2, k3, v2, v1)\n);')]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Import a batch of data, specify hive's default delimiter x01, and use wildcard * to specify all files in the directory")])]),e._v(" "),a("p",[e._v('LOAD LABEL example db.label3\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/*")\nNEGATIVE\nINTO TABLE '),a("code",[e._v("my_table")]),e._v('\nCOLUMNS TERMINATED BY "\\x01"\n);')]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v('Import a batch of "negative" data')])]),e._v(" "),a("p",[e._v('LOAD LABEL example db.label4\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/old_file)\nNEGATIVE\nINTO TABLE '),a("code",[e._v("my_table")]),e._v('\nCOLUMNS TERMINATED BY "\\t"\n);')]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Import a batch of data and specify partitions")])]),e._v(" "),a("p",[e._v('LOAD LABEL example db.label5\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\nINTO TABLE '),a("code",[e._v("my_table")]),e._v('\nPARTITION (p1, P2)\nCOLUMNS TERMINATED BY ","\n(k1, k3, k2, v1, v2)\n);')]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Import a batch of data, specify partitions, and make some transformations to the columns of the imported files, as follows:\nThe table structure is as follows:\nK1 date\ndate\nk3 bigint\nk4 varchar (20)\nk5 varchar (64)\nk6 int")])]),e._v(" "),a("p",[e._v("Assume that the data file has only one row of data, five columns, and comma-separated:")]),e._v(" "),a("p",[e._v("1537002087,2018-08-09 11:12:13,1537002087,-,1")]),e._v(" "),a("p",[e._v("The columns in the data file correspond to the columns specified in the import statement:\ntmp -u k1, tmp -u k2, tmp u k3, k6, v1")]),e._v(" "),a("p",[e._v("The conversion is as follows:")]),e._v(" "),a("ol",[a("li",[e._v("k1: Transform tmp_k1 timestamp column into datetime type data")]),e._v(" "),a("li",[e._v("k2: Converting tmp_k2 datetime-type data into date data")]),e._v(" "),a("li",[e._v("k3: Transform tmp_k3 timestamp column into day-level timestamp")]),e._v(" "),a("li",[e._v("k4: Specify import default value of 1")]),e._v(" "),a("li",[e._v("k5: Calculate MD5 values from tmp_k1, tmp_k2, tmp_k3 columns")]),e._v(" "),a("li",[e._v("k6: Replace the - value in the imported file with 10")])]),e._v(" "),a("p",[e._v('LOAD LABEL example db.label6\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\nINTO TABLE '),a("code",[e._v("my_table")]),e._v('\nPARTITION (p1, P2)\nCOLUMNS TERMINATED BY ","\n(tmp /u k1, tmp /u k2, tmp /u k3, k6, v1)\nSET (\nK1 = strftime (%Y -%m -%d%H:%M:%S ", TMP u K1),\nK2 = Time = UFormat ("% Y-% M-% D% H:% M:% S", "% Y-% M-% D", "TMP = UK2),\nk3 = alignment_timestamp("day", tmp_k3),\nk4 = default_value("1"),\nK5 = MD5Sum (TMP = UK1, TMP = UK2, TMP = UK3)\nk6 = replace value ("-", "10")\n)\n);')]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Import data into tables containing HLL columns, which can be columns in tables or columns in data")])]),e._v(" "),a("p",[e._v('LOAD LABEL example db.label7\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\nINTO TABLE '),a("code",[e._v("my_table")]),e._v('\nPARTITION (p1, P2)\nCOLUMNS TERMINATED BY ","\nSET (\nv1 = hll, u hash (k1),\nv2 = hll, u hash (k2)\n)\n);')]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("p",[e._v("LOAD")])])}),[],!1,null,null,null);t.default=n.exports}}]);