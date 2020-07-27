const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Appoinment=require('../models/appointment.model');
let Medicine=require('../models/medicine.model');

router.route('/add').post(function (req,res) {
    console.log("Apppooo")
    let  appoinment = new Appoinment(req.body);
    appoinment.save()
        .then(sup=>{
            console.log("Succc")
            res.status(200).json({'appoinment':'successful'});
        }).catch(err=>{
        console.log("fail")
        res.status(400).send('fail');
    });
});
router.get("/getAppoinments/:id",function (req,res) {

    let id = req.params.id;

    Appoinment.find({doctorId: id}).exec().then(item => {

        res.status(200).json(item)
    })
        .catch(err => {
            console.log("Fail")
            res.status(500).json(err);
        });
});
router.get("/getMedicine/:id",function (req,res) {

    let id = req.params.id;

    Medicine.find({patientId: id}).exec().then(item => {

        res.status(200).json(item)
    })
        .catch(err => {
            console.log("Fail")
            res.status(500).json(err);
        });
});
router.route('/addMed').post(function (req,res) {

    let  medicine = new Medicine(req.body);
    medicine.save()
        .then(sup=>{

            res.status(200).json({'medicine':'successful'});
        }).catch(err=>{
        console.log("fail")
        res.status(400).send('fail');
    });
});
router.route('/deleteItem/:id').get(function (req, res) {
    let id=req.params.id;

    Appoinment.deleteOne({_id:id}).then(sup=>{

        res.status(200).json({'appoinment':'successful'});
    }).catch(err=>{

        res.status(400).send('fail');
    });
});
module.exports = router;