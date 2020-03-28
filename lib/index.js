var express = require('express');
var app = express();

app.use(express.static('public'));

module.exports = {
    HTML:function(title, list, body, control){
      return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title} 꿈해몽</title>
      </head>
      <body>
          <div class="pagelink">
              <a class="maintitle" href="/">꿈해몽</a>
          </div>
          
          <div class="optiondiv">
              <a href="/자연" class="option">자연</a>
              <a href="/인물" class="option">인물</a>
              <a href="/신체" class="option">신체</a>
              <a href="/동물" class="option">동물</a>
          </div>

          <div class="bosscontainer">
              <div class="subtitle_blocktiles">
                  재미있는 꿈해몽
              </div>
              <div class="blocktiles">
                  <a href="재밌는 꿈/묘지 꿈" class="tile">묘지 꿈</a>              
                  <a href="재밌는 꿈/밤 꿈" class="tile">밤 꿈</a>
                  <a href="재밌는 꿈/새끼 호랑이 꿈.html" class="tile">새끼호랑이 꿈</a>
                  <a href="재밌는 꿈/팬티에 똥싸는 꿈.html" class="tile">팬티에 똥 싸는 꿈</a>
                  <a href="재밌는 꿈/잃어버리는 꿈.html" class="tile">잃어버리는 꿈</a>
                  <a href="재밌는 꿈/때미는 꿈.html" class="tile">때미는 꿈</a>
                  <a href="재밌는 꿈/지각하는 꿈.html" class="tile">지각하는 꿈</a>
              </div>
          </div>
      </body>
      </html>
      
      <style>
        a:link{
            text-decoration: none;
        }
        
        .pagelink{
            text-align: center;
        }
        .maintitle{
            color: black;
            font-size: 40px;
            border: 2px solid black;
            padding-left: 13px;
            padding-right: 13px;
        }
        .subtitle_blocktiles{
            padding-left: 300px;
            padding-right: 300px;
            margin-top: -90px;
            font-size: 30px;
            font-weight: bold;
            border-bottom: 1px solid black;
            padding-bottom: 12px;
            border-left: 10px solid red;
            padding-left: 15px;
        }     
        .atagcontainer{
            margin-top: 40px;
        }
        a{
            box-sizing:border-box;
        }
        .tile{
            display: inline-block;
            font-style: normal;
            font-weight: normal;
            line-height: 1;
            border: 2px solid black;
            padding-left: 30px;
            padding-right: 30px;
            padding-top: 20px;
            padding-bottom: 20px;
            margin-right: 10px;
            color: black;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .blocktiles{
            text-align: center;
            margin-top: 30px;
            height: 300px;
        }
        .bosscontainer{
            margin-top: 130px;
            padding-right: 300px;
            padding-left: 300px;
        }
        
        .optiondiv{
            text-align: center;
            margin-top: 30px;
        }
        .option{
            font-size: 28px;
            margin-right: 10px;
        }
    
      </style>
      `;
    }
}
  