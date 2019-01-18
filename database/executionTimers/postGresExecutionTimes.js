const randomRecords = [];
const db = require('../controllers/postgresDB.js');
const now = require('performance-now');

const generateRandomRecords = () => {
  for (let i = 0; i < 1000; i++) {
    randomRecords.push(Math.floor(Math.random() * 10000000) + 1);
  }
};

let sum = 0;

generateRandomRecords();

//  TEST SPEED FOR A GET REQUEST
const testGet = (n) => {
  if (n === 1000) { 
    console.log((sum / n).toFixed(3), 'AVERAGE');
    return; 
  }
  const text = 'SELECT * FROM restaurants WHERE id = $1';
  const values = [randomRecords[n]];
  const before = now();
  db.client.query(text, values, (err) => {
    if (err) {
      console.log(err);
    } else {
      const after = now();
      const difference = (after - before);
      sum += Number(difference);
      n += 1;
      testGet(n);
    }
  });
};

// testGet(0);


// TEST SPEED FOR POST REQUEST

// const testPost = async function (newRestaurant) {
//   for (let i =0; i < 1000; i++) {
//     const text = `INSERT INTO restaurants(name, address, number, picture, stars, quality, delivery, accuracy)
//     VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
//     const values = [newRestaurant.name, newRestaurant.address, newRestaurant.number, newRestaurant.picture, newRestaurant.stars,
//       newRestaurant.quality, newRestaurant.delivery, newRestaurant.accuracy];
//     const before = now();
//     const promise = await db.client.query(text, values)
//     .then(() => {
//       const after = now();
//       const difference = (after - before);
//       sum += difference;
//     })
//     .catch(err => {
//       console.error(err);
//     })
//   }
//   console.log('AVERAGE', (sum / 1000).toFixed(3));
// }

// const object = {
//   name: 'KKasdfasd asdfasdf',
//   address: '00334 Beahan Brooks',
//   number: '1-336-498-4097 x87693',
//   picture: 'http://lorempixel.com/640/480/food',
//   stars: 4,
//   quality: 85,
//   delivery: 47,
//   accuracy: 7 
// };


// testPost(object);
