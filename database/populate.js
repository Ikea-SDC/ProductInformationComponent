var {product, reviews} = require('./models.js');

var productData = require('./mock/MOCK_DATA.json');
var reviewData = require('./mock/REVIEW_DATA.json');

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database

product.create(productData, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});

reviews.create(reviewData, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});