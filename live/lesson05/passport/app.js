const express = require("express");

const { User } = require("./models/user");

const app = express();
app.use(express.urlencoded({extended: true}));

const PORT = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs")
});

app.post("/signup", async (req, res) => {
  const {username, password} = req.body;
  const user = new User({username});
  await user.setPassword(password);
  await user.save();
  res.redirect("/signup");
})

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
