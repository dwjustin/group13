const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/* ENDPOINTS */
app.get("/", (req, res) => {
    res.send("Hello!");
})

app.get("/api/match/:userID", (req, res) => {
    res.send(req.params.userID);
})

/* Start the server */
app.use(express.json());

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}...`);
})