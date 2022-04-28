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

/* Middleware */
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded());

/* ROUTING */

// NOTES, WE ARE USING THE TESTUSER.JS, NOT USER.JS ATM
const match = require('./routes/match');
const profile = require('./routes/profile');
const signup = require('./routes/signup');
app.use('/api', match)
app.use('/api', profile)
app.use('/api', signup)

/* Start the database server */
InitiateMongoServer();

/* Start the server */
app.use(express.json());

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}...`);
})
