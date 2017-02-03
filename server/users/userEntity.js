var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
