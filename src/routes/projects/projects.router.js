const express = require('express');

const file = require('../../@middleware/uploads');
const { httpCreateProject } = require('./project.controller');

const projectsRouter = express.Router();

projectsRouter.post('/',file, httpCreateProject);

module.exports = projectsRouter;
