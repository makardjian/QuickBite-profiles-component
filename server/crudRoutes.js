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
app.post('/restaurants/:id', db.helpers.postRestaurant);

//  Read