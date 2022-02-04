const express = require("express");

const app = express()
const PORT = 3000;

app.get("/", (_req, res) => {
  res.render("index.ejs");
});

app.get("/about", (_req, res) => {
  res.render("about.ejs");
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
