(window.webpackJsonp=window.webpackJsonp||[]).push([[581],{976:function(_,v,i){"use strict";i.r(v);var a=i(43),e=Object(a.a)({},(function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[i("h1",{attrs:{id:"备份与恢复"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#备份与恢复"}},[_._v("#")]),_._v(" 备份与恢复")]),_._v(" "),i("p",[_._v("Doris 支持将当前数据以文件的形式，通过 broker 备份到远端存储系统中。之后可以通过 恢复 命令，从远端存储系统中将数据恢复到任意 Doris 集群。通过这个功能，Doris 可以支持将数据定期的进行快照备份。也可以通过这个功能，在不同集群间进行数据迁移。")]),_._v(" "),i("p",[_._v("该功能需要 Doris 版本 0.8.2+")]),_._v(" "),i("p",[_._v("使用该功能，需要部署对应远端存储的 broker。如 BOS、HDFS 等。可以通过 "),i("code",[_._v("SHOW BROKER;")]),_._v(" 查看当前部署的 broker。")]),_._v(" "),i("h2",{attrs:{id:"简要原理说明"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#简要原理说明"}},[_._v("#")]),_._v(" 简要原理说明")]),_._v(" "),i("h3",{attrs:{id:"备份-backup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#备份-backup"}},[_._v("#")]),_._v(" 备份（Backup）")]),_._v(" "),i("p",[_._v("备份操作是将指定表或分区的数据，直接以 Doris 存储的文件的形式，上传到远端仓库中进行存储。当用户提交 Backup 请求后，系统内部会做如下操作：")]),_._v(" "),i("ol",[i("li",[i("p",[_._v("快照及快照上传")]),_._v(" "),i("p",[_._v("快照阶段会对指定的表或分区数据文件进行快照。之后，备份都是对快照进行操作。在快照之后，对表进行的更改、导入等操作都不再影响备份的结果。快照只是对当前数据文件产生一个硬链，耗时很少。快照完成后，会开始对这些快照文件进行逐一上传。快照上传由各个 Backend 并发完成。")])]),_._v(" "),i("li",[i("p",[_._v("元数据准备及上传")]),_._v(" "),i("p",[_._v("数据文件快照上传完成后，Frontend 会首先将对应元数据写成本地文件，然后通过 broker 将本地元数据文件上传到远端仓库。完成最终备份作业。")])])]),_._v(" "),i("h3",{attrs:{id:"恢复-restore"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#恢复-restore"}},[_._v("#")]),_._v(" 恢复（Restore）")]),_._v(" "),i("p",[_._v("恢复操作需要指定一个远端仓库中已存在的备份，然后将这个备份的内容恢复到本地集群中。当用户提交 Restore 请求后，系统内部会做如下操作：")]),_._v(" "),i("ol",[i("li",[i("p",[_._v("在本地创建对应的元数据")]),_._v(" "),i("p",[_._v("这一步首先会在本地集群中，创建恢复对应的表分区等结构。创建完成后，该表可见，但是不可访问。")])]),_._v(" "),i("li",[i("p",[_._v("本地snapshot")]),_._v(" "),i("p",[_._v("这一步是将上一步创建的表做一个快照。这其实是一个空快照（因为刚创建的表是没有数据的），其目的主要是在 Backend 上产生对应的快照目录，用于之后接收从远端仓库下载的快照文件。")])]),_._v(" "),i("li",[i("p",[_._v("下载快照")]),_._v(" "),i("p",[_._v("远端仓库中的快照文件，会被下载到对应的上一步生成的快照目录中。这一步由各个 Backend 并发完成。")])]),_._v(" "),i("li",[i("p",[_._v("生效快照")]),_._v(" "),i("p",[_._v("快照下载完成后，我们要将各个快照映射为当前本地表的元数据。然后重新加载这些快照，使之生效，完成最终的恢复作业。")])])]),_._v(" "),i("h2",{attrs:{id:"最佳实践"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[_._v("#")]),_._v(" 最佳实践")]),_._v(" "),i("h3",{attrs:{id:"备份"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[_._v("#")]),_._v(" 备份")]),_._v(" "),i("p",[_._v("当前我们支持最小分区（Partition）粒度的全量备份（增量备份有可能在未来版本支持）。如果需要对数据进行定期备份，首先需要在建表时，合理的规划表的分区及分桶，比如按时间进行分区。然后在之后的运行过程中，按照分区粒度进行定期的数据备份。")]),_._v(" "),i("h3",{attrs:{id:"数据迁移"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#数据迁移"}},[_._v("#")]),_._v(" 数据迁移")]),_._v(" "),i("p",[_._v("用户可以先将数据备份到远端仓库，再通过远端仓库将数据恢复到另一个集群，完成数据迁移。因为数据备份是通过快照的形式完成的，所以，在备份作业的快照阶段之后的新的导入数据，是不会备份的。因此，在快照完成后，到恢复作业完成这期间，在原集群上导入的数据，都需要在新集群上同样导入一遍。")]),_._v(" "),i("p",[_._v("建议在迁移完成后，对新旧两个集群并行导入一段时间。完成数据和业务正确性校验后，再将业务迁移到新的集群。")]),_._v(" "),i("h2",{attrs:{id:"重点说明"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#重点说明"}},[_._v("#")]),_._v(" 重点说明")]),_._v(" "),i("ol",[i("li",[_._v("备份恢复相关的操作目前只允许拥有 ADMIN 权限的用户执行。")]),_._v(" "),i("li",[_._v("一个 Database 内，只允许有一个正在执行的备份或恢复作业。")]),_._v(" "),i("li",[_._v("备份和恢复都支持最小分区（Partition）级别的操作，当表的数据量很大时，建议按分区分别执行，以降低失败重试的代价。")]),_._v(" "),i("li",[_._v("因为备份恢复操作，操作的都是实际的数据文件。所以当一个表的分片过多，或者一个分片有过多的小版本时，可能即使总数据量很小，依然需要备份或恢复很长时间。用户可以通过 "),i("code",[_._v("SHOW PARTITIONS FROM table_name;")]),_._v(" 和 "),i("code",[_._v("SHOW TABLET FROM table_name;")]),_._v(" 来查看各个分区的分片数量，以及各个分片的文件版本数量，来预估作业执行时间。文件数量对作业执行的时间影响非常大，所以建议在建表时，合理规划分区分桶，以避免过多的分片。")]),_._v(" "),i("li",[_._v("当通过 "),i("code",[_._v("SHOW BACKUP")]),_._v(" 或者 "),i("code",[_._v("SHOW RESTORE")]),_._v(" 命令查看作业状态时。有可能会在 "),i("code",[_._v("TaskErrMsg")]),_._v(" 一列中看到错误信息。但只要 "),i("code",[_._v("State")]),_._v(" 列不为\n"),i("code",[_._v("CANCELLED")]),_._v("，则说明作业依然在继续。这些 Task 有可能会重试成功。当然，有些 Task 错误，也会直接导致作业失败。")]),_._v(" "),i("li",[_._v("如果恢复作业是一次覆盖操作（指定恢复数据到已经存在的表或分区中），那么从恢复作业的 "),i("code",[_._v("COMMIT")]),_._v(" 阶段开始，当前集群上被覆盖的数据有可能不能再被还原。此时如果恢复作业失败或被取消，有可能造成之前的数据已损坏且无法访问。这种情况下，只能通过再次执行恢复操作，并等待作业完成。因此，我们建议，如无必要，尽量不要使用覆盖的方式恢复数据，除非确认当前数据已不再使用。")])]),_._v(" "),i("h2",{attrs:{id:"相关命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#相关命令"}},[_._v("#")]),_._v(" 相关命令")]),_._v(" "),i("p",[_._v("和备份恢复功能相关的命令如下。以下命令，都可以通过 mysql-client 连接 Doris 后，使用 "),i("code",[_._v("help cmd;")]),_._v(" 的方式查看详细帮助。")]),_._v(" "),i("ol",[i("li",[i("p",[_._v("CREATE REPOSITORY")]),_._v(" "),i("p",[_._v("创建一个远端仓库路径，用于备份或恢复。该命令需要借助 Broker 进程访问远端存储，不同的 Broker 需要提供不同的参数，具体请参阅 "),i("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/broker.html"}},[_._v("Broker文档")]),_._v("，也可以直接通过S3 协议备份到支持AWS S3协议的远程存储上去，具体参考 [创建远程仓库文档](../sql-reference/sql-statements/Data Definition/CREATE REPOSITORY.md)")],1)]),_._v(" "),i("li",[i("p",[_._v("BACKUP")]),_._v(" "),i("p",[_._v("执行一次备份操作。")])]),_._v(" "),i("li",[i("p",[_._v("SHOW BACKUP")]),_._v(" "),i("p",[_._v("查看最近一次 backup 作业的执行情况，包括：")]),_._v(" "),i("ul",[i("li",[_._v("JobId：本次备份作业的 id。")]),_._v(" "),i("li",[_._v("SnapshotName：用户指定的本次备份作业的名称（Label）。")]),_._v(" "),i("li",[_._v("DbName：备份作业对应的 Database。")]),_._v(" "),i("li",[_._v("State：备份作业当前所在阶段：\n"),i("ul",[i("li",[_._v("PENDING：作业初始状态。")]),_._v(" "),i("li",[_._v("SNAPSHOTING：正在进行快照操作。")]),_._v(" "),i("li",[_._v("UPLOAD_SNAPSHOT：快照结束，准备上传。")]),_._v(" "),i("li",[_._v("UPLOADING：正在上传快照。")]),_._v(" "),i("li",[_._v("SAVE_META：正在本地生成元数据文件。")]),_._v(" "),i("li",[_._v("UPLOAD_INFO：上传元数据文件和本次备份作业的信息。")]),_._v(" "),i("li",[_._v("FINISHED：备份完成。")]),_._v(" "),i("li",[_._v("CANCELLED：备份失败或被取消。")])])]),_._v(" "),i("li",[_._v("BackupObjs：本次备份涉及的表和分区的清单。")]),_._v(" "),i("li",[_._v("CreateTime：作业创建时间。")]),_._v(" "),i("li",[_._v("SnapshotFinishedTime：快照完成时间。")]),_._v(" "),i("li",[_._v("UploadFinishedTime：快照上传完成时间。")]),_._v(" "),i("li",[_._v("FinishedTime：本次作业完成时间。")]),_._v(" "),i("li",[_._v("UnfinishedTasks：在 "),i("code",[_._v("SNAPSHOTTING")]),_._v("，"),i("code",[_._v("UPLOADING")]),_._v(" 等阶段，会有多个子任务在同时进行，这里展示的当前阶段，未完成的子任务的 task id。")]),_._v(" "),i("li",[_._v("TaskErrMsg：如果有子任务执行出错，这里会显示对应子任务的错误信息。")]),_._v(" "),i("li",[_._v("Status：用于记录在整个作业过程中，可能出现的一些状态信息。")]),_._v(" "),i("li",[_._v("Timeout：作业的超时时间，单位是秒。")])])]),_._v(" "),i("li",[i("p",[_._v("SHOW SNAPSHOT")]),_._v(" "),i("p",[_._v("查看远端仓库中已存在的备份。")]),_._v(" "),i("ul",[i("li",[_._v("Snapshot：备份时指定的该备份的名称（Label）。")]),_._v(" "),i("li",[_._v("Timestamp：备份的时间戳。")]),_._v(" "),i("li",[_._v("Status：该备份是否正常。")])]),_._v(" "),i("p",[_._v("如果在 "),i("code",[_._v("SHOW SNAPSHOT")]),_._v(" 后指定了 where 子句，则可以显示更详细的备份信息。")]),_._v(" "),i("ul",[i("li",[_._v("Database：备份时对应的 Database。")]),_._v(" "),i("li",[_._v("Details：展示了该备份完整的数据目录结构。")])])]),_._v(" "),i("li",[i("p",[_._v("RESTORE")]),_._v(" "),i("p",[_._v("执行一次恢复操作。")])]),_._v(" "),i("li",[i("p",[_._v("SHOW RESTORE")]),_._v(" "),i("p",[_._v("查看最近一次 restore 作业的执行情况，包括：")]),_._v(" "),i("ul",[i("li",[_._v("JobId：本次恢复作业的 id。")]),_._v(" "),i("li",[_._v("Label：用户指定的仓库中备份的名称（Label）。")]),_._v(" "),i("li",[_._v("Timestamp：用户指定的仓库中备份的时间戳。")]),_._v(" "),i("li",[_._v("DbName：恢复作业对应的 Database。")]),_._v(" "),i("li",[_._v("State：恢复作业当前所在阶段：\n"),i("ul",[i("li",[_._v("PENDING：作业初始状态。")]),_._v(" "),i("li",[_._v("SNAPSHOTING：正在进行本地新建表的快照操作。")]),_._v(" "),i("li",[_._v("DOWNLOAD：正在发送下载快照任务。")]),_._v(" "),i("li",[_._v("DOWNLOADING：快照正在下载。")]),_._v(" "),i("li",[_._v("COMMIT：准备生效已下载的快照。")]),_._v(" "),i("li",[_._v("COMMITTING：正在生效已下载的快照。")]),_._v(" "),i("li",[_._v("FINISHED：恢复完成。")]),_._v(" "),i("li",[_._v("CANCELLED：恢复失败或被取消。")])])]),_._v(" "),i("li",[_._v("AllowLoad：恢复期间是否允许导入。")]),_._v(" "),i("li",[_._v("ReplicationNum：恢复指定的副本数。")]),_._v(" "),i("li",[_._v("RestoreObjs：本次恢复涉及的表和分区的清单。")]),_._v(" "),i("li",[_._v("CreateTime：作业创建时间。")]),_._v(" "),i("li",[_._v("MetaPreparedTime：本地元数据生成完成时间。")]),_._v(" "),i("li",[_._v("SnapshotFinishedTime：本地快照完成时间。")]),_._v(" "),i("li",[_._v("DownloadFinishedTime：远端快照下载完成时间。")]),_._v(" "),i("li",[_._v("FinishedTime：本次作业完成时间。")]),_._v(" "),i("li",[_._v("UnfinishedTasks：在 "),i("code",[_._v("SNAPSHOTTING")]),_._v("，"),i("code",[_._v("DOWNLOADING")]),_._v(", "),i("code",[_._v("COMMITTING")]),_._v(" 等阶段，会有多个子任务在同时进行，这里展示的当前阶段，未完成的子任务的 task id。")]),_._v(" "),i("li",[_._v("TaskErrMsg：如果有子任务执行出错，这里会显示对应子任务的错误信息。")]),_._v(" "),i("li",[_._v("Status：用于记录在整个作业过程中，可能出现的一些状态信息。")]),_._v(" "),i("li",[_._v("Timeout：作业的超时时间，单位是秒。")])])]),_._v(" "),i("li",[i("p",[_._v("CANCEL BACKUP")]),_._v(" "),i("p",[_._v("取消当前正在执行的备份作业。")])]),_._v(" "),i("li",[i("p",[_._v("CANCEL RESTORE")]),_._v(" "),i("p",[_._v("取消当前正在执行的恢复作业。")])]),_._v(" "),i("li",[i("p",[_._v("DROP REPOSITORY")]),_._v(" "),i("p",[_._v("删除已创建的远端仓库。删除仓库，仅仅是删除该仓库在 Doris 中的映射，不会删除实际的仓库数据。")])])])])}),[],!1,null,null,null);v.default=e.exports}}]);