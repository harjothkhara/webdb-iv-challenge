//database connection

const knex = require("knex");
const knexConfig = require("../knexfile.js"); // { development }

const db = knex(knexConfig.development);  //which config key am i going to pick

module.exports = db;