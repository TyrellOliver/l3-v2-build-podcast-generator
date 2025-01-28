require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { script } = require("../Controllers/scriptController");

const API_KEY = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
// console.log(genAI)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

async function generatePodcastInstructions() {
  try {
    const results = await model.generateContent(prompt);
    if (results && results.response) {
      console.log(results.response.text());
    } else {
      console.error("No response received from the model.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

console.log(generatePodcastInstructions());
