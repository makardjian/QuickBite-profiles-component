//Figure out how to connect to PostGres DB


//  CREATE 
const postRestaurant = (req, res) => {
  const newRestaurant = req.body;
  const postQuery = 'INSERT INTO restaurants (name, address, number, picture, stars, quality, delivery, accuracy)' +
  `VALUES (${newRestaurant.name}, ${newRestaurant.address}, ${newRestaurant.number}, ${newRestaurant.picture}, ${newRestaurant.stars}
    ${newRestaurant.quality}, ${newRestaurant.delivery}, ${newRestaurant.accuracy});`;
  //Save the restaurant to the database
  db.query(postQuery, (err) => {
    if (err) {
      res.status(500).send();
    } else {
      res.send('Your record was saved to the database!');
    }
  });
};


//  READ
const getRestaurant = (req, res) => {
  const query = `SELECT * FROM restaurants WHERE ID = ${req.params.id}`;
  db.query(query, (err, data) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(data);
    }
  });
};
