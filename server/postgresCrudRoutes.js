require('newrelic');
const express = require('express');
const db = require('../database/controllers/postgresDB.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');


const app = express();
const PORT = 3002;

//app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors()); 

app.use('/restaurants/:restaurantId', express.static(path.join(__dirname, './../client/')));

app.listen(PORT, () => {
  console.log( `listening on port ${PORT}`);
});

//  CREATE
app.post('/restaurants', db.postRestaurant);

//LoaderIO Configuration
app.get('/loaderio-be274fa604ce42d77571a04d8116258a', (req, res) => {
 res.send('loaderio-be274fa604ce42d77571a04d8116258a')
});
//  READ
app.get('/restaurants/:id/profiles', db.getRestaurant);

//  UPDATE
app.put('/restaurants/:id', db.updateRestaurant);

//  DELETE
app.delete('/restaurants/:id', db.deleteRestaurant);

module.exports = app;
