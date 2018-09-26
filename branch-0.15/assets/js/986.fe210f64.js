(window.webpackJsonp=window.webpackJsonp||[]).push([[986],{1375:function(e,t,s){"use strict";s.r(t);var a=s(43),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"create-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-cluster"}},[e._v("#")]),e._v(" CREATE CLUSTER")]),e._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('该语句用于新建逻辑集群 (cluster), 需要管理员权限。如果不使用多租户，直接创建一个名称为default_cluster的cluster。否则创建一个自定义名称的cluster。\n\n语法\n\n    CREATE CLUSTER [IF NOT EXISTS] cluster_name\n\n    PROPERTIES ("key"="value", ...)\n    \n    IDENTIFIED BY \'password\'\n    \n1. PROPERTIES\n\n    指定逻辑集群的属性\n\n    PROPERTIES ("instance_num" = "3")\n\n    instance_num 逻辑集群节点树\n\n2. identified by ‘password\' 每个逻辑集群含有一个superuser，创建逻辑集群时必须指定其密码\n')])])]),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('1. 新建一个含有3个be节点逻辑集群 test_cluster, 并指定其superuser用户密码\n\n   CREATE CLUSTER test_cluster PROPERTIES("instance_num"="3") IDENTIFIED BY \'test\';\n\n2. 新建一个含有3个be节点逻辑集群 default_cluster(不使用多租户), 并指定其superuser用户密码\n\n   CREATE CLUSTER default_cluster PROPERTIES("instance_num"="3") IDENTIFIED BY \'test\';\n')])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("CREATE,CLUSTER\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);