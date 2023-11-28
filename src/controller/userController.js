const {
  registerService,
  getAllUsersService,
  deleteUsersByUsernameService,
  deleteUsersByIdService,
} = require("../services/userService.js");

const registerController = async (req, res) => {
  return await registerService(req, res);
};

const getAllUsersController = async (req, res) => {
  return await getAllUsersService(req, res);
};

const deleteUsersByUsernameController = async (req, res) => {
  return await deleteUsersByUsernameService(req, res);
};

const deleteUsersByIdController = async (req, res) => {
  return await deleteUsersByIdService(req, res);
};

module.exports = {
  registerController,
  getAllUsersController,
  deleteUsersByUsernameController,
  deleteUsersByIdController,
};
