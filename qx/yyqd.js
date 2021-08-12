const url = "https://app.yymedias.com/api/h5/v1/common/signin";

const header = {"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-cn","Connection": "keep-alive","Content-Type": "application/x-www-form-urlencoded","Host": "app.yymedias.com","Origin": "https://apph5.yymedias.com","Referer": "https://apph5.yymedias.com/app/mission","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148","header-encrypt-code": "LIDrXKlOG6oeiCWGozG0Pga+zlB7IdaD431AoKrPHHp2u2JXRCAZ/WbtGRd6z5D6oBncEjL7j42PBNlQBnfTkIA5o8NQOalspV2EZXbEez/JBX1SkHUa506qCoshk5CmTvPAGzbGORPuLa5z6OHpx1al2QPFD7sWtbn3Nk0cRRXYt7UYi7f5/KKtdu7Jo9tk6O7qLGKYPFyStMq7fxIL6ffn2CYKhmxXZxnhco4h3OI7CZSPekiGyesen1vk63TeW5Qcg+oRDQ4UCJrhS84YzLDxWup2mmS8K0D1SNZzHmmS7pkKe9wOJtBwEK/k3KEIW3LZuNZPRZo=","is-ios": "ios"};

const m = "GET";

var myRequest = {url: url, method: m, headers: header};

$task.fetch(myRequest).then(response => {  
    if(response.body.indexOf("SUCCESS") != -1){
      $notify("今日有影签到", "", "成功👍")
    }else {
      $notify("今日有影签到", "失败👇", "可能要更新一下请求头信息了")
    }  
  }
  )