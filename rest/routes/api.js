//Dependencies

var express = require('express');
var router = express.Router();


//Models
var Hand = require('../models/hand');

//Routes
Hand.methods(['get','put','post','delete']);
Hand.register(router,'/hands');



//Return router
module.exports = router;