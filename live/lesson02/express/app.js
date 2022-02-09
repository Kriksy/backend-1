const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hej, världen!");
});

app.get("/hello", (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

app.get("/users/:userId", (req, res) => {
    console.log(req.params);
    res.send(`User ID is: ${req.params.userId}`);
});

app.get("/greetings/:greeting", (req, res) => {
    console.log(req.params.greeting);
    res.send(`<h1>${req.params.greeting} world!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Started Express at port ${PORT}`);
});