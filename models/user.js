const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
    {
       
        name: {type: mongoose.Schema.Types.String, required: true},
        email: {type: mongoose.Schema.Types.String, required: true, unique: true },
        phoneNumber: { type: mongoose.Schema.Types.String, required: false, unique: true },
        password: mongoose.Schema.Types.String,
        created_at: mongoose.Schema.Types.Date,
        updated_at: mongoose.Schema.Types.Date
    },
    { versionKey: false }
);

userSchema.pre('save', function(next){
    //Cant use arrow function here as 'this' context would change
    let currentDate = new Date();
    this.updated_at = currentDate;
    //This is the first time document is being created.
    if(!this.created_at){
        this.created_at = currentDate;
    }
    next();
});


let User = mongoose.model('User', userSchema);
module.exports = User;