const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sudhi27krishna:3IrB5sC3r0Tv3SZi@cluster0.o8ndyjy.mongodb.net/CarReviewDB?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;