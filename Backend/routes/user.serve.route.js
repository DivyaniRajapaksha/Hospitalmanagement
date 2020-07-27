const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let User=require('../models/user.model');

router.route('/add').post(function (req,res) {
    let  user = new User(req.body);
    user.save()
        .then(sup=>{
            res.status(200).json({'user':'successful'});
        }).catch(err=>{
        res.status(400).send('fail');
    });
});

router.route('/getAllUsers').get(function (req,res) {
    User.find(function (err,user) {
        if(!err){
            console.log(user);
            res.json(user);
        }else{
            res.status(400).send('fail');
        }
    });
});
router.get("/login/:email/:password",function (req,res) {

    let email = req.params.email;
    let password = req.params.password;
    User.findOne({ email: email, password: password },)
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
router.get("/getUser/:id",function (req,res) {

    let id = req.params.id;

    User.find({_id: id}).exec().then(item => {

        res.status(200).json(item)
    })
        .catch(err => {
            console.log("Fail")
            res.status(500).json(err);
        });
});

module.exports = router;