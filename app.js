// Konsept MVC
const path = require("path");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./utils/database");

const app = express();
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

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
