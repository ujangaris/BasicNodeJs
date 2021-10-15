const assessmentModel = require("../../models/assessment/assessmentModel");
const StudentModel = require("../../models/student/studentModel");
exports.getIndex = (req, res, next) => {
  assessmentModel
    .fetcAll()
    .then(([rows]) => {
      res.render("assessment/index", {
        pageTitle: "Assessment",
        path: "/assessment",
        assessment: rows,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.posAddAssessment = (req, res, next) => {};

exports.getAddAssessment = (req, res, next) => {
  StudentModel.fetchAll()
    .then(([rows]) => {
      res.render("assessment/assessment-add", {
        pageTitle: "Add Assessment",
        path: "/assessment",
        student: rows,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
