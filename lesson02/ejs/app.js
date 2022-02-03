const express = require("express");

const app = express()
const PORT = 3000;

app.get("/", (_req, res) => {
  const title = "Lord of the Rings";
  const heroes = [
    {name: "Boromir", origin: "Gondor"},
    {name: "Aragorn", origin: "Arthedain"},
    {name: "Gandalf"},
    {name: "Frodo", origin: "The Shire"},
    {name: "Eowyn", origin: "Rohan"}
  ];
  res.render("index.ejs", {title, heroes});
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
