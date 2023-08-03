const { getProject, getAllProjects, saveNewProject } = require('../../models/projects.model');

async function httpCreateProject (req, res) {
    const project = req.body;
    // await saveNewProject(body);
    const uploads = req.attach
    res.status(200).json({ files: uploads, context: project});
}

module.exports = {
    httpCreateProject,
}
