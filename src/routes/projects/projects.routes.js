const express = require('express');

const { httpCreateProject } = require("./project.controller");

const projectsRoute = express.Router();

projectsRoute.post('/', httpCreateProject);


module.exports = projectsRoute;
