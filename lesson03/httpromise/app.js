const https = require("https");

const getPromise = (options) => {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      const response = []
      res.on("data", data => {
        response.push(data);
      });
      res.on("end", () => {
        resolve(Buffer.concat(response).toString());
      });
    });
    req.on("error", reject);
    req.end()
  });
};

getPromise({
  hostname: "icanhazdadjoke.com",
  port: 443,
  path: "/",
  method: "GET",
  headers: {"Accept": "text/plain"}
}).then((data) => { console.log(data) });
