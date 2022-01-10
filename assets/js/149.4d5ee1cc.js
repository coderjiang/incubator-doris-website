(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{593:function(e,t,a){"use strict";a.r(t);var n=a(52),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"apache-doris-be-development-and-debugging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-doris-be-development-and-debugging"}},[e._v("#")]),e._v(" Apache Doris Be development and debugging")]),e._v(" "),a("h2",{attrs:{id:"initial-preparation-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-preparation-work"}},[e._v("#")]),e._v(" initial preparation work")]),e._v(" "),a("p",[a("strong",[e._v("This tutorial was conducted under Ubuntu 20.04")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Download the doris source code")]),e._v(" "),a("p",[e._v("URL："),a("a",{attrs:{href:"https://github.com/apache/incubator-doris",target:"_blank",rel:"noopener noreferrer"}},[e._v("apache/incubator-doris: Apache Doris (Incubating) (github.com)"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Install GCC 8.3.1+, Oracle JDK 1.8+, Python 2.7+, confirm that the gcc, java, python commands point to the correct version, and set the JAVA_HOME environment variable")])]),e._v(" "),a("li",[a("p",[e._v("Install other dependent packages")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python brotli\nsudo add-apt-repository ppa:ubuntu-toolchain-r/ppa\nsudo apt update\nsudo apt install gcc-10 g++-10 \nsudo apt-get install autoconf automake libtool autopoint\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("install : libssl-dev")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt install -y libssl-dev\n")])])]),a("h2",{attrs:{id:"compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[e._v("#")]),e._v(" Compile")]),e._v(" "),a("p",[e._v("The following steps are carried out in the /home/workspace directory")]),e._v(" "),a("ol",[a("li",[e._v("dowload source")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/apache/incubator-doris.git \n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Compile third-party dependency packages")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" cd /home/workspace/incubator-doris/thirdparty\n ./build-thirdparty.sh\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Compile doris product code")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd /home/workspace/incubator-doris\n./build.sh\n")])])]),a("p",[e._v("Note: This compilation has the following instructions:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("./build.sh  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Compile be and fe at the same time")]),e._v("\n./build.sh  --be "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Only compile be")]),e._v("\n./build.sh  --fe "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Only compilefe")]),e._v("\n./build.sh  --fe --be --clean"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Delete and compile be fe at the same time")]),e._v("\n./build.sh  --fe  --clean"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Delete and compile fe")]),e._v("\n./build.sh  --be  --clean"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Delete and compile be")]),e._v("\n./build.sh  --be --fe  --clean"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Delete and compile be fe at the same time")]),e._v("\n")])])]),a("p",[e._v("If nothing happens, the compilation should be successful, and the final deployment file will be output to the /home/zhangfeng/incubator-doris/output/ directory. If you still encounter other problems, you can refer to the doris installation document http://doris.apache.org.")]),e._v(" "),a("h2",{attrs:{id:"deployment-and-debugging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment-and-debugging"}},[e._v("#")]),e._v(" Deployment and debugging")]),e._v(" "),a("ol",[a("li",[e._v("Authorize be compilation result files")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("chmod  /home/workspace/incubator-doris/output/be/lib/palo_be\n")])])]),a("p",[e._v("Note: /home/workspace/incubator-doris/output/be/lib/palo_be is the executable file of be.")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Create a data storage directory")])]),e._v(" "),a("p",[e._v("By viewing /home/workspace/incubator-doris/output/be/conf/be.conf")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# INFO, WARNING, ERROR, FATAL\nsys_log_level = INFO\nbe_port = 9060\nbe_rpc_port = 9070\nwebserver_port = 8040\nheartbeat_service_port = 9050\nbrpc_port = 8060\n\n# Note that there should at most one ip match this list.\n# If no ip match this rule, will choose one randomly.\n# use CIDR format, e.g. 10.10.10.0/\n# Default value is empty.\npriority_networks = 192.168.59.0/24 # data root path, seperate by ';'\nstorage_root_path = /soft/be/storage \n# sys_log_dir = ${PALO_HOME}/log\n# sys_log_roll_mode = SIZE-MB-\n# sys_log_roll_num =\n# sys_log_verbose_modules =\n# log_buffer_level = -\n# palo_cgroups \n")])])]),a("p",[e._v("Need to create this folder, this is where the be data is stored")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mkdir -p /soft/be/storage\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("Open vscode, and open the directory where the be source code is located. In this case, open the directory as "),a("strong",[e._v("/home/workspace/incubator-doris/")]),e._v("，For details on how to vscode, refer to the online tutorial")])]),e._v(" "),a("li",[a("p",[e._v("Install the vscode ms c++ debugging plug-in, the plug-in identified by the red box in the figure below")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/image-20210618104042192.png"),alt:""}}),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Create a launch.json file, the content of the file is as follows:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "(gdb) Launch",\n            "type": "cppdbg",\n            "request": "launch",\n            "program": "/home/workspace/incubator-doris/output/be/lib/palo_be",\n            "args": [],\n            "stopAtEntry": false,\n            "cwd": "/home/workspace/incubator-doris/",\n            "environment": [{"name":"PALO_HOME","value":"/home/workspace/incubator-doris/output/be/"},\n                            {"name":"UDF_RUNTIME_DIR","value":"/home/workspace/incubator-doris/output/be/lib/udf-runtime"},\n                            {"name":"LOG_DIR","value":"/home/workspace/incubator-doris/output/be/log"},\n                            {"name":"PID_DIR","value":"/home/workspace/incubator-doris/output/be/bin"}\n                           ],\n            "externalConsole": true,\n            "MIMode": "gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n')])])]),a("p",[e._v("Among them, environment defines several environment variables DORIS_HOME UDF_RUNTIME_DIR LOG_DIR PID_DIR, which are the environment variables needed when palo_be is running. If it is not set, the startup will fail")]),e._v(" "),a("p",[a("strong",[e._v("Note: If you want attach (additional process) debugging, the configuration code is as follows:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "version": "0.2.0",\n    "configurations": [\n      \t{\n          "name": "(gdb) Launch",\n          "type": "cppdbg",\n          "request": "attach",\n          "program": "/home/workspace/incubator-doris/output/lib/palo_be",\n          "processId":,\n          "MIMode": "gdb",\n          "internalConsoleOptions":"openOnSessionStart",\n          "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n')])])]),a("p",[e._v("In the configuration "),a("strong",[e._v('"request": "attach", "processId": PID')]),e._v(", these two configurations are the key points: set the debug mode of gdb to attach and attach the processId of the process, otherwise it will fail. To find the process id, you can enter the following command in the command line:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ps -ef | grep palo*\n")])])]),a("p",[e._v("As shown in the figure:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/image-20210618095240216.png"),alt:""}}),e._v(" "),a("p",[e._v("Among them, 15200 is the process id of the currently running be.")]),e._v(" "),a("p",[e._v("An example of a complete lainch.json is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(' {\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "(gdb) Attach",\n            "type": "cppdbg",\n            "request": "attach",\n            "program": "/home/workspace/incubator-doris/output/be/lib/palo_be",\n            "processId": 17016,\n            "MIMode": "gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        },\n        {\n            "name": "(gdb) Launch",\n            "type": "cppdbg",\n            "request": "launch",\n            "program": "/home/workspace/incubator-doris/output/be/lib/palo_be",\n            "args": [],\n            "stopAtEntry": false,\n            "cwd": "/home/workspace/incubator-doris/output/be",\n            "environment": [\n                {\n                    "name": "DORIS_HOME",\n                    "value": "/home/workspace/incubator-doris/output/be"\n                },\n                {\n                    "name": "UDF_RUNTIME_DIR",\n                    "value": "/home/workspace/incubator-doris/output/be/lib/udf-runtime"\n                },\n                {\n                    "name": "LOG_DIR",\n                    "value": "/home/workspace/incubator-doris/output/be/log"\n                },\n                {\n                    "name": "PID_DIR",\n                    "value": "/home/workspace/incubator-doris/output/be/bin"\n                }\n            ],\n            "externalConsole": false,\n            "MIMode": "gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        }\n    ]\n}\n')])])]),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[e._v("Click to debug")]),e._v(" "),a("p",[e._v("You can start your debugging journey with the rest,")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/image-20210618091006146.png"),alt:""}})])}),[],!1,null,null,null);t.default=o.exports}}]);