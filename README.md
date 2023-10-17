# Logical Fallacy Detector

Deployed at: https://badfaith.io/
(The project is deployed with Vercel and one of the current limitations is Vercel's 10 second serverless function limit for free users. This results in prompts often timing out if OpenAi API takes too long to respond, I'm trying to find a solution to this)

## Screenshots

![Landing Page](/screenshots/landing-page.png)

![Text input area](/screenshots/article-input-area.png)

![Report Example](/screenshots/report-example.png)


## Tech Stack
![MongoDB](https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb&logoColor=white)
![Next.js](https://img.shields.io/badge/-Next.js-black?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=node.js&logoColor=white)
![OpenAI](https://img.shields.io/badge/-OpenAI-black?style=flat-square&logo=openai&logoColor=white)



## About

This project aims to assist users in identifying potential logical fallacies and manipulation tactics within articles or written content. By leveraging the power of OpenAI's API, the application can process large amounts of text and highlight questionable sections for further review.

### Features

- **Text Analysis**: Paste an article and get instant feedback on potential fallacies.
- **User-friendly Interface**: Designed with a focus on user experience, making it easy to navigate and understand the analysis results.
- **Real-time Feedback**: As soon as an article is pasted, the analysis process begins, delivering results in real-time.
- **Secure and Fast**: Built using Next.js, the app ensures efficient server-side rendering and top-notch security.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ParisMonson/badfaith.git
   ```
   
2. **Navigate into the directory**:
```bash
cd badfaith
```


3. **Install dependencies**:
   ```bash
   npm install
   ```


4. **Set up environment variables**:
   The project uses an OpenAi API key variable, MongoDB API variables and auth0 variables. For local usage you would need to have your own OpenAi API key. MongoDb is used to store previous article analysis for logged in users so is not needed for local usage. Same with auth0.
   
You would need to add your own OpenAi API key to the `.env.local` file if you wish to test this locally.

6. **Run locally**:
   ```bash
   npm run dev
   ```

   
6. Visit `http://localhost:3000` to see the app running.

## Usage

Simply paste in the article title and content into the relavant sections of the app and press "Analyse".

As mentioned above the current limitation is Vercels 10 second timelimit on serverless functions. THis results in promts often timing out if OpenAi takes to long to respond.









