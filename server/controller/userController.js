const { openai } = require("../utils/openai");
const { permit } = require("../utils/permit");

exports.handleUserLogin = async (req, res) => {
  const { userId, tenantId } = req.query;
  const ticket = await permit.elements.loginAs({
    userId: userId,
    tenantId: tenantId,
  });

  res.status(302).redirect(ticket.redirect_url);
};
