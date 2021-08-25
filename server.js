const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

// load env variables

dotenv.config({path: './config/config.env'});

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>console.log(`Server is listening on port: ${PORT}...`));