const { Router } = require("express");

const {
  registerController,
  getAllUsersController,
  deleteUsersByUsernameController,
  deleteUsersByIdController,
} = require("../controller/userController.js");


const userRouter = Router();

userRouter.post("/register", registerController);

userRouter.get("/users", getAllUsersController);

userRouter.delete("/users/:username", deleteUsersByUsernameController);
userRouter.delete("/users/id/:id", deleteUsersByIdController);

module.exports = userRouter;
