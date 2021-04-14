const mongoose = require ('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
    trim: true,
  },
  identification: {
    type: "string",
    required: true,
    trim: true,
  },
  tp: {
    type: "string",
    trim: true,
    unique:true
  },
  email: {
    type: "string",
    required: true,
    trim: true,
    unique:true
  },
  password: {
    type: "string",
    required: true,
    trim: true,
  },
  record: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", UserSchema);
