// Konsept MVC
const path = require("path");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const sequelize = require("./utils/database");
const AssessmentModel = require("./models/assessment/assessmentModel");
const StudentModel = require("./models/student/studentModel");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");
// const router = require('./routes')
// const routerStudent = require("./router/student");
const HomeRouter = require("./router/home/homeRouter"); //load routernya
const StudentRouter = require("./router/student/studentRouter");
const AssessmentRouter = require("./router/assessment/assessmentRouter");
const { getRegister } = require("./controllers/login/registerController");

app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
  })
);

// app.use(routerStudent);
app.use(HomeRouter);
app.use(StudentRouter);
app.use(AssessmentRouter);
app.use(getRegister);

AssessmentModel.belongsTo(StudentModel, {
  foreignKey: "student_id",
  constraints: true,
  onDelete: "CASCADE",
});
StudentModel.hasMany(AssessmentModel, { foreignKey: "student_id" });

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
