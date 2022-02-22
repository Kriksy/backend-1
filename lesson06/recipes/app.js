const express = require("express");
const jwt = require("jsonwebtoken");

const { User } = require("./models/user");

const app = express()
const PORT = 3000;
const JWT_SECRET = "B5rSrYfYNsu6ne7FXw__BEeLoHazAfkhjWvlsZ9VHGw";

app.use(express.json());

app.use((req, _res, next) => {
  const authHeader = req.header("Authorization");
  if (authHeader) {
    const token = authHeader.split(" ")[0];
    req.user = jwt.verify(token);
  }
  next();
});

const requireLogin = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.sendStatus(401);
  }
}

app.get("/", requireLogin, (req, res) => {
  res.json({greeting: `Hello ${req.user.username}`});
});

app.post("/users", async (req, res) => {
  const {username, password} = req.body;
  const user = new User({username, password});
  await user.save();
  res.json({username});
});

app.post("/tokens", async (req, res) => {
  const {username, password} = req.body;
  const user = await User.login(username, password);
  if (user) {
    const token = jwt.sign(
      {userId: user._id, username: user.username},
      JWT_SECRET,
      {expiresIn: 60, subject: user._id}
    );
    res.json({token});
  } else {
    res.sendStatus(401);
  }
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
