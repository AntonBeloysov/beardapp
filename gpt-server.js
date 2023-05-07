const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    max_tokens: 500,
  });

  res.send(completion.data.choices[0].text);
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
