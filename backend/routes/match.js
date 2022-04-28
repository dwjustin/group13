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
        for (const matchUser of arrayOfUsers) {
            const userData = matchUser[1].data
            if (matchUser === userObj) {
                break;
            }
            let matchScore = 0
            for (const dataKey in userData) {
                if (dataKey !== 'housing') {
                    //Check if the value is the same; if yes, add one point
                    if (userData[dataKey] === userObj.data[dataKey]) {
                        matchScore++
                    }
                } else {
                    if (userData.housing === null) {
                        break;
                    }
                    for (const housingOption in userData.housing) {
                        if (userData.housing[housingOption] === userObj.data.housing[housingOption]) {
                            matchScore++
                        }
                    }
                }
            }
            // Add users to result
            result.push({ "user": matchUser, "matchScore": matchScore })
        }

        // Return the final result
        return result.sort((a, b) => b.matchScore - a.matchScore)
    }
}

router.get("/match/:userID", async (req, res) => {
    const user = await User.findOne({ "userID": req.params.userID })
    const listOfUsers = await (await User.find()).entries()
    res.json(MatchAlgo.sortUsersByMatchScore(user, listOfUsers));
})

module.exports = router;