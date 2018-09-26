(window.webpackJsonp=window.webpackJsonp||[]).push([[663],{1051:function(a,e,t){"use strict";t.r(e);var n=t(43),s=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"show-backup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-backup"}},[a._v("#")]),a._v(" SHOW BACKUP")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("该语句用于查看 BACKUP 任务\n语法：\n    SHOW BACKUP [FROM db_name]\n    \n说明：\n    1. Palo 中仅保存最近一次 BACKUP 任务。\n    2. 各列含义如下：\n        JobId：                  唯一作业id\n        SnapshotName：           备份的名称\n        DbName：                 所属数据库\n        State：                  当前阶段\n            PENDING：        提交作业后的初始状态\n            SNAPSHOTING：    执行快照中\n            UPLOAD_SNAPSHOT：快照完成，准备上传\n            UPLOADING：      快照上传中\n            SAVE_META：      将作业元信息保存为本地文件\n            UPLOAD_INFO：    上传作业元信息\n            FINISHED：       作业成功\n            CANCELLED：      作业失败\n        BackupObjs：             备份的表和分区\n        CreateTime：             任务提交时间\n        SnapshotFinishedTime：   快照完成时间\n        UploadFinishedTime：     快照上传完成时间\n        FinishedTime：           作业结束时间\n        UnfinishedTasks：        在 SNAPSHOTING 和 UPLOADING 阶段会显示还未完成的子任务id\n        Status：                 如果作业失败，显示失败信息\n        Timeout：                作业超时时间，单位秒\n")])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. 查看 example_db 下最后一次 BACKUP 任务。\n    SHOW BACKUP FROM example_db;\n")])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("SHOW, BACKUP\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);