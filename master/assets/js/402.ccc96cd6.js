(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{853:function(t,e,a){"use strict";a.r(e);var l=a(55),s=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"yearweek"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yearweek"}},[t._v("#")]),t._v(" yearweek")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("p",[a("code",[t._v("INT YEARWEEK(DATE date)")]),t._v(" "),a("code",[t._v("INT YEARWEEK(DATE date, INT mode)")])]),t._v(" "),a("p",[t._v("Returns year and week for a date.The value of the mode argument defaults to 0.\nWhen the week of the date belongs to the previous year, the year and week of the previous year are returned;\nwhen the week of the date belongs to the next year, the year of the next year is returned and the week is 1.")]),t._v(" "),a("p",[t._v("The following table describes how the mode argument works.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Mode")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("First day of week")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Range")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Week 1 is the first week …")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Sunday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with a Sunday in this year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Monday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with 4 or more days this year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Sunday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with a Sunday in this year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Monday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with 4 or more days this year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Sunday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with 4 or more days this year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Monday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with a Monday in this year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Sunday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with 4 or more days this year")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Monday")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1-53")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("with a Monday in this year")])])])]),t._v(" "),a("p",[t._v("The parameter is Date or Datetime type")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> select yearweek('2021-1-1');\n+----------------------+\n| yearweek('2021-1-1') |\n+----------------------+\n|               202052 |\n+----------------------+\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> select yearweek('2020-7-1');\n+----------------------+\n| yearweek('2020-7-1') |\n+----------------------+\n|               202026 |\n+----------------------+\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql> select yearweek('2024-12-30',1);\n+------------------------------------+\n| yearweek('2024-12-30 00:00:00', 1) |\n+------------------------------------+\n|                             202501 |\n+------------------------------------+\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("YEARWEEK")])])}),[],!1,null,null,null);e.default=s.exports}}]);