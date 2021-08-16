// 02. Install express js renyek
const http = require("http");
// const router = require('./routes')
const express = require('express')

const app = express()

const server = http.createServer(app);

server.listen(3000);
