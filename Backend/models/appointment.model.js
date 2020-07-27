const mongoose = require('mongoose');
const Schema= mongoose.Schema;
let appointment = new Schema({
    symptoms:{
        type :String,
        required: true
    },
    reason:{
        type :String,
        required: true
    },
    days:{
        type :Number,
        required: true
    },
    allergy:{
        type :String,
        required: true
    },
    history:{
        type :String,
        required: true
    },
    doctorId:{
        type :String,
        required: true
    },
    customerId:{
        type :String,
        required: true
    }

});
module.exports = mongoose.model('appoinment',appointment);