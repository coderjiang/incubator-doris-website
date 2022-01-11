(window.webpackJsonp=window.webpackJsonp||[]).push([[1079],{1527:function(t,a,e){"use strict";e.r(a);var s=e(55),l=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"admin-check-tablet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#admin-check-tablet"}},[t._v("#")]),t._v(" ADMIN CHECK TABLET")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("p",[t._v("该语句用于对一组 tablet 执行指定的检查操作")]),t._v(" "),e("p",[t._v("语法：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ADMIN CHECK TABLE (tablet_id1, tablet_id2, ...)\nPROPERTIES("type" = "...");\n')])])]),e("p",[t._v("说明：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("必须指定 tablet id 列表以及 PROPERTIES 中的 type 属性。")])]),t._v(" "),e("li",[e("p",[t._v("目前 type 仅支持：")]),t._v(" "),e("ul",[e("li",[t._v("consistency: 对tablet的副本数据一致性进行检查。该命令为异步命令，发送后，Doris 会开始执行对应 tablet 的一致性检查作业。最终的结果，将体现在 "),e("code",[t._v('SHOW PROC "/statistic";')]),t._v(" 结果中的 InconsistentTabletNum 列。")])])])]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("对指定的一组 tablet 进行副本数据一致性检查")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ADMIN CHECK TABLET (10000, 10001)\nPROPERTIES("type" = "consistency");\n')])])])])]),t._v(" "),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("ADMIN,CHECK,TABLET\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);