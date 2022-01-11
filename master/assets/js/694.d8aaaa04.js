(window.webpackJsonp=window.webpackJsonp||[]).push([[694],{1145:function(t,s,a){"use strict";a.r(s);var e=a(55),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"多租户和资源划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多租户和资源划分"}},[t._v("#")]),t._v(" 多租户和资源划分")]),t._v(" "),a("p",[t._v("Doris 的多租户和资源隔离方案，主要目的是为了多用户在同一 Doris 集群内进行数据操作时，减少相互之间的干扰，能够将集群资源更合理的分配给各用户。")]),t._v(" "),a("p",[t._v("该方案主要分为两部分，一是集群内节点级别的资源组划分，二是针对单个查询的资源限制。")]),t._v(" "),a("h2",{attrs:{id:"doris-中的节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-中的节点"}},[t._v("#")]),t._v(" Doris 中的节点")]),t._v(" "),a("p",[t._v("首先先简单介绍一下 Doris 的节点组成。一个 Doris 集群中有两类节点：Frontend(FE) 和 Backend(BE)。")]),t._v(" "),a("p",[t._v("FE 主要负责元数据管理、集群管理、用户请求的接入和查询计划的解析等工作。")]),t._v(" "),a("p",[t._v("BE 主要负责数据存储、查询计划的执行等工作。")]),t._v(" "),a("p",[t._v("FE 不参与用户数据的处理计算等工作，因此是一个资源消耗较低的节点。而 BE 负责所有的数据计算、任务处理，属于资源消耗型的节点。因此，本文所介绍的资源划分及资源限制方案，都是针对 BE 节点的。FE 节点因为资源消耗相对较低，并且还可以横向扩展，因此通常无需做资源上的隔离和限制，FE 节点由所有用户共享即可。")]),t._v(" "),a("h2",{attrs:{id:"节点资源划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点资源划分"}},[t._v("#")]),t._v(" 节点资源划分")]),t._v(" "),a("p",[t._v("节点资源划分，是指将一个 Doris 集群内的 BE 节点设置标签（Tag），标签相同的 BE 节点组成一个资源组（Resource Group）。资源组可以看作是数据存储和计算的一个管理单元。下面我们通过一个具体示例，来介绍资源组的使用方式。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("为 BE 节点设置标签")]),t._v(" "),a("p",[t._v("假设当前 Doris 集群有 6 个 BE 节点。分别为 host[1-6]。在初始情况下，所有节点都属于一个默认资源组（Default）。")]),t._v(" "),a("p",[t._v("我们可以使用以下命令将这6个节点划分成3个资源组：group_a、group_b、group_c：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" system "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("modify")]),t._v(" backend "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host1:9050"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag.location"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group_a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" system "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("modify")]),t._v(" backend "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host2:9050"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag.location"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group_a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" system "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("modify")]),t._v(" backend "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host3:9050"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag.location"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group_b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" system "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("modify")]),t._v(" backend "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host4:9050"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag.location"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group_b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" system "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("modify")]),t._v(" backend "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host5:9050"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag.location"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group_c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" system "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("modify")]),t._v(" backend "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host6:9050"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag.location"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group_c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这里我们将 "),a("code",[t._v("host[1-2]")]),t._v(" 组成资源组 "),a("code",[t._v("group_a")]),t._v("，"),a("code",[t._v("host[3-4]")]),t._v(" 组成资源组 "),a("code",[t._v("group_b")]),t._v("，"),a("code",[t._v("host[5-6]")]),t._v(" 组成资源组 "),a("code",[t._v("group_c")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("注：一个 BE 只支持设置一个 Tag。")])])]),t._v(" "),a("li",[a("p",[t._v("按照资源组分配数据分布")]),t._v(" "),a("p",[t._v("资源组划分好后。我们可以将用户数据的不同副本分布在不同资源组内。假设一张用户表 UserTable。我们希望在3个资源组内各存放一个副本，则可以通过如下建表语句实现：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" UserTable\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("distributed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" buckets "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nproperties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"replication_allocation"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag.location.group_a:1, tag.location.group_b:1, tag.location.group_c:1"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这样一来，表 UserTable 中的数据，将会以3副本的形式，分别存储在资源组 group_a、group_b、group_c所在的节点中。")]),t._v(" "),a("p",[t._v("下图展示了当前的节点划分和数据分布：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" ┌────────────────────────────────────────────────────┐\n │                                                    │\n │         ┌──────────────────┐  ┌──────────────────┐ │\n │         │ host1            │  │ host2            │ │\n │         │  ┌─────────────┐ │  │                  │ │\n │ group_a │  │   replica1  │ │  │                  │ │\n │         │  └─────────────┘ │  │                  │ │\n │         │                  │  │                  │ │\n │         └──────────────────┘  └──────────────────┘ │\n │                                                    │\n ├────────────────────────────────────────────────────┤\n ├────────────────────────────────────────────────────┤\n │                                                    │\n │         ┌──────────────────┐  ┌──────────────────┐ │\n │         │ host3            │  │ host4            │ │\n │         │                  │  │  ┌─────────────┐ │ │\n │ group_b │                  │  │  │   replica2  │ │ │\n │         │                  │  │  └─────────────┘ │ │\n │         │                  │  │                  │ │\n │         └──────────────────┘  └──────────────────┘ │\n │                                                    │\n ├────────────────────────────────────────────────────┤\n ├────────────────────────────────────────────────────┤\n │                                                    │\n │         ┌──────────────────┐  ┌──────────────────┐ │\n │         │ host5            │  │ host6            │ │\n │         │                  │  │  ┌─────────────┐ │ │\n │ group_c │                  │  │  │   replica3  │ │ │\n │         │                  │  │  └─────────────┘ │ │\n │         │                  │  │                  │ │\n │         └──────────────────┘  └──────────────────┘ │\n │                                                    │\n └────────────────────────────────────────────────────┘\n")])])])]),t._v(" "),a("li",[a("p",[t._v("使用不同资源组进行数据查询")]),t._v(" "),a("p",[t._v("在前两步执行完成后，我们就可以通过设置用户的资源使用权限，来限制某一用户的查询，只能使用指定资源组中的节点来执行。")]),t._v(" "),a("p",[t._v("比如我们可以通过以下语句，限制 user1 只能使用 "),a("code",[t._v("group_a")]),t._v(" 资源组中的节点进行数据查询，user2 只能使用 "),a("code",[t._v("group_b")]),t._v(" 资源组，而 user3 可以同时使用 3 个资源组：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" property "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resource_tags.location'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'group_a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" property "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user2'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resource_tags.location'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'group_b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" property "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user3'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resource_tags.location'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'group_a, group_b, group_c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("设置完成后，user1 在发起对 UserTable 表的查询时，只会访问 "),a("code",[t._v("group_a")]),t._v(" 资源组内节点上的数据副本，并且查询仅会使用 "),a("code",[t._v("group_a")]),t._v(" 资源组内的节点计算资源。而 user3 的查询可以使用任意资源组内的副本和计算资源。")]),t._v(" "),a("p",[t._v("这样，我们通过对节点的划分，以及对用户的资源使用限制，实现了不同用户查询上的物理资源隔离。更进一步，我们可以给不同的业务部门创建不同的用户，并限制每个用户使用不同的资源组。以避免不同业务部分之间使用资源干扰。比如集群内有一张业务表需要共享给所有9个业务部门使用，但是希望能够尽量避免不同部门之间的资源抢占。则我们可以为这张表创建3个副本，分别存储在3个资源组中。接下来，我们为9个业务部门创建9个用户，每3个用户限制使用一个资源组。这样，资源的竞争程度就由9降低到了3。")]),t._v(" "),a("p",[t._v("另一方面，针对在线和离线任务的隔离。我们可以利用资源组的方式实现。比如我们可以将节点划分为 Online 和 Offline 两个资源组。表数据依然以3副本的方式存储，其中 2 个副本存放在 Online 资源组，1 个副本存放在 Offline 资源组。Online 资源组主要用于高并发低延迟的在线数据服务，而一些大查询或离线ETL操作，则可以使用 Offline 资源组中的节点执行。从而实现在统一集群内同时提供在线和离线服务的能力。")])])]),t._v(" "),a("h2",{attrs:{id:"单查询资源限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单查询资源限制"}},[t._v("#")]),t._v(" 单查询资源限制")]),t._v(" "),a("p",[t._v("前面提到的资源组方法是节点级别的资源隔离和限制。而在资源组内，依然可能发生资源抢占问题。比如前文提到的将3个业务部门安排在同一资源组内。虽然降低了资源竞争程度，但是这3各部门的查询依然有可能相互影响。")]),t._v(" "),a("p",[t._v("因此，除了资源组方案外，Doris 还提供了对单查询的资源限制功能。")]),t._v(" "),a("p",[t._v("目前 Doris 对单查询的资源限制主要分为 CPU 和 内存限制两方面。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("内存限制")]),t._v(" "),a("p",[t._v("Doris 可以限制一个查询被允许使用的最大内存开销。以保证集群的内存资源不会被某一个查询全部占用。我们可以通过以下方式设置内存限制：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 设置会话变量 exec_mem_limit。则之后该会话内（连接内）的所有查询都使用这个内存限制。\nset exec_mem_limit=1G;\n// 设置全局变量 exec_mem_limit。则之后所有新会话（新连接）的所有查询都使用这个内存限制。\nset global exec_mem_limit=1G;\n// 在 SQL 中设置变量 exec_mem_limit。则该变量仅影响这个 SQL。\nselect /*+ SET_VAR(exec_mem_limit=1G) */ id, name from tbl where xxx;\n")])])]),a("p",[t._v("因为 Doris 的查询引擎是基于全内存的 MPP 查询框架。因此当一个查询的内存使用超过限制后，查询会被终止。因此，当一个查询无法在合理的内存限制下运行时，我们就需要通过一些 SQL 优化手段，或者集群扩容的方式来解决了。")])]),t._v(" "),a("li",[a("p",[t._v("CPU 限制")]),t._v(" "),a("p",[t._v("用户可以通过以下方式限制查询的 CPU 资源：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 设置会话变量 cpu_resource_limit。则之后该会话内（连接内）的所有查询都使用这个CPU限制。\nset cpu_resource_limit = 2\n// 设置用户的属性 cpu_resource_limit，则所有该用户的查询情况都使用这个CPU限制。该属性的优先级高于会话变量 cpu_resource_limit\nset property for 'user1' 'cpu_resource_limit' = '3';\n")])])]),a("p",[a("code",[t._v("cpu_resource_limit")]),t._v(" 的取值是一个相对值，取值越大则能够使用的 CPU 资源越多。但一个查询能使用的CPU上限也取决于表的分区分桶数。原则上，一个查询的最大 CPU 使用量和查询涉及到的 tablet 数量正相关。极端情况下，假设一个查询仅涉及到一个 tablet，则即使 "),a("code",[t._v("cpu_resource_limit")]),t._v(" 设置一个较大值，也仅能使用 1 个 CPU 资源。")])])]),t._v(" "),a("p",[t._v("通过内存和CPU的资源限制。我们可以在一个资源组内，将用户的查询进行更细粒度的资源划分。比如我们可以让部分时效性要求不高，但是计算量很大的离线任务使用更少的CPU资源和更多的内存资源。而部分延迟敏感的在线任务，使用更多的CPU资源以及合理的内存资源。")]),t._v(" "),a("h2",{attrs:{id:"最佳实践和向前兼容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践和向前兼容"}},[t._v("#")]),t._v(" 最佳实践和向前兼容")]),t._v(" "),a("p",[t._v("Tag 划分和 CPU 限制是 0.15 版本中的新功能。为了保证可以从老版本平滑升级，Doris 做了如下的向前兼容：")]),t._v(" "),a("ol",[a("li",[t._v("每个 BE 节点会有一个默认的 Tag："),a("code",[t._v('"tag.location": "default"')]),t._v("。")]),t._v(" "),a("li",[t._v("通过 "),a("code",[t._v("alter system add backend")]),t._v(" 语句新增的 BE 节点也会默认设置 Tag："),a("code",[t._v('"tag.location": "default"')]),t._v("。")]),t._v(" "),a("li",[t._v("所有表的副本分布默认修改为："),a("code",[t._v('"tag.location.default:xx')]),t._v("。其中 xx 为原副本数量。")]),t._v(" "),a("li",[t._v("用户依然可以通过 "),a("code",[t._v('"replication_num" = "xx"')]),t._v(" 在建表语句中指定副本数，这种属性将会自动转换成："),a("code",[t._v('"tag.location.default:xx')]),t._v("。从而保证无需修改原建表语句。")]),t._v(" "),a("li",[t._v("默认情况下，单查询的内存限制为单节点2GB，CPU资源无限制，和原有行为保持一致。且用户的 "),a("code",[t._v("resource_tags.location")]),t._v(" 属性为空，即默认情况下，用户可以访问任意 Tag 的 BE，和原有行为保持一致。")])]),t._v(" "),a("p",[t._v("这里我们给出一个从原集群升级到 0.15 版本后，开始使用资源划分功能的步骤示例：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("关闭数据修复与均衡逻辑")]),t._v(" "),a("p",[t._v("因为升级后，BE的默认Tag为 "),a("code",[t._v('"tag.location": "default"')]),t._v("，而表的默认副本分布为："),a("code",[t._v('"tag.location.default:xx')]),t._v("。所以如果直接修改 BE 的 Tag，系统会自动检测到副本分布的变化，从而开始数据重分布。这可能会占用部分系统资源。所以我们可以在修改 Tag 前，先关闭数据修复与均衡逻辑，以保证我们在规划资源时，不会有副本重分布的操作。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");\nADMIN SET FRONTEND CONFIG ("disable_tablet_scheduler" = "true");\n')])])])]),t._v(" "),a("li",[a("p",[t._v("设置 Tag 和表副本分布")]),t._v(" "),a("p",[t._v("接下来可以通过 "),a("code",[t._v("alter system modify backend")]),t._v(" 语句进行 BE 的 Tag 设置。以及通过 "),a("code",[t._v("alter table")]),t._v(" 语句修改表的副本分布策略。示例如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('alter system modify backend "host1:9050, 1212:9050" set ("tag.location" = "group_a");\nalter table my_table modify partition p1 set ("replication_allocation" = "tag.location.group_a:2");\n')])])])]),t._v(" "),a("li",[a("p",[t._v("开启数据修复与均衡逻辑")]),t._v(" "),a("p",[t._v("在 Tag 和副本分布都设置完毕后，我们可以开启数据修复与均衡逻辑来触发数据的重分布了。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ADMIN SET FRONTEND CONFIG ("disable_balance" = "false");\nADMIN SET FRONTEND CONFIG ("disable_tablet_scheduler" = "false");\n')])])]),a("p",[t._v("该过程根据涉及到的数据量会持续一段时间。并且会导致部分 colocation table 无法进行 colocation 规划（因为副本在迁移中）。可以通过 "),a("code",[t._v('show proc "/cluster_balance/')]),t._v(" 来查看进度。也可以通过 "),a("code",[t._v('show proc "/statistic"')]),t._v(" 中 "),a("code",[t._v("UnhealthyTabletNum")]),t._v(" 的数量来判断进度。当 "),a("code",[t._v("UnhealthyTabletNum")]),t._v(" 降为 0 时，则代表数据重分布完毕。")])]),t._v(" "),a("li",[a("p",[t._v("设置用户的资源标签权限。")]),t._v(" "),a("p",[t._v("等数据重分布完毕后。我们就可以开始设置用户的资源标签权限了。因为默认情况下，用户的 "),a("code",[t._v("resource_tags.location")]),t._v(" 属性为空，即可以访问任意 Tag 的 BE。所以在前面步骤中，不会影响到已有用户的正常查询。当 "),a("code",[t._v("resource_tags.location")]),t._v(" 属性非空时，用户将被限制访问指定 Tag 的 BE。")])])]),t._v(" "),a("p",[t._v("通过以上4步，我们可以较为平滑的在原有集群升级后，使用资源划分功能。")])])}),[],!1,null,null,null);s.default=r.exports}}]);