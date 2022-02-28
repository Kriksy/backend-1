const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// NB: passportLocalMongoose automatically adds username and password fields to
// the User model, so unless we want to add extra attributes to our users the
// schema can be an empty object (e.g. {})
const userSchema = new mongoose.Schema({});

userSchema.plugin(passportLocalMongoose);

exports.User = mongoose.model('User', userSchema);

