fs = require("fs");

// Asynchronous error handling
fs.readFile("hello.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error while reading file", err);
        return;
    }
    console.log(data);
});

// Synchronous error handling
const foo = {bar: {baz: "foobar"}};
try {
    console.log(foo.baz.bar);
} catch (error) {
    console.error("Something went wrong!");
}

console.log("Hej!");