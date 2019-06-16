const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reviewSchema = new Schema(
    {
       
        review: {type: mongoose.Schema.Types.String, required: true},
        rating: {type: mongoose.Schema.Types.Number, required: true},
        pid:  {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        customerId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer'
        }, 
        created_at: mongoose.Schema.Types.Date,
        updated_at: mongoose.Schema.Types.Date
    },
    { versionKey: false }
);
let Review = mongoose.model('Review', reviewSchema);
module.exports = Review;