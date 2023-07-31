const express = require('express');

const { httpCreateProject } = require("./project.controller");

const projectsRouter = express.Router();

projectsRouter.post('/', httpCreateProject);

module.exports = projectsRouter;
