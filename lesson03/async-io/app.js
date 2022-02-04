const fs = require("fs");
const path = require("path");

fs.readFile(filePath, "utf8", (_error, data) => {
  if (error) {
    console.error("Something went wrong!");
  } else {
    console.log("Here's the data:", data);
  }
});

fs.readFile(path.join(__dirname, "hello.txt"), "utf8", (_error, data) => {
  console.log("Finished reading the file:", data);
});
console.log("This gets printed first");

// Note that an error in a callback doesn't crash the program:
fs.readFile(path.join(__dirname, "foobar.txt"), "utf8", (error, _data) => {
  console.log("Error callback:", error);
});

// This will crash the program, however:
// throw "Crash!";
// console.log("This will not get printed");
