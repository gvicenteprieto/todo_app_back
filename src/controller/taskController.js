const {
  getTasksService,
  getTaskByUsernameService,
  // getMyTaskService,
  createTaskService,
  // updateTaskService,
  // deleteTaskService,
} = require("../services/taskService.js");

const getTasksController = async (req, res) => {
  return await getTasksService(req, res);
};

const getTaskByUsernameController = async (req, res) => {
  return await getTaskByUsernameService(req.username, res);
};


const createTaskController = async (req, res) => {
  return await createTaskService(req, res);
};

// const updateTaskController = async (req, res) => {
//   return await updateTaskService(req, res);
// };

// const deleteTaskController = async (req, res) => {
//   return await deleteTaskService(req, res);
// };

module.exports = {
  getTaskByUsernameController,
  getTasksController,
 createTaskController,
  // updateTaskController,
  // deleteTaskController,
};
