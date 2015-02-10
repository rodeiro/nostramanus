var mongoose = require('mongoose');
var Hand  = mongoose.model('Hand');

//GET - Return all hands in the DB
exports.findAllHands = function(req, res) {
    Hand.find(function(err, hands) {
    if(err) res.send(500, err.message);
    console.log('GET /hands');
    res.status(200).jsonp(hands);
    

    });
};



//GET - Return a hand with specified ID
exports.findById = function(req, res) {
    Hand.findById(req.params.id, function(err, hand) {
    if(err) return res.status(500).send(err.message) ;
    

    console.log('GET /hand/' + req.params.id);
        res.status(200).jsonp(hand);

    });
};