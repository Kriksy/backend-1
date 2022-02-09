const express = require("express");

const app = express()
const PORT = 3000;

app.use((req, _res, next) => {
    console.log(req.method, req.path);
    req.subject = 'World'
    next();
})

app.get("/", (req, res) => {
    res.send(`<h1>Hello ${req.subject}!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
});
