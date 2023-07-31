const mongo = require('./projects.mongo');
const cloudinary = require('cloudinary').v2;
const path = require('path');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRER_KEY,
    secure: true,
});

const file = path.join(__dirname, './projects.mongo.js');
console.log(file)

cloudinary.uploader.upload(file).then(r => console.log(r) );


const project = {
    title: 'Building Shop-on market place',
    thumbnail: 'thumbnail.img',
    description: 'I will be working on a market place webapp for retailers of all field',
    priority: 'High',
    status: 'In progress',
    deadline: Date.now(),
    attach: 'architecture.figma',
    privacy: 'Private',
    teamLead: 'Yomi Aluk'
}

const generateSlug = (title) => {
    const slug = title.split(' ');
    if (slug.length === 1) {
        return slug[0].toLowerCase();
    }
    const getSlug = slug.slice(0, 2)
    return getSlug.join('-').toLowerCase()
}


// saveNewProject(project).then(r => r);

async function saveNewProject(projects) {
    const genSlug = generateSlug(projects.title);
    const found = await findProject(projects.slug);

    const newProject = Object.assign(projects, {
        slug: genSlug
    });

    if (!found) {
        await mongo.create(newProject);
    } else  {
        console.error('something went wrong')
    }
}

async function findProject(slug) {
    return mongo.findOne({slug})
}

async function getAllProjects() {
}

module.exports = {
    findProject,
    getAllProjects,
    saveNewProject,
}
