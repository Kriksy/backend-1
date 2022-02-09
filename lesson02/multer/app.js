const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 3000;


const upload = multer({ dest: 'uploads/' });

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "upload.html"))
});

// NB: We can also upload single files using upload.single()

app.post(
  "/upload",
  upload.array("files"),
  (req, res) => {
    console.log(req.body);
    console.log(req.files);
    res.send("Files uploaded successfully")
  }
);

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
