(window.webpackJsonp=window.webpackJsonp||[]).push([[1123],{1567:function(e,s,o){"use strict";o.r(s);var n=o(52),r=Object(n.a)({},(function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"create-repository"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-repository"}},[e._v("#")]),e._v(" CREATE REPOSITORY")]),e._v(" "),o("h2",{attrs:{id:"description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('该语句用于创建仓库。仓库用于属于备份或恢复。仅 root 或 superuser 用户可以创建仓库。\n语法：\n    CREATE [READ ONLY] REPOSITORY `repo_name`\n    WITH [BROKER `broker_name`|S3]\n    ON LOCATION `repo_location`\n    PROPERTIES ("key"="value", ...);\n        \n说明：\n    1. 仓库的创建，依赖于已存在的 broker 或者直接通过AWS s3 协议访问云存储\n    2. 如果是只读仓库，则只能在仓库上进行恢复。如果不是，则可以进行备份和恢复操作。\n    3. 根据 broker 或者S3的不同类型，PROPERTIES 有所不同，具体见示例。\n')])])]),o("h2",{attrs:{id:"example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('1. 创建名为 bos_repo 的仓库，依赖 BOS broker "bos_broker"，数据根目录为：bos://palo_backup\n    CREATE REPOSITORY `bos_repo`\n    WITH BROKER `bos_broker`\n    ON LOCATION "bos://palo_backup"\n    PROPERTIES\n    (\n        "bos_endpoint" = "http://gz.bcebos.com",\n        "bos_accesskey" = "bos_accesskey",\n        "bos_secret_accesskey"="bos_secret_accesskey"\n    );\n \n2. 创建和示例 1 相同的仓库，但属性为只读：\n    CREATE READ ONLY REPOSITORY `bos_repo`\n    WITH BROKER `bos_broker`\n    ON LOCATION "bos://palo_backup"\n    PROPERTIES\n    (\n        "bos_endpoint" = "http://gz.bcebos.com",\n        "bos_accesskey" = "bos_accesskey",\n        "bos_secret_accesskey"="bos_accesskey"\n    );\n\n3. 创建名为 hdfs_repo 的仓库，依赖 Baidu hdfs broker "hdfs_broker"，数据根目录为：hdfs://hadoop-name-node:54310/path/to/repo/\n    CREATE REPOSITORY `hdfs_repo`\n    WITH BROKER `hdfs_broker`\n    ON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\n    PROPERTIES\n    (\n        "username" = "user",\n        "password" = "password"\n    );\n\n4. 创建名为 s3_repo 的仓库，直接链接云存储，而不通过broker.\n    CREATE REPOSITORY `s3_repo`\n    WITH S3\n    ON LOCATION "s3://s3-repo"\n    PROPERTIES\n    (\n        "AWS_ENDPOINT" = "http://s3-REGION.amazonaws.com",\n        "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n        "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n        "AWS_REGION" = "REGION"\n    );\n')])])]),o("h2",{attrs:{id:"keyword"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("CREATE REPOSITORY\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);