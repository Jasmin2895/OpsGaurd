const { permit } = require("../utils/permit");
const Document = require("../models/Document");

exports.handleSaveDocument = async (req, res) => {
  const { userId, tenantId, prompt } = req.body;

  console.log("Received request to save document:", req.body);
  const allowed = await permit.check(userId, "create", {
    type: "Document",
    tenant: tenantId,
  });

  console.log("Permission check result:", allowed);

  if (!allowed) return res.status(403).send("Action denied by Permit.io");

  const savedDoc = await Document.create({
    name: "Document",
    content: prompt,
    userId,
    tenantId,
  });

  console.info("Document saved:", savedDoc);

  return res.json({ success: true, savedDoc });
};

exports.fetchDocuments = async (req, res) => {
  try {
    const documents = await Document.find().sort({ createdAt: -1 });
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch documents" });
  }
};
