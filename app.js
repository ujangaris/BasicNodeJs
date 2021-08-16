// 02. Middleware
const http = require("http");
// const router = require('./routes')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))


app.use('/student-add',(req,res,next)=>{
    res.send('<form action="/student" method="POST" ><input type="text" name="student"><button type="submit">SEND</button></form>')
    console.log('ini  middleware');
}) 

app.post('/student',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Page Home</h1>')
}) 

const server = http.createServer(app);

server.listen(3000);
