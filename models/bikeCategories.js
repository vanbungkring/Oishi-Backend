var mongoose = require('mongoose');

var BikeCategoriesSchema = new mongoose.Schema({
  name: String,
  year: String,
  cc 	: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('bikeCategories', BikeCategoriesSchema);