const express = require("express");
const router = express.Router();
const studentController = require('../controllers/student')

router.get("/student-add", studentController.getStudent);

router.post("/student", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
