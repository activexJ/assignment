const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema(
    {
        name: {type: mongoose.Schema.Types.String, required: true},
        description: {type: mongoose.Schema.Types.String},
        created_at: mongoose.Schema.Types.Date,
        updated_at: mongoose.Schema.Types.Date
    },
    { versionKey: false }
);
let Product = mongoose.model('Product', productSchema);
module.exports = Product;