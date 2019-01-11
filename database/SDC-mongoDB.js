const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdc_project');

let restaurantSchema = mongoose.Schema({
  name: String,
  address: String,
  number: String,
  picture: String,
  stars: Number,
  quality: Number,
  delivery: Number,
  accuracy: Number,
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema);

