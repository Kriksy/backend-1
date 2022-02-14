const axios = require("axios");
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", async (req, res, next) => {
    const headers = {"User-Agent": "axios", "Accept": "text/plain"};
    try {
      const response = await axios.get("https://icanhazdadjoke.com/1234", {headers});
      res.send(response.data);
    } catch (error) {
      next(error);
    }
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});