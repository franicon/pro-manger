const { getProject, getAllProjects, saveNewProject } = require('../../models/projects.model');

async function httpCreateProject (req, files, res) {
    // const project = req.files;
    // res.status(200).json(project);
    // console.log(project)
    // await saveNewProject(body);
    // res.status(200).json('Project successfully created');
}

module.exports = {
    httpCreateProject,
}
