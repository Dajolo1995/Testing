const mongoose = require ('mongoose');

const AdminSchema = mongoose.Schema({
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

module.exports = mongoose.model("Admin", AdminSchema);