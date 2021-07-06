const mongoose = require('mongoose');
const { v1:uuidv1 } = require('uuid');
const crypto = require('crypto');

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

userScheme.virtual(password)
          .set((password) => {
              this._password = password;
              this.salt = uuidv1();
              this.hashes_password = this.cryptPassword(password);
          })
          .get(() => {return password})  ;

userScheme.methods = {

    cryptPassword = function (password) {
        if (!password) {
            return '';
        }
        try {
           return crypto.createHmac('sha1', salt)
                  .update(password) 
                  .digest('hex') 
        }
        catch {
            return '';
        }
    }
}  

module.exports = mongoose.model('User', userScheme);