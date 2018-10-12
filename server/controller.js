const {testFunc} = require('../database/index');

exports.addProduct = function(req, res) {
    testFunc().collection('products').create(req.body, (err, docs) => {
        if (err) throw err;
        res.status(200).send(docs);
    })
}

exports.addReview = function(req, res) {
    testFunc().collection('reviews').create(req.body, (err, docs) => {
        if (err) throw err;
        res.status(200).send(docs);
    })
}

exports.updateProduct = function(req, res) {
    testFunc().collection('products').findOneAndUpdate({productId: Number(req.params.id)}, req.body, (err, docs) => {
        if (err) throw err;
        res.status(200).send(docs);
    })
}

exports.updateReview = function(req, res) {
    testFunc().collection('reviews').findOneAndUpdate({productId: Number(req.params.id)}, req.body, (err, docs) => {
        if (err) throw err;
        res.status(200).send(docs);
    })
}

exports.removeProduct = function(req, res) {
    testFunc().collection('products').deleteOne({productId: Number(req.params.id)},(err, docs) => {
        if (err) throw err;
        res.status(200).send(docs);
    })
}

exports.removeReview = function(req, res) {
    testFunc().collection('reviews').deleteOne({productId: Number(req.params.id)},(err, docs) => {
        if (err) throw err;
        res.status(200).send(docs);
    })
}

exports.getReviews = function(req, res) {
    testFunc().collection('reviews').find({productId: Number(req.params.id)}).toArray((err, docs) => {
        if (err) throw err;
        res.status(200).send(docs);
    })
}

exports.getProduct = function(req, res) {
    testFunc().collection('products').findOne({productId: Number(req.params.id)},(err, docs) => {
        if (err) throw err;
        res.status(200).send(docs);
    })
}
