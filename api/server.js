const express = require("express");
const server = express();
const router = require("./users/users-router");
const session = require("express-session");
const Store = require("connect-session-knex")(session);

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1> Node APP is working</h1>");
});

server.use("/api", router);

module.exports = server;
