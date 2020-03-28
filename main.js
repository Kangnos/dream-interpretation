var express = require('express')
var app = express()
var fs = require('fs');
var mainpage = require('./lib/index.js');
var middle_template = require('./lib/middle_template.js');
 
//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(request, response) { 
    fs.readdir('./data', function(error, filelist){
      var title = request.params.pageId;
      var title = 'Welcome to';
      var description = 'Hello, Node.js';
      var html = mainpage.HTML(title,
        `<h2>${title}</h2>${description}`
      ); 
      response.send(html);
    });
});

app.get('/자연', function(request, response){
    var midtitle = request.params.pageId;
    var middle_html = middle_template.HTML(
        `<h2>${midtitle}</h2>`
    );
    response.send(middle_html); 
})
   
 
// app.get('/page/:pageId', function(request, response) { 
//   response.send(request.params);
// });
 
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});