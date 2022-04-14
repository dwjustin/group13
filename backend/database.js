const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userID: {
      type: Array,
      required: true,
    },
    pictureURL: {
        type: Object,
        required: false,
    },
    cleanliness: {
        type: Number,
        required: true,
    },
    morningPerson: {
        type: Boolean,
        required: true,
    },
    nightPerson: {
        type: Boolean,
        required: true,
    },
    smokingTolerance: {
        type: Boolean,
        required: true,
    },
    location: {
        Unit1: Boolean,
        Unit2: Boolean,
        Unit3: Boolean,
        Clark_Keer: Boolean,
        Foothill: Boolean,
        Blackwell: Boolean,
        Martinez: Boolean,
        required: true
    }
  });




//Ignore the following, previous implementation of Location Schema
//   ]    locationUnit1: {
//     type: Boolean,
//     required: true,
// },
// locationUnit2: {
//     type: Boolean,
//     required: true,
// },
// locationUnit3: {
//     type: Boolean,
//     required: true,
// },
// locationClarkKerr: {
//     type: Boolean,
//     required: true,
// },
// locationFoothill: {
//     type: Boolean,
//     required: true,
// },