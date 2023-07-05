const { Configuration, OpenAIApi } = require("openai")
require('dotenv').config();

const configuration = new Configuration({
  organization: "org-AlH1F2ixUcETeDME3jakUSS2", // Replace with your OpenAI organization ID
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

console.log(process.env.OPENAI_API_KEY)

exports.handler = async (event) => {
  try {
      const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0.888,
      max_tokens: 2048,
      frequency_penalty: 0,
      presence_penalty: 0,
      top_p: 1,
      messages: [{role: "system", content: ``}, {role: "user", content: ''}],
  }, { timeout: 60000 });
    console.log(response.data.choices[0].message)

    //const jsonString = stringify(response);

    return {
      statusCode: 200,
      body: "jsonString",
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: "An error occurred while fetching data from OpenAI API.",
    };
  }
};
