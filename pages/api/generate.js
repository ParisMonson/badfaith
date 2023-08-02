import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const article = req.body.article || '';
  if (article.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid article",
      }
    });
    return;
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": generatePrompt(article) }],
      temperature: 0.6,
    });
    console.log("Completion: ", completion.data.choices[0].text, completion.data.choices[0]);
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(article) {
  return `You are going to analyse articles for the following manipulation tactics and logical fallacies.
  1. Ad Hominem
  2. Strawman
  3. Appeal to Authority
  4. False Dichotomy
  5. Slippery Slope
  6. Confirmation Bias
  7. Bandwagon

  Your job is to use all of your relevant expertise to generate a report with a "badfaith" score. The more the article
  has the above listed tactics. The higher its badfaith rating will be up to a max of 100. The report will highlight
  areas of the article that fit any of the above criteria and may also suggest for the user to do further research as
  certain things in the article may only be badfaith with further context. The report will then summarise at the end.
  Article: ${article}`;
};




