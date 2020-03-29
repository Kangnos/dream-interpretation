var express = require('express')
var app = express()
var fs = require('fs');
var mainpage = require('./lib/index.js');
var middle_template = require('./lib/middle_template.js');
var tempalte = require('./lib/template.js');
var path = require('path')
 
//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(request, response) { 
  var title = request.params.pageId;
  var title = 'Welcome to';
  var description = 'Hello, Node.js';
  var html = mainpage.HTML(title,
    `<h2>${title}</h2>${description}`
  ); 
  response.send(html);
});

app.get('/:pageId', function(request, response){
    fs.readdir('./data', function(error, filelist){
      var filteredId = path.parse(request.params.pageId).base;
      fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
        var title = request.params.pageId;
        var mid_html = middle_template.HTML(title, 
          `${description}`)
        response.send(mid_html);
      });
    });
});
  
app.get('/자연/:pageId', function(request, response){
  fs.readdir('./tem_data', function(error, filelist){
    var filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`tem_data/${filteredId}`, 'utf8', function(err, description){
      console.log(filteredId);
      var tem_title = request.params.pageId;
      var tem_html = tempalte.HTML(tem_title, 
        `${description}`)
      response.send(tem_html);
    });
  });
});
 


 
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});