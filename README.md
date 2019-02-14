# Project Name

- Redesigned the back-end architecture of a restaurant application microservice.
- Conducted stress tests with k6.io and used New Relic to quantify and visualize data throughput and average latency.
- Implemented a read-through Redis cache layer to reduce latency by 40% and increase throughput from 750 to 1,200 requests per second (RPS), while sending 70% of traffic to the top 200 restaurants (45% cache hit rate).
- Deployed service to AWS and added an NGINX load balancer to spread the request load across four EC2 servers, leading to an additional 60% increase in throughput.
- Achieved 1,946 RPS and an average latency 36ms.

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


PostgreSQL CRUD API
------

## Create (POST)

app.post('/restaurants', db.postRestaurant)

```
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
```


## Read (GET)

app.get('/restaurants/:id', db.getRestaurant)

```
const getRestaurant = (req, res) => {
  const text = 'SELECT * FROM restaurants WHERE id = $1';
  const values = [req.params.id];
  client.query(text, values, (err, data) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(data.rows[0]);
    }
  });
};
```

## Update (PUT)

app.put('/restaurants/:id', db.updateRestaurant)

```
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
```

## Delete (DELETE)

app.delete('/restaurants/:id', db.deleteRestaurant)

```
const deleteRestaurant = (req, res) => {
  const text = 'DELETE FROM restaurants WHERE id $1';
  const values = [req.params.id];
  client.query(text, values)
    .then(res.send('your record has been deleted from the database.'))
    .catch(console.error(e.stack));
};
```

