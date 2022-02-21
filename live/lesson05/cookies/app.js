const express = require("express");
const cookieParser = require("cookie-parser");

const app = express()
const PORT = 3000;

app.use(cookieParser());

app.get("/", (req, res) => {
    console.log(req.cookies);
    res.cookie("testcookie", "I am a cookie!");
    res.cookie("testcookie2", "Cookie monster! 🍪");
    res.send("Hello cookie world!")
});

app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
});