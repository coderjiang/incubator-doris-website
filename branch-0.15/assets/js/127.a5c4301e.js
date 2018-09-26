(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{515:function(e,t,a){"use strict";a.r(t);var o=a(43),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"debug-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug-tool"}},[e._v("#")]),e._v(" Debug Tool")]),e._v(" "),a("p",[e._v("In the process of using and developing Doris, we often encounter scenarios that need to debug Doris. Here are some common debugging tools.")]),e._v(" "),a("h2",{attrs:{id:"preparing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparing"}},[e._v("#")]),e._v(" Preparing")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/google/pprof",target:"_blank",rel:"noopener noreferrer"}},[e._v("pprof"),a("OutboundLink")],1),e._v(": from gperftools, it is used to transform the content generated by gperftools into a format that is easy for people to read, such as PDF, SVG, text, etc.")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://www.graphviz.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("graphviz"),a("OutboundLink")],1),e._v(": in the absence of this library, pprof can only be converted to text format, but this way is not easy to view. After the library is installed, pprof can be converted to SVG, PDF and other formats, and the call relationship is clearer.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://perf.wiki.kernel.org/index.php/main_page",target:"_blank",rel:"noopener noreferrer"}},[e._v("perf"),a("OutboundLink")],1),e._v(": Linux kernel comes with performance analysis tool. "),a("a",{attrs:{href:"http://www.brendangregg.com/perf.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" there are some examples of perf usage.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/brendangregg/flamegraph",target:"_blank",rel:"noopener noreferrer"}},[e._v("flamegraph"),a("OutboundLink")],1),e._v(": a visualization tool used to show the output of perf in the form of flame graph.")]),e._v(" "),a("h2",{attrs:{id:"memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memory"}},[e._v("#")]),e._v(" Memory")]),e._v(" "),a("p",[e._v("Debugging memory is generally divided into two aspects. One is whether the total amount of memory use is reasonable. On the one hand, the excessive amount of memory use may be due to memory leak in the system, on the other hand, it may be due to improper use of program memory. The second is whether there is a problem of memory overrun and illegal access, such as program access to memory with an illegal address, use of uninitialized memory, etc. For the debugging of memory, we usually use the following ways to track the problems.")]),e._v(" "),a("h3",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[e._v("#")]),e._v(" Log")]),e._v(" "),a("p",[e._v("When we find that the memory usage is too large, we can first check the be.out log to see if there is a large memory application. Because of the TCMalloc currently used by Doris to manage memory, when a large memory application is encountered, the stack of the application will be printed to the be.out file. The general form is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("tcmalloc: large alloc 1396277248 bytes == 0x3f3488000 @  0x2af6f63 0x2c4095b 0x134d278 0x134bdcb 0x133d105 0x133d1d0 0x19930ed\n")])])]),a("p",[e._v("This indicates that Doris be is trying to apply memory of '1396277248 bytes' on this stack. We can use the 'addr2line' command to restore the stack to a letter that we can understand. The specific example is shown below.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ addr2line -e lib/palo_be  0x2af6f63 0x2c4095b 0x134d278 0x134bdcb 0x133d105 0x133d1d0 0x19930ed\n\n/home/ssd0/zc/palo/doris/core/thirdparty/src/gperftools-gperftools-2.7/src/tcmalloc.cc:1335\n/home/ssd0/zc/palo/doris/core/thirdparty/src/gperftools-gperftools-2.7/src/tcmalloc.cc:1357\n/home/disk0/baidu-doris/baidu/bdg/doris-baidu/core/be/src/exec/hash_table.cpp:267\n/home/disk0/baidu-doris/baidu/bdg/doris-baidu/core/be/src/exec/hash_table.hpp:86\n/home/disk0/baidu-doris/baidu/bdg/doris-baidu/core/be/src/exec/hash_join_node.cpp:239\n/home/disk0/baidu-doris/baidu/bdg/doris-baidu/core/be/src/exec/hash_join_node.cpp:213\nthread.cpp:?\n")])])]),a("h3",{attrs:{id:"heap-profile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heap-profile"}},[e._v("#")]),e._v(" HEAP PROFILE")]),e._v(" "),a("p",[e._v("Sometimes the application of memory is not caused by the application of large memory, but by the continuous accumulation of small memory. Then there is no way to locate the specific application information by viewing the log, so you need to get the information through other ways.")]),e._v(" "),a("p",[e._v("At this time, we can take advantage of TCMalloc's "),a("a",{attrs:{href:"https://gperftools.github.io/gperftools/heapprofile.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("heapprofile"),a("OutboundLink")],1),e._v(". If the heapprofile function is set, we can get the overall memory application usage of the process. The usage is to set the 'heapprofile' environment variable before starting Doris be. For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export HEAPPROFILE=/tmp/doris_be.hprof\n./bin/start_be.sh --daemon\n")])])]),a("p",[e._v("In this way, when the dump condition of the heapprofile is met, the overall memory usage will be written to the file in the specified path. Later, we can use the 'pprof' tool to analyze the output content.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ pprof --text lib/palo_be /tmp/doris_be.hprof.0012.heap | head -30\n\nUsing local file lib/palo_be.\nUsing local file /tmp/doris_be.hprof.0012.heap.\nTotal: 668.6 MB\n   610.6  91.3%  91.3%    610.6  91.3% doris::SystemAllocator::allocate_via_malloc (inline)\n    18.1   2.7%  94.0%     18.1   2.7% _objalloc_alloc\n     5.6   0.8%  94.9%     63.4   9.5% doris::RowBatch::RowBatch\n     5.1   0.8%  95.6%      7.1   1.1% butil::ResourcePool::add_block (inline)\n     3.7   0.5%  96.2%      3.7   0.5% butil::iobuf::create_block (inline)\n     3.4   0.5%  96.7%      3.4   0.5% butil::FlatMap::init\n     3.2   0.5%  97.2%      5.2   0.8% butil::ObjectPool::add_block (inline)\n     2.6   0.4%  97.6%      2.6   0.4% __gnu_cxx::new_allocator::allocate (inline)\n     2.0   0.3%  97.9%      2.0   0.3% butil::ObjectPool::add_block_group (inline)\n     2.0   0.3%  98.2%      2.0   0.3% butil::ResourcePool::add_block_group (inline)\n     1.7   0.3%  98.4%      1.7   0.3% doris::SegmentReader::_load_index\n")])])]),a("p",[e._v("Contents of each column of the above documents:")]),e._v(" "),a("ul",[a("li",[e._v("Column 1: the memory size directly applied by the function, in MB")]),e._v(" "),a("li",[e._v("Column 4: the total memory size of the function and all the functions it calls.")]),e._v(" "),a("li",[e._v("The second column and the fifth column are the proportion values of the first column and the fourth column respectively.")]),e._v(" "),a("li",[e._v("The third column is the cumulative value of the second column.")])]),e._v(" "),a("p",[e._v("Of course, it can also generate call relation pictures, which is more convenient for analysis. For example, the following command can generate a call graph in SVG format.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pprof --svg lib/palo_be /tmp/doris_be.hprof.0012.heap > heap.svg \n")])])]),a("p",[a("strong",[e._v("NOTE: turning on this option will affect the execution performance of the program. Please be careful to turn on the online instance.")])]),e._v(" "),a("h3",{attrs:{id:"pprof-remote-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pprof-remote-server"}},[e._v("#")]),e._v(" pprof remote server")]),e._v(" "),a("p",[e._v("Although heapprofile can get all the memory usage information, it has some limitations. 1. Restart be. 2. You need to enable this command all the time, which will affect the performance of the whole process.")]),e._v(" "),a("p",[e._v("For Doris be, you can also use the way of opening and closing the heap profile dynamically to analyze the memory application of the process. Doris supports the "),a("a",{attrs:{href:"https://gperftools.github.io/gperftools/pprof_remote_servers.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("remote server debugging of gperftools"),a("OutboundLink")],1),e._v(". Then you can use 'pprof' to directly perform dynamic head profile on the remote running Doris be. For example, we can check the memory usage increment of Doris through the following command")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ pprof --text --seconds=60 http://be_host:be_webport/pprof/heap \n\nTotal: 1296.4 MB\n   484.9  37.4%  37.4%    484.9  37.4% doris::StorageByteBuffer::create\n   272.2  21.0%  58.4%    273.3  21.1% doris::RowBlock::init\n   157.5  12.1%  70.5%    157.5  12.1% doris::RowBatch::RowBatch\n    90.7   7.0%  77.5%     90.7   7.0% doris::SystemAllocator::allocate_via_malloc\n    66.6   5.1%  82.7%     66.6   5.1% doris::IntegerColumnReader::init\n    47.9   3.7%  86.4%     47.9   3.7% __gnu_cxx::new_allocator::allocate\n    20.8   1.6%  88.0%     35.4   2.7% doris::SegmentReader::_load_index\n    12.7   1.0%  89.0%     12.7   1.0% doris::DecimalColumnReader::init\n    12.7   1.0%  89.9%     12.7   1.0% doris::LargeIntColumnReader::init\n    12.7   1.0%  90.9%     12.7   1.0% doris::StringColumnDirectReader::init\n    12.3   0.9%  91.9%     12.3   0.9% std::__cxx11::basic_string::_M_mutate\n    10.4   0.8%  92.7%     10.4   0.8% doris::VectorizedRowBatch::VectorizedRowBatch\n    10.0   0.8%  93.4%     10.0   0.8% doris::PlainTextLineReader::PlainTextLineReader\n")])])]),a("p",[e._v("The output of this command is the same as the output and view mode of heap profile, which will not be described in detail here. Statistics will be enabled only during execution of this command, which has a limited impact on process performance compared with heap profile.")]),e._v(" "),a("h3",{attrs:{id:"lsan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lsan"}},[e._v("#")]),e._v(" LSAN")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/google/sanitizers/wiki/AddressSanitizerLeakSanitizer",target:"_blank",rel:"noopener noreferrer"}},[e._v("LSAN"),a("OutboundLink")],1),e._v(" is an address checking tool, GCC has been integrated. When we compile the code, we can enable this function by turning on the corresponding compilation options. When the program has a determinable memory leak, it prints the leak stack. Doris be has integrated this tool, only need to compile with the following command to generate be binary with memory leak detection version.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("BUILD_TYPE=LSAN ./build.sh\n")])])]),a("p",[e._v("When the system detects a memory leak, it will output the corresponding information in be. Out. For the following demonstration, we intentionally insert a memory leak code into the code. We insert the following code into the "),a("code",[e._v("open")]),e._v(" function of "),a("code",[e._v("StorageEngine")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    char* leak_buf = new char[1024];\n    strcpy(leak_buf, "hello world");\n    LOG(INFO) << leak_buf;\n')])])]),a("p",[e._v("We get the following output in be.out")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("=================================================================\n==24732==ERROR: LeakSanitizer: detected memory leaks\n\nDirect leak of 1024 byte(s) in 1 object(s) allocated from:\n    #0 0xd10586 in operator new[](unsigned long) ../../../../gcc-7.3.0/libsanitizer/lsan/lsan_interceptors.cc:164\n    #1 0xe333a2 in doris::StorageEngine::open(doris::EngineOptions const&, doris::StorageEngine**) /home/ssd0/zc/palo/doris/core/be/src/olap/storage_engine.cpp:104\n    #2 0xd3cc96 in main /home/ssd0/zc/palo/doris/core/be/src/service/doris_main.cpp:159\n    #3 0x7f573b5eebd4 in __libc_start_main (/opt/compiler/gcc-4.8.2/lib64/libc.so.6+0x21bd4)\n\nSUMMARY: LeakSanitizer: 1024 byte(s) leaked in 1 allocation(s).\n")])])]),a("p",[e._v("From the above output, we can see that 1024 bytes have been leaked, and the stack information of memory application has been printed out.")]),e._v(" "),a("p",[a("strong",[e._v("NOTE: turning on this option will affect the execution performance of the program. Please be careful to turn on the online instance.")])]),e._v(" "),a("p",[a("strong",[e._v("NOTE: if the LSAN switch is turned on, the TCMalloc will be automatically turned off")])]),e._v(" "),a("h3",{attrs:{id:"asan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asan"}},[e._v("#")]),e._v(" ASAN")]),e._v(" "),a("p",[e._v("Except for the unreasonable use and leakage of memory. Sometimes there will be memory access illegal address and other errors. At this time, we can use "),a("a",{attrs:{href:"https://github.com/google/sanitizers/wiki/addresssanitizer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ASAN"),a("OutboundLink")],1),e._v(" to help us find the cause of the problem. Like LSAN, ASAN is integrated into GCC. Doris can open this function by compiling as follows")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("BUILD_TYPE=ASAN ./build.sh\n")])])]),a("p",[e._v("Execute the binary generated by compilation. When the detection tool finds any abnormal access, it will immediately exit and output the stack illegally accessed in be.out. The output of ASAN is the same as that of LSAN. Here we also actively inject an address access error to show the specific content output. We still inject an illegal memory access into the 'open' function of 'storageengine'. The specific error code is as follows")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    char* invalid_buf = new char[1024];\n    for (int i = 0; i < 1025; ++i) {\n        invalid_buf[i] = i;\n    }\n    LOG(INFO) << invalid_buf;\n")])])]),a("p",[e._v("We get the following output in be.out")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("=================================================================\n==23284==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x61900008bf80 at pc 0x00000129f56a bp 0x7fff546eed90 sp 0x7fff546eed88\nWRITE of size 1 at 0x61900008bf80 thread T0\n    #0 0x129f569 in doris::StorageEngine::open(doris::EngineOptions const&, doris::StorageEngine**) /home/ssd0/zc/palo/doris/core/be/src/olap/storage_engine.cpp:106\n    #1 0xe2c1e3 in main /home/ssd0/zc/palo/doris/core/be/src/service/doris_main.cpp:159\n    #2 0x7fa5580fbbd4 in __libc_start_main (/opt/compiler/gcc-4.8.2/lib64/libc.so.6+0x21bd4)\n    #3 0xd30794  (/home/ssd0/zc/palo/doris/core/output3/be/lib/palo_be+0xd30794)\n\n0x61900008bf80 is located 0 bytes to the right of 1024-byte region [0x61900008bb80,0x61900008bf80)\nallocated by thread T0 here:\n    #0 0xdeb040 in operator new[](unsigned long) ../../../../gcc-7.3.0/libsanitizer/asan/asan_new_delete.cc:82\n    #1 0x129f50d in doris::StorageEngine::open(doris::EngineOptions const&, doris::StorageEngine**) /home/ssd0/zc/palo/doris/core/be/src/olap/storage_engine.cpp:104\n    #2 0xe2c1e3 in main /home/ssd0/zc/palo/doris/core/be/src/service/doris_main.cpp:159\n    #3 0x7fa5580fbbd4 in __libc_start_main (/opt/compiler/gcc-4.8.2/lib64/libc.so.6+0x21bd4)\n\nSUMMARY: AddressSanitizer: heap-buffer-overflow /home/ssd0/zc/palo/doris/core/be/src/olap/storage_engine.cpp:106 in doris::StorageEngine::open(doris::EngineOptions const&, doris::StorageEngine**)\n")])])]),a("p",[e._v("From this message, we can see that at the address of "),a("code",[e._v("0x61900008bf80")]),e._v(", we tried to write a byte, but this address is illegal. We can also see the application stack of the address "),a("code",[e._v("[0x61900008bb80, 0x61900008bf80]")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("NOTE: turning on this option will affect the execution performance of the program. Please be careful to turn on the online instance.")])]),e._v(" "),a("p",[a("strong",[e._v("NOTE: if the ASAN switch is turned on, the TCMalloc will be automatically turned off")])]),e._v(" "),a("p",[e._v("In addition, if stack information is output in be.out, but there is no function symbol, then we need to handle it manually to get readable stack information. The specific processing method needs a script to parse the output of ASAN. At this time, we need to use "),a("a",{attrs:{href:"https://llvm.org/svn/llvm-project/compiler-rt/trunk/lib/asan/scripts/asan_symbolize.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("asan_symbolize"),a("OutboundLink")],1),e._v(" to help with parsing. The specific usage is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat be.out | python asan_symbolize.py | c++filt\n")])])]),a("p",[e._v("With the above command, we can get readable stack information.")]),e._v(" "),a("h2",{attrs:{id:"cpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[e._v("#")]),e._v(" CPU")]),e._v(" "),a("p",[e._v("When the CPU idle of the system is very low, it means that the CPU of the system has become the main bottleneck. At this time, it is necessary to analyze the current CPU usage. For the be of Doris, there are two ways to analyze the CPU bottleneck of Doris.")]),e._v(" "),a("h3",{attrs:{id:"pprof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pprof"}},[e._v("#")]),e._v(" pprof")]),e._v(" "),a("p",[e._v("Because Doris has integrated and compatible with GPERF rest interface, users can analyze remote Doris be through the 'pprof' tool. The specific usage is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pprof --svg --seconds=60 http://be_host:be_webport/pprof/profile > be.svg \n")])])]),a("p",[e._v("In this way, a CPU consumption graph of be execution can be generated.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/cpu-pprof-demo.png"),alt:"CPU Pprof"}}),e._v(" "),a("h3",{attrs:{id:"perf-flamegragh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#perf-flamegragh"}},[e._v("#")]),e._v(" perf + flamegragh")]),e._v(" "),a("p",[e._v("This is a quite common CPU analysis method. Compared with "),a("code",[e._v("pprof")]),e._v(", this method must be able to log in to the physical machine of the analysis object. However, compared with pprof, which can only collect points on time, perf can collect stack information through different events. The specific usage is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("perf record -g -p be_pid -- sleep 60\n")])])]),a("p",[e._v("This command counts the CPU operation of be for 60 seconds and generates perf.data. For the analysis of perf.data, the command of perf can be used for analysis.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("perf report\n")])])]),a("p",[e._v("The analysis results in the following pictures")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/perf-report-demo.png"),alt:"Perf Report"}}),e._v(" "),a("p",[e._v("To analyze the generated content. Of course, you can also use flash graph to complete the visual display.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("perf script | ./FlameGraph/stackcollapse-perf.pl | ./FlameGraph/flamegraph.pl > be.svg\n")])])]),a("p",[e._v("This will also generate a graph of CPU consumption at that time.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/cpu-flame-demo.svg"),alt:"CPU Flame"}})])}),[],!1,null,null,null);t.default=r.exports}}]);