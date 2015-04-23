//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var experimentoSchema = new mongoose.Schema({
	sesion: String,
	evento: String,
	resultado: [Number]
}); 

//Return model, hands es la colección
module.exports = restful.model('Experimento',experimentoSchema);