const mongoose = require("mongoose");

const chaughadiya_muhurta_Schema = new mongoose.Schema({
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

  chaughadiya: {
    day: [{
      time: {
        type: String
      },
      muhurta: {
        type: String
      }
    }],
    night: [{
      time: {
        type: String
      },
      muhurta: {
        type: String
      }
    }]
  }
});

module.exports = mongoose.model("shubh_muhurat", chaughadiya_muhurta_Schema);