const { getProject, getAllProjects, saveNewProject } = require('../../models/projects.model');

async function httpCreateProject (req, res) {
    const project = req.files;
    console.log(project)
    // await saveNewProject(body);
    // res.status(200).json('Project successfully created');
}

module.exports = {
    httpCreateProject,
}
