const Car = require("../models/Car");

const getAllCars = async (req, res) => {
    try {
        const carsFound = await Car.find({});
        res.status(200).json(carsFound);
    } catch (error) {
        console.log(error);
    }
}

const createCars = async (req, res) => {
    const { car_name, engine, seats, mileage, price, transmission, fuel, rating_avg, review_count, photo } = req.body;
    try {
        const createdCar = await Car.create({ car_name, engine, seats, mileage, price, transmission, fuel, rating_avg, review_count, photo });
        res.status(201).json(createdCar);
    } catch (error) {
        
        console.log(error);
    }
}

const updateRating = async (req, res) => {
    const { car_name, rating } = req.body;

    try {
        const carFound = await Car.findOne({ car_name });
        const avg = ((carFound.rating_avg * carFound.review_count) + rating) / (carFound.review_count + 1);
        const newCnt = carFound.review_count + 1;
        const updatedCar = await Car.findOneAndUpdate({ car_name }, { rating_avg: avg, review_count: newCnt }, { new: true });
        res.status(201).json(updateCar);
    } catch (error) {
        console.log(error);
    }

}

module.exports = { getAllCars, updateRating, createCars };