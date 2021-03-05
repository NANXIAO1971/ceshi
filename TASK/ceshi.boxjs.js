{
    "id": "nanxiao1971.app.sub",
    "name": "自用脚本订阅",
    "author": "@NANXIAO1971",
    "icon": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/Quantumult%20X/nxtx.png",
    "repo": "https://github.com/NANXIAO1971",
    "apps": [{
      "id": "iboxpay",
            "name": "笑谱",
            "keys": ["refreshtoken", "refreshtoken2", "refreshtoken3", "refreshtoken4", "refreshtoken5", "refreshtoken6", "refreshtoken7", "refreshtoken8", "refreshtoken9", "refreshtoken10", "refreshtoken11", "refreshtoken12", "refreshtoken13", "refreshtoken14", "refreshtoken15", "refreshtoken16", "refreshtoken17", "refreshtoken18", "refreshtoken19", "refreshtoken20"],
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
                    "val": "0",
                    "type": "number",
                    "desc": "0开启视频，关闭直播，1开启直播，开启视频，2开启直播，关闭视频，666开启直播，开启视频，开启新人180秒任务，888开启直播，开启视频，开启新人2天双倍 "
                },
                {
                    "id": "iboxpayCASH",
                    "name": "提现标准",
                    "val": "0",
                    "type": "number",
                    "desc": "0不提现，可设置 0 1 15 30 100  "
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
            "repo": "https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/iboxpay.js",
            "icons": ["https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/iboxpay.png", "https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/iboxpay.png"],
            "script": "https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/iboxpay.js"
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
            "repo": "https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/bububao.js",
            "icons": ["https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/bububao.png", "https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/bububao.png"],
            "script": "https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/bububao.js"
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
            "repo": "https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/yuedongzu.js",
            "icons": ["https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/yuedongzu.png", "https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/yuedongzu.png"],
            "script": "https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/yuedongzu.js"
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
            "repo": "https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/qmyd.js",
            "icons": ["https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/qmyd.png", "https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/qmyd.png"],
            "script": "https://raw.githubusercontent.com/eml5ZQ/SmF2YVNjcmlwdA/main/Task/yuedongzu.js"
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
            "repo": "https://raw.githubusercontent.com/age174/-/main/ymz.js",
            "icons": ["https://s3.ax1x.com/2021/02/06/yYzYWR.png", "https://s3.ax1x.com/2021/02/06/yYzYWR.png"],
            "script": "https://raw.githubusercontent.com/age174/-/main/ymz.js"
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
            "repo": "https://github.com/age174/-/blob/main/fqkk.js",
            "icons": ["https://ftp.bmp.ovh/imgs/2021/02/f8306006536eb49c.jpeg", "https://ftp.bmp.ovh/imgs/2021/02/f8306006536eb49c.jpeg"],
            "script": "https://raw.githubusercontent.com/age174/-/main/fqkk.js"
        },
        {
            "id": "ysm",
            "name": "云扫码",
            "keys": ["ysmurl", "ysmhd","ysmbody","ysm2body", "ysmtx","ysmurl2", "ysmhd2","ysmbody2","ysm2body2", "ysmtx2","ysmurl3", "ysmhd3","ysmbody3","ysm2body3","ysmtx3","ysmurl4", "ysmhd4","ysmbody4","ysm2body4","ysmtx4"],
            "author": "@feizao",
            "settings": [{
                    "id": "ysmstatus",
                    "name": "当前账号",
                    "val": "1",
                    "type": "number",
                    "desc": "当前账号对应"
                },
                {       
                    "id": "ysmcount",
                    "name": "账号个数",
                    "val": "1",
                    "type": "number",
                    "desc": "需要几个账号，数字为几"
                }
              ],  
              "repo": "https://github.com/age174/-/blob/main/ysm.js",
              "icons": ["https://raw.githubusercontent.com/erdongchanyo/icon/main/taskicon/Yunsaoma.png", "https://raw.githubusercontent.com/erdongchanyo/icon/main/taskicon/Yunsaoma.png"],
              "script": "https://raw.githubusercontent.com/age174/-/main/ysm.js"
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
    }
  ]
}
