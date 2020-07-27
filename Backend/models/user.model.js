const mongoose = require('mongoose');
const Schema= mongoose.Schema;
let user = new Schema({
    firstName:{
        type :String,
        required: true
    },
    lastName:{
        type :String,
        required: true
    },
    phoneNumber:{
        type :Number,
        required: true
    },
    gender:{
        type :String,
        required: true
    },
    email:{
        type :String,
        required: true
    },
    password:{
        type :String,
        required: true
    },
    dob:{
        type :String,
        required: true
    }

});
module.exports = mongoose.model('user',user);