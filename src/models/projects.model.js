const mongo = require('./projects.mongo');
const { generateSlug } = require('../helpers/index');

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

async function saveNewProject(projects, attach) {
    const genSlug = generateSlug(projects.title);
    const found = await findProject(projects.slug);
    const newProject = Object.assign(projects, {
        slug: genSlug,
        files: attach
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
}
