
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
        },
        {
            "id": "yuedongzu",
            "name": "悦动族APP",
            "keys": ["yuedongzutoken", "yuedongzutoken2", "yuedongzutoken3", "yuedongzutoken4", "yuedongzutoken5", "yuedongzutoken6", "yuedongzutoken7", "yuedongzutoken8", "yuedongzutoken9", "yuedongzutoken10", "yuedongzutoken11", "yuedongzutoken12", "yuedongzutoken13", "yuedongzutoken14", "yuedongzutoken15", "yuedongzutoken16", "yuedongzutoken17", "yuedongzutoken18", "yuedongzutoken19", "yuedongzutoken20"],
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
            "repo": "https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/yuedongzu.js",
            "icons": ["https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/yuedongzu.png", "https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/yuedongzu.png"],
            "script": "https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/yuedongzu.js"
        },
        {
            "id": "qmyd",
            "name": "全民悦动APP",
            "keys": ["qmydtoken", "qmydtoken2", "qmydtoken3", "qmydtoken4", "qmydtoken5", "qmydtoken6", "qmydtoken7", "qmydtoken8", "qmydtoken9", "qmydtoken10", "qmydtoken11", "qmydtoken12", "qmydtoken13", "qmydtoken14", "qmydtoken15", "qmydtoken16", "qmydtoken17", "qmydtoken18", "qmydtoken19", "qmydtoken20"],
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
            "repo": "https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/qmyd.js",
            "icons": ["https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/qmyd.png", "https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/qmyd.png"],
            "script": "https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/yuedongzu.js"
         },
         {
            "id": "fqkk",
            "name": "番茄看看",
            "keys": ["fqkk"],
            "author": "@feizao",
            "settings": [{
                   "id": "fqkkCkMove",
                   "val": "",
                   "name": "旧数据迁移",
                   "type": "boolean",
                   "desc": "将原先指定账号抓包的数据迁移为自动识别的账号数据，原账号个数设置重置为0"
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
                   "name": "番茄看看CK 列表",
                   "val": "",
                   "type": "textarea",
                   "autoGrow": true,
                   "rows": 8,
                   "desc": "番茄看看多账号CK 列表 (JSON 格式)"
                  }
            ],
            "repo": "https://github.com/age174/-/blob/main/fqkk.js",
            "icons": ["https://ftp.bmp.ovh/imgs/2021/02/f8306006536eb49c.jpeg", "https://ftp.bmp.ovh/imgs/2021/02/f8306006536eb49c.jpeg"],
            "script": "https://raw.githubusercontent.com/age174/-/main/fqkk.js"
           },
           {
            "id": "ysm",
            "name": "云扫码",
            "keys": ["ysmurl", "ysmhd","ysmbody","ysm2body", "ysmtx","ysmurl2", "ysmhd2","ysmbody2","ysm2body2", "ysmtx2","ysmurl3", "ysmhd3","ysmbody3","ysm2body3","ysmtx3","ysmurl4", "ysmhd4","ysmbody4","ysm2body4","ysmtx4","ysmurl5", "ysmhd5","ysmbody5","ysm2body5","ysmtx5","ysmurl6", "ysmhd6","ysmbody6","ysm2body6","ysmtx6","ysmurl7", "ysmhd7","ysmbody7","ysm2body7","ysmtx7","ysmurl8", "ysmhd8","ysmbody8","ysm2body8","ysmtx8","ysmurl9", "ysmhd9","ysmbody9","ysm2body9","ysmtx9"],
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
           }
     ]
}
