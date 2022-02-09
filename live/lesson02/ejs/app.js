const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const data = {
        title: "Lord of the Rings",
        heroes: [
            {name: "Frodo", origin: "The shire"},
            {name: "Samwise", origin: "The shire"},
            {name: "Merry", origin: "The shire"},
            {name: "Pippin", origin: "The shire"},
            {name: "Boromir", origin: "Gondor"},
            {name: "Gandalf"}
        ]
    }
    res.render("index.ejs", data)
})

app.listen(PORT, () => {
    console.log(`Started server on port: ${PORT}`)
});