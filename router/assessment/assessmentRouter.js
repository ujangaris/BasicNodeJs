const express = require("express");

const router = express.Router();
const assessmentController = require("../../controllers/assessment/assessmentController");

router.get("/assessment", assessmentController.getIndex);
router.get("/assessment/add", assessmentController.getAddAssessment);

module.exports = router;
