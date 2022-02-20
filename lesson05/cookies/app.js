const express = require("express");
const cookieParser = require("cookie-parser");

const app = express()
const PORT = 3000;

app.use(cookieParser());

app.get("/", (req, res) => {
  let cookieCount = 0;
  if (req.cookies) {
    cookieCount = parseInt(req.cookies.cookieCount || "0")
  }
  cookieCount += 1;
  res.cookie("cookieCount", cookieCount);
  res.send(`Cookie counter: ${cookieCount}`);
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
