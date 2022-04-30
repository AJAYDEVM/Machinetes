//Validation
const Joi = require('@hapi/joi');
//register validation
const registerValidation =data=>{
    const schema= {
        name: Joi.string()
            .min(4).
            required(),
        password: Joi.string()
            .max(13)
            .min(6)
            .required(),

    };
    return Joi.validate(data,schema);
}
const loginValidation =data=>{
    const schema= {
        email: Joi.email()
    };
    return Joi.validate(data,schema);
}

 module.exports.registerValidation=registerValidation;
 module.exports.loginValidation=loginValidation;