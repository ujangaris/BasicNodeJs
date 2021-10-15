// Konsept MVC
const path = require("path");
const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const db = require("./utils/database");
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");
// const router = require('./routes')
// const routerStudent = require("./router/student");
const HomeRouter = require("./router/home/homeRouter"); //load routernya
const StudentRouter = require("./router/student/studentRouter");
const AssessmentRouter = require("./router/assessment/assessmentRouter");

app.use(express.static(path.join(__dirname, "public")));

// app.use(routerStudent);
app.use(HomeRouter);
app.use(StudentRouter);
app.use(AssessmentRouter);
db.execute("SELECT * FROM student")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
const server = http.createServer(app);

server.listen(3000);
