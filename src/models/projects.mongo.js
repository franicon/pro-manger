const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
    projectTitle: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
    },
    projectDescription: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        default: 'Low'
    },
    status: {
        type: String,
        default: 'In progress'
    },
    deadline: {
        type: Date(),
        required: true
    },
    attachFiles: {
        type: [String],
        required: true
    },
    privacy: {
        type: String,
        required: true,
        default: 'private'
    },
    teamLead: {
        type: String,
    },
    members: {
        type: [String]
    },
    timestamps: true
});

mongoose.model('Project', projectsSchema);
