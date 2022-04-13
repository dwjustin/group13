const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/* ENDPOINTS */
app.get("/", (req, res) => {
    res.send("Hello!");
})

app.get("/api/match/:userID", (req, res) => {
    // TODO -- run the matching algorithm
})

app.get("/api/profile/:targetID", (req, res) => {
    const targetID = parseInt(req.params.targetID);
    getProfile(targetID);
    res.send(targetID);
    
})

/* Start the server */
app.use(express.json());

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}...`);
})

function getProfile(targetID) {
    assert(isNaN(targetID));
    // TODO - make request to database and return userprofile JSON
}