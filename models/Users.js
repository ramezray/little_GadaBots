const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  image_url: {
    type: String,
    required: false
  },
  bots:[
    {type: Schema.Types.ObjectId, ref: "Bot"}
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;