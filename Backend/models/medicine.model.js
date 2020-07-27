const mongoose = require('mongoose');
const Schema= mongoose.Schema;
let medicine = new Schema({
    medicine:{
        type :String,
        required: true
    },
    actions:{
        type :String,
        required: true
    },
    doctorId:{
        type :String,
        required: true
    },
    patientId:{
        type :String,
        required: true
    },
    appoinmentID:{
        type :String,
        required: true
    }

});
module.exports = mongoose.model('medicine',medicine);