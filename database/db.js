const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/sdc_project', { useNewUrlParser: true });

let restaurantSchema = mongoose.Schema({
  unique_name: String,
  name: String,
  address: String, 
  number: String,
  picture: String,
  stars: Number,
  quality: Number,
  delivery: Number,
  accuracy: Number
});

let Restaurant = mongoose.model('Restaurants1', restaurantSchema);

//  CREATE 
const postRestaurant = (req, res) => {
  console.log('hello world');
  //QUERY the database to find the next id to add to the newly posted restaurant
  const newRestaurant = req.body;
  Restaurant.find().sort({id: -1}).limit(1)
    .then(lastRecord => {
      newRestaurant.id = lastRecord.id++;
      const postObject = new Restaurant(newRestaurant);
      //Save the restaurant to the database
      console.log(postObject);
      return postObject.save();
      //  MALCOM SAYS THEN WILL RUN. Check this after you re-seed your data.
    })
    .then(() => {
      res.send('Your record was saved to the database!');
    })
    .catch(err => {
      res.statusCode(500).send('Unable to save your record to the database');
    });
};


//  READ
const getRestaurant = (req, res) => {
  console.log(req.body);
  Restaurant.find({id: req.params.id})
    .then((targetRestaurant)=> {
      res.send(targetRestaurant);
    })
    .catch(() => {
      res.statusCode(500).send('Sorry, there is no restaurant with that id.');
    });
};

const updateRestaurant = (req, res) => {
  const freshData = req.body;
  Restaurant.findOneAndUpdate({id: req.params.id}, freshData)
    .then(() => {
      res.send('Restaurant has been updated in the database.');
    })
    .catch(() => {
      res.statusCode(500).send('Restaurant could not be found in the database');
    });
};

//  DELETE
const deleteRestaurant = (req, res) => {
  Restaurant.findOneAndDelete({id: req.params.id})
    .then(() => {
      res.send('delted the restaurant from the database.');
    })
    .catch(() => {
      res.statusCode(500).send('there was an issue deleting your file from the database.');
    });
};



module.exports = {
  postRestaurant,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant
};

//Notes:
  //Right now the post request is not adding the next id like I would expect.