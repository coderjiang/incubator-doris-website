(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{581:function(e,t,r){"use strict";r.r(t);var n=r(55),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"apache-doris-incubating-0-15-0-release"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apache-doris-incubating-0-15-0-release"}},[e._v("#")]),e._v(" Apache Doris(Incubating) 0.15.0 Release")]),e._v(" "),r("p",[e._v("Dear Community, After months of polishing, we are pleased to announce the release of Apache Doris(Incubating) on November 29, 2021! Nearly 700 optimizations and fixes have been submitted by 99 contributors to Apache Doris, and we'd like to express our sincere gratitude to all of them!")]),e._v(" "),r("p",[e._v("In the 0.15.0 Release, we have added many new features to optimize Apache Doris's query performance, ease of use, and stability: a new resource division and isolation feature that allows users to divide BE nodes in a cluster into resource groups by means of resource tags, enabling unified management of online and offline services and resource isolation; the addition of Runtime Filter and Join Reorder functions have been added to significantly improve the query efficiency of multi-table Join scenarios, with a 2-10 times performance improvement under the Star Schema Benchmark test data set; new import method Binlog Load enables Doris to incrementally synchronize the CDC of data update operations in MySQL; support for String column type The new import method, Binlog Load, allows Doris to incrementally synchronize the CDC of MySQL for data update operations; supports String column type with a maximum length of 2GB; supports List partitioning to create partitions by enumerating values; supports Update statements on the Unique Key model; Spark-Doris-Connector supports data writing to Doris ... ...and many more important features, welcome to download and use.")]),e._v(" "),r("p",[e._v("We welcome you to contact us via GitHub Discussion or the Dev email group if you have any questions during use, and we look forward to your participation in community discussions and building.")]),e._v(" "),r("h2",{attrs:{id:"high-lights"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#high-lights"}},[e._v("#")]),e._v(" High Lights")]),e._v(" "),r("h3",{attrs:{id:"resource-segregation-and-isolation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resource-segregation-and-isolation"}},[e._v("#")]),e._v(" Resource Segregation and Isolation")]),e._v(" "),r("p",[e._v("You can divide BE nodes in a Doris cluster into resource groups by using resource tags, allowing you to manage online and offline operations and isolate resources at the node level.\nYou can also control the resource overhead of individual queries by limiting the CPU and memory overhead and complexity of individual query tasks, thus reducing the resource hogging problem between different queries.")]),e._v(" "),r("h3",{attrs:{id:"performance-optimization"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#performance-optimization"}},[e._v("#")]),e._v(" Performance Optimization")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("The Runtime Filter feature can significantly improve query efficiency in most Join scenarios by using the Join Key column condition of the right table in the Join algorithm to filter the data in the left table. For example, you can get 2-10 times performance improvement under Star Schema Benchmark (TPCH's streamlined test set).")])]),e._v(" "),r("li",[r("p",[e._v("The Join Reorder feature can automatically help adjust the order of joins in SQL by using a cost model to help achieve optimal join efficiency.\nIt can be enabled via the session variable "),r("code",[e._v("set enable_cost_based_join_reorder=true")]),e._v(".")])])]),e._v(" "),r("h3",{attrs:{id:"new-features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[e._v("#")]),e._v(" New features")]),e._v(" "),r("ul",[r("li",[e._v("Support synchronizing MySQL binlog data directly to Canal Server.")]),e._v(" "),r("li",[e._v("Support String column type, support up to 2GB.")]),e._v(" "),r("li",[e._v("Support List partitioning, you can create partitions for enumerated values.")]),e._v(" "),r("li",[e._v("Support transactional Insert statement function. You can import data in bulk by begin ; insert ; insert;, ... You can import data in bulk by begin ; insert ; insert ;, ... ;.")]),e._v(" "),r("li",[e._v("Support Update statement function on Unique Key model. You can execute Update Set where statement on Unique Key model table.")]),e._v(" "),r("li",[e._v("Support SQL blocking list function. You can block some SQL execution by regular, hash value matching, etc.")]),e._v(" "),r("li",[e._v("Support LDAP login authentication.")])]),e._v(" "),r("h3",{attrs:{id:"extended-features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#extended-features"}},[e._v("#")]),e._v(" Extended Features")]),e._v(" "),r("ul",[r("li",[e._v("Support Flink-Doris-Connector.")]),e._v(" "),r("li",[e._v("Support for DataX doriswriter plugin.")]),e._v(" "),r("li",[e._v("Spark-Doris-Connector support for data writing to Doris.")])]),e._v(" "),r("h2",{attrs:{id:"feature-optimization"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#feature-optimization"}},[e._v("#")]),e._v(" Feature Optimization")]),e._v(" "),r("h3",{attrs:{id:"query"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[e._v("#")]),e._v(" Query")]),e._v(" "),r("ul",[r("li",[e._v("Support for computing all constant expressions in the SQL query planning phase using BE's functional computing power.")])]),e._v(" "),r("h3",{attrs:{id:"import"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[e._v("#")]),e._v(" Import")]),e._v(" "),r("ul",[r("li",[e._v("Support for specifying multi-byte row separators or invisible separators when importing text format files.")]),e._v(" "),r("li",[e._v("Supports importing compressed format files via Stream Load.")]),e._v(" "),r("li",[e._v("Stream Load supports importing Json data in multi-line format.")])]),e._v(" "),r("h3",{attrs:{id:"export"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[e._v("#")]),e._v(" Export")]),e._v(" "),r("ul",[r("li",[e._v("Support Export export function to specify where filter. Supports exporting files with multi-byte row separators. Support export to local files.")]),e._v(" "),r("li",[e._v("Export export function supports exporting only specified columns.")]),e._v(" "),r("li",[e._v("Supports exporting the result set to local disk via outfile statement and writing the exported marker file after exporting.")])]),e._v(" "),r("h3",{attrs:{id:"ease-of-use"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ease-of-use"}},[e._v("#")]),e._v(" Ease of use")]),e._v(" "),r("ul",[r("li",[e._v("Dynamic partitioning function supports creating and keeping specified historical partitions, and supports automatic hot and cold data migration settings.")]),e._v(" "),r("li",[e._v("Supports displaying queries, imported schedules and Profiles using a visual tree structure at the command line.")]),e._v(" "),r("li",[e._v("Support to record and view Stream Load operation logs.")]),e._v(" "),r("li",[e._v("When consuming Kafka data via Routine Load, you can specify the time point for consumption.")]),e._v(" "),r("li",[e._v("Supports exporting Routine Load creation statements by show create routine load function.")]),e._v(" "),r("li",[e._v("Support to start and stop all Routine Load jobs with one click by pause/resume all routine load command.")]),e._v(" "),r("li",[e._v("Supports modifying the Broker List and Topic of Routine Load by alter routine load statement.")]),e._v(" "),r("li",[e._v("Support create table as select function.")]),e._v(" "),r("li",[e._v("Support modify column comments and table comments by alter table command.")]),e._v(" "),r("li",[e._v("show tablet status to add table creation time and data update time.")]),e._v(" "),r("li",[e._v("Support show data skew command to check the data volume distribution of a table to troubleshoot data skewing problems.")]),e._v(" "),r("li",[e._v("Support show/clean trash command to check the disk occupation of BE file recycle bin and clear it actively.")]),e._v(" "),r("li",[e._v("Support show view statement to show which views a table is referenced by.")])]),e._v(" "),r("h3",{attrs:{id:"new-functions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-functions"}},[e._v("#")]),e._v(" New functions")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("bitmap_min")]),e._v(", "),r("code",[e._v("bit_length")])]),e._v(" "),r("li",[r("code",[e._v("yearweek")]),e._v(", "),r("code",[e._v("week")]),e._v(", "),r("code",[e._v("makedate")])]),e._v(" "),r("li",[r("code",[e._v("percentile")]),e._v(" exact percentile function")]),e._v(" "),r("li",[r("code",[e._v("json_array")]),e._v(", "),r("code",[e._v("json_object")]),e._v(", "),r("code",[e._v("json_quote")])]),e._v(" "),r("li",[e._v("Support for creating custom public keys for the "),r("code",[e._v("AES_ENCRYPT")]),e._v(" and "),r("code",[e._v("AES_DECRYPT")]),e._v(" functions.")]),e._v(" "),r("li",[e._v("Support for creating function aliases to combine multiple functions by "),r("code",[e._v("create alias function")]),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"other"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[e._v("#")]),e._v(" Other")]),e._v(" "),r("ul",[r("li",[e._v("Support for accessing the ES exterior of the SSL connection protocol.")]),e._v(" "),r("li",[e._v("Support specifying the number of hotspot partitions in the dynamic partition property, which will be stored in SSD disks.")]),e._v(" "),r("li",[e._v("Support importing Json format data via Broker Load.")]),e._v(" "),r("li",[e._v("Supports accessing HDFS directly through libhdfs3 library for data import and export without the Broker process.")]),e._v(" "),r("li",[e._v("select into outfile function supports exporting Parquet file format and parallel export.")]),e._v(" "),r("li",[e._v("ODBC external table support for SQLServer.")])]),e._v(" "),r("h2",{attrs:{id:"致谢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#致谢"}},[e._v("#")]),e._v(" 致谢")]),e._v(" "),r("p",[e._v("The release of Apache Doris (incubating) 0.15.0 Release is made possible by the support of all community users. We would like to thank all the community contributors who participated in the design, development, testing, and discussion of the release, namely.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/924060929",target:"_blank",rel:"noopener noreferrer"}},[e._v("@924060929"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/acelyc111",target:"_blank",rel:"noopener noreferrer"}},[e._v("@acelyc111"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Aimiyoo",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Aimiyoo"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/amosbird",target:"_blank",rel:"noopener noreferrer"}},[e._v("@amosbird"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/arthur-zhang",target:"_blank",rel:"noopener noreferrer"}},[e._v("@arthur-zhang"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/azurenake",target:"_blank",rel:"noopener noreferrer"}},[e._v("@azurenake"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/BiteTheDDDDt",target:"_blank",rel:"noopener noreferrer"}},[e._v("@BiteTheDDDDt"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/caiconghui",target:"_blank",rel:"noopener noreferrer"}},[e._v("@caiconghui"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/caneGuy",target:"_blank",rel:"noopener noreferrer"}},[e._v("@caneGuy"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/caoliang-web",target:"_blank",rel:"noopener noreferrer"}},[e._v("@caoliang-web"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ccoffline",target:"_blank",rel:"noopener noreferrer"}},[e._v("@ccoffline"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/chaplinthink",target:"_blank",rel:"noopener noreferrer"}},[e._v("@chaplinthink"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/chovy-3012",target:"_blank",rel:"noopener noreferrer"}},[e._v("@chovy-3012"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ChPi",target:"_blank",rel:"noopener noreferrer"}},[e._v("@ChPi"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/copperybean",target:"_blank",rel:"noopener noreferrer"}},[e._v("@copperybean"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/crazyleeyang",target:"_blank",rel:"noopener noreferrer"}},[e._v("@crazyleeyang"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/dh-cloud",target:"_blank",rel:"noopener noreferrer"}},[e._v("@dh-cloud"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/DinoZhang",target:"_blank",rel:"noopener noreferrer"}},[e._v("@DinoZhang"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/dixingxing0",target:"_blank",rel:"noopener noreferrer"}},[e._v("@dixingxing0"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/dohongdayi",target:"_blank",rel:"noopener noreferrer"}},[e._v("@dohongdayi"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/e0c9",target:"_blank",rel:"noopener noreferrer"}},[e._v("@e0c9"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/EmmyMiao87",target:"_blank",rel:"noopener noreferrer"}},[e._v("@EmmyMiao87"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/eyesmoons",target:"_blank",rel:"noopener noreferrer"}},[e._v("@eyesmoons"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/francisoliverlee",target:"_blank",rel:"noopener noreferrer"}},[e._v("@francisoliverlee"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Gabriel39",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Gabriel39"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/gaodayue",target:"_blank",rel:"noopener noreferrer"}},[e._v("@gaodayue"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/GoGoWen",target:"_blank",rel:"noopener noreferrer"}},[e._v("@GoGoWen"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/HappenLee",target:"_blank",rel:"noopener noreferrer"}},[e._v("@HappenLee"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/harveyyue",target:"_blank",rel:"noopener noreferrer"}},[e._v("@harveyyue"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Henry2SS",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Henry2SS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/hf200012",target:"_blank",rel:"noopener noreferrer"}},[e._v("@hf200012"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/huangmengbin",target:"_blank",rel:"noopener noreferrer"}},[e._v("@huangmengbin"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/huozhanfeng",target:"_blank",rel:"noopener noreferrer"}},[e._v("@huozhanfeng"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/huzk8",target:"_blank",rel:"noopener noreferrer"}},[e._v("@huzk8"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/hxianshun",target:"_blank",rel:"noopener noreferrer"}},[e._v("@hxianshun"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ikaruga4600",target:"_blank",rel:"noopener noreferrer"}},[e._v("@ikaruga4600"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/JameyWoo",target:"_blank",rel:"noopener noreferrer"}},[e._v("@JameyWoo"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Jennifer88huang",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Jennifer88huang"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/JinLiOnline",target:"_blank",rel:"noopener noreferrer"}},[e._v("@JinLiOnline"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/jinyuanlu",target:"_blank",rel:"noopener noreferrer"}},[e._v("@jinyuanlu"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/JNSimba",target:"_blank",rel:"noopener noreferrer"}},[e._v("@JNSimba"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/killxdcj",target:"_blank",rel:"noopener noreferrer"}},[e._v("@killxdcj"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/kuncle",target:"_blank",rel:"noopener noreferrer"}},[e._v("@kuncle"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/liutang123",target:"_blank",rel:"noopener noreferrer"}},[e._v("@liutang123"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/luozenglin",target:"_blank",rel:"noopener noreferrer"}},[e._v("@luozenglin"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/luzhijing",target:"_blank",rel:"noopener noreferrer"}},[e._v("@luzhijing"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/MarsXDM",target:"_blank",rel:"noopener noreferrer"}},[e._v("@MarsXDM"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/mh-boy",target:"_blank",rel:"noopener noreferrer"}},[e._v("@mh-boy"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/mk8310",target:"_blank",rel:"noopener noreferrer"}},[e._v("@mk8310"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/morningman",target:"_blank",rel:"noopener noreferrer"}},[e._v("@morningman"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Myasuka",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Myasuka"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nimuyuhan",target:"_blank",rel:"noopener noreferrer"}},[e._v("@nimuyuhan"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/pan3793",target:"_blank",rel:"noopener noreferrer"}},[e._v("@pan3793"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PatrickNicholas",target:"_blank",rel:"noopener noreferrer"}},[e._v("@PatrickNicholas"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/pengxiangyu",target:"_blank",rel:"noopener noreferrer"}},[e._v("@pengxiangyu"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/pierre94",target:"_blank",rel:"noopener noreferrer"}},[e._v("@pierre94"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/qidaye",target:"_blank",rel:"noopener noreferrer"}},[e._v("@qidaye"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/qzsee",target:"_blank",rel:"noopener noreferrer"}},[e._v("@qzsee"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/shiyi23",target:"_blank",rel:"noopener noreferrer"}},[e._v("@shiyi23"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/smallhibiscus",target:"_blank",rel:"noopener noreferrer"}},[e._v("@smallhibiscus"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/songenjie",target:"_blank",rel:"noopener noreferrer"}},[e._v("@songenjie"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/spaces-X",target:"_blank",rel:"noopener noreferrer"}},[e._v("@spaces-X"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/stalary",target:"_blank",rel:"noopener noreferrer"}},[e._v("@stalary"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/stdpain",target:"_blank",rel:"noopener noreferrer"}},[e._v("@stdpain"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Stephen-Robin",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Stephen-Robin"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Sunt-ing",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Sunt-ing"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Taaang",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Taaang"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/tarepanda1024",target:"_blank",rel:"noopener noreferrer"}},[e._v("@tarepanda1024"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/tianhui5",target:"_blank",rel:"noopener noreferrer"}},[e._v("@tianhui5"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/tinkerrrr",target:"_blank",rel:"noopener noreferrer"}},[e._v("@tinkerrrr"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/TobKed",target:"_blank",rel:"noopener noreferrer"}},[e._v("@TobKed"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ucasfl",target:"_blank",rel:"noopener noreferrer"}},[e._v("@ucasfl"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Userwhite",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Userwhite"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/vinson0526",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vinson0526"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wangbo",target:"_blank",rel:"noopener noreferrer"}},[e._v("@wangbo"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wangliansong",target:"_blank",rel:"noopener noreferrer"}},[e._v("@wangliansong"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wangshuo128",target:"_blank",rel:"noopener noreferrer"}},[e._v("@wangshuo128"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/weajun",target:"_blank",rel:"noopener noreferrer"}},[e._v("@weajun"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/weihongkai2008",target:"_blank",rel:"noopener noreferrer"}},[e._v("@weihongkai2008"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/weizuo93",target:"_blank",rel:"noopener noreferrer"}},[e._v("@weizuo93"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/WindyGao",target:"_blank",rel:"noopener noreferrer"}},[e._v("@WindyGao"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wunan1210",target:"_blank",rel:"noopener noreferrer"}},[e._v("@wunan1210"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/wuyunfeng",target:"_blank",rel:"noopener noreferrer"}},[e._v("@wuyunfeng"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/xhmz",target:"_blank",rel:"noopener noreferrer"}},[e._v("@xhmz"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/xiaokangguo",target:"_blank",rel:"noopener noreferrer"}},[e._v("@xiaokangguo"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/xiaoxiaopan118",target:"_blank",rel:"noopener noreferrer"}},[e._v("@xiaoxiaopan118"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/xinghuayu007",target:"_blank",rel:"noopener noreferrer"}},[e._v("@xinghuayu007"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/xinyiZzz",target:"_blank",rel:"noopener noreferrer"}},[e._v("@xinyiZzz"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/xuliuzhe",target:"_blank",rel:"noopener noreferrer"}},[e._v("@xuliuzhe"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/xxiao2018",target:"_blank",rel:"noopener noreferrer"}},[e._v("@xxiao2018"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/xy720",target:"_blank",rel:"noopener noreferrer"}},[e._v("@xy720"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/yangzhg",target:"_blank",rel:"noopener noreferrer"}},[e._v("@yangzhg"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/yx91490",target:"_blank",rel:"noopener noreferrer"}},[e._v("@yx91490"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/zbtzbtzbt",target:"_blank",rel:"noopener noreferrer"}},[e._v("@zbtzbtzbt"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/zenoyang",target:"_blank",rel:"noopener noreferrer"}},[e._v("@zenoyang"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/zh0122",target:"_blank",rel:"noopener noreferrer"}},[e._v("@zh0122"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/zhangboya1",target:"_blank",rel:"noopener noreferrer"}},[e._v("@zhangboya1"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/zhangstar333",target:"_blank",rel:"noopener noreferrer"}},[e._v("@zhangstar333"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/zuochunwei",target:"_blank",rel:"noopener noreferrer"}},[e._v("@zuochunwei"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);