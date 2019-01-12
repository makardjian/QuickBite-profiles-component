# Project Name

> Project description

## Related Projects

  - https://github.com/sdc-group-6/psmorimoto-reviews-service
  - https://github.com/sdc-group-6/klarok-menu-service
  - https://github.com/sdc-group-6/ngodavidhuy-recommendations-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

This is one of the four services listed above. They all need to be run together in a proxy server.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

MongoDB CRUD API
------

## Create (POST)

app.post('/restaurants', db.postRestaurant)

```
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
```


## Read (GET)

app.get('/restaurants/:id', db.getRestaurant)

```
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
```


## Update (PUT)

app.put('/restaurants/:id', db.updateRestaurant)

```
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
```

## Delete (DELETE)

app.delete('/restaurants/:id', db.deleteRestaurant)

```
const deleteRestaurant = (req, res) => {
  Restaurant.findOneAndDelete({id: req.params.id})
    .then(() => {
      res.send('delted the restaurant from the database.');
    })
    .catch(() => {
      res.status(500).send('there was an issue deleting your file from the database.');
    });
};
```













