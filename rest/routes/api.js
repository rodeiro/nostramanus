//Dependencies

var express = require('express');
var router = express.Router();


//Models
var Hand = require('../models/hand');
/*
//Routes
Hand.methods(['get','put','post','delete']);
Hand.register(router,'/hands');



//Return router
module.exports = router;*/


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


module.exports = router;