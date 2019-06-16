const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = new Schema(
    {
       
        name: {type: mongoose.Schema.Types.String, required: true},
        description: {type: mongoose.Schema.Types.String},
        created_at: mongoose.Schema.Types.Date,
        updated_at: mongoose.Schema.Types.Date
    },
    { versionKey: false }
);
let Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;