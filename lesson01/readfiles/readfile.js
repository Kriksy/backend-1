const fs = require("fs");
fs.readFile(`${__dirname}/testfile.txt`, "utf8", (_err, data) => {
  console.log(data);
});
