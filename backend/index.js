const { randomInt } = require('crypto');
const { TestUser: testUser } = require('./models/TestUser');
const express = require('express');
const app = express();
const InitiateMongoServer = require('./config/db.js')
const port = process.env.PORT || 3002;


/* ENDPOINTS */
app.get("/", (req, res) => {
    res.status(200).send("Connection established.")
})

const match = require('./routes/match');
app.use('/api', match)

app.get("/api/profile/:targetID", (req, res) => {
    const targetID = parseInt(req.params.targetID);
    const profile = getProfile(targetID);
    res.append('Access-Control-Allow-Origin', ['http://localhost:3002/api/profile/1']);
    res.send(profile);
})

/* Start the server */
app.use(express.json());

/* Start the database server */
InitiateMongoServer();

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}...`);
})

function getProfile(targetID) {
    if(isNaN(targetID)) {
        throw new Error("ahh");
    }
    // TODO - make request to database and return userprofile JSON
    mongo
    return testUser;
}
