const { getProject, getAllProjects, saveNewProject } = require('../../models/projects.model');

async function httpCreateProject(req, res) {
    try {
        const context = req.body;
        const attach = 'hello';

        const project = await saveNewProject(context, attach);
        res.status(201).json(project);

    } catch (err) {
        res.status(400).json({error: err});

    }
}

module.exports = {
    httpCreateProject,
}
