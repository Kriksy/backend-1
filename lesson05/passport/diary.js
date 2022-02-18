const express = require("express");
const { ensureLoggedIn } = require('connect-ensure-login');

const router = express.Router();


const entries = {
  "bella": [
    {
      title: "Lunch with Edward",
      content: `Today I had lunch with Edward. 
        He's such a nice guy I don't even mind he's a vampire`,
      date: new Date(2022, 1, 15, 12, 14, 0)
    }
  ]
};

router.use(ensureLoggedIn("/auth/login"));

router.get("/", (req, res) => {
  res.render("index.ejs", {entries: entries[req.user]});
});

router.post("/", (req, res) => {
  const {title, content} = req.body;
  entries[req.user].push({title, content, date: new Date()});
  res.redirect("/");
});

exports.router = router;
