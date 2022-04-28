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
    
        try {
            let user = await User.findOne({
                "email": req.body.email
            });
            if (user) {
                return res.status(400).json({
                    "message": "User already exists",
                })
            }

            /* Destructure Request Body */
            const {
                name,
                username,
                email,
                password,
                year,
                bio
            } = req.body
            const {
                cleanliness,
                morningPerson,
                nightPerson,
                smokingTolerance
            } = req.body.data
            const {
                unit1,
                unit2, 
                unit3,
                foothill,
                clarkKerr,
                martinez,
                blackwell
            } = req.body.data.housing
            console.log(req.body)
            
            const userID = assignUserID();
            data = {
                cleanliness,
                morningPerson,
                nightPerson,
                smokingTolerance,

            }
            user = new User({
                name,
                username,
                email,
                password,
                userID,
                year,
                bio,
                "data": {
                    cleanliness,
                    morningPerson,
                    nightPerson,
                    smokingTolerance,
                    "housing": {
                        unit1,
                        unit2,
                        unit3,
                        foothill,
                        clarkKerr,
                        martinez,
                        blackwell 
                    }
                }
            });
            console.log(user)
            User.create(user)
            res.json({
                "message": `Successfully created user ${req.body.name} with ID ${userID}`,
                "userID": userID
            })
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in saving user");
        }
    }
)

function assignUserID() {
    let ID = Math.floor(Math.random() * 10000000) + 1
    return ID
}


module.exports = router;