//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//Mongo, hands es la bd
mongoose.connect('mongodb://localhost/hands');


//Express
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


//Routes
app.use('/api', require('./routes/api'));


//Start server
app.listen(3000);
console.log('API RUNNING');




//***********************PRUEBAS*********************


//var HandModel = require('./models/hand');
/*
//FIND
HandModel.find(function (err, manos) {
  if (err) return console.error(err);
  console.log(manos)
});

//Insert
var mano = new HandModel({name : 'Andy Garcia', password: 'S5555', battery:27});
mano.save(function(err){
		if (err){return console.error(err)}
})
//console.log(mano);


//FINDByName
var prueba = HandModel.findOne({name: "Tirso"},function(err,user){
	if (err) return console.error(err);
  	console.dir(user);
});

//FINDById

HandModel.findById("54ef6f22308d63f009acd769",function(err,user){
	if (err) return console.error(err);
  	console.dir(user);
});


//DELETE
HandModel.findByIdAndRemove("5537ee0e74466cdcb812ad97",function(err){
	if (err) return console.error(err);
  	console.dir("Borrado!");
});


//UPDATE

HandModel.findByIdAndUpdate("54ef71b15f31a6380a5b6e7a",{ name: 'Nicole Kidman' },function(err){
	if (err) return console.error(err);
  	console.dir("Actualizado!");
});


*/






