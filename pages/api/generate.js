import { Configuration, OpenAIApi } from "openai";
import { saveReport } from "../../utils/db";
import { getSession } from "@auth0/nextjs-auth0";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const userEmail = req.body.userEmail;
  const session = await getSession(req, res);

  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }
  const articleTitle = req.body.articleTitle || req.body.article.slice(0, 50);

  const article = req.body.article || "";
  if (article.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid article",
      },
    });
    return;
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: generatePrompt(article) }],
      temperature: 0,
    });

    const gptResponse = completion.data.choices[0].message.content;
    const formattedText = formatGptResponse(gptResponse);

    if (session && session.user) {
      await saveReport(userEmail, formattedText, articleTitle);

      res.status(200).json({ result: formattedText });
    } else {
      res.status(200).json({ result: formattedText });
    }
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

function generatePrompt(articleTitle, article) {
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
  areas of the article that fit any of the above criteria and may also suggest to do further research if
  certain things in the article may only be badfaith with further context. The report will then summarise at the end.
  The report should be structured in different sections as follows:
    1. Badfaith Score
    2. Manipulation Tactics and Logical Fallacies
    3. Summary
  The article title is: ${articleTitle};
  Here is the Article: ${article}`;
}

function formatGptResponse(responseText) {
  const sections = responseText.split(/\s*(\d+\.)\s*/).filter(Boolean);

  let formattedResponse = "";

  for (let i = 0; i < sections.length; i += 2) {
    const sectionNumber = sections[i];
    const sectionContent = sections[i + 1].split(":").slice(1).join(":").trim();

    switch (sectionNumber) {
      case "1.":
        formattedResponse += `<h2 class="section-title">Badfaith Score</h2><p class="section-content">${sectionContent}</p>`;
        break;
      case "2.":
        formattedResponse += `<h2 class="section-title">Manipulation Tactics and Logical Fallacies</h2><ul class="section-list">`;
        const items = sectionContent.split(/-(?=[A-Z])/).filter(Boolean);
        for (let item of items) {
          formattedResponse += `<li>${item.trim()}</li>`;
        }
        formattedResponse += `</ul>`;
        break;
      case "3.":
        formattedResponse += `<h2 class="section-title">Summary</h2><p class="section-content">${sectionContent}</p>`;
        break;
      default:
        formattedResponse += `<p class="section-content">${sectionNumber} ${sectionContent}</p>`;
    }
  }

  return formattedResponse;
}
