const express = require("express");
const helmet = require("helmet");
const dishRouter = require("./routers/dishRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/dishes, dishRouter");

module.exports = server