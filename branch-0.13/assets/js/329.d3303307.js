(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{716:function(_,v,a){"use strict";a.r(v);var t=a(43),e=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"routine-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routine-load"}},[_._v("#")]),_._v(" Routine Load")]),_._v(" "),a("p",[_._v("例行导入（Routine Load）功能为用户提供了一种自动从指定数据源进行数据导入的功能。")]),_._v(" "),a("p",[_._v("本文档主要介绍该功能的实现原理、使用方式以及最佳实践。")]),_._v(" "),a("h2",{attrs:{id:"名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[_._v("#")]),_._v(" 名词解释")]),_._v(" "),a("ul",[a("li",[_._v("FE：Frontend，Doris 的前端节点。负责元数据管理和请求接入。")]),_._v(" "),a("li",[_._v("BE：Backend，Doris 的后端节点。负责查询执行和数据存储。")]),_._v(" "),a("li",[_._v("RoutineLoadJob：用户提交的一个例行导入作业。")]),_._v(" "),a("li",[_._v("JobScheduler：例行导入作业调度器，用于调度和拆分一个 RoutineLoadJob 为多个 Task。")]),_._v(" "),a("li",[_._v("Task：RoutineLoadJob 被 JobScheduler 根据规则拆分的子任务。")]),_._v(" "),a("li",[_._v("TaskScheduler：任务调度器。用于调度 Task 的执行。")])]),_._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[_._v("#")]),_._v(" 原理")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("         +---------+\n         |  Client |\n         +----+----+\n              |\n+-----------------------------+\n| FE          |               |\n| +-----------v------------+  |\n| |                        |  |\n| |   Routine Load Job     |  |\n| |                        |  |\n| +---+--------+--------+--+  |\n|     |        |        |     |\n| +---v--+ +---v--+ +---v--+  |\n| | task | | task | | task |  |\n| +--+---+ +---+--+ +---+--+  |\n|    |         |        |     |\n+-----------------------------+\n     |         |        |\n     v         v        v\n +---+--+   +--+---+   ++-----+\n |  BE  |   |  BE  |   |  BE  |\n +------+   +------+   +------+\n\n")])])]),a("p",[_._v("如上图，Client 向 FE 提交一个例行导入作业。")]),_._v(" "),a("p",[_._v("FE 通过 JobScheduler 将一个导入作业拆分成若干个 Task。每个 Task 负责导入指定的一部分数据。Task 被 TaskScheduler 分配到指定的 BE 上执行。")]),_._v(" "),a("p",[_._v("在 BE 上，一个 Task 被视为一个普通的导入任务，通过 Stream Load 的导入机制进行导入。导入完成后，向 FE 汇报。")]),_._v(" "),a("p",[_._v("FE 中的 JobScheduler 根据汇报结果，继续生成后续新的 Task，或者对失败的 Task 进行重试。")]),_._v(" "),a("p",[_._v("整个例行导入作业通过不断的产生新的 Task，来完成数据不间断的导入。")]),_._v(" "),a("h2",{attrs:{id:"kafka-例行导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-例行导入"}},[_._v("#")]),_._v(" Kafka 例行导入")]),_._v(" "),a("p",[_._v("当前我们仅支持从 Kafka 系统进行例行导入。该部分会详细介绍 Kafka 例行导入使用方式和最佳实践。")]),_._v(" "),a("h3",{attrs:{id:"使用限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用限制"}},[_._v("#")]),_._v(" 使用限制")]),_._v(" "),a("ol",[a("li",[_._v("支持无认证的 Kafka 访问，以及通过 SSL 方式认证的 Kafka 集群。")]),_._v(" "),a("li",[_._v("支持的消息格式为 csv 文本格式。每一个 message 为一行，且行尾"),a("strong",[_._v("不包含")]),_._v("换行符。")]),_._v(" "),a("li",[_._v("仅支持 Kafka 0.10.0.0(含) 以上版本。")])]),_._v(" "),a("h3",{attrs:{id:"创建例行导入任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建例行导入任务"}},[_._v("#")]),_._v(" 创建例行导入任务")]),_._v(" "),a("p",[_._v("创建例行导入任务的的详细语法可以连接到 Doris 后，执行 "),a("code",[_._v("HELP ROUTINE LOAD;")]),_._v(" 查看语法帮助。这里主要详细介绍，创建作业时的注意事项。")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("columns_mapping")]),_._v(" "),a("p",[a("code",[_._v("columns_mapping")]),_._v(" 主要用于指定表结构和 message 中的列映射关系，以及一些列的转换。如果不指定，Doris 会默认 message 中的列和表结构的列按顺序一一对应。虽然在正常情况下，如果源数据正好一一对应，则不指定也可以进行正常的数据导入。但是我们依然强烈建议用户"),a("strong",[_._v("显式的指定列映射关系")]),_._v("。这样当表结构发生变化（比如增加一个 nullable 的列），或者源文件发生变化（比如增加了一列）时，导入任务依然可以继续进行。否则，当发生上述变动后，因为列映射关系不再一一对应，导入将报错。")]),_._v(" "),a("p",[_._v("在 "),a("code",[_._v("columns_mapping")]),_._v(" 中我们同样可以使用一些内置函数进行列的转换。但需要注意函数参数对应的实际列类型。举例说明：")]),_._v(" "),a("p",[_._v("假设用户需要导入只包含 "),a("code",[_._v("k1")]),_._v(" 一列的表，列类型为 "),a("code",[_._v("int")]),_._v("。并且需要将源文件中的 null 值转换为 0。该功能可以通过 "),a("code",[_._v("ifnull")]),_._v(" 函数实现。正确是的使用方式如下：")]),_._v(" "),a("p",[a("code",[_._v('COLUMNS (xx, k1=ifnull(xx, "3"))')])]),_._v(" "),a("p",[_._v("注意这里我们使用 "),a("code",[_._v('"3"')]),_._v(" 而不是 "),a("code",[_._v("3")]),_._v("，虽然 "),a("code",[_._v("k1")]),_._v(" 的类型为 "),a("code",[_._v("int")]),_._v("。因为对于导入任务来说，源数据中的列类型都为 "),a("code",[_._v("varchar")]),_._v("，所以这里 "),a("code",[_._v("xx")]),_._v(" 虚拟列的类型也为 "),a("code",[_._v("varchar")]),_._v("。所以我们需要使用 "),a("code",[_._v('"3"')]),_._v(" 来进行对应的匹配，否则 "),a("code",[_._v("ifnull")]),_._v(" 函数无法找到参数为 "),a("code",[_._v("(varchar, int)")]),_._v(" 的函数签名，将出现错误。")]),_._v(" "),a("p",[_._v("再举例，假设用户需要导入只包含 "),a("code",[_._v("k1")]),_._v(" 一列的表，列类型为 "),a("code",[_._v("int")]),_._v("。并且需要将源文件中的对应列进行处理：将负数转换为正数，而将正数乘以 100。这个功能可以通过 "),a("code",[_._v("case when")]),_._v(" 函数实现，正确写法应如下：")]),_._v(" "),a("p",[a("code",[_._v("COLUMNS (xx, case when xx < 0 than cast(-xx as varchar) else cast((xx + '100') as varchar) end)")])]),_._v(" "),a("p",[_._v("注意这里我们需要将 "),a("code",[_._v("case when")]),_._v(" 中所有的参数都最终转换为 varchar，才能得到期望的结果。")])]),_._v(" "),a("li",[a("p",[_._v("where_predicates")]),_._v(" "),a("p",[a("code",[_._v("where_predicates")]),_._v(" 中的的列的类型，已经是实际的列类型了，所以无需向 "),a("code",[_._v("columns_mapping")]),_._v(" 那样强制的转换为 varchar 类型。按照实际的列类型书写即可。")])]),_._v(" "),a("li",[a("p",[_._v("desired_concurrent_number")]),_._v(" "),a("p",[a("code",[_._v("desired_concurrent_number")]),_._v(" 用于指定一个例行作业期望的并发度。即一个作业，最多有多少 task 同时在执行。对于 Kafka 导入而言，当前的实际并发度计算如下：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("Min(partition num, desired_concurrent_number, alive_backend_num, Config.max_routine_load_task_concurrrent_num)\n")])])]),a("p",[_._v("其中 "),a("code",[_._v("Config.max_routine_load_task_concurrrent_num")]),_._v(" 是系统的一个默认的最大并发数限制。这是一个 FE 配置，可以通过改配置调整。默认为 5。")]),_._v(" "),a("p",[_._v("其中 partition num 指订阅的 Kafka topic 的 partition 数量。"),a("code",[_._v("alive_backend_num")]),_._v(" 是当前正常的 BE 节点数。")])]),_._v(" "),a("li",[a("p",[_._v("max_batch_interval/max_batch_rows/max_batch_size")]),_._v(" "),a("p",[_._v("这三个参数用于控制单个任务的执行时间。其中任意一个阈值达到，则任务结束。其中 "),a("code",[_._v("max_batch_rows")]),_._v(" 用于记录从 Kafka 中读取到的数据行数。"),a("code",[_._v("max_batch_size")]),_._v(" 用于记录从 Kafka 中读取到的数据量，单位是字节。目前一个任务的消费速率大约为 5-10MB/s。")]),_._v(" "),a("p",[_._v("那么假设一行数据 500B，用户希望每 100MB 或 10 秒为一个 task。100MB 的预期处理时间是 10-20 秒，对应的行数约为 200000 行。则一个合理的配置为：")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('"max_batch_interval" = "10",\n"max_batch_rows" = "200000",\n"max_batch_size" = "104857600"\n')])])]),a("p",[_._v("以上示例中的参数也是这些配置的默认参数。")])]),_._v(" "),a("li",[a("p",[_._v("max_error_number")]),_._v(" "),a("p",[a("code",[_._v("max_error_number")]),_._v(" 用于控制错误率。在错误率过高的时候，作业会自动暂停。因为整个作业是面向数据流的，且由于数据流的无边界性，我们无法像其他导入任务一样，通过一个错误比例来计算错误率。因此这里提供了一种新的计算方式，来计算数据流中的错误比例。")]),_._v(" "),a("p",[_._v("我们设定了一个采样窗口。窗口的大小为 "),a("code",[_._v("max_batch_rows * 10")]),_._v("。在一个采样窗口内，如果错误行数超过 "),a("code",[_._v("max_error_number")]),_._v("，则作业被暂停。如果没有超过，则下一个窗口重新开始计算错误行数。")]),_._v(" "),a("p",[_._v("我们假设 "),a("code",[_._v("max_batch_rows")]),_._v(" 为 200000，则窗口大小为 2000000。设 "),a("code",[_._v("max_error_number")]),_._v(" 为 20000，即用户预期每 2000000 行的错误行为 20000。即错误率为 1%。但是因为不是每批次任务正好消费 200000 行，所以窗口的实际范围是 [2000000, 2200000]，即有 10% 的统计误差。")]),_._v(" "),a("p",[_._v("错误行不包括通过 where 条件过滤掉的行。但是包括没有对应的 Doris 表中的分区的行。")])]),_._v(" "),a("li",[a("p",[_._v("data_source_properties")]),_._v(" "),a("p",[a("code",[_._v("data_source_properties")]),_._v(" 中可以指定消费具体的 Kakfa partition。如果不指定，则默认消费所订阅的 topic 的所有 partition。")]),_._v(" "),a("p",[_._v("注意，当显式的指定了 partition，则导入作业不会再动态的检测 Kafka partition 的变化。如果没有指定，则会根据 kafka partition 的变化，动态调整需要消费的 partition。")])]),_._v(" "),a("li",[a("p",[_._v("strict_mode")]),_._v(" "),a("p",[_._v("Routine load 导入可以开启 strict mode 模式。开启方式为在 job_properties 中增加 "),a("code",[_._v('"strict_mode" = "true"')]),_._v(" 。默认的 strict mode 为关闭。")]),_._v(" "),a("p",[_._v("strict mode 模式的意思是：对于导入过程中的列类型转换进行严格过滤。严格过滤的策略如下：")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("对于列类型转换来说，如果 strict mode 为true，则错误的数据将被 filter。这里的错误数据是指：原始数据并不为空值，在参与列类型转换后结果为空值的这一类数据。")])]),_._v(" "),a("li",[a("p",[_._v("对于导入的某列由函数变换生成时，strict mode 对其不产生影响。")])]),_._v(" "),a("li",[a("p",[_._v("对于导入的某列类型包含范围限制的，如果原始数据能正常通过类型转换，但无法通过范围限制的，strict mode 对其也不产生影响。例如：如果类型是 decimal(1,0), 原始数据为 10，则属于可以通过类型转换但不在列声明的范围内。这种数据 strict 对其不产生影响。")])])])]),_._v(" "),a("li",[a("p",[_._v("merge_type\n数据的合并类型，一共支持三种类型APPEND、DELETE、MERGE 其中，APPEND是默认值，表示这批数据全部需要追加到现有数据中，DELETE 表示删除与这批数据key相同的所有行，MERGE 语义 需要与delete 条件联合使用，表示满足delete 条件的数据按照DELETE 语义处理其余的按照APPEND 语义处理")])])]),_._v(" "),a("h4",{attrs:{id:"strict-mode-与-source-data-的导入关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strict-mode-与-source-data-的导入关系"}},[_._v("#")]),_._v(" strict mode 与 source data 的导入关系")]),_._v(" "),a("p",[_._v("这里以列类型为 TinyInt 来举例")]),_._v(" "),a("blockquote",[a("p",[_._v("注：当表中的列允许导入空值时")])]),_._v(" "),a("table",[a("thead",[a("tr",[a("th",[_._v("source data")]),_._v(" "),a("th",[_._v("source data example")]),_._v(" "),a("th",[_._v("string to int")]),_._v(" "),a("th",[_._v("strict_mode")]),_._v(" "),a("th",[_._v("result")])])]),_._v(" "),a("tbody",[a("tr",[a("td",[_._v("空值")]),_._v(" "),a("td",[_._v("\\N")]),_._v(" "),a("td",[_._v("N/A")]),_._v(" "),a("td",[_._v("true or false")]),_._v(" "),a("td",[_._v("NULL")])]),_._v(" "),a("tr",[a("td",[_._v("not null")]),_._v(" "),a("td",[_._v("aaa or 2000")]),_._v(" "),a("td",[_._v("NULL")]),_._v(" "),a("td",[_._v("true")]),_._v(" "),a("td",[_._v("invalid data(filtered)")])]),_._v(" "),a("tr",[a("td",[_._v("not null")]),_._v(" "),a("td",[_._v("aaa")]),_._v(" "),a("td",[_._v("NULL")]),_._v(" "),a("td",[_._v("false")]),_._v(" "),a("td",[_._v("NULL")])]),_._v(" "),a("tr",[a("td",[_._v("not null")]),_._v(" "),a("td",[_._v("1")]),_._v(" "),a("td",[_._v("1")]),_._v(" "),a("td",[_._v("true or false")]),_._v(" "),a("td",[_._v("correct data")])])])]),_._v(" "),a("p",[_._v("这里以列类型为 Decimal(1,0) 举例")]),_._v(" "),a("blockquote",[a("p",[_._v("注：当表中的列允许导入空值时")])]),_._v(" "),a("table",[a("thead",[a("tr",[a("th",[_._v("source data")]),_._v(" "),a("th",[_._v("source data example")]),_._v(" "),a("th",[_._v("string to int")]),_._v(" "),a("th",[_._v("strict_mode")]),_._v(" "),a("th",[_._v("result")])])]),_._v(" "),a("tbody",[a("tr",[a("td",[_._v("空值")]),_._v(" "),a("td",[_._v("\\N")]),_._v(" "),a("td",[_._v("N/A")]),_._v(" "),a("td",[_._v("true or false")]),_._v(" "),a("td",[_._v("NULL")])]),_._v(" "),a("tr",[a("td",[_._v("not null")]),_._v(" "),a("td",[_._v("aaa")]),_._v(" "),a("td",[_._v("NULL")]),_._v(" "),a("td",[_._v("true")]),_._v(" "),a("td",[_._v("invalid data(filtered)")])]),_._v(" "),a("tr",[a("td",[_._v("not null")]),_._v(" "),a("td",[_._v("aaa")]),_._v(" "),a("td",[_._v("NULL")]),_._v(" "),a("td",[_._v("false")]),_._v(" "),a("td",[_._v("NULL")])]),_._v(" "),a("tr",[a("td",[_._v("not null")]),_._v(" "),a("td",[_._v("1 or 10")]),_._v(" "),a("td",[_._v("1")]),_._v(" "),a("td",[_._v("true or false")]),_._v(" "),a("td",[_._v("correct data")])])])]),_._v(" "),a("blockquote",[a("p",[_._v("注意：10 虽然是一个超过范围的值，但是因为其类型符合 decimal的要求，所以 strict mode对其不产生影响。10 最后会在其他 ETL 处理流程中被过滤。但不会被 strict mode 过滤。")])]),_._v(" "),a("h4",{attrs:{id:"访问-ssl-认证的-kafka-集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问-ssl-认证的-kafka-集群"}},[_._v("#")]),_._v(" 访问 SSL 认证的 Kafka 集群")]),_._v(" "),a("p",[_._v("访问 SSL 认证的 Kafka 集群需要用户提供用于认证 Kafka Broker 公钥的证书文件（ca.pem）。如果 Kafka 集群同时开启了客户端认证，则还需提供客户端的公钥（client.pem）、密钥文件（client.key），以及密钥密码。这里所需的文件需要先通过 "),a("code",[_._v("CREAE FILE")]),_._v(" 命令上传到 Doris 中，"),a("strong",[_._v("并且 catalog 名称为 "),a("code",[_._v("kafka")])]),_._v("。"),a("code",[_._v("CREATE FILE")]),_._v(" 命令的具体帮助可以参见 "),a("code",[_._v("HELP CREATE FILE;")]),_._v("。这里给出示例：")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("上传文件")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('CREATE FILE "ca.pem" PROPERTIES("url" = "https://example_url/kafka-key/ca.pem", "catalog" = "kafka");\nCREATE FILE "client.key" PROPERTIES("url" = "https://example_urlkafka-key/client.key", "catalog" = "kafka");\nCREATE FILE "client.pem" PROPERTIES("url" = "https://example_url/kafka-key/client.pem", "catalog" = "kafka");\n')])])])]),_._v(" "),a("li",[a("p",[_._v("创建例行导入作业")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v('CREATE ROUTINE LOAD db1.job1 on tbl1\nPROPERTIES\n(\n    "desired_concurrent_number"="1"\n)\nFROM KAFKA\n(\n    "kafka_broker_list"= "broker1:9091,broker2:9091",\n    "kafka_topic" = "my_topic",\n    "property.security.protocol" = "ssl",\n    "property.ssl.ca.location" = "FILE:ca.pem",\n    "property.ssl.certificate.location" = "FILE:client.pem",\n    "property.ssl.key.location" = "FILE:client.key",\n    "property.ssl.key.password" = "abcdefg"\n);\n')])])])])]),_._v(" "),a("blockquote",[a("p",[_._v("Doris 通过 Kafka 的 C++ API "),a("code",[_._v("librdkafka")]),_._v(" 来访问 Kafka 集群。"),a("code",[_._v("librdkafka")]),_._v(" 所支持的参数可以参阅")]),_._v(" "),a("p",[a("code",[_._v("https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md")])])]),_._v(" "),a("h3",{attrs:{id:"查看导入作业状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看导入作业状态"}},[_._v("#")]),_._v(" 查看导入作业状态")]),_._v(" "),a("p",[_._v("查看"),a("strong",[_._v("作业")]),_._v("状态的具体命令和示例可以通过 "),a("code",[_._v("HELP SHOW ROUTINE LOAD;")]),_._v(" 命令查看。")]),_._v(" "),a("p",[_._v("查看"),a("strong",[_._v("任务")]),_._v("运行状态的具体命令和示例可以通过 "),a("code",[_._v("HELP SHOW ROUTINE LOAD TASK;")]),_._v(" 命令查看。")]),_._v(" "),a("p",[_._v("只能查看当前正在运行中的任务，已结束和未开始的任务无法查看。")]),_._v(" "),a("h3",{attrs:{id:"修改作业属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改作业属性"}},[_._v("#")]),_._v(" 修改作业属性")]),_._v(" "),a("p",[_._v("用户可以修改已经创建的作业。具体说明可以通过 "),a("code",[_._v("HELP ALTER ROUTINE LOAD;")]),_._v(" 命令查看。或参阅 [ALTER ROUTINE LOAD](../../sql-reference/sql-statements/Data Manipulation/alter-routine-load.md)。")]),_._v(" "),a("h3",{attrs:{id:"作业控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作业控制"}},[_._v("#")]),_._v(" 作业控制")]),_._v(" "),a("p",[_._v("用户可以通过 "),a("code",[_._v("STOP/PAUSE/RESUME")]),_._v(" 三个命令来控制作业的停止，暂停和重启。可以通过 "),a("code",[_._v("HELP STOP ROUTINE LOAD;")]),_._v(", "),a("code",[_._v("HELP PAUSE ROUTINE LOAD;")]),_._v(" 以及 "),a("code",[_._v("HELP RESUME ROUTINE LOAD;")]),_._v(" 三个命令查看帮助和示例。")]),_._v(" "),a("h2",{attrs:{id:"其他说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他说明"}},[_._v("#")]),_._v(" 其他说明")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("例行导入作业和 ALTER TABLE 操作的关系")]),_._v(" "),a("ul",[a("li",[_._v("例行导入不会阻塞 SCHEMA CHANGE 和 ROLLUP 操作。但是注意如果 SCHEMA CHANGE 完成后，列映射关系无法匹配，则会导致作业的错误数据激增，最终导致作业暂停。建议通过在例行导入作业中显式指定列映射关系，以及通过增加 Nullable 列或带 Default 值的列来减少这类问题。")]),_._v(" "),a("li",[_._v("删除表的 Partition 可能会导致导入数据无法找到对应的 Partition，作业进入暂停。")])])]),_._v(" "),a("li",[a("p",[_._v("例行导入作业和其他导入作业的关系（LOAD, DELETE, INSERT）")]),_._v(" "),a("ul",[a("li",[_._v("例行导入和其他 LOAD 作业以及 INSERT 操作没有冲突。")]),_._v(" "),a("li",[_._v("当执行 DELETE 操作时，对应表分区不能有任何正在执行的导入任务。所以在执行 DELETE 操作前，可能需要先暂停例行导入作业，并等待已下发的 task 全部完成后，才可以执行 DELETE。")])])]),_._v(" "),a("li",[a("p",[_._v("例行导入作业和 DROP DATABASE/TABLE 操作的关系")]),_._v(" "),a("p",[_._v("当例行导入对应的 database 或 table 被删除后，作业会自动 CANCEL。")])]),_._v(" "),a("li",[a("p",[_._v("kafka 类型的例行导入作业和 kafka topic 的关系")]),_._v(" "),a("p",[_._v("当用户在创建例行导入声明的 "),a("code",[_._v("kafka_topic")]),_._v(" 在kafka集群中不存在时。")]),_._v(" "),a("ul",[a("li",[_._v("如果用户 kafka 集群的 broker 设置了 "),a("code",[_._v("auto.create.topics.enable = true")]),_._v("，则 "),a("code",[_._v("kafka_topic")]),_._v(" 会先被自动创建，自动创建的 partition 个数是由"),a("strong",[_._v("用户方的kafka集群")]),_._v("中的 broker 配置 "),a("code",[_._v("num.partitions")]),_._v(" 决定的。例行作业会正常的不断读取该 topic 的数据。")]),_._v(" "),a("li",[_._v("如果用户 kafka 集群的 broker 设置了 "),a("code",[_._v("auto.create.topics.enable = false")]),_._v(", 则 topic 不会被自动创建，例行作业会在没有读取任何数据之前就被暂停，状态为 "),a("code",[_._v("PAUSED")]),_._v("。")])]),_._v(" "),a("p",[_._v("所以，如果用户希望当 kafka topic 不存在的时候，被例行作业自动创建的话，只需要将"),a("strong",[_._v("用户方的kafka集群")]),_._v("中的 broker 设置 "),a("code",[_._v("auto.create.topics.enable = true")]),_._v(" 即可。")])]),_._v(" "),a("li",[a("p",[_._v("在网络隔离的环境中可能出现的问题\n在有些环境中存在网段和域名解析的隔离措施，所以需要注意")]),_._v(" "),a("ol",[a("li",[_._v("创建Routine load 任务中指定的 Broker list 必须能够被Doris服务访问")]),_._v(" "),a("li",[_._v("Kafka 中如果配置了"),a("code",[_._v("advertised.listeners")]),_._v(", "),a("code",[_._v("advertised.listeners")]),_._v(" 中的地址必须能够被Doris服务访问")])])])]),_._v(" "),a("h2",{attrs:{id:"相关参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关参数"}},[_._v("#")]),_._v(" 相关参数")]),_._v(" "),a("p",[_._v("一些系统配置参数会影响例行导入的使用。")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("max_routine_load_task_concurrent_num")]),_._v(" "),a("p",[_._v("FE 配置项，默认为 5，可以运行时修改。该参数限制了一个例行导入作业最大的子任务并发数。建议维持默认值。设置过大，可能导致同时并发的任务数过多，占用集群资源。")])]),_._v(" "),a("li",[a("p",[_._v("max_routine_load_task_num_per_be")]),_._v(" "),a("p",[_._v("FE 配置项，默认为5，可以运行时修改。该参数限制了每个 BE 节点最多并发执行的子任务个数。建议维持默认值。如果设置过大，可能导致并发任务数过多，占用集群资源。")])]),_._v(" "),a("li",[a("p",[_._v("max_routine_load_job_num")]),_._v(" "),a("p",[_._v("FE 配置项，默认为100，可以运行时修改。该参数限制的例行导入作业的总数，包括 NEED_SCHEDULED, RUNNING, PAUSE 这些状态。超过后，不能在提交新的作业。")])]),_._v(" "),a("li",[a("p",[_._v("max_consumer_num_per_group")]),_._v(" "),a("p",[_._v("BE 配置项，默认为 3。该参数表示一个子任务中最多生成几个 consumer 进行数据消费。对于 Kafka 数据源，一个 consumer 可能消费一个或多个 kafka partition。假设一个任务需要消费 6 个 kafka partition，则会生成 3 个 consumer，每个 consumer 消费 2 个 partition。如果只有 2 个 partition，则只会生成 2 个 consumer，每个 consumer 消费 1 个 partition。")])]),_._v(" "),a("li",[a("p",[_._v("push_write_mbytes_per_sec")]),_._v(" "),a("p",[_._v("BE 配置项。默认为 10，即 10MB/s。该参数为导入通用参数，不限于例行导入作业。该参数限制了导入数据写入磁盘的速度。对于 SSD 等高性能存储设备，可以适当增加这个限速。")])]),_._v(" "),a("li",[a("p",[_._v("max_tolerable_backend_down_num\nFE 配置项，默认值是0。在满足某些条件下，Doris可PAUSED的任务重新调度，即变成RUNNING。该参数为0代表只有所有BE节点是alive状态才允许重新调度。")])]),_._v(" "),a("li",[a("p",[_._v("period_of_auto_resume_min\nFE 配置项，默认是5分钟。Doris重新调度，只会在5分钟这个周期内，最多尝试3次. 如果3次都失败则锁定当前任务，后续不在进行调度。但可通过人为干预，进行手动恢复。")])])])])}),[],!1,null,null,null);v.default=e.exports}}]);