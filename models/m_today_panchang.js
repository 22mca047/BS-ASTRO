const mongoose = require("mongoose");

const today_panchag_Schema = new mongoose.Schema({
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
  },
  lon: {
    type: String,
    required: true,
  },
  tzone: {
    type: String,
    required: true,
  },    
  tithi: {
    type: String,
    required: true,
  },
  nakshatra: {
    type: String,
    required: true,
  },
  yog: {
    type: String,
    required: true,
  },
  karan: {
    type: String,
    required: true,
  },
  sunrise: {
    type: String,
    required: true,
  },
  sunset: {
    type: String,
    required: true,
  },
  vedic_sunrise: {
    type: String,
    required: true,
  },
  vedic_sunset: {
    type: String,
    required: true,
  }
});
module.exports = mongoose.model("today_panchang", today_panchag_Schema);