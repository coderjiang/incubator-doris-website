(window.webpackJsonp=window.webpackJsonp||[]).push([[613],{1063:function(l,a,_){"use strict";_.r(a);var v=_(55),e=Object(v.a)({},(function(){var l=this,a=l.$createElement,_=l._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[_("h1",{attrs:{id:"rollup"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rollup"}},[l._v("#")]),l._v(" Rollup")]),l._v(" "),_("p",[l._v("用户可以通过创建上卷表（Rollup）加速查询。关于 Rollup 的概念和使用方式可以参阅 "),_("RouterLink",{attrs:{to:"/zh-CN/getting-started/data-model-rollup.html"}},[l._v("数据模型、ROLLUP 及前缀索引")]),l._v(" 和 "),_("RouterLink",{attrs:{to:"/zh-CN/getting-started/hit-the-rollup.html"}},[l._v("Rollup 与查询")]),l._v(" 两篇文档。")],1),l._v(" "),_("p",[l._v("本文档主要介绍如何创建 Rollup 作业，以及创建 Rollup 的一些注意事项和常见问题。")]),l._v(" "),_("h2",{attrs:{id:"名词解释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[l._v("#")]),l._v(" 名词解释")]),l._v(" "),_("ul",[_("li",[l._v("Base Table：基表。每一个表被创建时，都对应一个基表。基表存储了这个表的完整的数据。Rollup 通常基于基表中的数据创建（也可以通过其他 Rollup 创建）。")]),l._v(" "),_("li",[l._v("Index：物化索引。Rollup 或 Base Table 都被称为物化索引。")]),l._v(" "),_("li",[l._v("Transaction：事务。每一个导入任务都是一个事务，每个事务有一个唯一递增的 Transaction ID。")])]),l._v(" "),_("h2",{attrs:{id:"原理介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原理介绍"}},[l._v("#")]),l._v(" 原理介绍")]),l._v(" "),_("p",[l._v("创建 Rollup 的基本过程，是通过 Base 表的数据，生成一份新的包含指定列的 Rollup 的数据。其中主要需要进行两部分数据转换，一是已存在的历史数据的转换，二是在 Rollup 执行过程中，新到达的导入数据的转换。")]),l._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[l._v("+----------+\n| Load Job |\n+----+-----+\n     |\n     | Load job generates both base and rollup index data\n     |\n     |      +------------------+ +---------------+\n     |      | Base Index       | | Base Index    |\n     +------\x3e New Incoming Data| | History Data  |\n     |      +------------------+ +------+--------+\n     |                                  |\n     |                                  | Convert history data\n     |                                  |\n     |      +------------------+ +------v--------+\n     |      | Rollup Index     | | Rollup Index  |\n     +------\x3e New Incoming Data| | History Data  |\n            +------------------+ +---------------+\n")])])]),_("p",[l._v("在开始转换历史数据之前，Doris 会获取一个最新的 Transaction ID。并等待这个 Transaction ID 之前的所有导入事务完成。这个 Transaction ID 成为分水岭。意思是，Doris 保证在分水岭之后的所有导入任务，都会同时为 Rollup Index 生成数据。这样当历史数据转换完成后，可以保证 Rollup 和 Base 表的数据是齐平的。")]),l._v(" "),_("h2",{attrs:{id:"创建作业"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建作业"}},[l._v("#")]),l._v(" 创建作业")]),l._v(" "),_("p",[l._v("创建 Rollup 的具体语法可以查看帮助 "),_("code",[l._v("HELP ALTER TABLE")]),l._v(" 中 Rollup 部分的说明。")]),l._v(" "),_("p",[l._v("Rollup 的创建是一个异步过程，作业提交成功后，用户需要通过 "),_("code",[l._v("SHOW ALTER TABLE ROLLUP")]),l._v(" 命令来查看作业进度。")]),l._v(" "),_("h2",{attrs:{id:"查看作业"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查看作业"}},[l._v("#")]),l._v(" 查看作业")]),l._v(" "),_("p",[_("code",[l._v("SHOW ALTER TABLE ROLLUP")]),l._v(" 可以查看当前正在执行或已经完成的 Rollup 作业。举例如下：")]),l._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[l._v("          JobId: 20037\n      TableName: tbl1\n     CreateTime: 2019-08-06 15:38:49\n   FinishedTime: N/A\n  BaseIndexName: tbl1\nRollupIndexName: r1\n       RollupId: 20038\n  TransactionId: 10034\n          State: PENDING\n            Msg:\n       Progress: N/A\n        Timeout: 86400\n")])])]),_("ul",[_("li",[l._v("JobId：每个 Rollup 作业的唯一 ID。")]),l._v(" "),_("li",[l._v("TableName：Rollup 对应的基表的表名。")]),l._v(" "),_("li",[l._v("CreateTime：作业创建时间。")]),l._v(" "),_("li",[l._v('FinishedTime：作业结束时间。如未结束，则显示 "N/A"。')]),l._v(" "),_("li",[l._v("BaseIndexName：Rollup 对应的源 Index 的名称。")]),l._v(" "),_("li",[l._v("RollupIndexName：Rollup 的名称。")]),l._v(" "),_("li",[l._v("RollupId：Rollup 的唯一 ID。")]),l._v(" "),_("li",[l._v("TransactionId：转换历史数据的分水岭 transaction ID。")]),l._v(" "),_("li",[l._v("State：作业所在阶段。\n"),_("ul",[_("li",[l._v("PENDING：作业在队列中等待被调度。")]),l._v(" "),_("li",[l._v("WAITING_TXN：等待分水岭 transaction ID 之前的导入任务完成。")]),l._v(" "),_("li",[l._v("RUNNING：历史数据转换中。")]),l._v(" "),_("li",[l._v("FINISHED：作业成功。")]),l._v(" "),_("li",[l._v("CANCELLED：作业失败。")])])]),l._v(" "),_("li",[l._v("Msg：如果作业失败，这里会显示失败信息。")]),l._v(" "),_("li",[l._v("Progress：作业进度。只有在 RUNNING 状态才会显示进度。进度是以 M/N 的形式显示。其中 N 为 Rollup 的总副本数。M 为已完成历史数据转换的副本数。")]),l._v(" "),_("li",[l._v("Timeout：作业超时时间。单位秒。")])]),l._v(" "),_("h2",{attrs:{id:"取消作业"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#取消作业"}},[l._v("#")]),l._v(" 取消作业")]),l._v(" "),_("p",[l._v("在作业状态不为 FINISHED 或 CANCELLED 的情况下，可以通过以下命令取消 Rollup 作业：")]),l._v(" "),_("p",[_("code",[l._v("CANCEL ALTER TABLE ROLLUP FROM tbl_name;")])]),l._v(" "),_("h2",{attrs:{id:"注意事项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[l._v("#")]),l._v(" 注意事项")]),l._v(" "),_("ul",[_("li",[_("p",[l._v("一张表在同一时间只能有一个 Rollup 作业在运行。且一个作业中只能创建一个 Rollup。")])]),l._v(" "),_("li",[_("p",[l._v("Rollup 操作不阻塞导入和查询操作。")])]),l._v(" "),_("li",[_("p",[l._v("如果 DELETE 操作，where 条件中的某个 Key 列在某个 Rollup 中不存在，则不允许该  DELETE。")]),l._v(" "),_("p",[l._v("如果某个 Key 列在某一 Rollup 中不存在，则 DELETE 操作无法对该 Rollup 进行数据删除，从而无法保证 Rollup 表和 Base 表的数据一致性。")])]),l._v(" "),_("li",[_("p",[l._v("Rollup 的列必须存在于 Base 表中。")]),l._v(" "),_("p",[l._v("Rollup 的列永远是 Base 表列的子集。不能出现 Base 表中不存在的列。")])]),l._v(" "),_("li",[_("p",[l._v("如果 Rollup 中包含 REPLACE 聚合类型的列，则该 Rollup 必须包含所有 Key 列。")]),l._v(" "),_("p",[l._v("假设 Base 表结构如下：")]),l._v(" "),_("p",[_("code",[l._v("(k1 INT, k2 INT, v1 INT REPLACE, v2 INT SUM)")])]),l._v(" "),_("p",[l._v("如果需要创建的 Rollup 包含 "),_("code",[l._v("v1")]),l._v(" 列，则必须包含 "),_("code",[l._v("k1")]),l._v(", "),_("code",[l._v("k2")]),l._v(" 列。否则系统无法决定 "),_("code",[l._v("v1")]),l._v(" 列在 Rollup 中的取值。")]),l._v(" "),_("p",[l._v("注意，Unique 数据模型表中的所有 Value 列都是 REPLACE 聚合类型。")])]),l._v(" "),_("li",[_("p",[l._v("DUPLICATE 数据模型表的 Rollup，可以指定 Rollup 的 DUPLICATE KEY。")]),l._v(" "),_("p",[l._v("DUPLICATE 数据模型表中的 DUPLICATE KEY 其实就是排序列。Rollup 可以指定自己的排序列，但排序列必须是 Rollup 列顺序的前缀。如果不指定，则系统会检查 Rollup 是否包含了 Base 表的所有排序列，如果没有包含，则会报错。举例：")]),l._v(" "),_("p",[l._v("Base 表结构："),_("code",[l._v("(k1 INT, k2 INT, k3 INT) DUPLICATE KEY(k1, k2)")])]),l._v(" "),_("p",[l._v("则 Rollup 可以为："),_("code",[l._v("(k2 INT, k1 INT) DUPLICATE KEY(k2)")])])]),l._v(" "),_("li",[_("p",[l._v("Rollup 不需要包含 Base 表的分区列或分桶列。")])])]),l._v(" "),_("h2",{attrs:{id:"常见问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[l._v("#")]),l._v(" 常见问题")]),l._v(" "),_("ul",[_("li",[_("p",[l._v("一个表可以创建多少 Rollup")]),l._v(" "),_("p",[l._v("一个表能够创建的 Rollup 个数理论上没有限制，但是过多的 Rollup 会影响导入性能。因为导入时，会同时给所有 Rollup 产生数据。同时 Rollup 会占用物理存储空间。通常一个表的 Rollup 数量在 10 个以内比较合适。")])]),l._v(" "),_("li",[_("p",[l._v("Rollup 创建的速度")]),l._v(" "),_("p",[l._v("目前 Rollup 创建速度按照最差效率估计约为 10MB/s。保守起见，用户可以根据这个速率来设置作业的超时时间。")])]),l._v(" "),_("li",[_("p",[l._v("提交作业报错 "),_("code",[l._v("Table xxx is not stable. ...")])]),l._v(" "),_("p",[l._v("Rollup 只有在表数据完整且非均衡状态下才可以开始。如果表的某些数据分片副本不完整，或者某些副本正在进行均衡操作，则提交会被拒绝。")]),l._v(" "),_("p",[l._v("数据分片副本是否完整，可以通过以下命令查看：")]),l._v(" "),_("p",[_("code",[l._v('ADMIN SHOW REPLICA STATUS FROM tbl WHERE STATUS != "OK";')])]),l._v(" "),_("p",[l._v("如果有返回结果，则说明有副本有问题。通常系统会自动修复这些问题，用户也可以通过以下命令优先修复这个表：")]),l._v(" "),_("p",[_("code",[l._v("ADMIN REPAIR TABLE tbl1;")])]),l._v(" "),_("p",[l._v("用户可以通过以下命令查看是否有正在运行的均衡任务：")]),l._v(" "),_("p",[_("code",[l._v('SHOW PROC "/cluster_balance/pending_tablets";')])]),l._v(" "),_("p",[l._v("可以等待均衡任务完成，或者通过以下命令临时禁止均衡操作：")]),l._v(" "),_("p",[_("code",[l._v('ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");')])])])]),l._v(" "),_("h2",{attrs:{id:"相关配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相关配置"}},[l._v("#")]),l._v(" 相关配置")]),l._v(" "),_("h3",{attrs:{id:"fe-配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fe-配置"}},[l._v("#")]),l._v(" FE 配置")]),l._v(" "),_("ul",[_("li",[_("code",[l._v("alter_table_timeout_second")]),l._v("：作业默认超时时间，86400 秒。")])]),l._v(" "),_("h3",{attrs:{id:"be-配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#be-配置"}},[l._v("#")]),l._v(" BE 配置")]),l._v(" "),_("ul",[_("li",[_("code",[l._v("alter_tablet_worker_count")]),l._v("：在 BE 端用于执行历史数据转换的线程数。默认为 3。如果希望加快 Rollup 作业的速度，可以适当调大这个参数后重启 BE。但过多的转换线程可能会导致 IO 压力增加，影响其他操作。该线程和 Schema Change 作业共用。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);