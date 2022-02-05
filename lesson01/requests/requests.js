const https = require("https");
const options = {
  hostname: "icanhazdadjoke.com",
  port: 443,
  path: "/",
  method: "GET",
  headers: {"Accept": "text/plain"}
}

const req = https.request(options, res => {
  let response = "";
  res.on("data", d => {
    response += d;
  });
  res.on("end", () => {
    console.log(response);
  });
});

req.on("error", error => {
  console.error(error)
});

req.end()
