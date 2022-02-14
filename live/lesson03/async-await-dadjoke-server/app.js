const axios = require("axios");
const fs = require("fs");
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res, next) => {
    const headers = {"User-Agent": "axios", "Accept": "text/plain"};
    axios
        .get("https://icanhazdadjoke.com", {headers})
        .then((response) => res.send(response.data))
        .catch((err) => next(err));
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});