const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ProductInfo')
// const db = mongoose.connection;

// db.on('error', () => {
//     console.log("Failed to connect to productinfo component database!");
// });
// db.once('open', () => {
//     console.log('Successfully connected to productinfo component database!');
// })

var mongoDatabase;

MongoClient.connect('mongodb://kevinpozzi:password@54.213.209.245:27017/ProductInfo', function(err, client) {
    if (err) throw err;
    mongoDatabase = client.db('ProductInfo');
});

var testFunc = () => {
    return mongoDatabase;
}

module.exports.testFunc = testFunc;

// module.exports.testFunc = async () => await mongoDatabase