const express = require("express");

const app = express();
const PORT = 3000;

const HEROES = [
    {name: "Frodo", origin: "The shire"},
    {name: "Samwise", origin: "The shire"},
    {name: "Merry", origin: "The shire"},
    {name: "Pippin", origin: "The shire"},
    {name: "Boromir", origin: "Gondor"},
    {name: "Gandalf"}
]

app.get("/", (req, res) => {
    const data = {
        title: "Lord of the Rings",
        heroes: HEROES
    }
    res.render("index.ejs", data)
})

app.get("/:heroName", (req, res) => {
    const heroName = req.params.heroName;
    const hero = HEROES.find(({ name }) => name === heroName);
    res.render("hero.ejs", hero);
})

app.listen(PORT, () => {
    console.log(`Started server on port: ${PORT}`)
});