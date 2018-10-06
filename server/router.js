const express = require('express');
const router = express.Router();
const controller = require('./controller');

router
    .route('/product/:id')
    .get(controller.getProduct)
    .post(controller.addProduct)
    .put(controller.updateProduct)
    .delete(controller.removeProduct);

router
    .route('/reviews/:id')
    .get(controller.getReviews)
    .post(controller.addReview)
    .put(controller.updateReview)
    .delete(controller.removeReview);

module.exports = router;