const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.get("/profile/:targetID", async (req, res) => {
    console.log(req.params.targetID)
    const user = await User.findOne({
        "userID": "" + req.params.targetID
    });
    console.log(user)
    if (user) {
        return res.status(200).json({
            "user": user
        })
    }
    return res.status(400).send(`User with ID ${req.params.targetID} does not exist`)

})

module.exports = router;