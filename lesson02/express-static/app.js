const express = require("express");
const path = require("path");

const app = express()
const PORT = 3000;
const STATIC_ROOT = path.join(__dirname, "static");

app.use("/static", express.static(STATIC_ROOT))
app.get("/", (_req, res) => {
  res.sendFile("./index.html", {root: STATIC_ROOT});
})

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
