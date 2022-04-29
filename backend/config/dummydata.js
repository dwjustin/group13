/** Fills the local database with dummy users for testing. */
const setupServer = require('../index')
const User = require('../models/User')


const axios = require('axios');
const URL = "http://localhost:3002/api/signup"

const user1 = {
    "name": "Noah S",
    "username": "noahseds",
    "email": "noahsed@berkeley.edu",
    "password": "secure_password",
    "year": "freshman",
    "bio": "Web dev student with large goals :)",
    "data": {
        "cleanliness": 5,
        "morningPerson": true,
        "nightPerson": false,
        "smokingTolerance": false,
        "housing": {
            "unit1": true,
            "unit2": true,
            "unit3": false,
            "foothill": false,
            "clarkKerr": true,
            "martinez": false,
            "blackwell": true
        }
    }
}

const user2 = {
    "name": "Aditya T",
    "username": "adi-is-cool",
    "email": "adt@berkeley.edu",
    "password": "abcdefg",
    "year": "freshman",
    "bio": "CS student with many passions",
    "data": {
        "cleanliness": 3,
        "morningPerson": true,
        "nightPerson": true,
        "smokingTolerance": false,
        "housing": {
            "unit1": false,
            "unit2": true,
            "unit3": true,
            "foothill": false,
            "clarkKerr": true,
            "martinez": true,
            "blackwell": true
        }
    }
}

const user3 = {
    "name": "Damien T",
    "username": "DT",
    "email": "damien@berkeley.edu",
    "password": "abcd1234",
    "year": "freshman",
    "bio": "UC Berkeley freshman living the dream",
    "data": {
        "cleanliness": 4,
        "morningPerson": true,
        "nightPerson": true,
        "smokingTolerance": false,
        "housing": {
            "unit1": false,
            "unit2": false,
            "unit3": true,
            "foothill": false,
            "clarkKerr": false,
            "martinez": true,
            "blackwell": false
        }
    }
}

const user4 = {
    "name": "Kai",
    "username": "DT",
    "email": "wen@gmail.com",
    "password": "password",
    "year": "freshman",
    "bio": "Man of expensive tastes",
    "data": {
        "cleanliness": 5,
        "morningPerson": false,
        "nightPerson": true,
        "smokingTolerance": true,
        "housing": {
            "unit1": false,
            "unit2": true,
            "unit3": true,
            "foothill": true,
            "clarkKerr": false,
            "martinez": true,
            "blackwell": false
        }
    }
}

const user5 = {
    "name": "Diana",
    "username": "diana-rocks",
    "email": "diana@yahoo.org",
    "password": "p@ssw0rd",
    "year": "senior",
    "bio": "I like to collect gemstones and pins",
    "data": {
        "cleanliness": 3,
        "morningPerson": false,
        "nightPerson": true,
        "smokingTolerance": true,
        "housing": {
            "unit1": false,
            "unit2": false,
            "unit3": false,
            "foothill": false,
            "clarkKerr": false,
            "martinez": true,
            "blackwell": true
        }
    }
}

const user6 = {
    "name": "Dong Woo",
    "username": "DW-ftw",
    "email": "dw@outlook.org",
    "password": "abcd1234",
    "year": "junior",
    "bio": "International student from Korea",
    "data": {
        "cleanliness": 3,
        "morningPerson": true,
        "nightPerson": true,
        "smokingTolerance": false,
        "housing": {
            "unit1": false,
            "unit2": true,
            "unit3": false,
            "foothill": false,
            "clarkKerr": false,
            "martinez": true,
            "blackwell": false
        }
    }
}

const allUsers = [user1, user2, user3, user4, user5, user6]

async function main() {
    await setupServer()

    /* Drop all items in the database */
    await User.remove({})

    axios({
        method: "post",
        url: URL,
        "data": user1
    })
    axios({
        method: "post",
        url: URL,
        "data": user2
    })
    axios({
        method: "post",
        url: URL,
        "data": user3
    })
    axios({
        method: "post",
        url: URL,
        "data": user4
    })
    axios({
        method: "post",
        url: URL,
        "data": user5
    })
    axios({
        method: "post",
        url: URL,
        "data": user6
    })

    // allUsers.forEach(async (user) => {
    //     const getUser = await User.findOne({ "email": user.email })
    //     if (getUser !== null) {
    //         setTimeout(async () => {
    //             try {
    //                 axios({
    //                     method: "post",
    //                     url: "http://localhost:3002/api/signup",
    //                     "data": user,
    //                 })
    //                 console.log(`Added user ${user.name}!`)
    //             } catch (err) {
    //             }
    //         }, 1000)
    //     }
    // })
}

main()