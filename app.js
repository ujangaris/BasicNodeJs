// Konsept MVC
const http = require("http");
// const router = require('./routes')
const routerStudent = require("./router/student");

const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/student");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(routerStudent);

app.use("/", (req, res, next) => {
  res.send("<h1>Page Home</h1>");
});

const server = http.createServer(app);

server.listen(3000);
