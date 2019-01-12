const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db.js');
const app = express();
const PORT = 3001;
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static((__dirname + '/../client/dist')));

//  CREATE
app.post('/restaurants', db.postRestaurant);

//  Read
app.get('/restaurants/:id', db.getRestaurant);

//  Update
app.put('/restaurants/:id', db.updateRestaurant);

//  Delete
app.delete('/restaurants/:id', db.deleteRestaurant);