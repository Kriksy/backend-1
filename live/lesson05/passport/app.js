const express = require("express");

const app = express();
app.use(express.urlencoded({extended: true}));

const PORT = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs")
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  res.redirect("/signup");
})

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
