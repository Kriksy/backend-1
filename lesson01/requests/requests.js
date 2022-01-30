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
    process.stdout.write(d);
  });
});

req.on("error", error => {
  console.error(error)
});

req.end()
