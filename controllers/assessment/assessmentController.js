const assessmentModel = require("../../models/assessment/assessmentModel");

exports.getIndex = (req, res, next) => {
  assessmentModel
    .fetcAll()
    .then(([rows]) => {
      console.log(rows);
      res.render("assessment/index", {
        pageTitle: "Assessment",
        path: "/assessment",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.posAddAssessment = (req, res, next) => {};

exports.getAddAssessment = (req, res, next) => {
  res.render("assessment/assessment-add", {
    pageTitle: "Add Assessment",
    path: "/assessment",
  });
};
