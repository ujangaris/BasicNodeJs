const StudentModel = require("../models/student");

exports.getStudent = (req, res, next) => {
console.log(StudentModel.fetchAll());
  res.render("student", {});
};

exports.postStudent = (req, res, next) => {
  const reqstudent = req.body.student;
  const student = new StudentModel(reqstudent);
  student.save();
  res.redirect("/");
};
