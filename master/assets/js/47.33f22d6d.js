(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{501:function(e,t,a){"use strict";a.r(t);var s=a(55),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"get-small-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-small-file"}},[e._v("#")]),e._v(" Get Small File")]),e._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" Request")]),e._v(" "),a("p",[a("code",[e._v("GET /api/get_small_file")])]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Through the file id, download the file in the small file manager.")]),e._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[e._v("#")]),e._v(" Path parameters")]),e._v(" "),a("p",[e._v("None")]),e._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("token")])]),e._v(" "),a("p",[e._v("The token of the cluster. It can be viewed in the file "),a("code",[e._v("palo-meta/image/VERSION")]),e._v(".")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("file_id")])]),e._v(" "),a("p",[e._v("The file id displayed in the file manager. The file id can be viewed with the "),a("code",[e._v("SHOW FILE")]),e._v(" command.")])])]),e._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[e._v("#")]),e._v(" Request body")]),e._v(" "),a("p",[e._v("None")]),e._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("< HTTP/1.1 200\n< Vary: Origin\n< Vary: Access-Control-Request-Method\n< Vary: Access-Control-Request-Headers\n< Content-Disposition: attachment;fileName=ca.pem\n< Content-Type: application/json;charset=UTF-8\n< Transfer-Encoding: chunked\n\n... File Content ...\n")])])]),a("p",[e._v("If there is an error, it returns:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n\t"msg": "File not found or is not content",\n\t"code": 1,\n\t"data": null,\n\t"count": 0\n}\n')])])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Download the file with the specified id")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GET /api/get_small_file?token=98e8c0a6-3a41-48b8-a72b-0432e42a7fe5&file_id=11002\n\nResponse:\n\n< HTTP/1.1 200\n< Vary: Origin\n< Vary: Access-Control-Request-Method\n< Vary: Access-Control-Request-Headers\n< Content-Disposition: attachment;fileName=ca.pem\n< Content-Type: application/json;charset=UTF-8\n< Transfer-Encoding: chunked\n\n... File Content ...\n")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);