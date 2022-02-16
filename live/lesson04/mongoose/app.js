const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect("mongodb://localhost/backend1");
};

exports.connect = connect;