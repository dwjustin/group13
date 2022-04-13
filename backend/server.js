const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/* ENDPOINTS */
app.get("/", (req, res) => {
    res.send("Hello!");
})

app.get("/api/match/:userID", (req, res) => {
    const userID = parseInt(req.params.userID);
    res.send(userID);
})

/* Start the server */
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})
