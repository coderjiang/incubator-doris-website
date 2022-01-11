(window.webpackJsonp=window.webpackJsonp||[]).push([[753],{1204:function(e,a,r){"use strict";r.r(a);var t=r(55),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"调试工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#调试工具"}},[e._v("#")]),e._v(" 调试工具")]),e._v(" "),r("p",[e._v("在Doris的使用、开发过程中，经常会遇到需要对Doris进行调试的场景，这里介绍一些常用的调试工具。")]),e._v(" "),r("h2",{attrs:{id:"fe-调试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fe-调试"}},[e._v("#")]),e._v(" FE 调试")]),e._v(" "),r("p",[e._v("FE 是 Java 进程。这里只列举一下简单常用的 java 调试命令。")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("统计当前内存使用明细")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("jmap -histo:live pid > 1.jmp\n")])])]),r("p",[e._v("该命令可以列举存活的对象的内存占用并排序。（pid 换成 FE 进程 id）")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" num     #instances         #bytes  class name\n----------------------------------------------\n   1:         33528       10822024  [B\n   2:         80106        8662200  [C\n   3:           143        4688112  [Ljava.util.concurrent.ForkJoinTask;\n   4:         80563        1933512  java.lang.String\n   5:         15295        1714968  java.lang.Class\n   6:         45546        1457472  java.util.concurrent.ConcurrentHashMap$Node\n   7:         15483        1057416  [Ljava.lang.Object;\n")])])]),r("p",[e._v("可以通过这个方法查看目前存活对象占用的总内存（在文件最后），以及分析哪些对象占用了更多的内存。")]),e._v(" "),r("p",[e._v("注意，这个方法因指定了 "),r("code",[e._v(":live")]),e._v("，因此会触发 FullGC。")])]),e._v(" "),r("li",[r("p",[e._v("查看 JVM 内存使用")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("jstat -gcutil pid 1000 1000\n")])])]),r("p",[e._v("该命令可以滚动查看当前 JVM 各区域的内存使用情况。（pid 换成 FE 进程 id）")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("  S0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT\n  0.00   0.00  22.61   3.03  95.74  92.77     68    1.249     5    0.794    2.043\n  0.00   0.00  22.61   3.03  95.74  92.77     68    1.249     5    0.794    2.043\n  0.00   0.00  22.61   3.03  95.74  92.77     68    1.249     5    0.794    2.043\n  0.00   0.00  22.92   3.03  95.74  92.77     68    1.249     5    0.794    2.043\n  0.00   0.00  22.92   3.03  95.74  92.77     68    1.249     5    0.794    2.043\n")])])]),r("p",[e._v("其中主要关注 Old区（O）的占用百分比（如示例中为 3%）。如果占用过高，则可能出现 OOM 或 FullGC。")])]),e._v(" "),r("li",[r("p",[e._v("打印 FE 线程堆栈")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("jstack -l pid > 1.js\n")])])]),r("p",[e._v("该命令可以打印当前 FE 的线程堆栈。（pid 换成 FE 进程 id）。")]),e._v(" "),r("p",[r("code",[e._v("-l")]),e._v(" 参数会同时检测是否有死锁。该方法可以查看 FE 线程运行情况，是否有死锁，哪里卡住了等问题。")])])]),e._v(" "),r("h2",{attrs:{id:"be-调试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#be-调试"}},[e._v("#")]),e._v(" BE 调试")]),e._v(" "),r("h3",{attrs:{id:"环境准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[e._v("#")]),e._v(" 环境准备")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/google/pprof",target:"_blank",rel:"noopener noreferrer"}},[e._v("pprof"),r("OutboundLink")],1),e._v(": 来自gperftools，用于将gperftools所产生的内容转化成便于人可以阅读的格式，比如pdf, svg, text等.")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.graphviz.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("graphviz"),r("OutboundLink")],1),e._v(": 在没有这个库的时候pprof只可以转化为text格式，但这种方式不易查看。那么安装这个库后，pprof可以转化为svg、pdf等格式，对于调用关系则更加清晰明了。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://perf.wiki.kernel.org/index.php/Main_Page",target:"_blank",rel:"noopener noreferrer"}},[e._v("perf"),r("OutboundLink")],1),e._v(": linux内核自带性能分析工具。"),r("a",{attrs:{href:"http://www.brendangregg.com/perf.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),r("OutboundLink")],1),e._v("有一些perf的使用例子。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/brendangregg/FlameGraph",target:"_blank",rel:"noopener noreferrer"}},[e._v("FlameGraph"),r("OutboundLink")],1),e._v(": 可视化工具，用于将perf的输出以火焰图的形式展示出来。")]),e._v(" "),r("h3",{attrs:{id:"内存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存"}},[e._v("#")]),e._v(" 内存")]),e._v(" "),r("p",[e._v("对于内存的调试一般分为两个方面。一个是内存使用的总量是否合理，内存使用量过大一方面可能是由于系统存在内存泄露，另一方面可能是因为程序内存使用不当。其次就是是否存在内存越界、非法访问的问题，比如程序访问一个非法地址的内存，使用了未初始化内存等。对于内存方面的调试我们一般使用如下几种方式来进行问题追踪。")]),e._v(" "),r("h4",{attrs:{id:"查看日志"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看日志"}},[e._v("#")]),e._v(" 查看日志")]),e._v(" "),r("p",[e._v("当发现内存使用量过大的时候，我们可以先查看be.out日志，看看是否有大内存申请。由于Doris当前使用的TCMalloc管理内存，那么遇到大内存申请时，都会将申请的堆栈打印到be.out文件中，一般的表现形式如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("tcmalloc: large alloc 1396277248 bytes == 0x3f3488000 @  0x2af6f63 0x2c4095b 0x134d278 0x134bdcb 0x133d105 0x133d1d0 0x19930ed\n")])])]),r("p",[e._v("这个表示在Doris BE在这个堆栈上尝试申请"),r("code",[e._v("1396277248 bytes")]),e._v("的内存。我们可以通过"),r("code",[e._v("addr2line")]),e._v("命令去把堆栈还原成我们能够看懂的信，具体的例子如下所示。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ addr2line -e lib/palo_be  0x2af6f63 0x2c4095b 0x134d278 0x134bdcb 0x133d105 0x133d1d0 0x19930ed\n\n/home/ssd0/zc/palo/doris/core/thirdparty/src/gperftools-gperftools-2.7/src/tcmalloc.cc:1335\n/home/ssd0/zc/palo/doris/core/thirdparty/src/gperftools-gperftools-2.7/src/tcmalloc.cc:1357\n/home/disk0/baidu-doris/baidu/bdg/doris-baidu/core/be/src/exec/hash_table.cpp:267\n/home/disk0/baidu-doris/baidu/bdg/doris-baidu/core/be/src/exec/hash_table.hpp:86\n/home/disk0/baidu-doris/baidu/bdg/doris-baidu/core/be/src/exec/hash_join_node.cpp:239\n/home/disk0/baidu-doris/baidu/bdg/doris-baidu/core/be/src/exec/hash_join_node.cpp:213\nthread.cpp:?\n")])])]),r("h4",{attrs:{id:"heap-profile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#heap-profile"}},[e._v("#")]),e._v(" HEAP PROFILE")]),e._v(" "),r("p",[e._v("有时内存的申请并不是大内存的申请导致，而是通过小内存不断的堆积导致的。那么就没有办法通过查看日志定位到具体的申请信息，那么就需要通过其他方式来获得信息。")]),e._v(" "),r("p",[e._v("这个时候我们可以利用TCMalloc的"),r("a",{attrs:{href:"https://gperftools.github.io/gperftools/heapprofile.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HEAP PROFILE"),r("OutboundLink")],1),e._v("的功能。如果设置了HEAPPROFILE功能，那么我们可以获得进程整体的内存申请使用情况。使用方式是在启动Doris BE前设置"),r("code",[e._v("HEAPPROFILE")]),e._v("环境变量。比如：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("export HEAPPROFILE=/tmp/doris_be.hprof\n./bin/start_be.sh --daemon\n")])])]),r("p",[e._v("这样，当满足HEAPPROFILE的dump条件时，就会将内存的整体使用情况写到指定路径的文件中。后续我们就可以通过使用"),r("code",[e._v("pprof")]),e._v("工具来对输出的内容进行分析。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ pprof --text lib/palo_be /tmp/doris_be.hprof.0012.heap | head -30\n\nUsing local file lib/palo_be.\nUsing local file /tmp/doris_be.hprof.0012.heap.\nTotal: 668.6 MB\n   610.6  91.3%  91.3%    610.6  91.3% doris::SystemAllocator::allocate_via_malloc (inline)\n    18.1   2.7%  94.0%     18.1   2.7% _objalloc_alloc\n     5.6   0.8%  94.9%     63.4   9.5% doris::RowBatch::RowBatch\n     5.1   0.8%  95.6%      7.1   1.1% butil::ResourcePool::add_block (inline)\n     3.7   0.5%  96.2%      3.7   0.5% butil::iobuf::create_block (inline)\n     3.4   0.5%  96.7%      3.4   0.5% butil::FlatMap::init\n     3.2   0.5%  97.2%      5.2   0.8% butil::ObjectPool::add_block (inline)\n     2.6   0.4%  97.6%      2.6   0.4% __gnu_cxx::new_allocator::allocate (inline)\n     2.0   0.3%  97.9%      2.0   0.3% butil::ObjectPool::add_block_group (inline)\n     2.0   0.3%  98.2%      2.0   0.3% butil::ResourcePool::add_block_group (inline)\n     1.7   0.3%  98.4%      1.7   0.3% doris::SegmentReader::_load_index\n")])])]),r("p",[e._v("上述文件各个列的内容：")]),e._v(" "),r("ul",[r("li",[e._v("第一列：函数直接申请的内存大小，单位MB")]),e._v(" "),r("li",[e._v("第四列：函数以及函数所有调用的函数总共内存大小。")]),e._v(" "),r("li",[e._v("第二列、第五列分别是第一列与第四列的的比例值。")]),e._v(" "),r("li",[e._v("第三列是个第二列的累积值。")])]),e._v(" "),r("p",[e._v("当然也可以生成调用关系图片，更加方便分析。比如下面的命令就能够生成SVG格式的调用关系图。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("pprof --svg lib/palo_be /tmp/doris_be.hprof.0012.heap > heap.svg \n")])])]),r("p",[r("strong",[e._v("注意：开启这个选项是要影响程序的执行性能的，请慎重对线上的实例开启")])]),e._v(" "),r("h4",{attrs:{id:"pprof-remote-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pprof-remote-server"}},[e._v("#")]),e._v(" pprof remote server")]),e._v(" "),r("p",[e._v("HEAP PROFILE虽然能够获得全部的内存使用信息，但是也有比较受限的地方。1. 需要重启BE进行。2. 需要一直开启这个命令，导致对整个进程的性能造成影响。")]),e._v(" "),r("p",[e._v("对Doris BE也可以使用动态开启、关闭heap profile的方式来对进程进行内存申请分析。Doris内部支持了GPerftools的"),r("a",{attrs:{href:"https://gperftools.github.io/gperftools/pprof_remote_servers.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("远程server调试"),r("OutboundLink")],1),e._v("。那么可以通过"),r("code",[e._v("pprof")]),e._v("直接对远程运行的Doris BE进行动态的HEAP PROFILE。比如我们可以通过以下命令来查看Doris的内存的使用增量")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ pprof --text --seconds=60 http://be_host:be_webport/pprof/heap \n\nTotal: 1296.4 MB\n   484.9  37.4%  37.4%    484.9  37.4% doris::StorageByteBuffer::create\n   272.2  21.0%  58.4%    273.3  21.1% doris::RowBlock::init\n   157.5  12.1%  70.5%    157.5  12.1% doris::RowBatch::RowBatch\n    90.7   7.0%  77.5%     90.7   7.0% doris::SystemAllocator::allocate_via_malloc\n    66.6   5.1%  82.7%     66.6   5.1% doris::IntegerColumnReader::init\n    47.9   3.7%  86.4%     47.9   3.7% __gnu_cxx::new_allocator::allocate\n    20.8   1.6%  88.0%     35.4   2.7% doris::SegmentReader::_load_index\n    12.7   1.0%  89.0%     12.7   1.0% doris::DecimalColumnReader::init\n    12.7   1.0%  89.9%     12.7   1.0% doris::LargeIntColumnReader::init\n    12.7   1.0%  90.9%     12.7   1.0% doris::StringColumnDirectReader::init\n    12.3   0.9%  91.9%     12.3   0.9% std::__cxx11::basic_string::_M_mutate\n    10.4   0.8%  92.7%     10.4   0.8% doris::VectorizedRowBatch::VectorizedRowBatch\n    10.0   0.8%  93.4%     10.0   0.8% doris::PlainTextLineReader::PlainTextLineReader\n")])])]),r("p",[e._v("这个命令的输出与HEAP PROFILE的输出及查看方式一样，这里就不再详细说明。这个命令只有在执行的过程中才会开启统计，相比HEAP PROFILE对于进程性能的影响有限。")]),e._v(" "),r("h4",{attrs:{id:"lsan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lsan"}},[e._v("#")]),e._v(" LSAN")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/google/sanitizers/wiki/AddressSanitizerLeakSanitizer",target:"_blank",rel:"noopener noreferrer"}},[e._v("LSAN"),r("OutboundLink")],1),e._v("是一个地址检查工具，GCC已经集成。在我们编译代码的时候开启相应的编译选项，就能够开启这个功能。当程序发生可以确定的内存泄露时，会将泄露堆栈打印。Doris BE已经集成了这个工具，只需要在编译的时候使用如下的命令进行编译就能够生成带有内存泄露检测版本的BE二进制")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("BUILD_TYPE=LSAN ./build.sh\n")])])]),r("p",[e._v("当系统检测到内存泄露的时候，就会在be.out里面输出对应的信息。为了下面的演示，我们故意在代码中插入一段内存泄露代码。我们在"),r("code",[e._v("StorageEngine")]),e._v("的"),r("code",[e._v("open")]),e._v("函数中插入如下代码")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('    char* leak_buf = new char[1024];\n    strcpy(leak_buf, "hello world");\n    LOG(INFO) << leak_buf;\n')])])]),r("p",[e._v("我们就在be.out中获得了如下的输出")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("=================================================================\n==24732==ERROR: LeakSanitizer: detected memory leaks\n\nDirect leak of 1024 byte(s) in 1 object(s) allocated from:\n    #0 0xd10586 in operator new[](unsigned long) ../../../../gcc-7.3.0/libsanitizer/lsan/lsan_interceptors.cc:164\n    #1 0xe333a2 in doris::StorageEngine::open(doris::EngineOptions const&, doris::StorageEngine**) /home/ssd0/zc/palo/doris/core/be/src/olap/storage_engine.cpp:104\n    #2 0xd3cc96 in main /home/ssd0/zc/palo/doris/core/be/src/service/doris_main.cpp:159\n    #3 0x7f573b5eebd4 in __libc_start_main (/opt/compiler/gcc-4.8.2/lib64/libc.so.6+0x21bd4)\n\nSUMMARY: LeakSanitizer: 1024 byte(s) leaked in 1 allocation(s).\n")])])]),r("p",[e._v("从上述的输出中，我们能看到有1024个字节被泄露了，并且打印出来了内存申请时的堆栈信息。")]),e._v(" "),r("p",[r("strong",[e._v("注意：开启这个选项是要影响程序的执行性能的，请慎重对线上的实例开启")])]),e._v(" "),r("p",[r("strong",[e._v("注意：如果开启了LSAN开关的话，tcmalloc就会被自动关闭")])]),e._v(" "),r("h4",{attrs:{id:"asan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#asan"}},[e._v("#")]),e._v(" ASAN")]),e._v(" "),r("p",[e._v("除了内存使用不合理、泄露以外。有的时候也会发生内存访问非法地址等错误。这个时候我们可以借助"),r("a",{attrs:{href:"https://github.com/google/sanitizers/wiki/AddressSanitizer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ASAN"),r("OutboundLink")],1),e._v("来辅助我们找到问题的原因。与LSAN一样，ASAN也集成在了GCC中。Doris通过如下的方式进行编译就能够开启这个功能")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("BUILD_TYPE=ASAN ./build.sh\n")])])]),r("p",[e._v("执行编译生成的二进制文件，当检测工具发现有异常访问时，就会立即退出，并将非法访问的堆栈输出在be.out中。对于ASAN的输出与LSAN是一样的分析方法。这里我们也主动注入一个地址访问错误，来展示下具体的内容输出。我们仍然在"),r("code",[e._v("StorageEngine")]),e._v("的"),r("code",[e._v("open")]),e._v("函数中注入一段非法内存访问，具体的错误代码如下")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    char* invalid_buf = new char[1024];\n    for (int i = 0; i < 1025; ++i) {\n        invalid_buf[i] = i;\n    }\n    LOG(INFO) << invalid_buf;\n")])])]),r("p",[e._v("然后我们就会在be.out中获得如下的输出")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("=================================================================\n==23284==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x61900008bf80 at pc 0x00000129f56a bp 0x7fff546eed90 sp 0x7fff546eed88\nWRITE of size 1 at 0x61900008bf80 thread T0\n    #0 0x129f569 in doris::StorageEngine::open(doris::EngineOptions const&, doris::StorageEngine**) /home/ssd0/zc/palo/doris/core/be/src/olap/storage_engine.cpp:106\n    #1 0xe2c1e3 in main /home/ssd0/zc/palo/doris/core/be/src/service/doris_main.cpp:159\n    #2 0x7fa5580fbbd4 in __libc_start_main (/opt/compiler/gcc-4.8.2/lib64/libc.so.6+0x21bd4)\n    #3 0xd30794  (/home/ssd0/zc/palo/doris/core/output3/be/lib/palo_be+0xd30794)\n\n0x61900008bf80 is located 0 bytes to the right of 1024-byte region [0x61900008bb80,0x61900008bf80)\nallocated by thread T0 here:\n    #0 0xdeb040 in operator new[](unsigned long) ../../../../gcc-7.3.0/libsanitizer/asan/asan_new_delete.cc:82\n    #1 0x129f50d in doris::StorageEngine::open(doris::EngineOptions const&, doris::StorageEngine**) /home/ssd0/zc/palo/doris/core/be/src/olap/storage_engine.cpp:104\n    #2 0xe2c1e3 in main /home/ssd0/zc/palo/doris/core/be/src/service/doris_main.cpp:159\n    #3 0x7fa5580fbbd4 in __libc_start_main (/opt/compiler/gcc-4.8.2/lib64/libc.so.6+0x21bd4)\n\nSUMMARY: AddressSanitizer: heap-buffer-overflow /home/ssd0/zc/palo/doris/core/be/src/olap/storage_engine.cpp:106 in doris::StorageEngine::open(doris::EngineOptions const&, doris::StorageEngine**)\n")])])]),r("p",[e._v("从这段信息中该可以看到在"),r("code",[e._v("0x61900008bf80")]),e._v("这个地址我们尝试去写一个字节，但是这个地址是非法的。我们也可以看到 "),r("code",[e._v("[0x61900008bb80,0x61900008bf80)")]),e._v("这个地址的申请堆栈。")]),e._v(" "),r("p",[r("strong",[e._v("注意：开启这个选项是要影响程序的执行性能的，请慎重对线上的实例开启")])]),e._v(" "),r("p",[r("strong",[e._v("注意：如果开启了ASAN开关的话，tcmalloc就会被自动关闭")])]),e._v(" "),r("p",[e._v("另外，如果be.out中输出了堆栈信息，但是并没有函数符号，那么这个时候需要我们手动的处理下才能获得可读的堆栈信息。具体的处理方法需要借助一个脚本来解析ASAN的输出。这个时候我们需要使用"),r("a",{attrs:{href:"https://llvm.org/svn/llvm-project/compiler-rt/trunk/lib/asan/scripts/asan_symbolize.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("asan_symbolize"),r("OutboundLink")],1),e._v("来帮忙解析下。具体的使用方式如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("cat be.out | python asan_symbolize.py | c++filt\n")])])]),r("p",[e._v("通过上述的命令，我们就能够获得可读的堆栈信息了。")]),e._v(" "),r("h3",{attrs:{id:"cpu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[e._v("#")]),e._v(" CPU")]),e._v(" "),r("p",[e._v("当系统的CPU Idle很低的时候，说明系统的CPU已经成为了主要瓶颈，这个时候就需要分析一下当前的CPU使用情况。对于Doris的BE可以有如下两种方式来分析Doris的CPU瓶颈。")]),e._v(" "),r("h4",{attrs:{id:"pprof"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pprof"}},[e._v("#")]),e._v(" pprof")]),e._v(" "),r("p",[e._v("由于Doris内部已经集成了并兼容了GPerf的REST接口，那么用户可以通过"),r("code",[e._v("pprof")]),e._v("工具来分析远程的Doris BE。具体的使用方式如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("pprof --svg --seconds=60 http://be_host:be_webport/pprof/profile > be.svg \n")])])]),r("p",[e._v("这样就能够生成一张BE执行的CPU消耗图。")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/images/cpu-pprof-demo.png"),alt:"CPU Pprof"}}),e._v(" "),r("h4",{attrs:{id:"perf-flamegragh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#perf-flamegragh"}},[e._v("#")]),e._v(" perf + flamegragh")]),e._v(" "),r("p",[e._v("这个是相当通用的一种CPU分析方式，相比于"),r("code",[e._v("pprof")]),e._v("，这种方式必须要求能够登陆到分析对象的物理机上。但是相比于pprof只能定时采点，perf是能够通过不同的事件来完成堆栈信息采集的。具体的的使用方式如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("perf record -g -p be_pid -- sleep 60\n")])])]),r("p",[e._v("这条命令会统计60秒钟BE的CPU运行情况，并且生成perf.data。对于perf.data的分析，可以通过perf的命令来进行分析")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("perf report\n")])])]),r("p",[e._v("分析得到如下的图片")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/images/perf-report-demo.png"),alt:"Perf Report"}}),e._v(" "),r("p",[e._v("来对生成的内容进行分析。当然也可以使用flamegragh完成可视化展示。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("perf script | ./FlameGraph/stackcollapse-perf.pl | ./FlameGraph/flamegraph.pl > be.svg\n")])])]),r("p",[e._v("这样也会生成一张当时运行的CPU消耗图。")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/images/cpu-flame-demo.svg"),alt:"CPU Flame"}})])}),[],!1,null,null,null);a.default=s.exports}}]);