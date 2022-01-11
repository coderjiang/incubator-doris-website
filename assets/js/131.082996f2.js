(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{583:function(t,i,e){"use strict";e.r(i);var a=e(55),o=Object(a.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"statistics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#statistics"}},[t._v("#")]),t._v(" Statistics")]),t._v(" "),e("p",[t._v("A total of 37 authors have submitted 82 Commits. Thanks to the following authors for their contributions (Github IDs, in alphabetical order).")]),t._v(" "),e("p",[t._v("BiteTheDDDDt, CalvinKirs, EmmyMiao87, GoGoWen, HappenLee, Henry2SS, JNSimba, aihai, caiconghui, dh-cloud, gaodayue, hf200012, jackwener, liutang123, luozenglin, luzhijing, morningman, pengxiangyu, qidaye, qzsee, spaces-X, tianhui5, tinkerrrr, wangshuo128, wayofeng, weizuo93, whutpencil, xiedeyantu, xinyiZzz, xtr1993, xuzifu666, yangzhg, yjant, zbtzbtzbt, zenoyang, zhangstar333, zhengshiJ")]),t._v(" "),e("p",[t._v("In the last 3 weeks, 15882 new lines of code were added and 6966 lines of code were deleted.")]),t._v(" "),e("h2",{attrs:{id:"main-progress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#main-progress"}},[t._v("#")]),t._v(" Main progress")]),t._v(" "),e("h3",{attrs:{id:"new-features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[t._v("#")]),t._v(" New features")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7276")]),t._v(" "),e("p",[t._v("Support return binary data of HLL/BITMAP column directly for external parsing.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7255")]),t._v(" "),e("p",[t._v("Support for Lateral View column to row transitions. It is convenient to expand bitmap, stirng or json array data into multiple rows for subsequent processing.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7379")]),t._v(" "),e("p",[e("code",[t._v("bitmap_union")]),t._v(" and "),e("code",[t._v("bitmap_intersect")]),t._v(" support multiple bitmap arguments. This is to improve the efficiency of intersecting and merging multiple bitmaps.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7464")]),t._v(" "),e("p",[t._v("Support SM3/SM4 national secret algorithm functions.")])])]),t._v(" "),e("h3",{attrs:{id:"work-in-progess"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#work-in-progess"}},[t._v("#")]),t._v(" Work-in-Progess")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7098")]),t._v(" "),e("p",[t._v("Support cold data dumping to object storage (under development).")])])]),t._v(" "),e("h3",{attrs:{id:"bug-fixes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes"}},[t._v("#")]),t._v(" Bug Fixes")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7383")]),t._v(" "),e("p",[t._v("Fix Segment Cache not handling expired cache correctly in some cases.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7373")]),t._v(" "),e("p",[t._v("Fix several bugs in BE side constant folding code.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7371")]),t._v(" "),e("p",[t._v("Fix a problem with Broker Load scheduling logic that could cause tasks to not be scheduled in some cases.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7375")]),t._v(" "),e("p",[t._v("Fix an issue where some logical view queries cause SQL Cache not to be updated.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7407")]),t._v(" "),e("p",[t._v("Optimize the logic of SQL block rule so that it only works for select statements.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7421")]),t._v(" "),e("p",[t._v("Fix an incorrect result of round() function.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7362")]),t._v(" "),e("p",[t._v("Fix a logical error when rewriting the count function for materialized views in some cases.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7495")]),t._v(" "),e("p",[t._v("Fix an alias parsing error in some queries under case-insensitive table name setting.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7440")]),t._v(" "),e("p",[t._v("Fix a bug that bloom filter handles empty strings incorrectly.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7411")]),t._v(" "),e("p",[t._v("Fix an issue where Grouping Set function does not handle expressions correctly in some cases.")])])]),t._v(" "),e("h3",{attrs:{id:"feature-improvements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feature-improvements"}},[t._v("#")]),t._v(" Feature improvements")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7232")]),t._v(" "),e("p",[t._v("Flink-Connector supports reading Doris data concurrently.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7348")]),t._v(" "),e("p",[t._v("Optimize the efficiency of reading Unique Key tables at Reader level.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7454")]),t._v(" "),e("p",[t._v("Optimize the memory overhead of BE when importing large amounts of non-compliant data.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7096")]),t._v(" "),e("p",[t._v("Query Optimizer supports more predicate passing optimizations.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7435")]),t._v(" "),e("p",[t._v("Optimize Flink-Connector's BE selection logic to select only surviving BE nodes.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7493")]),t._v(" "),e("p",[t._v("Fix some default parameters of brpc to reduce the probability of BRPC network transmission errors.")])]),t._v(" "),e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7434")]),t._v(" "),e("p",[t._v("Refactor the query optimizer partition cropping logic to support partition cropping capabilities for more predicate conditions.")])])]),t._v(" "),e("h3",{attrs:{id:"other"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[t._v("#")]),t._v(" Other")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("https://github.com/apache/incubator-doris/pull/7536")]),t._v(" "),e("p",[t._v("Upgrading Log4j to 2.7.1 has fixed security vulnerability CVE-2021-44832")])])])])}),[],!1,null,null,null);i.default=o.exports}}]);