const { Router } = require("express");

const {
     getTasksController,
    createTaskController,
    // //by UsernameController, 
    // updateTaskController,
    // deleteTaskController,
    getTaskByUsernameController
} = require("../controller/taskController.js");
const validateToken = require("../utils/validateToken.js");
const {
    body
} = require("express-validator");
const validator = require("../utils/validator.js");

const taskRouter = Router();

taskRouter.get("/tasks", getTasksController)
taskRouter.get("/user-task", validateToken, getTaskByUsernameController)
taskRouter.post("/task/:username", createTaskController)
// taskRouter.post("/task", validateToken, body('title').isString().isEmpty(), body('description').isString().isLength({
//     min: 8
// }), validator, createTaskController)
//taskRouter.put("/task/:id", updateTaskController)
// taskRouter.delete("/task/:id", deleteTaskController)


module.exports = taskRouter;