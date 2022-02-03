const express = require("express");
const bodyParser = require("body-parser");

const app = express()
const PORT = 3000;

let entries = [];

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (_req, res) => {
  console.log(entries);
  res.render("index.ejs", { entries });
});

app.post("/", (req, res) => {
  const { title, entry } = req.body;
  entries.push({ title , entry, date: new Date() });
  console.log(entries);
  res.redirect("/");
})

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
