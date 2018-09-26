(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{446:function(e,a,t){"use strict";t.r(a);var n=t(43),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"publish-of-apache-doris"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publish-of-apache-doris"}},[e._v("#")]),e._v(" Publish of Apache Doris")]),e._v(" "),t("p",[e._v("Apache publishing must be at least an IPMC member, a commiter with Apache mailboxes, a role called release manager.")]),e._v(" "),t("p",[e._v("The general process of publication is as follows:")]),e._v(" "),t("ol",[t("li",[e._v("Preparing your setup")]),e._v(" "),t("li",[e._v("Preparing for release candidates\n"),t("ol",[t("li",[e._v("launching DISCUSS in the community")]),e._v(" "),t("li",[e._v("cutting a release branch")]),e._v(" "),t("li",[e._v("clean up issues")]),e._v(" "),t("li",[e._v("merging necessary patch to release branch")])])]),e._v(" "),t("li",[e._v("Running the voting process for a release\n"),t("ol",[t("li",[e._v("singing a tag and upload it to "),t("a",{attrs:{href:"https://dist.apache.org/repos/dist/dev/incubator/doris",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache dev svn repo"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("calling votes from "),t("a",{attrs:{href:"dev@doris.apache.org"}},[e._v("Doris community")])]),e._v(" "),t("li",[e._v("send result email to "),t("a",{attrs:{href:"dev@doris.apache.org"}},[e._v("Doris community")])]),e._v(" "),t("li",[e._v("calling votes from "),t("a",{attrs:{href:"general@incubator.apache.org"}},[e._v("Incubator community")])]),e._v(" "),t("li",[e._v("send result email to general@incubator.apache.org")])])]),e._v(" "),t("li",[e._v("Finalizing and posting a release\n"),t("ol",[t("li",[e._v("Upload the signature package to "),t("a",{attrs:{href:"https://dist.apache.org/repos/dist/release/incubator/doris",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache release repo"),t("OutboundLink")],1),e._v(" and generate relevant links")]),e._v(" "),t("li",[e._v("Prepare release note and send Announce mail to general@incubator.apache.org")]),e._v(" "),t("li",[e._v("Publish download links on Doris website and GitHub")])])])]),e._v(" "),t("h2",{attrs:{id:"prepare-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-setup"}},[e._v("#")]),e._v(" prepare setup")]),e._v(" "),t("p",[e._v("If you are a new Release Manager, you can read up on the process from the followings:")]),e._v(" "),t("ol",[t("li",[e._v("release signing https://www.apache.org/dev/release-signing.html")]),e._v(" "),t("li",[e._v("gpg for signing https://www.apache.org/dev/openpgp.html")]),e._v(" "),t("li",[e._v("svn https://www.apache.org/dev/version-control.html#https-svn")])]),e._v(" "),t("h3",{attrs:{id:"preparing-gpg-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparing-gpg-key"}},[e._v("#")]),e._v(" preparing gpg key")]),e._v(" "),t("p",[e._v("Release manager needs Mr. A to sign his own public key before publishing and upload it to the public key\nserver. Then he can use this public key to sign the package ready for publication.\nIf your key already exists in [key] (https://dist.apache.org/repos/dist/dev/initiator/doris/keys), you can skip this step.")]),e._v(" "),t("h4",{attrs:{id:"installation-and-configuration-of-signature-software-gnupg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-configuration-of-signature-software-gnupg"}},[e._v("#")]),e._v(" Installation and configuration of signature software GnuPG")]),e._v(" "),t("h5",{attrs:{id:"gnupg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gnupg"}},[e._v("#")]),e._v(" GnuPG")]),e._v(" "),t("p",[e._v("In 1991, programmer Phil Zimmermann developed the encryption software PGP to avoid government surveillance. This software is very useful, spread quickly, has become a necessary tool for many programmers. However, it is commercial software and cannot be used freely. So the Free Software Foundation decided to develop a replacement for PGP, called GnuPG. This is the origin of GPG.")]),e._v(" "),t("h5",{attrs:{id:"installation-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-configuration"}},[e._v("#")]),e._v(" Installation Configuration")]),e._v(" "),t("p",[e._v("CentOS installation command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("yum install gnupg\n")])])]),t("p",[e._v("After installation, the default configuration file gpg.conf will be placed in the home directory.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("~/.gnupg /gpg.conf\n")])])]),t("p",[e._v("If this directory or file does not exist, you can create an empty file directly.\nEdit gpg.conf, modify or add KeyServer configuration:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("keyserver hkp http://keys.gnupg.net\n")])])]),t("p",[e._v("Apache signature recommends SHA512, which can be done by configuring gpg.\nEdit gpg.conf and add the following three lines:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("personal-digest-preferences SHA512\ncert -digest -something SHA512\ndefault-preference-list SHA512 SHA384 SHA256 SHA224 AES256 AES192 AES CAST5 ZLIB BZIP2 ZIP Uncompressed\n")])])]),t("h4",{attrs:{id:"generating-new-signatures"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generating-new-signatures"}},[e._v("#")]),e._v(" Generating new signatures")]),e._v(" "),t("h5",{attrs:{id:"prepare-to-sign"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-to-sign"}},[e._v("#")]),e._v(" Prepare to Sign")]),e._v(" "),t("p",[e._v("Recommended settings for generating new signatures:")]),e._v(" "),t("p",[e._v("We must log in to user account directly through SecureCRT and other terminals. We can't transfer it through Su - user or ssh. Otherwise, the password input box will not show up and make an error.")]),e._v(" "),t("p",[e._v("Let's first look at the version of GPG and whether it supports SHA512.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --version\ngpg (GnuPG) 2.0.22\nlibgcrypt 1.5.3\nCopyright (C) 2013 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nHome: ~/.gnupg\nSupported algorithms:\nPubkey: RSA, ?, ?, ELG, DSA\nCipher: IDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256, TWOFISH,\n        CAMELLIA128, CAMELLIA192, CAMELLIA256\nHash: MD5, SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224\nCompression: Uncompressed, ZIP, ZLIB, BZIP2\n")])])]),t("h5",{attrs:{id:"generating-new-signatures-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generating-new-signatures-2"}},[e._v("#")]),e._v(" Generating new signatures")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --gen-key\ngpg (GnuPG) 2.0.22; Copyright (C) 2013 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0)\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: xxx\nName must be at least 5 characters long\nReal name: xxx-yyy\nEmail address: xxx@apache.org\nComment: xxx's key\nYou selected this USER-ID:\n    \"xxx-yyy (xxx's key) <xxx@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? o\n")])])]),t("p",[e._v("Real name needs to be consistent with the ID shown in ID. apache. org.\nEmail address is apache's mailbox.")]),e._v(" "),t("h5",{attrs:{id:"view-and-output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-and-output"}},[e._v("#")]),e._v(" View and Output")]),e._v(" "),t("p",[e._v('The first line shows the name of the public key file (pubring. gpg), the second line shows the public key characteristics (4096 bits, Hash string and generation time), the third line shows the "user ID", and the fourth line shows the private key characteristics.')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --list-keys\n/home/lide/.gnupg/pubring.gpg\n-----------------------------\npub   4096R/33DBF2E0 2018-12-06\nuid                  xxx-yyy  (xxx's key) <xxx@apache.org>\nsub   4096R/0E8182E6 2018-12-06\n")])])]),t("p",[e._v("xxx-yy is the user ID.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gpg --armor --output public-key.txt --export [UserID]\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --armor --output public-key.txt --export xxx-yyy\n$ cat public-key.txt\n-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG V2.0.22 (GNU /Linux)\n\nmQINBFwJEQ0BEACwqLluHfjBqD/RWZ4uoYxNYHlIzZvbvxAlwS2mn53BirLIU/G3\n9opMWNplvmK+3+gNlRlFpiZ7EvHsF/YJOAP59HmI2Z...\n")])])]),t("h4",{attrs:{id:"upload-signature-public-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upload-signature-public-key"}},[e._v("#")]),e._v(" Upload signature public key")]),e._v(" "),t("p",[e._v("Public key servers are servers that store users'public keys exclusively on the network. The send-keys parameter uploads the public key to the server.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gpg --send-keys xxxx\n")])])]),t("p",[e._v("Where XXX is the last step -- the string after pub in the list-keys result, as shown above: 33DBF2E0")]),e._v(" "),t("p",[e._v("You can also upload the contents of the above public-key.txt through the following website:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://keys.gnupg.net\n")])])]),t("p",[e._v("After successful upload, you can query the website and enter 0x33DBF2E0:")]),e._v(" "),t("p",[e._v("http://keys.gnupg.net")]),e._v(" "),t("p",[e._v("Queries on the site are delayed and may take an hour.")]),e._v(" "),t("h4",{attrs:{id:"generate-fingerprint-and-upload-it-to-apache-user-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-fingerprint-and-upload-it-to-apache-user-information"}},[e._v("#")]),e._v(" Generate fingerprint and upload it to Apache user information")]),e._v(" "),t("p",[e._v("Because the public key server has no checking mechanism, anyone can upload the public key in your name, so there is no way to guarantee the reliability of the public key on the server. Usually, you can publish a public key fingerprint on the website and let others check whether the downloaded public key is true or not.")]),e._v(" "),t("p",[e._v("Fingerprint parameter generates public key fingerprints:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gpg --fingerprint [UserID]\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ gpg --fingerprint xxx-yyy\npub   4096R/33DBF2E0 2018-12-06\n      Key fingerprint = 07AA E690 B01D 1A4B 469B  0BEF 5E29 CE39 33DB F2E0\nuid                  xxx-yyy (xxx's key) <xxx@apache.org>\nsub   4096R/0E8182E6 2018-12-06\n")])])]),t("p",[e._v("Paste the fingerprint above (i.e. 07AA E690 B01D 1A4B 469B 0BEF 5E29 CE39 33DB F2E0) into your user information:")]),e._v(" "),t("p",[e._v("https://id.apache.org\nOpenPGP Public Key Primary Fingerprint:")]),e._v(" "),t("h4",{attrs:{id:"generating-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generating-keys"}},[e._v("#")]),e._v(" Generating keys")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('svn co //dist.apache.org/repos/dist/dev/incubator/doris/\n# edit doris/KEY file\ngpg --list-sigs [用户 ID] >> doris/KEYS\ngpg --armor --export [用户 ID] >> doris/KEYS\nsvn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m"Update KEYS"\n')])])]),t("h2",{attrs:{id:"prepare-for-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-for-release"}},[e._v("#")]),e._v(" Prepare for release")]),e._v(" "),t("h3",{attrs:{id:"launching-discuss-in-the-community"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#launching-discuss-in-the-community"}},[e._v("#")]),e._v(" Launching DISCUSS in the Community")]),e._v(" "),t("p",[e._v("If you think you've fixed a lot of bugs and developed more important features, any IPMC member can initiate DISCUSS discussions to release a new version.\nAn e-mail entitled [DISCUSS] x.y.z release can be launched to discuss within the community what bugs have been fixed and what features have been developed.\nIf DISCUSS mail is supported, we can proceed to the next step.")]),e._v(" "),t("h3",{attrs:{id:"preparatory-branch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparatory-branch"}},[e._v("#")]),e._v(" Preparatory Branch")]),e._v(" "),t("p",[e._v("Before publishing, we need to build a new branch, For example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git checkout -b branch-0.9\n\n")])])]),t("p",[e._v("This branch needs to be fully tested to make functions available, bug convergence, and important bugs fixed.")]),e._v(" "),t("p",[e._v("This process needs to wait for the community to see if a necessary patch needs to be merged in this version, and if so, it needs to be cherry picked to the release branch.")]),e._v(" "),t("h3",{attrs:{id:"clean-up-issue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clean-up-issue"}},[e._v("#")]),e._v(" clean up issue")]),e._v(" "),t("p",[e._v("Go through all the issues belonging to this version, close those that have been completed, and if they cannot be completed, postpone them to a later version.")]),e._v(" "),t("h3",{attrs:{id:"merge-necessary-patches"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merge-necessary-patches"}},[e._v("#")]),e._v(" Merge necessary patches")]),e._v(" "),t("p",[e._v("During the release waiting process, there may be more important patch merging. If someone in the community says that there is an important bug to merge, then release manager needs to evaluate and merge the important patches into the release branch.")]),e._v(" "),t("h2",{attrs:{id:"running-the-voting-process-for-a-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-the-voting-process-for-a-release"}},[e._v("#")]),e._v(" Running the voting process for a release")]),e._v(" "),t("h3",{attrs:{id:"dozen-tags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dozen-tags"}},[e._v("#")]),e._v(" dozen Tags")]),e._v(" "),t("p",[e._v("When the above branches are stable, tags can be made on them.\nRemember to modify the "),t("code",[e._v("build_version")]),e._v(" variable in "),t("code",[e._v("gensrc/script/gen_build_version.sh")]),e._v(" when creating tags. For example, "),t("code",[e._v("build_version='0.10.0-release'.")])]),e._v(" "),t("p",[e._v("For example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ git checkout branch-0.9\n$ git tag -a 0.9.0-rc01 -m "0.9.0 release candidate 01"\n$ git push origin 0.9.0-rc01\nCounting objects: 1, done.\nWriting objects: 100% (1/1), 165 bytes | 0 bytes/s, done.\nTotal 1 (delta 0), reused 0 (delta 0)\nTo git@github.com:apache/incubator-doris.git\n * [new tag]         0.9.0-rc01 -> 0.9.0-rc01\n\n$ git tag\n')])])]),t("h3",{attrs:{id:"packing-signature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#packing-signature"}},[e._v("#")]),e._v(" Packing Signature")]),e._v(" "),t("p",[e._v("The following steps also need to log into user accounts directly through terminals such as SecureCRT, and can not be transferred through Su - user or ssh, otherwise the password input box will not show and error will be reported.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ git checkout 0.9.0-rc01\n\n$ git archive --format=tar 0.9.0-rc01 --prefix=apache-doris-0.9.0-incubating-src/ | gzip > apache-doris-0.9.0-incubating-src.tar.gz\n\n$ gpg -u xxx@apache.org --armor --output apache-doris-0.9.0-incubating-src.tar.gz.asc --detach-sign apache-doris-0.9.0-incubating-src.tar.gz\n\n$ gpg --verify apache-doris-0.9.0-incubating-src.tar.gz.asc apache-doris-0.9.0-incubating-src.tar.gz\n\n$ sha512sum apache-doris-0.9.0-incubating-src.tar.gz > apache-doris-0.9.0-incubating-src.tar.gz.sha512\n\n$ sha512sum --check apache-doris-0.9.0-incubating-src.tar.gz.sha512\n")])])]),t("h3",{attrs:{id:"upload-signature-packages-and-keys-files-to-dev-svn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upload-signature-packages-and-keys-files-to-dev-svn"}},[e._v("#")]),e._v(" Upload signature packages and KEYS files to DEV SVN")]),e._v(" "),t("p",[e._v("First, download the SVN library:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("svn co https://dist.apache.org/repos/dist/dev/incubator/doris/\n")])])]),t("p",[e._v("Organize all previous files into the following SVN paths")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./doris/\n|-- 0.11.0-rc1\n|   |-- apache-doris-0.11.0-incubating-src.tar.gz\n|   |-- apache-doris-0.11.0-incubating-src.tar.gz.asc\n|   `-- apache-doris-0.11.0-incubating-src.tar.gz.sha512\n`-- KEYS\n")])])]),t("p",[e._v("Upload these files")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('svn add 0.9.0-rc1\nsvn commit -m "Release Apache Doris (incubating) 0.9.0 rc1"\n')])])]),t("h3",{attrs:{id:"send-community-voting-emails"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-community-voting-emails"}},[e._v("#")]),e._v(" Send community voting emails")]),e._v(" "),t("p",[e._v("[VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hi all,\n\nPlease review and vote on Apache Doris 0.9.0-incubating-rc01 release.\n\nThe release candidate has been tagged in GitHub as 0.9.0-rc01, available\nhere:\nhttps://github.com/apache/incubator-doris/releases/tag/0.9.0-rc01\n\n===== CHANGE LOG =====\n\nNew Features:\n....\n\n======================\n\nThanks to everyone who has contributed to this release.\n\nThe artifacts (source, signature and checksum) corresponding to this release\ncandidate can be found here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc1/\n\nThis has been signed with PGP key 33DBF2E0, corresponding to\nlide@apache.org.\nKEYS file is available here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/KEYS\nIt is also listed here:\nhttps://people.apache.org/keys/committer/lide.asc\n\nTo verify and build, you can refer to following wiki:\nhttps://github.com/apache/incubator-doris/wiki/How-to-verify-Apache-Release\nhttps://wiki.apache.org/incubator/IncubatorReleaseChecklist\n\nThe vote will be open for at least 72 hours.\n[ ] +1 Approve the release\n[ ] +0 No opinion\n[ ] -1 Do not release this package because ...\n\nBest Regards,\nxxx\n\n----\nDISCLAIMER-WIP: \nApache Doris is an effort undergoing incubation at The Apache Software Foundation (ASF), \nsponsored by the Apache Incubator. Incubation is required of all newly accepted projects \nuntil a further review indicates that the infrastructure, communications, and decision \nmaking process have stabilized in a manner consistent with other successful ASF projects. \nWhile incubation status is not necessarily a reflection of the completeness or stability \nof the code, it does indicate that the project has yet to be fully endorsed by the ASF.\n\nSome of the incubating project’s releases may not be fully compliant with ASF policy. For \nexample, releases may have incomplete or un-reviewed licensing conditions. What follows is \na list of known issues the project is currently aware of (note that this list, by definition, \nis likely to be incomplete): \n\n * Releases may have incomplete licensing conditions\n\nIf you are planning to incorporate this work into your product/project, please be aware that\nyou will need to conduct a thorough licensing review to determine the overall implications of \nincluding this work. For the current status of this project through the Apache Incubator \nvisit: https://incubator.apache.org/projects/doris.html\n")])])]),t("h3",{attrs:{id:"email-result-after-the-vote-is-passed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#email-result-after-the-vote-is-passed"}},[e._v("#")]),e._v(" Email Result after the vote is passed")]),e._v(" "),t("p",[e._v("[Result][VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Thanks to everyone, and this vote is now closed.\n\nIt has passed with 4 +1 (binding) votes and no 0 or -1 votes.\n\nBinding:\nZhao Chun\n+1 xxx\n+ 1 Li Chaoyong\n+1 Mingyu Chen\n\nBest Regards,\nxxx\n\n")])])]),t("h3",{attrs:{id:"send-an-e-mail-to-general-incubator-apache-org-for-a-vote"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-an-e-mail-to-general-incubator-apache-org-for-a-vote"}},[e._v("#")]),e._v(" Send an e-mail to general@incubator.apache.org for a vote.")]),e._v(" "),t("p",[e._v("[VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hi all,\n\nPlease review and vote on Apache Doris 0.9.0-incubating-rc01 release.\n\nApache Doris is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe Apache Doris community has voted on and approved this release:\nhttps://lists.apache.org/thread.html/d70f7c8a8ae448bf6680a15914646005c6483564464cfa15f4ddc2fc@%3Cdev.doris.apache.org%3E\n\nThe vote result email thread:\nhttps://lists.apache.org/thread.html/64d229f0ba15d66adc83306bc8d7b7ccd5910ecb7e842718ce6a61da@%3Cdev.doris.apache.org%3E\n\nThe release candidate has been tagged in GitHub as 0.9.0-rc01, available here:\nhttps://github.com/apache/incubator-doris/releases/tag/0.9.0-rc01\n\nThere is no CHANGE LOG file because this is the first release of Apache Doris.\nThanks to everyone who has contributed to this release, and there is a simple release notes can be found here:\nhttps://github.com/apache/incubator-doris/issues/406\n\nThe artifacts (source, signature and checksum) corresponding to this release candidate can be found here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc01/\n\nThis has been signed with PGP key 33DBF2E0, corresponding to lide@apache.org.\nKEYS file is available here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/KEYS\nIt is also listed here:\nhttps://people.apache.org/keys/committer/lide.asc\n\nThe vote will be open for at least 72 hours.\n[ ] +1 Approve the release\n[ ] +0 No opinion\n[ ] -1 Do not release this package because ...\n\nTo verify and build, you can refer to following instruction:\n\nFirstly, you must be install and start docker service, and then you could build Doris as following steps:\n\nStep1: Pull the docker image with Doris building environment\n$ docker pull apachedoris/doris-dev:build-env\nYou can check it by listing images, its size is about 3.28GB.\n\nStep2: Run the Docker image\nYou can run image directly:\n$ docker run -it apachedoris/doris-dev:build-env\n\nStep3: Download Doris source\nNow you should in docker environment, and you can download Doris source package.\n(If you have downloaded source and it is not in image, you can map its path to image in Step2.)\n$ wget https://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc01/apache-doris-0.9.0.rc01-incubating-src.tar.gz\n\nStep4: Build Doris\nNow you can decompress and enter Doris source path and build Doris.\n$ tar zxvf apache-doris-0.9.0.rc01-incubating-src.tar.gz\n$ cd apache-doris-0.9.0.rc01-incubating-src\n$ sh build.sh\n\nBest Regards,\nxxx\n\n----\nDISCLAIMER-WIP: \nApache Doris is an effort undergoing incubation at The Apache Software Foundation (ASF), \nsponsored by the Apache Incubator. Incubation is required of all newly accepted projects \nuntil a further review indicates that the infrastructure, communications, and decision \nmaking process have stabilized in a manner consistent with other successful ASF projects. \nWhile incubation status is not necessarily a reflection of the completeness or stability \nof the code, it does indicate that the project has yet to be fully endorsed by the ASF.\n\nSome of the incubating project’s releases may not be fully compliant with ASF policy. For \nexample, releases may have incomplete or un-reviewed licensing conditions. What follows is \na list of known issues the project is currently aware of (note that this list, by definition, \nis likely to be incomplete): \n\n * Releases may have incomplete licensing conditions\n\nIf you are planning to incorporate this work into your product/project, please be aware that\nyou will need to conduct a thorough licensing review to determine the overall implications of \nincluding this work. For the current status of this project through the Apache Incubator \nvisit: https://incubator.apache.org/projects/doris.html\n")])])]),t("p",[e._v("The threaded connection for mail can be found here:")]),e._v(" "),t("p",[t("code",[e._v("https://lists.apache.org/list.html?dev@doris.apache.org")])]),e._v(" "),t("h3",{attrs:{id:"email-result-to-general-incubator-apache-org"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#email-result-to-general-incubator-apache-org"}},[e._v("#")]),e._v(" Email Result to general@incubator.apache.org")]),e._v(" "),t("p",[e._v("[RESULT][VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hi,\n\nThanks to everyone, and the vote for releasing Apache Doris 0.9.0-incubating-rc01 is now closed.\n\nIt has passed with 4 +1 (binding) votes and no 0 or -1 votes.\n\nBinding:\n+1 Willem Jiang\n+1 Justin Mclean\n+1 ShaoFeng Shi\n+1 Makoto Yui\n\nThe vote thread:\nhttps://lists.apache.org/thread.html/da05fdd8d84e35de527f27200b5690d7811a1e97d419d1ea66562130@%3Cgeneral.incubator.apache.org%3E\n\nBest Regards,\nxxx\n")])])]),t("h2",{attrs:{id:"finalizing-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finalizing-release"}},[e._v("#")]),e._v(" Finalizing release")]),e._v(" "),t("h3",{attrs:{id:"upload-package-to-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upload-package-to-release"}},[e._v("#")]),e._v(" Upload package to release")]),e._v(" "),t("p",[e._v("When the formal voting is successful, email [Result] first, and then prepare the release package.\nCopy the source package, signature file and hash file from the corresponding RC folder published under dev to another directory 0.9.0-incubating. Note that the file name does not need rcxx (rename, but do not recalculate signatures, hash can recalculate, the results will not change)")]),e._v(" "),t("p",[e._v("KEYS files also need to be copied if they are first released. Then add to SVN release.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nhttps://dist.apache.org/repos/dist/release/incubator/doris/0.9.0-incubating/\n\nEventually you can see it on apache's website:\nhttp://www.apache.org/dist/incubator/doris/0.9.0-incubating/\n\n")])])]),t("h3",{attrs:{id:"send-announce-e-mail-to-general-incubator-apache-org"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-announce-e-mail-to-general-incubator-apache-org"}},[e._v("#")]),e._v(" Send Announce e-mail to general@incubator.apache.org")]),e._v(" "),t("p",[e._v("Title:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[ANNOUNCE] Apache Doris (incubating) 0.9.0 Release\n")])])]),t("p",[e._v("Send mail group:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("general@incubator.apache.org <general@incubator.apache.org >\ndev@doris.apache.org <dev@doris.apache.org >\n")])])]),t("p",[e._v("Mail text:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hi All,\n\nWe are pleased to announce the release of Apache Doris 0.9.0-incubating.\n\nApache Doris (incubating) is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe release is available at:\nhttp://doris.apache.org/downloads.html\n\nThanks to everyone who has contributed to this release, and the release note can be found here:\nhttps://github.com/apache/incubator-doris/releases\n\nBest Regards,\n\nOn behalf of the Doris team,\nxxx\n\n----\nDISCLAIMER-WIP: \nApache Doris is an effort undergoing incubation at The Apache Software Foundation (ASF), \nsponsored by the Apache Incubator. Incubation is required of all newly accepted projects \nuntil a further review indicates that the infrastructure, communications, and decision \nmaking process have stabilized in a manner consistent with other successful ASF projects. \nWhile incubation status is not necessarily a reflection of the completeness or stability \nof the code, it does indicate that the project has yet to be fully endorsed by the ASF.\n\nSome of the incubating project’s releases may not be fully compliant with ASF policy. For \nexample, releases may have incomplete or un-reviewed licensing conditions. What follows is \na list of known issues the project is currently aware of (note that this list, by definition, \nis likely to be incomplete): \n\n * Releases may have incomplete licensing conditions\n\nIf you are planning to incorporate this work into your product/project, please be aware that\nyou will need to conduct a thorough licensing review to determine the overall implications of \nincluding this work. For the current status of this project through the Apache Incubator \nvisit: https://incubator.apache.org/projects/doris.html\n\n")])])]),t("h3",{attrs:{id:"publish-links-on-doris-website-and-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publish-links-on-doris-website-and-github"}},[e._v("#")]),e._v(" Publish links on Doris website and GitHub")]),e._v(" "),t("h4",{attrs:{id:"create-download-links"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-download-links"}},[e._v("#")]),e._v(" Create Download Links")]),e._v(" "),t("p",[e._v("Download link:\nhttp://www.apache.org/dyn/closer.cgi?filename=incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz&action=download")]),e._v(" "),t("p",[e._v('wget --trust-server-names "https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz"')]),e._v(" "),t("p",[e._v("Original location:\nhttps://www.apache.org/dist/incubator/doris/0.9.0-incubating/")]),e._v(" "),t("p",[e._v("http://www.apache.org/dyn/closer.cgi/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz")]),e._v(" "),t("p",[e._v("Source package:\nhttp://www.apache.org/dyn/closer.cgi/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz")]),e._v(" "),t("p",[e._v("ASC:\nhttp://archive.apache.org/dist/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz.asc")]),e._v(" "),t("p",[e._v("sha512:\nhttp://archive.apache.org/dist/incubator/doris/0.9.0-incubating/apache-doris-0.9.0-incubating-src.tar.gz.sha512")]),e._v(" "),t("p",[e._v("KEYS:\nhttp://archive.apache.org /dist /incubator /doris /KEYS")]),e._v(" "),t("p",[e._v("refer to: "),t("a",{attrs:{href:"http://www.apache.org/dev/release-download-pages#closer",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.apache.org/dev/release-download-pages#closer"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"prepare-release-note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-release-note"}},[e._v("#")]),e._v(" Prepare release note")]),e._v(" "),t("p",[e._v("The following two areas need to be modified:")]),e._v(" "),t("ol",[t("li",[e._v("Github's release page")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://github.com/apache/incubator-doris/releases/tag/0.9.0-rc01\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Doris Official Website Download Page")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("http://doris.apache.org /downloads.html\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);