const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  pictureURL: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: true,
  },
  data: {
    cleanliness: Number,
    morningPerson: Boolean,
    nightPerson: Boolean,
    smokingTolerance: Boolean,
    housing: {
      unit1: Boolean,
      unit2: Boolean,
      unit3: Boolean,
      foothill: Boolean,
      clarkKerr: Boolean,
      martinez: Boolean,
      blackwell: Boolean,
    }
  }
})

/* Old User Scheme */
/* const UserSchema = mongoose.Schema(
    {
    name: {
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
        // required: true
    }
  }); */

module.exports = mongoose.model("user", UserSchema);