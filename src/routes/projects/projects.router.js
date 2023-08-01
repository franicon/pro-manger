const express = require('express');

const { httpCreateProject, file } = require("./project.controller");

const projectsRouter = express.Router();

projectsRouter.post('/', httpCreateProject);

module.exports = projectsRouter;
