(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{973:function(e,s,o){"use strict";o.r(s);var r=o(55),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"create-repository"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-repository"}},[e._v("#")]),e._v(" CREATE REPOSITORY")]),e._v(" "),o("h2",{attrs:{id:"description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('This statement is used to create the warehouse. The warehouse is used for backup or recovery. Only root or superuser users can create warehouses.\nGrammar:\n    CREATE [READ ONLY] REPOSITORY `repo_name`\n    WITH [BROKER `broker_name`|S3]\n    ON LOCATION `repo_location`\n    PROPERTIES ("key"="value", ...);\n\nExplain:\n    1. The creation of warehouses depends on existing brokers, or use aws s3 protocl to connet cloud storage directly.\n    2. If it is a read-only warehouse, it can only be restored on the warehouse. If not, you can backup and restore operations.\n    3. According to the different types of broker or S3, PROPERTIES is different, see the example.\n')])])]),o("h2",{attrs:{id:"example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('1. Create a warehouse named bos_repo, which relies on BOS broker "bos_broker", and the data root directory is: bos://palo_backup.\n    CREATE REPOSITORY `bos_repo`\n    WITH BROKER `bos_broker`\n    ON LOCATION "bos://palo_backup"\n    PROPERTIES\n    (\n    "bos_endpoint" ="http://gz.bcebos.com",\n    "bos_accesskey" = "bos_accesskey",\n    "bos_secret_accesskey"="bos_accesskey"\n    );\n\n2. Create the same warehouse as in Example 1, but with read-only attributes:\n    CREATE READ ONLY REPOSITORY `bos_repo`\n    WITH BROKER `bos_broker`\n    ON LOCATION "bos://palo_backup"\n    PROPERTIES\n    (\n    "bos_endpoint" ="http://gz.bcebos.com",\n    "bos_accesskey" = "bos_accesskey",\n    "bos_secret_accesskey"="bos_secret_accesskey"\n    );\n\n3. Create a warehouse named hdfs_repo, which relies on Baidu HDFS broker "hdfs_broker", and the data root directory is: hdfs://hadoop-name-node:54310/path/to/repo./\n    CREATE REPOSITORY `hdfs_repo`\n    WITH BROKER `hdfs_broker`\n    ON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\n    PROPERTIES\n    (\n    "Username" = "User"\n    "password" = "password"\n    );\n\n4. 创建名为 s3_repo 的仓库, 直接链接云存储, 而不通过broker.\n    CREATE REPOSITORY `s3_repo`\n    WITH S3\n    ON LOCATION "s3://s3-repo"\n    PROPERTIES\n    (\n    "AWS_ENDPOINT" = "http://s3-REGION.amazonaws.com",\n    "AWS_ACCESS_KEY" = "AWS_ACCESS_KEY",\n    "AWS_SECRET_KEY"="AWS_SECRET_KEY",\n    "AWS_REGION" = "REGION"\n    );\n')])])]),o("h2",{attrs:{id:"keyword"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),o("p",[e._v("CREATE REPOSITORY")])])}),[],!1,null,null,null);s.default=a.exports}}]);