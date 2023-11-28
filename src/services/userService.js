const bcrypt = require("bcryptjs");
const UserModel = require("../models/users.model.js");

const registerService = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = await UserModel.create({
      username,
      password: hashPassword,
    });
    await newUser.save();
    console.log(newUser);
    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

getAllUsersService = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

deleteUsersByUsernameService = async (req, res) => {
    try {
        const { username } = req.params;
        console.log(username);
        const userDeleted = await UserModel.findOneAndDelete({ username });
        console.log(userDeleted);
        return res.status(200).json({ message: "User deleted successfully", userDeleted });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

deleteUsersByIdService = async (req, res) => {
    try {
        const { id } = req.params;
        const userDeleted = await UserModel.findByIdAndDelete(id);
        console.log(`userDeleted ${userDeleted}`);
        return res.status(200).json({ message: "User deleted successfully", userDeleted });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

module.exports = {
  registerService,
  getAllUsersService,
  deleteUsersByUsernameService,
  deleteUsersByIdService
};
