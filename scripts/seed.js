// var fs = require('fs');
const fs = require('fs');
const GRID_FACTOR = 100;
const seedData = {};

for (let i = 0; i < GRID_FACTOR; i++) {
  for (let j = 0; j < GRID_FACTOR; j++) {
    seedData[`${i}-${j}`] = 'black'
  }
}

fs.writeFile(__dirname + '/../test.json', JSON.stringify(seedData), 'utf8', function() {});
