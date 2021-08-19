exports.getIndex = (req, res, next) => {
  res.render("assessment/index", {
    pageTitle: "Assessment",
    path: "/assessment",
  });
};

exports.getAddAssessment = (req, res, next) => {
  res.render("assessment/assessment-add", {
    pageTitle: "Add Assessment",
    path: "/assessment",
  });
};
