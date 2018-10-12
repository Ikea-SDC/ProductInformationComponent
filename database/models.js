// require('./index.js')
// const mongoose = require('mongoose');


// const productsSchema = new mongoose.Schema({
//   productId: Number,
//   product_info: {
//     product_dimensions: {
//       max: Number,
//       width: Number,
//       diameter: Number,
//       cord_length: Number,
//       power: Number,
//       assembly: Boolean,
//       designer: String
//     },
//     bullets: [String],
//     good_to_know: [String],
//     care_instructions: [String]
//   },
//   materials_env: {
//     weight: [String],
//     shade: [String],
//     tube: [String]
//   },
//   assembly_docs: {
//     instructions: String,
//     manual: String
//   },
//   package_details: {
//     article_number: Number,
//     packages: Number,
//     width: Number,
//     height: Number,
//     length: Number,
//     weight: Number
//   }
// }); 

// const reviewsSchema = new mongoose.Schema({
//   productId: Number,
//   rating: Number,
//   review_body: String,
//   review_title: String,
//   created_at: String,
//   recommended: Boolean,
//   helpful: { yes: Number, no: Number },
//   specifics: {
//     value: Number,
//     quality: Number,
//     appearance: Number,
//     ease: Number,
//     expected: Number
//   },
//   username: String
// })

// const Product = mongoose.model('Product', productsSchema);
// const Reviews = mongoose.model('Reviews', reviewsSchema);

// module.exports.product = Product;
// module.exports.reviews = Reviews;
