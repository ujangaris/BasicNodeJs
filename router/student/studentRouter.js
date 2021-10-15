const express = require("express");

const router = express.Router();
const StudentController = require("../../controllers/student/StudentController");

router.get("/student-list", StudentController.getStudent);
router.get("/student-list/add", StudentController.getAddStudent);

router.post("/student-add", StudentController.PostAddStudent);

router.post("/student-edit", StudentController.postEditStudent);

router.post("/student-delete", StudentController.deleteStudent);

router.get("/student-list/:student", StudentController.getEditStudent);

module.exports = router;
