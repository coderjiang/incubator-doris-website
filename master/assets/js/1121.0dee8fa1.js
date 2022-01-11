(window.webpackJsonp=window.webpackJsonp||[]).push([[1121],{1573:function(e,a,t){"use strict";t.r(a);var s=t(55),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-encryptkey"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-encryptkey"}},[e._v("#")]),e._v(" CREATE ENCRYPTKEY")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("h3",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('CREATE ENCRYPTKEY key_name\n    AS "key_string"\n')])])]),t("h3",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("key_name")]),e._v(": 要创建密钥的名字, 可以包含数据库的名字。比如："),t("code",[e._v("db1.my_key")]),e._v("。")]),e._v(" "),t("p",[t("code",[e._v("key_string")]),e._v(": 要创建密钥的字符串")])]),e._v(" "),t("p",[e._v("此语句创建一个自定义密钥。执行此命令需要用户拥有 "),t("code",[e._v("ADMIN")]),e._v(" 权限。")]),e._v(" "),t("p",[e._v("如果 "),t("code",[e._v("key_name")]),e._v(" 中包含了数据库名字，那么这个自定义密钥会创建在对应的数据库中，否则这个函数将会创建在当前会话所在的数据库。新密钥的名字不能够与对应数据库中已存在的密钥相同，否则会创建失败。")]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("创建一个自定义密钥")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('CREATE \bENCRYPTKEY my_key AS "ABCD123456789";\n')])])])]),e._v(" "),t("li",[t("p",[e._v("使用自定义密钥")]),e._v(" "),t("p",[e._v("使用自定义密钥需在密钥前添加关键字 "),t("code",[e._v("KEY")]),e._v("/"),t("code",[e._v("key")]),e._v("，与 "),t("code",[e._v("key_name")]),e._v(" 空格隔开。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> SELECT HEX(AES_ENCRYPT(\"Doris is Great\", KEY my_key));\n+------------------------------------------------+\n| hex(aes_encrypt('Doris is Great', key my_key)) |\n+------------------------------------------------+\n| D26DB38579D6A343350EDDC6F2AD47C6               |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT AES_DECRYPT(UNHEX('D26DB38579D6A343350EDDC6F2AD47C6'), KEY my_key);\n+--------------------------------------------------------------------+\n| aes_decrypt(unhex('D26DB38579D6A343350EDDC6F2AD47C6'), key my_key) |\n+--------------------------------------------------------------------+\n| Doris is Great                                                     |\n+--------------------------------------------------------------------+\n1 row in set (0.01 sec)\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" Keyword")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("CREATE,ENCRYPTKEY\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);