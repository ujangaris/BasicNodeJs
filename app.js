// Konsept MVC
const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");
// const router = require('./routes')
// const routerStudent = require("./router/student");
const HomeRouter = require("./router/home/homeRouter"); //load routernya
// app.use(routerStudent);
app.use(HomeRouter);

const server = http.createServer(app);

server.listen(3000);
