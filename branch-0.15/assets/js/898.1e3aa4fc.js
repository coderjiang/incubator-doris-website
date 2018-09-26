(window.webpackJsonp=window.webpackJsonp||[]).push([[898],{1287:function(e,_,v){"use strict";v.r(_);var n=v(43),t=Object(n.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"time-round"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#time-round"}},[e._v("#")]),e._v(" time_round")]),e._v(" "),v("h2",{attrs:{id:"description"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),v("h3",{attrs:{id:"syntax"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),v("p",[v("code",[e._v("DATETIME TIME_ROUND(DATETIME expr)")])]),e._v(" "),v("p",[v("code",[e._v("DATETIME TIME_ROUND(DATETIME expr, INT period)")])]),e._v(" "),v("p",[v("code",[e._v("DATETIME TIME_ROUND(DATETIME expr, DATETIME origin)")])]),e._v(" "),v("p",[v("code",[e._v("DATETIME TIME_ROUND(DATETIME expr, INT period, DATETIME origin)")])]),e._v(" "),v("p",[e._v("函数名 "),v("code",[e._v("TIME_ROUND")]),e._v(" 由两部分组成，每部分由以下可选值组成")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("TIME")]),e._v(": "),v("code",[e._v("SECOND")]),e._v(", "),v("code",[e._v("MINUTE")]),e._v(", "),v("code",[e._v("HOUR")]),e._v(", "),v("code",[e._v("DAY")]),e._v(", "),v("code",[e._v("WEEK")]),e._v(", "),v("code",[e._v("MONTH")]),e._v(", "),v("code",[e._v("YEAR")])]),e._v(" "),v("li",[v("code",[e._v("ROUND")]),e._v(": "),v("code",[e._v("FLOOR")]),e._v(", "),v("code",[e._v("CEIL")])])]),e._v(" "),v("p",[e._v("返回 "),v("code",[e._v("expr")]),e._v(" 的上/下界。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("period")]),e._v(" 指定每个周期有多少个 "),v("code",[e._v("TIME")]),e._v(" 单位组成，默认为 "),v("code",[e._v("1")]),e._v("。")]),e._v(" "),v("li",[v("code",[e._v("origin")]),e._v(" 指定周期的开始时间，默认为 "),v("code",[e._v("1970-01-01T00:00:00")]),e._v("，"),v("code",[e._v("WEEK")]),e._v(" 的默认开始时间为 "),v("code",[e._v("1970-01-04T00:00:00")]),e._v("，即周日。可以比 "),v("code",[e._v("expr")]),e._v(" 大。")]),e._v(" "),v("li",[e._v("请尽量选择常见 "),v("code",[e._v("period")]),e._v("，如 3 "),v("code",[e._v("MONTH")]),e._v("，90 "),v("code",[e._v("MINUTE")]),e._v(" 等，如设置了非常用 "),v("code",[e._v("period")]),e._v("，请同时指定 "),v("code",[e._v("origin")]),e._v("。")])]),e._v(" "),v("h2",{attrs:{id:"example"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("\nMySQL> SELECT YEAR_FLOOR('20200202000000');\n+------------------------------+\n| year_floor('20200202000000') |\n+------------------------------+\n| 2020-01-01 00:00:00          |\n+------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3); --quarter\n+--------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3) |\n+--------------------------------------------------------+\n| 2020-04-01 00:00:00                                    |\n+--------------------------------------------------------+\n\n\nMySQL> SELECT WEEK_CEIL('2020-02-02 13:09:20', '2020-01-06'); --monday\n+---------------------------------------------------------+\n| week_ceil('2020-02-02 13:09:20', '2020-01-06 00:00:00') |\n+---------------------------------------------------------+\n| 2020-02-03 00:00:00                                     |\n+---------------------------------------------------------+\n\n\nMySQL> SELECT MONTH_CEIL(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)); --next rent day\n+-------------------------------------------------------------------------------------------------+\n| month_ceil(CAST('2020-02-02 13:09:20' AS DATETIME), 3, CAST('1970-01-09 00:00:00' AS DATETIME)) |\n+-------------------------------------------------------------------------------------------------+\n| 2020-04-09 00:00:00                                                                             |\n+-------------------------------------------------------------------------------------------------+\n\n")])])]),v("h2",{attrs:{id:"keyword"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),v("p",[e._v("TIME_ROUND")])])}),[],!1,null,null,null);_.default=t.exports}}]);