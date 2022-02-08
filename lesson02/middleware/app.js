const express = require("express");

const app = express();
const PORT = 3000;


app.use((req, res, next) => {
  const timestamp = Date.now();
  res.on('finish', () => { 
    const duration = Date.now() - timestamp;
    console.log(`${req.method} ${req.path} ${duration}ms`);
  })
  next();
});

app.get("/", (_req, res) => {
  res.send("<h1>Hello world!</h1>");
});

app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
});
