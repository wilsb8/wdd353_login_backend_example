const http = require('http');
require('dotenv').config();
const app = require("./app/app");

// create the server
http.createServer(app).listen(process.env.port, () => {
    console.log(`Server here. I am completely functional and listening on port ${process.env.port}`);
}); 