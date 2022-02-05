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

/*
getPromise({
  hostname: "icanhazdadjoke.com",
  port: 443,
  path: "/",
  method: "GET",
  headers: {"Accept": "text/plain"}
}).then((data) => { console.log(data) });


const time = Date.now();
const p1 = getPromise({
  hostname: "icanhazdadjoke.com",
  port: 443,
  path: "/",
  method: "GET",
  headers: {"Accept": "text/plain"}
}).then((data) => {
  return Date.now()
});
const p2 = getPromise({
  hostname: "twitter.com",
  port: 443,
  path: "/",
  method: "GET",
  headers: {"Accept": "text/plain"}
}).then((data) => {
  return Date.now()
});
Promise.all([p1, p2]).then(([v1, v2]) => console.log(v1, v2));

const p3 = getPromise({
  hostname: "twitter.com",
  port: 443,
  path: "/",
  method: "GET",
  headers: {"Accept": "text/plain"}
}).then((data) => {
  return data;
}).then((data) => console.log(data));
*/
