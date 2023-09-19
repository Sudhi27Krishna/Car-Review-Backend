const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.get('/', reviewController.getReviewByCar)
    .post('/:name', reviewController.createReviewByCar);

module.exports = router;