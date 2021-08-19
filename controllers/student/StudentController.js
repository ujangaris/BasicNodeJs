exports.getStudent = (req, res, next) => {
  res.render("student/student-list", {
    pageTitle: "Student List",
    path: "/student-list",
  });
};

exports.getAddStudent = (req, res, next) => {
  res.render("student/student-add", {
    pageTitle: "Student Add",
    path: "/student-list",
  });
};
