const express = require('express');
const router = express.Router();
const User = require("../models/User");

// router.get("/profile/:targetID", async (req, res) => {
//     const targetID = parseInt(req.params.targetID);
//     const profile = await getProfile(targetID);
//     if (profile === null) {
//         res.status(404).send(`User with ID ${targetID} does not exist`);
//     }
//     // res.append('Access-Control-Allow-Origin', ['http://localhost:3002/api/profile/1']);
//     // res.json({ profile }) 
//     // FIXME
// })

router.get("/profile/:targetID", async (req, res) => {
    console.log(req.params.targetID)
    const user = await User.findOne({
        "userID": req.params.targetID
    });
    console.log(user)
    if (user) {
        return res.status(200).json({
            "user": user
        })
    }
    return res.status(400).send("user does not exist")

})

module.exports = router;