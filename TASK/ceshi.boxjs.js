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
            "id": "yuedongzu",
            "name": "悦动族APP",
            "keys": ["yuedongzutoken", "yuedongzutoken2", "yuedongzutoken3", "yuedongzutoken4", "yuedongzutoken5", "yuedongzutoken6", "yuedongzutoken7", "yuedongzutoken8"],
            "author": "@ziye",
            "settings": [{
                    "id": "yuedongzuSuffix",
                    "name": "当前账号",
                    "val": "1",
                    "type": "number",
                    "desc": "当前抓取ck记录的账号序号，如：1、2、3、"
                },
                {
                    "id": "yuedongzuCount",
                    "name": "账号个数",
                    "val": "1",
                    "type": "number",
                    "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
                },
                {
                    "id": "yuedongzuCASH",
                    "name": "提现标准",
                    "val": "0",
                    "type": "number",
                    "desc": "0不提现，可设置 0 0.3 1 5 50 100 200 888  设置888由上至下循环提现 "
                }
            ],
            "repo": "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/yuedongzu.js",
            "icons": ["https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/yuedongzu.png", "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/yuedongzu.png"],
            "script": "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/yuedongzu.js"
        },
        {
            "id": "qmyd",
            "name": "全民悦动APP",
            "keys": ["qmydtoken", "qmydtoken2", "qmydtoken3", "qmydtoken4", "qmydtoken5", "qmydtoken6", "qmydtoken7", "qmydtoken8"],
            "author": "@ziye",
            "settings": [{
                    "id": "qmydSuffix",
                    "name": "当前账号",
                    "val": "1",
                    "type": "number",
                    "desc": "当前抓取ck记录的账号序号，如：1、2、3、"
                },
                {
                    "id": "qmydCount",
                    "name": "账号个数",
                    "val": "1",
                    "type": "number",
                    "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
                },
                {
                    "id": "qmydCASH",
                    "name": "提现标准",
                    "val": "0",
                    "type": "number",
                    "desc": "0不提现，可设置 0 0.3 1 10 20 30 100 200 300 888  设置888由上至下循环提现 "
                }
            ],
            "repo": "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/qmyd.js",
            "icons": ["https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/qmyd.png", "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/qmyd.png"],
            "script": "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/qmyd.js"
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
            "id": "fqkk",
            "name": "番茄看看",
            "keys": ["fqkk"],
            "author": "@feizao",
            "settings": [{
                    "id": "fqkkCkMove",
                    "val": "",
                    "name": "迁移旧数据",
                    "type": "boolean",
                    "desc": "开启该选项，执行一次脚本可将原有ck转换为此脚本可用的格式"
                }, 
                {
                    "id": "fqkkConcurrency",
                    "val": "1",
                    "name": "并发执行账号数",
                    "type": "text",
                    "desc": "默认单账号跑任务，指定大于1的数值时，将并发执行多个账号的任务，请勿设置过大，避免NE工具崩溃（太大估计会崩溃吧）"
                }, 
                {
                    "id": "fqtx",
                    "name": "提现金额",
                    "val": "100",
                    "type": "number",
                    "desc": "需要自动提现多少，数字为金额的一百倍，如提现0.3元填写30，默认100为提现1元,最低提现额度为0.3元"
                }, 
                {
                    "id": "fqkk",
                    "name": "CK 列表",
                    "val": "",
                    "type": "textarea",
                    "autoGrow": true,
                    "rows": 8,
                    "desc": "番茄看看CK 列表 (JSON 格式)"
                }
            ],
            "repo": "https://raw.githubusercontent.com/NANXIAO1971/FQKK/master/fqkk.js",
            "icons": ["https://ftp.bmp.ovh/imgs/2021/02/f8306006536eb49c.jpeg", "https://ftp.bmp.ovh/imgs/2021/02/f8306006536eb49c.jpeg"],
            "script": "https://raw.githubusercontent.com/NANXIAO1971/FQKK/master/fqkk.js"
        },
        {
            "id": "ysm",
            "name": "云扫码",
            "keys": ["ysm"],
            "author": "@feizao",
            "descs_html": [
              "优化后的脚本存储ck的数据结构跟原先的不同，需要转换下或重新抓数据",
              "转换步骤：1、NE工具（QX、Loon、Surge）中进入脚本编辑界面，手动修改变量 moveData=1 后直接执行一次即可",
              "抓包备注：1、脚本已根据ck数据中的账户特征做区分，无需指定抓包账户及账户个数；2、扫码进入云扫码主页面后即可抓到脚本所需的全部数据"
            ],
            "settings": [{
                "id": "ysmNotice",
                "val": "",
                "name": "是否通知",
                "type": "boolean",
                "desc": "开启该选项时，脚本执行完会发通知，否则只打印日志"
              }, {
                "id": "ysmBanfirstTask",
                "val": "",
                "name": "限制脚本跑每日首次任务",
                "type": "boolean",
                "desc": "开启该选项时，每需手动阅读一次文章后脚本才能正常执行任务，尽量避免因脚本跑首次任务遭微信限制的情况"
              }, {
                "id": "ysmBanhalfTask",
                "val": "",
                "name": "限制脚本跑每日第50篇任务",
                "type": "boolean",
                "desc": "开启该选项时，脚本做完第50篇任务时会自动结束任务，可手动去阅读2篇避免被限制或再次运行脚本可继续做其余任务"
              }, {
                "id": "ysmConcurrency",
                "val": "1",
                "name": "并发执行账号数",
                "type": "text",
                "desc": "默认单账号跑任务，指定大于1的数值时，将并发执行多个账号的任务，请勿设置过大，避免NE工具崩溃（太大估计会崩溃吧）"
              }, {
                "id": "ysmtxAmt",
                "name": "提现金额",
                "val": "3000",
                "type": "number",
                "desc": "需要自动提现多少，数字为金额的一万倍，如提现1元填写10000，默认提现0.3,最低提现额度为0.3元"
                }, {
                  "id": "ysm",
                  "name": "CK 列表",
                  "val": "",
                  "type": "textarea",
                  "rows": 8,
                  "desc": "云扫码CK 列表 (JSON 格式)"
              }],
            "repo": "https://github.com/NANXIAO1971/ceshi/blob/main/qx/ysmxf.js",
            "icons": ["https://raw.githubusercontent.com/erdongchanyo/icon/main/taskicon/Yunsaoma.png", "https://raw.githubusercontent.com/erdongchanyo/icon/main/taskicon/Yunsaoma.png"],
            "script": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/ysmxf.js"
    	 } ,
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
    "id": "dyjsb",
    "name": "抖音极速版",
    "keys": ["signheader", "signcookie", "stepheader", "stepkey", "readheader", "readkey","signheader2", "signcookie2", "stepheader2", "stepkey2", "readheader2", "readkey2"],
    "author": "@ZhiYi-N",
    "settings": [{
            "id": "dyhost",
            "name": "抖音极速版域名",
            "val": "",
            "type": "string",
            "desc": ""
        },
         {
        "id": "dyjsbaccount0",
        "name": "支付宝账号1",
        "val": "0",
        "type": "number",
        "desc": "测试的为手机号，邮箱不知道（为适应for循环，被迫命名dyjsbaccount0）"
      },
          {
        "id": "dyjsbaccount1",
        "name": "支付宝账号2",
        "val": "0",
        "type": "number",
        "desc": "测试的为手机号，邮箱不知道"
      },
         {
            "id": "tz",
            "name": "静默运行",
            "val": "1",
            "type": "number",
            "desc": "0为不通知，1为全部通知"
        },
      {
        "id": "dyjsbsetting",
        "name": "当前账号",
        "val": "1",
        "type": "number",
        "desc": "当前账号对应"
      }, 
      {
        "id": "dyjsbcount",
        "name": "账号个数",
        "val": "1",
        "type": "number",
        "desc": "需要几个账号，数字为几"
      }],
    "repo": "https://github.com/ZhiYi-N/Private-Script/blob/master/Scripts/dyjsb.js",
    "icons": ["https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/img/dyjsb-mini.png", "https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/img/dyjsb.png"],
    "script": "https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/dyjsb.js"
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
            "id": "xbgg",
            "name": "讯播广告",
            "keys": ["xbggurl","xbgghd", "xbggurl2","xbgghd2","xbggurl3","xbgghd3","xbggurl4","xbgghd4","xbggurl5","xbgghd5"],
            "author": "@feizao",
            "settings": [{
            "id": "xbggstatus",
            "name": "当前账号",
            "val": "1",
            "type": "number",
            "desc": "当前账号对应"
    },
    {
            "id": "xbggcount",
            "name": "账号个数",
            "val": "1",
            "type": "number",
            "desc": "需要几个账号，数字为几"
    }],
            "repo": "https://github.com/NANXIAO1971/ceshi/main/qx/xbgg.js",
            "icons": ["https://ae01.alicdn.com/kf/U466ffce93b584c5babd1127f32f5ddebX.jpg", "https://ae01.alicdn.com/kf/U466ffce93b584c5babd1127f32f5ddebX.jpg"],
            "script": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/xbgg.js"
    },
    {
            "id": "yqzh",
            "name": "悦趣赚",
            "keys": ["yqzh"],
            "author": "@feizao",
            "descs_html": [
              "每轮任务跑之前请手动阅读鉴权一次。。否则当天就黑了，如果不小心没鉴权就跑了脚本可以等一个小时后再次鉴权（两次鉴权失败会黑一天）"
            ],
            "settings": [{
                    "id": "yqzhNotice",
                    "val": "",
                    "name": "是否通知",
                    "type": "boolean",
                    "desc": "开启该选项时，脚本执行完会发通知，否则只打印日志"
            }, {
                    "id": "yqzhConcurrency",
                    "val": "1",
                    "name": "并发执行账号数",
                    "type": "text",
                    "desc": "默认单账号跑任务，指定大于1的数值时，将并发执行多个账号的任务，请勿设置过大，避免NE工具崩溃（太大估计会崩溃吧）"
            }],
            "repo": "https://github.com/age174/-/blob/main/yqzh.js",
            "icons": ["https://ae01.alicdn.com/kf/U428ddcb68e304bc0822743cad88f5142n.jpg", "https://ae01.alicdn.com/kf/U428ddcb68e304bc0822743cad88f5142n.jpg"],
            "script": "https://raw.githubusercontent.com/age174/-/main/yqzh.js"
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
    }
  ]
}
