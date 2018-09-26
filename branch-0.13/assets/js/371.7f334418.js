(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{758:function(t,_,a){"use strict";a.r(_);var e=a(43),v=Object(e.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"user-defined-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-defined-function"}},[t._v("#")]),t._v(" User Defined Function")]),t._v(" "),a("p",[t._v("UDF 主要适用于，用户需要的分析能力 Doris 并不具备的场景。用户可以自行根据自己的需求，实现自定义的函数，并且通过 UDF 框架注册到 Doris 中，来扩展 Doris 的能力，并解决用户分析需求。")]),t._v(" "),a("p",[t._v("UDF 能满足的分析需求分为两种：UDF 和 UDAF。本文中的 UDF 指的是二者的统称。")]),t._v(" "),a("ol",[a("li",[t._v("UDF: 用户自定义函数，这种函数会对单行进行操作，并且输出单行结果。当用户在查询时使用 UDF ，每行数据最终都会出现在结果集中。典型的 UDF 比如字符串操作 concat() 等。")]),t._v(" "),a("li",[t._v("UDAF: 用户自定义的聚合函数，这种函数对多行进行操作，并且输出单行结果。当用户在查询时使用 UDAF，分组后的每组数据最后会计算出一个值并展结果集中。典型的 UDAF 比如集合操作 sum() 等。一般来说 UDAF 都会结合 group by 一起使用。")])]),t._v(" "),a("p",[t._v("这篇文档主要讲述了，如何编写自定义的 UDF 函数，以及如何在 Doris 中使用它。")]),t._v(" "),a("p",[t._v("如果用户使用 UDF 功能并扩展了 Doris 的函数分析，并且希望将自己实现的 UDF 函数贡献回 Doris 社区给其他用户使用，这时候请看文档 "),a("RouterLink",{attrs:{to:"/zh-CN/extending-doris/udf/contribute_udf.html"}},[t._v("Contribute UDF")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"编写-udf-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-udf-函数"}},[t._v("#")]),t._v(" 编写 UDF 函数")]),t._v(" "),a("p",[t._v("在使用UDF之前，用户需要先在 Doris 的 UDF 框架下，编写自己的UDF函数。在"),a("code",[t._v("contrib/udf/src/udf_samples/udf_sample.h|cpp")]),t._v("文件中是一个简单的 UDF Demo。")]),t._v(" "),a("p",[t._v("编写一个 UDF 函数需要以下几个步骤。")]),t._v(" "),a("h3",{attrs:{id:"编写函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写函数"}},[t._v("#")]),t._v(" 编写函数")]),t._v(" "),a("p",[t._v("创建对应的头文件、CPP文件，在CPP文件中实现你需要的逻辑。CPP文件中的实现函数格式与UDF的对应关系。")]),t._v(" "),a("p",[t._v("用户可以把自己的 source code 统一放在一个文件夹下。这里以 udf_sample 为例，目录结构如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("└── udf_samples\n  ├── uda_sample.cpp\n  ├── uda_sample.h\n  ├── udf_sample.cpp\n  └── udf_sample.h\n")])])]),a("h4",{attrs:{id:"非可变参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非可变参数"}},[t._v("#")]),t._v(" 非可变参数")]),t._v(" "),a("p",[t._v("对于非可变参数的UDF，那么两者之间的对应关系很直接。\n比如"),a("code",[t._v("INT MyADD(INT, INT)")]),t._v("的UDF就会对应"),a("code",[t._v("IntVal AddUdf(FunctionContext* context, const IntVal& arg1, const IntVal& arg2)")]),t._v("。")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("AddUdf")]),t._v("可以为任意的名字，只要创建UDF的时候指定即可。")]),t._v(" "),a("li",[t._v("实现函数中的第一个参数永远是"),a("code",[t._v("FunctionContext*")]),t._v("。实现者可以通过这个结构体获得一些查询相关的内容，以及申请一些需要使用的内存。具体使用的接口可以参考"),a("code",[t._v("udf/udf.h")]),t._v("中的定义。")]),t._v(" "),a("li",[t._v("实现函数中从第二个参数开始需要与UDF的参数一一对应，比如"),a("code",[t._v("IntVal")]),t._v("对应"),a("code",[t._v("INT")]),t._v("类型。这部分的类型都要使用"),a("code",[t._v("const")]),t._v("引用。")]),t._v(" "),a("li",[t._v("返回参数与UDF的参数的类型要相对应。")])]),t._v(" "),a("h4",{attrs:{id:"可变参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可变参数"}},[t._v("#")]),t._v(" 可变参数")]),t._v(" "),a("p",[t._v("对于可变参数，可以参见以下例子，UDF"),a("code",[t._v("String md5sum(String, ...)")]),t._v("对应的\n实现函数是"),a("code",[t._v("StringVal md5sumUdf(FunctionContext* ctx, int num_args, const StringVal* args)")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("md5sumUdf")]),t._v("这个也是可以任意改变的，创建的时候指定即可。")]),t._v(" "),a("li",[t._v("第一个参数与非可变参数函数一样，传入的是一个"),a("code",[t._v("FunctionContext*")]),t._v("。")]),t._v(" "),a("li",[t._v("可变参数部分由两部分组成，首先会传入一个整数，说明后面还有几个参数。后面传入的是一个可变参数部分的数组。")])]),t._v(" "),a("h4",{attrs:{id:"类型对应关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型对应关系"}},[t._v("#")]),t._v(" 类型对应关系")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UDF Type")]),t._v(" "),a("th",[t._v("Argument Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("TinyInt")]),t._v(" "),a("td",[t._v("TinyIntVal")])]),t._v(" "),a("tr",[a("td",[t._v("SmallInt")]),t._v(" "),a("td",[t._v("SmallIntVal")])]),t._v(" "),a("tr",[a("td",[t._v("Int")]),t._v(" "),a("td",[t._v("IntVal")])]),t._v(" "),a("tr",[a("td",[t._v("BigInt")]),t._v(" "),a("td",[t._v("BigIntVal")])]),t._v(" "),a("tr",[a("td",[t._v("LargeInt")]),t._v(" "),a("td",[t._v("LargeIntVal")])]),t._v(" "),a("tr",[a("td",[t._v("Float")]),t._v(" "),a("td",[t._v("FloatVal")])]),t._v(" "),a("tr",[a("td",[t._v("Double")]),t._v(" "),a("td",[t._v("DoubleVal")])]),t._v(" "),a("tr",[a("td",[t._v("Date")]),t._v(" "),a("td",[t._v("DateTimeVal")])]),t._v(" "),a("tr",[a("td",[t._v("Datetime")]),t._v(" "),a("td",[t._v("DateTimeVal")])]),t._v(" "),a("tr",[a("td",[t._v("Char")]),t._v(" "),a("td",[t._v("StringVal")])]),t._v(" "),a("tr",[a("td",[t._v("Varchar")]),t._v(" "),a("td",[t._v("StringVal")])]),t._v(" "),a("tr",[a("td",[t._v("Decimal")]),t._v(" "),a("td",[t._v("DecimalVal")])])])]),t._v(" "),a("h2",{attrs:{id:"编译-udf-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译-udf-函数"}},[t._v("#")]),t._v(" 编译 UDF 函数")]),t._v(" "),a("p",[t._v("由于 UDF 实现中依赖了 Doris 的 UDF 框架 , 所以在编译 UDF 函数的时候首先要对 Doris 进行编译，也就是对 UDF 框架进行编译。")]),t._v(" "),a("p",[t._v("编译完成后会生成，UDF 框架的静态库文件。之后引入 UDF 框架依赖，并编译 UDF 即可。")]),t._v(" "),a("h3",{attrs:{id:"编译doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译doris"}},[t._v("#")]),t._v(" 编译Doris")]),t._v(" "),a("p",[t._v("在 Doris 根目录下执行 "),a("code",[t._v("sh build.sh")]),t._v(" 就会在 "),a("code",[t._v("output/udf/")]),t._v(" 生成 UDF 框架的静态库文件 "),a("code",[t._v("headers|libs")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── output\n│   └── udf\n│       ├── include\n│       │   ├── uda_test_harness.h\n│       │   └── udf.h\n│       └── lib\n│           └── libDorisUdf.a\n\n")])])]),a("h3",{attrs:{id:"编写-udf-编译文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-udf-编译文件"}},[t._v("#")]),t._v(" 编写 UDF 编译文件")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("准备 thirdparty")]),t._v(" "),a("p",[a("code",[t._v("thirdparty")]),t._v(" 文件夹主要用于存放用户 UDF 函数依赖的第三方库，包括头文件及静态库。其中必须包含依赖的 Doris UDF 框架中 "),a("code",[t._v("udf.h")]),t._v(" 和 "),a("code",[t._v("libDorisUdf.a")]),t._v(" 这两个文件。")]),t._v(" "),a("p",[t._v("这里以 "),a("code",[t._v("udf_sample")]),t._v(" 为例, 在 用户自己 "),a("code",[t._v("udf_samples")]),t._v(" 目录用于存放 source code。在同级目录下再创建一个 "),a("code",[t._v("thirdparty")]),t._v(" 文件夹用于存放静态库。目录结构如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── thirdparty\n│ │── include\n│ │ └── udf.h\n│ └── lib\n│   └── libDorisUdf.a\n└── udf_samples\n\n")])])]),a("p",[a("code",[t._v("udf.h")]),t._v(" 是 UDF 框架头文件。存放路径为 "),a("code",[t._v("doris/output/udf/include/udf.h")]),t._v("。 用户需要将 Doris 编译产出中的这个头文件拷贝到自己的 "),a("code",[t._v("thirdparty")]),t._v(" 的 include 文件夹下。")]),t._v(" "),a("p",[a("code",[t._v("libDorisUdf.a")]),t._v("  是 UDF 框架的静态库。Doris 编译完成后该文件存放在 "),a("code",[t._v("doris/output/udf/lib/libDorisUdf.a")]),t._v("。用户需要将该文件拷贝到自己的 "),a("code",[t._v("thirdparty")]),t._v(" 的 lib 文件夹下。")]),t._v(" "),a("p",[t._v("*注意：UDF 框架的静态库只有完成 Doris 编译后才会生成。")])]),t._v(" "),a("li",[a("p",[t._v("准备编译 UDF 的 CMakeFiles.txt")]),t._v(" "),a("p",[t._v("CMakeFiles.txt 用于声明 UDF 函数如何进行编译。存放在源码文件夹下，与用户代码平级。这里以 "),a("code",[t._v("udf_samples")]),t._v(" 为例目录结构如下:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── thirdparty\n└── udf_samples\n  ├── CMakeLists.txt\n  ├── uda_sample.cpp\n  ├── uda_sample.h\n  ├── udf_sample.cpp\n  └── udf_sample.h\n")])])]),a("ul",[a("li",[t._v("需要显示声明引用 "),a("code",[t._v("libDorisUdf.a")])]),t._v(" "),a("li",[t._v("声明 "),a("code",[t._v("udf.h")]),t._v(" 头文件位置")])]),t._v(" "),a("p",[t._v("以 udf_sample 为例")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('# Include udf\ninclude_directories(thirdparty/include)    \n\n# Set all libraries\nadd_library(udf STATIC IMPORTED)\nset_target_properties(udf PROPERTIES IMPORTED_LOCATION thirdparty/lib/libDorisUdf.a)\n\n# where to put generated libraries\nset(LIBRARY_OUTPUT_PATH "${BUILD_DIR}/src/udf_samples")\n\n# where to put generated binaries\nset(EXECUTABLE_OUTPUT_PATH "${BUILD_DIR}/src/udf_samples")\n\nadd_library(udfsample SHARED udf_sample.cpp)\n    target_link_libraries(udfsample\n    udf\n    -static-libstdc++\n    -static-libgcc\n)\n\nadd_library(udasample SHARED uda_sample.cpp)\n    target_link_libraries(udasample\n    udf\n    -static-libstdc++\n    -static-libgcc\n)\n')])])]),a("p",[t._v("如果用户的 UDF 函数还依赖了其他的三方库，则需要声明 include，lib，并在 "),a("code",[t._v("add_library")]),t._v(" 中增加依赖。")])])]),t._v(" "),a("p",[t._v("所有文件准备齐后完整的目录结构如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    ├── thirdparty\n    │ │── include\n    │ │ └── udf.h\n    │ └── lib\n    │   └── libDorisUdf.a\n    └── udf_samples\n      ├── CMakeLists.txt\n      ├── uda_sample.cpp\n      ├── uda_sample.h\n      ├── udf_sample.cpp\n      └── udf_sample.h\n")])])]),a("p",[t._v("准备好上述文件就可以直接编译 UDF 了")]),t._v(" "),a("h3",{attrs:{id:"执行编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行编译"}},[t._v("#")]),t._v(" 执行编译")]),t._v(" "),a("p",[t._v("在 udf_samples 文件夹下创建一个 build 文件夹，用于存放编译产出。")]),t._v(" "),a("p",[t._v("在 build 文件夹下运行命令 "),a("code",[t._v("cmake ../")]),t._v(" 生成Makefile，并执行 make 就会生成对应动态库。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── thirdparty\n├── udf_samples\n  └── build\n")])])]),a("h3",{attrs:{id:"编译结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译结果"}},[t._v("#")]),t._v(" 编译结果")]),t._v(" "),a("p",[t._v("编译完成后的 UDF 动态链接库就生成成功了。在 "),a("code",[t._v("build/src/")]),t._v(" 下，以 udf_samples 为例，目录结构如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n├── thirdparty\n├── udf_samples\n  └── build\n    └── src\n      └── udf_samples\n        ├── libudasample.so\n        └── libudfsample.so\n\n")])])]),a("h2",{attrs:{id:"创建-udf-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-udf-函数"}},[t._v("#")]),t._v(" 创建 UDF 函数")]),t._v(" "),a("p",[t._v("通过上述的步骤后，你可以得到 UDF 的动态库（也就是编译结果中的 "),a("code",[t._v(".so")]),t._v(" 文件）。你需要将这个动态库放到一个能够通过 HTTP 协议访问到的位置。")]),t._v(" "),a("p",[t._v("然后登录 Doris 系统，在 mysql-client 中通过 "),a("code",[t._v("CREATE FUNCTION")]),t._v(" 语法创建 UDF 函数。你需要拥有AMDIN权限才能够完成这个操作。这时 Doris 系统内部就会存在刚才创建好的 UDF。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CREATE [AGGREGATE] FUNCTION \n\tname ([argtype][,...])\n\t[RETURNS] rettype\n\tPROPERTIES (["key"="value"][,...])\n')])])]),a("p",[t._v("说明：")]),t._v(" "),a("ol",[a("li",[t._v("PROPERTIES中"),a("code",[t._v("symbol")]),t._v("表示的是，执行入口函数的对应symbol，这个参数是必须设定。你可以通过"),a("code",[t._v("nm")]),t._v("命令来获得对应的symbol，比如"),a("code",[t._v("nm libudfsample.so | grep AddUdf")]),t._v("获得到的"),a("code",[t._v("_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_")]),t._v("就是对应的symbol。")]),t._v(" "),a("li",[t._v("PROPERTIES中"),a("code",[t._v("object_file")]),t._v("表示的是从哪里能够下载到对应的动态库，这个参数是必须设定的。")]),t._v(" "),a("li",[t._v("name: 一个function是要归属于某个DB的，name的形式为"),a("code",[t._v("dbName")]),t._v("."),a("code",[t._v("funcName")]),t._v("。当"),a("code",[t._v("dbName")]),t._v("没有明确指定的时候，就是使用当前session所在的db作为"),a("code",[t._v("dbName")]),t._v("。")])]),t._v(" "),a("p",[t._v("具体使用可以参见 "),a("code",[t._v("CREATE FUNCTION")]),t._v(" 获取更详细信息。")]),t._v(" "),a("h2",{attrs:{id:"使用-udf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-udf"}},[t._v("#")]),t._v(" 使用 UDF")]),t._v(" "),a("p",[t._v("用户使用 UDF 必须拥有对应数据库的 "),a("code",[t._v("SELECT")]),t._v(" 权限。")]),t._v(" "),a("p",[t._v("UDF 的使用与普通的函数方式一致，唯一的区别在于，内置函数的作用域是全局的，而 UDF 的作用域是 DB内部。当链接 session 位于数据内部时，直接使用 UDF 名字会在当前DB内部查找对应的 UDF。否则用户需要显示的指定 UDF 的数据库名字，例如 "),a("code",[t._v("dbName")]),t._v("."),a("code",[t._v("funcName")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"删除-udf函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除-udf函数"}},[t._v("#")]),t._v(" 删除 UDF函数")]),t._v(" "),a("p",[t._v("当你不再需要 UDF 函数时，你可以通过下述命令来删除一个 UDF 函数, 可以参考 "),a("code",[t._v("DROP FUNCTION")]),t._v("。")])])}),[],!1,null,null,null);_.default=v.exports}}]);