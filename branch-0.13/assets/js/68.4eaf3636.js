(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{454:function(e,t,a){"use strict";a.r(t);var n=a(43),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"doris-on-es"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-on-es"}},[e._v("#")]),e._v(" Doris On ES")]),e._v(" "),a("p",[e._v("Doris-On-ES not only take advantage of Doris's distributed query planning capability but also ES (Elastic search)'s full-text search capability, provide a more complete OLAP scenario solution:")]),e._v(" "),a("ol",[a("li",[e._v("Multi-index Distributed Join Query in ES")]),e._v(" "),a("li",[e._v("Joint Query of Tables in Doris and ES, More Complex Full-Text Retrieval and Filtering")])]),e._v(" "),a("p",[e._v("This document mainly introduces the realization principle and usage of this function.")]),e._v(" "),a("h2",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("h3",{attrs:{id:"noun-in-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noun-in-doris"}},[e._v("#")]),e._v(" Noun in Doris")]),e._v(" "),a("ul",[a("li",[e._v("FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access.")]),e._v(" "),a("li",[e._v("BE: Backend, Doris's back-end node. Responsible for query execution and data storage.")])]),e._v(" "),a("h3",{attrs:{id:"noun-in-es"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noun-in-es"}},[e._v("#")]),e._v(" Noun in ES")]),e._v(" "),a("ul",[a("li",[e._v("DataNode: The data storage and computing node of ES.")]),e._v(" "),a("li",[e._v("MasterNode: The Master node of ES, which manages metadata, nodes, data distribution, etc.")]),e._v(" "),a("li",[e._v("scroll: The built-in data set cursor feature of ES for streaming scanning and filtering of data.")]),e._v(" "),a("li",[e._v("_source: contains the original JSON document body that was passed at index time")]),e._v(" "),a("li",[e._v("doc_values: store the same values as the _source but in a column-oriented fashion")]),e._v(" "),a("li",[e._v("keyword: string datatype in ES, but the content not analyzed by analyzer")]),e._v(" "),a("li",[e._v("text: string datatype in ES, the content analyzed by analyzer")])]),e._v(" "),a("h2",{attrs:{id:"how-to-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[e._v("#")]),e._v(" How To Use")]),e._v(" "),a("h3",{attrs:{id:"create-es-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-es-index"}},[e._v("#")]),e._v(" Create ES Index")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PUT test\n{\n   "settings": {\n      "index": {\n         "number_of_shards": "1",\n         "number_of_replicas": "0"\n      }\n   },\n   "mappings": {\n      "doc": { // There is no need to specify the type when creating indexes after ES7.x version, there is one and only type of `_doc`\n         "properties": {\n            "k1": {\n               "type": "long"\n            },\n            "k2": {\n               "type": "date"\n            },\n            "k3": {\n               "type": "keyword"\n            },\n            "k4": {\n               "type": "text",\n               "analyzer": "standard"\n            },\n            "k5": {\n               "type": "float"\n            }\n         }\n      }\n   }\n}\n')])])]),a("h3",{attrs:{id:"add-json-documents-to-es-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-json-documents-to-es-index"}},[e._v("#")]),e._v(" Add JSON documents to ES index")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('POST /_bulk\n{"index":{"_index":"test","_type":"doc"}}\n{ "k1" : 100, "k2": "2020-01-01", "k3": "Trying out Elasticsearch", "k4": "Trying out Elasticsearch", "k5": 10.0}\n{"index":{"_index":"test","_type":"doc"}}\n{ "k1" : 100, "k2": "2020-01-01", "k3": "Trying out Doris", "k4": "Trying out Doris", "k5": 10.0}\n{"index":{"_index":"test","_type":"doc"}}\n{ "k1" : 100, "k2": "2020-01-01", "k3": "Doris On ES", "k4": "Doris On ES", "k5": 10.0}\n{"index":{"_index":"test","_type":"doc"}}\n{ "k1" : 100, "k2": "2020-01-01", "k3": "Doris", "k4": "Doris", "k5": 10.0}\n{"index":{"_index":"test","_type":"doc"}}\n{ "k1" : 100, "k2": "2020-01-01", "k3": "ES", "k4": "ES", "k5": 10.0}\n')])])]),a("h3",{attrs:{id:"create-external-es-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-external-es-table"}},[e._v("#")]),e._v(" Create external ES table")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE EXTERNAL TABLE `test` (\n  `k1` bigint(20) COMMENT "",\n  `k2` datetime COMMENT "",\n  `k3` varchar(20) COMMENT "",\n  `k4` varchar(100) COMMENT "",\n  `k5` float COMMENT ""\n) ENGINE=ELASTICSEARCH // ENGINE must be Elasticsearch\nPROPERTIES (\n"hosts" = "http://192.168.0.1:8200,http://192.168.0.2:8200",\n"index" = "test”,\n"type" = "doc",\n\n"user" = "root",\n"password" = "root"\n);\n')])])]),a("p",[e._v("The following parameters are accepted by ES table:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[e._v("hosts")])]),e._v(" "),a("td",[e._v("ES Cluster Connection Address, maybe one or more node, load-balance is also accepted")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("index")])]),e._v(" "),a("td",[e._v("the related ES index name, alias is supported, and if you use doc_value, you need to use the real name")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("type")])]),e._v(" "),a("td",[e._v("the type for this index, If not specified, "),a("code",[e._v("_doc")]),e._v(" will be used")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("user")])]),e._v(" "),a("td",[e._v("username for ES")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("password")])]),e._v(" "),a("td",[e._v("password for the user")])])])]),e._v(" "),a("ul",[a("li",[e._v("For clusters before 7.x, please pay attention to choosing the correct type when building the table")]),e._v(" "),a("li",[e._v("The authentication method only supports Http Bastic authentication, need to ensure that this user has access to: /_cluster/state/, _nodes/http and other paths and index read permissions;The cluster has not turned on security authentication, and the user name and password do not need to be set")]),e._v(" "),a("li",[e._v("The column names in the Doris table need to exactly match the field names in the ES, and the field types should be as consistent as possible")]),e._v(" "),a("li",[a("strong",[e._v("ENGINE")]),e._v(" must be: "),a("strong",[e._v("Elasticsearch")])])]),e._v(" "),a("h5",{attrs:{id:"filter-to-push-down"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter-to-push-down"}},[e._v("#")]),e._v(" Filter to push down")]),e._v(" "),a("p",[e._v("An important ability of "),a("code",[e._v("Doris On ES")]),e._v(" is the push-down of filter conditions: The filtering conditions are pushed to ES, so that only the data that really meets the conditions will be returned, which can significantly improve query performance and reduce CPU, memory, and IO utilization of Doris and ES")]),e._v(" "),a("p",[e._v("The following operators (Operators) will be optimized to the following ES Query:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("SQL syntax")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("ES 5.x+ syntax")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("=")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("term query")])]),e._v(" "),a("tr",[a("td",[e._v("in")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("terms query")])]),e._v(" "),a("tr",[a("td",[e._v("> , < , >= , ⇐")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("range query")])]),e._v(" "),a("tr",[a("td",[e._v("and")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("bool.filter")])]),e._v(" "),a("tr",[a("td",[e._v("or")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("bool.should")])]),e._v(" "),a("tr",[a("td",[e._v("not")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("bool.must_not")])]),e._v(" "),a("tr",[a("td",[e._v("not in")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("bool.must_not + terms query")])]),e._v(" "),a("tr",[a("td",[e._v("is_not_null")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("exists query")])]),e._v(" "),a("tr",[a("td",[e._v("is_null")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("bool.must_not + exists query")])]),e._v(" "),a("tr",[a("td",[e._v("esquery")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("QueryDSL in ES native json form")])])])]),e._v(" "),a("h5",{attrs:{id:"data-type-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-type-mapping"}},[e._v("#")]),e._v(" Data type mapping")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Doris\\ES")]),e._v(" "),a("th",[e._v("byte")]),e._v(" "),a("th",[e._v("short")]),e._v(" "),a("th",[e._v("integer")]),e._v(" "),a("th",[e._v("long")]),e._v(" "),a("th",[e._v("float")]),e._v(" "),a("th",[e._v("double")]),e._v(" "),a("th",[e._v("keyword")]),e._v(" "),a("th",[e._v("text")]),e._v(" "),a("th",[e._v("date")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("tinyint")]),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("smallint")]),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("int")]),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("bigint")]),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("float")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("double")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("char")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("varchar")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td",[e._v("√")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("date")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("√")])]),e._v(" "),a("tr",[a("td",[e._v("datetime")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("√")])])])]),e._v(" "),a("h3",{attrs:{id:"enable-column-scan-to-optimize-query-speed-enable-docvalue-scan-true"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-column-scan-to-optimize-query-speed-enable-docvalue-scan-true"}},[e._v("#")]),e._v(" Enable column scan to optimize query speed(enable_docvalue_scan=true)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE EXTERNAL TABLE `test` (\n  `k1` bigint(20) COMMENT "",\n  `k2` datetime COMMENT "",\n  `k3` varchar(20) COMMENT "",\n  `k4` varchar(100) COMMENT "",\n  `k5` float COMMENT ""\n) ENGINE=ELASTICSEARCH\nPROPERTIES (\n"hosts" = "http://192.168.0.1:8200,http://192.168.0.2:8200",\n"index" = "test”,\n"type" = "doc",\n"user" = "root",\n"password" = "root",\n\n"enable_docvalue_scan" = "true"\n);\n')])])]),a("p",[e._v("Parameter Description:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[e._v("enable_docvalue_scan")])]),e._v(" "),a("td",[e._v("whether to enable ES/Lucene column storage to get the value of the query field, the default is false")])])])]),e._v(" "),a("p",[e._v("Doris obtains data from ES following the following two principles:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Best effort")]),e._v(": Automatically detect whether the column to be read has column storage enabled (doc_value: true).If all the fields obtained have column storage, Doris will obtain the values ​​of all fields from the column storage(doc_values)")]),e._v(" "),a("li",[a("strong",[e._v("Automatic downgrade")]),e._v(": If the field to be obtained has one or more field that is not have doc_value, the values ​​of all fields will be parsed from the line store "),a("code",[e._v("_source")])])]),e._v(" "),a("h5",{attrs:{id:"advantage："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advantage："}},[e._v("#")]),e._v(" Advantage：")]),e._v(" "),a("p",[e._v("By default, Doris On ES will get all the required columns from the row storage, which is "),a("code",[e._v("_source")]),e._v(", and the storage of "),a("code",[e._v("_source")]),e._v(" is the origin json format document，Inferior to column storage in batch read performance，Especially obvious when only a few columns are needed，When only a few columns are obtained, the performance of docvalue is about ten times that of _source")]),e._v(" "),a("h5",{attrs:{id:"tip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tip"}},[e._v("#")]),e._v(" Tip")]),e._v(" "),a("ol",[a("li",[e._v("Fields of type "),a("code",[e._v("text")]),e._v(" are not column-stored in ES, so if the value of the field to be obtained has a field of type "),a("code",[e._v("text")]),e._v(", it will be automatically downgraded to get from "),a("code",[e._v("_source")])]),e._v(" "),a("li",[e._v("In the case of too many fields obtained ("),a("code",[e._v(">= 25")]),e._v("), the performance of getting field values ​​from "),a("code",[e._v("docvalue")]),e._v(" will be basically the same as getting field values ​​from "),a("code",[e._v("_source")])])]),e._v(" "),a("h3",{attrs:{id:"detect-keyword-type-field-enable-keyword-sniff-true"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detect-keyword-type-field-enable-keyword-sniff-true"}},[e._v("#")]),e._v(" Detect keyword type field(enable_keyword_sniff=true)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE EXTERNAL TABLE `test` (\n  `k1` bigint(20) COMMENT "",\n  `k2` datetime COMMENT "",\n  `k3` varchar(20) COMMENT "",\n  `k4` varchar(100) COMMENT "",\n  `k5` float COMMENT ""\n) ENGINE=ELASTICSEARCH\nPROPERTIES (\n"hosts" = "http://192.168.0.1:8200,http://192.168.0.2:8200",\n"index" = "test”,\n"type" = "doc",\n"user" = "root",\n"password" = "root",\n\n"enable_keyword_sniff" = "true"\n);\n')])])]),a("p",[e._v("Parameter Description：")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[e._v("enable_keyword_sniff")])]),e._v(" "),a("td",[e._v("Whether to detect the string type ("),a("strong",[e._v("text")]),e._v(") "),a("code",[e._v("fields")]),e._v(" in ES to obtain additional not analyzed ("),a("strong",[e._v("keyword")]),e._v(") field name(multi-fields mechanism)")])])])]),e._v(" "),a("p",[e._v("You can directly import data without creating an index. At this time, ES will automatically create a new index in ES, For a field of type string, a field of type "),a("code",[e._v("text")]),e._v(" and field of type "),a("code",[e._v("keyword")]),e._v(" will be created meantime, This is the multi-fields feature of ES, mapping is as follows：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"k4": {\n   "type": "text",\n   "fields": {\n      "keyword": {   \n         "type": "keyword",\n         "ignore_above": 256\n      }\n   }\n}\n')])])]),a("p",[e._v("When performing conditional filtering on k4, for example =，Doris On ES will convert the query to ES's TermQuery")]),e._v(" "),a("p",[e._v("SQL filter：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('k4 = "Doris On ES"\n')])])]),a("p",[e._v("The query DSL converted into ES is：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"term" : {\n    "k4": "Doris On ES"\n\n}\n')])])]),a("p",[e._v("Because the first field type of k4 is "),a("code",[e._v("text")]),e._v(", when data is imported, it will perform word segmentation processing according to the word segmentator set by k4 (if it is not set, it is the standard word segmenter) to get three Term of doris, on, and es, as follows ES analyze API analysis：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('POST /_analyze\n{\n  "analyzer": "standard",\n  "text": "Doris On ES"\n}\n')])])]),a("p",[e._v("The result of analyzed is：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n   "tokens": [\n      {\n         "token": "doris",\n         "start_offset": 0,\n         "end_offset": 5,\n         "type": "<ALPHANUM>",\n         "position": 0\n      },\n      {\n         "token": "on",\n         "start_offset": 6,\n         "end_offset": 8,\n         "type": "<ALPHANUM>",\n         "position": 1\n      },\n      {\n         "token": "es",\n         "start_offset": 9,\n         "end_offset": 11,\n         "type": "<ALPHANUM>",\n         "position": 2\n      }\n   ]\n}\n')])])]),a("p",[e._v("The query uses：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"term" : {\n    "k4": "Doris On ES"\n}\n')])])]),a("p",[e._v("This term does not match any term in the dictionary，and will not return any results，enable "),a("code",[e._v("enable_keyword_sniff: true")]),e._v(" will automatically convert "),a("code",[e._v('k4 = "Doris On ES"')]),e._v(" into "),a("code",[e._v('k4.keyword = "Doris On ES"')]),e._v("to exactly match SQL semantics，The converted ES query DSL is:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"term" : {\n    "k4.keyword": "Doris On ES"\n}\n')])])]),a("p",[e._v("The type of "),a("code",[e._v("k4.keyword")]),e._v(" is "),a("code",[e._v("keyword")]),e._v(", and writing data into ES is a complete term, so it can be matched")]),e._v(" "),a("h3",{attrs:{id:"query-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-usage"}},[e._v("#")]),e._v(" Query usage")]),e._v(" "),a("p",[e._v("After create the ES external table in Doris, there is no difference except that the data model (rollup, pre-aggregation, materialized view, etc.) with other table in Doris")]),e._v(" "),a("h4",{attrs:{id:"basic-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage"}},[e._v("#")]),e._v(" Basic usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from es_table where k1 > 1000 and k3 ='term' or k4 like 'fu*z_'\n")])])]),a("h4",{attrs:{id:"extended-esquery-field-querydsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended-esquery-field-querydsl"}},[e._v("#")]),e._v(" Extended esquery(field, QueryDSL)")]),e._v(" "),a("p",[e._v("Through the "),a("code",[e._v("esquery(field, QueryDSL)")]),e._v(" function, some queries that cannot be expressed in sql, such as match_phrase, geoshape, etc., are pushed down to the ES for filtering. The first column name parameter of "),a("code",[e._v("esquery")]),e._v(" is used to associate the "),a("code",[e._v("index")]),e._v(", the second This parameter is the basic JSON expression of ES's "),a("code",[e._v("Query DSL")]),e._v(", which is contained in curly braces "),a("code",[e._v("{}")]),e._v(", and there can be only one root key of json, such as match_phrase, geo_shape, bool, etc.\nMatch query:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('select * from es_table where esquery(k4, \'{\n        "match": {\n           "k4": "doris on es"\n        }\n    }\');\n')])])]),a("p",[e._v("Geo related queries:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('select * from es_table where esquery(k4, \'{\n      "geo_shape": {\n         "location": {\n            "shape": {\n               "type": "envelope",\n               "coordinates": [\n                  [\n                     13,\n                     53\n                  ],\n                  [\n                     14,\n                     52\n                  ]\n               ]\n            },\n            "relation": "within"\n         }\n      }\n   }\');\n')])])]),a("p",[e._v("Bool query:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('select * from es_table where esquery(k4, \' {\n         "bool": {\n            "must": [\n               {\n                  "terms": {\n                     "k1": [\n                        11,\n                        12\n                     ]\n                  }\n               },\n               {\n                  "terms": {\n                     "k2": [\n                        100\n                     ]\n                  }\n               }\n            ]\n         }\n      }\');\n')])])]),a("h2",{attrs:{id:"principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+----------------------------------------------+\n|                                              |\n| Doris      +------------------+              |\n|            |       FE         +--------------+-------+\n|            |                  |  Request Shard Location\n|            +--+-------------+-+              |       |\n|               ^             ^                |       |\n|               |             |                |       |\n|  +-------------------+ +------------------+  |       |\n|  |            |      | |    |             |  |       |\n|  | +----------+----+ | | +--+-----------+ |  |       |\n|  | |      BE       | | | |      BE      | |  |       |\n|  | +---------------+ | | +--------------+ |  |       |\n+----------------------------------------------+       |\n   |        |          | |        |         |          |\n   |        |          | |        |         |          |\n   |    HTTP SCROLL    | |    HTTP SCROLL   |          |\n+-----------+---------------------+------------+       |\n|  |        v          | |        v         |  |       |\n|  | +------+--------+ | | +------+-------+ |  |       |\n|  | |               | | | |              | |  |       |\n|  | |   DataNode    | | | |   DataNode   +<-----------+\n|  | |               | | | |              | |  |       |\n|  | |               +<--------------------------------+\n|  | +---------------+ | | |--------------| |  |       |\n|  +-------------------+ +------------------+  |       |\n|   Same Physical Node                         |       |\n|                                              |       |\n|           +-----------------------+          |       |\n|           |                       |          |       |\n|           |      MasterNode       +<-----------------+\n| ES        |                       |          |\n|           +-----------------------+          |\n+----------------------------------------------+\n\n\n")])])]),a("ol",[a("li",[a("p",[e._v("FE requests the hosts specified by the table to obtain node‘s HTTP port, shards location of the index. If the request fails, it will traverse the host list sequentially until it succeeds or fails completely.")])]),e._v(" "),a("li",[a("p",[e._v("When querying, the query plan will be generated and sent to the corresponding BE node according to some node information obtained by FE and metadata information of index.")])]),e._v(" "),a("li",[a("p",[e._v("The BE node requests locally deployed ES nodes in accordance with the "),a("code",[e._v("proximity principle")]),e._v(". The BE receives data concurrently from each fragment of ES index in the "),a("code",[e._v("HTTP Scroll")]),e._v(" mode.")])]),e._v(" "),a("li",[a("p",[e._v("After calculating the result, return it to client")])])]),e._v(" "),a("h2",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),a("h3",{attrs:{id:"suggestions-for-using-date-type-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suggestions-for-using-date-type-fields"}},[e._v("#")]),e._v(" Suggestions for using Date type fields")]),e._v(" "),a("p",[e._v("The use of Datetype fields in ES is very flexible, but in Doris On ES, if the type of the Date type field is not set properly, it will cause the filter condition can not be pushed down.")]),e._v(" "),a("p",[e._v("When creating an index, do maximum format compatibility with the setting of the Date type format:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(' "dt": {\n     "type": "date",\n     "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"\n }\n')])])]),a("p",[e._v("When creating this field in Doris, it is recommended to set it to "),a("code",[e._v("date")]),e._v(" or "),a("code",[e._v("datetime")]),e._v(", and it can also be set to "),a("code",[e._v("varchar")]),e._v(" type. The following SQL statements can be used to directly push the filter condition down to ES")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from doe where k2 > '2020-06-21';\n\nselect * from doe where k2 < '2020-06-21 12:00:00'; \n\nselect * from doe where k2 < 1593497011; \n\nselect * from doe where k2 < now();\n\nselect * from doe where k2 < date_format(now(), '%Y-%m-%d');\n")])])]),a("p",[a("code",[e._v("Notice")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("If you don’t set the format for the time type field In ES, the default format for Date-type field is")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("strict_date_optional_time||epoch_millis\n")])])]),a("ul",[a("li",[e._v("If the date field indexed into ES is unix timestamp, it needs to be converted to "),a("code",[e._v("ms")]),e._v(", and the internal timestamp of ES is processed according to "),a("code",[e._v("ms")]),e._v(" unit, otherwise Doris On ES will display wrong column data")])]),e._v(" "),a("h3",{attrs:{id:"fetch-es-metadata-field-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch-es-metadata-field-id"}},[e._v("#")]),e._v(" Fetch ES metadata field "),a("code",[e._v("_id")])]),e._v(" "),a("p",[e._v("When indexing documents without specifying "),a("code",[e._v("_id")]),e._v(", ES will assign a globally unique "),a("code",[e._v("_id")]),e._v(" field  to each document. Users can also specify a "),a("code",[e._v("_id")]),e._v(" with special represent some business meaning for the document when indexing; if needed, Doris On ES can get the value of this field by adding the "),a("code",[e._v("_id")]),e._v(" field of type "),a("code",[e._v("varchar")]),e._v(" when creating the ES external table")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE EXTERNAL TABLE `doe` (\n  `_id` varchar COMMENT "",\n  `city`  varchar COMMENT ""\n) ENGINE=ELASTICSEARCH\nPROPERTIES (\n"hosts" = "http://127.0.0.1:8200",\n"user" = "root",\n"password" = "root",\n"index" = "doe",\n"type" = "doc"\n}\n')])])]),a("p",[a("code",[e._v("Notice")]),e._v(":")]),e._v(" "),a("ol",[a("li",[e._v("The filtering condition of the "),a("code",[e._v("_id")]),e._v(" field only supports two types: "),a("code",[e._v("=")]),e._v(" and "),a("code",[e._v("in")])]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("_id")]),e._v(" field can only be of type "),a("code",[e._v("varchar")])])]),e._v(" "),a("h2",{attrs:{id:"q-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[e._v("#")]),e._v(" Q&A")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("ES Version Requirements")]),e._v(" "),a("p",[e._v("The main version of ES is larger than 5. The scanning mode of ES data before 2. X and after 5. x is different. At present, the scanning mode of ES data after 5. x is supported.")])]),e._v(" "),a("li",[a("p",[e._v("Does ES Cluster Support X-Pack Authentication")]),e._v(" "),a("p",[e._v("Support all ES clusters using HTTP Basic authentication")])]),e._v(" "),a("li",[a("p",[e._v("Some queries are much slower than requesting ES")]),e._v(" "),a("p",[e._v("Yes, for example, query related to _count, etc., the ES internal will directly read the number of documents that meet the requirements of the relevant metadata, without the need to filter the real data.")])]),e._v(" "),a("li",[a("p",[e._v("Whether the aggregation operation can be pushed down")]),e._v(" "),a("p",[e._v("At present, Doris On ES does not support push-down operations such as sum, avg, min/max, etc., all documents satisfying the conditions are obtained from the ES in batch flow, and then calculated in Doris")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);