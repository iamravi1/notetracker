const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async() => {
    const uri = process.env.MONGODB_URI;
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("MongoDB established successfully");
    });
}

module.exports = connectDB;