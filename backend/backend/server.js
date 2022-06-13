const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const userRoutes = require('./Routes/UserRoutes')
const noteRoutes = require("./Routes/noteRoutes");
const { notFound, errorHandler} = require("./middleware/errorMiddleware");

dotenv.config();

app.use(cors());

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Note Tracker");
})

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started at port ${PORT}`));