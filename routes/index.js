const express = require("express");

const app = express();
const authRoute = require("../routes/auth/auth");
const orderRoute = require('../routes/order/order')

app.use("/auth", authRoute);
app.use("/order", orderRoute);

module.exports = app;