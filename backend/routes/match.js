const express = require('express');
const app = express();
const router = express.Router();
const { testUser } = require("../models/TestUser");

router.get("/match/:userID", (req, res) => {
    // TODO -- run the matching algorithm
    res.send([ 
        {"userID": testUser.userID, "matchScore": Math.floor(Math.random() * 10) + 1},
        {"userID": testUser.userID * 2, "matchScore": Math.floor(Math.random() * 10) + 1},
    ]);
})

module.exports = router;