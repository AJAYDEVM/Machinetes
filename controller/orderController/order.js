const Order = require("../../db/models/order");
const Product = require("../../db/models/product")
const Image = require("../../db/models/order-image")
const { successResponse, errorResponse} = require("../../helpers/response")
const codes = require("../../helpers/statuscode");


exports.createOrder = async(req,res) => {
    try {

        console.log(req.body.order_ref_no,req.body.shipping);
        const order = await Order.findOne({order_ref_no:req.body.order_ref_no})
        if(order) return errorResponse(res,'Order already exist');
        
        const newOrder = new Order({
            clientid: req.body.clientid,
            order_ref_no:req.body.order_ref_no,
            date:req.body.date,
            priority: req.body.priority,
            addressess:req.body.addresses,
            shipping:req.body.shipping
            
        });

        let savedOrder = await newOrder.save();
        
        await Product.create({
            productid: savedOrder._id,
            id: req.body.items[0].id,
            count:req.body.items[0].count,
            title:req.body.items[0].title,
            product: req.body.items[0].product,
            desc:req.body.items[0].desc,
            pages:req.body.items[0].pages,
            oprions: req.body.items[0].oprions
            
        });

        await Image.create({
            productid: savedOrder._id,
            files: req.body.items[0].files
        })
        
        successResponse(res,"order placed successfully",savedOrder._id);
    } catch(err) {
        console.log(err);
        errorResponse(res,'Server error..', codes.InternalServerError)
    }
}