const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: String,
  price: Number,
  location: String,
  description: String,
  image: String
});

module.exports = mongoose.model('Pet', petSchema);
