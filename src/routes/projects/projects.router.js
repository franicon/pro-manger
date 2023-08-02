const express = require('express');

const { httpCreateProject } = require('./project.controller');
const file = require('../../@middleware/uploads');
const upload = require("../../@multer");

const projectsRouter = express.Router();

projectsRouter.post('/', upload.array('file'), httpCreateProject);

module.exports = projectsRouter;
