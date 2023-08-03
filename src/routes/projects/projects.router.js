const express = require('express');

const file = require('../../@middleware/uploads');
const { httpCreateProject } = require('./project.controller');

const projectsRouter = express.Router();

projectsRouter.post('/',httpCreateProject);

module.exports = projectsRouter;
