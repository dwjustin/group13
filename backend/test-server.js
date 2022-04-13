const express = require('express');
const mongoose = require('mongoose')
const app = express();
const db = mongoose.connection
// const url = "mongodb://127.0.0.1:27017/apod"

const port = process.env.PORT || 3000;

const matches = [
    {
        name: 'Aditya',
        ID: 'zxc',
        matchValue: -1,
    },
    {
        name: 'Noah',
        ID: 'asd',
        matchValue: -1
    },
    {
        name: 'Kai',
        ID: 'qwe',
        matchValue: -1
    },
    {
        name: 'Dong',
        ID: 'zxcv',
        matchValue: -1
    },
    {
        name: 'Diana',
        ID: 'asdf',
        matchValue: -1
    },
    {
        name: 'Damien',
        ID: 'qwer',
        matchValue: -1
    },
    {
        name: 'Emir',
        ID: 'zxzx',
        matchValue: -1
    }
];

app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})

app.get('/', (req, res) => {
    res.send("Hello world!");
})