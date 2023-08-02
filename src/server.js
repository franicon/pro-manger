const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 4000;

const MONGO_URL = process.env.MONGO_URL;

const server = http.createServer(app);

mongoose.connection.on('open', () => {
    console.log('DB connection ready');
});

mongoose.connection.on('err', (err) => {
    console.log(err);
});

async function startServer() {
    await mongoose.connect(MONGO_URL);

    server.listen(PORT, () => {
        console.log(`listening on PORT ${PORT}`);
    });
}

startServer().then((res) => res);
