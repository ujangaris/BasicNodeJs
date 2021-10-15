const Assessment = require("../../models/assessment/assessmentModel");
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

exports.posAddAssessment = (req, res, next) => {
  const student_id = req.body.student_id;
  const score = req.body.score;
  const assessment = new assessmentModel(null, student_id, score);
  assessment
    .save()
    .then(() => {
      res.redirect("/assessment");
    })
    .catch((err) => {
      console.log(err);
    });
};

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

exports.getEditAssessment = (req, res, next) => {
  const edit = req.query.edit;
  if (!edit) {
    return res.redirect("/assessment");
  }
  const assessmentId = req.params.id;
  assessmentModel
    .findById(assessmentId)
    .then(([rows]) => {
      console.log(rows);
      return res.redirect("/assessment");
    })
    .catch((err) => {
      console.log(err);
    });
};
