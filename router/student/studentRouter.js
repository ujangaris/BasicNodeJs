const express = require("express");

const router = express.Router();
const StudentController = require("../../controllers/student/StudentController");

router.get("/student-list", StudentController.getStudent);
router.get("/student-list/add", StudentController.getAddStudent);

module.exports = router;
