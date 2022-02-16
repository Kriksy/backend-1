const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
    location: {type: mongoose.Schema.Types.ObjectId, ref: "Location"},
    name: {type: String, unique: true, required: true},
    age: {type: Number, min: 0, required: true},
    nickname: String,
});

const Hero = mongoose.model("Hero", heroSchema);

exports.Hero = Hero;