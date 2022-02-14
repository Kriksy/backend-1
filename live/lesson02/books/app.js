const express = require("express");

const { BOOKS } = require("./books");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.render("books.ejs", {books: BOOKS});
});

app.get("/books/:bookId", (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = BOOKS.find((book) => book.id === bookId);
    if (book) {
        res.render("book.ejs", book);
    } else {
        res.status(404).send(`<h1>Not found</h1>`);
    }
});

app.listen(PORT, () => {
    console.log(`Started server on port: ${PORT}`)
});