var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* restaurant schema */
var restaurantSchema = new Schema({
  _id : {
    type : Number,
    required : true
  },
  name : {
    type : String,
    required : true
  },
  address : [{
    _id : {
      type : Number,
      required : true,
      default : 1
    },
    city : {
      type : String,
      required : true
    },
    state : {
      type : String,
      required : true
    }
  }]
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
