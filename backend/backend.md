
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
Description of the data we'll need / endpoints / where data will be stored

#### Procedure
POST request to *sign-up* endpoint with the following Schema:

| Key      | Type   |
|----------|--------|
| Username | String |
| Password | String |

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

### Database Model

User Schema:


#### CURD Data Retrieval 

##### Create

##### Update

##### Retrieve

##### Destroy

### URL Endpoints

| Name    | Type | Endpoint     | Description                            | Data                              | Parameters           |
|---------|------|--------------|----------------------------------------|-----------------------------------|----------------------|
| Home    | Get  | /            | Homepage                               | Homepage index.html               | None                 |
| Sign-up | Post | /api/signup  | User Signup request                    | Signup details (see sign in)      | Username + Password  |
| Match   | Get  | /api/match   | List of users + a match score per user | JSON with user info + match score | User's Username      |
| Profile | Get  | /api/profile | Fetch a specific user profile          | JSON with user information        | Target User's userID |

### Sample Users and Data