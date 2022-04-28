const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.get("/profile/:targetID", async (req, res) => {
    const targetID = parseInt(req.params.targetID);
    const profile = await getProfile(targetID);
    if (profile === null) {
        res.status(404).send(`User with ID ${targetID} does not exist`);
    }
    res.append('Access-Control-Allow-Origin', ['http://localhost:3002/api/profile/1']);
    res.json(profile)
})

async function getProfile(targetID) {
    if(isNaN(targetID)) {
        throw new Error(`Error: targetID {targetID} must be a number`);
    }
    // TODO - make request to database and return userprofile JSON
    return await User.findOne({
        targetID
    }) // TODO - make sure this actually works with user IDs
}

module.exports = router;