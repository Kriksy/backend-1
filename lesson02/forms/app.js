const express = require("express");
const path = require("path");
const app = express()
const PORT = 3000;


app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "html", "form.html"))
});

app.get("/submit", (req, res) => {
  const {name, age, color} = req.query;
  res.send(`
    <h1>Hello ${name}!</h1>
    <p>You're ${age} years old</p>
    <p>Your favorite color is ${color}</p>
  `)
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
