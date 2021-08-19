const express = require("express");

const router = express.Router();
const assessmentController = require("../../controllers/assessment/assessmentController");

router.get("/assessment", assessmentController.getIndex);

module.exports = router;
