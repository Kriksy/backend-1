const express = require("express");
const app = express()
const PORT = 3000;

app.get("/", (_req, res) => { res.send("Hello World!") });

app.get("/greetings/:greeting", (req, res) => {
  res.send(`${req.params.greeting} World!`)
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
