# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

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
```


## Read (GET)

app.get('/restaurants/:id', db.getRestaurant)

```
const getRestaurant = (req, res) => {
  console.log(req.body);
  Restaurant.find({id: req.params.id})
    .then((targetRestaurant)=> {
      res.send(targetRestaurant);
    })
    .catch(() => {
      res.statusCode(500).send('Sorry, there is no restaurant with that id.');
    }
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
      res.statusCode(500).send('Restaurant could not be found in the database');
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
      res.statusCode(500).send('there was an issue deleting your file from the database.');
    });
};
```













