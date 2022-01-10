(window.webpackJsonp=window.webpackJsonp||[]).push([[774],{1217:function(a,e,s){"use strict";s.r(e);var t=s(52),i=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[a._v("#")]),a._v(" 最佳实践")]),a._v(" "),s("h2",{attrs:{id:"_1-建表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-建表"}},[a._v("#")]),a._v(" 1 建表")]),a._v(" "),s("h3",{attrs:{id:"_1-1-数据模型选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-数据模型选择"}},[a._v("#")]),a._v(" 1.1 数据模型选择")]),a._v(" "),s("p",[a._v("Doris 数据模型上目前分为三类: AGGREGATE KEY, UNIQUE KEY, DUPLICATE KEY。三种模型中数据都是按KEY进行排序。")]),a._v(" "),s("p",[a._v("1.1.1 AGGREGATE KEY")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("AGGREGATE KEY相同时，新旧记录进行聚合，目前支持的聚合函数有SUM, MIN, MAX, REPLACE。\n\nAGGREGATE KEY模型可以提前聚合数据, 适合报表和多维分析业务。\n\n```\nCREATE TABLE site_visit\n(\n    siteid      INT,\n    city        SMALLINT,\n    username    VARCHAR(32),\n    pv BIGINT   SUM DEFAULT '0'\n)\nAGGREGATE KEY(siteid, city, username)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10;\n```\n")])])]),s("p",[a._v("1.1.2. UNIQUE KEY")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("UNIQUE KEY 相同时，新记录覆盖旧记录。目前 UNIQUE KEY 实现上和 AGGREGATE KEY 的 REPLACE 聚合方法一样，二者本质上相同。适用于有更新需求的分析业务。\n\n```\nCREATE TABLE sales_order\n(\n    orderid     BIGINT,\n    status      TINYINT,\n    username    VARCHAR(32),\n    amount      BIGINT DEFAULT '0'\n)\nUNIQUE KEY(orderid)\nDISTRIBUTED BY HASH(orderid) BUCKETS 10;\n```\n")])])]),s("p",[a._v("1.1.3. DUPLICATE KEY")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("只指定排序列，相同的行不会合并。适用于数据无需提前聚合的分析业务。\n\n```\nCREATE TABLE session_data\n(\n    visitorid   SMALLINT,\n    sessionid   BIGINT,\n    visittime   DATETIME,\n    city        CHAR(20),\n    province    CHAR(20),\n    ip          varchar(32),\n    brower      CHAR(20),\n    url         VARCHAR(1024)\n)\nDUPLICATE KEY(visitorid, sessionid)\nDISTRIBUTED BY HASH(sessionid, visitorid) BUCKETS 10;\n```\n")])])]),s("h3",{attrs:{id:"_1-2-大宽表与-star-schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-大宽表与-star-schema"}},[a._v("#")]),a._v(" 1.2 大宽表与 Star Schema")]),a._v(" "),s("p",[a._v("业务方建表时, 为了和前端业务适配, 往往不对维度信息和指标信息加以区分, 而将 Schema 定义成大宽表。对于 Doris 而言, 这类大宽表往往性能不尽如人意:")]),a._v(" "),s("ul",[s("li",[a._v("Schema 中字段数比较多, 聚合模型中可能 key 列比较多, 导入过程中需要排序的列会增加。")]),a._v(" "),s("li",[a._v("维度信息更新会反应到整张表中，而更新的频率直接影响查询的效率。")])]),a._v(" "),s("p",[a._v("使用过程中，建议用户尽量使用 Star Schema 区分维度表和指标表。频繁更新的维度表也可以放在 MySQL 外部表中。而如果只有少量更新, 可以直接放在 Doris 中。在 Doris 中存储维度表时，可对维度表设置更多的副本，提升 Join 的性能。")]),a._v(" "),s("h3",{attrs:{id:"_1-3-分区和分桶"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-分区和分桶"}},[a._v("#")]),a._v(" 1.3 分区和分桶")]),a._v(" "),s("p",[a._v("Doris 支持两级分区存储, 第一层为分区(partition)，目前支持 RANGE 分区和 LIST 分区两种类型, 第二层为 HASH 分桶(bucket)。")]),a._v(" "),s("p",[a._v("1.3.1. 分区(partition)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("分区用于将数据划分成不同区间, 逻辑上可以理解为将原始表划分成了多个子表。可以方便的按分区对数据进行管理，例如，删除数据时，更加迅速。\n")])])]),s("p",[a._v("1.3.1.1. RANGE分区")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("业务上，多数用户会选择采用按时间进行partition, 让时间进行partition有以下好处：\n\n* 可区分冷热数据\n* 可用上Doris分级存储(SSD + SATA)的功能\n")])])]),s("p",[a._v("1.3.1.2. LIST分区")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("业务上，用户可以选择城市或者其他枚举值进行partition。\n")])])]),s("p",[a._v("1.3.2. HASH分桶(bucket)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("根据hash值将数据划分成不同的 bucket。\n\n* 建议采用区分度大的列做分桶, 避免出现数据倾斜\n* 为方便数据恢复, 建议单个 bucket 的 size 不要太大, 保持在 10GB 以内, 所以建表或增加 partition 时请合理考虑 bucket 数目, 其中不同 partition 可指定不同的 buckets 数。\n")])])]),s("h3",{attrs:{id:"_1-4-稀疏索引和-bloom-filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-稀疏索引和-bloom-filter"}},[a._v("#")]),a._v(" 1.4 稀疏索引和 Bloom Filter")]),a._v(" "),s("p",[a._v("Doris对数据进行有序存储, 在数据有序的基础上为其建立稀疏索引,索引粒度为 block(1024行)。")]),a._v(" "),s("p",[a._v("稀疏索引选取 schema 中固定长度的前缀作为索引内容, 目前 Doris 选取 36 个字节的前缀作为索引。")]),a._v(" "),s("ul",[s("li",[a._v("建表时建议将查询中常见的过滤字段放在 Schema 的前面, 区分度越大，频次越高的查询字段越往前放。")]),a._v(" "),s("li",[a._v("这其中有一个特殊的地方,就是 varchar 类型的字段。varchar 类型字段只能作为稀疏索引的最后一个字段。索引会在 varchar 处截断, 因此 varchar 如果出现在前面，可能索引的长度可能不足 36 个字节。具体可以参阅 "),s("RouterLink",{attrs:{to:"/zh-CN/getting-started/data-model-rollup.html"}},[a._v("数据模型、ROLLUP 及前缀索引")]),a._v("。")],1),a._v(" "),s("li",[a._v("除稀疏索引之外, Doris还提供bloomfilter索引, bloomfilter索引对区分度比较大的列过滤效果明显。 如果考虑到varchar不能放在稀疏索引中, 可以建立bloomfilter索引。")])]),a._v(" "),s("h3",{attrs:{id:"_1-5-物化视图-rollup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-物化视图-rollup"}},[a._v("#")]),a._v(" 1.5 物化视图(rollup)")]),a._v(" "),s("p",[a._v("Rollup 本质上可以理解为原始表(Base Table)的一个物化索引。建立 Rollup 时可只选取 Base Table 中的部分列作为 Schema。Schema 中的字段顺序也可与 Base Table 不同。")]),a._v(" "),s("p",[a._v("下列情形可以考虑建立 Rollup：")]),a._v(" "),s("p",[a._v("1.5.1. Base Table 中数据聚合度不高。")]),a._v(" "),s("p",[a._v("这一般是因 Base Table 有区分度比较大的字段而导致。此时可以考虑选取部分列，建立 Rollup。")]),a._v(" "),s("p",[a._v("如对于 "),s("code",[a._v("site_visit")]),a._v(" 表：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("site_visit(siteid, city, username, pv)\n")])])]),s("p",[a._v("siteid 可能导致数据聚合度不高，如果业务方经常根据城市统计pv需求，可以建立一个只有 city, pv 的 Rollup：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER TABLE site_visit ADD ROLLUP rollup_city(city, pv);\n")])])]),s("p",[a._v("1.5.2. Base Table 中的前缀索引无法命中")]),a._v(" "),s("p",[a._v("这一般是 Base Table 的建表方式无法覆盖所有的查询模式。此时可以考虑调整列顺序，建立 Rollup。")]),a._v(" "),s("p",[a._v("如对于 session_data 表：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("session_data(visitorid, sessionid, visittime, city, province, ip, brower, url)\n")])])]),s("p",[a._v("如果除了通过 visitorid 分析访问情况外，还有通过 brower, province 分析的情形，可以单独建立 Rollup。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER TABLE session_data ADD ROLLUP rollup_brower(brower,province,ip,url) DUPLICATE KEY(brower,province);\n")])])]),s("h2",{attrs:{id:"_2-schema-change"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-schema-change"}},[a._v("#")]),a._v(" 2 Schema Change")]),a._v(" "),s("p",[a._v("Doris中目前进行 Schema Change 的方式有三种：Sorted Schema Change，Direct Schema Change, Linked Schema Change。")]),a._v(" "),s("p",[a._v("2.1. Sorted Schema Change")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("改变了列的排序方式，需对数据进行重新排序。例如删除排序列中的一列, 字段重排序。\n\n```\nALTER TABLE site_visit DROP COLUMN city;\n```\n")])])]),s("p",[a._v("2.2. Direct Schema Change: 无需重新排序，但是需要对数据做一次转换。例如修改列的类型，在稀疏索引中加一列等。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\nALTER TABLE site_visit MODIFY COLUMN username varchar(64);\n```\n")])])]),s("p",[a._v("2.3. Linked Schema Change: 无需转换数据，直接完成。例如加列操作。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\nALTER TABLE site_visit ADD COLUMN click bigint SUM default '0';\n```\n")])])]),s("p",[a._v("建表时建议考虑好 Schema，这样在进行 Schema Change 时可以加快速度。")])])}),[],!1,null,null,null);e.default=i.exports}}]);