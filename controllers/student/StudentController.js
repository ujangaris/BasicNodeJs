// const Student = require("../../models/student/studentModel");
const StudentModel = require("../../models/student/studentModel");

exports.getStudent = (req, res, next) => {
  StudentModel.findAll()
    .then((rows) => {
      res.render("student/student-list", {
        pageTitle: "Student List",
        path: "/student-list",
        student: rows,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.PostAddStudent = (req, res, next) => {
  const name = req.body.name;
  const classs = req.body.classs;
  const nik = req.body.nik;
  const Image = req.body.Image;
  const gender = req.body.gender;
  const Address = req.body.Address;
  StudentModel.create({
    name: name,
    classs: classs,
    nik: nik,
    Image: Image,
    gender: gender,
    Address: Address,
  })
    .then((result) => {
      console.log("Created Student");
      res.redirect("/student-list");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAddStudent = (req, res, next) => {
  res.render("student/student-add", {
    pageTitle: "Student Add",
    path: "/student-list",
    edit: false,
    student: "",
  });
};

exports.getEditStudent = (req, res, next) => {
  const Edit = req.query.edit;
  if (!Edit) {
    res.redirect("/");
  }
  const studentId = req.params.student;
  StudentModel.findByPk(studentId)
    .then((student) => {
      res.render("student/student-add", {
        pageTitle: "Student Add",
        path: "/student-list",
        student: student,
        edit: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditStudent = (req, res, next) => {
  const studentid = req.body.studentid;
  const name = req.body.name;
  const classs = req.body.classs;
  const nik = req.body.nik;
  const Image = req.body.Image;
  const gender = req.body.gender;
  const Address = req.body.Address;
  StudentModel.findByPk(studentid)
    .then((students) => {
      students.name = name;
      students.classs = classs;
      students.nik = nik;
      students.Image = Image;
      students.gender = gender;
      students.Address = Address;
      return students.save();
    })
    .then((result) => {
      console.log("UPDATE STUDENT");
      res.redirect("/student-list");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteStudent = (req, res, next) => {
  const studentid = req.body.studentid;
  StudentModel.findByPk(studentid)
    .then((students) => {
      return students.destroy();
    })
    .then((result) => {
      console.log("DESTROYED");
      res.redirect("/student-list");
    })
    .catch((err) => {
      console.log(err);
    });
};
