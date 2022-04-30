require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const route = require("./routes")

const PORT = process.env.PORT;
//connect to Db
require('./db').connect();

//Middleware
app.use(express.json());

//main url
app.use("/", route);


app.listen(PORT,async ()=>{
    console.log(`app is running on port ${PORT}`);

})
