const Client = require('pg').Client;
const redisClient = require('../../redisDemo.js');

const client = new Client({
  user: 'postgres',
  host: 'ec2-18-222-125-183.us-east-2.compute.amazonaws.com',
  database: 'sdc_project',
  password: '$grapes',
  port: 5432
});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to postgres db');
  }
});

//  CREATE 
const postRestaurant = (req, res) => {
  const newRestaurant = req.body;
  const text = `INSERT INTO restaurants(name, address, number, picture, stars, quality, delivery, accuracy)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
  const values = [newRestaurant.name, newRestaurant.address, newRestaurant.number, newRestaurant.picture, newRestaurant.stars,
    newRestaurant.quality, newRestaurant.delivery, newRestaurant.accuracy];
  //Save the restaurant to the database
  client.query(text, values, (err) => {
    if (err) {
      res.status(500).send();
    } else {
      res.send('Your record was saved to the database!');
    }
  });
};


//  READ
const getRestaurant = (req, res) => {
  const text = 'SELECT * FROM restaurants WHERE id = $1';
  const values = [req.params.id];
  redisClient.get(req.params.id, (err, result) => {
    if (result) {
      const resultJSON = JSON.parse(result);
      // console.log('FROM REDIS:');
      res.status(200).json(resultJSON);
    } else {
      client.query(text, values, (err, data) => {
        if (err) {
          res.status(500).send();
        } else {
          data = data.rows[0];
         // console.log('FROM POSTGRES:');
          redisClient.set(data.id, JSON.stringify(data));
          res.status(200).send(data);
        }
      });
    }
  });
};


//  UPDATE
const updateRestaurant = (req, res) => {
  const newData = req.body;
  const text1 = `UPDATE restaurants SET name = $2, address = $3, number = $4, picture = $5, stars = $6, 
    quality = $7, delivery = $8, accuracy = $9 WHERE id = $1`;
  const values1 = [req.params.id, newData.name, newData.address, newData.number, newData.picture, newData.stars,
    newData.quality, newData.delivery, newData.accuracy];
  client.query(text1, values1)
    .catch(e => console.error(e.stack))
    .then( () => {
      res.send('Updated your record in the restaurants database!');
    });
};

//  Delete
const deleteRestaurant = (req, res) => {
  const text = 'DELETE FROM restaurants WHERE id $1';
  const values = [req.params.id];
  client.query(text, values)
    .then(res.send('your record has been deleted from the database.'))
    .catch(console.error(e.stack));
};


module.exports = {
  postRestaurant,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant,
  client,
};
