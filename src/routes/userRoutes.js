const { Router } = require("express");

const {
  loginController,

  registerController,
  getAllUsersController,
  deleteUsersByUsernameController,
  deleteUsersByIdController,
} = require("../controller/userController.js");


const userRouter = Router();

userRouter.post("/login", loginController)
userRouter.post("/register", registerController);

userRouter.get("/users", getAllUsersController);

userRouter.delete("/users/:username", deleteUsersByUsernameController);
userRouter.delete("/users/id/:id", deleteUsersByIdController);

module.exports = userRouter;
