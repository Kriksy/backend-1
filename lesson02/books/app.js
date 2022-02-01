const express = require("express");
const { BOOKS } = require("./books")

const app = express()
const PORT = 3000;

app.get("/books/:id", (req, res) => { 
  const bookId = parseInt(req.params.id);
  const book = BOOKS.filter(({ id }) => id === bookId)[0];
  res.send(book.title);
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
