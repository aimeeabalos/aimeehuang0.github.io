var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');

app.get('/', function(req, res){
  res.sendfile('index.html');
  // res.sendfile('index.js');
});

io.on('connection', function(socket){
  console.log('a user connectd');
  socket.on('sub',function(d){
	console.log(d);
	console.log("a");
});
  socket.on("landing",function(d){
  	console.log(d);
  })
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});
