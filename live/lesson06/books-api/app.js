const express = require("express");
const { BOOKS } = require("./books");

const app = express();
const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

const bookListItem = ({title, id}) => {
    return {
        title,
        url: `${BASE_URL}/books/${id}`
    };
};

app.get("/", (req, res) => {
    res.json({books: BASE_URL + "/books"});
});

app.get("/books", (req, res) => {
    res.json({books: BOOKS.map(bookListItem)});
});

app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
});