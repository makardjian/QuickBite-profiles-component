const randomRecords = [];
const db = require('../database/postgresDB.js');
const now = require('performance-now');

const generateRandomRecords = () => {
  for (let i = 0; i < 1000; i++) {
    randomRecords.push(Math.floor(Math.random() * 10000000) + 1);
  }
};

let sum = 0;

generateRandomRecords();

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

testGet(0);
