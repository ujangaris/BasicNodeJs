// 02. Middleware
const http = require("http");
// const router = require('./routes')
const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log('ini adalah middleware');
    next()//digunakan untuk mengijikan source dibawahnya berjalan
}) 

app.use((req,res,next)=>{
    console.log('ini  middleware');
}) 
const server = http.createServer(app);

server.listen(3000);
