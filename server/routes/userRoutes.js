const express = require("express");
const router = express.Router();
const { handleUserLogin } = require("../controller/userController");

router.get("/", handleUserLogin);

module.exports = router;
