var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
    
var handSchema = new Schema({
  idhand:    { type: String },
  battery:     { type: Number },
  user:  { type: String },
  password:   { type: String },
  status:    { type: String, enum:
  ['Replace soon', 'Replace now', 'Good', 'Regular']
        },
});

module.exports = mongoose.model('Hand', handSchema);