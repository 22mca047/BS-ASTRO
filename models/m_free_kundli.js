const mongoose = require("mongoose");

const KundliSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  min: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },lon: {
    type: String,
    required: true,
  },
  tzone: {
    type: String,
    required: true,
  },    
  ascendant: {
    type: String,
    required: true,
  },
  ascendant_lord: {
    type: String,
    required: true,
  },
  Varna: {
    type: String,
    required: true,
  },
  Vashya: {
    type: String,
    required: true,
  },
  Yoni: {
    type: String,
    required: true,
  },
  Gan: {
    type: String,
    required: true,
  },
  Nadi: {
    type: String,
    required: true,
  },
  SignLord: {
    type: String,
    required: true,
  },
  sign: {
    type: String,
    required: true,
  },
  Naksahtra: {
    type: String,
    required: true,
  },
  NaksahtraLord: {
    type: String,
    required: true,
  },
  Charan: {
    type: String,
    required: true,
  },
  Yog: {
    type: String,
    required: true,
  },
  Karan: {
    type: String,
    required: true,
  },
  Tithi: {
    type: String,
    required: true,
  },
  yunja: {
    type: String,
    required: true,
  },
  tatva: {
    type: String,
    required: true,
  },
  name_alphabet: {
    type: String,
    required: true,
  },
  paya: {
    type: String,
    required: true,
  }
});
module.exports = mongoose.model("free_kundli", KundliSchema);