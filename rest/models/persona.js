//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var personaSchema = new mongoose.Schema({
	nombre: String,
	apellido1: String,
	apellido2: String,
	password: String,
	fechaNacimiento: Date,
	email: String
}); 

//Return model, hands es la colección
module.exports = restful.model('Persona',personaSchema);