const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const router = express.Router();

const { User } = require("./models/user");

// const users = {"bella": "twilight"}

// passport.use(new LocalStrategy((username, password, callback) => {
//   if (users[username] === password) {
//     callback(null, username);
//   } else {
//     callback(null, false);
//   }
// }));


// // Save user to session. NB: This can also be asynchronous!
// passport.serializeUser((user, callback) => {
//   return callback(null, user);
// });

// // Load user from session. NB: This can also be asynchronous!
// passport.deserializeUser((user, callback) => {
//     return callback(null, user);
// });

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

router.post("/signup", async (req, res) => {
  const {username, password} = req.body;
  const user = new User({username});
  await user.setPassword(password);
  await user.save();
  res.redirect("/");
});

router.get("/login", (_req, res) => {
  res.render("login.ejs");
})

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
}));

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("./login");
});

exports.router = router;
