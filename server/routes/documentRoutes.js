const express = require("express");
const router = express.Router();
const {
  handleSaveDocument,
  fetchDocuments,
} = require("../controller/documentController");

router.post("/save", handleSaveDocument);

router.get("/fetch", fetchDocuments);

module.exports = router;
