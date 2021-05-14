{
    "id": "nanxiao1971.app.sub",
    "name": "自用脚本订阅",
    "author": "@NANXIAO1971",
    "icon": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/nxtx.png",
    "repo": "https://github.com/NANXIAO1971/ceshi",
    "apps": [{
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
            "id": "QQread",
            "name": "QQ阅读APP",
            "keys": ["QQreadurl", "QQreadurl2", "QQreadurl3"],
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
        },
        {
            "id": "wdwhd",
            "name": "我的网红店",
            "keys": ["wdwhdhd","wdwhdbody","wdwhdspbody", "wdwhdhd2","wdwhdbody2","wdwhdspbody2", "wdwhdhd3","wdwhdbody3","wdwhdspbody3", "wdwhdhd4","wdwhdbody4","wdwhdspbody4", "wdwhdhd5","wdwhdbody5","wdwhdspbody5", "wdwhdhd6","wdwhdbody6","wdwhdspbody6"],
            "author": "@feizao",
            "settings": [{
            "id": "wdwhdstatus",
            "name": "当前账号",
            "val": "1",
            "type": "number",
            "desc": "当前账号对应"
    },
    {
            "id": "wdwhdcount",
            "name": "账号个数",
            "val": "1",
            "type": "number",
            "desc": "需要几个账号，数字为几"
    }],
            "repo": "https://github.com/NANXIAO1971/ceshi/blob/main/qx/wdwhd.js",
            "icons": ["https://ae01.alicdn.com/kf/Uc5a0618d6a404079af9216e1012e35efs.jpg", "https://ae01.alicdn.com/kf/Uc5a0618d6a404079af9216e1012e35efs.jpg"],
            "script": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/wdwhd.js"
    }
    ]
}
