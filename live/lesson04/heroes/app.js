const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const { Hero } = require("./models/hero");
const { Location } = require("./models/location");

const app = express()
const PORT = 3000;

app.use(express.urlencoded());

app.get("/", async (req, res) => {
    const heroes = await Hero.find().exec();
    res.render("index.ejs", { heroes });
});

app.post("/heroes", async (req, res, next) => {
    const hero = new Hero(req.body);
    try {
        await hero.save();
        res.redirect("/");
    } catch (error) {
        res.render("errors.ejs", { errors: error.errors });
    }
});

app.get("/heroes/:heroId", async (req, res) => {
    const heroId = req.params.heroId;
    const hero = await Hero
        .findOne({_id: heroId})
        .populate("location")
        .exec();
    console.log(hero);
    const locations = await Location.find();
    res.render("hero.ejs", {hero, locations});
});

app.post("/heroes/:heroId", async (req, res) => {
    const heroId = req.params.heroId;
    const locationId = req.body.location;
    const hero = await Hero.findOne({_id: heroId});
    hero.location = locationId;
    await hero.save();
    res.redirect(`/heroes/${heroId}`);
});



mongoose.connect("mongodb://localhost/backend1");
app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
});