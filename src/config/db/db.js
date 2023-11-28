const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

const connect = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("DB connected");
  } catch (e) {
    console.error(`error connecting to DB: ${e}`);
  }
};

module.exports = connect;
