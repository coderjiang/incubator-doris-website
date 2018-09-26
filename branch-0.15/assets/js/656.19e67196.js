(window.webpackJsonp=window.webpackJsonp||[]).push([[656],{1045:function(_,a,e){"use strict";e.r(a);var t=e(43),v=Object(t.a)({},(function(){var _=this,a=_.$createElement,e=_._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"时区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时区"}},[_._v("#")]),_._v(" 时区")]),_._v(" "),e("p",[_._v("Doris 支持多时区设置")]),_._v(" "),e("h2",{attrs:{id:"名词解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[_._v("#")]),_._v(" 名词解释")]),_._v(" "),e("ul",[e("li",[_._v("FE：Frontend，Doris 的前端节点。负责元数据管理和请求接入。")]),_._v(" "),e("li",[_._v("BE：Backend，Doris 的后端节点。负责查询执行和数据存储。")])]),_._v(" "),e("h2",{attrs:{id:"基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[_._v("#")]),_._v(" 基本概念")]),_._v(" "),e("p",[_._v("Doris 内部存在多个时区相关参数")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("system_time_zone :\n当服务器启动时，会根据机器设置时区自动设置，设置后不可修改。")])]),_._v(" "),e("li",[e("p",[_._v("time_zone :\n服务器当前时区，区分session级别和global级别")])])]),_._v(" "),e("h2",{attrs:{id:"具体操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具体操作"}},[_._v("#")]),_._v(" 具体操作")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("show variables like '%time_zone%'")]),_._v(" "),e("p",[_._v("查看当前时区相关配置")])]),_._v(" "),e("li",[e("p",[_._v("SET time_zone = 'Asia/Shanghai'")]),_._v(" "),e("p",[_._v("该命令可以设置session级别的时区，连接断开后失效")])]),_._v(" "),e("li",[e("p",[_._v("SET global time_zone = 'Asia/Shanghai'")]),_._v(" "),e("p",[_._v("该命令可以设置global级别的时区参数，fe会将参数持久化，连接断开后不失效")])])]),_._v(" "),e("h3",{attrs:{id:"时区的影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时区的影响"}},[_._v("#")]),_._v(" 时区的影响")]),_._v(" "),e("p",[_._v("时区设置会影响对时区敏感的时间值的显示和存储。")]),_._v(" "),e("p",[_._v("包括NOW()或CURTIME()等时间函数显示的值，也包括show load, show backends中的时间值。")]),_._v(" "),e("p",[_._v("但不会影响 create table 中时间类型分区列的 less than 值，也不会影响存储为 date/datetime 类型的值的显示。")]),_._v(" "),e("p",[_._v("受时区影响的函数：")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("FROM_UNIXTIME")]),_._v("：给定一个 UTC 时间戳，返回指定时区的日期时间：如 "),e("code",[_._v("FROM_UNIXTIME(0)")]),_._v("， 返回 CST 时区："),e("code",[_._v("1970-01-01 08:00:00")]),_._v("。")]),_._v(" "),e("li",[e("code",[_._v("UNIX_TIMESTAMP")]),_._v("：给定一个指定时区日期时间，返回 UTC 时间戳：如 CST 时区 "),e("code",[_._v("UNIX_TIMESTAMP('1970-01-01 08:00:00')")]),_._v("，返回 "),e("code",[_._v("0")]),_._v("。")]),_._v(" "),e("li",[e("code",[_._v("CURTIME")]),_._v("：返回指定时区时间。")]),_._v(" "),e("li",[e("code",[_._v("NOW")]),_._v("：返指定地时区日期时间。")]),_._v(" "),e("li",[e("code",[_._v("CONVERT_TZ")]),_._v("：将一个日期时间从一个指定时区转换到另一个指定时区。")])]),_._v(" "),e("h2",{attrs:{id:"使用限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用限制"}},[_._v("#")]),_._v(" 使用限制")]),_._v(" "),e("p",[_._v("时区值可以使用几种格式给出，不区分大小写:")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("表示UTC偏移量的字符串，如'+10:00'或'-6:00'")])]),_._v(" "),e("li",[e("p",[_._v('标准时区格式，如"Asia/Shanghai"、"America/Los_Angeles"')])]),_._v(" "),e("li",[e("p",[_._v('不支持缩写时区格式，如"MET"、"CTT"。因为缩写时区在不同场景下存在歧义，不建议使用。')])]),_._v(" "),e("li",[e("p",[_._v('为了兼容Doris，支持CST缩写时区，内部会将CST转移为"Asia/Shanghai"的中国标准时区')])])]),_._v(" "),e("h2",{attrs:{id:"时区格式列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时区格式列表"}},[_._v("#")]),_._v(" 时区格式列表")]),_._v(" "),e("p",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",target:"_blank",rel:"noopener noreferrer"}},[_._v("List of tz database time zones"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=v.exports}}]);