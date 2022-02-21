const express = require("express");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");

const app = express()
const PORT = 3000;

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

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
    res.redirect("/login");
  }
});

app.get("/login", (req, res) => {
  res.render("login.ejs", {errors: []});
})

app.post("/login", (req, res) => {
  const {username, password} = req.body;
  if (USERS[username] === password) {
    const sessionId = crypto.randomBytes(64).toString('hex');
    SESSIONS[sessionId] = username;
    console.log("sessions:", SESSIONS);
    res.cookie("session", sessionId, {maxAge: 30 * 1000});
    res.redirect("/");
  } else {
    res.render("login.ejs", {errors: ["Wrong username or password!"]})
  }
})

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
