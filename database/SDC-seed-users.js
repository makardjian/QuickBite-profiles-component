const faker = require('faker');
const fs = require('fs');


let data;
let comma = '~';
let filePath = 'database/users_table_csvs/users1.csv';

usersDataGenerator = () => {
  for (let i = 0; i < 1000000; i++) {
    data = '';
    data += (faker.name.findName() + comma);
    data += faker.internet.email();
    data += '\n';

    fs.appendFileSync(filePath, data);
  }
  console.log('One Million Rows Added!');
};

usersDataGenerator();
usersDataGenerator();
usersDataGenerator();
usersDataGenerator();
usersDataGenerator();

filePath = 'database/users_table_csvs/users2.csv';

usersDataGenerator();
usersDataGenerator();
usersDataGenerator();
usersDataGenerator();
usersDataGenerator();
