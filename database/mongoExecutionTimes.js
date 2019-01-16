const db = require('./mongoDB.js');
const now = require('performance-now');


const generateRandomRecords = () => {
  let randomRecords = [];
  for (let i = 0; i < 1000; i++) {
    randomRecords.push(Math.floor(Math.random() * 10000000) + 1);
  }
  return randomRecords;
};

let sum = 0;

const randomRecords = generateRandomRecords();


//  TEST THE SPEED OF A GET REQUEST TO THE DATABASE
const testGet = (n) => {
  if (n === 1000) { 
    console.log((sum / n).toFixed(3), 'AVERAGE');
    return; 
  }
  const before = now();
  db.Restaurant.find({id: randomRecords[n]})
    .catch(err => {
      console.log(err);
    })
    .then(() => {
      const after = now();
      const difference = (after - before);
      sum += Number(difference);
      n += 1;
      testGet(n);
    });
};

testGet(0);


//  TEST THE SPEED OF A POST REQUEST TO THE DATABASE
// const testPost = async function(newRestaurant) {
//   //QUERY the database to find the next id to add to the newly posted restaurant
//   for (let i = 0; i < 1000; i++) {
//   const before = now();
//   let promise = db.Restaurant.find().sort({id: -1}).limit(1)
//     .then(lastRecord => {
//       newRestaurant.id = ++lastRecord[0].id;
//       const postObject = new db.Restaurant(newRestaurant);
//       //Save the restaurant to the database
//       return postObject.save();
//     })
//     .then(() => {
//       const after = now();
//       const difference = (after - before);
//       return difference;
//     })
//     .catch(err => {
//       console.error(err);
//     })
//     let result = await promise;
//     sum += result;
//   }
//   console.log('AVERAGE', (sum / 1000).toFixed(3));
// }

// const object = {
//   unique_name: 'hello10000001',
//   name: 'KK',
//   address: '00334 Beahan Brooks',
//   number: '1-336-498-4097 x87693',
//   picture: 'http://lorempixel.com/640/480/food',
//   stars: 4,
//   quality: 85,
//   delivery: 47,
//   accuracy: 7 
// };

// testPost(object);
