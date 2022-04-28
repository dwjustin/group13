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
                email
            });
            if (user) {
                return res.status(400).json({
                    msg: "User already exists"
                })
            }
            User.insertMany({
                "name": req.body.name,
                "username": req.body.username,
                "email": req.body.email,
                "userID": assignUserID(),
                // "pictureURL": "https://tinder.com/static/tinder.png",
                "year" : req.body.schoolyear,
                "bio" : req.body.bio,
                "data": {
                    "cleanliness": req.body.data.cleanliness,
                    "morningPerson": req.body.data.morningPerson,
                    "nightPerson": req.body.data.nightPerson,
                    "smokingTolerance": req.body.data.smokingTolerance,
                    "housing": {
                        "unit1": req.body.data.housing.unit1,
                        "unit2": req.body.data.housing.unit2,
                        "unit3": req.body.data.housing.unit3,
                        "foothill": req.body.data.housing.foothill,
                        "clarkKerr": req.body.data.housing.clarkKerr,
                        "martinez": req.body.data.housing.martinez,
                        "blackwell": req.body.data.housing.blackwell,
                    },
                }
            })
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in saving user");
        }
    }
)

function assignUserID() {
    let ID = Math.floor(Math.random() * 10000) + 1
    let user = User.findOne({
        "userID": "" + ID
    })
    if (user != null) {
        ID = assignUserID()
    }
    return ID
}


module.exports = router;