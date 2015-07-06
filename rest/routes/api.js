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
var router = express.Router();


//Models
var Hand = require('../models/hand');
var Persona = require('../models/persona');
var Sesion = require('../models/sesion');
var Experimento = require('../models/experimento');
var Mano = require('../models/mano');


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                            HANDS (testing)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GET HANDS
router.route('/hands').get(function(req, res) {
  Hand.find(function(err, hands) {
    if (err) {
      return res.send(err);
    }
    res.json(hands);
  });
});


//CREATE HAND
router.route('/hands').post(function(req, res) {
  var hand = new Hand(req.body);
 
  hand.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Hand Added' });
  });
});


//GET HAND
router.route('/hands/:id').get(function(req, res) {
  Hand.findOne({ _id: req.params.id}, function(err, hand) {
    if (err) {
      return res.send(err);
    }
 
    res.json(hand);
  });
});

//UPDATE HAND
router.route('/hands/:id').put(function(req,res){
  Hand.findOne({ _id: req.params.id }, function(err, hand) {
    if (err) {
      return res.send(err);
    }
 
    for (prop in req.body) {
      hand[prop] = req.body[prop];
    }
 
    // save the hand
    hand.save(function(err) {
      if (err) {
        return res.send(err);
      }
 
      res.json({ message: 'Hand updated!' });
    });
  });
});


//DELETE HAND
router.route('/hands/:id').delete(function(req, res) {
  Hand.remove({
    _id: req.params.id
  }, function(err, hand) {
    if (err) {
      return res.send(err);
    }
 
    res.json({ message: 'Successfully deleted' });
  });
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                          PERSONA
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//GET PERSONAS
router.route('/personas').get(function(req, res) {
  Persona.find(function(err, personas) {
    if (err) {
      return res.send(err);
    }
    res.json(personas);
  });
});

/*
Ejemplo 
{
        "nombre": "Dwayne",
        "apellido1": "Rock",
        "dni":"47363763R"
        "apellido2": "Johnson",
        "password": "ROCK23",
        "fechaNacimiento": "1975-09-03T22:00:00.000Z",
        "email": "therock@udc.es"
 
    }
*/


//GET PERSONA POR ID
router.route('/personas/:id').get(function(req, res) {
  Persona.findOne({ _id: req.params.id}, function(err, persona) {
    if (err) {
      return res.send(err);
    }
 
    res.json(persona);
  });
});


//GET PERSONA POR DNI 
router.route('/personas/dni/:dni').get(function(req, res) {
  Persona.find({ dni: req.params.dni}, function(err, persona) {
    if (err) {
      return res.send(err);
    }
    res.json(persona);
  });
});


//CREAR PERSONA
router.route('/personas').post(function(req, res) {
  var persona = new Persona(req.body);
 
  persona.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Persona añadida' });
  });
});


//ACTUALIZAR PERSONA
router.route('/personas/:id').put(function(req,res){
  Persona.findOne({ _id: req.params.id }, function(err, persona) {
    if (err) {
      return res.send(err);
    }
 
    for (prop in req.body) {
      persona[prop] = req.body[prop];
    }
 
    // save the person
    persona.save(function(err) {
      if (err) {
        return res.send(err);
      }
 
      res.json({ message: 'Persona actualizada!' });
    });
  });
});



