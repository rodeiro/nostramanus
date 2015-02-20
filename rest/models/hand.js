//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var handSchema = new mongoose.Schema({
	name: String,
	password: String,
	battery: Number
}); 

//Return model
module.exports = restful.model('Hands',handSchema);