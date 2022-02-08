const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/", async (_req, res) => {
  const headers = {headers: {"User-Agent": "axios", "Accept": "text/plain"}};
  const response = await axios.get("https://icanhazdadjoke.com/", headers);
  res.send(response.data);
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
