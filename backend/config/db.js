const mongoose = require("mongoose");

const MONGOURI = "mongodb://127.0.0.1:27017/"; // FIXME -- replace w/ correct mongo URI
const InitiateMongoServer = async () => {
  try {
    console.log('')
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;