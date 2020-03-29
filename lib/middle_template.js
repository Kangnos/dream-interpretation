var express = require('express');
var app = express();

app.use(express.static('public'));

module.exports = {
    HTML: function (midtitle, middescription) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${midtitle} 꿈해몽</title>
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
                    ${midtitle} 꿈해몽
                </div>
                <div class="blocktiles">
                    ${middescription}
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