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

module.exports = mongoose.model("user", UserSchema);