(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{494:function(e,t,r){"use strict";r.r(t);var s=r(43),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"fe-metrics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fe-metrics"}},[e._v("#")]),e._v(" FE Metrics")]),e._v(" "),r("p",[e._v("This document mainly introduces the monitor metrics of FE.")]),e._v(" "),r("h2",{attrs:{id:"view-metrics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#view-metrics"}},[e._v("#")]),e._v(" View Metrics")]),e._v(" "),r("p",[e._v("FE metrics can be viewed by visiting:")]),e._v(" "),r("p",[r("code",[e._v("http://fe_host:fe_http_port/metrics")])]),e._v(" "),r("p",[e._v("The default format is of "),r("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("You can get Json format by visiting:")]),e._v(" "),r("p",[r("code",[e._v("http://fe_host:fe_http_port/metrics?type=json")])]),e._v(" "),r("h2",{attrs:{id:"metrics-list"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#metrics-list"}},[e._v("#")]),e._v(" Metrics List")]),e._v(" "),r("h3",{attrs:{id:"doris-fe-snmp-name-tcp-in-errs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-snmp-name-tcp-in-errs"}},[e._v("#")]),e._v(" "),r("code",[e._v('doris_fe_snmp{name="tcp_in_errs"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("Tcp: InErrs")]),e._v(" field in "),r("code",[e._v("/proc/net/snmp")]),e._v(". Represents the number of error TCP packets currently received.")]),e._v(" "),r("p",[e._v("The incidence rate can be calculated in combination with the sampling period.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot network problems.")]),e._v(" "),r("h3",{attrs:{id:"doris-fe-snmp-name-tcp-retrans-segs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-snmp-name-tcp-retrans-segs"}},[e._v("#")]),e._v(" "),r("code",[e._v('doris_fe_snmp{name="tcp_retrans_segs"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("Tcp: RetransSegs")]),e._v(" field in "),r("code",[e._v("/proc/net/snmp")]),e._v(". Represents the number of error TCP packets currently received.")]),e._v(" "),r("p",[e._v("The incidence rate can be calculated in combination with the sampling period.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot network problems.")]),e._v(" "),r("h3",{attrs:{id:"doris-fe-snmp-name-tcp-in-segs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-snmp-name-tcp-in-segs"}},[e._v("#")]),e._v(" "),r("code",[e._v('doris_fe_snmp{name="tcp_in_segs"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("Tcp: InSegs")]),e._v(" field in "),r("code",[e._v("/proc/net/snmp")]),e._v(". Represents the number of received TCP packets.")]),e._v(" "),r("p",[e._v("Use "),r("code",[e._v("(NEW_tcp_in_errs - OLD_tcp_in_errs) / (NEW_tcp_in_segs - OLD_tcp_in_segs)")]),e._v(" can calculate the error rate of received TCP packets.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot network problems.")]),e._v(" "),r("h3",{attrs:{id:"doris-fe-snmp-name-tcp-out-segs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-snmp-name-tcp-out-segs"}},[e._v("#")]),e._v(" "),r("code",[e._v('doris_fe_snmp{name="tcp_out_segs"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("Tcp: OutSegs")]),e._v(" field in "),r("code",[e._v("/proc/net/snmp")]),e._v(". Represents the number of send TCP packets with RST mark.")]),e._v(" "),r("p",[e._v("Use "),r("code",[e._v("(NEW_tcp_retrans_segs - OLD_tcp_retrans_segs) / (NEW_tcp_out_segs - OLD_tcp_out_segs)")]),e._v(" can calculate the retrans rate of TCP packets.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot network problems.")]),e._v(" "),r("h3",{attrs:{id:"doris-fe-meminfo-name-memory-total"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-meminfo-name-memory-total"}},[e._v("#")]),e._v(" "),r("code",[e._v('doris_fe_meminfo{name="memory_total"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("MemTotal")]),e._v(" field in "),r("code",[e._v("/proc/meminfo")]),e._v(". Represents the size of all available memory, total physical memory minus reserved space and kernel size.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot memory problems.")]),e._v(" "),r("h3",{attrs:{id:"doris-fe-meminfo-name-memory-free"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-meminfo-name-memory-free"}},[e._v("#")]),e._v(" "),r("code",[e._v('doris_fe_meminfo{name="memory_free"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("MemFree")]),e._v(" field in "),r("code",[e._v("/proc/meminfo")]),e._v(". Represents the size of unused memory in system.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot memory problems.")]),e._v(" "),r("h3",{attrs:{id:"doris-fe-meminfo-name-memory-available"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-meminfo-name-memory-available"}},[e._v("#")]),e._v(" "),r("code",[e._v('doris_fe_meminfo{name="memory_available"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("MemAvailable")]),e._v(" field in "),r("code",[e._v("/proc/meminfo")]),e._v(". Represents the real system usable memory size. Although some memory in the system has been used, but it can be reclaimed. So this part of reclaimable memory plus MemFree is the system usable memory.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot memory problems.")]),e._v(" "),r("h3",{attrs:{id:"doris-fe-meminfo-name-buffers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-meminfo-name-buffers"}},[e._v("#")]),e._v(" "),r("code",[e._v('doris_fe_meminfo{name="buffers"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("Buffers")]),e._v(" field in "),r("code",[e._v("/proc/meminfo")]),e._v(". Represents the memory used to cache the block device (metadata, pages of the file system).")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot memory problems.")]),e._v(" "),r("h3",{attrs:{id:"doris-fe-meminfo-name-cached"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#doris-fe-meminfo-name-cached"}},[e._v("#")]),e._v(" "),r("code",[e._v('doris_fe_meminfo{name="cached"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("Cached")]),e._v(" field in "),r("code",[e._v("/proc/meminfo")]),e._v(". Represents the memory allocated to the file cache.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot memory problems.")]),e._v(" "),r("h3",{attrs:{id:"jvm-thread-type-count"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-count"}},[e._v("#")]),e._v(" "),r("code",[e._v('jvm_thread{type="count"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("count")]),e._v(" type in "),r("code",[e._v("jvm_thread")]),e._v(". Represents the current number of live threads including both daemon and non-daemon threads.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot jvm threads problems for FE.")]),e._v(" "),r("h3",{attrs:{id:"jvm-thread-type-peak-count"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-peak-count"}},[e._v("#")]),e._v(" "),r("code",[e._v('jvm_thread{type="peak_count"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("peak_count")]),e._v(" type in "),r("code",[e._v("jvm_thread")]),e._v(". Represents the current number of live threads including both daemon and non-daemon threads.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot jvm threads problems for FE.")]),e._v(" "),r("h3",{attrs:{id:"jvm-thread-type-new-count"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-new-count"}},[e._v("#")]),e._v(" "),r("code",[e._v('jvm_thread{type="new_count"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("new_count")]),e._v(" type in "),r("code",[e._v("jvm_thread")]),e._v(". Represents the current number of threads which state is NEW.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot jvm threads problems for FE.")]),e._v(" "),r("h3",{attrs:{id:"jvm-thread-type-runnable-count"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-runnable-count"}},[e._v("#")]),e._v(" "),r("code",[e._v('jvm_thread{type="runnable_count"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("runnable_count")]),e._v(" type in "),r("code",[e._v("jvm_thread")]),e._v(". Represents the current number of threads which state is RUNNABLE.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot jvm threads problems for FE.")]),e._v(" "),r("h3",{attrs:{id:"jvm-thread-type-blocked-count"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-blocked-count"}},[e._v("#")]),e._v(" "),r("code",[e._v('jvm_thread{type="blocked_count"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("blocked_count")]),e._v(" type in "),r("code",[e._v("jvm_thread")]),e._v(". Represents the current number of threads which state is BLOCKED.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot jvm threads problems for FE.")]),e._v(" "),r("h3",{attrs:{id:"jvm-thread-type-waiting-count"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-waiting-count"}},[e._v("#")]),e._v(" "),r("code",[e._v('jvm_thread{type="waiting_count"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("waiting_count")]),e._v(" type in "),r("code",[e._v("jvm_thread")]),e._v(". Represents the current number of threads which state is WAITING.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot jvm threads problems for FE.")]),e._v(" "),r("h3",{attrs:{id:"jvm-thread-type-timed-waiting-count"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-timed-waiting-count"}},[e._v("#")]),e._v(" "),r("code",[e._v('jvm_thread{type="timed_waiting_count"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("timed_waiting_count")]),e._v(" type in "),r("code",[e._v("jvm_thread")]),e._v(". Represents the current number of threads which state is TIMED_WAITING.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot jvm threads problems for FE.")]),e._v(" "),r("h3",{attrs:{id:"jvm-thread-type-terminated-count"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-thread-type-terminated-count"}},[e._v("#")]),e._v(" "),r("code",[e._v('jvm_thread{type="terminated_count"}')])]),e._v(" "),r("p",[e._v("Value of the "),r("code",[e._v("terminated_count")]),e._v(" type in "),r("code",[e._v("jvm_thread")]),e._v(". Represents the current number of threads which state is TERMINATED.")]),e._v(" "),r("p",[e._v("Usually used to troubleshoot jvm threads problems for FE.")])])}),[],!1,null,null,null);t.default=o.exports}}]);