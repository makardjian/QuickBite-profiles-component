const faker = require('faker');
const fs = require('fs');

let getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

let data;
let comma = '\t';
let filePath = 'database/mongo_csvs/mongoRest1.csv';
let counter = 1;

//Generate CSV Header
const header = 'unique_name\tname\taddress\tnumber\tpicture\tstars\tquality\tdelivery\taccuracy\n';
fs.appendFileSync(filePath, header);

restaurantDataGen = () => {
  for (let i = 0; i < 500000; i++) {
    data = '';
    data += (`hello${counter}${comma}`);
    data += (faker.company.companyName() + comma);
    data += (faker.address.streetAddress() + comma);
    data += (faker.phone.phoneNumber() + comma);
    data += (faker.image.food() + comma);
    data += (getRandomInt(6) + comma);
    data += (getRandomInt(101) + comma);
    data += (delivery = getRandomInt(101) + comma);
    data += (getRandomInt(101));
    data += '\n';

    counter++;
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
filePath = 'database/mongo_csvs/mongoRest2.csv';
fs.appendFileSync(filePath, header);
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();

//seed rest3.csv
filePath = 'database/mongo_csvs/mongoRest3.csv';
fs.appendFileSync(filePath, header);
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();

//seed rest4.csv
filePath = 'database/mongo_csvs/mongoRest4.csv';
fs.appendFileSync(filePath, header);
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();

//seed rest5.csv
filePath = 'database/mongo_csvs/mongoRest5.csv';
fs.appendFileSync(filePath, header);
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();
restaurantDataGen();
