const { Router } = require("express");

const {
    getTaskController,
    createTaskController,
    updateTaskController,
    deleteTaskController,
    getTaskByUserController
} = require("../controller/taskController.js");
const validateToken = require("../utils/validateToken.js");
const {
    body
} = require("express-validator");
const validate = require("../utils/validator.js");

const taskRouter = Router();

//taskRouter.use(express.json());

taskRouter.get("/task", getTaskController)
taskRouter.get("/my-task", validateToken, getTaskByUserController)
taskRouter.post("/task", validateToken, body('title').isString(), body('description').isString().isLength({
    min: 8
}), validator, createTaskController)
taskRouter.put("/task/:id", updateTaskController)
taskRouter.delete("/task/:id", deleteTaskController)


module.exports = taskRouter;