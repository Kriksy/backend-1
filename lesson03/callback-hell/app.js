const fs = require("fs");
const https = require("https");
const path = require("path");

fs.readFile(path.join(__dirname, "urls.txt"), "utf8", (_error, data) => {
  urls = data.split("\n").filter(url => url.length);
  urls.forEach((url) => {
    const timestamp = Date.now();
    https.get({ hostname: url, path: "/", method: "GET" }, (res) => {
      res.on('data', (_chunk) => {});
      res.on('end', () => {
        fs.appendFile(
          path.join(__dirname, "results.txt"), 
          `Fetched ${url} in ${Date.now() - timestamp} ms\n`,
          (err) => {
            if (err) {
              console.error("Couldn't write to file", err);
            }
          })
      });
    }).on("error", (err) => { console.error(url, err) });
  })
});
