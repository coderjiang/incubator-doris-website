(window.webpackJsonp=window.webpackJsonp||[]).push([[534],{924:function(e,t,a){"use strict";a.r(t);var o=a(43),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"stream-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[e._v("#")]),e._v(" STREAM LOAD")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("NAME")]),e._v(" "),a("p",[e._v("load data to table in streaming")]),e._v(" "),a("p",[e._v("SYNOPSIS")]),e._v(" "),a("p",[e._v('Curl --location-trusted -u user:passwd [-H ""...] -T data.file -XPUT http://fe_host:http_port/api/{db}/{table}/_stream_load')]),e._v(" "),a("p",[e._v("DESCRIPTION")]),e._v(" "),a("p",[e._v("This statement is used to load data to the specified table. The difference from normal load is that this load method is synchronous load.")]),e._v(" "),a("p",[e._v("This type of load still guarantees the atomicity of a batch of load tasks, either all data is loaded successfully or all fails.")]),e._v(" "),a("p",[e._v("This operation also updates the data for the rollup table associated with this base table.")]),e._v(" "),a("p",[e._v("This is a synchronous operation that returns the results to the user after the entire data load is completed.")]),e._v(" "),a("p",[e._v("Currently, HTTP chunked and non-chunked uploads are supported. For non-chunked mode, Content-Length must be used to indicate the length of the uploaded content, which ensures data integrity.")]),e._v(" "),a("p",[e._v("In addition, the user preferably sets the Content of the Expect Header field to 100-continue, which avoids unnecessary data transmission in certain error scenarios.")]),e._v(" "),a("p",[e._v("OPTIONS")]),e._v(" "),a("p",[e._v("Users can pass in the load parameters through the Header part of HTTP.")]),e._v(" "),a("p",[a("code",[e._v("label")])]),e._v(" "),a("p",[e._v("A label that is loaded at one time. The data of the same label cannot be loaded multiple times. Users can avoid the problem of repeated data load by specifying the label.")]),e._v(" "),a("p",[e._v("Currently Palo internally retains the most recent successful label within 30 minutes.")]),e._v(" "),a("p",[a("code",[e._v("column_separator")])]),e._v(" "),a("p",[e._v("Used to specify the column separator in the load file. The default is "),a("code",[e._v("\\t")]),e._v(". If it is an invisible character, you need to add "),a("code",[e._v("\\x")]),e._v(" as a prefix and hexadecimal to indicate the separator.")]),e._v(" "),a("p",[e._v("For example, the separator "),a("code",[e._v("\\x01")]),e._v(" of the hive file needs to be specified as "),a("code",[e._v('-H "column_separator:\\x01"')]),e._v(".")]),e._v(" "),a("p",[e._v("You can use a combination of multiple characters as the column separator.")]),e._v(" "),a("p",[a("code",[e._v("line_delimiter")])]),e._v(" "),a("p",[e._v("Used to specify the line delimiter in the load file. The default is "),a("code",[e._v("\\n")]),e._v(".")]),e._v(" "),a("p",[e._v("You can use a combination of multiple characters as the column separator.")]),e._v(" "),a("p",[a("code",[e._v("columns")])]),e._v(" "),a("p",[e._v("used to specify the correspondence between the columns in the load file and the columns in the table. If the column in the source file corresponds exactly to the contents of the table, then it is not necessary to specify the contents of this field. If the source file does not correspond to the table schema, then this field is required for some data conversion. There are two forms of column, one is directly corresponding to the field in the load file, directly using the field name to indicate.")]),e._v(" "),a("p",[e._v("One is a derived column with the syntax "),a("code",[e._v("column_name")]),e._v(" = expression. Give a few examples to help understand.")]),e._v(" "),a("p",[e._v('Example 1: There are three columns "c1, c2, c3" in the table. The three columns in the source file correspond to "c3, c2, c1" at a time; then you need to specify '),a("code",[e._v('-H "columns: c3, c2, c1"')])]),e._v(" "),a("p",[e._v('Example 2: There are three columns in the table, "c1, c2, c3". The first three columns in the source file correspond in turn, but there are more than one column; then you need to specify'),a("code",[e._v('-H "columns: c1, c2, c3, xxx"')])]),e._v(" "),a("p",[e._v("The last column can optionally specify a name for the placeholder.")]),e._v(" "),a("p",[e._v('Example 3: There are three columns in the table, "year, month, day". There is only one time column in the source file, which is "2018-06-01 01:02:03" format. Then you can specify '),a("code",[e._v('-H "columns: col, year = year(col), month=month(col), day=day(col)"')]),e._v(" to complete the load.")]),e._v(" "),a("p",[a("code",[e._v("where")])]),e._v(" "),a("p",[e._v("Used to extract some data. If the user needs to filter out the unwanted data, it can be achieved by setting this option.")]),e._v(" "),a("p",[e._v('Example 1: load only data larger than k1 column equal to 20180601, then you can specify -H "where: k1 = 20180601" when loading')]),e._v(" "),a("p",[a("code",[e._v("max_filter_ratio")])]),e._v(" "),a("p",[e._v("The maximum proportion of data that can be filtered (for reasons such as data irregularity). The default is zero tolerance. Data non-standard does not include rows that are filtered out by the where condition.")]),e._v(" "),a("p",[a("code",[e._v("Partitions")])]),e._v(" "),a("p",[e._v("Used to specify the partition designed for this load. If the user is able to determine the partition corresponding to the data, it is recommended to specify the item. Data that does not satisfy these partitions will be filtered out.")]),e._v(" "),a("p",[e._v("For example, specify load to p1, p2 partition, "),a("code",[e._v('-H "partitions: p1, p2"')])]),e._v(" "),a("p",[a("code",[e._v("Timeout")])]),e._v(" "),a("p",[e._v("Specifies the timeout for the load. Unit seconds. The default is 600 seconds. The range is from 1 second to 259200 seconds.")]),e._v(" "),a("p",[a("code",[e._v("strict_mode")])]),e._v(" "),a("p",[e._v("The user specifies whether strict load mode is enabled for this load. The default is disabled. Enable it with "),a("code",[e._v('-H "strict_mode: true"')]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("timezone")])]),e._v(" "),a("p",[e._v("Specifies the time zone used for this load. The default is East Eight District. This parameter affects all function results related to the time zone involved in the load.")]),e._v(" "),a("p",[a("code",[e._v("exec_mem_limit")])]),e._v(" "),a("p",[e._v("Memory limit. Default is 2GB. Unit is Bytes.")]),e._v(" "),a("p",[a("code",[e._v("format")]),e._v("\nSpecifies the format of the imported data. Support csv and json, the default is csv.")]),e._v(" "),a("p",[a("code",[e._v("jsonpaths")]),e._v("\nThere are two ways to import json: simple mode and matched mode. If jsonpath is set, it will be the matched mode import, otherwise it will be the simple mode import, please refer to the example for details.")]),e._v(" "),a("p",[a("code",[e._v("strip_outer_array")]),e._v("\nBoolean type, true to indicate that json data starts with an array object and flattens objects in the array object, default value is false.")]),e._v(" "),a("p",[a("code",[e._v("json_root")]),e._v('\njson_root is a valid JSONPATH string that specifies the root node of the JSON Document. The default value is "".')]),e._v(" "),a("p",[a("code",[e._v("merge_type")])]),e._v(" "),a("p",[e._v("The type of data merging supports three types: APPEND, DELETE, and MERGE. APPEND is the default value, which means that all this batch of data needs to be appended to the existing data. DELETE means to delete all rows with the same key as this batch of data. MERGE semantics Need to be used in conjunction with the delete condition, which means that the data that meets the delete condition is processed according to DELETE semantics and the rest is processed according to APPEND semantics")]),e._v(" "),a("p",[a("code",[e._v("fuzzy_parse")]),e._v("  Boolean type, true to indicate that parse json schema as the first line, this can make import more faster,but need all key keep the order of first line, default value is false. Only use for json format.")]),e._v(" "),a("p",[a("code",[e._v("num_as_string")]),e._v(" Boolean type, true means that when parsing the json data, it will be converted into a number type and converted into a string, and then it will be imported without loss of precision.")]),e._v(" "),a("p",[a("code",[e._v("read_json_by_line")]),e._v(": Boolean type, true means that one json object can be read per line, and the default value is false.")]),e._v(" "),a("p",[a("code",[e._v("send_batch_parallelism")]),e._v(": Integer type, used to set the default parallelism for sending batch, if the value for parallelism exceed "),a("code",[e._v("max_send_batch_parallelism_per_job")]),e._v(" in BE config, then the coordinator BE will use the value of "),a("code",[e._v("max_send_batch_parallelism_per_job")]),e._v(".")]),e._v(" "),a("p",[e._v("RETURN VALUES")]),e._v(" "),a("p",[e._v("After the load is completed, the related content of this load will be returned in Json format. Current field included")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("Status")]),e._v(": load status.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Success: indicates that the load is successful and the data is visible.")])]),e._v(" "),a("li",[a("p",[e._v("Publish Timeout: Indicates that the load job has been successfully Commit, but for some reason it is not immediately visible. Users can be considered successful and do not have to retry load")])]),e._v(" "),a("li",[a("p",[e._v("Label Already Exists: Indicates that the Label is already occupied by another job, either the load was successful or it is being loaded. The user needs to use the get label state command to determine the subsequent operations.")])]),e._v(" "),a("li",[a("p",[e._v("Other: The load failed, the user can specify Label to retry the job.")])])])]),e._v(" "),a("li",[a("p",[e._v("Message: A detailed description of the load status. When it fails, it will return the specific reason for failure.")])]),e._v(" "),a("li",[a("p",[e._v("NumberTotalRows: The total number of rows read from the data stream")])]),e._v(" "),a("li",[a("p",[e._v("NumberLoadedRows: The number of data rows loaded this time, only valid when Success")])]),e._v(" "),a("li",[a("p",[e._v("NumberFilteredRows: The number of rows filtered by this load, that is, the number of rows with unqualified data quality.")])]),e._v(" "),a("li",[a("p",[e._v("NumberUnselectedRows: Number of rows that were filtered by the where condition for this load")])]),e._v(" "),a("li",[a("p",[e._v("LoadBytes: The amount of source file data loaded this time")])]),e._v(" "),a("li",[a("p",[e._v("LoadTimeMs: Time spent on this load")])]),e._v(" "),a("li",[a("p",[e._v("BeginTxnTimeMs: The time cost for RPC to Fe to begin a transaction, Unit milliseconds.")])]),e._v(" "),a("li",[a("p",[e._v("StreamLoadPutTimeMs: The time cost for RPC to Fe to get a stream load plan, Unit milliseconds.")])]),e._v(" "),a("li",[a("p",[e._v("ReadDataTimeMs: Read data time, Unit milliseconds.")])]),e._v(" "),a("li",[a("p",[e._v("WriteDataTimeMs: Write data time, Unit milliseconds.")])]),e._v(" "),a("li",[a("p",[e._v("CommitAndPublishTimeMs: The time cost for RPC to Fe to commit and publish a transaction, Unit milliseconds.")])]),e._v(" "),a("li",[a("p",[e._v("ErrorURL: The specific content of the filtered data, only the first 1000 items are retained")])])]),e._v(" "),a("p",[e._v("ERRORS")]),e._v(" "),a("p",[e._v("You can view the load error details by the following statement:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("```SHOW LOAD WARNINGS ON 'url'```\n")])])]),a("p",[e._v("Where url is the url given by ErrorURL.")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("load the data from the local file 'testData' into the table 'testTbl' in the database 'testDb' and use Label for deduplication. Specify a timeout of 100 seconds")]),e._v(" "),a("p",[a("code",[e._v('Curl --location-trusted -u root -H "label:123" -H "timeout:100" -T testData http://host:port/api/testDb/testTbl/_stream_load')])])]),e._v(" "),a("li",[a("p",[e._v("load the data in the local file 'testData' into the table of 'testTbl' in the database 'testDb', use Label for deduplication, and load only data with k1 equal to 20180601\n        \n"),a("code",[e._v('Curl --location-trusted -u root -H "label:123" -H "where: k1=20180601" -T testData http://host:port/api/testDb/testTbl/_stream_load')])])]),e._v(" "),a("li",[a("p",[e._v("load the data from the local file 'testData' into the 'testTbl' table in the database 'testDb', allowing a 20% error rate (user is in default_cluster)")]),e._v(" "),a("p",[a("code",[e._v('Curl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -T testData http://host:port/api/testDb/testTbl/_stream_load')])])]),e._v(" "),a("li",[a("p",[e._v("load the data from the local file 'testData' into the 'testTbl' table in the database 'testDb', allow a 20% error rate, and specify the column name of the file (user is in default_cluster)")]),e._v(" "),a("p",[a("code",[e._v('Curl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -H "columns: k2, k1, v1" -T testData http://host:port/api/testDb/testTbl/_stream_load')])])]),e._v(" "),a("li",[a("p",[e._v("load the data from the local file 'testData' into the p1, p2 partition in the 'testTbl' table in the database 'testDb', allowing a 20% error rate.")]),e._v(" "),a("p",[a("code",[e._v('Curl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -H "partitions: p1, p2" -T testData http://host:port/api/testDb/testTbl/stream_load')])])]),e._v(" "),a("li",[a("p",[e._v("load using streaming mode (user is in default_cluster)")]),e._v(" "),a("p",[a("code",[e._v("Seq 1 10 | awk '{OFS=\"\\t\"}{print $1, $1 * 10}' | curl --location-trusted -u root -T - http://host:port/api/testDb/testTbl/_stream_load")])])]),e._v(" "),a("li",[a("p",[e._v("load a table with HLL columns, which can be columns in the table or columns in the data used to generate HLL columns,you can also use hll_empty to supplement columns that are not in the data")]),e._v(" "),a("p",[a("code",[e._v('Curl --location-trusted -u root -H "columns: k1, k2, v1=hll_hash(k1), v2=hll_empty()" -T testData http://host:port/api/testDb/testTbl/_stream_load')])])]),e._v(" "),a("li",[a("p",[e._v("load data for strict mode filtering and set the time zone to Africa/Abidjan")]),e._v(" "),a("p",[a("code",[e._v('Curl --location-trusted -u root -H "strict_mode: true" -H "timezone: Africa/Abidjan" -T testData http://host:port/api/testDb/testTbl/_stream_load')])])]),e._v(" "),a("li",[a("p",[e._v("load a table with BITMAP columns, which can be columns in the table or a column in the data used to generate BITMAP columns, you can also use bitmap_empty to supplement columns that are not in the data")]),e._v(" "),a("p",[a("code",[e._v('Curl --location-trusted -u root -H "columns: k1, k2, v1=to_bitmap(k1), v2=bitmap_empty()" -T testData http://host:port/api/testDb/testTbl/_stream_load')])])]),e._v(" "),a("li",[a("p",[e._v("a simple load json\ntable schema:\n"),a("code",[e._v("category")]),e._v(' varchar(512) NULL COMMENT "",\n'),a("code",[e._v("author")]),e._v(' varchar(512) NULL COMMENT "",\n'),a("code",[e._v("title")]),e._v(' varchar(512) NULL COMMENT "",\n'),a("code",[e._v("price")]),e._v(' double NULL COMMENT ""\njson data:\n{"category":"C++","author":"avc","title":"C++ primer","price":895}\nload command by curl:\ncurl --location-trusted -u root  -H "label:123" -H "format: json" -T testData http://host:port/api/testDb/testTbl/_stream_load\nIn order to improve throughput, it supports importing multiple pieces of json data at one time. Each row is a json object. The default value for line delimeter is '),a("code",[e._v("\\n")]),e._v('. Need to set read_json_by_line to true. The json data format is as follows:\n{"category":"C++","author":"avc","title":"C++ primer","price":89.5}\n{"category":"Java","author":"avc","title":"Effective Java","price":95}\n{"category":"Linux","author":"avc","title":"Linux kernel","price":195}')])]),e._v(" "),a("li",[a("p",[e._v('Matched load json by jsonpaths\nFor example json data:\n[\n{"category":"xuxb111","author":"1avc","title":"SayingsoftheCentury","price":895},\n{"category":"xuxb222","author":"2avc","title":"SayingsoftheCentury","price":895},\n{"category":"xuxb333","author":"3avc","title":"SayingsoftheCentury","price":895}\n]\nMatched imports are made by specifying jsonpath parameter, such as '),a("code",[e._v("category")]),e._v(", "),a("code",[e._v("author")]),e._v(", and "),a("code",[e._v("price")]),e._v(', for example:\ncurl --location-trusted -u root  -H "columns: category, price, author" -H "label:123" -H "format: json" -H "jsonpaths: ["$.category","$.price","$.author"]" -H "strip_outer_array: true" -T testData http://host:port/api/testDb/testTbl/_stream_load\nTips:\n1）If the json data starts as an array and each object in the array is a record, you need to set the strip_outer_array to true to represent the flat array.\n2）If the json data starts with an array, and each object in the array is a record, our ROOT node is actually an object in the array when we set jsonpath.')])]),e._v(" "),a("li",[a("p",[e._v('User specifies the json_root node\nFor example json data:\n{\n"RECORDS":[\n{"category":"11","title":"SayingsoftheCentury","price":895,"timestamp":1589191587},\n{"category":"22","author":"2avc","price":895,"timestamp":1589191487},\n{"category":"33","author":"3avc","title":"SayingsoftheCentury","timestamp":1589191387}\n]\n}\nMatched imports are made by specifying jsonpath parameter, such as '),a("code",[e._v("category")]),e._v(", "),a("code",[e._v("author")]),e._v(", and "),a("code",[e._v("price")]),e._v(', for example:\ncurl --location-trusted -u root  -H "columns: category, price, author" -H "label:123" -H "format: json" -H "jsonpaths: ["$.category","$.price","$.author"]" -H "strip_outer_array: true" -H "json_root: $.RECORDS" -T testData http://host:port/api/testDb/testTbl/_stream_load')])]),e._v(" "),a("li",[a("p",[e._v('delete all data which key columns match the load data\ncurl --location-trusted -u root -H "merge_type: DELETE" -T testData http://host:port/api/testDb/testTbl/_stream_load')])]),e._v(" "),a("li",[a("p",[e._v('delete all data which key columns match the load data where flag is true, others append\ncurl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv, flag" -H "merge_type: MERGE" -H "delete: flag=1"  -T testData http://host:port/api/testDb/testTbl/_stream_load')])])]),e._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("STREAM, LOAD\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);