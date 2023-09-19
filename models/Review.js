const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
    car_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    likes: {
        type: Number
    }
});

module.exports = new mongoose.model("Review", ReviewSchema);

