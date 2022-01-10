(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{598:function(s,t,a){"use strict";a.r(t);var e=a(52),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"doris-docker-quick-build-development-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-docker-quick-build-development-environment"}},[s._v("#")]),s._v(" Doris Docker quick build development environment")]),s._v(" "),a("h2",{attrs:{id:"related-detailed-document-navigation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-detailed-document-navigation"}},[s._v("#")]),s._v(" Related detailed document navigation")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://doris.incubator.apache.org/master/zh-CN/installing/compilation.html#%E4%BD%BF%E7%94%A8-docker-%E5%BC%80%E5%8F%91%E9%95%9C%E5%83%8F%E7%BC%96%E8%AF%91-%E6%8E%A8%E8%8D%90",target:"_blank",rel:"noopener noreferrer"}},[s._v("Developing mirror compilation using Docker"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://doris.incubator.apache.org/master/zh-CN/installing/install-deploy.html#%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"}},[s._v("Deploying Doris"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://doris.incubator.apache.org/master/zh-CN/developer-guide/be-vscode-dev.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("VSCode Be Development Debugging"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"environment-preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-preparation"}},[s._v("#")]),s._v(" Environment preparation")]),s._v(" "),a("ul",[a("li",[s._v("Install Docker")]),s._v(" "),a("li",[s._v("VSCode\n"),a("ul",[a("li",[s._v("Remote plugin")])])])]),s._v(" "),a("h2",{attrs:{id:"build-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-image"}},[s._v("#")]),s._v(" Build image")]),s._v(" "),a("p",[s._v("create dockerfile")]),s._v(" "),a("p",[s._v("VSCode replace all by using Ctrl-d")]),s._v(" "),a("ul",[a("li",[s._v("<!!! your user !!!>")]),s._v(" "),a("li",[s._v("<!!! your user password !!!>")]),s._v(" "),a("li",[s._v("<!!! root password !!!>")]),s._v(" "),a("li",[s._v("<!!! your git email !!!>")]),s._v(" "),a("li",[s._v("<!!! your git username !!!>")])]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" apache/incubator-doris:build-env-latest")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<!!! root password !!!>'")]),s._v(" | passwd root --stdin")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum install -y vim net-tools man wget git mysql lsof bash-completion "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && cp /var/local/thirdparty/installed/bin/thrift /usr/bin")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# safer usage, create new user instead of using root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum install -y sudo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && useradd -ms /bin/bash <!!! your user !!!> && echo <!!! your user password !!!> | passwd <!!! your user !!!> --stdin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && usermod -a -G wheel <!!! your user !!!>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" <!!! your user !!!>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /home/<!!! your user !!!>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" git config --global color.ui true "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<!!! your git email !!!>"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<!!! your git username !!!>"')])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install zsh and oh my zsh, easier to use on, you can remove it if you don't need it")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum install -y zsh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && chsh -s /bin/zsh <!!! your user !!!>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" <!!! your user !!!>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git clone https://github.com/zsh-users/zsh-autosuggestions "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM:-~/.oh-my-zsh/custom}")]),s._v("/plugins/zsh-autosuggestions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git clone https://github.com/zsh-users/zsh-syntax-highlighting.git "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM:-~/.oh-my-zsh/custom}")]),s._v("/plugins/zsh-syntax-highlighting")]),s._v("\n")])])]),a("p",[s._v("run build command")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t doris "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),a("p",[s._v("run image")]),s._v(" "),a("p",[s._v("note! "),a("a",{attrs:{href:"https://doris.apache.org/master/zh-CN/installing/compilation.html#%E4%BD%BF%E7%94%A8-docker-%E5%BC%80%E5%8F%91%E9%95%9C%E5%83%8F%E7%BC%96%E8%AF%91-%E6%8E%A8%E8%8D%90",target:"_blank",rel:"noopener noreferrer"}},[s._v("problems with mounting"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("p",[s._v("See the link above: It is recommended to run the image by mounting the local Doris source code directory as a volume .....")])]),s._v(" "),a("p",[s._v("if you are developing on windows, mounting may cause cross-filesystem access problems, please consider setting it manually")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it doris:latest /bin/bash\n")])])]),a("p",[s._v("if you installed zsh, replace plugins in ~/.zshrc after running the container")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("plugins=(git zsh-autosuggestions zsh-syntax-highlighting)\n")])])]),a("p",[s._v("create directory and download doris")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" code\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/apache/incubator-doris.git\n")])])]),a("h2",{attrs:{id:"compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[s._v("#")]),s._v(" Compile")]),s._v(" "),a("p",[s._v("Note:")]),s._v(" "),a("p",[s._v("use the following command first time compiling")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" build.sh --clean --be --fe --ui\n")])])]),a("p",[s._v("it is because build-env-for-0.15.0 version image upgraded thrift(0.9 -> 0.13), so you need to use --clean command to force use new version of thrift to generate code files, otherwise it will cause incompatibilities.")]),s._v(" "),a("p",[s._v("compile Doris")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" build.sh\n")])])]),a("h2",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[s._v("#")]),s._v(" Run")]),s._v(" "),a("p",[s._v("manually create "),a("code",[s._v("meta_dir")]),s._v(" metadata storage location, default value is "),a("code",[s._v("${DORIS_HOME}/doris-meta")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" meta_dir\n")])])]),a("p",[s._v("launch FE")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" output/fe\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/start_fe.sh --daemon\n")])])]),a("p",[s._v("launch BE")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" output/be\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/start_be.sh --daemon\n")])])]),a("p",[s._v("mysql-client connect")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -P "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9030")]),s._v(" -u root\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);