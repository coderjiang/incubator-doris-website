(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{812:function(t,a,e){"use strict";e.r(a);var _=e(43),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"stream-load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[t._v("#")]),t._v(" Stream load")]),t._v(" "),e("p",[t._v("Stream load 是一个同步的导入方式，用户通过发送 HTTP 协议发送请求将本地文件或数据流导入到 Doris 中。Stream load 同步执行导入并返回导入结果。用户可直接通过请求的返回体判断本次导入是否成功。")]),t._v(" "),e("p",[t._v("Stream load 主要适用于导入本地文件，或通过程序导入数据流中的数据。")]),t._v(" "),e("h2",{attrs:{id:"基本原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[t._v("#")]),t._v(" 基本原理")]),t._v(" "),e("p",[t._v("下图展示了 Stream load 的主要流程，省略了一些导入细节。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("                         ^      +\n                         |      |\n                         |      | 1A. User submit load to FE\n                         |      |\n                         |   +--v-----------+\n                         |   | FE           |\n5. Return result to user |   +--+-----------+\n                         |      |\n                         |      | 2. Redirect to BE\n                         |      |\n                         |   +--v-----------+\n                         +---+Coordinator BE| 1B. User submit load to BE\n                             +-+-----+----+-+\n                               |     |    |\n                         +-----+     |    +-----+\n                         |           |          | 3. Distrbute data\n                         |           |          |\n                       +-v-+       +-v-+      +-v-+\n                       |BE |       |BE |      |BE |\n                       +---+       +---+      +---+\n")])])]),e("p",[t._v("Stream load 中，Doris 会选定一个节点作为 Coordinator 节点。该节点负责接数据并分发数据到其他数据节点。")]),t._v(" "),e("p",[t._v("用户通过 HTTP 协议提交导入命令。如果提交到 FE，则 FE 会通过 HTTP redirect 指令将请求转发给某一个 BE。用户也可以直接提交导入命令给某一指定 BE。")]),t._v(" "),e("p",[t._v("导入的最终结果由 Coordinator BE 返回给用户。")]),t._v(" "),e("h2",{attrs:{id:"基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[t._v("#")]),t._v(" 基本操作")]),t._v(" "),e("h3",{attrs:{id:"创建导入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建导入"}},[t._v("#")]),t._v(" 创建导入")]),t._v(" "),e("p",[t._v("Stream load 通过 HTTP 协议提交和传输数据。这里通过 "),e("code",[t._v("curl")]),t._v(" 命令展示如何提交导入。")]),t._v(" "),e("p",[t._v("用户也可以通过其他 HTTP client 进行操作。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('curl --location-trusted -u user:passwd [-H ""...] -T data.file -XPUT http://fe_host:http_port/api/{db}/{table}/_stream_load\n\nHeader 中支持属性见下面的 ‘导入任务参数’ 说明 \n格式为: -H "key1:value1"\n')])])]),e("p",[t._v("示例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('curl --location-trusted -u root -T date -H "label:123" http://abc.com:8030/api/test/date/_stream_load\n')])])]),e("p",[t._v("创建导入的详细语法帮助执行 "),e("code",[t._v("HELP STREAM LOAD")]),t._v(" 查看, 下面主要介绍创建 Stream load 的部分参数意义。")]),t._v(" "),e("h4",{attrs:{id:"签名参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#签名参数"}},[t._v("#")]),t._v(" 签名参数")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("user/passwd")]),t._v(" "),e("p",[t._v("Stream load 由于创建导入的协议使用的是 HTTP 协议，通过 Basic access authentication 进行签名。Doris 系统会根据签名验证用户身份和导入权限。")])])]),t._v(" "),e("h4",{attrs:{id:"导入任务参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入任务参数"}},[t._v("#")]),t._v(" 导入任务参数")]),t._v(" "),e("p",[t._v("Stream load 由于使用的是 HTTP 协议，所以所有导入任务有关的参数均设置在 Header 中。下面主要介绍了 Stream load 导入任务参数的部分参数意义。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("label")]),t._v(" "),e("p",[t._v("导入任务的标识。每个导入任务，都有一个在单 database 内部唯一的 label。label 是用户在导入命令中自定义的名称。通过这个 label，用户可以查看对应导入任务的执行情况。")]),t._v(" "),e("p",[t._v("label 的另一个作用，是防止用户重复导入相同的数据。"),e("strong",[t._v("强烈推荐用户同一批次数据使用相同的 label。这样同一批次数据的重复请求只会被接受一次，保证了 At-Most-Once")])]),t._v(" "),e("p",[t._v("当 label 对应的导入作业状态为 CANCELLED 时，该 label 可以再次被使用。")])]),t._v(" "),e("li",[e("p",[t._v("max_filter_ratio")]),t._v(" "),e("p",[t._v("导入任务的最大容忍率，默认为0容忍，取值范围是0~1。当导入的错误率超过该值，则导入失败。")]),t._v(" "),e("p",[t._v("如果用户希望忽略错误的行，可以通过设置这个参数大于 0，来保证导入可以成功。")]),t._v(" "),e("p",[t._v("计算公式为：")]),t._v(" "),e("p",[e("code",[t._v("(dpp.abnorm.ALL / (dpp.abnorm.ALL + dpp.norm.ALL ) ) > max_filter_ratio")])]),t._v(" "),e("p",[e("code",[t._v("dpp.abnorm.ALL")]),t._v(" 表示数据质量不合格的行数。如类型不匹配，列数不匹配，长度不匹配等等。")]),t._v(" "),e("p",[e("code",[t._v("dpp.norm.ALL")]),t._v(" 指的是导入过程中正确数据的条数。可以通过 "),e("code",[t._v("SHOW LOAD")]),t._v(" 命令查询导入任务的正确数据量。")]),t._v(" "),e("p",[t._v("原始文件的行数 = "),e("code",[t._v("dpp.abnorm.ALL + dpp.norm.ALL")])])]),t._v(" "),e("li",[e("p",[t._v("where")]),t._v(" "),e("p",[t._v("导入任务指定的过滤条件。Stream load 支持对原始数据指定 where 语句进行过滤。被过滤的数据将不会被导入，也不会参与 filter ratio 的计算，但会被计入"),e("code",[t._v("num_rows_unselected")]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("partition")]),t._v(" "),e("p",[t._v("待导入表的 Partition 信息，如果待导入数据不属于指定的 Partition 则不会被导入。这些数据将计入 "),e("code",[t._v("dpp.abnorm.ALL")])])]),t._v(" "),e("li",[e("p",[t._v("columns")]),t._v(" "),e("p",[t._v("待导入数据的函数变换配置，目前 Stream load 支持的函数变换方法包含列的顺序变化以及表达式变换，其中表达式变换的方法与查询语句的一致。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("列顺序变换例子：原始数据有两列，目前表也有两列（c1,c2）但是原始文件的第一列对应的是目标表的c2列, 而原始文件的第二列对应的是目标表的c1列，则写法如下：\ncolumns: c2,c1\n\n表达式变换例子：原始文件有两列，目标表也有两列（c1,c2）但是原始文件的两列均需要经过函数变换才能对应目标表的两列，则写法如下：\ncolumns: tmp_c1, tmp_c2, c1 = year(tmp_c1), c2 = month(tmp_c2)\n其中 tmp_*是一个占位符，代表的是原始文件中的两个原始列。\n")])])])]),t._v(" "),e("li",[e("p",[t._v("exec_mem_limit")]),t._v(" "),e("p",[t._v("导入内存限制。默认为 2GB，单位为字节。")])]),t._v(" "),e("li",[e("p",[t._v("strict_mode")]),t._v(" "),e("p",[t._v("Stream load 导入可以开启 strict mode 模式。开启方式为在 HEADER 中声明 "),e("code",[t._v("strict_mode=true")]),t._v(" 。默认的 strict mode 为关闭。")]),t._v(" "),e("p",[t._v("strict mode 模式的意思是：对于导入过程中的列类型转换进行严格过滤。严格过滤的策略如下：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("对于列类型转换来说，如果 strict mode 为true，则错误的数据将被 filter。这里的错误数据是指：原始数据并不为空值，在参与列类型转换后结果为空值的这一类数据。")])]),t._v(" "),e("li",[e("p",[t._v("对于导入的某列由函数变换生成时，strict mode 对其不产生影响。")])]),t._v(" "),e("li",[e("p",[t._v("对于导入的某列类型包含范围限制的，如果原始数据能正常通过类型转换，但无法通过范围限制的，strict mode 对其也不产生影响。例如：如果类型是 decimal(1,0), 原始数据为 10，则属于可以通过类型转换但不在列声明的范围内。这种数据 strict 对其不产生影响。")])])])]),t._v(" "),e("li",[e("p",[t._v("merge_type\n数据的合并类型，一共支持三种类型APPEND、DELETE、MERGE 其中，APPEND是默认值，表示这批数据全部需要追加到现有数据中，DELETE 表示删除与这批数据key相同的所有行，MERGE 语义 需要与delete 条件联合使用，表示满足delete 条件的数据按照DELETE 语义处理其余的按照APPEND 语义处理")])])]),t._v(" "),e("h4",{attrs:{id:"strict-mode-与-source-data-的导入关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#strict-mode-与-source-data-的导入关系"}},[t._v("#")]),t._v(" strict mode 与 source data 的导入关系")]),t._v(" "),e("p",[t._v("这里以列类型为 TinyInt 来举例")]),t._v(" "),e("blockquote",[e("p",[t._v("注：当表中的列允许导入空值时")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("source data")]),t._v(" "),e("th",[t._v("source data example")]),t._v(" "),e("th",[t._v("string to int")]),t._v(" "),e("th",[t._v("strict_mode")]),t._v(" "),e("th",[t._v("result")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("空值")]),t._v(" "),e("td",[t._v("\\N")]),t._v(" "),e("td",[t._v("N/A")]),t._v(" "),e("td",[t._v("true or false")]),t._v(" "),e("td",[t._v("NULL")])]),t._v(" "),e("tr",[e("td",[t._v("not null")]),t._v(" "),e("td",[t._v("aaa or 2000")]),t._v(" "),e("td",[t._v("NULL")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("invalid data(filtered)")])]),t._v(" "),e("tr",[e("td",[t._v("not null")]),t._v(" "),e("td",[t._v("aaa")]),t._v(" "),e("td",[t._v("NULL")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("NULL")])]),t._v(" "),e("tr",[e("td",[t._v("not null")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("true or false")]),t._v(" "),e("td",[t._v("correct data")])])])]),t._v(" "),e("p",[t._v("这里以列类型为 Decimal(1,0) 举例")]),t._v(" "),e("blockquote",[e("p",[t._v("注：当表中的列允许导入空值时")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("source data")]),t._v(" "),e("th",[t._v("source data example")]),t._v(" "),e("th",[t._v("string to int")]),t._v(" "),e("th",[t._v("strict_mode")]),t._v(" "),e("th",[t._v("result")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("空值")]),t._v(" "),e("td",[t._v("\\N")]),t._v(" "),e("td",[t._v("N/A")]),t._v(" "),e("td",[t._v("true or false")]),t._v(" "),e("td",[t._v("NULL")])]),t._v(" "),e("tr",[e("td",[t._v("not null")]),t._v(" "),e("td",[t._v("aaa")]),t._v(" "),e("td",[t._v("NULL")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("invalid data(filtered)")])]),t._v(" "),e("tr",[e("td",[t._v("not null")]),t._v(" "),e("td",[t._v("aaa")]),t._v(" "),e("td",[t._v("NULL")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("NULL")])]),t._v(" "),e("tr",[e("td",[t._v("not null")]),t._v(" "),e("td",[t._v("1 or 10")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("true or false")]),t._v(" "),e("td",[t._v("correct data")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("注意：10 虽然是一个超过范围的值，但是因为其类型符合 decimal的要求，所以 strict mode对其不产生影响。10 最后会在其他 ETL 处理流程中被过滤。但不会被 strict mode 过滤。")])]),t._v(" "),e("h3",{attrs:{id:"返回结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回结果"}},[t._v("#")]),t._v(" 返回结果")]),t._v(" "),e("p",[t._v("由于 Stream load 是一种同步的导入方式，所以导入的结果会通过创建导入的返回值直接返回给用户。")]),t._v(" "),e("p",[t._v("示例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "TxnId": 1003,\n    "Label": "b6f3bc78-0d2c-45d9-9e4c-faa0a0149bee",\n    "Status": "Success",\n    "ExistingJobStatus": "FINISHED", // optional\n    "Message": "OK",\n    "NumberTotalRows": 1000000,\n    "NumberLoadedRows": 1000000,\n    "NumberFilteredRows": 1,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 40888898,\n    "LoadTimeMs": 2144,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 2,\n    "ReadDataTimeMs": 325,\n    "WriteDataTimeMs": 1933,\n    "CommitAndPublishTimeMs": 106,\n    "ErrorURL": "http://192.168.1.1:8042/api/_load_error_log?file=__shard_0/error_log_insert_stmt_db18266d4d9b4ee5-abb00ddd64bdf005_db18266d4d9b4ee5_abb00ddd64bdf005"\n}\n')])])]),e("p",[t._v("下面主要解释了 Stream load 导入结果参数：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("TxnId：导入的事务ID。用户可不感知。")])]),t._v(" "),e("li",[e("p",[t._v("Label：导入 Label。由用户指定或系统自动生成。")])]),t._v(" "),e("li",[e("p",[t._v("Status：导入完成状态。")]),t._v(" "),e("p",[t._v('"Success"：表示导入成功。')]),t._v(" "),e("p",[t._v('"Publish Timeout"：该状态也表示导入已经完成，只是数据可能会延迟可见，无需重试。')]),t._v(" "),e("p",[t._v('"Label Already Exists"：Label 重复，需更换 Label。')]),t._v(" "),e("p",[t._v('"Fail"：导入失败。')])]),t._v(" "),e("li",[e("p",[t._v("ExistingJobStatus：已存在的 Label 对应的导入作业的状态。")]),t._v(" "),e("p",[t._v('这个字段只有在当 Status 为 "Label Already Exists" 是才会显示。用户可以通过这个状态，知晓已存在 Label 对应的导入作业的状态。"RUNNING" 表示作业还在执行，"FINISHED" 表示作业成功。')])]),t._v(" "),e("li",[e("p",[t._v("Message：导入错误信息。")])]),t._v(" "),e("li",[e("p",[t._v("NumberTotalRows：导入总处理的行数。")])]),t._v(" "),e("li",[e("p",[t._v("NumberLoadedRows：成功导入的行数。")])]),t._v(" "),e("li",[e("p",[t._v("NumberFilteredRows：数据质量不合格的行数。")])]),t._v(" "),e("li",[e("p",[t._v("NumberUnselectedRows：被 where 条件过滤的行数。")])]),t._v(" "),e("li",[e("p",[t._v("LoadBytes：导入的字节数。")])]),t._v(" "),e("li",[e("p",[t._v("LoadTimeMs：导入完成时间。单位毫秒。")])]),t._v(" "),e("li",[e("p",[t._v("BeginTxnTimeMs：向Fe请求开始一个事务所花费的时间，单位毫秒。")])]),t._v(" "),e("li",[e("p",[t._v("StreamLoadPutTimeMs：向Fe请求获取导入数据执行计划所花费的时间，单位毫秒。")])]),t._v(" "),e("li",[e("p",[t._v("ReadDataTimeMs：读取数据所花费的时间，单位毫秒。")])]),t._v(" "),e("li",[e("p",[t._v("WriteDataTimeMs：执行写入数据操作所花费的时间，单位毫秒。")])]),t._v(" "),e("li",[e("p",[t._v("CommitAndPublishTimeMs：向Fe请求提交并且发布事务所花费的时间，单位毫秒。")])]),t._v(" "),e("li",[e("p",[t._v("ErrorURL：如果有数据质量问题，通过访问这个 URL 查看具体错误行。")])])]),t._v(" "),e("blockquote",[e("p",[t._v("注意：由于 Stream load 是同步的导入方式，所以并不会在 Doris 系统中记录导入信息，用户无法异步的通过查看导入命令看到 Stream load。使用时需监听创建导入请求的返回值获取导入结果。")])]),t._v(" "),e("h3",{attrs:{id:"取消导入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取消导入"}},[t._v("#")]),t._v(" 取消导入")]),t._v(" "),e("p",[t._v("用户无法手动取消 Stream load，Stream load 在超时或者导入错误后会被系统自动取消。")]),t._v(" "),e("h2",{attrs:{id:"相关系统配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关系统配置"}},[t._v("#")]),t._v(" 相关系统配置")]),t._v(" "),e("h3",{attrs:{id:"fe-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fe-配置"}},[t._v("#")]),t._v(" FE 配置")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("stream_load_default_timeout_second")]),t._v(" "),e("p",[t._v("导入任务的超时时间(以秒为单位)，导入任务在设定的 timeout 时间内未完成则会被系统取消，变成 CANCELLED。")]),t._v(" "),e("p",[t._v("默认的 timeout 时间为 600 秒。如果导入的源文件无法在规定时间内完成导入，用户可以在 stream load 请求中设置单独的超时时间。")]),t._v(" "),e("p",[t._v("或者调整 FE 的参数"),e("code",[t._v("stream_load_default_timeout_second")]),t._v(" 来设置全局的默认超时时间。")])])]),t._v(" "),e("h3",{attrs:{id:"be-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#be-配置"}},[t._v("#")]),t._v(" BE 配置")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("streaming_load_max_mb")]),t._v(" "),e("p",[t._v("Stream load 的最大导入大小，默认为 10G，单位是 MB。如果用户的原始文件超过这个值，则需要调整 BE 的参数 "),e("code",[t._v("streaming_load_max_mb")]),t._v("。")])])]),t._v(" "),e("h2",{attrs:{id:"最佳实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),e("h3",{attrs:{id:"应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),e("p",[t._v("使用 Stream load 的最合适场景就是原始文件在内存中，或者在磁盘中。其次，由于 Stream load 是一种同步的导入方式，所以用户如果希望用同步方式获取导入结果，也可以使用这种导入。")]),t._v(" "),e("h3",{attrs:{id:"数据量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据量"}},[t._v("#")]),t._v(" 数据量")]),t._v(" "),e("p",[t._v("由于 Stream load 的原理是由 BE 发起的导入并分发数据，建议的导入数据量在 1G 到 10G 之间。由于默认的最大 Stream load 导入数据量为 10G，所以如果要导入超过 10G 的文件需要修改 BE 的配置 "),e("code",[t._v("streaming_load_max_mb")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("比如：待导入文件大小为15G\n修改 BE 配置 streaming_load_max_mb 为 16000 即可。\n")])])]),e("p",[t._v("Stream load 的默认超时为 300秒，按照 Doris 目前最大的导入限速来看，约超过 3G 的文件就需要修改导入任务默认超时时间了。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("导入任务超时时间 = 导入数据量 / 10M/s （具体的平均导入速度需要用户根据自己的集群情况计算）\n例如：导入一个 10G 的文件\ntimeout = 1000s 等于 10G / 10M/s\n")])])]),e("h3",{attrs:{id:"完整例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完整例子"}},[t._v("#")]),t._v(" 完整例子")]),t._v(" "),e("p",[t._v("数据情况： 数据在发送导入请求端的本地磁盘路径 /home/store_sales 中，导入的数据量约为 15G，希望导入到数据库 bj_sales 的表 store_sales 中。")]),t._v(" "),e("p",[t._v("集群情况：Stream load 的并发数不受集群大小影响。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("step1: 导入文件大小是否超过默认的最大导入大小10G")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("修改 BE conf\nstreaming_load_max_mb = 16000\n")])])])]),t._v(" "),e("li",[e("p",[t._v("step2: 计算大概的导入时间是否超过默认 timeout 值")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("导入时间 ≈ 15000 / 10 = 1500s\n超过了默认的 timeout 时间，需要修改 FE 的配置\nstream_load_default_timeout_second = 1500\n")])])])]),t._v(" "),e("li",[e("p",[t._v("step3：创建导入任务")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('curl --location-trusted -u user:password -T /home/store_sales -H "label:abc" http://abc.com:8000/api/bj_sales/store_sales/_stream_load\n')])])])])]),t._v(" "),e("h2",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Label Already Exists")]),t._v(" "),e("p",[t._v("Stream load 的 Label 重复排查步骤如下：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("是否和其他导入方式已经存在的导入 Label 冲突：")]),t._v(" "),e("p",[t._v("由于 Doris 系统中导入的 Label 不区分导入方式，所以存在其他导入方式使用了相同 Label 的问题。")]),t._v(" "),e("p",[t._v("通过 "),e("code",[t._v("SHOW LOAD WHERE LABEL = “xxx”")]),t._v("，其中 xxx 为重复的 Label 字符串，查看是否已经存在一个 FINISHED 导入的 Label 和用户申请创建的 Label 相同。")])]),t._v(" "),e("li",[e("p",[t._v("是否 Stream load 同一个作业被重复提交了")]),t._v(" "),e("p",[t._v("由于 Stream load 是 HTTP 协议提交创建导入任务，一般各个语言的 HTTP Client 均会自带请求重试逻辑。Doris 系统在接受到第一个请求后，已经开始操作 Stream load，但是由于没有及时返回给 Client 端结果， Client 端会发生再次重试创建请求的情况。这时候 Doris 系统由于已经在操作第一个请求，所以第二个请求已经就会被报 Label Already Exists 的情况。")]),t._v(" "),e("p",[t._v("排查上述可能的方法：使用 Label 搜索 FE Master 的日志，看是否存在同一个 Label 出现了两次 "),e("code",[t._v("redirect load action to destination=")]),t._v(" 的情况。如果有就说明，请求被 Client 端重复提交了。")]),t._v(" "),e("p",[t._v("建议用户根据当前请求的数据量，计算出大致导入的时间，并根据导入超时时间改大 Client 端的请求超时时间，避免请求被 Client 端多次提交。")])])])])])])}),[],!1,null,null,null);a.default=v.exports}}]);