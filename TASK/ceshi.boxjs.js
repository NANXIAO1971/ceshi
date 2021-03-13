{
    "id": "nanxiao1971.app.sub",
    "name": "自用脚本订阅",
    "author": "@NANXIAO1971",
    "icon": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/nxtx.png",
    "repo": "https://github.com/NANXIAO1971/ceshi",
    "apps": [{
      "id": "iboxpay",
            "name": "笑谱",
            "keys": ["refreshtoken", "refreshtoken2", "refreshtoken3", "refreshtoken4", "refreshtoken5", "refreshtoken6", "refreshtoken7", "refreshtoken8"],
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
            "repo": "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/iboxpay.js",
            "icons": ["https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/iboxpay.png", "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/iboxpay.png"],
            "script": "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/iboxpay.js"
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
            "repo": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/yuedongzu.js",
            "icons": ["https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/yuedongzu.png", "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/yuedongzu.png"],
            "script": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/yuedongzu.js"
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
      "repo": "https://github.com/NANXIAO1971/ceshi/blob/main/qx/xmSports.js",
      "script": "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/xmSports.js",
      "icons": [
        "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/xmyd_mini.png",
        "https://raw.githubusercontent.com/NANXIAO1971/ceshi/main/qx/xmyd.png"
      ]
    },
    {
            "id": "shuqi",
            "name": "书旗小说APP",
            "keys": ["shuqiuserurl", "shuqisyurl", "shuqisybody", "shuqispbody", "shuqiscbody", "shuqiydbody", "shuqiqdbody",   "shuqirwbody", "shuqifxbody", "shuqisprwurl", "shuqijlbody", "shuqisqjlbody", "shuqicjyurl", "shuqicjcsbody", "shuqicjbody", "shuqijsspbody", "shuqijsydurl", "shuqijsydbody", "shuqijsqdbody", "shuqijsqdspyurl", "shuqijsqdspbody",   "shuqijsrwbody", "shuqijsfxbody", "shuqijsbookurl", "shuqijsbookbody", "shuqijssprwurl", "shuqiuserurl2", "shuqisyurl2", "shuqisybody2", "shuqispbody2", "shuqiscbody2", "shuqiydbody2", "shuqiqdbody2",   "shuqirwbody2", "shuqifxbody2", "shuqisprwurl2", "shuqijlbody2", "shuqisqjlbody2", "shuqicjyurl2", "shuqicjcsbody2", "shuqicjbody2", "shuqijsspbody2", "shuqijsydurl2", "shuqijsydbody2", "shuqijsqdbody2", "shuqijsqdspyurl2", "shuqijsqdspbody2",   "shuqijsrwbody2", "shuqijsfxbody2", "shuqijsbookurl2", "shuqijsbookbody2", "shuqijssprwurl2", "shuqiuserurl3", "shuqisyurl3", "shuqisybody3", "shuqispbody3", "shuqiscbody3", "shuqiydbody3", "shuqiqdbody3",   "shuqirwbody3", "shuqifxbody3", "shuqisprwurl3", "shuqijlbody3", "shuqisqjlbody3", "shuqicjyurl3", "shuqicjcsbody3", "shuqicjbody3", "shuqijsspbody3", "shuqijsydurl3", "shuqijsydbody3", "shuqijsqdbody3", "shuqijsqdspyurl3", "shuqijsqdspbody3",   "shuqijsrwbody3", "shuqijsfxbody3", "shuqijsbookurl3", "shuqijsbookbody3", "shuqijssprwurl3", "shuqiuserurl4", "shuqisyurl4", "shuqisybody4", "shuqispbody4", "shuqiscbody4", "shuqiydbody4", "shuqiqdbody4",   "shuqirwbody4", "shuqifxbody4", "shuqisprwurl4", "shuqijlbody4", "shuqisqjlbody4", "shuqicjyurl4", "shuqicjcsbody4", "shuqicjbody4", "shuqijsspbody4", "shuqijsydurl4", "shuqijsydbody4", "shuqijsqdbody4", "shuqijsqdspyurl4", "shuqijsqdspbody4",   "shuqijsrwbody4", "shuqijsfxbody4", "shuqijsbookurl4", "shuqijsbookbody4", "shuqijssprwurl4", "shuqiuserurl5", "shuqisyurl5", "shuqisybody5", "shuqispbody5", "shuqiscbody5", "shuqiydbody5", "shuqiqdbody5",   "shuqirwbody5", "shuqifxbody5", "shuqisprwurl5", "shuqijlbody5", "shuqisqjlbody5", "shuqicjyurl5", "shuqicjcsbody5", "shuqicjbody5", "shuqijsspbody5", "shuqijsydurl5", "shuqijsydbody5", "shuqijsqdbody5", "shuqijsqdspyurl5", "shuqijsqdspbody5",   "shuqijsrwbody5", "shuqijsfxbody5", "shuqijsbookurl5", "shuqijsbookbody5", "shuqijssprwurl5", "shuqiuserurl6", "shuqisyurl6", "shuqisybody6", "shuqispbody6", "shuqiscbody6", "shuqiydbody6", "shuqiqdbody6",   "shuqirwbody6", "shuqifxbody6", "shuqisprwurl6", "shuqijlbody6", "shuqisqjlbody6", "shuqicjyurl6", "shuqicjcsbody6", "shuqicjbody6", "shuqijsspbody6", "shuqijsydurl6", "shuqijsydbody6", "shuqijsqdbody6", "shuqijsqdspyurl6", "shuqijsqdspbody6",   "shuqijsrwbody6", "shuqijsfxbody6", "shuqijsbookurl6", "shuqijsbookbody6", "shuqijssprwurl6", "shuqiuserurl7", "shuqisyurl7", "shuqisybody7", "shuqispbody7", "shuqiscbody7", "shuqiydbody7", "shuqiqdbody7",   "shuqirwbody7", "shuqifxbody7", "shuqisprwurl7", "shuqijlbody7", "shuqisqjlbody7", "shuqicjyurl7", "shuqicjcsbody7", "shuqicjbody7", "shuqijsspbody7", "shuqijsydurl7", "shuqijsydbody7", "shuqijsqdbody7", "shuqijsqdspyurl7", "shuqijsqdspbody7",   "shuqijsrwbody7", "shuqijsfxbody7", "shuqijsbookurl7", "shuqijsbookbody7", "shuqijssprwurl7", "shuqiuserurl8", "shuqisyurl8", "shuqisybody8", "shuqispbody8", "shuqiscbody8", "shuqiydbody8", "shuqiqdbody8",   "shuqirwbody8", "shuqifxbody8", "shuqisprwurl8", "shuqijlbody8", "shuqisqjlbody8", "shuqicjyurl8", "shuqicjcsbody8", "shuqicjbody8", "shuqijsspbody8", "shuqijsydurl8", "shuqijsydbody8", "shuqijsqdbody8", "shuqijsqdspyurl8", "shuqijsqdspbody8",   "shuqijsrwbody8", "shuqijsfxbody8", "shuqijsbookurl8", "shuqijsbookbody8", "shuqijssprwurl8", "shuqiuserurl9", "shuqisyurl9", "shuqisybody9", "shuqispbody9", "shuqiscbody9", "shuqiydbody9", "shuqiqdbody9",   "shuqirwbody9", "shuqifxbody9", "shuqisprwurl9", "shuqijlbody9", "shuqisqjlbody9", "shuqicjyurl9", "shuqicjcsbody9", "shuqicjbody9", "shuqijsspbody9", "shuqijsydurl9", "shuqijsydbody9", "shuqijsqdbody9", "shuqijsqdspyurl9", "shuqijsqdspbody9",   "shuqijsrwbody9", "shuqijsfxbody9", "shuqijsbookurl9", "shuqijsbookbody9", "shuqijssprwurl9", "shuqiuserurl10", "shuqisyurl10", "shuqisybody10", "shuqispbody10", "shuqiscbody10", "shuqiydbody10", "shuqiqdbody10",   "shuqirwbody10", "shuqifxbody10", "shuqisprwurl10", "shuqijlbody10", "shuqisqjlbody10",  "shuqicjyurl10", "shuqicjcsbody10", "shuqicjbody10", "shuqijsspbody10", "shuqijsydurl10", "shuqijsydbody10", "shuqijsqdbody10", "shuqijsqdspyurl10", "shuqijsqdspbody10",   "shuqijsrwbody10", "shuqijsfxbody10", "shuqijsbookurl10", "shuqijsbookbody10", "shuqijssprwurl10", "shuqiuserurl11", "shuqisyurl11", "shuqisybody11", "shuqispbody11", "shuqiscbody11", "shuqiydbody11", "shuqiqdbody11",   "shuqirwbody11", "shuqifxbody11", "shuqisprwurl11", "shuqijlbody11", "shuqisqjlbody11",  "shuqicjyurl11", "shuqicjcsbody11", "shuqicjbody11", "shuqijsspbody11", "shuqijsydurl11", "shuqijsydbody11", "shuqijsqdbody11", "shuqijsqdspyurl11", "shuqijsqdspbody11",   "shuqijsrwbody11", "shuqijsfxbody11", "shuqijsbookurl11", "shuqijsbookbody11", "shuqijssprwurl11", "shuqiuserurl12", "shuqisyurl12", "shuqisybody12", "shuqispbody12", "shuqiscbody12", "shuqiydbody12", "shuqiqdbody12",   "shuqirwbody12", "shuqifxbody12", "shuqisprwurl12", "shuqijlbody12", "shuqisqjlbody12",  "shuqicjyurl12", "shuqicjcsbody12", "shuqicjbody12", "shuqijsspbody12", "shuqijsydurl12", "shuqijsydbody12", "shuqijsqdbody12", "shuqijsqdspyurl12", "shuqijsqdspbody12",   "shuqijsrwbody12", "shuqijsfxbody12", "shuqijsbookurl12", "shuqijsbookbody12", "shuqijssprwurl12", "shuqiuserurl13", "shuqisyurl13", "shuqisybody13", "shuqispbody13", "shuqiscbody13", "shuqiydbody13", "shuqiqdbody13",   "shuqirwbody13", "shuqifxbody13", "shuqisprwurl13", "shuqijlbody13", "shuqisqjlbody13",  "shuqicjyurl13", "shuqicjcsbody13", "shuqicjbody13", "shuqijsspbody13", "shuqijsydurl13", "shuqijsydbody13", "shuqijsqdbody13", "shuqijsqdspyurl13", "shuqijsqdspbody13",   "shuqijsrwbody13", "shuqijsfxbody13", "shuqijsbookurl13", "shuqijsbookbody13", "shuqijssprwurl13", "shuqiuserurl14", "shuqisyurl14", "shuqisybody14", "shuqispbody14", "shuqiscbody14", "shuqiydbody14", "shuqiqdbody14",   "shuqirwbody14", "shuqifxbody14", "shuqisprwurl14", "shuqijlbody14", "shuqisqjlbody14",  "shuqicjyurl14", "shuqicjcsbody14", "shuqicjbody14", "shuqijsspbody14", "shuqijsydurl14", "shuqijsydbody14", "shuqijsqdbody14", "shuqijsqdspyurl14", "shuqijsqdspbody14",   "shuqijsrwbody14", "shuqijsfxbody14", "shuqijsbookurl14", "shuqijsbookbody14", "shuqijssprwurl14", "shuqiuserurl15", "shuqisyurl15", "shuqisybody15", "shuqispbody15", "shuqiscbody15", "shuqiydbody15", "shuqiqdbody15",   "shuqirwbody15", "shuqifxbody15", "shuqisprwurl15", "shuqijlbody15", "shuqisqjlbody15",  "shuqicjyurl15", "shuqicjcsbody15", "shuqicjbody15", "shuqijsspbody15", "shuqijsydurl15", "shuqijsydbody15", "shuqijsqdbody15", "shuqijsqdspyurl15", "shuqijsqdspbody15",   "shuqijsrwbody15", "shuqijsfxbody15", "shuqijsbookurl15", "shuqijsbookbody15", "shuqijssprwurl15", "shuqiuserurl16", "shuqisyurl16", "shuqisybody16", "shuqispbody16", "shuqiscbody16", "shuqiydbody16", "shuqiqdbody16", "shuqirwbody16", "shuqifxbody16", "shuqisprwurl16", "shuqijlbody16", "shuqisqjlbody16", "shuqicjyurl16", "shuqicjcsbody16", "shuqicjbody16", "shuqijsspbody16", "shuqijsydurl16", "shuqijsydbody16", "shuqijsqdbody16", "shuqijsqdspyurl16", "shuqijsqdspbody16", "shuqijsrwbody16", "shuqijsfxbody16", "shuqijsbookurl16", "shuqijsbookbody16", "shuqijssprwurl16", "shuqiuserurl17", "shuqisyurl17", "shuqisybody17", "shuqispbody17", "shuqiscbody17", "shuqiydbody17", "shuqiqdbody17", "shuqirwbody17", "shuqifxbody17", "shuqisprwurl17", "shuqijlbody17", "shuqisqjlbody17", "shuqicjyurl17", "shuqicjcsbody17", "shuqicjbody17", "shuqijsspbody17", "shuqijsydurl17", "shuqijsydbody17", "shuqijsqdbody17", "shuqijsqdspyurl17", "shuqijsqdspbody17", "shuqijsrwbody17", "shuqijsfxbody17", "shuqijsbookurl17", "shuqijsbookbody17", "shuqijssprwurl17", "shuqiuserurl18", "shuqisyurl18", "shuqisybody18", "shuqispbody18", "shuqiscbody18", "shuqiydbody18", "shuqiqdbody18", "shuqirwbody18", "shuqifxbody18", "shuqisprwurl18", "shuqijlbody18", "shuqisqjlbody18", "shuqicjyurl18", "shuqicjcsbody18", "shuqicjbody18", "shuqijsspbody18", "shuqijsydurl18", "shuqijsydbody18", "shuqijsqdbody18", "shuqijsqdspyurl18", "shuqijsqdspbody18", "shuqijsrwbody18", "shuqijsfxbody18", "shuqijsbookurl18", "shuqijsbookbody18", "shuqijssprwurl18", "shuqiuserurl19", "shuqisyurl19", "shuqisybody19", "shuqispbody19", "shuqiscbody19", "shuqiydbody19", "shuqiqdbody19", "shuqirwbody19", "shuqifxbody19", "shuqisprwurl19", "shuqijlbody19", "shuqisqjlbody19", "shuqicjyurl19", "shuqicjcsbody19", "shuqicjbody19", "shuqijsspbody19", "shuqijsydurl19", "shuqijsydbody19", "shuqijsqdbody19", "shuqijsqdspyurl19", "shuqijsqdspbody19", "shuqijsrwbody19", "shuqijsfxbody19", "shuqijsbookurl19", "shuqijsbookbody19", "shuqijssprwurl19", "shuqiuserurl20", "shuqisyurl20", "shuqisybody20", "shuqispbody20", "shuqiscbody20", "shuqiydbody20", "shuqiqdbody20", "shuqirwbody20", "shuqifxbody20", "shuqisprwurl20", "shuqijlbody20", "shuqisqjlbody20", "shuqicjyurl20", "shuqicjcsbody20", "shuqicjbody20", "shuqijsspbody20", "shuqijsydurl20", "shuqijsydbody20", "shuqijsqdbody20", "shuqijsqdspyurl20", "shuqijsqdspbody20", "shuqijsrwbody20", "shuqijsfxbody20", "shuqijsbookurl20", "shuqijsbookbody20", "shuqijssprwurl20"],
            "author": "@ziye",
            "settings": [
				{
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
                }
        ],
        "repo": "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/shuqi.js",
        "icons": ["https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/shuqi.png", "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/shuqi.png"],
        "script": "https://raw.githubusercontent.com/NANXIAO1971/ZYJB/master/Task/shuqi.js"
    }
  ]
}
