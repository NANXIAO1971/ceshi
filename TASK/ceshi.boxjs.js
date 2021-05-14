{
    "id": "nanxiao1971.app.sub",
    "name": "自用脚本订阅",
    "author": "@NANXIAO1971",
    "icon": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/nxtx.png",
    "repo": "https://github.com/NANXIAO1971/ceshi",
    "apps": [{
            "id": "iboxpay",
            "name": "笑谱",
            "keys": ["refreshtoken", "iboxpayvideoheader", "iboxpayvideobody", "refreshtoken2", "iboxpayvideoheader2", "iboxpayvideobody2", "refreshtoken3", "iboxpayvideoheader3", "iboxpayvideobody3", "refreshtoken4", "iboxpayvideoheader4", "iboxpayvideobody4", "refreshtoken5", "iboxpayvideoheader5", "iboxpayvideobody5", "refreshtoken6", "iboxpayvideoheader6", "iboxpayvideobody6"],
            "author": "@ziye",
            "settings": [{
                    "id": "iboxpaySuffix",
                    "name": "当前账号",
                    "val": "1",
                    "type": "number",
                    "desc": "当前抓取ck记录的账号序号，如：1、2、4、"
                },
                {
                    "id": "iboxpayCount",
                    "name": "账号个数",
                    "val": "1",
                    "type": "number",
                    "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
                },
                {
                    "id": "iboxpayLIVE",
                    "name": "任务控制",
                    "val": "1",
                    "type": "number",
                    "desc": "默认为1开启直播，视频请获取ck，设置2关闭视频，新人请设置888"
                },
                {
                    "id": "iboxpayCASH",
                    "name": "提现标准",
                    "val": "0",
                    "type": "number",
                    "desc": "0不提现，可设置 0 1 15 30 100 888 设置888，由大至小循环提现 "
                },
                {
                    "id": "iboxpayphone",
                    "name": "手机号",
                    "val": "0",
                    "type": "number",
                    "desc": "请输入完整手机号"
                },
                {
                    "id": "iboxpaysms",
                    "name": "验证码",
                    "val": "0",
                    "type": "number",
                    "desc": "输入短信验证码，默认为0，不启动获取token功能"
                }
            ],
            "repo": "https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/iboxpay.js",
            "icons": ["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/iboxpay.png", "https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/iboxpay.png"],
            "script": "https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/iboxpay.js"
        },
        {
            "id": "bububao",
            "name": "步步宝APP",
            "keys": ["bububaotoken", "bububaotoken2", "bububaotoken3", "bububaotoken4", "bububaotoken5", "bububaotoken6", "bububaotoken7", "bububaotoken8"],
            "author": "@ziye",
            "settings": [{
                    "id": "bububaoSuffix",
                    "name": "当前账号",
                    "val": "1",
                    "type": "number",
                    "desc": "当前抓取ck记录的账号序号，如：1、2、3、"
                },
                {
                    "id": "bububaoCount",
                    "name": "账号个数",
                    "val": "1",
                    "type": "number",
                    "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
                },
                {
                    "id": "bububaoCASH",
                    "name": "提现标准",
                    "val": "0",
                    "type": "number",
                    "desc": "0不提现，可设置 0 0.3 50 100 200 888  设置888由上至下循环提现 "
                }
            ],
            "repo": "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/bububao.js",
            "icons": ["https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/bububao.png", "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/bububao.png"],
            "script": "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/bububao.js"
        },
        {
            "id": "ymz",
            "name": "羊毛赚",
            "keys": ["ymzurl","ymzhd","ymzbody","ymzbody1"],
            "author": "@feizao",
            "settings": [{
                    "id": "ymzdsetting",
                    "name": "当前账号",
                    "val": "1",
                    "type": "number",
                    "desc": "当前账号对应"
                },
                {
                    "id": "ymzdcount",
                    "name": "账号个数",
                    "val": "1",
                    "type": "number",
                    "desc": "需要几个账号，数字为几"
                }
            ],
            "repo": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/ymz.js",
            "icons": ["https://s3.ax1x.com/2021/02/06/yYzYWR.png", "https://s3.ax1x.com/2021/02/06/yYzYWR.png"],
            "script": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/ymz.js"
        },
        {
            "author": "@sunert", 
            "descs_html": [
            "<h4 align=\"center\">获取Cookie以及脚本配置请查看<a href=\"https://github.com/Sunert/Scripts/raw/master/TaskConf/youth/readme.md\">配置说明</a></h4>", 
            "<br />", 
            "<p>其中<font color='#FF0000',font-weight: bold>zq_nick、zqcash</font>和<font color='#FF0000',font-weight: bold>zqcard</font>为昵称、提现金额和早起打卡开关，无需另外获取，相关项设置后自动生成，cashurl_zq和cashbody_zq为提现请求，获取后方可自动提现，可选</p>"
         ], 
            "keys": [
            "zq_nick", 
            "youthheader_zq", 
            "read_zq", 
            "readtime_zq", 
            "cashurl_zq", 
            "cashbody_zq", 
            "zqcash", 
            "zqcard"
        ], 
        "repo": "https://github.com/Sunert/Scripts/blob/master/Task/youth.js", 
        "id": "youth", 
        "script": "https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js", 
        "settings": [
        {
          "id": "zqcard", 
          "val": "false", 
          "name": "打卡赚钱", 
          "type": "boolean", 
          "desc": "每日打卡报名及早起打卡"
        }, 
        {
          "id": "zqtime", 
          "val": "05", 
          "name": "打卡时间", 
          "type": "number", 
          "desc": "每日早起打卡时间"
        }, 
        {
          "id": "delay_rotary_zq", 
          "val": "10", 
          "name": "转盘时间间隔", 
          "type": "number", 
          "desc": "间隔时间设置，如1秒填1即可"
        }, 
        {
          "id": "notifytimes", 
          "val": "", 
          "name": "通知频率 (点击查看设置说明)", 
          "type": "number", 
          "desc": "设定通知频率，前三次为全部通知，之后转盘次数/设定频率整除时通知，如设置0为无通知，设置1为全部通知，设置其他数可整除余0时通知，默认值50"
        }, 
        {
          "id": "zqcash", 
          "val": "30", 
          "name": "提现金额", 
          "type": "radios", 
          "desc": "自动提现金额需和获取提现请求保持一致", 
          "items": [
            {
              "key": "10", 
              "label": "10元"
            }, 
            {
              "key": "30", 
              "label": "30元"
            }, 
            {
              "key": "100", 
              "label": "100元"
            }
          ]
        }
      ], 
      "name": "中青看点", 
      "icons": [
        "https://cdn.jsdelivr.net/gh/Orz-3/mini@master/Alpha/youth.png", 
        "https://cdn.jsdelivr.net/gh/Orz-3/mini@master/Color/youth.png"
      ]
    },
    {
      "author": "@sunert", 
      "keys": [
        "youth_start", 
        "youth_look"
      ], 
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/youth_gain.js", 
      "id": "youthGain", 
      "script": "https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth_gain.js", 
      "name": "中青浏览赚&看看赚", 
      "icons": [
        "https://cdn.jsdelivr.net/gh/Orz-3/mini@master/Alpha/youth.png", 
        "https://cdn.jsdelivr.net/gh/Orz-3/mini@master/Color/youth.png"
      ]
    },
    {
      "author": "@sunert", 
      "keys": [
        "youth_autoread", 
        "autotime_zq"
      ], 
      "settings": [
      {
          "id": "youth_cut", 
          "val": false, 
          "name": "缩减请求", 
          "type": "boolean", 
          "desc": "自动删除收益为0或者错误的阅读请求，使用完后请立即关闭，避免清空阅读请求"
        }
      ],
      "repo": "https://github.com/Sunert/Scripts/blob/master/Task/Youth_Read.js", 
      "id": "youthRead", 
      "script": "https://raw.githubusercontent.com/Sunert/Scripts/master/Task/Youth_Read.js", 
      "name": "中青自动阅读", 
      "icons": [
        "https://cdn.jsdelivr.net/gh/Orz-3/mini@master/Alpha/youth.png", 
        "https://cdn.jsdelivr.net/gh/Orz-3/mini@master/Color/youth.png"
      ]
    },
    {
      "id": "xmSports",
      "name": "小米运动",
      "keys": [
        "xmSportsToken",
        "xmMinStep",
        "xmMaxStep"
      ],
      "settings": [
        {
          "id": "xmSportsToken",
          "name": "小米运动Token",
          "val": "",
          "type": "text",
          "desc": "小米运动登录时获取的token"
        },
        {
          "id": "xmMinStep",
          "name": "最小运动步数",
          "val": "19000",
          "type": "text",
          "desc": "需要修改最小的运动步数的数字,例如:19000"
        },
        {
          "id": "xmMaxStep",
          "name": "最大运动步数",
          "val": "25000",
          "type": "text",
          "desc": "需要修改最小的运动步数的数字,例如:25000"
        }
      ],
      "author": "@lxk0301",
      "repo": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/xmSports.js",
      "script": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/xmSports.js",
      "icons": [
        "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/xmyd_mini.png",
        "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/xmyd.png"
      ]
    },
    {
            "id": "shuqi",
            "name": "书旗小说APP",
            "keys": ["shuqiuserurl", "shuqisyurl", "shuqisybody", "shuqispbody", "shuqiscbody", "shuqiydbody", "shuqiqdbody",   "shuqirwbody", "shuqifxbody", "shuqisprwurl", "shuqijlbody", "shuqisqjlbody", "shuqicjyurl", "shuqicjcsbody", "shuqicjbody", "shuqijsspbody", "shuqijsydurl", "shuqijsydbody", "shuqijsqdbody", "shuqijsqdspyurl", "shuqijsqdspbody",   "shuqijsrwbody", "shuqijsfxbody", "shuqijsbookurl", "shuqijsbookbody", "shuqijssprwurl", "shuqiuserurl2", "shuqisyurl2", "shuqisybody2", "shuqispbody2", "shuqiscbody2", "shuqiydbody2", "shuqiqdbody2",   "shuqirwbody2", "shuqifxbody2", "shuqisprwurl2", "shuqijlbody2", "shuqisqjlbody2", "shuqicjyurl2", "shuqicjcsbody2", "shuqicjbody2", "shuqijsspbody2", "shuqijsydurl2", "shuqijsydbody2", "shuqijsqdbody2", "shuqijsqdspyurl2", "shuqijsqdspbody2",   "shuqijsrwbody2", "shuqijsfxbody2", "shuqijsbookurl2", "shuqijsbookbody2", "shuqijssprwurl2"],
            "author": "@ziye",
            "settings": [{
                    "id": "shuqiSuffix",
                    "name": "当前账号",
                    "val": "1",
                    "type": "number",
                    "desc": "当前抓取ck记录的账号序号，如：1、2、3、"
                },
                {
                    "id": "shuqiCount",
                    "name": "账号个数",
                    "val": "1",
                    "type": "number",
                    "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
                },
                {
                    "id": "shuqiXH",
                    "name": "循环获取CK",
                    "val": "0",
                    "type": "number",
                    "desc": "0关闭 1开启,默认关闭"
                },
                {
                    "id": "shuqiSC",
                    "name": "单刷时长控制",
                    "val": "0",
                    "type": "number",
                    "desc": "0关闭 1开启,默认关闭"
                },
                {
                    "id": "shuqinotifyttt",
                    "name": "推送控制",
                    "val": "1",
                    "type": "number",
                    "desc": "0关闭，1推送,默认12点以及23点推送"
                },
                {
                    "id": "shuqinotifyInterval",
                    "name": "通知控制",
                    "val": "2",
                    "type": "number",
                    "desc": "0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "
                },
                {
                    "id": "shuqiMinutes",
                    "name": "推送-通知 分钟控制",
                    "val": "10",
                    "type": "number",
                    "desc": "推送以及通知控制在什么分钟段，可设置0-59,默认0到10"
                }
            ],
            "repo": "https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js",
            "icons": ["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png", "https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.png"],
            "script": "https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js"
        }, 
        {
            "id": "vsh",
            "name": "V生活",
            "keys": ["vshurl", "vshhd", "vshbody", "vsh1body","vsh2body", "vshdspbody","vshspbody", "vshqdbody"],
            "author": "@feizao",
            "settings": [{
            "id": "vshstatus",
            "name": "当前账号",
            "val": "1",
            "type": "number",
            "desc": "当前账号对应"
        },
        {
            "id": "vshcount",
            "name": "账号个数",
            "val": "1",
            "type": "number",
            "desc": "需要几个账号，数字为几"
        },
        {
            "id": "vshsp",
            "name": "短视频开关",
            "val": "0",
            "type": "number",
            "desc": "填写0为关闭,1为开启,默认关闭,需要开启的建议先做完日常任务再开始"
        }],
            "repo": "https://github.com/age174/-/blob/main/vsh.js",
            "icons": ["https://ae01.alicdn.com/kf/Uf0da879c7acd4c7bad91f0e5a97667e1O.jpg", "https://ae01.alicdn.com/kf/Uf0da879c7acd4c7bad91f0e5a97667e1O.jpg"],
            "script": "https://raw.githubusercontent.com/age174/-/main/vsh.js"
        },
        {
            "id": "mh",
            "name": "陌嗨视频",
            "keys": ["mhurl", "mhhd","mhurl2","mhhd2","mhurl3","mhhd3","mhurl4","mhhd4","mhurl5", "mhhd5"],
            "author": "@feizao",
            "settings": [{
            "id": "mhstatus",
            "name": "当前账号",
            "val": "1",
            "type": "number",
            "desc": "当前账号对应"
        },
        {
            "id": "mhcount",
            "name": "账号个数",
            "val": "1",
            "type": "number",
            "desc": "需要几个账号，数字为几"
        }],
            "repo": "https://github.com/age174/-/blob/main/mhdsp.js",
            "icons": ["https://raw.githubusercontent.com/usrnb/options/main/QuantumultX/icons/task/mhdsp.png", "https://raw.githubusercontent.com/usrnb/options/main/QuantumultX/icons/task/mhdsp.png"],
            "script": "https://raw.githubusercontent.com/age174/-/main/mhdsp.js"
        },
        {
            "id": "shq",
            "name": "生活圈",
            "keys": ["shqurl", "shqhd", "shqurl2", "shqhd2","shqurl3", "shqhd3","shqurl4", "shqhd4"],
            "author": "@feizao",
            "settings": [{
            "id": "shqstatus",
            "name": "当前账号",
            "val": "1",
            "type": "number",
            "desc": "当前账号对应"
        },
        {
            "id": "shqcount",
            "name": "账号个数",
            "val": "1",
            "type": "number",
            "desc": "需要几个账号，数字为几"
        },
        {
            "id": "nr",
            "name": "自定义评论内容",
            "val": "",
            "type": "string",
            "desc": "填写自定义评论内容后,脚本评论内容为文章标题加上自定义的内容"
        }],
            "repo": "https://github.com/age174/-/blob/main/shq.js",
            "icons": ["https://ftp.bmp.ovh/imgs/2021/04/e2b32e2eb2ad0cd3.png", "https://ftp.bmp.ovh/imgs/2021/04/e2b32e2eb2ad0cd3.png"],
            "script": "https://raw.githubusercontent.com/age174/-/main/shq.js"
        },
        {
            "id": "ximei",
            "name": "西梅",
            "keys": ["ximeiurl", "ximeihd", "ximeiurl2", "ximeihd2","ximeiurl3", "ximeihd3","ximeiurl4", "ximeihd4"],
            "author": "@feizao",
            "settings": [{
            "id": "ximeistatus",
            "name": "当前账号",
            "val": "1",
            "type": "number",
            "desc": "当前账号对应"
        },
        {
            "id": "ximeicount",
            "name": "账号个数",
            "val": "1",
            "type": "number",
            "desc": "需要几个账号，数字为几"
        }],
            "repo": "https://github.com/age174/-/blob/main/ximei.js",
            "icons": ["https://ae01.alicdn.com/kf/Ucd02ea79ef22473daf3576486d134509Q.jpg", "https://ae01.alicdn.com/kf/Ucd02ea79ef22473daf3576486d134509Q.jpg"],
            "script": "https://raw.githubusercontent.com/age174/-/main/ximei.js"
        },
        {
            "id": "qhyd",
            "name": "千禾阅读",
            "keys": ["qhydurl","qhydhd","qhydlqhd","qhydbody","qhydurl2","qhydhd2","qhydlqhd2","qhydbody2"],
            "author": "@feizao",
            "settings": [{
            "id": "qhydstatus",
            "name": "当前账号",
            "val": "1",
            "type": "number",
            "desc": "当前账号对应"
        },
        {
            "id": "qhydcount",
            "name": "账号个数",
            "val": "1",
            "type": "number",
            "desc": "需要几个账号，数字为几"
        }],
            "repo": "https://github.com/age174/-/blob/main/qhyd.js",
            "icons": ["https://ae01.alicdn.com/kf/U413ab7460abb4a28b11deac3c5034243N.jpg", "https://ae01.alicdn.com/kf/U413ab7460abb4a28b11deac3c5034243N.jpg"],
            "script": "https://raw.githubusercontent.com/age174/-/main/qhyd.js"
        },
        {
    "id": "ranlv",
    "name": "燃旅视频",
    "keys": ["rlurl", "rlheader","rlurl2","rlheader2","rlurl3","rlheader3","rlurl4","rlheader4","rlurl5", "rlheader5"],
    "author": "@Ariszy",
    "settings": [{
            "id": "tz",
            "name": "静默运行",
            "val": "1",
            "type": "number",
            "desc": "0为不通知，1为全部通知"
        },
      {
        "id": "rlstatus",
        "name": "当前账号",
        "val": "1",
        "type": "number",
        "desc": "当前账号对应"
      },
       {
        "id": "rlcash",
        "name": "提现金额",
        "val": "0",
        "type": "number",
        "desc": "默认不提现，提现填需要的金额：1、3、10、20、45，建议填3"
      },          
      {
        "id": "rlcount",
        "name": "账号个数",
        "val": "1",
        "type": "number",
        "desc": "需要几个账号，数字为几"
      }],
    "repo": "https://github.com/Ariszy/Private-Script/blob/master/Scripts/ranlv.js",
    "icons": ["https://raw.githubusercontent.com/Ariszy/Private-Script/master/img/rl-mini.png", "https://raw.githubusercontent.com/Ariszy/Private-Script/master/img/rl.png"],
    "script": "https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/ranlv.js"
    },
    {
            "id": "xfyjc",
            "name": "幸福养鸡场",
            "keys": ["xfyjchd"],
            "author": "@feizao",
            "settings": [{
            "id": "xfyjcstatus",
            "name": "当前账号",
            "val": "1",
            "type": "number",
            "desc": "当前账号对应"
    },
    {
            "id": "xfyjccount",
            "name": "账号个数",
            "val": "1",
            "type": "number",
            "desc": "需要几个账号，数字为几"
    }],
            "repo": "https://github.com/age174/-/blob/main/xfyjc.js",
            "icons": ["https://ae01.alicdn.com/kf/Ue110888eddad48a8a78d99284e599b134.jpg", "https://ae01.alicdn.com/kf/Ue110888eddad48a8a78d99284e599b134.jpg"],
            "script": "https://raw.githubusercontent.com/age174/-/main/xfyjc.js"
    },
    {
            "id": "zzsy",
            "name": "招招",
            "keys": ["zzsyhd","zzsybody", "zzsyhd2","zzsybody2","zzsyhd3","zzsybody3","zzsyhd4","zzsybody4","zzsyhd5"],
            "author": "@feizao",
            "settings": [{
            "id": "zzsystatus",
            "name": "当前账号",
            "val": "1",
            "type": "number",
            "desc": "当前账号对应"
    },
    {
            "id": "zzsycount",
            "name": "账号个数",
            "val": "1",
            "type": "number",
            "desc": "需要几个账号，数字为几"
    }],
            "repo": "https://github.com/age174/-/blob/main/zzsy.js",
            "icons": ["https://ae01.alicdn.com/kf/Ub0056a0721e94c9a85a8bbeb2f2aed6fn.jpg", "https://ae01.alicdn.com/kf/Ub0056a0721e94c9a85a8bbeb2f2aed6fn.jpg"],
            "script": "https://raw.githubusercontent.com/age174/-/main/zzsy.js"
    },
    {
            "id": "csxdr",
            "name": "超市小达人",
            "keys": ["csxdrhd","csxdrbody","csxdrspbody", "csxdrhd2","csxdrbody2","csxdrspbody2","csxdrhd3","csxdrbody3","csxdrspbody3","csxdrhd4","csxdrbody4","csxdrspbody4","csxdrhd5","csxdrbody5","csxdrspbody5"],
            "author": "@feizao",
            "settings": [{
            "id": "csxdrstatus",
            "name": "当前账号",
            "val": "1",
            "type": "number",
            "desc": "当前账号对应"
    },
    {
            "id": "csxdrcount",
            "name": "账号个数",
            "val": "1",
            "type": "number",
            "desc": "需要几个账号，数字为几"
    }],
            "repo": "https://github.com/age174/-/blob/main/csxdr.js",
            "icons": ["https://ae01.alicdn.com/kf/Udd9cb36174cf41a7a69e28a643a360a9a.jpg", "https://ae01.alicdn.com/kf/Udd9cb36174cf41a7a69e28a643a360a9a.jpg"],
            "script": "https://raw.githubusercontent.com/age174/-/main/csxdr.js"
    },
    {
            "id": "scdcg",
            "name": "食材大冲关",
            "keys": ["scdcghd","scdcgbody","scdcgspbody","scdcghd2","scdcgbody2","scdcgspbody2","scdcghd3","scdcgbody3","scdcgspbody3","scdcghd4","scdcgbody4","scdcgspbody4","scdcghd5","scdcgbody5","scdcgspbody5"],
            "author": "@feizao",
            "settings": [{
            "id": "scdcgstatus",
            "name": "当前账号",
            "val": "1",
            "type": "number",
            "desc": "当前账号对应"
    },
    {
            "id": "scdcgcount",
            "name": "账号个数",
            "val": "1",
            "type": "number",
            "desc": "需要几个账号，数字为几"
    }],
            "repo": "https://github.com/age174/-/blob/main/scdcg.js",
            "icons": ["https://ae01.alicdn.com/kf/U9f2a16b203ed40318d22f9fd5fdce9a9S.jpg", "https://ae01.alicdn.com/kf/U9f2a16b203ed40318d22f9fd5fdce9a9S.jpg"],
            "script": "https://raw.githubusercontent.com/age174/-/main/scdcg.js"
    },
    {
			"id": "qqreads",
			"name": "QQ阅读多账号管理",
                        "keys": ["qqreadbd1", "qqreadtimeurl1", "qqreadtimehd1","qqreadboxhd1", "qqreadboxurl1","qqreadboxvdurl1", "qqreadboxvdhd1","qqreadbd2", "qqreadtimeurl2", "qqreadtimehd2","qqreadboxhd2", "qqreadboxurl2","qqreadboxvdurl2", "qqreadboxvdhd2"],
			"descs_html": [
        "脚本使用说明：",
        "1.请先配置好本仓库的Cookie重写脚本【<a href=\"https://raw.githubusercontent.com/photonmang/quantumultX/master/config/Cookie.conf\">Cookie.conf</a>】及task脚本【<a href=\"https://raw.githubusercontent.com/photonmang/quantumultX/master/cache/qqreads1.js\">qqreads1.js</a>】",
	"2.请在以下获取账号Cookie中填写您要获取的账号,请填写阿拉伯数字来表示！",			
        "3.进入QQ阅读获取Cookie【<a href=\"http://m.q.qq.com/a/s/a48c89449ec4992000f9ecef1153538e\">点我打开</a>】",
	"4.进书库 看10秒以下 然后退出，看书一定不能超过10秒.获取url,time,body三个更新提醒.",
	"5.循环2-4步骤重新获取下个账号【<a href=\"https://raw.githubusercontent.com/photonmang/quantumultX/master/cache/README.md\">点我查看详细使用说明</a>】",
	"6.新增ck打印，仅方便上传云函数使用，不会用无需设置，请配合Cookie打印脚本【<a href=\"https://raw.githubusercontent.com/photonmang/quantumultX/master/cache/qqreadtest/qqreadckprint.js\">qqreadckprint.js</a>】"
      ],
			"settings": [
				{
      "id": "QQlogs",
      "name": "详细响应日志",
      "val": false,
      "type": "boolean",
      "desc": "打印调试日志, 默认关闭."
    },
				{
					"id": "notifyInterval",
					"name": "默认开启所有通知",
					"val": "1",
					"type": "radios",
					"desc": "请根据实际使用情况选择",
                                        "items": [
            {
              "key": "1",
              "label": "开启通知"
            },
            {
              "key": "2",
              "label": "宝箱领取成功通知"
            },
            {
              "key": "3",
              "label": "宝箱每15次通知一次"
            },
            {
              "key": "4",
              "label": "每晚23点40后显示通知"
            }
            
          ]
				},
                                 {
					"id": "jbid",
					"name": "获取账号Cookie",
					"val": "",
					"type": "number",
					"placeholder": "默认是空值(点击以展开说明)",
					"autoGrow": true,
					"rows": 1,
					"desc": "需要获取第几个账号的Cookie就填写对应的数字，如第1个账号填写1，第2个账号就填写2，依次类推."
				},
				{
					"id": "zhs",
					"name": "输出账号总数",
					"val": "",
					"type": "number",
                                        "placeholder": "默认是空值(点击以展开说明)",
                                        "autoGrow": true,
                                        "rows": 1,
					"desc": "请输入需要执行的账号总数量"
				} ,
				{
					"id": "txje",
					"name": "请选择您的提现金额（默认10元）",
					"val": "100000",
					"type": "radios",
					"desc": "",
                                        "items": [
            {
              "key": "6000",
              "label": "0.6元(仅适用新号第一次提现)"
            },
	     {
              "key": "10000",
              "label": "1元"
            },
            {
              "key": "20000",
              "label": "2元"
            },
            {
              "key": "100000",
              "label": "10元"
            },
            {
              "key": "300000",
              "label": "30元"
            },
            {
              "key": "500000",
              "label": "50元"
            },
            {
              "key": "1000000",
              "label": "100元"
            }
          ]
				},
				{
					"id": "qqStart",
					"name": "打印起始值",
					"val": "",
					"type": "number",
                                        "placeholder": "默认起始打印第一个账号",
                                        "autoGrow": true,
                                        "rows": 1,
					"desc": "此处填写需要打印CK的起始值.如打印从第一个账号开始填写1,从第二个账号开始填写2,以此类推..."
				},
				{
					"id": "qqEnd",
					"name": "打印结束值",
					"val": "",
					"type": "number",
                                        "placeholder": "默认第一个账号为结束打印值",
                                        "autoGrow": true,
                                        "rows": 1,
					"desc": "此处填写需要打印CK的结束值.如账号有5个,需要全部输出,填写5.只需要打印3个账号请输入3."
				},
				{
					"id": "getput",
					"name": "打印body,timeurl,timeheader",
					"val": "1",
					"type": "number",
                                        "placeholder": "默认打印body",
                                        "autoGrow": true,
                                        "rows": 1,
					"desc": "输入1打印body的CK;输入2打印timeurl的CK,输入3打印timeheader的CK."
				}
			],
			"author": "@photonmang",
			"repo": "https://raw.githubusercontent.com/photonmang/quantumultX/master/cache/qqreads.js",
			"icons": ["https://raw.githubusercontent.com/photonmang/quantumultX/master/qqread.jpg","https://raw.githubusercontent.com/photonmang/quantumultX/master/qqread.jpg"]
		},
	     {
            "id": "QQread",
            "name": "QQ阅读APP",
            "keys": ["QQreadurl", "QQreadurl2", "QQreadurl3", "QQreadurl4", "QQreadurl5", "QQreadurl6", "QQreadurl7", "QQreadurl8", "QQreadurl9", "QQreadurl10", "QQreadurl11", "QQreadurl12", "QQreadurl13", "QQreadurl14", "QQreadurl15", "QQreadurl16", "QQreadurl17", "QQreadurl18", "QQreadurl19", "QQreadurl20"],
            "author": "@ziye",
            "settings": [{
                    "id": "QQreadSuffix",
                    "name": "当前账号",
                    "val": "1",
                    "type": "number",
                    "desc": "当前抓取ck记录的账号序号，如：1、2、3、"
                },
                {
                    "id": "QQreadCount",
                    "name": "账号个数",
                    "val": "1",
                    "type": "number",
                    "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
                }
            ],
            "repo": "https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/QQread.js",
            "icons": ["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/QQread.png", "https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/QQread.png"],
            "script": "https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/QQread.js"
        }
    ]
}
