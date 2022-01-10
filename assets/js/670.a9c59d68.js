(window.webpackJsonp=window.webpackJsonp||[]).push([[670],{1113:function(t,a,e){"use strict";e.r(a);var s=e(52),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"upload-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upload-action"}},[t._v("#")]),t._v(" Upload Action")]),t._v(" "),e("p",[t._v("Upload Action 目前主要服务于FE的前端页面，用于用户导入一些测试性质的小文件。")]),t._v(" "),e("h2",{attrs:{id:"上传导入文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传导入文件"}},[t._v("#")]),t._v(" 上传导入文件")]),t._v(" "),e("p",[t._v("用于将文件上传到FE节点，可在稍后用于导入该文件。目前仅支持上传最大100MB的文件。")]),t._v(" "),e("h3",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("POST /api/<namespace>/<db>/<tbl>/upload\n")])])]),e("h3",{attrs:{id:"path-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("<namespace>")])]),t._v(" "),e("p",[t._v("命名空间，目前仅支持 "),e("code",[t._v("default_cluster")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("<db>")])]),t._v(" "),e("p",[t._v("指定的数据库")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("<tbl>")])]),t._v(" "),e("p",[t._v("指定的表")])])]),t._v(" "),e("h3",{attrs:{id:"query-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("column_separator")])]),t._v(" "),e("p",[t._v("可选项，指定文件的分隔符。默认为 "),e("code",[t._v("\\t")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("preview")])]),t._v(" "),e("p",[t._v("可选项，如果设置为 "),e("code",[t._v("true")]),t._v("，则返回结果中会显示最多10行根据 "),e("code",[t._v("column_separator")]),t._v(" 切分好的数据行。")])])]),t._v(" "),e("h3",{attrs:{id:"request-body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),e("p",[t._v("要上传的文件内容，Content-type 为 "),e("code",[t._v("multipart/form-data")])]),t._v(" "),e("h3",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n        "id": 1,\n        "uuid": "b87824a4-f6fd-42c9-b9f1-c6d68c5964c2",\n        "originFileName": "data.txt",\n        "fileSize": 102400,\n        "absPath": "/path/to/file/data.txt"\n        "maxColNum" : 5\n\t},\n\t"count": 1\n}\n')])])]),e("h2",{attrs:{id:"导入已上传的文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入已上传的文件"}},[t._v("#")]),t._v(" 导入已上传的文件")]),t._v(" "),e("h3",{attrs:{id:"request-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("PUT /api/<namespace>/<db>/<tbl>/upload\n")])])]),e("h3",{attrs:{id:"path-parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters-2"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("<namespace>")])]),t._v(" "),e("p",[t._v("命名空间，目前仅支持 "),e("code",[t._v("default_cluster")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("<db>")])]),t._v(" "),e("p",[t._v("指定的数据库")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("<tbl>")])]),t._v(" "),e("p",[t._v("指定的表")])])]),t._v(" "),e("h3",{attrs:{id:"query-parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-2"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("file_id")])]),t._v(" "),e("p",[t._v("指定导入的文件id，文件id由上传导入文件的API返回。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("file_uuid")])]),t._v(" "),e("p",[t._v("指定导入的文件uuid，文件uuid由上传导入文件的API返回。")])])]),t._v(" "),e("h3",{attrs:{id:"header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[t._v("#")]),t._v(" Header")]),t._v(" "),e("p",[t._v("Header 中的可选项同 Stream Load 请求中 header 的可选项。")]),t._v(" "),e("h3",{attrs:{id:"request-body-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-body-2"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),e("p",[t._v("要上传的文件内容，Content-type 为 "),e("code",[t._v("multipart/form-data")])]),t._v(" "),e("h3",{attrs:{id:"response-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"TxnId": 7009,\n\t\t"Label": "9dbdfb0a-120b-47a2-b078-4531498727cb",\n\t\t"Status": "Success",\n\t\t"Message": "OK",\n\t\t"NumberTotalRows": 3,\n\t\t"NumberLoadedRows": 3,\n\t\t"NumberFilteredRows": 0,\n\t\t"NumberUnselectedRows": 0,\n\t\t"LoadBytes": 12,\n\t\t"LoadTimeMs": 71,\n\t\t"BeginTxnTimeMs": 0,\n\t\t"StreamLoadPutTimeMs": 1,\n\t\t"ReadDataTimeMs": 0,\n\t\t"WriteDataTimeMs": 13,\n\t\t"CommitAndPublishTimeMs": 53\n\t},\n\t"count": 1\n}\n')])])]),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("PUT /api/default_cluster/db1/tbl1/upload?file_id=1&file_uuid=b87824a4-f6fd-42c9-b9f1-c6d68c5964c2\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);