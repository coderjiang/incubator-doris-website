(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{599:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hll"}},[t._v("#")]),t._v(" HLL")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("HLL is an engineering implementation based on the HyperLogLog algorithm. It is used to store the intermediate results of the HyperLog calculation process. It can only be used as the value column type of the table.\nBy aggregating to reduce the amount of data continuously, in order to achieve the purpose of speeding up the query, based on which an estimated result, the error is about 1%.\nThe HLL column is generated by other columns or data in the imported data. When imported, the hll_hash function is used to specify which column in the data is used to generate the HLL column.\nIt is often used to replace count distinct, and to quickly calculate UV in business by combining rollup.")]),t._v(" "),a("p",[t._v("The correlation function:")]),t._v(" "),a("p",[t._v("TOTAL UNION\nThis function is an aggregation function, which is used to calculate the cardinality estimation of all data satisfying the conditions. This function can also be used to analyze functions. It only supports the default window and does not support the window clause.")]),t._v(" "),a("p",[t._v("Coach L.u RAW AGG\nThis function is an aggregation function that aggregates HLL type fields and returns HLL type.")]),t._v(" "),a("p",[t._v("HLL_CARDINALITY(hll)\nThis function is used to estimate the cardinality of a single HLL sequence")]),t._v(" "),a("p",[t._v("HLL_HASH(column_name)\nGenerate HLL column types for insert or import, see the instructions for the use of imports")]),t._v(" "),a("p",[t._v("EMPTY_HLL()\nGenerate empty HLL column types for insert or import, see the instructions for the use of imports")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("First create a table with HLL columns\ncreate table test(\ndt date,\nid int,\nname char(10),\nProvince of char (10),\nThe char (1),\nthe European Union,\nEuropean Union\ndistributed by hash(id) buckets 32;")])]),t._v(" "),a("li",[a("p",[t._v("Import data. See help curl for the way you import it.")]),t._v(" "),a("p",[t._v("A. Generate HLL columns using columns in tables")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(' curl --location-trusted -uname:password -T data -H "label:load_1" -H "columns:dt, id, name, province, os, set1=hll_hash(id), set2=hll_hash(name)"\n     http://host/api/test_db/test/_stream_load\n')])])]),a("p",[t._v("B. Generate HLL columns using a column in the data")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(' curl --location-trusted -uname:password -T data -H "label:load_1" -H "columns:dt, id, name, province, sex, cuid, os, set1=hll_hash(cuid), set2=hll_hash(os)"\n     http://host/api/test_db/test/_stream_load\n')])])])]),t._v(" "),a("li",[a("p",[t._v("There are three common ways of aggregating data: (without aggregating the base table directly, the speed may be similar to that of using NDV directly)")])])]),t._v(" "),a("p",[t._v("A. Create a rollup that allows HLL columns to generate aggregation.\nalter table test add rollup test_rollup(dt, set1);")]),t._v(" "),a("p",[t._v("B. Create another table dedicated to computing uv, and insert data)")]),t._v(" "),a("p",[t._v("create table test_uv(\ndt date,\nuv_set hll hll_union)\ndistributed by hash(id) buckets 32;")]),t._v(" "),a("p",[t._v("insert into test_uv select dt, set1 from test;")]),t._v(" "),a("p",[t._v("C. Create another table dedicated to computing uv, then insert and generate HLL columns from other non-hll columns of test through hll_hash")]),t._v(" "),a("p",[t._v("create table test_uv(\ndt date,\nid_set hll hll_union)\ndistributed by hash(id) buckets 32;")]),t._v(" "),a("p",[t._v("insert into test_uv select dt, hll_hash(id) from test;")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Query, HLL column is not allowed to query its original value directly, it can be queried by matching functions.")])]),t._v(" "),a("p",[t._v("a. 27714; 24635; uv\nselect HLL_UNION_AGG(uv_set) from test_uv;")]),t._v(" "),a("p",[t._v("B. Seek every day's UV\nselect dt, HLL_CARDINALITY(uv_set) from test_uv;")]),t._v(" "),a("p",[t._v("C. Find the aggregate value of Set1 in the test table\nselect dt, HLL_CARDINALITY(uv) from (select dt, HLL_RAW_AGG(set1) as uv from test group by dt) tmp;\nselect dt, HLL_UNION_AGG(set1) as uv from test group by dt;")]),t._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("HLL")])])}),[],!1,null,null,null);e.default=n.exports}}]);