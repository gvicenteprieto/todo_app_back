const express = require("express");
const userRouter = require("../routes/userRoutes.js");
const taskRouter = require("../routes/taskRoutes.js");
const cors = require("cors");
server.use(cors('*'));
const server = express();

server.use(express.json());

server.use(userRouter);
server.use('/task', taskRouter);

module.exports = server;