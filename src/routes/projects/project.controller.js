const { getProject, getAllProjects, saveNewProject } = require('../../models/projects.model');
const upload = require('../../@multer/index');
const path = require("path");

const file  = (req, res, next) => {
    const uploader = async (path)  => console.log(path);

    const urls = []
    const files  = req.files

    // for (const file of files) {
    //     const {path} = file
    //     urls.push(path)
    // }

    res.status(200).json({
        message: 'Uploaded successfully',
        data: urls
    });

    next()
}

async function httpCreateProject (req, res) {
    const project = req.body;
    res.status(200).send(project);
    console.log(project)
    // await saveNewProject(body);
    // res.status(200).json('Project successfully created');
}

module.exports = {
    httpCreateProject,
    file
}
