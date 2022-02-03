const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "/testfile.txt");

fs.readFile(filepath, "utf8", (_err, data) => {
  console.log(data);
});
