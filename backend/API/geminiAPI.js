require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function callGeminiApi(userInput) {
  try {
    // Construct the prompt
    const prompt = `Make the following text into a podcast script:\n\n"${userInput}"\n\nEnsure it's engaging and suitable for a podcast`;

    console.log(userInput)

    // Call the API with the prompt
    const results = await model.generateContent(prompt);

    // console.log("Gemini API Response: ",results.response/*.text()*/);

    if (results && results.response) {
      console.log(results.response.text());
      return results.response.text();
    } else {
      console.error("No response received from the model.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    throw new Error("Gemini API call failed");
  }
}

// console.log(callGeminiApi());

module.exports = callGeminiApi;
