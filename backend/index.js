const { randomInt } = require('crypto');
const { TestUser: testUser } = require('./models/TestUser');
const express = require('express');
const InitiateMongoServer = require('./config/db.js')

const setupServer = () => {
    const app = express();
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

    const match = require('./routes/match');
    const profile = require('./routes/profile');
    const signup = require('./routes/signup');
    const login = require('./routes/login');
    app.use('/api', match)
    app.use('/api', profile)
    app.use('/api', signup)
    app.use('/api', login)

    /* Start the database server */
    InitiateMongoServer();

    /* Start the server */
    app.use(express.json());

    app.listen(port, (req, res) => {
        console.log(`Listening on port ${port}...`);
    })
}

/** Only run server when index.js is run directly. */
if (require.main === module) {
    setupServer()
}

module.exports = setupServer