(window.webpackJsonp=window.webpackJsonp||[]).push([[680],{1069:function(t,e,a){"use strict";a.r(e);var n=a(43),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"审计日志插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#审计日志插件"}},[t._v("#")]),t._v(" 审计日志插件")]),t._v(" "),a("p",[t._v("Doris 的审计日志插件是在 FE 的插件框架基础上开发的。是一个可选插件。用户可以在运行时安装或卸载这个插件。")]),t._v(" "),a("p",[t._v("该插件可以将 FE 的审计日志定期的导入到指定 Doris 集群中，以方便用户通过 SQL 对审计日志进行查看和分析。")]),t._v(" "),a("h2",{attrs:{id:"编译、配置和部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译、配置和部署"}},[t._v("#")]),t._v(" 编译、配置和部署")]),t._v(" "),a("h3",{attrs:{id:"fe-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe-配置"}},[t._v("#")]),t._v(" FE 配置")]),t._v(" "),a("p",[t._v("FE的插件框架当前是实验性功能，Doris中默认关闭，在FE的配置文件中，增加"),a("code",[t._v("plugin_enable = true")]),t._v("启用plugin框架")]),t._v(" "),a("h3",{attrs:{id:"auditloader-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auditloader-配置"}},[t._v("#")]),t._v(" AuditLoader 配置")]),t._v(" "),a("p",[t._v("auditloader plugin的配置位于"),a("code",[t._v("${DORIS}/fe_plugins/auditloader/src/main/assembly/")]),t._v(".")]),t._v(" "),a("p",[t._v("打开 "),a("code",[t._v("plugin.conf")]),t._v(" 进行配置。配置项说明参见注释。")]),t._v(" "),a("h3",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),a("p",[t._v("在 Doris 代码目录下执行 "),a("code",[t._v("sh build_plugin.sh")]),t._v(" 后，会在 "),a("code",[t._v("fe_plugins/output")]),t._v(" 目录下得到 "),a("code",[t._v("auditloader.zip")]),t._v(" 文件。")]),t._v(" "),a("h3",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),a("p",[t._v("您可以将这个文件放置在一个 http 服务器上，或者拷贝"),a("code",[t._v("auditloader.zip")]),t._v("(或者解压"),a("code",[t._v("auditloader.zip")]),t._v(")到所有 FE 的指定目录下。这里我们使用后者。")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("部署完成后，安装插件前，需要创建之前在 "),a("code",[t._v("plugin.conf")]),t._v(" 中指定的审计数据库和表。其中建表语句如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('create table doris_audit_tbl__\n(\n    query_id varchar(48) comment "Unique query id",\n    time datetime not null comment "Query start time",\n    client_ip varchar(32) comment "Client IP",\n    user varchar(64) comment "User name",\n    db varchar(96) comment "Database of this query",\n    state varchar(8) comment "Query result state. EOF, ERR, OK",\n    query_time bigint comment "Query execution time in millisecond",\n    scan_bytes bigint comment "Total scan bytes of this query",\n    scan_rows bigint comment "Total scan rows of this query",\n    return_rows bigint comment "Returned rows of this query",\n    stmt_id int comment "An incremental id of statement",\n    is_query tinyint comment "Is this statemt a query. 1 or 0",\n    frontend_ip varchar(32) comment "Frontend ip of executing this statement",\n    stmt varchar(5000) comment "The original statement, trimed if longer than 5000 bytes"\n) engine=OLAP\nduplicate key(query_id, time, client_ip)\npartition by range(time) ()\ndistributed by hash(query_id) buckets 1\nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "1",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n')])])]),a("p",[t._v("其中 "),a("code",[t._v("dynamic_partition")]),t._v(" 属性根据自己的需要，选择审计日志安保留的天数。")]),t._v(" "),a("p",[t._v("之后，连接到 Doris 后使用 "),a("code",[t._v("INSTALL PLUGIN")]),t._v(" 命令完成安装。安装成功后，可以通过 "),a("code",[t._v("SHOW PLUGINS")]),t._v(" 看到已经安装的插件，并且状态为 "),a("code",[t._v("INSTALLED")]),t._v("。")]),t._v(" "),a("p",[t._v("完成后，插件会不断的以指定的时间间隔将审计日志插入到这个表中。")])])}),[],!1,null,null,null);e.default=i.exports}}]);