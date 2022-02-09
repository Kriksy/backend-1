const https = require("https");

const req = https.request({
        hostname: "example.com",
        port: 443,
        path: "/",
        method: "GET",
        // headers: {""}
    }, res => {
    console.log("got response from server!");
    res.on("data", (data) => {
        console.log(String(data));
    });
})

req.on("error", (err) => {
    console.error("Got error:", err);
})

req.end();