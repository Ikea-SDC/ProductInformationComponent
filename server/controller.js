const db = require('../database/index');
const Models = require('../database/models');

exports.addProduct = function(req, res) {
    Models.product.create(req.body, (err,docs) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).send(docs);
        }
    })
}

exports.addReview = function(req, res) {
    Models.reviews.create(req.body, (err,docs) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).send(docs);
        }
    })
}

exports.updateProduct = function(req, res) {
    console.log('this is id: ',req.params.id)
    console.log('this is body: ', req.body)
    Models.product.findOneAndUpdate({productId: req.params.id}, req.body, {new: true}, (err, docs) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(docs);
        }
    })
}

exports.updateReview = function(req, res) {
    Models.reviews.findOneAndUpdate({productId: req.params.id}, req.body, {new: true}, (err, docs) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(docs);
        }
    })
}

exports.removeProduct = function(req, res) {
    Models.product.deleteOne({productId: req.params.id}, (err,docs) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(docs);
        }
    })
}

exports.removeReview = function(req, res) {
    Models.reviews.deleteOne({productId: req.params.id}, (err,docs) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(docs);
        }
    })
}

exports.getReviews = function(req, res) {
    Models.reviews.find({productId: req.params.id}, (err, docs) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).send(docs);
        }
    });
}

exports.getProduct = function(req, res) {
    Models.product.find({productId: req.params.id}, (err, docs) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).send(docs);
        }
    });
}
