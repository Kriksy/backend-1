const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

const entries = [];

app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req, res) => {
    const { entry, title } = req.body;
    entries.push({ title, entry, date: new Date() });
    res.send("Entry submitted!");
    console.log(entries);
});

const renderEntry = ({title, entry, date}) => {
    return `
        <h2>${title}</h2>
        <p><em>${date}</em></p>
        <p>${entry}</p>
    `;
}

app.get("/", (req, res) => {
    res.send(`
        <h1>Diary</h1>

        ${entries.map(renderEntry)}

        <h2>New entry</h2>
        <form method="POST" action="/submit" >
            Title: <input type="text" name="title"><br/>
            <textarea name="entry"></textarea>
            <br/>
            <input type="submit" value="Save">
        </form>
    `);
});

app.listen(PORT, () => {
    console.log(`Started server on port: ${PORT}`)
});