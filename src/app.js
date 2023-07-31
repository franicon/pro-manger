const express = require('express');

const cors = require('cors');
const morgan = require('morgan');

const projectsRouter = require('./routes/projects/projects.router');

const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:3000'
}));
app.use(morgan('combined'));

app.use(express.json());
app.use('/projects',projectsRouter);

module.exports = app;
