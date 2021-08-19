exports.getIndex = (req, res, next) => {
  res.render("assessment/index", {
    pageTitle: "Assessment",
    path: "/assessment",
  });
};
