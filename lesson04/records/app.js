const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const { Album } = require("./models/album");

const app = express()
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", async (_req, res) => {
  const albums = await Album.find().sort({ title: 1 });
  res.render("index.ejs", { albums });
});

app.post("/", async (req, res, next) => {
  const album = new Album({
    ...req.body,
    tracks: req.body.tracks.split("\n")
  });
  try {
    await album.save()
    res.redirect("/");
  } catch (error) {
    next(error);
  }
})

mongoose.connect("mongodb://127.0.0.1/backend1");

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
