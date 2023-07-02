const { Configuration, OpenAIApi } = require("openai")
const { stringify } = require("flatted");

const configuration = new Configuration({
  organization: "org-AlH1F2ixUcETeDME3jakUSS2", // Replace with your OpenAI organization ID
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

exports.handler = async (event) => {
  try {
    const response = await openai.listModels();
    console.log(response)
    const models = response.data.models.map(model => model.id);
    const jsonString = stringify(models);
    console.log(jsonString);
    return {
      statusCode: 200,
      body: jsonString,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: "An error occurred while fetching data from OpenAI API.",
    };
  }
};
