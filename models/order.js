const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let orderSchema = new Schema(
    {     
        pid:  {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        customerId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer'
        }, 
        created_at: { type: mongoose.Schema.Types.Date, default: Date.now},
        expires_at: { type: mongoose.Schema.Types.Date, default: Date.now},
        updated_at: mongoose.Schema.Types.Date
    },
    { versionKey: false }
);
let Order = mongoose.model('Order', orderSchema);
module.exports = Order;