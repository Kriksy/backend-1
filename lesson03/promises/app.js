const fs = require("fs");
const path = require("path");

const textfile = path.join(__dirname, "ipsum.txt");

fs.readFile(textfile, "utf8", (err, data) => {
  if (err) {
    console.error("Couldn't read file:", err);
    return
  }
  console.log(data);
});

const getFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return
      }
      resolve(data);
    });
  });
};

getFile(textfile)
  .then(data => console.log(data))
  .catch(err => console.error(err));

(async () => {
  try {
    console.log(await getFile(textfile));
  } catch (error) {
    console.error(error);
  }
})();
