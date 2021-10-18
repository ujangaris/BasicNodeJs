const Assessment = require("../../models/assessment/assessmentModel");
const assessmentModel = require("../../models/assessment/assessmentModel");
const StudentModel = require("../../models/student/studentModel");
exports.getIndex = (req, res, next) => {
  assessmentModel
    .findAll({
      include: [
        {
          model: StudentModel,
          attributes: ["name", "classs", "nik", "gender", "Address", "Image"],
        },
      ],
    })
    .then((rows) => {
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
        assessment: "",
        edit: false,
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
      return rows[0];
    })
    .then((rows) => {
      StudentModel.fetchAll().then(([result]) => {
        res.render("assessment/assessment-add", {
          pageTitle: "Add Assessment",
          path: "/assessment",
          assessment: rows,
          student: result,
          edit: true,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditAssessment = (req, res, next) => {
  const id = req.body.id;
  const student_id = req.body.student_id;
  const score = req.body.score;
  const assessment = new assessmentModel(id, student_id, score);
  assessment
    .save()
    .then(() => {
      res.redirect("/assessment");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postDeleteAssessment = (req, res, next) => {
  const assessmentId = req.body.assessmentId;
  assessmentModel
    .deleteById(assessmentId)
    .then(() => {
      res.redirect("/assessment");
    })
    .catch((err) => {
      console.log(err);
    });
};
