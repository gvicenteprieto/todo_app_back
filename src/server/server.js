const express = require("express");
const cors = require("cors");

const userRouter = require("../routes/userRoutes.js");
const taskRouter = require("../routes/taskRoutes.js");

const server = express();

server.use(cors('*'));
server.use(express.json());

server.use('/api', userRouter);
server.use('/api', taskRouter);

module.exports = server;