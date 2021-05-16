const mongoose = require("mongoose");
require("dotenv").config();
//const MongoClient = require("mongodb").MongoClient;

module.exports = function () {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to MongoDb Atlas ...");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas ..");
      console.error(error);
    });
};
