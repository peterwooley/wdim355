var express = require('express');

var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/about', function(req, res) {
	res.json();
});

app.listen(1337);
