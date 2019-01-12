const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db.js');
const app = express();
const PORT = 3001;
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static((__dirname + '/../client/dist')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


//  CREATE
app.post('/restaurants', db.postRestaurant);

//  READ
app.get('/restaurants/:id', db.getRestaurant);

//  UPDATE
app.put('/restaurants/:id', db.updateRestaurant);

//  DELETE
app.delete('/restaurants/:id', db.deleteRestaurant);



