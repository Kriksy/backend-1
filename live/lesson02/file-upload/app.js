const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

const upload = multer({ dest: "uploads" });

app.use(upload.single("file"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.post(
    "/upload",
    (req, res) => {
        res.send("Files uploaded successfully!");
    }
);

app.listen(PORT, () => {
    console.log(`Started server on port: ${PORT}`)
});