require('dotenv').config();
const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 4000

const MONGO_URL = process.env.MONGO_URL

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});

