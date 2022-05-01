const { successResponse, errorResponse } = require("../../helpers/response");
const codes = require("../../helpers/statuscode");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../db/models/user");

exports.doSignup = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        
        if (user) return errorResponse(res, "user already exist");
        
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create user
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        let savedUser = await newUser.save();
        let data = { email: savedUser.email, name: savedUser.name}
        savedUser = data;

        successResponse(res, "registered succesfully..!", savedUser);

    } catch (err) {

        console.log(err);
        errorResponse(res, "server error", codes.InternalServerError);
    }
}

exports.doLogin = async( req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email })
        if(!user) return res.json('user not found');

        bcrypt.compare( req.body.password, user.password).then(async (status) => {
            if(status) {
                const token = jwt.sign({ _id: user._id}, process.env.JWT);
                const userDetails = { email: user.email, name: user.name, token }
                successResponse(res," login successful", userDetails)
            } else {
                errorResponse(res,'Password error..!')
            }
            
        })

    } catch(err) {
        errorResponse(res, 'Server error', codes.InternalServerError)
    }
}