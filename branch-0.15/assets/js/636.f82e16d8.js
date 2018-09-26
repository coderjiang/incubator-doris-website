(window.webpackJsonp=window.webpackJsonp||[]).push([[636],{1025:function(_,t,a){"use strict";a.r(t);var v=a(43),e=Object(v.a)({},(function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"磁盘空间管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘空间管理"}},[_._v("#")]),_._v(" 磁盘空间管理")]),_._v(" "),a("p",[_._v("本文档主要介绍和磁盘存储空间有关的系统参数和处理策略。")]),_._v(" "),a("p",[_._v("Doris 的数据磁盘空间如果不加以控制，会因磁盘写满而导致进程挂掉。因此我们监测磁盘的使用率和剩余空间，通过设置不同的警戒水位，来控制 Doris 系统中的各项操作，尽量避免发生磁盘被写满的情况。")]),_._v(" "),a("h2",{attrs:{id:"名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[_._v("#")]),_._v(" 名词解释")]),_._v(" "),a("ul",[a("li",[_._v("FE：Frontend，Doris 的前端节点。负责元数据管理和请求接入。")]),_._v(" "),a("li",[_._v("BE：Backend，Doris 的后端节点。负责查询执行和数据存储。")]),_._v(" "),a("li",[_._v("Data Dir：数据目录，在 BE 配置文件 "),a("code",[_._v("be.conf")]),_._v(" 的 "),a("code",[_._v("storage_root_path")]),_._v(" 中指定的各个数据目录。通常一个数据目录对应一个磁盘、因此下文中 "),a("strong",[_._v("磁盘")]),_._v(" 也指代一个数据目录。")])]),_._v(" "),a("h2",{attrs:{id:"基本原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[_._v("#")]),_._v(" 基本原理")]),_._v(" "),a("p",[_._v("BE 定期（每隔一分钟）会向 FE 汇报一次磁盘使用情况。FE 记录这些统计值，并根据这些统计值，限制不同的操作请求。")]),_._v(" "),a("p",[_._v("在 FE 中分别设置了 "),a("strong",[_._v("高水位（High Watermark）")]),_._v(" 和 "),a("strong",[_._v("危险水位（Flood Stage）")]),_._v(" 两级阈值。危险水位高于高水位。当磁盘使用率高于高水位时，Doris 会限制某些操作的执行（如副本均衡等）。而如果高于危险水位，则会禁止某些操作的执行（如导入）。")]),_._v(" "),a("p",[_._v("同时，在 BE 上也设置了 "),a("strong",[_._v("危险水位（Flood Stage）")]),_._v("。考虑到 FE 并不能完全及时的检测到 BE 上的磁盘使用情况，以及无法控制某些 BE 自身运行的操作（如 Compaction）。因此 BE 上的危险水位用于 BE 主动拒绝和停止某些操作，达到自我保护的目的。")]),_._v(" "),a("h2",{attrs:{id:"fe-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe-参数"}},[_._v("#")]),_._v(" FE 参数")]),_._v(" "),a("p",[a("strong",[_._v("高水位：")])]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("storage_high_watermark_usage_percent 默认 85 (85%)。\nstorage_min_left_capacity_bytes 默认 2GB。\n")])])]),a("p",[_._v("当磁盘空间使用率"),a("strong",[_._v("大于")]),_._v(" "),a("code",[_._v("storage_high_watermark_usage_percent")]),_._v("，"),a("strong",[_._v("或者")]),_._v(" 磁盘空间剩余大小"),a("strong",[_._v("小于")]),_._v(" "),a("code",[_._v("storage_min_left_capacity_bytes")]),_._v(" 时，该磁盘不会再被作为以下操作的目的路径：")]),_._v(" "),a("ul",[a("li",[_._v("Tablet 均衡操作（Balance）")]),_._v(" "),a("li",[_._v("Colocation 表数据分片的重分布（Relocation）")]),_._v(" "),a("li",[_._v("Decommission")])]),_._v(" "),a("p",[a("strong",[_._v("危险水位：")])]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("storage_flood_stage_usage_percent 默认 95 (95%)。\nstorage_flood_stage_left_capacity_bytes 默认 1GB。\n")])])]),a("p",[_._v("当磁盘空间使用率"),a("strong",[_._v("大于")]),_._v(" "),a("code",[_._v("storage_flood_stage_usage_percent")]),_._v("，"),a("strong",[_._v("并且")]),_._v(" 磁盘空间剩余大小"),a("strong",[_._v("小于")]),_._v(" "),a("code",[_._v("storage_flood_stage_left_capacity_bytes")]),_._v(" 时，该磁盘不会再被作为以下操作的目的路径，并禁止某些操作：")]),_._v(" "),a("ul",[a("li",[_._v("Tablet 均衡操作（Balance）")]),_._v(" "),a("li",[_._v("Colocation 表数据分片的重分布（Relocation）")]),_._v(" "),a("li",[_._v("副本补齐")]),_._v(" "),a("li",[_._v("恢复操作（Restore）")]),_._v(" "),a("li",[_._v("数据导入（Load/Insert）")])]),_._v(" "),a("h2",{attrs:{id:"be-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#be-参数"}},[_._v("#")]),_._v(" BE 参数")]),_._v(" "),a("p",[a("strong",[_._v("危险水位：")])]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("capacity_used_percent_flood_stage 默认 95 (95%)。\ncapacity_min_left_bytes_flood_stage 默认 1GB。\n")])])]),a("p",[_._v("当磁盘空间使用率"),a("strong",[_._v("大于")]),_._v(" "),a("code",[_._v("storage_flood_stage_usage_percent")]),_._v("，"),a("strong",[_._v("并且")]),_._v(" 磁盘空间剩余大小"),a("strong",[_._v("小于")]),_._v(" "),a("code",[_._v("storage_flood_stage_left_capacity_bytes")]),_._v(" 时，该磁盘上的以下操作会被禁止：")]),_._v(" "),a("ul",[a("li",[_._v("Base/Cumulative Compaction。")]),_._v(" "),a("li",[_._v("数据写入。包括各种导入操作。")]),_._v(" "),a("li",[_._v("Clone Task。通常发生于副本修复或均衡时。")]),_._v(" "),a("li",[_._v("Push Task。发生在 Hadoop 导入的 Loading 阶段，下载文件。")]),_._v(" "),a("li",[_._v("Alter Task。Schema Change 或 Rollup 任务。")]),_._v(" "),a("li",[_._v("Download Task。恢复操作的 Downloading 阶段。")])]),_._v(" "),a("h2",{attrs:{id:"磁盘空间释放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘空间释放"}},[_._v("#")]),_._v(" 磁盘空间释放")]),_._v(" "),a("p",[_._v("当磁盘空间高于高水位甚至危险水位后，很多操作都会被禁止。此时可以尝试通过以下方式减少磁盘使用率，恢复系统。")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("删除表或分区")]),_._v(" "),a("p",[_._v("通过删除表或分区的方式，能够快速降低磁盘空间使用率，恢复集群。"),a("strong",[_._v("注意：只有 "),a("code",[_._v("DROP")]),_._v(" 操作可以达到快速降低磁盘空间使用率的目的，"),a("code",[_._v("DELETE")]),_._v(" 操作不可以。")])]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("DROP TABLE tbl;\nALTER TABLE tbl DROP PARTITION p1;\n")])])])]),_._v(" "),a("li",[a("p",[_._v("扩容 BE")]),_._v(" "),a("p",[_._v("扩容后，数据分片会自动均衡到磁盘使用率较低的 BE 节点上。扩容操作会根据数据量及节点数量不同，在数小时或数天后使集群到达均衡状态。")])]),_._v(" "),a("li",[a("p",[_._v("修改表或分区的副本")]),_._v(" "),a("p",[_._v("可以将表或分区的副本数降低。比如默认3副本可以降低为2副本。该方法虽然降低了数据的可靠性，但是能够快速的降低磁盘使用率，使集群恢复正常。该方法通常用于紧急恢复系统。请在恢复后，通过扩容或删除数据等方式，降低磁盘使用率后，将副本数恢复为 3。")]),_._v(" "),a("p",[_._v("修改副本操作为瞬间生效，后台会自动异步的删除多余的副本。")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('ALTER TABLE tbl MODIFY PARTITION p1 SET("replication_num" = "2");\n')])])])]),_._v(" "),a("li",[a("p",[_._v("删除多余文件")]),_._v(" "),a("p",[_._v("当 BE 进程已经因为磁盘写满而挂掉并无法启动时（此现象可能因 FE 或 BE 检测不及时而发生）。需要通过删除数据目录下的一些临时文件，保证 BE 进程能够启动。以下目录中的文件可以直接删除：")]),_._v(" "),a("ul",[a("li",[_._v("log/：日志目录下的日志文件。")]),_._v(" "),a("li",[_._v("snapshot/: 快照目录下的快照文件。")]),_._v(" "),a("li",[_._v("trash/：回收站中的文件。")])]),_._v(" "),a("p",[a("strong",[_._v("这种操作会对 "),a("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/operation/tablet-restore-tool.html"}},[_._v("从 BE 回收站中恢复数据")]),_._v(" 产生影响。")],1)]),_._v(" "),a("p",[_._v("如果BE还能够启动，则可以使用"),a("code",[_._v("ADMIN CLEAN TRASH ON(BackendHost:BackendHeartBeatPort);")]),_._v("来主动清理临时文件，会清理 "),a("strong",[_._v("所有")]),_._v(" trash文件和过期snapshot文件，"),a("strong",[_._v("这将影响从回收站恢复数据的操作")]),_._v(" 。")]),_._v(" "),a("p",[_._v("如果不手动执行"),a("code",[_._v("ADMIN CLEAN TRASH")]),_._v("，系统仍将会在几分钟至几十分钟内自动执行清理，这里分为两种情况：")]),_._v(" "),a("ul",[a("li",[_._v("如果磁盘占用未达到 "),a("strong",[_._v("危险水位(Flood Stage)")]),_._v(" 的90%，则会清理过期trash文件和过期snapshot文件，此时会保留一些近期文件而不影响恢复数据。")]),_._v(" "),a("li",[_._v("如果磁盘占用已达到 "),a("strong",[_._v("危险水位(Flood Stage)")]),_._v(" 的90%，则会清理 "),a("strong",[_._v("所有")]),_._v(" trash文件和过期snapshot文件， "),a("strong",[_._v("此时会影响从回收站恢复数据的操作")]),_._v(" 。\n自动执行的时间间隔可以通过配置项中的"),a("code",[_._v("max_garbage_sweep_interval")]),_._v("和"),a("code",[_._v("max_garbage_sweep_interval")]),_._v("更改。")])]),_._v(" "),a("p",[_._v("出现由于缺少trash文件而导致恢复失败的情况时，可能返回如下结果：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('{"status": "Fail","msg": "can find tablet path in trash"}\n')])])])]),_._v(" "),a("li",[a("p",[_._v("删除数据文件（危险！！！）")]),_._v(" "),a("p",[_._v("当以上操作都无法释放空间时，需要通过删除数据文件来释放空间。数据文件在指定数据目录的 "),a("code",[_._v("data/")]),_._v(" 目录下。删除数据分片（Tablet）必须先确保该 Tablet 至少有一个副本是正常的，否则"),a("strong",[_._v("删除唯一副本会导致数据丢失")]),_._v("。假设我们要删除 id 为 12345 的 Tablet：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("找到 Tablet 对应的目录，通常位于 "),a("code",[_._v("data/shard_id/tablet_id/")]),_._v(" 下。如：")]),_._v(" "),a("p",[a("code",[_._v("data/0/12345/")])])]),_._v(" "),a("li",[a("p",[_._v("记录 tablet id 和 schema hash。其中 schema hash 为上一步目录的下一级目录名。如下为 352781111：")]),_._v(" "),a("p",[a("code",[_._v("data/0/12345/352781111")])])]),_._v(" "),a("li",[a("p",[_._v("删除数据目录：")]),_._v(" "),a("p",[a("code",[_._v("rm -rf data/0/12345/")])])]),_._v(" "),a("li",[a("p",[_._v("删除 Tablet 元数据（具体参考 "),a("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/operation/tablet-meta-tool.html"}},[_._v("Tablet 元数据管理工具")]),_._v("）")],1),_._v(" "),a("p",[a("code",[_._v("./lib/meta_tool --operation=delete_header --root_path=/path/to/root_path --tablet_id=12345 --schema_hash= 352781111")])])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);