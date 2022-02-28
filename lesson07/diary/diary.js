const express = require("express");
const { ensureLoggedIn } = require('connect-ensure-login');

const { DiaryEntry } = require("./models/diary");

const router = express.Router();

router.use(ensureLoggedIn("/auth/login"));

router.get("/", async (req, res) => {
  const entries = await DiaryEntry.find({user: req.user._id});
  res.render("index.ejs", {entries});
});

router.post("/", async (req, res) => {
  const {title, content} = req.body;
  const user = req.user;
  const entry = new DiaryEntry({title, content, user: user._id});
  await entry.save();
  res.redirect("/");
});

exports.router = router;
