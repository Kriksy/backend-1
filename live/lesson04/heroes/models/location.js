const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    region: String
});

const Location = mongoose.model("Location", locationSchema);

exports.Location = Location;