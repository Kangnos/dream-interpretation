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
                <a class="maintitle" href="C:\Users\ksc12_000\Desktop\Developer\dream interpretation\index.html">꿈해몽</a>
            </div>
            <div class="container">
                ${tem_description}
            </div>
        </html>
      `;
    }
}