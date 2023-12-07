const { Router } = require("express");

const {
  loginController,
  registerController,
  getAllUsersController,
  getUserByIdController,
  getUserByUsernameController,
  updateUserByIdController,
  deleteUserByUsernameController,
  deleteUserByIdController,
} = require("../controller/userController.js");


const userRouter = Router();

userRouter.post("/login", loginController)
userRouter.post("/register", registerController);

userRouter.get("/users", getAllUsersController);
userRouter.get("/user/id/:id", getUserByIdController);
userRouter.get("/user/username/:username", getUserByUsernameController);

userRouter.put("/user/id/:id", updateUserByIdController);

userRouter.delete("/user/id/:id", deleteUserByIdController);
userRouter.delete("/user/username/:username", deleteUserByUsernameController);

module.exports = userRouter;
