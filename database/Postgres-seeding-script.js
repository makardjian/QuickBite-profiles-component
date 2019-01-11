const faker = require('faker');
const fs = require('fs');

let getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

let data;
let comma = '~';
let filePath = 'database/restaurant_table_csvs/rest1.csv';

restaurantDataGen = () => {
  for (let i = 0; i < 500000; i++) {
    data = '';
    data += (faker.company.companyName() + comma);
    data += (faker.address.streetAddress() + comma);
    data += (faker.phone.phoneNumber() + comma);
    data += (faker.image.food() + comma);
    data += (getRandomInt(6) + comma);
    data += (getRandomInt(101) + comma);
    data += (delivery = getRandomInt(101) + comma);
    data += (getRandomInt(101));
    data += '\n';

    fs.appendFileSync(filePath, data);
  } 
  console.log('Five Hundred Thousand Rows Added!');
};

//seed rest1.csv
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();

//seed rest2.csv
filePath = 'database/restaurant_table_csvs/rest2.csv';
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();

//seed rest3.csv
filePath = 'database/restaurant_table_csvs/rest3.csv';
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();

//seed rest4.csv
filePath = 'database/restaurant_table_csvs/rest4.csv';
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();

//seed rest5.csv
filePath = 'database/restaurant_table_csvs/rest5.csv';
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();
