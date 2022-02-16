const express = require("express");
const mongoose = require("mongoose");
const { Hero } = require("./models/hero");

const app = express()
const PORT = 3000;

app.get("/", async (req, res) => {
    const heroes = await Hero.find().exec();
    res.render("index.ejs", { heroes });
});

app.get("/heroes/:heroId", async (req, res) => {
    const heroId = req.params.heroId;
    const hero = await Hero.findOne({_id: heroId});
    res.render("hero.ejs", hero);
});

mongoose.connect("mongodb://localhost/backend1");
app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
});