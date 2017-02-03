var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  _id : Number,
  name : String,
  address : [{
    _id : Number,
    city : String,
    state : String
  }]
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
