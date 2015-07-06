/*
 *           Copyright (C) 2015  Tirso V. Rodeiro
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as
 *   published by the Free Software Foundation, either version 3 of the
 *   License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
    
*/



//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



mongoose.connect('mongodb://localhost/hands');


//Express
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//Routes
app.use('/api', require('./routes/api'));


//Start server
app.listen(3000);
console.log('API RUNNING');




//***********************TESTING*********************


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






