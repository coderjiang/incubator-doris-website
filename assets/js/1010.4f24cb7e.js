(window.webpackJsonp=window.webpackJsonp||[]).push([[1010],{1461:function(t,e,s){"use strict";s.r(e);var a=s(55),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sm4-encrypt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sm4-encrypt"}},[t._v("#")]),t._v(" SM4_ENCRYPT")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("p",[t._v("SM4 加密函数")]),t._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("p",[s("code",[t._v("VARCHAR SM4_ENCRYPT(str,key_str[,init_vector])")])]),t._v(" "),s("p",[t._v("返回加密后的结果")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("MySQL > select TO_BASE64(SM4_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3'));\n+--------------------------------+\n| to_base64(sm4_encrypt('text')) |\n+--------------------------------+\n| aDjwRflBrDjhBZIOFNw3Tg==       |\n+--------------------------------+\n1 row in set (0.010 sec)\n\nMySQL > set block_encryption_mode=\"SM4_128_CBC\";\nQuery OK, 0 rows affected (0.001 sec)\n\nMySQL > select to_base64(SM4_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n+----------------------------------------------------------------------------------+\n| to_base64(sm4_encrypt('text', 'F3229A0B371ED2D9441B830D21A390C3', '0123456789')) |\n+----------------------------------------------------------------------------------+\n| G7yqOKfEyxdagboz6Qf01A==                                                         |\n+----------------------------------------------------------------------------------+\n1 row in set (0.014 sec)\n")])])]),s("h1",{attrs:{id:"sm4-decrypt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sm4-decrypt"}},[t._v("#")]),t._v(" SM4_DECRYPT")]),t._v(" "),s("h2",{attrs:{id:"description-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("p",[t._v("Aes 解密函数")]),t._v(" "),s("h3",{attrs:{id:"syntax-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax-2"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("p",[s("code",[t._v("VARCHAR AES_DECRYPT(str,key_str[,init_vector])")])]),t._v(" "),s("p",[t._v("返回解密后的结果")]),t._v(" "),s("h2",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("MySQL [(none)]> select SM4_DECRYPT(FROM_BASE64('aDjwRflBrDjhBZIOFNw3Tg=='),'F3229A0B371ED2D9441B830D21A390C3');\n+------------------------------------------------------+\n| sm4_decrypt(from_base64('aDjwRflBrDjhBZIOFNw3Tg==')) |\n+------------------------------------------------------+\n| text                                                 |\n+------------------------------------------------------+\n1 row in set (0.009 sec)\n\nMySQL> set block_encryption_mode=\"SM4_128_CBC\";\nQuery OK, 0 rows affected (0.006 sec)\n\nMySQL > select SM4_DECRYPT(FROM_BASE64('G7yqOKfEyxdagboz6Qf01A=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n+--------------------------------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('G7yqOKfEyxdagboz6Qf01A=='), 'F3229A0B371ED2D9441B830D21A390C3', '0123456789') |\n+--------------------------------------------------------------------------------------------------------+\n| text                                                                                                   |\n+--------------------------------------------------------------------------------------------------------+\n1 row in set (0.012 sec)\n")])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("SM4_ENCRYPT, SM4_DECRYPT")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);