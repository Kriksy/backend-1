const http = require("http");

const server = http.createServer((_req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello world!</h1>");
    res.end();
})

server.listen(3000, () => {
    console.log("Server started at port 3000");
})