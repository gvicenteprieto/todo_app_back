const express = require("express");
const userRouter = require("../routes/userRoutes.js");

const server = express();

server.use(express.json());

server.use(userRouter);

module.exports = server;
