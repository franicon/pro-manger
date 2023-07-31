const path = require("path");
const multer  = require('multer');
const mongo = require('./projects.mongo');
const attach = require('../@cloud/index');
const { generateSlug } = require('../helpers/index');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
});

// validation

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpg' || file.mimetype === 'file/pdf') {
        cb(null, true)
    } else {
        cb({message: 'unsupported file format'}, false)
    }
}

const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024},
    fileFilter: fileFilter
});

const project = {
    title: 'Building Shop-on market place',
    thumbnail: 'thumbnail.img',
    description: 'I will be working on a market place webapp for retailers of all field',
    priority: 'High',
    status: 'In progress',
    deadline: Date.now(),
    privacy: 'Private',
    teamLead: 'Yomi Aluko'
}

// saveNewProject(project).then(r => r);

async function saveNewProject(projects) {
    // const projectAttach = await attach();
    const genSlug = generateSlug(projects.title);
    const found = await findProject(projects.slug);
    const newProject = Object.assign(projects, {
        slug: genSlug,
        // files: projectAttach
    });

    if (!found) {
        await mongo.create(newProject);
    } else  {
        console.error('something went wrong');
    }
}

async function findProject(slug) {
    return mongo.findOne({slug});
}

async function getAllProjects() {
}

module.exports = {
    findProject,
    getAllProjects,
    saveNewProject,
    upload
}
