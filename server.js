const express = require("express");
const helmet = require("helmet");
const dishRouter = require("./routers/dishRouter.js");
const recipeRouter = require("./routers/recipeRouter.js");
const ingredRouter = require("./routers/ingredRouter.js");

const server = express();

//middleware
server.use(helmet());
server.use(express.json());

server.use("/api/dishes", dishRouter);
server.use("/api/recipes", recipeRouter);
server.use("/api/ingredients", ingredRouter);

module.exports = server;