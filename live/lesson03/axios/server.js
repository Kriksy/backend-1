const express = require("express");

const app = express()
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


app.post("/", (req, res) => {
    console.log("Received dad joke", req.body);
    res.send("OK")
})

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});