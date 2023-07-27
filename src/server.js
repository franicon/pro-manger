const http = require('http');

require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');

const PORT = process.env.PORT || 4000

const MONGO_URL = process.env.MONGO_URL

const server = http.createServer(app);

mongoose.connection.on('open', () => {
    console.log('DB connection ready');
});

mongoose.connection.on('err', (err) => {
    console.log(err)
});

async function startServer () {
    await mongoose.connect(MONGO_URL);

    server.listen(PORT, () => {
        console.log(`listening on PORT ${PORT}`);
    });

}
