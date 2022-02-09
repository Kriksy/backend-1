const express = require("express");

const { BOOKS } = require("./books");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Started server on port: ${PORT}`)
});