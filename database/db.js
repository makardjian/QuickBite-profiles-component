const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/sdc_project', { useNewUrlParser: true });

let restaurantSchema = mongoose.Schema({
  unique_name: String,
  id: Number,
  name: String,
  address: String, 
  number: String,
  picture: String,
  stars: Number,
  quality: Number,
  delivery: Number,
  accuracy: Number
});

let Restaurant = mongoose.model('restaurants1', restaurantSchema);

//  CREATE 
const postRestaurant = (req, res) => {
  const newRestaurant = req.body;
  //QUERY the database to find the next id to add to the newly posted restaurant
  Restaurant.find().sort({id: -1}).limit(1)
    .then(lastRecord => {
      newRestaurant.id = ++lastRecord[0].id;
      const postObject = new Restaurant(newRestaurant);
      //Save the restaurant to the database
      return postObject.save();
    })
    .then(() => {
      res.send('Your record was saved to the database!');
    })
    .catch(err => {
      res.send(err);
    });
};


//  READ
const getRestaurant = (req, res) => {
  Restaurant.find({id: req.params.id})
    .then((targetRestaurant)=> {
      if (targetRestaurant.length) {
        res.send(targetRestaurant);
      } else {
        res.status(404).send('There is no restaurant with that id');
      }
    })
    .catch(() => {
      res.status(500).send('There was a problem querying the database.');
    });
};

const updateRestaurant = (req, res) => {
  const freshData = req.body;
  Restaurant.findOneAndUpdate({id: req.params.id}, freshData)
    .then(() => {
      res.send('Restaurant has been updated in the database.');
    })
    .catch(() => {
      res.status(500).send('Restaurant could not be found in the database');
    });
};

//  DELETE
const deleteRestaurant = (req, res) => {
  Restaurant.findOneAndDelete({id: req.params.id})
    .then(() => {
      res.send('delted the restaurant from the database.');
    })
    .catch(() => {
      res.status(500).send('there was an issue deleting your file from the database.');
    });
};



module.exports = {
  postRestaurant,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant
};

