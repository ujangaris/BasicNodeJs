// 02. Middleware
const http = require("http");
// const router = require('./routes')
const express = require('express')

const app = express()



app.use('/student-add',(req,res,next)=>{
    res.send('<form action="/student" method="POST" ><input type="text" name="student"><button type="submit">SEND</button></form>')
    console.log('ini  middleware');
}) 

app.use('/',(req,res,next)=>{
    res.send('<h1>Page Home</h1>')
}) 

const server = http.createServer(app);

server.listen(3000);
