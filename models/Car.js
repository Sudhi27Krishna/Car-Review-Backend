const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({
    car_name: {
        type: String,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    seats: {
        type: String,
        required: true
    },
    mileage: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    rating_avg: {
        type: Number,
        default: 0
    },
    review_count: {
        type: Number,
        default: 0
    },
    photo: {
        type: String
    }
});

module.exports = new mongoose.model("Car", CarSchema);

