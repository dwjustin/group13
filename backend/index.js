const { randomInt } = require('crypto');
const { TestUser: testUser } = require('./models/TestUser');
const express = require('express');
const app = express();
const InitiateMongoServer = require('./config/db.js')
const port = process.env.PORT || 3002;


/* BASIC TEST */
app.get("/", (req, res) => {
    res.status(200).send("Connection established.")
})

/* ROUTING */

// NOTES, WE ARE USING THE TESTUSER.JS, NOT USER.JS ATM

const match = require('./routes/match');
const profile = require('./routes/profile');
app.use('/api', match)
app.use('/api', profile)


/* Start the server */
app.use(express.json());

/* Start the database server */
InitiateMongoServer();

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}...`);
})
