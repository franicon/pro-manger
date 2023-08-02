const express = require('express');

const { httpCreateProject } = require('./project.controller');
const file = require('../../@middleware/uploads');
const upload = require("../../@multer/index");


const projectsRouter = express.Router();

projectsRouter.post('/',upload.array('image'), httpCreateProject);

module.exports = projectsRouter;
