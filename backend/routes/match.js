const express = require('express');
const app = express();
const router = express.Router();
const { testUser } = require("../models/TestUser");
const User = require("../models/User");

class MatchAlgo {
    /**
     * Return a list of users according to the match score
     * @param {Object} userObj The main user.
     * @param {[Object]} arrayOfUsers A list of object representing users.
     */
    static sortUsersByMatchScore(userObj, arrayOfUsers) {
        const result = []
        // Loop through all the users
        for (const matchUser of arrayOfUsers) {
            let point = 0
            for (const dataKey in matchUser.data) {
                if (dataKey !== 'housing') {
                    //Check if the value is the same; if yes, add one point
                    if (matchUser.data[dataKey] == userObj.data[dataKey]) {
                        point++
                    }
                } else {
                    for (const housingOption in matchUser.data.housing) {
                        if (matchUser.data.housing[housingOption] == userObj.data.housing[housingOption]) {
                            point++
                        }
                    }
                }
            }
            // Add points to result
            matchUser.matchScore = point
            // Add users to result
            result.push(matchUser)
        }

        // Return the final result
        return result.sort((a, b) => b.matchScore - a.matchScore)
    }
}

router.get("/match/:userID", (req, res) => {
    // Get the user
    const user = User.findOne(req.params.userID)
    const listOfUsers = User.find()
    // Get the person of interest
    res.send(MatchAlgo.sortUsersByMatchScore(user, listOfUsers));
})

module.exports = router;