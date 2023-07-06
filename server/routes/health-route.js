const express = require("express");
const { getHealth } = require("../controllers/health-controller.js");

const router = express.Router();

// define routes
router.get("", getHealth);

module.exports = router;
