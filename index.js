var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/views/index.html');
});

app.use(express.static('public'));

io.on('connection', function(socket){
    console.log('revealo');
});

http.listen(3000, function(){
    console.log('app listening on port 3000');
});
