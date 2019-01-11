const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/restaurants');

let restaurantSchema = mongoose.Schema({
  unique_name: String,
  name: String,
  address: String, 
  number: String,
  picture: String,
  stars: String,
  quality: String,
  delivery: String,
  accuracy: String
})
unique_name	name	address	number	picture	stars	quality	delivery	accuracy

//  CREATE
const postRestaurant = (req, res) => {
  const postObject = new 
  const postObject = req.body;
  postObject.save()
    .then(record => {
      res.send('Your record was saved to the database!');
    })
    .catch(err => {
      res.statusCode(500).send('Unable to save your record to the database');
    });
};


//  READ
const getRestaurant = (req, res) => {
  
}


module.exports = {
  postRestaurant,
  getRestaurant
};
