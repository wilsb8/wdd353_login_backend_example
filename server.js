const http = require('http');
require('dotenv').config();
const app = require('./app/app');

http.createServer(app).listen(process.env.port, ()=>{
  console.log(`Server here, I am functioning and running on port ${process.env.port}`);
});