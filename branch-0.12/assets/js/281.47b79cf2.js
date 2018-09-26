(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{668:function(a,e,t){"use strict";t.r(e);var s=t(43),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"cancel-label"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cancel-label"}},[a._v("#")]),a._v(" CANCEL LABEL")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("NAME:\n    cancel_label: cancel a transaction with label\n    \nSYNOPSIS\n    curl -u user:passwd -XPOST http://host:port/api/{db}/{label}/_cancel\n\nDESCRIPTION\n    该命令用于cancel一个指定Label对应的事务，事务在Prepare阶段能够被成功cancel\n\nRETURN VALUES\n    执行完成后，会以Json格式返回这次导入的相关内容。当前包括一下字段\n    Status: 是否成功cancel\n        Success: 成功cancel事务\n        其他: cancel失败\n    Message: 具体的失败信息\n       \nERRORS\n")])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. cancel testDb, testLabel的作业\n    curl -u root -XPOST http://host:port/api/testDb/testLabel/_cancel\n")])])]),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("CANCEL，LABEL\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);