const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },  
  mno: {
    type: Number,
    required: true,
  },
});

const Register = mongoose.model("register", registerSchema);

module.exports = Register;