var express = require('express');
var app = express();

app.use(express.static('public'));

module.exports = {
    HTML: function (tem_title, tem_description) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${tem_title} 꿈해몽</title>
        </head>
        <body>
        <div class="maincontainer">
            <div class="pagelink">
                <a class="maintitle" href="/">꿈해몽</a>
            </div>
            <div class="container">
                <div class="suptitle_Div">
                    <h1 style="suptitle">${tem_title} 꿈해몽</h1>
                </div>
                ${tem_description}
            </div>
        </html>
        <style>
            a:link{
                text-decoration: none;
            }
            .suptitle_Div{
                border-bottom: 1px solid black;
                padding-left: 15px;
            }
            .suptitle{
                font-size: 23px;
                font-weigth: bold;
                color: black;
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
                margin-top: 70px;
                font-size: 30px;
                font-weight: bold;
                border-bottom: 1px solid black;
                padding-bottom: 12px;
                border-left: 10px solid red;
                padding-left: 15px;
            }     
            .explain{
                margin-top: 10px;
                margin-left: 1px;
                font-size: 19px;
                font-weight: 500;
            }
            
            .maincontainer{
                margin-bottom: 200px;
            }
            .container{
                margin-top: 30px;
                padding-left: 300px;
                padding-right: 300px;
            }
        </style>
      `;
    }
}