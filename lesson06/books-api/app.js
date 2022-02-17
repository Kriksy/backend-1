const express = require("express");
const { BOOKS } = require("./books");

const app = express()
const PORT = 3000;

const BASE_URL = `http://localhost:${PORT}`;

const bookUrl = ({ id }) => `${BASE_URL}/books/${id}`;
const authorUrl = (name) => `${BASE_URL}/authors/${encodeURIComponent(name)}`;
const bookListItem = (book) => {
    return {title: book.title, url: bookUrl(book)}
}

app.get("/books", (_req, res) => {
  res.json({books: BOOKS.map(bookListItem)})
});

app.get("/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = BOOKS.find(book => book.id === bookId);
  res.json({...book, author: authorUrl(book.author), url: bookUrl(book)})
});

app.get("/authors/:author", (req, res) => {
  const author = req.params.author;
  const books = BOOKS.filter(book => book.author === author).map(bookListItem);
  res.json({name: author, url: authorUrl(author), books});
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
