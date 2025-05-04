const { openai } = require("../utils/openai");
const { permit } = require("../utils/permit");
const Document = require("../models/Document");

exports.handleAgentAction = async (req, res) => {
  const { userId, tenantId, prompt } = req.body;

  const response = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [{ role: "user", content: prompt }],
  });

  const msg = response.choices[0].message;

  if (msg) {
    return res.json({ success: true, data: msg.content });
  }

  res.json({ reply: msg.content || "No action performed." });
};
