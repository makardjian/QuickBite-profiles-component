const faker = require('faker');
const fs = require('fs');

const file = fs.createWriteStream('./data.csv');

let getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

let data;
let space = ',';

for (let i = 0; i < 10; i++) {
  data = '';
  data += (faker.company.companyName() + space);
  data += (faker.address.streetAddress() + space);
  data += (faker.phone.phoneNumber() + space);
  data += (faker.image.food() + space);
  data += (getRandomInt(6) + space);
  data += (getRandomInt(101) + space);
  data += (delivery = getRandomInt(101) + space);
  data += (getRandomInt(101) + space);

  // data += (faker.name.findName() + space);
  // data += (faker.internet.email() + space);

  file.write(data + '\n');
} 
file.end();

