(window.webpackJsonp=window.webpackJsonp||[]).push([[730],{1178:function(t,a,i){"use strict";i.r(a);var p=i(55),o=Object(p.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"统计数据"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#统计数据"}},[t._v("#")]),t._v(" 统计数据")]),t._v(" "),i("p",[t._v("共 37 位作者提交了 82 个 Commit 。感谢以下作者的贡献（Github ID，按字母序）：")]),t._v(" "),i("p",[t._v("BiteTheDDDDt, CalvinKirs, EmmyMiao87, GoGoWen, HappenLee, Henry2SS, JNSimba, aihai, caiconghui, dh-cloud, gaodayue, hf200012, jackwener, liutang123, luozenglin, luzhijing, morningman, pengxiangyu, qidaye, qzsee, spaces-X, tianhui5, tinkerrrr, wangshuo128, wayofeng, weizuo93, whutpencil, xiedeyantu, xinyiZzz, xtr1993, xuzifu666, yangzhg, yjant, zbtzbtzbt, zenoyang, zhangstar333, zhengshiJ")]),t._v(" "),i("p",[t._v("最近 3 周，共修改新增代码行 15882 ，删除代码行 6966。")]),t._v(" "),i("h2",{attrs:{id:"主要进展"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#主要进展"}},[t._v("#")]),t._v(" 主要进展")]),t._v(" "),i("h3",{attrs:{id:"新增功能"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#新增功能"}},[t._v("#")]),t._v(" 新增功能")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7276")]),t._v(" "),i("p",[t._v("支持直接返回 HLL/BITMAP 列的二进制数据，以供外部解析使用。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7255")]),t._v(" "),i("p",[t._v("支持 Lateral View 列转行功能。方便将 bitmap、stirng 或 json array 数据展开成多行，以供后续处理。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7379")]),t._v(" "),i("p",[i("code",[t._v("bitmap_union")]),t._v(" 和 "),i("code",[t._v("bitmap_intersect")]),t._v(" 支持多个 bitmap 参数。以提高多个 bitmap 求交集和并集的效率。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7464")]),t._v(" "),i("p",[t._v("支持国密算法函数 SM3/SM4。")])])]),t._v(" "),i("h3",{attrs:{id:"work-in-progess"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#work-in-progess"}},[t._v("#")]),t._v(" Work-in-Progess")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7098")]),t._v(" "),i("p",[t._v("支持冷数据转储到对象存储（开发中）。")])])]),t._v(" "),i("h3",{attrs:{id:"bug-修复"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bug-修复"}},[t._v("#")]),t._v(" Bug 修复")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7383")]),t._v(" "),i("p",[t._v("修复 Segment Cache 某些情况下没有正确处理过期缓存的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7373")]),t._v(" "),i("p",[t._v("修复 BE 侧常量折叠代码的若干Bug。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7371")]),t._v(" "),i("p",[t._v("修复 Broker Load 调度逻辑在某些情况下可能导致任务不被调度的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7375")]),t._v(" "),i("p",[t._v("修复部分逻辑视图查询导致 SQL Cache无法更新的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7407")]),t._v(" "),i("p",[t._v("优化 SQL block rule 的逻辑，使其仅对 select 语句生效。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7421")]),t._v(" "),i("p",[t._v("修复 round() 函数结果不正确的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7362")]),t._v(" "),i("p",[t._v("修复部分情况下，物化视图改写 count 函数时逻辑错误的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7495")]),t._v(" "),i("p",[t._v("修复在表名大小写不敏感设定环境下，部分查询中别名解析错误的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7440")]),t._v(" "),i("p",[t._v("修复 bloom filter 处理空字符串错误的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7411")]),t._v(" "),i("p",[t._v("修复部分情况下 Grouping Set 功能无法正确处理表达式的问题。")])])]),t._v(" "),i("h3",{attrs:{id:"功能改进"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#功能改进"}},[t._v("#")]),t._v(" 功能改进")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7232")]),t._v(" "),i("p",[t._v("Flink-Connector 支持并发读取 Doris 数据。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7348")]),t._v(" "),i("p",[t._v("优化 Unique Key 表在 Reader 层的读取效率。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7454")]),t._v(" "),i("p",[t._v("优化当导入大量不合规数据时，BE 的内存开销。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7096")]),t._v(" "),i("p",[t._v("查询优化器支持更多谓词传递优化。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7435")]),t._v(" "),i("p",[t._v("优化 Flink-Connector 的 BE 选取逻辑，仅选择存活的 BE 节点。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7493")]),t._v(" "),i("p",[t._v("修复 brpc 的一些默认参数以降低 BRPC 网络传输错误的概率。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7434")]),t._v(" "),i("p",[t._v("重构查询优化器分区裁剪逻辑，以支持更多谓词条件的分区裁剪能力。")])])]),t._v(" "),i("h3",{attrs:{id:"其他"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7536")]),t._v(" "),i("p",[t._v("升级 Log4j 到 2.7.1 已修复安全漏洞 CVE-2021-44832")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);