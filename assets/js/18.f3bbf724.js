(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{464:function(t,e,a){"use strict";a.r(e);var r=a(52),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"temporary-partition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#temporary-partition"}},[t._v("#")]),t._v(" Temporary partition")]),t._v(" "),a("p",[t._v("Since version 0.12, Doris supports temporary partitioning.")]),t._v(" "),a("p",[t._v("A temporary partition belongs to a partitioned table. Only partitioned tables can create temporary partitions.")]),t._v(" "),a("h2",{attrs:{id:"rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules"}},[t._v("#")]),t._v(" Rules")]),t._v(" "),a("ul",[a("li",[t._v("The partition columns of the temporary partition is the same as the formal partition and cannot be modified.")]),t._v(" "),a("li",[t._v("The partition ranges of all temporary partitions of a table cannot overlap, but the ranges of temporary partitions and formal partitions can overlap.")]),t._v(" "),a("li",[t._v("The partition name of the temporary partition cannot be the same as the formal partitions and other temporary partitions.")])]),t._v(" "),a("h2",{attrs:{id:"supported-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-operations"}},[t._v("#")]),t._v(" Supported operations")]),t._v(" "),a("p",[t._v("The temporary partition supports add, delete, and replace operations.")]),t._v(" "),a("h3",{attrs:{id:"add-temporary-partition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-temporary-partition"}},[t._v("#")]),t._v(" Add temporary partition")]),t._v(" "),a("p",[t._v("You can add temporary partitions to a table with the "),a("code",[t._v("ALTER TABLE ADD TEMPORARY PARTITION")]),t._v(" statement:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ALTER TABLE tbl1 ADD TEMPORARY PARTITION tp1 VALUES LESS THAN ("2020-02-01");\n\nALTER TABLE tbl2 ADD TEMPORARY PARTITION tp1 VALUES [("2020-01-01"), ("2020-02-01"));\n\nALTER TABLE tbl1 ADD TEMPORARY PARTITION tp1 VALUES LESS THAN ("2020-02-01")\n("in_memory" = "true", "replication_num" = "1")\nDISTRIBUTED BY HASH (k1) BUCKETS 5;\n\nALTER TABLE tbl3 ADD TEMPORARY PARTITION tp1 VALUES IN ("Beijing", "Shanghai");\n\nALTER TABLE tbl4 ADD TEMPORARY PARTITION tp1 VALUES IN ((1, "Beijing"), (1, "Shanghai"));\n\nALTER TABLE tbl3 ADD TEMPORARY PARTITION tp1 VALUES IN ("Beijing", "Shanghai")\n("in_memory" = "true", "replication_num" = "1")\nDISTRIBUTED BY HASH(k1) BUCKETS 5;\n\n')])])]),a("p",[t._v("See "),a("code",[t._v("HELP ALTER TABLE;")]),t._v(" for more help and examples.")]),t._v(" "),a("p",[t._v("Some instructions for adding operations:")]),t._v(" "),a("ul",[a("li",[t._v("Adding a temporary partition is similar to adding a formal partition. The partition range of the temporary partition is independent of the formal partition.")]),t._v(" "),a("li",[t._v("Temporary partition can independently specify some attributes. Includes information such as the number of buckets, the number of replicas, whether it is a memory table, or the storage medium.")])]),t._v(" "),a("h3",{attrs:{id:"delete-temporary-partition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-temporary-partition"}},[t._v("#")]),t._v(" Delete temporary partition")]),t._v(" "),a("p",[t._v("A table's temporary partition can be dropped with the "),a("code",[t._v("ALTER TABLE DROP TEMPORARY PARTITION")]),t._v(" statement:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ALTER TABLE tbl1 DROP TEMPORARY PARTITION tp1;\n")])])]),a("p",[t._v("See "),a("code",[t._v("HELP ALTER TABLE;")]),t._v(" for more help and examples.")]),t._v(" "),a("p",[t._v("Some instructions for the delete operation:")]),t._v(" "),a("ul",[a("li",[t._v("Deleting the temporary partition will not affect the data of the formal partition.")])]),t._v(" "),a("h3",{attrs:{id:"replace-partition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replace-partition"}},[t._v("#")]),t._v(" Replace partition")]),t._v(" "),a("p",[t._v("You can replace formal partitions of a table with temporary partitions with the "),a("code",[t._v("ALTER TABLE REPLACE PARTITION")]),t._v(" statement.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n\nALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1, tp2, tp3);\n\nALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1, tp2)\nPROPERTIES (\n    "strict_range" = "false",\n    "use_temp_partition_name" = "true"\n);\n')])])]),a("p",[t._v("See "),a("code",[t._v("HELP ALTER TABLE;")]),t._v(" for more help and examples.")]),t._v(" "),a("p",[t._v("The replace operation has two special optional parameters:")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("strict_range")])]),t._v(" "),a("p",[t._v("The default is true.")]),t._v(" "),a("p",[t._v("For Range partition, When this parameter is true, the range union of all formal partitions to be replaced needs to be the same as the range union of the temporary partitions to be replaced. When set to false, you only need to ensure that the range between the new formal partitions does not overlap after replacement.")]),t._v(" "),a("p",[t._v("For List partition, this parameter is always true, and the enumeration values of all full partitions to be replaced must be identical to the enumeration values of the temporary partitions to be replaced.")]),t._v(" "),a("p",[t._v("Here are some examples:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Example 1")]),t._v(" "),a("p",[t._v("Range of partitions p1, p2, p3 to be replaced (=> union):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(10, 20), [20, 30), [40, 50) => [10, 30), [40, 50)\n")])])]),a("p",[t._v("Replace the range of partitions tp1, tp2 (=> union):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(10, 30), [40, 45), [45, 50) => [10, 30), [40, 50)\n")])])]),a("p",[t._v("The union of ranges is the same, so you can use tp1 and tp2 to replace p1, p2, p3.")])]),t._v(" "),a("li",[a("p",[t._v("Example 2")]),t._v(" "),a("p",[t._v("Range of partition p1 to be replaced (=> union):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(10, 50) => [10, 50)\n")])])]),a("p",[t._v("Replace the range of partitions tp1, tp2 (=> union):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(10, 30), [40, 50) => [10, 30), [40, 50)\n")])])]),a("p",[t._v("The union of ranges is not the same. If "),a("code",[t._v("strict_range")]),t._v(" is true, you cannot use tp1 and tp2 to replace p1. If false, and the two partition ranges "),a("code",[t._v("[10, 30), [40, 50)")]),t._v(" and the other formal partitions do not overlap, they can be replaced.")])]),t._v(" "),a("li",[a("p",[t._v("Example 3")]),t._v(" "),a("p",[t._v("Enumerated values of partitions p1, p2 to be replaced (=> union).")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(1, 2, 3), (4, 5, 6) => (1, 2, 3, 4, 5, 6)\n")])])]),a("p",[t._v("Replace the enumerated values of partitions tp1, tp2, tp3 (=> union).")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("(1, 2, 3), (4), (5, 6) => (1, 2, 3, 4, 5, 6)\n")])])]),a("p",[t._v("The enumeration values are the same, you can use tp1, tp2, tp3 to replace p1, p2")])]),t._v(" "),a("li",[a("p",[t._v("Example 4")]),t._v(" "),a("p",[t._v("Enumerated values of partitions p1, p2, p3 to be replaced (=> union).")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('(("1", "beijing"), ("1", "shanghai")), (("2", "beijing"), ("2", "shanghai")), (("3", "beijing"), ("3", "shanghai")) => (("1", "beijing"), ("3", "shanghai")) "), ("1", "shanghai"), ("2", "beijing"), ("2", "shanghai"), ("3", "beijing"), ("3", "shanghai"))\n')])])]),a("p",[t._v("Replace the enumerated values of partitions tp1, tp2 (=> union).")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('(("1", "beijing"), ("1", "shanghai")), (("2", "beijing"), ("2", "shanghai"), ("3", "beijing"), ("3", "shanghai")) => (("1", "beijing") , ("1", "shanghai"), ("2", "beijing"), ("2", "shanghai"), ("3", "beijing"), ("3", "shanghai"))\n')])])]),a("p",[t._v("The enumeration values are the same, you can use tp1, tp2 to replace p1, p2, p3")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("use_temp_partition_name")])]),t._v(" "),a("p",[t._v("The default is false. When this parameter is false, and the number of partitions to be replaced is the same as the number of replacement partitions, the name of the formal partition after the replacement remains unchanged. If true, after replacement, the name of the formal partition is the name of the replacement partition. Here are some examples:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Example 1")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n")])])]),a("p",[a("code",[t._v("use_temp_partition_name")]),t._v(" is false by default. After replacement, the partition name is still p1, but the related data and attributes are replaced with tp1.")]),t._v(" "),a("p",[t._v("If "),a("code",[t._v("use_temp_partition_name")]),t._v(" is true by default, the name of the partition is tp1 after replacement. The p1 partition no longer exists.")])]),t._v(" "),a("li",[a("p",[t._v("Example 2")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1);\n")])])]),a("p",[a("code",[t._v("use_temp_partition_name")]),t._v(" is false by default, but this parameter is invalid because the number of partitions to be replaced and the number of replacement partitions are different. After the replacement, the partition name is tp1, and p1 and p2 no longer exist.")])])])])]),t._v(" "),a("p",[t._v("Some instructions for the replacement operation:")]),t._v(" "),a("ul",[a("li",[t._v("After the partition is replaced successfully, the replaced partition will be deleted and cannot be recovered.")])]),t._v(" "),a("h2",{attrs:{id:"load-and-query-of-temporary-partitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-and-query-of-temporary-partitions"}},[t._v("#")]),t._v(" Load and query of temporary partitions")]),t._v(" "),a("p",[t._v("Users can load data into temporary partitions or specify temporary partitions for querying.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Load temporary partition")]),t._v(" "),a("p",[t._v("The syntax for specifying a temporary partition is slightly different depending on the load method. Here is a simple illustration through an example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO tbl TEMPORARY PARTITION (tp1, tp2, ...) SELECT ....\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u root: -H "label: 123" -H "temporary_partition: tp1, tp2, ..." -T testData http: // host: port / api / testDb / testTbl / _stream_load\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('LOAD LABEL example_db.label1\n(\nDATA INFILE ("hdfs: // hdfs_host: hdfs_port / user / palo / data / input / file")\nINTO TABLE `my_table`\nTEMPORARY PARTITION (tp1, tp2, ...)\n...\n)\nWITH BROKER hdfs ("username" = "hdfs_user", "password" = "hdfs_password");\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS (k1, k2, k3, v1, v2, v3 = k1 * 100),\nTEMPORARY PARTITIONS (tp1, tp2, ...),\nWHERE k1> 100\nPROPERTIES\n(...)\nFROM KAFKA\n(...);\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Query the temporary partition")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SELECT ... FROM\ntbl1 TEMPORARY PARTITION (tp1, tp2, ...)\nJOIN\ntbl2 TEMPORARY PARTITION (tp1, tp2, ...)\nON ...\nWHERE ...;\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"relationship-to-other-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relationship-to-other-operations"}},[t._v("#")]),t._v(" Relationship to other operations")]),t._v(" "),a("h3",{attrs:{id:"drop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drop"}},[t._v("#")]),t._v(" DROP")]),t._v(" "),a("ul",[a("li",[t._v("After using the "),a("code",[t._v("DROP")]),t._v(" operation to directly drop the database or table, you can recover the database or table (within a limited time) through the "),a("code",[t._v("RECOVER")]),t._v(" command, but the temporary partition will not be recovered.")]),t._v(" "),a("li",[t._v("After the formal partition is dropped using the "),a("code",[t._v("ALTER")]),t._v(" command, the partition can be recovered by the "),a("code",[t._v("RECOVER")]),t._v(" command (within a limited time). Operating a formal partition is not related to a temporary partition.")]),t._v(" "),a("li",[t._v("After the temporary partition is dropped using the "),a("code",[t._v("ALTER")]),t._v(" command, the temporary partition cannot be recovered through the "),a("code",[t._v("RECOVER")]),t._v(" command.")])]),t._v(" "),a("h3",{attrs:{id:"truncate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#truncate"}},[t._v("#")]),t._v(" TRUNCATE")]),t._v(" "),a("ul",[a("li",[t._v("Use the "),a("code",[t._v("TRUNCATE")]),t._v(" command to empty the table. The temporary partition of the table will be deleted and cannot be recovered.")]),t._v(" "),a("li",[t._v("When using "),a("code",[t._v("TRUNCATE")]),t._v(" command to empty the formal partition, it will not affect the temporary partition.")]),t._v(" "),a("li",[t._v("You cannot use the "),a("code",[t._v("TRUNCATE")]),t._v(" command to empty the temporary partition.")])]),t._v(" "),a("h3",{attrs:{id:"alter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alter"}},[t._v("#")]),t._v(" ALTER")]),t._v(" "),a("ul",[a("li",[t._v("When the table has a temporary partition, you cannot use the "),a("code",[t._v("ALTER")]),t._v(" command to perform Schema Change, Rollup, etc. on the table.")]),t._v(" "),a("li",[t._v("You cannot add temporary partitions to a table while the table is undergoing a alter operation.")])]),t._v(" "),a("h2",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[t._v("#")]),t._v(" Best Practices")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Atomic overwrite")]),t._v(" "),a("p",[t._v("In some cases, the user wants to be able to rewrite the data of a certain partition, but if it is dropped first and then loaded, there will be a period of time when the data cannot be seen. At this moment, the user can first create a corresponding temporary partition, load new data into the temporary partition, and then replace the original partition atomically through the "),a("code",[t._v("REPLACE")]),t._v(" operation to achieve the purpose. For atomic overwrite operations of non-partitioned tables, please refer to "),a("RouterLink",{attrs:{to:"/administrator-guide/alter-table/alter-table-replace-table.html"}},[t._v("Replace Table Document")])],1)]),t._v(" "),a("li",[a("p",[t._v("Modify the number of buckets")]),t._v(" "),a("p",[t._v("In some cases, the user used an inappropriate number of buckets when creating a partition. The user can first create a temporary partition corresponding to the partition range and specify a new number of buckets. Then use the "),a("code",[t._v("INSERT INTO")]),t._v(" command to load the data of the formal partition into the temporary partition. Through the replacement operation, the original partition is replaced atomically to achieve the purpose.")])]),t._v(" "),a("li",[a("p",[t._v("Merge or split partitions")]),t._v(" "),a("p",[t._v("In some cases, users want to modify the range of partitions, such as merging two partitions, or splitting a large partition into multiple smaller partitions. Then the user can first create temporary partitions corresponding to the merged or divided range, and then load the data of the formal partition into the temporary partition through the "),a("code",[t._v("INSERT INTO")]),t._v(" command. Through the replacement operation, the original partition is replaced atomically to achieve the purpose.")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);