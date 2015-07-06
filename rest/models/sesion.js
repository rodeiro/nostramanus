
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
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var sesionSchema = new mongoose.Schema({
	numero: Number,
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