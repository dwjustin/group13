
# BACKEND DESIGN
Document outlining the design process for the backend server

Authors: Noah Sedlik, Aditya Tummala, Damien Toh

## Resources
* [WDB - Lesson 7 - Express, Basic Web Servers](https://fullstackdecal.com/docs/Lessons/Lesson8)
* [WDB Lesson 10 - HTTP, REST, Postman](https://fullstackdecal.com/docs/Lessons/Lesson11)
* [WDB Lesson 13 - MongoDB, Authentication](https://fullstackdecal.com/docs/Lessons/Lesson14)
* [RESTful API Style Guide](https://fullstackdecal.com/docs/Lessons/Lesson11)
* [WDB Lesson 15 - MongoDB User Authentication](https://fullstackdecal.com/docs/Lessons/Lesson16)

## Backend Features

### User Sign-up
**TODO** Description of the data we'll need / endpoints / where data will be stored

#### Procedure
POST request to *sign-up* endpoint with the following Schema:

| Key      | Type   |
|----------|--------|
| username | String |
| password | String |

RETURNS unique integer *userID*

ERRORS if username is taken

Server-side, create new user with Username, Password, and a unique userID

userID is created by hashing the email

### User Sign-in
Description of the data we'll need / endpoints / how we'll do it

Possible CalNet ID login system

### Update Matching Preferences

### Roommate Matching
**TODO** How we plan to implement roommate matching and combine with frontend

GET request to *match* endpoint 

RETURNS JSON with the userID's of the matches sorted Highest-Lowest by match score

| Key        | Value          |
|------------|----------------|
| userID     | Integer        |
 | matchScore | Integer (1-10) |

## Project Specifications

### Database Schema and ["User" Model](https://fullstackdecal.com/docs/Lessons/Lesson14#configuring-the-user-model)

#### User Data
* Authentication
  * Email
  * Password
* Name
* Profile Picture
* "Tinder" roommate matching data
  * Are you clean (1-5)
  * Morning person vs. Night person
  * Smoking / drug tolerance?
  * Housing preference
    * Location (Unit 1, 2, 3, etc.)
    * Room size (Double, Triple, etc.)

#### User Schema:

| Datapoint              | Type    | Description              |
|------------------------|---------|--------------------------|
| username               | String  | User Email               |
| password**             | String  | User Password            |
| userID                 | Integer | unique user ID           |
| pictureURL             | TODO    | Profile picture          |
| data.cleanliness       | Integer | Cleanliness rating (1-5) |
| data.morningPerson     | Boolean | Morning Person (T/F)     |
| data.nightPerson       | Boolean | Night Owl (T/F)          |
| data.smokingTolerance  | Boolean | Okay with smoking? (T/F) |
| data.housing.unit1     | Boolean | Unit 1 Yes/No (T/F)      |
| data.housing.unit2     | Boolean | Unit 2 Yes/No (T/F)      |
| data.housing.unit3     | Boolean | Unit 3 Yes/No (T/F)      |
| data.housing.foothill  | Boolean | Foothill Yes/No (T/F)    |
| data.housing.clarkKerr | Boolean | Clark Kerr Yes/No (T/F)  |
| data.housing.martinez  | Boolean | Martinez   Yes/No (T/F)  |
| data.housing.blackwell | Boolean | Blackwell  Yes/No (T/F)  |

**never sent to frontend

### Database Model - CURD model

### URL Endpoints

| Name    | Type | Endpoint               | Description                            | Data                              | Parameters            |
|---------|------|------------------------|----------------------------------------|-----------------------------------|-----------------------|
| Sign-up | Post | /api/signup            | User Signup request                    | Signup details (see sign in)      | Username + Password   |
| Match   | Get  | /api/match/:userID     | List of users + a match score per user | JSON with user info + match score | Current user's userID |
| Profile | Get  | /api/profile/:targetID | Fetch a specific user profile          | JSON with user information        | Target User's userID  |
