const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        id:{
            type: String,
            required: true,
        },
        productid: {
            type: mongoose.ObjectId,
            required:true
        },
        count: {
            type: String,
            required:true
        },
        title: {
            type: String,
            required: true,
        },
        product: {
            type: String,
            type: String
        },
        desc: {
            type: String,
            required:true
        },
        pages: {
            type: Object,
            required:true
        },
        options: {
            type: Array,
            required: true
        }

    },
    {
        timestamps:true,
    }
    
);

module.exports = mongoose.model('Product',productSchema);