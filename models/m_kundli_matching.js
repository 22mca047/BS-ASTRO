const mongoose = require("mongoose");

const Kundli_Match_Schema = new mongoose.Schema({
  mday: {
    type: String,
    required: true,
  },
  mmonth: {
    type: String,
    required: true,
  },
  myear: {
    type: String,
    required: true,
  },
  mhour: {
    type: String,
    required: true,
  },
  mmin: {
    type: String,
    required: true,
  },
  mlat: {
    type: String,
    required: true,
  },
  mlon: {
    type: String,
    required: true,
  },
  mtzone: {
    type: String,
    required: true,
  },

  //female
  fday: {
    type: String,
    required: true,
  },
  fmonth: {
    type: String,
    required: true,
  },
  fyear: {
    type: String,
    required: true,
  },
  fhour: {
    type: String,
    required: true,
  },
  fmin: {
    type: String,
    required: true,
  },
  flat: {
    type: String,
    required: true,
  },
  flon: {
    type: String,
    required: true,
  },
  ftzone: {
    type: String,
    required: true,
  },
  
  // male
  male_astro_details: {
    ascendant: {
      type: String,
      required: true
    },
    Varna: {
        type: String,
        required: true
    },
    Vashya: {
      type: String,
      required: true
    },
    Yoni: {
        type: String,
        required: true
    },
    Gan: {
        type: String,
        required: true
    },
    Nadi: {
      type: String,
      required: true
    },
    SignLord: {
        type: String,
        required: true
    },
    sign: {
        type: String,
        required: true
    },
    Naksahtra: {
        type: String,
        required: true
    },
    NaksahtraLord: {
        type: String,
        required: true
    },
    Charan: {
        type: String,
        required: true
    },
    Yog: {
        type: String,
        required: true
    },
    Karan: {
        type: String,
        required: true
    },
    Tithi: {
        type: String,
        required: true
    },
    yunja: {
        type: String,
        required: true
    },
    tatva: {
        type: String,
        required: true
    },
    name_alphabet: {
        type: String,
        required: true
    },
    paya: {
        type: String,
        required: true
    },
  },

  
  // female
  female_astro_details: {
    ascendant: {
      type: String,
      required: true
    },
    Varna: {
        type: String,
        required: true
    },
    Vashya: {
      type: String,
      required: true
    },
    Yoni: {
        type: String,
        required: true
    },
    Gan: {
        type: String,
        required: true
    },
    Nadi: {
      type: String,
      required: true
    },
    SignLord: {
        type: String,
        required: true
    },
    sign: {
        type: String,
        required: true
    },
    Naksahtra: {
        type: String,
        required: true
    },
    NaksahtraLord: {
        type: String,
        required: true
    },
    Charan: {
        type: String,
        required: true
    },
    Yog: {
        type: String,
        required: true
    },
    Karan: {
        type: String,
        required: true
    },
    Tithi: {
        type: String,
        required: true
    },
    yunja: {
        type: String,
        required: true
    },
    tatva: {
        type: String,
        required: true
    },
    name_alphabet: {
        type: String,
        required: true
    },
    paya: {
        type: String,
        required: true
    }
  }
});
module.exports = mongoose.model("kundli_matching", Kundli_Match_Schema);