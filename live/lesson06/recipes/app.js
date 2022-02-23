const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { User } = require("./models/user");

const app = express();
const PORT = 3000;
const JWT_SECRET = "0823uoiwehfilusayciadfsbhkjsdfbjaenrw";

app.use(express.json());

app.post("/tokens", async (req, res) => {
    const {username, password} = req.body;
    const user = await User.login(username, password);
    if (user) {
        const userId = user._id.toString();
        const token = jwt.sign(
            {userId, username: user.username},
            JWT_SECRET,
            {expiresIn: 120, subject: userId}
        );
        res.json({token});
    } else {
        res.sendStatus(401);
    }
});

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