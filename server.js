const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/connectDB");

const app = express();

const PORT = process.env.PORT || 5000;

// load env variables

dotenv.config({path: './config/config.env'});


// body parse

app.use(express.json());

// enable cors

app.use(cors());

// Routes

app.use("/api/v1/stores", require("./routes/stores"));


const start = async () => {
    try {
        await connectDB();
        app.listen(PORT,()=>console.log(`Server is listening on port: ${PORT}...`));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


start();