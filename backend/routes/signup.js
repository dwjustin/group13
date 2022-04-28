const express = require('express');
const { check, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");

router.post(
    "/signup", 
    // [
    //     check("username", "Please Enter a Valid Username").not().isEmpty(),
    //     check("email", "Please enter a valid email").isEmail(),
    //     check("password", "Please enter a valid password").isLength({
    //     min: 6,
    //     }),
    // ],
    async (req, res) => {
        console.log(req.body)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }
    
        const { 
            username,
            email,
            password,
            data,
        } = req.body;
        try {
            const user = await User.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    msg: "User already exists"
                })
            }
            // console.log(data)
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in saving user");
        }
    }
)



module.exports = router;