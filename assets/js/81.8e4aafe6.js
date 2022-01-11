(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{535:function(t,n,e){"use strict";e.r(n);var s=e(55),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"get-tablets-distribution-between-different-disks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-tablets-distribution-between-different-disks"}},[t._v("#")]),t._v(" GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS")]),t._v(" "),e("p",[t._v("Get the distribution of tablets under each partition between different disks on BE node")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("curl -X GET http://be_host:webserver_port/api/tablets_distribution?group_by=partition\n")])])]),e("p",[t._v("The return is the number distribution of tablets under each partition between different disks on BE node, which only include tablet number.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "***",\n        tablets_distribution: [\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n\n                    ...\n\n                ]\n            },\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n\n                    ...\n\n                ]\n            },\n\n            ...\n\n        ]\n    },\n    count: ***\n}\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("curl -X GET http://be_host:webserver_port/api/tablets_distribution?group_by=partition&partition_id=xxx\n")])])]),e("p",[t._v("The return is the number distribution of tablets under the particular partition between different disks on BE node, which include tablet number, tablet id, schema hash and tablet size.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "***",\n        tablets_distribution: [\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                        tablets:[\n                            {\n                                tablet_id:***,\n                                schema_hash:***,\n                                tablet_size:***\n                            },\n\n                            ...\n\n                        ]\n                    },\n\n                    ...\n\n                ]\n            }\n        ]\n    },\n    count: ***\n}\n')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);