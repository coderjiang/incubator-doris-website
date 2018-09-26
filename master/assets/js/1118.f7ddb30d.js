(window.webpackJsonp=window.webpackJsonp||[]).push([[1118],{1513:function(a,e,t){"use strict";t.r(e);var i=t(43),s=Object(i.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"show-transaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-transaction"}},[a._v("#")]),a._v(" SHOW TRANSACTION")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("p",[a._v("该语法用于查看指定 transaction id 或 label 的事务详情。")]),a._v(" "),t("p",[a._v("语法：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("SHOW TRANSACTION\n[FROM db_name]\nWHERE\n[id = transaction_id]\n[label = label_name];\n")])])]),t("p",[a._v("返回结果示例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("     TransactionId: 4005\n             Label: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\n       Coordinator: FE: 10.74.167.16\n TransactionStatus: VISIBLE\n LoadJobSourceType: INSERT_STREAMING\n       PrepareTime: 2020-01-09 14:59:07\n        CommitTime: 2020-01-09 14:59:09\n        FinishTime: 2020-01-09 14:59:09\n            Reason:\nErrorReplicasCount: 0\n        ListenerId: -1\n         TimeoutMs: 300000\n")])])]),t("ul",[t("li",[a._v("TransactionId：事务id")]),a._v(" "),t("li",[a._v("Label：导入任务对应的 label")]),a._v(" "),t("li",[a._v("Coordinator：负责事务协调的节点")]),a._v(" "),t("li",[a._v("TransactionStatus：事务状态\n"),t("ul",[t("li",[a._v("PREPARE：准备阶段")]),a._v(" "),t("li",[a._v("COMMITTED：事务成功，但数据不可见")]),a._v(" "),t("li",[a._v("VISIBLE：事务成功且数据可见")]),a._v(" "),t("li",[a._v("ABORTED：事务失败")])])]),a._v(" "),t("li",[a._v("LoadJobSourceType：导入任务的类型。")]),a._v(" "),t("li",[a._v("PrepareTime：事务开始时间")]),a._v(" "),t("li",[a._v("CommitTime：事务提交成功的时间")]),a._v(" "),t("li",[a._v("FinishTime：数据可见的时间")]),a._v(" "),t("li",[a._v("Reason：错误信息")]),a._v(" "),t("li",[a._v("ErrorReplicasCount：有错误的副本数")]),a._v(" "),t("li",[a._v("ListenerId：相关的导入作业的id")]),a._v(" "),t("li",[a._v("TimeoutMs：事务超时时间，单位毫秒")])]),a._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("查看 id 为 4005 的事务：")]),a._v(" "),t("p",[a._v("SHOW TRANSACTION WHERE ID=4005;")])]),a._v(" "),t("li",[t("p",[a._v("指定 db 中，查看 id 为 4005 的事务：")]),a._v(" "),t("p",[a._v("SHOW TRANSACTION FROM db WHERE ID=4005;")])]),a._v(" "),t("li",[t("p",[a._v("查看 label 为 label_name的事务：\nSHOW TRANSACTION WHERE LABEL = 'label_name';")])])]),a._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("SHOW, TRANSACTION\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);