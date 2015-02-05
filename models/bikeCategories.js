var mongoose = require('mongoose');

var BikeCategoriesSchema = new mongoose.Schema({
  name: String,
  series:String,
  year: String,
  cc 	: String,
  manufactures: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('bikeCategories', BikeCategoriesSchema);