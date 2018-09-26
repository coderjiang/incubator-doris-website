(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{408:function(t,a,s){"use strict";s.r(a);var e=s(43),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"doris-document"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doris-document"}},[t._v("#")]),t._v(" Doris Document")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress"),s("OutboundLink")],1),t._v(" is used as our document site generator. Configurations are in "),s("code",[t._v("./docs/.vuepress")]),t._v(" folder.")]),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("Download and install "),s("a",{attrs:{href:"http://nodejs.cn/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org // Only "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" you are "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" Mainland China.\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),s("p",[t._v("Open your browser and navigate to "),s("code",[t._v("localhost:8080/en/")]),t._v(" or "),s("code",[t._v("localhost:8080/zh-CN/")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"docs-directories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docs-directories"}},[t._v("#")]),t._v(" Docs' Directories")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n  ├─ docs/\n  │  ├─ .vuepress\n  │  │  ├─ dist // Built site files.\n  │  │  ├─ public // Assets\n  │  │  ├─ sidebar // Side bar configurations.\n  │  │  │  ├─ en.js\n  │  │  │  └─ zh-CN.js\n  │  ├─ theme // Global styles and customizations.\n  │  └─ config.js // Vuepress configurations.\n  ├─ zh-CN/\n  │  ├─ xxxx.md\n  │  └─ README.md // Will be rendered as entry page.\n  └─ en/\n     ├─ one.md\n     └─ README.md // Will be rendered as entry page.\n")])])]),s("h2",{attrs:{id:"start-writing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-writing"}},[t._v("#")]),t._v(" Start Writing")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Write markdown files in multi languages and put them in separated folders "),s("code",[t._v("./en/")]),t._v(" and "),s("code",[t._v("./zh-CN/")]),t._v(". "),s("strong",[t._v("But they should be with the same name.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├─ en/\n│  ├─ one.md\n│  └─ two.md\n└─ zh-CN/\n│  ├─ one.md\n│  └─ two.md\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Frontmatters like below should always be on the top of each file:")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v('\n{\n    "title": "Backup and Recovery", // sidebar title\n    "language": "en" // writing language\n'),s("span",{pre:!0,attrs:{class:"token title important"}},[t._v("}\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Assets are in "),s("code",[t._v(".vuepress/public/")]),t._v(".")]),t._v(" "),s("p",[t._v("Assuming that there exists a png "),s("code",[t._v(".vuepress/public/images/image_x.png")]),t._v(", then it can be used like:")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$withBase('/images/image_x.png')"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alter text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Remember to update the sidebar configurations in "),s("code",[t._v(".vuepress/sidebar/")]),t._v(" after adding a new file or a folder.")]),t._v(" "),s("p",[t._v("Assuming that the directories are:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├─ en/\n│  ├─ subfolder\n│  │  ├─ one.md\n│  │  └─ two.md\n│  └─ three.md\n└─ zh-CN/\n   ├─ subfolder\n   │  ├─ one.md\n   │  └─ two.md\n   └─ three.md\n")])])]),s("p",[t._v("Then the sidebar configurations would be like:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/sidebar/en.js`")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"subfolder name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    directoryPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"subfolder/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"two"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"three"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/sidebar/zh-CN.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"文件夹名称"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    directoryPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"subfolder/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"two"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"three"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Run "),s("code",[t._v("npm run lint")]),t._v(" before starting a PR.")])])]),t._v(" "),s("p",[t._v("Surely that there will be lots of error logs if the mardown files are not following the rules, and these logs will all be printed in the console:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("\nen/administrator-guide/alter-table/alter-table-bitmap-index.md:92 MD040/fenced-code-language Fenced code blocks should have a language specified "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Context: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"    ``'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v('"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nen/administrator-guide/alter-table/alter-table-rollup.md:45 MD040/fenced-code-language Fenced code blocks should have a language specified "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v('Context: "'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("`"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v('"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nen/administrator-guide/alter-table/alter-table-rollup.md:77 MD040/fenced-code-language Fenced code blocks should have a language specified "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v('Context: "'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("`"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v('"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nen/administrator-guide/alter-table/alter-table-rollup.md:178 MD046/code-block-style Code block style "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Expected: fenced"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Actual: indented"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nen/administrator-guide/alter-table/alter-table-schema-change.md:50 MD040/fenced-code-language Fenced code blocks should have a language specified "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v('Context: "'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("`"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v('"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nen/administrator-guide/alter-table/alter-table-schema-change.md:82 MD040/fenced-code-language Fenced code blocks should have a language specified "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v('Context: "'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("`"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v('"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nen/administrator-guide/alter-table/alter-table-schema-change.md:127 MD040/fenced-code-language Fenced code blocks should have a language specified "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v('Context: "'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("`"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v('"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nen/administrator-guide/alter-table/alter-table-schema-change.md:144 MD040/fenced-code-language Fenced code blocks should have a language specified "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v('Context: "'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("`"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v('"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nen/administrator-guide/alter-table/alter-table-schema-change.md:153 MD040/fenced-code-language Fenced code blocks should have a language specified "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v('Context: "'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v('``"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nen/administrator-guide/alter-table/alter-table-schema-change.md:199 MD046/code-block-style Code block style "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Expected: fenced"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Actual: indented"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nen/administrator-guide/backup-restore.md:45:1 MD029/ol-prefix Ordered list item prefix "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Expected: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Actual: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Style: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1/1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nen/administrator-guide/backup-restore.md:57:1 MD029/ol-prefix Ordered list item prefix "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Expected: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Actual: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Style: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1/1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nen/administrator-guide/backup-restore.md:61:1 MD029/ol-prefix Ordered list item prefix "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Expected: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Actual: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Style: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1/1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" code ELIFECYCLE\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" errno "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" docs@ lint: "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("markdownlint "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'**/*.md'")]),t._v(" -f"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" Exit status "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" Failed at the docs@ lint script.\n\n")])])]),s("h2",{attrs:{id:"fulltext-search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fulltext-search"}},[t._v("#")]),t._v(" FullText search")]),t._v(" "),s("p",[t._v("We use "),s("a",{attrs:{href:"https://docsearch.algolia.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Algolia DocSearch"),s("OutboundLink")],1),t._v(" as our fulltext search engine.")]),t._v(" "),s("p",[t._v("One thing we need to do is that "),s("a",{attrs:{href:"https://github.com/algolia/docsearch-configs/blob/master/configs/apache_doris.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("Config.json From DocSearch"),s("OutboundLink")],1),t._v(" should be updated if a new language or branch is created.")]),t._v(" "),s("p",[t._v("For more detail of the docsearch's configuration, please refer to "),s("a",{attrs:{href:"https://docsearch.algolia.com/docs/config-file",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration of DocSearch"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[t._v("#")]),t._v(" Deployment")]),t._v(" "),s("p",[t._v("Just start a PR, and all things will be done automatically.")]),t._v(" "),s("h2",{attrs:{id:"what-travis-does"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-travis-does"}},[t._v("#")]),t._v(" What Travis Does")]),t._v(" "),s("p",[t._v("Once a PR accepted, travis ci will be triggered to build and deploy the whole website within its own branch. Here is what "),s("code",[t._v(".travis.yml")]),t._v(" does:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Prepare nodejs and vuepress enviorment.")])]),t._v(" "),s("li",[s("p",[t._v("Use current branch's name as the relative url path in "),s("code",[t._v(".vuepress/config.js")]),t._v("(which is the "),s("code",[t._v("base")]),t._v(" property).")])]),t._v(" "),s("li",[s("p",[t._v("Build the documents into a website all by vuepress.")])]),t._v(" "),s("li",[s("p",[t._v("Fetch asf-site repo to local directory, and copy "),s("code",[t._v(".vupress/dist/")]),t._v(" into "),s("code",[t._v("{BRANCH}/")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Push the new site to asf-site repo with "),s("code",[t._v("GitHub Token")]),t._v("(which is preset in Travis console as a variable used in .travis.yml).")])])]),t._v(" "),s("h2",{attrs:{id:"asf-site-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asf-site-repository"}},[t._v("#")]),t._v(" asf-site repository")]),t._v(" "),s("p",[t._v("Finally the asf-site repository will be like:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├─ master/\n│  ├─ en/\n│  │  ├─ subfolder\n│  │  │  ├─ one.md\n│  │  └─ three.md\n│  └─ zh-CN/\n│      ├─ subfolder\n│      │  ├─ one.md\n│      └─ three.md\n├─ incubating-0.11/\n│  ├─ en/\n│  │  ├─ subfolder\n│  │  │  ├─ one.md\n│  │  └─ three.md\n│  └─ zh-CN/\n│      ├─ subfolder\n│      │  ├─ one.md\n│      └─ three.md\n├─ index.html // user entry, and auto redirected to master folder\n└─ versions.json // all versions that can be seleted on the website are defined here\n")])])]),s("p",[t._v("And the "),s("code",[t._v("versions.json")]),t._v(" is like:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"en"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Versions"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dropdown label")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"items"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"master"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dropdown-item label")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/../master/en/installing/compilation.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// entry page for this version")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_blank"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"branch-0.11"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/../branch-0.11/en/installing/compilation.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_blank"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"zh-CN"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"版本"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"items"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"master"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/../master/zh-CN/installing/compilation.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_blank"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"branch-0.11"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"link"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/../branch-0.11/zh-CN/installing/compilation.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_blank"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);