(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{537:function(a,t,e){"use strict";e.r(t);var s=e(43),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"bitmap-hash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-hash"}},[a._v("#")]),a._v(" bitmap_hash")]),a._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),e("p",[e("code",[a._v("BITMAP BITMAP_HASH(expr)")])]),a._v(" "),e("p",[a._v("Compute the 32-bits hash value of a expr of any type, then return a bitmap containing that hash value. Mainly be used to load non-integer value into bitmap column, e.g.,")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,device_id, device_id=bitmap_hash(device_id)"   http://host:8410/api/test/testDb/_stream_load\n')])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mysql> select bitmap_count(bitmap_hash('hello'));\n+------------------------------------+\n| bitmap_count(bitmap_hash('hello')) |\n+------------------------------------+\n|                                  1 |\n+------------------------------------+\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("BITMAP_HASH,BITMAP\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);