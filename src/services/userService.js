const bcrypt = require("bcryptjs");
const UserModel = require("../models/users.model.js");
const generateJWT = require("../utils/generateJWT.js");

const loginService = async (req, res) => {
  const {
    username,
    password
  } = req.body;
  try {
    const user = await UserModel.findOne({
      username: username
    });
    if (!user)
      return res.status(404).json({
        message: "User or Password not found"
      });

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid)
      return res.status(401).json({
        message: "Invalid User or Password"
      });

    const token = generateJWT(user.username);

    return res.status(200).json({
      message: "User logged successfully",
      token
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

const registerService = async (req, res) => {
  try {
    const {
      username,
      password
    } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = await UserModel.create({
      username,
      password: hashPassword,
    });
    await newUser.save();
    return res
      .status(201)
      .json({
        message: "User registered successfully",
        user: newUser.username,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

getAllUsersService = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json({
      users: users.map((user) => user.username)
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal server error"
      });
  }
};

const getUserByIdService = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user === null) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    return res
      .status(200)
      .json({
        message: "User found successfully",
        user: user.username
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

const getUserByUsernameService = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      username: req.params.username
    });
    if (user === null) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    return res
      .status(200)
      .json({
        message: "User found successfully",
        user: user.username
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
}

const updateUserByIdService = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const user = await UserModel.findOne({
      _id: id
    });
    if (user === null) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    const updatedUser = await UserModel.findOneAndUpdate({
      _id: id
    }, req.body, {
      new: true,
    });
    return res
      .status(200)
      .json({
        message: "User updated successfully",
        user: updatedUser.username
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
}

const deleteUserByIdService = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const user = await UserModel.findById(id);
    if (user === null) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    const userDeleted = await UserModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({
        message: "User deleted successfully",
        userDeleted: user.username,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal server error"
      });
  }
};

const deleteUserByUsernameService = async (req, res) => {
  try {
    const {
      username
    } = req.params;
    const user = await UserModel.findOne({
      username
    });
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    const userDeleted = await UserModel.findOneAndDelete({
      username
    });
    return res
      .status(200)
      .json({
        message: "User deleted successfully",
        userDeleted: user.username
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal server error"
      });
  }
};

module.exports = {
  loginService,
  registerService,
  getAllUsersService,
  getUserByIdService,
  getUserByUsernameService,
  updateUserByIdService,
  deleteUserByIdService,
  deleteUserByUsernameService,
};