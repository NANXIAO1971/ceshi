
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
        }
     ]
}
