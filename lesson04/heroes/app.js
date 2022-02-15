
const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://127.0.0.1/backend1");
  return mongoose.connection;
}

exports.connect = connect;
