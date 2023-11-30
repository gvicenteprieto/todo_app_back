const express = require("express");
const userRouter = require("../routes/userRoutes.js");
const taskRouter = require("../routes/taskRoutes.js");

const server = express();

server.use(express.json());

server.use(userRouter);
server.use(taskRouter);

module.exports = server;
