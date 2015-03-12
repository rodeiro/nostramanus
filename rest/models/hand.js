//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var handSchema = new mongoose.Schema({
	name: String,
	password: String,
	battery: Number
}); 

//Return model, hands es la colección
module.exports = restful.model('Hands',handSchema);