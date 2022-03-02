const express = require("express");
const { Hero, sequelize } = require("./models");

const app = express()
const PORT = 3000;

app.get("/", async (req, res) => {
    const heroes = await Hero.findAll();
    res.render("index.ejs", { heroes });
});

sequelize.sync({alter: true}).then(() => {
    console.log("Done syncing models");
    app.listen(PORT, () => {
        console.log(`Started Express server on port ${PORT}`);
    });
});
