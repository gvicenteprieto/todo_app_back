const {
  getTaskService,
  getTaskByUserService,
  getMyTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} = require("../services/taskService.js");

const getTaskController = async (req, res) => {
  return await getTaskService(req, res);
};

const getTaskByUserController = async (req, res) => {
  return await getTaskByUserService(req, res);
};


const createTaskController = async (req, res) => {
  return await createTaskService(req, res);
};

const updateTaskController = async (req, res) => {
  return await updateTaskService(req, res);
};

const deleteTaskController = async (req, res) => {
  return await deleteTaskService(req, res);
};

module.exports = {
    getTaskByUserController,
  getTaskController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
};
