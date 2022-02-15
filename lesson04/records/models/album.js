const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  title: {type: String, required: true, index: true},
  artist: {type: String, required: true},
  year: {type: Number, required: true},
  tracks: {type: [String], required: true},
  genre: {type: String, enum: ["Rock", "Pop", "House", "Rap"]}
});

const Album = mongoose.model("Album", albumSchema);

exports.Album = Album;
