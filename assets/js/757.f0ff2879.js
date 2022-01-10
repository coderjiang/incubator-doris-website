(window.webpackJsonp=window.webpackJsonp||[]).push([[757],{1200:function(a,e,i){"use strict";i.r(e);var t=i(52),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[i("h1",{attrs:{id:"minidump"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#minidump"}},[a._v("#")]),a._v(" Minidump")]),a._v(" "),i("p",[a._v("Minidump 是微软定义的一种用于程序崩溃后错误上报的文件格式。其中包括了崩溃时的线程信息、寄存器信息、调用栈信息等等，这有助于开发人员快速定位问题。")]),a._v(" "),i("p",[a._v("不同于 "),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Core_dump",target:"_blank",rel:"noopener noreferrer"}},[a._v("Coredump"),i("OutboundLink")],1),a._v("，Minidump 文件体积更小，更易于上报和网络传输。Coredump 文件会包含完整的内存镜像，因此体积可能有几十上百GB。而 Minidump 文件仅包含关键线程的调用栈和寄存器信息，因此体积通常只有 MB 级别。")]),a._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/google/breakpad",target:"_blank",rel:"noopener noreferrer"}},[a._v("Breakpad"),i("OutboundLink")],1),a._v(" 是一个跨平台的崩溃转储和分析框架和工具集合。用户可以借助 Breakpad 来对 Minidump 文件进行自助分析。也可以收集 Minidump 文件并上报给 Doris 集群运维或开发人员。")]),a._v(" "),i("h2",{attrs:{id:"如何开启-minidump"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#如何开启-minidump"}},[a._v("#")]),a._v(" 如何开启 Minidump")]),a._v(" "),i("p",[a._v("Minidump 功能是在 Doris 0.15.0 之后的版本中引入的功能。该功能由 BE 的以下配置文件控制：")]),a._v(" "),i("ul",[i("li",[i("p",[i("code",[a._v("disable_minidump")])]),a._v(" "),i("p",[a._v("是否开启 Minidump 功能。默认为 false，即开启。")])]),a._v(" "),i("li",[i("p",[i("code",[a._v("minidump_dir")])]),a._v(" "),i("p",[a._v("Minidump 文件的存储目录。默认为 "),i("code",[a._v("${DORIS_HOME}/Minidump/")])])]),a._v(" "),i("li",[i("p",[i("code",[a._v("max_minidump_file_size_mb")])]),a._v(" "),i("p",[a._v("Minidump 文件的大小限制。默认为 200MB。如果大小超过阈值，breakpad 会尝试减少文件中记录的信息，比如线程数量和寄存器数量来介绍 Minidump 的文件大小。但这只是一个期望值，实际文件大小可能比设定的大。")])]),a._v(" "),i("li",[i("p",[i("code",[a._v("max_minidump_file_number")])]),a._v(" "),i("p",[a._v("最多保留多少个 Minidump 文件。默认为 10，既保留最近的 10 个文件。")])])]),a._v(" "),i("h2",{attrs:{id:"如何生成-minidump"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#如何生成-minidump"}},[a._v("#")]),a._v(" 如何生成 Minidump")]),a._v(" "),i("p",[a._v("Minidump 的生成有两种方式：")]),a._v(" "),i("ol",[i("li",[i("p",[a._v("程序崩溃")]),a._v(" "),i("p",[a._v("当程序遇到问题崩溃后，会自动生成 Minidump 文件。此时会在 be.out 中出现如下信息：")]),a._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[a._v('Minidump created at: /doris/be/Minidump/4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp\n*** Aborted at 1636970042 (unix time) try "date -d @1636970042" if you are using GNU date ***\nPC: @          0x1b184e4 doris::OlapScanNode::scanner_thread()\n*** SIGSEGV (@0x0) received by PID 71567 (TID 0x7f173a5df700) from PID 0; stack trace: ***\n@          0x220c992 google::(anonymous namespace)::FailureSignalHandler()\n@     0x7f174fb5e1d0 (unknown)\n@          0x1b184e4 doris::OlapScanNode::scanner_thread()\n@          0x15a19af doris::PriorityThreadPool::work_thread()\n@          0x21d9107 thread_proxy\n@     0x7f174fb53f84 start_thread\n@     0x7f174f943ddf __GI___clone\n@                0x0 (unknown)\n')])])]),i("p",[a._v("其中 "),i("code",[a._v("/doris/be/Minidump/4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp")]),a._v(" 为 Minidump 文件。而其后的堆栈是程序崩溃点所在的调用栈信息。")])]),a._v(" "),i("li",[i("p",[a._v("手动触发")]),a._v(" "),i("p",[a._v("用户可以主动地向 BE 进程发送 SIGUSR1 信号来触发 Minidump。如使用以下命令：")]),a._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[a._v("kill -s SIGUSR1 71567\n")])])]),i("p",[a._v("其中 71567 是 BE 的进程id（pid）。之后，会在 be.out 中出现如下信息：")]),a._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[a._v("Receive signal: SIGUSR1\nMinidump created at: /doris/be/Minidump/1af8fe8f-3d5b-40ea-6b76ad8f-0cf6756f.dmp\n")])])]),i("p",[a._v("其中 "),i("code",[a._v("Receive signal: SIGUSR1")]),a._v(" 表示这是用户触发的 Minidump 操作。后面是 Minidump 文件位置。")]),a._v(" "),i("p",[a._v("用户手动触发的 Minidump 操作不会杀死 BE 进程，并且不会在 be.out 产生错误堆栈。")])])]),a._v(" "),i("h2",{attrs:{id:"如何分析-minidump"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#如何分析-minidump"}},[a._v("#")]),a._v(" 如何分析 Minidump")]),a._v(" "),i("p",[a._v("我们可以使用 breakpad 提供的各类工具来分析 Minidump，从而查看错误原因。")]),a._v(" "),i("h3",{attrs:{id:"获取-breakpad-工具"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#获取-breakpad-工具"}},[a._v("#")]),a._v(" 获取 breakpad 工具")]),a._v(" "),i("p",[a._v("用户可以自行前往 "),i("a",{attrs:{href:"https://github.com/google/breakpad",target:"_blank",rel:"noopener noreferrer"}},[a._v("Breakpad"),i("OutboundLink")],1),a._v(" 代码库下载并编译 breakpad。编译方式可以参考 Doris 源码库中的 "),i("a",{attrs:{href:"https://github.com/apache/incubator-doris/blob/master/thirdparty/vars.sh",target:"_blank",rel:"noopener noreferrer"}},[a._v("thirdparty/vars.sh"),i("OutboundLink")],1),a._v(" 中的 "),i("code",[a._v("build_breakpad()")]),a._v(" 方法。")]),a._v(" "),i("p",[a._v("也可以在 Doris 提供的 Docker 编译镜像 1.4.2 以上版本中，从镜像容器的 "),i("code",[a._v("/var/local/thirdparty/installed/bin")]),a._v(" 目录下找到 breakpad 编译产出的各类工具。")]),a._v(" "),i("h3",{attrs:{id:"分析-minidump"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#分析-minidump"}},[a._v("#")]),a._v(" 分析 Minidump")]),a._v(" "),i("p",[a._v("我们可以使用以下两种方式来分析 Minidump 文件。")]),a._v(" "),i("ol",[i("li",[i("p",[a._v("转储成 coredump 文件")]),a._v(" "),i("p",[a._v("使用 breakpad 提供的 "),i("code",[a._v("minidump-2-core")]),a._v(" 工具将 Minidump 文件转储成 coredump 文件：")]),a._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[a._v("./minidump-2-core /doris/be/Minidump/1af8fe8f-3d5b-40ea-6b76ad8f-0cf6756f.dmp > 1.coredump\n")])])]),i("p",[a._v("之后我们可以使用 gdb 工具来分析这个 coredump 文件了：")]),a._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[a._v("gdb lib/palo_be -c 1.coredump\n")])])])]),a._v(" "),i("li",[i("p",[a._v("生成可读调用栈")]),a._v(" "),i("p",[a._v("Minidump 文件中只包含调用栈的地址，我们需要把这些地址对应到实际的函数文件位置。因此，我们首先需要通过 "),i("code",[a._v("dump_syms")]),a._v(" 生成 BE 二进制文件的符号表 "),i("code",[a._v("palo_be.sym")]),a._v("：")]),a._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[a._v("./dump_syms ./lib/palo_be > palo_be.sym\n")])])]),i("p",[a._v("接下来，我们需要符号表第一行的信息，构建一个对应的符号表目录。")]),a._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[a._v("head -n1 palo_be.sym\n")])])]),i("p",[a._v("以上命令会打印 palo_be.sym 的第一行内容如下：")]),a._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[a._v("MODULE Linux x86_64 137706CC745F5EC3EABBF730D4B229370 palo_be\n")])])]),i("p",[a._v("之后我们创建一个目录结构：")]),a._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[a._v("mkdir -p ./symbols/palo_be/137706CC745F5EC3EABBF730D4B229370\n")])])]),i("p",[a._v("目录路径中的 "),i("code",[a._v("palo_be")]),a._v(" 和 "),i("code",[a._v("137706CC745F5EC3EABBF730D4B229370")]),a._v(" 需和 palo_be.sym 文件的第一行内容一致。然后我们将 palo_be.sym 文件移动到该目录中：")]),a._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[a._v("cp palo_be.sym ./symbols/palo_be/137706CC745F5EC3EABBF730D4B229370\n")])])]),i("p",[a._v("最后，我们可以使用 "),i("code",[a._v("minidump_stackwalk")]),a._v(" 来产出可读的调用栈信息：")]),a._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[a._v("minidump_stackwalk 4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp ./symbols/ > readable.stack\n")])])]),i("p",[a._v("其中 "),i("code",[a._v("4f8d4fe5-15f8-40a3-843109b3-d49993f3.dmp")]),a._v(" 为 minidump 文件。"),i("code",[a._v("./symbols/")]),a._v(" 为之前创建的包含 palo_be.sym 的目录。"),i("code",[a._v("readable.stack")]),a._v(" 是将生成的结果重定向到这个文件中。同时，在执行这个命令时，屏幕上也会刷一些程序运行日志，可以不用理会。")]),a._v(" "),i("p",[a._v("至此，我们就获取了一个可读的线程调用栈文件：readable.stack。其中包含了 BE 程序在写 Minidump 文件时的所有线程的调用栈信息，以及对应的寄存器信息。")]),a._v(" "),i("p",[a._v("其中 "),i("code",[a._v("Crash reason")]),a._v(" 说明了程序崩溃的原因。如果是 "),i("code",[a._v("DUMP_REQUESTED")]),a._v("，则表示这是一次用户主动触发的 Minidump。")]),a._v(" "),i("p",[a._v("我们可以通过以下命令过滤掉寄存器信息，从而获取一个比较清晰的调用栈视图：")]),a._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[a._v('grep -v = readable.stack |grep -v "Found by" |vi -\n')])])]),i("p",[a._v("其结果比较类似于通过 pstack 命令获取到的线程调用栈信息。")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);