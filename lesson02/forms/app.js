const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express()
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "html", "form.html"))
});

app.get("/submit", (req, res) => {
  res.send(renderResponse(req.query));
});

app.post("/submit", (req, res) => {
  res.send(renderResponse(req.body));
});

const renderResponse = ({name, age, color}) => `
    <h1>Hello ${name}!</h1>
    <p>You're ${age} years old</p>
    <p>Your favorite color is ${color}</p>
  `;

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
