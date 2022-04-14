const { randomInt } = require('crypto');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/* ENDPOINTS */
app.get("/", (req, res) => {
    res.send("Hello!");
})

app.get("/api/match/:userID", (req, res) => {
    // TODO -- run the matching algorithm
    res.send([ 
        {"userID": testUser.userID, "matchScore": randomInt(9) + 1},
        {"userID": testUser.userID * 2, "matchScore": randomInt(9) + 1},
    ]);
})

app.get("/api/profile/:targetID", (req, res) => {
    const targetID = parseInt(req.params.targetID);
    const profile = getProfile(targetID);
    res.send(profile);
    
})

/* Start the server */
app.use(express.json());

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}...`);
})

function getProfile(targetID) {
    if(isNaN(targetID)) {
        throw new Error("ahh");
    }
    // TODO - make request to database and return userprofile JSON
    return testUser;
}

const testUser = {
    "name": "testuser",
    "userID": 12345,
    "pictureURL": "https://tinder.com/static/tinder.png",
    "data": {
        "cleanliness": 5,
        "morningPerson": true,
        "nightPerson": false,
        "smokingTolerance": false,
        "housing": {
            "unit1": true,
            "unit2": false,
            "unit3": true,
            "foothill": false,
            "clarkKerr": true,
            "martinez": false,
            "blackwell": true,
        }
    }
}