const express = require("express");
const router = express.Router();
const { handleAgentAction } = require("../controller/agentController");

router.post("/", handleAgentAction);

module.exports = router;
