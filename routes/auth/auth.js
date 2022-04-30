const express = require("express");
const router = express.Router();
const { doSignup, doLogin } = require("../../controller/authController/auth")

router.post("/register" , doSignup);

router.post("/login", doLogin);


module.exports = router;