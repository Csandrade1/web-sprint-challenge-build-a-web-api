const express = require("express");

const ProjectsRouter = require("./projects/projects-router");
const ActionsRouter = require("./actions/actions-router");
const server = express();

server.use(express.json());

server.use("/api/projects", ProjectsRouter);

server.use("/api/actions", ActionsRouter);
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
