var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('corpPlayers',['players']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/playerlist', function(req, res) {
    console.log('I received the request');

    db.players.find(function(err , docs) {
    	res.json(docs);
    });
});

app.post('/playerlist',function(req , res){
	console.log(req.body);
	db.players.insert(req.body , function(err , doc) {
		res.json(doc);
	});
});

app.delete('/playerlist/:id' , function(req , res) {
	var id = req.params.id;
	db.players.remove({_id: mongojs.ObjectId(id)}, function(err , doc) {
		res.json(doc);
	});
});

app.put('/playerlist/:id' , function(req , res){
	var id = req.params.id;
	db.players.findAndModify({query : {_id : mongojs.ObjectId(id)},
		update : {$set: {firstname : req.body.firstname , lastname : req.body.lastname , email : req.body.email , sex : req.body.sex , age : req.body.age , height : req.body.height , weight : req.body.weight , sports : req.body.sports}},
		new : true} , function(err ,doc) {
			res.json(doc);
		
	})
})

app.listen(8000);

console.log('server listening to 8000');
