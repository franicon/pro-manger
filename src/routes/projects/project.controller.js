const { getProject, getAllProjects, saveNewProject } = require('../../models/projects.model');

async function httpCreateProject (req, res) {
    const project = await req.body;
    res.status(200).json(project)
    // await saveNewProject(body);
    // res.status(200).json('Project successfully created');
}

module.exports = {
    httpCreateProject
}
