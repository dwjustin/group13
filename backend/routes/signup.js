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
            const user = await User.findOne({
                "email": req.body.email
            });
            if (user) {
                return res.status(400).json({
                    "message": "User already exists",
                    "user": user
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
            user = new User({
                name,
                username,
                email,
                password,
                userID,
                year,
                bio,
                    cleanliness,
                    morningPerson,
                    nightPerson,
                    smokingTolerance,
                        unit1,
                        unit2,
                        unit3,
                        foothill,
                        clarkKerr,
                        martinez,
                        blackwell
            });
            console.log(user)
            User.create(user)
            // await user.save();
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
    console.log(ID)
    // let user = User.findOne({
    //     "userID": "" + ID
    // }, (err, result) => {
    //     if (result != null) {
    //         ID = assignUserID()
    //     }
    //     return ID
    // })
    return ID
}


module.exports = router;