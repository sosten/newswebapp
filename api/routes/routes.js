const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');


router.post('/user', async (req, res) => {
    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, saltPassword);
    const saltConfrimPassword = await bcrypt.genSalt(10);
    const secureConfirmPassword = await bcrypt.hash(req.body.confirmPassword, saltConfrimPassword)

    const user = new userModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:securePassword,
        confirmPassword:secureConfirmPassword
    })
    console.log(user)
    user.save()
    .then(data=>{
        res.json(data)
        console.log(data)
    })
    .catch(err =>{
        res.json(err)
    })
});

router.get('/getusers', async (req, res) => {
    userModel.find()
    .then(data=>{
        res.json(data)
    })
    .catch(err =>{
        console.log(err)
        res.json({massage: "Users not found"})
    })
})

module.exports = router;