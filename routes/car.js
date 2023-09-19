const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");

router.get('/', carController.getAllCars)
    .post('/', carController.createCars)
    .put('/', carController.updateRating);

module.exports = router;