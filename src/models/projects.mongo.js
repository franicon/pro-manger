const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: {
        type: String,
    },
    description: {
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
        type: Date,
        required: true
    },
    files: {
        type: [String],
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
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectsSchema);
