const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./models/user");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/users", async (req, res) => {
    const {username, password} = req.body;
    const user = new User({username, password});
    await user.save();
    res.json({username});
});

mongoose.connect("mongodb://127.0.0.1/backend1");

app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
});