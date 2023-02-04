const mongoose = require('mongoose');
mongoose.set('strictQuery',false)
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);

    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;
