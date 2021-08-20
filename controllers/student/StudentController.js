const Student = require("../../models/student/studentModel");
const StudentModel = require("../../models/student/studentModel");

exports.getStudent = (req, res, next) => {
  StudentModel.fetchAll((student) => {
    res.render("student/student-list", {
      pageTitle: "Student List",
      path: "/student-list",
      student: student,
    });
  });
};

exports.PostAddStudent = (req, res, next) => {
  const name = req.body.name;
  const classs = req.body.classs;
  const nik = req.body.nik;
  const Image = req.body.Image;
  const gender = req.body.gender;
  const Address = req.body.Address;
  const Student = new StudentModel(name, classs, nik, Image, gender, Address);
  Student.save();
  res.redirect("/student-list");
};

exports.getAddStudent = (req, res, next) => {
  res.render("student/student-add", {
    pageTitle: "Student Add",
    path: "/student-list",
  });
};
