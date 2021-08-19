const express = require("express");

const router = express.Router();
const StudentController = require('../../controllers/student/StudentController')


router.get("/student-list", StudentController.getStudent);

module.exports = router;
