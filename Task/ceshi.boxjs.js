
{
    "id": "ceshi.app.sub",
    "name": "自用脚本订阅",
    "author": "@NANXIAO",
    "icon": "https://raw.githubusercontent.com/ziye11/JavaScript/main/ziye.png",
    "repo": "https://github.com/NANXIAO",
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
            "repo": "https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/iboxpay.js",
            "icons": ["https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/iboxpay.png", "https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/iboxpay.png"],
            "script": "https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/iboxpay.js"
        },
         {
            "id": "bububao",
            "name": "步步宝APP",
            "keys": ["bububaotoken", "bububaotoken2", "bububaotoken3", "bububaotoken4", "bububaotoken5", "bububaotoken6", "bububaotoken7", "bububaotoken8", "bububaotoken9", "bububaotoken10", "bububaotoken11", "bububaotoken12", "bububaotoken13", "bububaotoken14", "bububaotoken15", "bububaotoken16", "bububaotoken17", "bububaotoken18", "bububaotoken19", "bububaotoken20"],
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
            "repo": "https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/bububao.js",
            "icons": ["https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/bububao.png", "https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/bububao.png"],
            "script": "https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/bububao.js"
        }
     ]
}
