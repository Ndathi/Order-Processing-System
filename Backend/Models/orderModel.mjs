import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
order_id : {
    type : String
},
customer_id : {
    type : String
},
item_description : {
    type: String
},
quantity : {
    type : String
},
price : {
    type : Number
},
total : {
    type : Number
},
order_description : {
    type : String
}
})

const Order = mongoose.model('Order', orderSchema);

export default Order;