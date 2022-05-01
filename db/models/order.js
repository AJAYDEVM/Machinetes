const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        clientid:{
            type: String,
            required: true,
        },
        order_ref_no: {
            type: String,
            required:true
        },
        date: {
            type: Date,
            default: new Date,
        },
        priority: {
            type: String,
            required: true
        },
        addressess: {
            type: Array,
            required:true
        },
        shipping: {
            type: Object,
            required:true
        }

    },
    {
        timestamps:true,
    }
    
);

module.exports = mongoose.model('Order',orderSchema);