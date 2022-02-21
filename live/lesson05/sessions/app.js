const express = require("express");
const cookieParser = require("cookie-parser");

const app = express()
const PORT = 3000;

const USERS = {
  "chreke": "secret"
};

const SESSIONS = {};

app.use(cookieParser());

app.get("/", (req, res) => {
  const sessionKey = req.cookies.session;
  const user = SESSIONS[sessionKey];
  if (user) {
    res.render("index.ejs", {username: user});
  } else {
    res.sendStatus(401);
  }
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
