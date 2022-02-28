const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const { DiaryEntry } = require("./models/diary");

const app = express();
const PORT = process.env.PORT;

app.get("/", async (req, res) => {
    const entries = await DiaryEntry.find();
    res.render("index.ejs", {entries});
});

mongoose.connect("mongodb://localhost/backend1");

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
