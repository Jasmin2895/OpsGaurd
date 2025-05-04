const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  userId: String,
  tenantId: String,
  prompt: String,
  response: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Document", documentSchema);
