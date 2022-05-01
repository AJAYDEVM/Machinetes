const express = require("express");
const router = express.Router();
const verify = require("../../middleware/verify/verifytoken")
const { createOrder } = require("../../controller/orderController/order")


router.post("/place-order" , verify, createOrder);



module.exports = router;