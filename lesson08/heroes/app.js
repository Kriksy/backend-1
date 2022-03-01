const express = require("express");
const { sequelize, Hero, Location } = require("./models");

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

app.get("/heroes/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const hero = await Hero.findOne({
      where: {id},
      include: Location
    });
    const locations = await Location.findAll();
    res.render("hero.ejs", { hero, locations });
});

app.post("/heroes/:id", async (req, res) => {
    const heroId = parseInt(req.params.id);
    const locId = parseInt(req.body.location);
    const hero = await Hero.findOne({where: {id: heroId}});
    const loc = await Location.findOne({where: {id: locId}});
    await hero.setLocation(loc);
    res.redirect(req.url);
});


app.get("/locations", async (req, res) => {
    const locations = await Location.findAll();
    res.render("locations.ejs", { locations });
});

app.post("/locations", async (req, res) => {
    const { name, region } = req.body;
    await Location.create({ name, region });
    res.redirect("/locations");
});

app.get("/locations/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const loc = await Location.findOne({where: {id}});
    const heroes = await loc.getHeros();
    res.render("location.ejs", { loc, heroes });
});

sequelize.sync({alter: true}).then(() => {
  console.log("Finished synchronizing models");
  app.listen(PORT, () => {
      console.log(`Started Express server on port ${PORT}`);
  });
});
