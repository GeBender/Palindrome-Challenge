var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('node-fs');
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static( __dirname + '/client'));

app.get('/', function(req, res) {
	fs.readFile(__dirname + '/client/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});


app.post('/api/palindrome', function(req, res) {
	var content = req.body.content.replace(/ /g, '').toUpperCase();
    var inverseContent = content.split('').reverse().join('');
    
    if(content == inverseContent) {
    	var responseStatus = 200;
    	var responseMessage = 'UAU, that is right! We have a palindrome! :)';
    	res.writeHead(responseStatus, {"Content-Type": "application/json"});
    }else{
    	var responseStatus = 400;
    	var responseMessage = 'Bad choice, this is not a palindrome :(';
    	res.writeHead(responseStatus, {"Content-Type": "application/json"});
    }

	var returnJson = JSON.stringify({ 
		status: responseStatus,
		message: responseMessage
	});

	res.end(returnJson);
});

app.listen(port, function() {
	console.log('Server started on port '+port);
});