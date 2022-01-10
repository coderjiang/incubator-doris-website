(window.webpackJsonp=window.webpackJsonp||[]).push([[736],{1179:function(e,t,r){"use strict";r.r(t);var i=r(52),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"committer指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#committer指南"}},[e._v("#")]),e._v(" Committer指南")]),e._v(" "),r("h2",{attrs:{id:"committer新人指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#committer新人指南"}},[e._v("#")]),e._v(" Committer新人指南")]),e._v(" "),r("h3",{attrs:{id:"订阅公共邮件列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#订阅公共邮件列表"}},[e._v("#")]),e._v(" 订阅公共邮件列表")]),e._v(" "),r("p",[e._v("请订阅{dev,commits}@doris.apache.org邮件列表，通过发送邮件到{dev,commits}-subscribe@doris.apache.org完成订阅。\ncommits邮件非常重要，因为所有的GitHub Issue，PR提交都会发往这个邮件列表。")]),e._v(" "),r("h3",{attrs:{id:"订阅private邮件列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#订阅private邮件列表"}},[e._v("#")]),e._v(" 订阅private邮件列表")]),e._v(" "),r("p",[e._v("订阅private@doris.apache.org通过发送邮件到private-subscribe@doris.apache.org完成订阅。\n这个订阅操作需要邮件列表的moderator进行审核才能订阅成功。\n如果你是PPMC的话, 可以通过通过"),r("a",{attrs:{href:"https://whimsy.apache.org/committers/subscribe",target:"_blank",rel:"noopener noreferrer"}},[e._v("邮件列表订阅帮手"),r("OutboundLink")],1),e._v("直接完成订阅。")]),e._v(" "),r("h3",{attrs:{id:"关联你的-asf-账号与-github-账号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关联你的-asf-账号与-github-账号"}},[e._v("#")]),e._v(" 关联你的 ASF 账号与 Github 账号")]),e._v(" "),r("p",[e._v("我们用GitHub来管理我们的Issue以及用户贡献。\n所以你需要把你的ASF账号与GitHub账号进行关联来获得"),r("a",{attrs:{href:"https://github.com/apache/incubator-doris",target:"_blank",rel:"noopener noreferrer"}},[e._v("Doris仓库"),r("OutboundLink")],1),e._v("的写入权限。\n通过在"),r("a",{attrs:{href:"https://gitbox.apache.org/setup/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitbox"),r("OutboundLink")],1),e._v("完成操作后，你就可以对GitHub仓库中的Issue，PR进行管理。")]),e._v(" "),r("h2",{attrs:{id:"code-review指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#code-review指南"}},[e._v("#")]),e._v(" Code Review指南")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("始终保持一个较高的标准来进行review，这样才能更好地保证整个产品的质量。")])]),e._v(" "),r("li",[r("p",[e._v("对于用户接口类的、整体架构方面的修改，需要在社区进行充分地讨论，可以在邮件组发起，也可以在issue上发起。\n用户接口的改变包括支持新的SQL函数，支持新的HTTP接口，支持新的功能等。这样能够保证产品的一致性。")])]),e._v(" "),r("li",[r("p",[e._v("测试覆盖。新增的逻辑需要有对应的测试来覆盖。对于已有老代码，不好增加的可以酌情考虑。")])]),e._v(" "),r("li",[r("p",[e._v("文档。新增加的功能必须要有文档来说明，否则这样的代码不允许合入。必须要有英文文档，最好有中文文档。")])]),e._v(" "),r("li",[r("p",[e._v("代码的可读性。如果review的同学对于代码逻辑不是很清晰，那么可以要求contributor去解释这段逻辑，并且需要在代码里写充分的注释来解释逻辑。")])]),e._v(" "),r("li",[r("p",[e._v("尽量在评论的结尾给出明确的结论。是同意，还是要change request。如果是小问题，可以只留评论。")])]),e._v(" "),r("li",[r("p",[e._v("如果你已经看过了代码，觉得没有问题，但是觉得需要其他同学来确认下，可以留下+1 Comment。")])]),e._v(" "),r("li",[r("p",[e._v("互相尊重，互相学习。在评论的时候保持礼貌的口吻，提建议尽量给出建议的理由。")])])]),e._v(" "),r("h2",{attrs:{id:"pull-request指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pull-request指南"}},[e._v("#")]),e._v(" Pull Request指南")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("一个PR合入需要三种角色的参与。Contributor：PR的提交者；Reviewer：对PR进行代码级评论的人；Moderator：PR合入的协调者。\nModerator主要负责给PR设定相关标签，推动相关reviewer进行评论，推动作者对PR进行修改，合入PR等工作。\n在一个具体的PR中，一个人可能充当不同的角色，比如一个Committer自己提交的PR，既是Contributor，又是这个PR的Moderator。")])]),e._v(" "),r("li",[r("p",[e._v("Committer可以把一个PR分配给自己作为整个PR的moderator，负责后续PR的推动工作。分配给自己之后，其他的Committer就知道这个PR有相关人负责了。")])]),e._v(" "),r("li",[r("p",[e._v("鼓励Committer作为自己PR的Moderator。")])]),e._v(" "),r("li",[r("p",[e._v("Reviewer需要进行代码级的review，可以参考Code Review Guideline。")])]),e._v(" "),r("li",[r("p",[e._v("Reviewer一旦评论了某个PR之后，需要持续跟进这个PR的后续改动，不鼓励评论了之后就不再管Contributor的后续回复了。")])]),e._v(" "),r("li",[r("p",[e._v("一个PR至少要获得一个非作者外的Committer +1才能进行被合入。")])]),e._v(" "),r("li",[r("p",[e._v("PR获得第一个+1后，至少要等一个工作日后才能进行合入。主要目的是等待社区其他同学来进行review。")])]),e._v(" "),r("li",[r("p",[e._v("对于接口类、整体架构方面的修改，至少要获得3个+1才能进行合入。")])]),e._v(" "),r("li",[r("p",[e._v("需要回归测试全部通过才能被合入。")])]),e._v(" "),r("li",[r("p",[e._v("Moderator需要在确定所有的评论都被回复之后才能进行代码合入。")])]),e._v(" "),r("li",[r("p",[e._v("代码合入选择“squash and merge”方式进行合入。")])]),e._v(" "),r("li",[r("p",[e._v("对于一个修改不同的reviewer有争议时，可以尝试讨论解决。如果讨论没有办法解决，可以在private@doris中发邮件投票解决，采取少数服从多数的原则。")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);