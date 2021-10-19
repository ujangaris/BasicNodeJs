const express = require("express");

const router = express.Router();

const registerController = require("../../controllers/login/registerController");

router.get("/register", registerController.getRegister);
router.get("/", registerController.getIndex);

module.exports = router;
