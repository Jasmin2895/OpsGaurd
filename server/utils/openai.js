const OpenAIApi = require("openai");

const configuration = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = { openai };