//BORRAR PERSONA
router.route('/personas/:id').delete(function(req, res) {
  Persona.remove({
    _id: req.params.id
  }, function(err, persona) {
    if (err) {
      return res.send(err);
    }
 
    res.json({ message: 'Persona eliminada.' });
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                        SESIÓN                             
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Ejemplo

  fecha: Mar 19, 2015,
  duracion: 11,
  fallos: "No se encontraron fallos en esta sesión",
  observaciones: "El servidor parece funcionar",
  objetivos: "Conseguir realizar el movimiento de cerrar la mano en puño",
  conclusion: "Resultados satisfactorios",
  participantes: [553910fe4db90ac50186ee1d,553910fe4db90ac50186ee1t],
*/

//CREAR SESION
router.route('/sesiones').post(function(req, res) {
  var sesion = new Sesion(req.body);
 
  sesion.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Sesion añadida' });
  });
});



//GET SESIONES
router.route('/sesiones').get(function(req, res) {
  Sesion.find(function(err, sesiones) {
    if (err) {
      return res.send(err);
    }
    res.json(sesiones);
  });
});


//GET SESION POR ID
router.route('/sesiones/:id').get(function(req, res) {
  Sesion.findOne({ _id: req.params.id}, function(err, sesion) {
    if (err) {
      return res.send(err);
    }
    res.json(sesion);
  });
});

//GET SESION POR FECHA
router.route('/sesiones/fecha/:fecha').get(function(req, res) {
  Sesion.find({ fecha: req.params.fecha}, function(err, sesion) {
    if (err) {
      return res.send(err);
    }
    res.json(sesion);
  });
});

//ACTUALIZAR SESION
router.route('/sesiones/:id').put(function(req,res){
  Sesion.findOne({ _id: req.params.id }, function(err, sesion) {
    if (err) {
      return res.send(err);
    }
 
    for (prop in req.body) {
      sesion[prop] = req.body[prop];
    }
 
    // save the person
    sesion.save(function(err) {
      if (err) {
        return res.send(err);
      }
 
      res.json({ message: 'Sesion actualizada!' });
    });
  });
});


//BORRAR SESIÓN
router.route('/sesiones/:id').delete(function(req, res) {
  Sesion.remove({
    _id: req.params.id
  }, function(err, sesion) {
    if (err) {
      return res.send(err);
    }
 
    res.json({ message: 'Sesion eliminada.' });
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                        EXPERIMENTO                        
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
Ejemplo

sesion: 553933306f1727f0025e60e4,
evento: puño cerrado //pares evento tiempo
resultado: 1,2,3,4,5,6,7,8,9,10 //pares resultado tiempo
*/
//CREAR EXPERIMENTO
router.route('/experimentos').post(function(req, res) {
  var experimento = new Experimento(req.body);
 
  experimento.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Experimento añadido' });
  });
});



//GET EXPERIMENTOS
router.route('/experimentos').get(function(req, res) {
  Experimento.find(function(err, experimentos) {
    if (err) {
      return res.send(err);
    }
    res.json(experimentos);
  });
});

//GET EXPERIMENTO POR ID
router.route('/experimentos/:id').get(function(req, res) {
  Experimento.findOne({ _id: req.params.id}, function(err, experimento) {
    if (err) {
      return res.send(err);
    }
    res.json(experimento);
  });
});


//GET EXPERIMENTO POR SESION
router.route('/experimentos/sesion/:id').get(function(req, res) {
  Experimento.find({ sesion: req.params.id}, function(err, experimento) {
    if (err) {
      return res.send(err);
    }
    res.json(experimento);
  });
});



//GET EXPERIMENTO POR EVENTOS
router.route('/experimentos/evento/:evento').get(function(req, res) {
  Experimento.find({ evento: req.params.evento}, function(err, experimento) {
    if (err) {
      return res.send(err);
    }
    res.json(experimento);
  });
});


//ACTUALIZAR EXPERIMENTO
router.route('/experimentos/:id').put(function(req,res){
  Experimento.findOne({ _id: req.params.id }, function(err, experimento) {
    if (err) {
      return res.send(err);
    }
 
    for (prop in req.body) {
      experimento[prop] = req.body[prop];
    }
 
    // save the person
    experimento.save(function(err) {
      if (err) {
        return res.send(err);
      }
 
      res.json({ message: 'Experimento actualizado!' });
    });
  });
});


//BORRAR EXPERIMENTO
router.route('/experimentos/:id').delete(function(req, res) {
  Experimento.remove({
    _id: req.params.id
  }, function(err, experimento) {
    if (err) {
      return res.send(err);
    }
 
    res.json({ message: 'Experimento eliminado.' });
  });
});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                          MANO                            
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
        "persona": "553a8744396c48d10286fa2f",
        "bateria": 32,
        "estado": "Perfecto",
        "potenciaMedia": 4,
        "version": "0.1",
        "dimension": 18,
        "tipo": "tipo2",
        "activacion": "2015-01-28T23:00:00.000Z",
        "frecuenciaFallo": 0,
        "mantenimiento": {
            "fechaArreglo": "2015-02-28T23:00:00.000Z",
            "concepto": "Ajuste sensores"
        }
  }
*/
//CREAR MANO
router.route('/manos').post(function(req, res) {
  var mano = new Mano(req.body);
 
  mano.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Mano añadida' });
  });
});



//GET MANO POR ID
router.route('/manos/:id').get(function(req, res) {
  Mano.findOne({ _id: req.params.id}, function(err, mano) {
    if (err) {
      return res.send(err);
    }
    res.json(mano);
  });
});

//GET MANOS
router.route('/manos').get(function(req, res) {
  Mano.find(function(err, manos) {
    if (err) {
      return res.send(err);
    }
    res.json(manos);
  });
});



//ACTUALIZAR MANO
router.route('/manos/:id').put(function(req,res){
  Mano.findOne({ _id: req.params.id }, function(err, mano) {
    if (err) {
      return res.send(err);
    }
 
    for (prop in req.body) {
      mano[prop] = req.body[prop];
    }
 
    // save the person
    mano.save(function(err) {
      if (err) {
        return res.send(err);
      }
 
      res.json({ message: 'Mano actualizada!' });
    });
  });
});



//BORRAR MANO
router.route('/manos/:id').delete(function(req, res) {
  Mano.remove({
    _id: req.params.id
  }, function(err, mano) {
    if (err) {
      return res.send(err);
    }
 
    res.json({ message: 'Mano eliminada.' });
  });
});



module.exports = router;