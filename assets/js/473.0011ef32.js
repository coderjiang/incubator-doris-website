(window.webpackJsonp=window.webpackJsonp||[]).push([[473],{916:function(e,r,t){"use strict";t.r(r);var a=t(52),o=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"set-property"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-property"}},[e._v("#")]),e._v(" SET PROPERTY")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("Syntax:")]),e._v(" "),t("p",[e._v("SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']")]),e._v(" "),t("p",[e._v("Set user attributes, including resources allocated to users, import cluster, etc. The user attributes set here are for user, not user_identity. That is to say, if two users 'jack'@'%' and 'jack'@'192%'are created through the CREATE USER statement, the SET PROPERTY statement can only be used for the jack user, not 'jack'@'%' or 'jack'@'192%'")]),e._v(" "),t("p",[e._v("Importing cluster is only applicable to Baidu internal users.")]),e._v(" "),t("p",[e._v("key:")]),e._v(" "),t("p",[e._v("Super user rights:\nmax_user_connections: Maximum number of connections.\nmax_query_instances: Maximum number of query instance user can use when query.\nsql_block_rules: set sql block rules。After setting, if the query user execute match the rules, it will be rejected.\ncpu_resource_limit: limit the cpu resource usage of a query. See session variable "),t("code",[e._v("cpu_resource_limit")]),e._v(".\nresource.cpu_share: cpu resource assignment.(Derepcated)\nLoad_cluster. {cluster_name}. priority: assigns priority to a specified cluster, which can be HIGH or NORMAL\nresource_tags: Specify the user's resource tag permissions.")]),e._v(" "),t("p",[e._v("Ordinary user rights:\nQuota.normal: Resource allocation at the normal level.\nQuota.high: Resource allocation at the high level.\nQuota.low: Resource allocation at low level.")]),e._v(" "),t("p",[e._v("Load_cluster. {cluster_name}. hadoop_palo_path: The Hadoop directory used by Palo needs to store ETL programs and intermediate data generated by ETL for Palo to import. After the import is completed, the intermediate data will be automatically cleaned up, and the ETL program will be automatically reserved for next use.\nLoad_cluster. {cluster_name}. hadoop_configs: configuration of hadoop, where fs. default. name, mapred. job. tracker, hadoop. job. UGI must be filled in.\nLoad_cluster. {cluster_name}. hadoop_port: Hadoop HDFS name node http}\nDefault_load_cluster: The default import cluster.")]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Modify the maximum number of user jacks to 1000\nSET PROPERTY FOR 'jack' 'max_user_connections' = '1000';")])]),e._v(" "),t("li",[t("p",[e._v("Modify the cpu_share of user Jack to 1000\nSET PROPERTY FOR 'jack' 'resource.cpu_share' = '1000';")])]),e._v(" "),t("li",[t("p",[e._v("Modify the weight of the normal group of Jack users\nSet property for 'jack''quota. normal' = 400';")])]),e._v(" "),t("li",[t("p",[e._v("Add import cluster for user jack\nSET PROPERTY FOR 'jack'\n'load 'cluster.{cluster name}.hadoop' palo path' ='/user /palo /palo path',\n'load_cluster.{cluster_name}.hadoop_configs' = 'fs.default.name=hdfs://dpp.cluster.com:port;mapred.job.tracker=dpp.cluster.com:port;hadoop.job.ugi=user,password;mapred.job.queue.name=job_queue_name_in_hadoop;mapred.job.priority=HIGH;';")])]),e._v(" "),t("li",[t("p",[e._v("Delete the import cluster under user jack.\nSET PROPERTY FOR 'jack' 'load_cluster.{cluster_name}' = '';")])]),e._v(" "),t("li",[t("p",[e._v("Modify user jack's default import cluster\nSET PROPERTY FOR 'jack' 'default_load_cluster' = '{cluster_name}';")])]),e._v(" "),t("li",[t("p",[e._v("Modify the cluster priority of user Jack to HIGH\nSET PROPERTY FOR 'jack' 'load_cluster.{cluster_name}.priority' = 'HIGH';")])]),e._v(" "),t("li",[t("p",[e._v("Modify the maximum number of query instance for jack to 3000\nSET PROPERTY FOR 'jack' 'max_query_instances' = '3000';")])]),e._v(" "),t("li",[t("p",[e._v("Modify the sql block rule for jack\nSET PROPERTY FOR 'jack' 'sql_block_rules' = 'rule1, rule2';")])]),e._v(" "),t("li",[t("p",[e._v("Modify the cpu resource usage limit for jack\nSET PROPERTY FOR 'jack' 'cpu_resource_limit' = '2';")])]),e._v(" "),t("li",[t("p",[e._v("Modify user's resource tag permission\nSET PROPERTY FOR 'jack' 'resource_tags.location' = 'group_a, group_b';")])])]),e._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("SET, PROPERTY")])])}),[],!1,null,null,null);r.default=o.exports}}]);