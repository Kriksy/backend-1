// setTimeout(args => { console.log(args) }, 2000, "hello");

const timeout = new Promise((resolve, reject) => {
    setTimeout(args => {
        resolve("Done waiting!");
    }, 3000);
});

timeout.then((data) => {
    console.log("here's the result:", data);
});