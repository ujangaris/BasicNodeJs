const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student");

router.get("/student-add", studentController.getStudent);

router.post("/student",studentController.postStudent);

module.exports = router;
