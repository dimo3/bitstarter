var express = require('express');
var fs = require('fs');

var buffer1 = new Buffer (20000);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  buffer1 = fs.readFileSync('index.html');
  response.send(buffer1.toString('utf-8'));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
