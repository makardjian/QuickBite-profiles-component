var redis = require('redis');

var client = redis.createClient(6379,'18.191.58.16');

client.on('connect', function() {
  console.log('Redis client connected');
});

client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

module.exports = client;
