const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(
    {
        files:{
            type: Array,
            required: true,
        },
        productid: {
            type: mongoose.ObjectId,
            required: true
        }

    },
    {
        timestamps:true,
    }
    
);

module.exports = mongoose.model('Image', imageSchema);