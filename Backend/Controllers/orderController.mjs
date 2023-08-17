import Order from "../Models/orderModel.mjs"

const createOrder = async (req,res)=>{

try {
    const newOrder = await Order.create(req.body);
    res.status(200).json({
        status: 'success',
        data : {newOrder}
    })
} catch (error) {
    res.status(error.status).json({
        status: 'failed to create order',
    })
}   
}

export{createOrder}