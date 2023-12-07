const {
  loginService,
  registerService,
  getAllUsersService,
  getUserByIdService,
  getUserByUsernameService,
  updateUserByIdService,
  deleteUserByUsernameService,
  deleteUserByIdService,
} = require("../services/userService.js");

const loginController = async (req, res) => {
  return await loginService(req, res);
};

const registerController = async (req, res) => {
  return await registerService(req, res);
};

const getAllUsersController = async (req, res) => {
  return await getAllUsersService(req, res);
};

const getUserByIdController = async (req, res) => {
  return await getUserByIdService(req, res);
};

const getUserByUsernameController = async (req, res) => {
  return await getUserByUsernameService(req, res);
};

const updateUserByIdController = async (req, res) => {
  return await updateUserByIdService(req, res);
};

const deleteUserByIdController = async (req, res) => {
  return await deleteUserByIdService(req, res);
};

const deleteUserByUsernameController = async (req, res) => {
  return await deleteUserByUsernameService(req, res);
};

module.exports = {
  loginController,
  registerController,
  getAllUsersController,
  getUserByIdController,
  getUserByUsernameController,
  updateUserByIdController,
  deleteUserByUsernameController,
  deleteUserByIdController,
};
