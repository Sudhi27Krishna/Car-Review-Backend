const Review = require("../models/Review");

const getReviewByCar = async (req, res) => {
    const { car_name } = req.body;
    try {
        const reviewFound = await Review.find({ car_name });
        res.status(200).json(reviewFound);
    } catch (error) {
        console.log(error);
    }
}

const createReviewByCar = async (req, res) => {
    const { username, review, rating } = req.body;
    const car_name = req.params.name;
    const newReview = { car_name, username, review, rating };
    try {
        const createdReview = await Review.create(newReview);
        console.log(createdReview);
        res.status(201).json(createdReview);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getReviewByCar, createReviewByCar }