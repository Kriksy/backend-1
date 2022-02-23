const express = require("express");
const { BOOKS } = require("./books");

const app = express();
const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

app.use(express.json());

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

const addAuthorURL = (book) => {
    const authorURL = `${BASE_URL}/authors/${encodeURIComponent(book.author)}`;
    return {authorURL, ...book};
}

app.post("/books", (req, res) => {
    const id = BOOKS.length + 1;
    const {author, country, language, link, pages, title, year} = req.body;
    const book = {
        id,
        author,
        country,
        language,
        link,
        pages,
        title,
        year
    };
    BOOKS.push(book);
    res.json(addAuthorURL(book))
});

app.get("/books/:bookId", (req, res) => {
    const book = BOOKS.find(({id}) => id === parseInt(req.params.bookId));
    res.json(addAuthorURL(book));
});

app.get("/authors/:author", (req, res) => {
    const authorName = req.params.author;
    const books = BOOKS.filter(({author}) => author === authorName);
    res.json({
        name: authorName,
        books: books.map(bookListItem)
    });
});

app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
});