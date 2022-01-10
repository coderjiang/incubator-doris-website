(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{467:function(t,e,s){"use strict";s.r(e);var a=s(52),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bloomfilter-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bloomfilter-index"}},[t._v("#")]),t._v(" BloomFilter index")]),t._v(" "),s("p",[t._v("BloomFilter is a fast search algorithm for multi-hash function mapping proposed by Bloom in 1970. Usually used in some occasions where it is necessary to quickly determine whether an element belongs to a set, but is not strictly required to be 100% correct, BloomFilter has the following characteristics:")]),t._v(" "),s("p",[t._v("-A highly space-efficient probabilistic data structure used to check whether an element is in a set.\n-For a call to detect whether an element exists, BloomFilter will tell the caller one of two results: it may exist or it must not exist.\n-The disadvantage is that there is a misjudgment, telling you that it may exist, not necessarily true.")]),t._v(" "),s("p",[t._v("Bloom filter is actually composed of an extremely long binary bit array and a series of hash functions. The binary bit array is all 0 initially. When an element to be queried is given, this element will be calculated by a series of hash functions to map out a series of values, and all values are treated as 1 in the offset of the bit array.")]),t._v(" "),s("p",[t._v("Figure below shows an example of Bloom Filter with m=18, k=3 (m is the size of the Bit array, and k is the number of Hash functions). The three elements of x, y, and z in the set are hashed into the bit array through three different hash functions. When querying the element w, after calculating by the Hash function, because one bit is 0, w is not in the set.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/Bloom_filter.svg.png"),alt:"Bloom_filter.svg"}}),t._v(" "),s("p",[t._v("So how to judge whether the plot and the elements are in the set? Similarly, all the offset positions of this element are obtained after hash function calculation. If these positions are all 1, then it is judged that this element is in this set, if one is not 1, then it is judged that this element is not in this set. It's that simple!")]),t._v(" "),s("h2",{attrs:{id:"doris-bloomfilter-index-and-usage-scenarios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-bloomfilter-index-and-usage-scenarios"}},[t._v("#")]),t._v(" Doris BloomFilter index and usage scenarios")]),t._v(" "),s("p",[t._v("When we use HBase, we know that the Hbase data block index provides an effective method to find the data block of the HFile that should be read when accessing a specific row. But its utility is limited. The default size of the HFile data block is 64KB, and this size cannot be adjusted too much.")]),t._v(" "),s("p",[t._v("If you are looking for a short row, only building an index on the starting row key of the entire data block cannot give you fine-grained index information. For example, if your row occupies 100 bytes of storage space, a 64KB data block contains (64 * 1024)/100 = 655.53 = ~700 rows, and you can only put the starting row on the index bit. The row you are looking for may fall in the row interval on a particular data block, but it is not necessarily stored in that data block. There are many possibilities for this, or the row does not exist in the table, or it is stored in another HFile, or even in MemStore. In these cases, reading data blocks from the hard disk will bring IO overhead and will abuse the data block cache. This can affect performance, especially when you are facing a huge data set and there are many concurrent users.")]),t._v(" "),s("p",[t._v("So HBase provides Bloom filters that allow you to do a reverse test on the data stored in each data block. When a row is requested, first check the Bloom filter to see if the row is not in this data block. The Bloom filter must either confirm that the line is not in the answer, or answer that it doesn't know. This is why we call it a reverse test. Bloom filters can also be applied to the cells in the row. Use the same reverse test first when accessing a column of identifiers.")]),t._v(" "),s("p",[t._v("Bloom filters are not without cost. Storing this additional index level takes up additional space. Bloom filters grow as their index object data grows, so row-level bloom filters take up less space than column identifier-level bloom filters. When space is not an issue, they can help you squeeze the performance potential of the system.")]),t._v(" "),s("p",[t._v("The BloomFilter index of Doris is specified when the table is built, or completed by the ALTER operation of the table. Bloom Filter is essentially a bitmap structure, used to quickly determine whether a given value is in a set. This judgment will produce a small probability of misjudgment. That is, if it returns false, it must not be in this set. And if the range is true, it may be in this set.")]),t._v(" "),s("p",[t._v("The BloomFilter index is also created with Block as the granularity. In each Block, the value of the specified column is used as a set to generate a BloomFilter index entry, which is used to quickly filter the data that does not meet the conditions in the query.")]),t._v(" "),s("p",[t._v("Let's take a look at how Doris creates BloomFilter indexes through examples.")]),t._v(" "),s("h3",{attrs:{id:"create-bloomfilter-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-bloomfilter-index"}},[t._v("#")]),t._v(" Create BloomFilter Index")]),t._v(" "),s("p",[t._v('The Doris BloomFilter index is created by adding "bloom_filter_columns"="k1,k2,k3" to the PROPERTIES of the table building statement, this attribute, k1,k2,k3 is the Key column name of the BloomFilter index you want to create, for example, we Create a BloomFilter index for the saler_id and category_id in the table.')]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" sale_detail_bloom "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    sale_date "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("date")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sales time"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    customer_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Customer ID"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    saler_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Salesperson"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sku_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Product ID"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    category_id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Product Category"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sale_count "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sales Quantity"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sale_price "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECIMAL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unit price"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sale_amt "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECIMAL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Total sales amount"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Duplicate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sale_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" customer_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("saler_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sku_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("category_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" RANGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sale_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" P_202111 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-11-01'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-12-01'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTRIBUTED")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HASH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("saler_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" BUCKETS "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nPROPERTIES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"replication_num"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bloom_filter_columns"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"saler_id,category_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.enable"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.time_unit"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MONTH"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.time_zone"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Asia/Shanghai"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.start"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-2147483648"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.end"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.prefix"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"P_"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.replication_num"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dynamic_partition.buckets"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"view-bloomfilter-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view-bloomfilter-index"}},[t._v("#")]),t._v(" View BloomFilter Index")]),t._v(" "),s("p",[t._v("Check that the BloomFilter index we built on the table is to use:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("table_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"delete-bloomfilter-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-bloomfilter-index"}},[t._v("#")]),t._v(" Delete BloomFilter index")]),t._v(" "),s("p",[t._v("Deleting the index is to remove the index column from the bloom_filter_columns attribute:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bloom_filter_columns"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"modify-bloomfilter-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modify-bloomfilter-index"}},[t._v("#")]),t._v(" Modify BloomFilter index")]),t._v(" "),s("p",[t._v("Modifying the index is to modify the bloom_filter_columns attribute of the table:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bloom_filter_columns"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"k1,k3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"doris-bloomfilter-usage-scenarios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-bloomfilter-usage-scenarios"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Doris BloomFilter usage scenarios")])]),t._v(" "),s("p",[t._v("You can consider establishing a Bloom Filter index for a column when the following conditions are met:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("First, BloomFilter is suitable for non-prefix filtering.")])]),t._v(" "),s("li",[s("p",[t._v("The query will be filtered according to the high frequency of the column, and most of the query conditions are in and = filtering.")])]),t._v(" "),s("li",[s("p",[t._v('Unlike Bitmap, BloomFilter is suitable for high cardinality columns. Such as UserID. Because if it is created on a low-cardinality column, such as a "gender" column, each Block will almost contain all values, causing the BloomFilter index to lose its meaning')])])]),t._v(" "),s("h3",{attrs:{id:"doris-bloomfilter-use-precautions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-bloomfilter-use-precautions"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Doris BloomFilter use precautions")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("It does not support the creation of Bloom Filter indexes for Tinyint, Float, and Double columns.")])]),t._v(" "),s("li",[s("p",[t._v("The Bloom Filter index only has an acceleration effect on in and = filtering queries.")])]),t._v(" "),s("li",[s("p",[t._v("If you want to check whether a query hits the Bloom Filter index, you can check the profile information of the query")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);