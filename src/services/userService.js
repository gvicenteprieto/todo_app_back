const bcrypt = require("bcryptjs");
const UserModel = require("../models/users.model.js");

const loginService = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username: username });
    if (!user)
      return res.status(404).json({ message: "User or Password not found" });

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid)
      return res.status(401).json({ message: "Invalid User or Password" });

    // const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
    //   expiresIn: "1h",
    // });

    const token = generateJWT(user.username);

    return res.status(200).json({ message: "User logged successfully", token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

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
    return res
      .status(200)
      .json({ message: "User deleted successfully", userDeleted });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

deleteUsersByIdService = async (req, res) => {
  try {
    const { id } = req.params;
    const userDeleted = await UserModel.findByIdAndDelete(id);
    console.log(`userDeleted ${userDeleted}`);
    return res
      .status(200)
      .json({ message: "User deleted successfully", userDeleted });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  loginService,

  registerService,
  getAllUsersService,
  deleteUsersByUsernameService,
  deleteUsersByIdService,
};
