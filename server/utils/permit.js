const { Permit } = require("permitio");

const permit = new Permit({
  token: process.env.PERMIT_SDK_SECRET,
  pdp: process.env.PDP_URL,
});

module.exports = { permit };
