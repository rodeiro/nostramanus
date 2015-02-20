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




//POST - Insert a new hand in the DB
exports.addHand = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var hand = new Hand({
        idhand:    req.body.idhand,
        battery:     req.body.battery,
        user:  req.body.user,
        password:   req.body.password,
        status:  req.body.status,
    });

    hand.save(function(err, hand) {
        if(err) return res.send(500, err.message);
    res.status(200).jsonp(hand);
    });
};


//PUT - Update a register already exists
exports.updateHand = function(req, res) {
    Hand.findById(req.params.id, function(err, hand) {
        idhand:    req.body.idhand;
        battery:     req.body.battery;
        user:  req.body.user;
        password:   req.body.password;
        status:  req.body.status;

        hand.save(function(err) {
            if(err) return res.send(500, err.message);
      res.status(200).jsonp(hand);
        });
    });
};

//DELETE - Delete a hand with specified ID
exports.deleteHand = function(req, res) {
    Hand.findById(req.params.id, function(err, hand) {
        hand.remove(function(err) {
            if(err) return res.send(500, err.message);
      res.status(200);
        })
    });
};