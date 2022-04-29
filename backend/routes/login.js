const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.get("/login/", async (req, res) => {
    console.log(req.body.email)
    const user = await User.findOne({
        "email": "" + req.body.email,
        "password": "" + req.body.password,
    });
    // console.log(user)
    if (user) {
        return res.status(200).json({
            "user": user,
            "userID": user.userID,
        })
    }
    return res.status(400).send(`Incorrect username / password combination`)

})

module.exports = router;