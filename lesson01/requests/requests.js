const https = require("https");
const options = {
  hostname: "icanhazdadjoke.com",
  port: 443,
  path: "/",
  method: "GET",
  headers: {"Accept": "text/plain"}
}

const req = https.request(options, res => {
  res.on("data", d => {
    console.log(String(d));
  });
});

req.on("error", error => {
  console.error(error)
});

req.end()
