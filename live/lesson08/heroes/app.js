const express = require("express");
const { Hero, sequelize } = require("./models");

const app = express()
const PORT = 3000;

app.use(express.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    const heroes = await Hero.findAll();
    res.render("index.ejs", { heroes });
});

app.post("/heroes", async (req, res) => {
    const { name, age } = req.body;
    const hero = Hero.build({ name, age });
    await hero.save();
    res.redirect("/");
});

sequelize.sync({alter: true}).then(() => {
    console.log("Done syncing models");
    app.listen(PORT, () => {
        console.log(`Started Express server on port ${PORT}`);
    });
});
