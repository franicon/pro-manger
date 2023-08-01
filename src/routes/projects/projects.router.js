const express = require('express');

const { httpCreateProject } = require('./project.controller');
const file = require('../../@middleware/uploads');

const projectsRouter = express.Router();

projectsRouter.post('/', file, httpCreateProject);

module.exports = projectsRouter;
