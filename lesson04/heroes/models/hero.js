const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, min: 0},
  nickname: String,
});

const Hero = mongoose.model("Hero", heroSchema);

exports.Hero = Hero;
