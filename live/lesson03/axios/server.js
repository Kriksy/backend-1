const express = require("express");

const app = express()
const PORT = 3000;

app.use(express.json());

app.post("/", (req, res) => {
    console.log("Received dad joke:", req.body.joke);
    res.send("OK")
})

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
