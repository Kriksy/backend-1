const express = require("express");

const app = express()
const PORT = 3000;

const users = {
  "chreke": "supersecret"
};

const b64decode = (str) => {
  return Buffer.from(str, "base64").toString("ascii");
}

const authenticate = (basicAuth) => {
  const login = b64decode(basicAuth.split(" ")[1]);
  const [username, password] = login.split(":");
  if (users[username] === password) {
    return username;
  }
  return null;
}

app.get("/", (req, res) => {
  const authHeader = req.header("Authorization");
  let user = null;
  if (authHeader) {
    user = authenticate(authHeader);
  }
  if (user) {
    res.send(`Welcome ${user}`);
  } else {
    res.header("WWW-Authenticate", `Basic realm="Min domän"`);
    res.sendStatus(401);
  }
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
