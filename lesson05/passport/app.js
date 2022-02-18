const express = require("express");
const session = require("express-session");
const passport = require("passport");

const authRouter = require("./auth").router;
const diaryRouter = require("./diary").router;


const app = express()
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.authenticate('session'));

app.use("/auth", authRouter);
app.use("/", diaryRouter);


app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});

