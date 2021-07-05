const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    firstName : {
        type: String,
        trime: true,
        required: true,
        maxlength: 50,
        minlength: 3
    },
    lastName : {
        type: String,
        trime: true,
        required: true,
        maxlength: 50,
        minlength: 3
    },
    email: {
        type: String,
        reuired: true,
        trim: true,
        maxlength: 50,
        unique: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    about: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    }
    
},{timestamps:true})
module.exports = mongoose.model('User', userScheme);