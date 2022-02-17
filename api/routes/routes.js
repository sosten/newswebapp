const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');


router.post('/user', async (req, res) => {
    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, saltPassword);

    const user = new userModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:securePassword,
        confirmPassword:req.body.confirmPassword
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

module.exports = router;