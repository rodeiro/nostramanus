var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

var models = require('./models/hand')(app, mongoose);
var HandCtrl = require('./controllers/hands');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());



mongoose.connect('mongodb://localhost/hand', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});



// API routes
var hands = express.Router();

hands.route('/hands')
  .get(HandCtrl.findAllHands)
  .post(HandCtrl.addHand);

hands.route('/hands/:id')
  .get(HandCtrl.findById)
 .put(HandCtrl.updateHand)
  .delete(HandCtrl.deleteHand);

app.use('/api', hands);


app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});