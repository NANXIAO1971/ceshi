{
    "id": "nanxiao1971.app.sub",
    "name": "自用脚本订阅",
    "author": "@NANXIAO1971",
    "icon": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/nxtx.png",
    "repo": "https://github.com/NANXIAO1971/ceshi",
    "apps": [{
            "author": "@sunert", 
            "descs_html": [
            "<h4 align=\"center\">获取Cookie以及脚本配置请查看<a href=\"https://github.com/Sunert/Script/raw/master/TaskConf/youth/readme.md\">配置说明</a></h4>", 
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
        "repo": "https://github.com/Sunert/Script/blob/master/Task/youth.js", 
        "id": "youth", 
        "script": "https://raw.githubusercontent.com/Sunert/Script/master/Task/youth.js", 
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
      "repo": "https://github.com/Sunert/Script/blob/master/Task/youth_gain.js", 
      "id": "youthGain", 
      "script": "https://raw.githubusercontent.com/Sunert/Script/master/Task/youth_gain.js", 
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
      "repo": "https://github.com/Sunert/Script/blob/master/Task/Youth_Read.js", 
      "id": "youthRead", 
      "script": "https://raw.githubusercontent.com/Sunert/Script/master/Task/Youth_Read.js", 
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
            "keys": ["shuqiuserurl", "shuqisyurl", "shuqisybody", "shuqispbody", "shuqiscbody", "shuqiydbody", "shuqiqdbody",   "shuqirwbody", "shuqifxbody", "shuqisprwurl", "shuqijlbody", "shuqisqjlbody", "shuqicjyurl", "shuqicjcsbody", "shuqicjbody", "shuqijsspbody", "shuqijsydurl", "shuqijsydbody", "shuqijsqdbody", "shuqijsqdspyurl", "shuqijsqdspbody",   "shuqijsrwbody", "shuqijsfxbody", "shuqijsbookurl", "shuqijsbookbody", "shuqijssprwurl", "shuqiuserurl2", "shuqisyurl2", "shuqisybody2", "shuqispbody2", "shuqiscbody2", "shuqiydbody2", "shuqiqdbody2", "shuqirwbody2", "shuqifxbody2", "shuqisprwurl2", "shuqijlbody2", "shuqisqjlbody2", "shuqicjyurl2", "shuqicjcsbody2", "shuqicjbody2", "shuqijsspbody2", "shuqijsydurl2", "shuqijsydbody2", "shuqijsqdbody2", "shuqijsqdspyurl2", "shuqijsqdspbody2",   "shuqijsrwbody2", "shuqijsfxbody2", "shuqijsbookurl2", "shuqijsbookbody2", "shuqijssprwurl2", "shuqiuserurl3", "shuqisyurl3", "shuqisybody3", "shuqispbody3", "shuqiscbody3", "shuqiydbody3", "shuqiqdbody3", "shuqirwbody3", "shuqifxbody3", "shuqisprwurl3", "shuqijlbody3", "shuqisqjlbody3", "shuqicjyurl3", "shuqicjcsbody3", "shuqicjbody3", "shuqijsspbody3", "shuqijsydurl3", "shuqijsydbody3", "shuqijsqdbody3", "shuqijsqdspyurl3", "shuqijsqdspbody3", "shuqijsrwbody3", "shuqijsfxbody3", "shuqijsbookurl3", "shuqijsbookbody3", "shuqijssprwurl3", "shuqiuserurl4", "shuqisyurl4", "shuqisybody4", "shuqispbody4", "shuqiscbody4", "shuqiydbody4", "shuqiqdbody4", "shuqirwbody4", "shuqifxbody4", "shuqisprwurl4", "shuqijlbody4", "shuqisqjlbody4", "shuqicjyurl4", "shuqicjcsbody4", "shuqicjbody4", "shuqijsspbody4", "shuqijsydurl4", "shuqijsydbody4", "shuqijsqdbody4", "shuqijsqdspyurl4", "shuqijsqdspbody4", "shuqijsrwbody4", "shuqijsfxbody4", "shuqijsbookurl4", "shuqijsbookbody4", "shuqijssprwurl4"],
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
      "id": "jx_tokens",
      "name": "京喜tokens",
      "keys": ["jx_tokens"],
      "descs_html": [
        "请勿随意在输入框修改内容，建议通过脚本去获取Token，若要修改，请按照 JSON 数组格式修改。",
        "脚本地址【<a href=\"https://github.com/whyour/hundun/blob/master/quanx/jx_tokens.js\">京喜多账号Token获取</a>】,并按照此脚本注释进行配置"
      ],
      "settings": [
        {
          "id": "jx_tokens",
          "name": "Tokens",
          "val": "",
          "type": "textarea",
          "autoGrow": true,
          "rows": 8,
          "desc": "Tokens 列表 (JSON 数组格式)"
        }
      ],
      "author": "@whyour",
      "repo": "https://github.com/whyour/hundun/blob/master/quanx/jx_tokens.js",
      "script": "https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_tokens.js",
      "icons": [
        "https://raw.githubusercontent.com/58xinian/icon/master/jx_sign_mini.png",
        "https://raw.githubusercontent.com/58xinian/icon/master/jx_sign.png"
      ]
    },
    {
      "author": "@sunert", 
      "keys": [
        "jukan_body", 
        "jukan_name"
      ], 
      "repo": "https://github.com/Sunert/Script/blob/master/Task/jukan.js", 
      "id": "jukan", 
      "script": "https://raw.githubusercontent.com/Sunert/Script/master/Task/jukan.js", 
      "settings": [
        {
          "id": "jukan_out", 
          "val": false, 
          "name": "自动提现", 
          "type": "boolean", 
          "desc": "自动提现开关，请填入提现金额及微信绑定实名，默认关闭"
        }, 
        {
          "id": "jukan_cash", 
          "val": "", 
          "name": "提现金额", 
          "type": "radios", 
          "items": [
            {
              "key": "3", 
              "label": "3元(邀请专享)"
            }, 
            {
              "key": "10", 
              "label": "10元(阅读/邀请)"
            }, 
            {
              "key": "30", 
              "label": "30元(无条件)"
            }, 
            {
              "key": "50", 
              "label": "50元(无条件)"
            }, 
            {
              "key": "100", 
              "label": "100元(无条件)"
            }
          ]
        }, 
        {
          "id": "jukan_name", 
          "placeholder": "填入微信真实姓名", 
          "val": "", 
          "name": "微信真实姓名", 
          "type": "text"
        }
      ], 
      "name": "聚看点", 
      "icons": [
        "https://cdn.jsdelivr.net/gh/Sunert/Profiles@master/QuantumultX/Rules/Images/icon/jukan_mini.png", 
        "https://cdn.jsdelivr.net/gh/Sunert/Profiles@master/QuantumultX/Rules/Images/icon/jukan.png"
      ]
    },
    {
            "id": "rl",
            "name": "燃旅视频",
            "keys": ["rlurl", "rlurl2", "rlurl3", "rlurl4"],
            "author": "@ziye",
            "settings": [{
                    "id": "rlSuffix",
                    "name": "当前账号",
                    "val": "1",
                    "type": "number",
                    "desc": "当前抓取ck记录的账号序号，如：1、2、3、"
                },
                {
                    "id": "rlCount",
                    "name": "账号个数",
                    "val": "1",
                    "type": "number",
                    "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
                },
                {
                    "id": "rlXH",
                    "name": "循环获取CK",
                    "val": "0",
                    "type": "number",
                    "desc": "0关闭 1开启,默认关闭"
                }, 
                {
                    "id": "rlXYZ",
                    "name": "执行概率",
                    "val": "100",
                    "type": "number",
                    "desc": "0不执行 可设置0-100,默认百分百"
                },
                {
                    "id": "rlnotifyttt",
                    "name": "推送控制",
                    "val": "1",
                    "type": "number",
                    "desc": "0关闭，1推送,默认12点以及23点推送"
                },
                {
                    "id": "rlnotifyInterval",
                    "name": "通知控制",
                    "val": "2",
                    "type": "number",
                    "desc": "0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知 "
                },
                {
                    "id": "rlMinutes",
                    "name": "推送-通知 分钟控制",
                    "val": "10",
                    "type": "number",
                    "desc": "推送以及通知控制在什么分钟段，可设置0-59,默认0到10"
                }],
            "repo": "https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/rl.js",
            "icons": ["https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/rl.png", "https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/rl.png"],
            "script": "https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/rl.js"
        }
    ]
}
