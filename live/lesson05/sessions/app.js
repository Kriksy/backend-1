const express = require("express");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");

const app = express()
const PORT = 3000;

app.use(cookieParser());
app.use(express.urlencoded());

const USERS = {
  "chreke": "secret"
};

const SESSIONS = {};

app.get("/", (req, res) => {
  const sessionKey = req.cookies.session;
  const user = SESSIONS[sessionKey];
  if (user) {
    res.render("index.ejs", {username: user});
  } else {
    res.sendStatus(401);
  }
});

app.post("/login", (req, res) => {
  const {username, password} = req.body;
  if (USERS[username] === password) {
    const sessionId = crypto.randomBytes(64).toString('hex');
    SESSIONS[sessionId] = username;
    console.log("sessions:", SESSIONS);
    res.cookie("session", sessionId, {maxAge: 30 * 1000});
    res.redirect("/");
  } else {

  }
})

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
