const express = require("express");
const router = express.Router();
const verify = require("../../middleware/verify/verifytoken")

router.post("/place-order" , verify);



module.exports = router;