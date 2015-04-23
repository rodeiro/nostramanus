//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var sesionSchema = new mongoose.Schema({
	fecha: Date,
	duracion: Number,
	fallos: String,
	observaciones: String,
	objetivos: String,
	conclusion: String,
	participantes: [String],
}); 

//Return model, hands es la colección
module.exports = restful.model('Sesion',sesionSchema);