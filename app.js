// 02. Middleware
const http = require("http");
// const router = require('./routes')
const express = require('express')

const app = express()

app.use('/',(req,res,next)=>{
    console.log('ini adalah middleware selalu berjalan');
    next()//digunakan untuk mengijikan source dibawahnya berjalan
}) 

app.use('/student-add',(req,res,next)=>{
    res.send('<h1>Page add student</h1>')
    console.log('ini  middleware');
}) 

app.use('/',(req,res,next)=>{
    res.send('<h1>Ini adalah halaman home</h1>')
}) 

const server = http.createServer(app);

server.listen(3000);
