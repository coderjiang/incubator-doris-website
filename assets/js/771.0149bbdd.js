(window.webpackJsonp=window.webpackJsonp||[]).push([[771],{1214:function(e,t,a){"use strict";a.r(t);var r=a(52),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("p",[e._v("本文档主要用于记录 Doris 使用过程中的常见问题。会不定期更新。")]),e._v(" "),a("h3",{attrs:{id:"q1-使用-stream-load-访问-fe-的公网地址导入数据-被重定向到内网-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1-使用-stream-load-访问-fe-的公网地址导入数据-被重定向到内网-ip"}},[e._v("#")]),e._v(" Q1. 使用 Stream Load 访问 FE 的公网地址导入数据，被重定向到内网 IP？")]),e._v(" "),a("p",[e._v("当 stream load 的连接目标为FE的http端口时，FE仅会随机选择一台BE节点做http 307 redirect 操作，因此用户的请求实际是发送给FE指派的某一个BE的。而redirect返回的是BE的ip，也即内网IP。所以如果你是通过FE的公网IP发送的请求，很有可能因为redirect到内网地址而无法连接。")]),e._v(" "),a("p",[e._v("通常的做法，一种是确保自己能够访问内网IP地址，或者是给所有BE上层假设一个负载均衡，然后直接将 stream load 请求发送到负载均衡器上，由负载均衡将请求透传到BE节点。")]),e._v(" "),a("h3",{attrs:{id:"q2-查询报错-failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2-查询报错-failed-to-get-scan-range-no-queryable-replica-found-in-tablet-xxxx"}},[e._v("#")]),e._v(" Q2. 查询报错：Failed to get scan range, no queryable replica found in tablet: xxxx")]),e._v(" "),a("p",[e._v("这种情况是因为对应的 tablet 没有找到可以查询的副本，通常原因可能是 BE 宕机、副本缺失等。可以先通过 "),a("code",[e._v("show tablet tablet_id")]),e._v(" 语句，然后执行后面的 "),a("code",[e._v("show proc")]),e._v(" 语句，查看这个 tablet 对应的副本信息，检查副本是否完整。同时还可以通过 "),a("code",[e._v('show proc "/cluster_balance"')]),e._v(" 信息来查询集群内副本调度和修复的进度。")]),e._v(" "),a("p",[e._v("关于数据副本管理相关的命令，可以参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/operation/tablet-repair-and-balance.html"}},[e._v("数据副本管理")]),e._v("。")],1),e._v(" "),a("h3",{attrs:{id:"q3-fe启动失败-fe-log中一直滚动-wait-catalog-to-be-ready-fe-type-unknown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3-fe启动失败-fe-log中一直滚动-wait-catalog-to-be-ready-fe-type-unknown"}},[e._v("#")]),e._v(' Q3. FE启动失败，fe.log中一直滚动 "wait catalog to be ready. FE type UNKNOWN"')]),e._v(" "),a("p",[e._v("这种问题通常有两个原因：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("本次FE启动时获取到的本机IP和上次启动不一致，通常是因为没有正确设置 "),a("code",[e._v("priority_network")]),e._v(" 而导致 FE 启动时匹配到了错误的 IP 地址。需修改 "),a("code",[e._v("priority_network")]),e._v(" 后重启 FE。")])]),e._v(" "),a("li",[a("p",[e._v("集群内多数 Follower FE 节点未启动。比如有 3 个 Follower，只启动了一个。此时需要将另外至少一个 FE 也启动，FE 可选举组方能选举出 Master 已提供服务。")])])]),e._v(" "),a("p",[e._v("如果以上情况都不能解决，可以按照 Doris 官网文档中的"),a("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/operation/metadata-operation.html"}},[e._v("元数据运维文档")]),e._v("进行恢复：")],1),e._v(" "),a("h3",{attrs:{id:"q4-通过-decommission-下线be节点时-为什么总会有部分tablet残留"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q4-通过-decommission-下线be节点时-为什么总会有部分tablet残留"}},[e._v("#")]),e._v(" Q4. 通过 DECOMMISSION 下线BE节点时，为什么总会有部分tablet残留？")]),e._v(" "),a("p",[e._v("在下线过程中，通过 show backends 查看下线节点的 tabletNum ，会观察到 tabletNum 数量在减少，说明数据分片正在从这个节点迁移走。当数量减到0时，系统会自动删除这个节点。但某些情况下，tabletNum 下降到一定数值后就不变化。这通常可能有以下两种原因：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("这些 tablet 属于刚被删除的表、分区或物化视图。而刚被删除的对象会保留在回收站中。而下线逻辑不会处理这些分片。可以通过修改 FE 的配置参数 catalog_trash_expire_second 来修改对象在回收站中驻留的时间。当对象从回收站中被删除后，这些 tablet就会被处理了。")])]),e._v(" "),a("li",[a("p",[e._v('这些 tablet 的迁移任务出现了问题。此时需要通过 show proc "/cluster_balance" 来查看具体任务的错误了。')])])]),e._v(" "),a("p",[e._v('对于以上情况，可以先通过 show proc "/statistic" 查看集群是否还有 unhealthy 的分片，如果为0，则可以直接通过 drop backend 语句删除这个 BE 。否则，还需要具体查看不健康分片的副本情况。')]),e._v(" "),a("h3",{attrs:{id:"q5-priorty-network-应该如何设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q5-priorty-network-应该如何设置"}},[e._v("#")]),e._v(" Q5. priorty_network 应该如何设置？")]),e._v(" "),a("p",[e._v("priorty_network 是 FE、BE 都有的配置参数。这个参数主要用于帮助系统选择正确的网卡 IP 作为自己的 IP 。建议任何情况下，都显式的设置这个参数，以防止后续机器增加新网卡导致IP选择不正确的问题。")]),e._v(" "),a("p",[e._v("priorty_network 的值是 CIDR 格式表示的。分为两部分，第一部分是点分十进制的 IP 地址，第二部分是一个前缀长度。比如 10.168.1.0/8 会匹配所有 10.xx.xx.xx 的IP地址，而 10.168.1.0/16 会匹配所有 10.168.xx.xx 的 IP 地址。")]),e._v(" "),a("p",[e._v("之所以使用 CIDR 格式而不是直接指定一个具体 IP，是为了保证所有节点都可以使用统一的配置值。比如有两个节点：10.168.10.1 和 10.168.10.2，则我们可以使用 10.168.10.0/24 来作为 priorty_network 的值。")]),e._v(" "),a("h3",{attrs:{id:"q6-fe的master、follower、observer都是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q6-fe的master、follower、observer都是什么"}},[e._v("#")]),e._v(" Q6. FE的Master、Follower、Observer都是什么？")]),e._v(" "),a("p",[e._v("首先明确一点，FE 只有两种角色：Follower 和 Observer。而 Master 只是一组 Follower 节点中选择出来的一个 FE。Master 可以看成是一种特殊的 Follower。所以当我们被问及一个集群有多少 FE，都是什么角色时，正确的回答当时应该是所有 FE 节点的个数，以及 Follower 角色的个数和 Observer 角色的个数。")]),e._v(" "),a("p",[e._v("所有 Follower 角色的 FE 节点会组成一个可选择组，类似 Poxas 一致性协议里的组概念。组内会选举出一个 Follower 作为 Master。当 Master 挂了，会自动选择新的 Follower 作为 Master。而 Observer 不会参与选举，因此 Observer 也不会称为 Master 。")]),e._v(" "),a("p",[e._v("一条元数据日志需要在多数 Follower 节点写入成功，才算成功。比如3个 FE ，2个写入成功才可以。这也是为什么 Follower 角色的个数需要是奇数的原因。")]),e._v(" "),a("p",[e._v("Observer 角色和这个单词的含义一样，仅仅作为观察者来同步已经成功写入的元数据日志，并且提供元数据读服务。他不会参与多数写的逻辑。")]),e._v(" "),a("p",[e._v("通常情况下，可以部署 1 Follower + 2 Observer 或者 3 Follower + N Observer。前者运维简单，几乎不会出现 Follower 之间的一致性协议导致这种复杂错误情况（百度内部集群大多使用这种方式）。后者可以保证元数据写的高可用，如果是高并发查询场景，可以适当增加 Observer。")]),e._v(" "),a("h3",{attrs:{id:"q7-tablet-writer-write-failed-tablet-id-27306172-txn-id-28573520-err-235-or-215-or-238"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q7-tablet-writer-write-failed-tablet-id-27306172-txn-id-28573520-err-235-or-215-or-238"}},[e._v("#")]),e._v(" Q7. tablet writer write failed, tablet_id=27306172, txn_id=28573520, err=-235 or -215 or -238")]),e._v(" "),a("p",[e._v("这个错误通常发生在数据导入操作中。新版错误码为 -235，老版本错误码可能是 -215。这个错误的含义是，对应tablet的数据版本超过了最大限制（默认500，由 BE 参数 "),a("code",[e._v("max_tablet_version_num")]),e._v(" 控制），后续写入将被拒绝。比如问题中这个错误，即表示 27306172 这个tablet的数据版本超过了限制。")]),e._v(" "),a("p",[e._v("这个错误通常是因为导入的频率过高，大于后台数据的compaction速度，导致版本堆积并最终超过了限制。此时，我们可以先通过show tablet 27306172 语句，然后执行结果中的 show proc 语句，查看tablet各个副本的情况。结果中的 versionCount即表示版本数量。如果发现某个副本的版本数量过多，则需要降低导入频率或停止导入，并观察版本数是否有下降。如果停止导入后，版本数依然没有下降，则需要去对应的BE节点查看be.INFO日志，搜索tablet id以及 compaction关键词，检查compaction是否正常运行。关于compaction调优相关，可以参阅 ApacheDoris 公众号文章：Doris 最佳实践-Compaction调优(3)")]),e._v(" "),a("p",[e._v("-238 错误通常出现在同一批导入数据量过大的情况，从而导致某一个 tablet 的 Segment 文件过多（默认是 200，由 BE 参数 "),a("code",[e._v("max_segment_num_per_rowset")]),e._v(" 控制）。此时建议减少一批次导入的数据量，或者适当提高 BE 配置参数值来解决。")]),e._v(" "),a("h3",{attrs:{id:"q8-tablet-110309738-has-few-replicas-1-alive-backends-10003"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q8-tablet-110309738-has-few-replicas-1-alive-backends-10003"}},[e._v("#")]),e._v(" Q8. tablet 110309738 has few replicas: 1, alive backends: [10003]")]),e._v(" "),a("p",[e._v("这个错误可能发生在查询或者导入操作中。通常意味着对应tablet的副本出现了异常。")]),e._v(" "),a("p",[e._v("此时，可以先通过 show backends 命令检查BE节点是否有宕机，如 isAlive 字段为false，或者 LastStartTime 是最近的某个时间（表示最近重启过）。如果BE有宕机，则需要去BE对应的节点，查看be.out日志。如果BE是因为异常原因宕机，通常be.out中会打印异常堆栈，帮助排查问题。如果be.out中没有错误堆栈。则可以通过linux命令dmesg -T 检查是否是因为OOM导致进程被系统kill掉。")]),e._v(" "),a("p",[e._v("如果没有BE节点宕机，则需要通过show tablet 110309738 语句，然后执行结果中的 show proc 语句，查看tablet各个副本的情况，进一步排查。")]),e._v(" "),a("h3",{attrs:{id:"q9-disk-xxxxx-on-backend-xxx-exceed-limit-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q9-disk-xxxxx-on-backend-xxx-exceed-limit-usage"}},[e._v("#")]),e._v(" Q9. disk xxxxx on backend xxx exceed limit usage")]),e._v(" "),a("p",[e._v("通常出现在导入、Alter等操作中。这个错误意味着对应BE的对应磁盘的使用量超过了阈值（默认95%）此时可以先通过 show backends 命令，其中MaxDiskUsedPct展示的是对应BE上，使用率最高的那块磁盘的使用率，如果超过95%，则会报这个错误。")]),e._v(" "),a("p",[e._v("此时需要前往对应BE节点，查看数据目录下的使用量情况。其中trash目录和snapshot目录可以手动清理以释放空间。如果是data目录占用较大，则需要考虑删除部分数据以释放空间了。具体可以参阅"),a("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/operation/disk-capacity.html"}},[e._v("磁盘空间管理")]),e._v("。")],1),e._v(" "),a("h3",{attrs:{id:"q10-invalid-cluster-id-xxxx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q10-invalid-cluster-id-xxxx"}},[e._v("#")]),e._v(" Q10. invalid cluster id: xxxx")]),e._v(" "),a("p",[e._v("这个错误可能会在show backends 或 show frontends 命令的结果中出现。通常出现在某个FE或BE节点的错误信息列中。这个错误的含义是，Master FE向这个节点发送心跳信息后，该节点发现心跳信息中携带的 cluster id和本地存储的 cluster id不同，所以拒绝回应心跳。")]),e._v(" "),a("p",[e._v("Doris的 Master FE 节点会主动发送心跳给各个FE或BE节点，并且在心跳信息中会携带一个cluster_id。cluster_id是在一个集群初始化时，由Master FE生成的唯一集群标识。当FE或BE第一次收到心跳信息后，则会将cluster_id以文件的形式保存在本地。FE的该文件在元数据目录的image/目录下，BE则在所有数据目录下都有一个cluster_id文件。之后，每次节点收到心跳后，都会用本地cluster_id的内容和心跳中的内容作比对，如果不一致，则拒绝响应心跳。")]),e._v(" "),a("p",[e._v("该机制是一个节点认证机制，以防止接收到集群外的节点发送来的错误的心跳信息。")]),e._v(" "),a("p",[e._v("如果需要恢复这个错误。首先要先确认所有节点是否都是正确的集群中的节点。之后，对于FE节点，可以尝试修改元数据目录下的 image/VERSION 文件中的 cluster_id 值后重启FE。对于BE节点，则可以删除所有数据目录下的 cluster_id 文件后重启 BE。")]),e._v(" "),a("h3",{attrs:{id:"q11-doris-是否支持修改列名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q11-doris-是否支持修改列名"}},[e._v("#")]),e._v(" Q11. Doris 是否支持修改列名？")]),e._v(" "),a("p",[e._v("不支持修改列名。")]),e._v(" "),a("p",[e._v("Doris支持修改数据库名、表名、分区名、物化视图（Rollup）名称，以及列的类型、注释、默认值等等。但遗憾的是，目前不支持修改列名。")]),e._v(" "),a("p",[e._v("因为一些历史原因，目前列名称是直接写入到数据文件中的。Doris在查询时，也是通过类名查找到对应的列的。所以修改列名不仅是简单的元数据修改，还会涉及到数据的重写，是一个非常重的操作。")]),e._v(" "),a("p",[e._v("我们不排除后续通过一些兼容手段来支持轻量化的列名修改操作。")]),e._v(" "),a("h3",{attrs:{id:"q12-unique-key模型的表是否支持创建物化视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q12-unique-key模型的表是否支持创建物化视图"}},[e._v("#")]),e._v(" Q12. Unique Key模型的表是否支持创建物化视图？")]),e._v(" "),a("p",[e._v("不支持。")]),e._v(" "),a("p",[e._v("Unique Key模型的表是一个对业务比较友好的表，因为其特有的按照主键去重的功能，能够很方便的同步数据频繁变更的业务数据库。因此，很多用户在将数据接入到Doris时，会首先考虑使用Unique Key模型。")]),e._v(" "),a("p",[e._v("但遗憾的是，Unique Key模型的表是无法建立物化视图的。原因在于，物化视图的本质，是通过预计算来将数据“预先算好”，这样在查询时直接返回已经计算好的数据，来加速查询。在物化视图中，“预计算”的数据通常是一些聚合指标，比如求和、求count。这时，如果数据发生变更，如udpate或delete，因为预计算的数据已经丢失了明细信息，因此无法同步的进行更新。比如一个求和值5，可能是 1+4，也可能是2+3。因为明细信息的丢失，我们无法区分这个求和值是如何计算出来的，因此也就无法满足更新的需求。")]),e._v(" "),a("h3",{attrs:{id:"q13-show-backends-frontends-查看到的信息不完整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q13-show-backends-frontends-查看到的信息不完整"}},[e._v("#")]),e._v(" Q13. show backends/frontends 查看到的信息不完整")]),e._v(" "),a("p",[e._v("在执行如"),a("code",[e._v("show backends/frontends")]),e._v(" 等某些语句后，结果中可能会发现有部分列内容不全。比如show backends结果中看不到磁盘容量信息等。")]),e._v(" "),a("p",[e._v("通常这个问题会出现在集群有多个FE的情况下，如果用户连接到非Master FE节点执行这些语句，就会看到不完整的信息。这是因为，部分信息仅存在于Master FE节点。比如BE的磁盘使用量信息等。所以只有在直连Master FE后，才能获得完整信息。")]),e._v(" "),a("p",[e._v("当然，用户也可以在执行这些语句前，先执行 "),a("code",[e._v("set forward_to_master=true;")]),e._v(" 这个会话变量设置为true后，后续执行的一些信息查看类语句会自动转发到Master FE获取结果。这样，不论用户连接的是哪个FE，都可以获取到完整结果了。")]),e._v(" "),a("h3",{attrs:{id:"q14-通过java程序调用stream-load导入数据-在一批次数据量较大时-可能会报错broken-pipe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q14-通过java程序调用stream-load导入数据-在一批次数据量较大时-可能会报错broken-pipe"}},[e._v("#")]),e._v(" Q14. 通过Java程序调用stream load导入数据，在一批次数据量较大时，可能会报错Broken Pipe")]),e._v(" "),a("p",[e._v("除了Broken Pipe外，还可能出现一些其他的奇怪的错误。")]),e._v(" "),a("p",[e._v("这个情况通常出现在开启httpv2后。因为httpv2是使用spring boot实现的http 服务，并且使用tomcat作为默认内置容器。但是jetty对307转发的处理似乎有些问题，所以后面将内置容器修改为了jetty。此外，在java程序中的 apache http client的版本需要使用4.5.13以后的版本。之前的版本，对转发的处理也存在一些问题。")]),e._v(" "),a("p",[e._v("所以这个问题可以有两种解决方式：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("关闭httpv2")]),e._v(" "),a("p",[e._v("在fe.conf中添加 enable_http_server_v2=false后重启FE。但是这样无法再使用新版UI界面，并且之后的一些基于httpv2的新接口也无法使用。（正常的导入查询不受影响）。")])]),e._v(" "),a("li",[a("p",[e._v("升级")]),e._v(" "),a("p",[e._v("可以升级到 Doris 0.15 及之后的版本，已修复这个问题。")])])]),e._v(" "),a("h3",{attrs:{id:"q15-节点新增加了新的磁盘-为什么数据没有均衡到新的磁盘上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q15-节点新增加了新的磁盘-为什么数据没有均衡到新的磁盘上"}},[e._v("#")]),e._v(" Q15. 节点新增加了新的磁盘，为什么数据没有均衡到新的磁盘上？")]),e._v(" "),a("p",[e._v("当前Doris的均衡策略是以节点为单位的。也就是说，是按照节点整体的负载指标（分片数量和总磁盘利用率）来判断集群负载。并且将数据分片从高负载节点迁移到低负载节点。如果每个节点都增加了一块磁盘，则从节点整体角度看，负载并没有改变，所以无法触发均衡逻辑。")]),e._v(" "),a("p",[e._v("此外，Doris目前并不支持单个节点内部，各个磁盘间的均衡操作。所以新增磁盘后，不会将数据均衡到新的磁盘。")]),e._v(" "),a("p",[e._v("但是，数据在节点之间迁移时，Doris会考虑磁盘的因素。比如一个分片从A节点迁移到B节点，会优先选择B节点中，磁盘空间利用率较低的磁盘。")]),e._v(" "),a("p",[e._v("这里我们提供3种方式解决这个问题：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("重建新表")]),e._v(" "),a("p",[e._v("通过create table like 语句建立新表，然后使用 insert into select的方式将数据从老表同步到新表。因为创建新表时，新表的数据分片会分布在新的磁盘中，从而数据也会写入新的磁盘。这种方式适用于数据量较小的情况（几十GB以内）。")])]),e._v(" "),a("li",[a("p",[e._v("通过Decommission命令")]),e._v(" "),a("p",[e._v("decommission命令用于安全下线一个BE节点。该命令会先将该节点上的数据分片迁移到其他节点，然后在删除该节点。前面说过，在数据迁移时，会优先考虑磁盘利用率低的磁盘，因此该方式可以“强制”让数据迁移到其他节点的磁盘上。当数据迁移完成后，我们在cancel掉这个decommission操作，这样，数据又会重新均衡回这个节点。当我们对所有BE节点都执行一遍上述步骤后，数据将会均匀的分布在所有节点的所有磁盘上。")]),e._v(" "),a("p",[e._v("注意，在执行decommission命令前，先执行以下命令，以避免节点下线完成后被删除。")]),e._v(" "),a("p",[a("code",[e._v('admin set frontend config("drop_backend_after_decommission" = "false");')])])]),e._v(" "),a("li",[a("p",[e._v("使用API手动迁移数据")]),e._v(" "),a("p",[e._v("Doris提供了"),a("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/http-actions/tablet-migration-action.html"}},[e._v("HTTP API")]),e._v("，可以手动指定一个磁盘上的数据分片迁移到另一个磁盘上。")],1)])]),e._v(" "),a("h3",{attrs:{id:"q16-如何正确阅读-fe-be-日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q16-如何正确阅读-fe-be-日志"}},[e._v("#")]),e._v(" Q16. 如何正确阅读 FE/BE 日志?")]),e._v(" "),a("p",[e._v("很多情况下我们需要通过日志来排查问题。这里说明一下FE/BE日志的格式和查看方式。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("FE")]),e._v(" "),a("p",[e._v("FE日志主要有：")]),e._v(" "),a("ul",[a("li",[e._v("fe.log：主日志。包括除fe.out外的所有内容。")]),e._v(" "),a("li",[e._v("fe.warn.log：主日志的子集，仅记录 WARN 和 ERROR 级别的日志。")]),e._v(" "),a("li",[e._v("fe.out：标准/错误输出的日志（stdout和stderr）。")]),e._v(" "),a("li",[e._v("fe.audit.log：审计日志，记录这个FE接收的所有SQL请求。")])]),e._v(" "),a("p",[e._v("一条典型的FE日志如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2021-09-16 23:13:22,502 INFO (tablet scheduler|43) [BeLoadRebalancer.selectAlternativeTabletsForCluster():85] cluster is balance: default_cluster with medium: HDD. skip\n")])])]),a("ul",[a("li",[a("code",[e._v("2021-09-16 23:13:22,502")]),e._v("：日志时间。")]),e._v(" "),a("li",[a("code",[e._v("INFO：日志级别，默认是INFO")]),e._v("。")]),e._v(" "),a("li",[a("code",[e._v("(tablet scheduler|43)")]),e._v("：线程名称和线程id。通过线程id，就可以查看这个线程上下文信息，方面排查这个线程发生的事情。")]),e._v(" "),a("li",[a("code",[e._v("BeLoadRebalancer.selectAlternativeTabletsForCluster():85")]),e._v("：类名、方法名和代码行号。")]),e._v(" "),a("li",[a("code",[e._v("cluster is balance xxx")]),e._v("：日志内容。")])]),e._v(" "),a("p",[e._v("通常情况下我们主要查看fe.log日志。特殊情况下，有些日志可能输出到了fe.out中。")])]),e._v(" "),a("li",[a("p",[e._v("BE")]),e._v(" "),a("p",[e._v("BE日志主要有：")]),e._v(" "),a("ul",[a("li",[e._v("be.INFO：主日志。这其实是个软连，连接到最新的一个 be.INFO.xxxx上。")]),e._v(" "),a("li",[e._v("be.WARNING：主日志的子集，仅记录 WARN 和 FATAL 级别的日志。这其实是个软连，连接到最新的一个 be.WARN.xxxx上。")]),e._v(" "),a("li",[e._v("be.out：标准/错误输出的日志（stdout和stderr）。")])]),e._v(" "),a("p",[e._v("一条典型的BE日志如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("I0916 23:21:22.038795 28087 task_worker_pool.cpp:1594] finish report TASK. master host: 10.10.10.10, port: 9222\n")])])]),a("ul",[a("li",[a("code",[e._v("I0916 23:21:22.038795")]),e._v("：日志等级和日期时间。大写字母I表示INFO，W表示WARN，F表示FATAL。")]),e._v(" "),a("li",[a("code",[e._v("28087")]),e._v("：线程id。通过线程id，就可以查看这个线程上下文信息，方面排查这个线程发生的事情。")]),e._v(" "),a("li",[a("code",[e._v("task_worker_pool.cpp:1594")]),e._v("：代码文件和行号。")]),e._v(" "),a("li",[a("code",[e._v("finish report TASK xxx")]),e._v("：日志内容。")])]),e._v(" "),a("p",[e._v("通常情况下我们主要查看be.INFO日志。特殊情况下，如BE宕机，则需要查看be.out。")])])]),e._v(" "),a("h3",{attrs:{id:"q17-fe-be-节点挂了应该如何排查原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q17-fe-be-节点挂了应该如何排查原因"}},[e._v("#")]),e._v(" Q17. FE/BE 节点挂了应该如何排查原因?")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("BE")]),e._v(" "),a("p",[e._v("BE进程是 C/C++ 进程，可能会因为一些程序Bug（内存越界，非法地址访问等）或 Out Of Memory（OOM）导致进程挂掉。此时我们可以通过以下几个步骤查看错误原因：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("查看be.out")]),e._v(" "),a("p",[e._v("BE进程实现了在程序因异常情况退出时，会打印当前的错误堆栈到be.out里（注意是be.out，不是be.INFO或be.WARNING）。通过错误堆栈，通常能够大致获悉程序出错的位置。")]),e._v(" "),a("p",[e._v("注意，如果be.out中出现错误堆栈，通常情况下是因为程序bug，普通用户可能无法自行解决，欢迎前往微信群、github discussion 或dev邮件组寻求帮助，并贴出对应的错误堆栈，以便快速排查问题。")])]),e._v(" "),a("li",[a("p",[e._v("dmesg")]),e._v(" "),a("p",[e._v("如果be.out没有堆栈信息，则大概率是因为OOM被系统强制kill掉了。此时可以通过dmesg -T 这个命令查看linux系统日志，如果最后出现  Memory cgroup out of memory: Kill process 7187 (palo_be) score 1007 or sacrifice child 类似的日志，则说明是OOM导致的。")]),e._v(" "),a("p",[e._v("内存问题可能有多方面原因，如大查询、导入、compaction等。Doris也在不断优化内存使用。欢迎前往微信群、github discussion 或dev邮件组寻求帮助。")])]),e._v(" "),a("li",[a("p",[e._v("查看be.INFO中是否有F开头的日志。")]),e._v(" "),a("p",[e._v("F开头的的日志是 Fatal 日志。如 F0916 ，表示9月16号的Fatal日志。Fatal日志通常表示程序断言错误，断言错误会直接导致进程退出（说明程序出现了Bug）。欢迎前往微信群、github discussion 或dev邮件组寻求帮助。")])]),e._v(" "),a("li",[a("p",[e._v("Minidump")]),e._v(" "),a("p",[e._v("Mindump 是 Doris 0.15 版本之后加入的功能，具体可参阅"),a("RouterLink",{attrs:{to:"/zh-CN/developer-guide/minidump.html"}},[e._v("文档")]),e._v("。")],1)])])]),e._v(" "),a("li",[a("p",[e._v("FE")]),e._v(" "),a("p",[e._v("FE 是 java 进程，健壮程度要由于 C/C++ 程序。通常FE 挂掉的原因可能是 OOM（Out-of-Memory）或者是元数据写入失败。这些错误通常在 fe.log 或者 fe.out 中有错误堆栈。需要根据错误堆栈信息进一步排查。")])])]),e._v(" "),a("h3",{attrs:{id:"q18-关于数据目录ssd和hdd的配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q18-关于数据目录ssd和hdd的配置。"}},[e._v("#")]),e._v(" Q18. 关于数据目录SSD和HDD的配置。")]),e._v(" "),a("p",[e._v("Doris支持一个BE节点配置多个存储路径。通常情况下，每块盘配置一个存储路径即可。同时，Doris支持指定路径的存储介质属性，如SSD或HDD。SSD代表高速存储设备，HDD代表低速存储设备。")]),e._v(" "),a("p",[e._v("通过指定路径的存储介质属性，我们可以利用Doris的冷热数据分区存储功能，在分区级别将热数据存储在SSD中，而冷数据会自动转移到HDD中。")]),e._v(" "),a("p",[e._v('需要注意的是，Doris并不会自动感知存储路径所在磁盘的实际存储介质类型。这个类型需要用户在路径配置中显式的表示。比如路径 "/path/to/data1.SSD" 即表示这个路径是SSD存储介质。而 "data1.SSD" 就是实际的目录名称。Doris是根据目录名称后面的 ".SSD" 后缀来确定存储介质类型的，而不是实际的存储介质类型。也就是说，用户可以指定任意路径为SSD存储介质，而Doris仅识别目录后缀，不会去判断存储介质是否匹配。如果不写后缀，则默认为HDD。')]),e._v(" "),a("p",[e._v('换句话说，".HDD" 和 ".SSD" 只是用于标识存储目录“相对”的“低速”和“高速”之分，而并不是标识实际的存储介质类型。所以如果BE节点上的存储路径没有介质区别，则无需填写后缀。')]),e._v(" "),a("h3",{attrs:{id:"q19-lost-connection-to-mysql-server-at-reading-initial-communication-packet-system-error-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q19-lost-connection-to-mysql-server-at-reading-initial-communication-packet-system-error-0"}},[e._v("#")]),e._v(" Q19. "),a("code",[e._v("Lost connection to MySQL server at 'reading initial communication packet', system error: 0")])]),e._v(" "),a("p",[e._v("如果使用 MySQL 客户端连接 Doris 时出现如下问题，这通常是因为编译 FE 时使用的 jdk 版本和运行 FE 时使用的 jdk 版本不同导致的。\n注意使用 docker 编译镜像编译时，默认的 JDK 版本是 openjdk 11，可以通过命令切换到 openjdk 8（详见编译文档）。")]),e._v(" "),a("h3",{attrs:{id:"q20-214-错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q20-214-错误"}},[e._v("#")]),e._v(" Q20. -214 错误")]),e._v(" "),a("p",[e._v("在执行导入、查询等操作时，可能会遇到如下错误：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("failed to initialize storage reader. tablet=63416.1050661139.aa4d304e7a7aff9c-f0fa7579928c85a0, res=-214, backend=192.168.100.10\n")])])]),a("p",[e._v("-214 错误意味着对应 tablet 的数据版本缺失。比如如上错误，表示 tablet 63416 在 192.168.100.10 这个 BE 上的副本的数据版本有缺失。（可能还有其他类似错误码，都可以用如下方式进行排查和修复）。")]),e._v(" "),a("p",[e._v("通常情况下，如果你的数据是多副本的，那么系统会自动修复这些有问题的副本。可以通过以下步骤进行排查：")]),e._v(" "),a("p",[e._v("首先通过 "),a("code",[e._v("show tablet 63416")]),e._v(" 语句并执行结果中的 "),a("code",[e._v("show proc xxx")]),e._v(" 语句来查看对应 tablet 的各个副本情况。通常我们需要关心 "),a("code",[e._v("Version")]),e._v(" 这一列的数据。")]),e._v(" "),a("p",[e._v("正常情况下，一个 tablet 的多个副本的 Version 应该是相同的。并且和对应分区的 VisibleVersion 版本相同。")]),e._v(" "),a("p",[e._v("你可以通过 "),a("code",[e._v("show partitions from tblx")]),e._v(" 来查看对应的分区版本（tablet 对应的分区可以在 "),a("code",[e._v("show tablet")]),e._v(" 语句中获取。）")]),e._v(" "),a("p",[e._v("同时，你也可以访问 "),a("code",[e._v("show proc")]),e._v(" 语句中的 CompactionStatus 列中的 URL（在浏览器打开即可）来查看更具体的版本信息，来检查具体丢失的是哪些版本。")]),e._v(" "),a("p",[e._v("如果长时间没有自动修复，则需要通过 "),a("code",[e._v('show proc "/cluster_balance"')]),e._v(" 语句，查看当前系统正在执行的 tablet 修复和调度任务。可能是因为有大量的 tablet 在等待被调度，导致修复时间较长。可以关注 "),a("code",[e._v("pending_tablets")]),e._v(" 和 "),a("code",[e._v("running_tablets")]),e._v(" 中的记录。")]),e._v(" "),a("p",[e._v("更进一步的，可以通过 "),a("code",[e._v("admin repair")]),e._v(" 语句来指定优先修复某个表或分区，具体可以参阅 "),a("code",[e._v("help admin repair")]),e._v(";")]),e._v(" "),a("p",[e._v("如果依然无法修复，那么在多副本的情况下，我们使用 "),a("code",[e._v("admin set replica status")]),e._v(" 命令强制将有问题的副本下线。具体可参阅 "),a("code",[e._v("help admin set replica status")]),e._v(" 中将副本状态置为 bad 的示例。（置为 bad 后，副本将不会再被访问。并且会后续自动修复。但在操作前，应先确保其他副本是正常的）")]),e._v(" "),a("h3",{attrs:{id:"q21-not-connected-to-192-168-100-1-8060-yet-server-id-384"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q21-not-connected-to-192-168-100-1-8060-yet-server-id-384"}},[e._v("#")]),e._v(" Q21. Not connected to 192.168.100.1:8060 yet, server_id=384")]),e._v(" "),a("p",[e._v("在导入或者查询时，我们可能遇到这个错误。如果你去对应的 BE 日志中查看，也可能会找到类似错误。")]),e._v(" "),a("p",[e._v("这是一个 RPC 错误，通常由两种可能：1. 对应的 BE 节点宕机。2. rpc 拥塞或其他错误。")]),e._v(" "),a("p",[e._v("如果是 BE 节点宕机，则需要查看具体的宕机原因。这里只讨论 rpc 拥塞的问题。")]),e._v(" "),a("p",[e._v("一种情况是 OVERCROWDED，即表示 rpc 源端有大量未发送的数据超过了阈值。BE 有两个参数与之相关：")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("brpc_socket_max_unwritten_bytes")]),e._v("：默认 1GB，如果未发送数据超过这个值，则会报错。可以适当修改这个值以避免 OVERCROWDED 错误。（但这个治标不治本，本质上还是有拥塞发生）。")]),e._v(" "),a("li",[a("code",[e._v("tablet_writer_ignore_eovercrowded")]),e._v("：默认为 false。如果设为true，则 Doris 会忽略导入过程中出现的 OVERCROWDED 错误。这个参数主要为了避免导入失败，以提高导入的稳定性。")])]),e._v(" "),a("p",[e._v("第二种是 rpc 的包大小超过 max_body_size。如果查询中带有超大 String 类型，或者 bitmap 类型时，可能出现这个问题。可以通过修改以下 BE 参数规避：")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("brpc_max_body_size")]),e._v("：默认 3GB.")])]),e._v(" "),a("h3",{attrs:{id:"q22-unique-key-模型查询结果不一致"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q22-unique-key-模型查询结果不一致"}},[e._v("#")]),e._v(" Q22. Unique Key 模型查询结果不一致")]),e._v(" "),a("p",[e._v("某些情况下，当用户使用相同的 SQL 查询一个 Unique Key 模型的表时，可能会出现多次查询结果不一致的现象。并且查询结果总在 2-3 种之间变化。")]),e._v(" "),a("p",[e._v("这可能是因为，在同一批导入数据中，出现了 key 相同但 value 不同的数据，这会导致，不同副本间，因数据覆盖的先后顺序不确定而产生的结果不一致的问题。")]),e._v(" "),a("p",[e._v("比如表定义为 k1, v1。一批次导入数据如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('1, "abc"\n1, "def"\n')])])]),a("p",[e._v("那么可能副本1 的结果是 "),a("code",[e._v('1, "abc"')]),e._v("，而副本2 的结果是 "),a("code",[e._v('1, "def"')]),e._v("。从而导致查询结果不一致。")]),e._v(" "),a("p",[e._v("为了确保不同副本之间的数据先后顺序唯一，可以参考 "),a("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/load-data/sequence-column-manual.html"}},[e._v("Sequence Column")]),e._v(" 功能。")],1),e._v(" "),a("h3",{attrs:{id:"q23-recoverytracker-should-overlap-or-follow-on-disk-last-vlsn-of-4-422-880-recoveryfirst-4-422-882-unexpected-state-fatal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q23-recoverytracker-should-overlap-or-follow-on-disk-last-vlsn-of-4-422-880-recoveryfirst-4-422-882-unexpected-state-fatal"}},[e._v("#")]),e._v(" Q23. "),a("code",[e._v("recoveryTracker should overlap or follow on disk last VLSN of 4,422,880 recoveryFirst= 4,422,882 UNEXPECTED_STATE_FATAL")])]),e._v(" "),a("p",[e._v("有时重启 FE，会出现如上错误（通常只会出现在多 Follower 的情况下）。并且错误中的两个数值相差2。导致 FE 启动失败。")]),e._v(" "),a("p",[e._v("这是 bdbje 的一个 bug，尚未解决。遇到这种情况，只能通过 "),a("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/operation/metadata-operation.html"}},[e._v("元数据运维手册")]),e._v(" 中的 故障恢复 进行操作来恢复元数据了。")],1)])}),[],!1,null,null,null);t.default=v.exports}}]);