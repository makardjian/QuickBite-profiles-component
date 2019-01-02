const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static((__dirname + '/../client/dist')));

app.get('/restaurants/:id', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.get('/restaurants/:id/profile', (req, res) => {
  db.grabRestaurantInfo(req.params.id, (restaurant) => {
    res.json(restaurant);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
