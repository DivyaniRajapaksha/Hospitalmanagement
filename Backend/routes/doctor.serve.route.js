const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Doctor=require('../models/doctor.model');

router.route('/add').post(function (req,res) {
    let  doctor = new Doctor(req.body);
    doctor.save()
        .then(sup=>{
            res.status(200).json({'doctor':'successful'});
        }).catch(err=>{
        res.status(400).send('fail');
    });
});
router.get("/getDetails/:email",function (req,res) {

    let email = req.params.email;

    Doctor.find({ email: email }).exec().then(item => {

        res.status(200).json(item)
    })
        .catch(err => {
            console.log("Fail")
            res.status(500).json(err);
        });
});
router.get("/getAvailable",function (req,res) {

    Doctor.find({ status: "online" }).exec().then(item => {
        res.status(200).json(item)
    })
        .catch(err => {
            console.log("Fail")
            res.status(500).json(err);
        });
});
router.get("/searchDoctors/:specialarity",function (req,res) {
    let specialarity=req.params.specialarity;
    Doctor.find({ specialization:specialarity }).exec().then(item => {

        res.status(200).json(item)
    })
        .catch(err => {
            console.log("Fail")
            res.status(500).json(err);
        });
});
router.get("/selectDoctors/:id",function (req,res) {
    let id=req.params.id;
    Doctor.find({ _id:id }).exec().then(item => {

        res.status(200).json(item)
    })
        .catch(err => {
            console.log("Fail")
            res.status(500).json(err);
        });
});
router.get("/login/:email/:password",function (req,res) {

    let email = req.params.email;
    let password = req.params.password;
    Doctor.findOne({ email: email, password: password },)
        .exec()
        .then(userValid =>{
            if( userValid ){
                res.status(200).json({"Message": userValid});
            }else{
                res.status(200).json({"Message": "unsuccessful"});
            }
        }).catch(err=>{
        res.status(500).json(err);
    })
});
module.exports = router;