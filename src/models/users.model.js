const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
