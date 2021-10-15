const express = require("express");

const router = express.Router();
const assessmentController = require("../../controllers/assessment/assessmentController");

router.get("/assessment", assessmentController.getIndex);
router.get("/assessment/add", assessmentController.getAddAssessment);

router.post("/assessment-add", assessmentController.posAddAssessment);

router.post("/assessment-edit", assessmentController.postEditAssessment);

router.post("/assessment-delete", assessmentController.postDeleteAssessment);

router.get("/assessment-edit/:id", assessmentController.getEditAssessment);

module.exports = router;
