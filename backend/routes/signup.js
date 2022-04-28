const express = require('express');
const { check, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");

router.post(
    "/signup", 
    [
        check("username", "Please Enter a Valid Username").not().isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
        min: 6,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }
    
        /* Destructure Request Body */
        const { 
            username,
            email,
            password,
            data,
        } = req.body;
        const {
            cleanliness,
            morningPerson,
            nightPerson,
            smokingTolerance,
            housing,
        } = data
        const {
            unit1,
            unit2,
            unit3,
            foothill,
            clarkKerr,
            martinez,
            blackwell,
        } = housing

        try {
            const user = await User.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    msg: "User already exists"
                })
            }
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in saving user");
        }
    }
)



module.exports = router;