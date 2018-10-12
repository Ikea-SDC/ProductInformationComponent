var {product, reviews} = require('./models.js');

var productData = require('./mock/MOCK_DATA.json');
var reviewData = require('./mock/REVIEW_DATA.json');

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