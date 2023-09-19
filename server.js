const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");

const app = express();
const PORT = 5500;

connectDB();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/cars', require('./routes/car'));
app.use('/review', require('./routes/review'));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => { console.log(`Server running on port ${PORT}...`) });
});
