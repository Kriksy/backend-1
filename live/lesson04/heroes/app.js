const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const { Hero } = require("./models/hero");

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
        console.log(error.errors);
        res.render("errors.ejs", { errors: error.errors });
    }
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