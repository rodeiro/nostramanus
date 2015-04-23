//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var manoSchema = new mongoose.Schema({
	persona: String,
	bateria: Number,
	estado: String,
	potenciaMedia: Number,
	version: String,
	dimension: Number,
	tipo: String,
	activacion: Date,
	frecuenciaFallo: Number,
	mantenimiento: {
		fechaArreglo: Date,
		concepto: String,
	}
}); 

//Return model, hands es la colección
module.exports = restful.model('Mano',manoSchema);