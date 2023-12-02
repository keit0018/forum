const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
});

userSchema.index({ username: 1, email: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);

module.exports = User;