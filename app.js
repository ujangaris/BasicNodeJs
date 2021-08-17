// Konsept MVC
const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));


app.set("view engine", "ejs");
app.set("views", "views");
// const router = require('./routes')
const routerStudent = require("./router/student");

app.use(routerStudent);

app.use("/", (req, res, next) => {
  res.send("<h1>Page Home</h1>");
});

const server = http.createServer(app);

server.listen(3000);
