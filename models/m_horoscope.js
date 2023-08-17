const mongoose = require("mongoose");

const horoscope_Schema = new mongoose.Schema({
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

planets: [{
    name: {
        type: String,
        required: true
    },
    full_degree: {
        type: String,
        required: true
    },
    norm_degree: {
        type: String,
        required: true
    },
    speed: {
        type: String,
        required: true
    }, 
    is_retro: {
        type: String,
        required: true
    }, 
    sign_id: {
        type: Number,
        required: true
    }, 
    sign: {
        type: String,
        required: true
    }, 
    house: {
        type: Number,
        required: true
    }   
    }],

    houses:[{
        house:{
            type: Number,
            required: true
        },
        sign:{
            type: String,
            required: true
        },
        degree:{
            type: String,
            required: true
        }
    }],

    ascendant:{
        type: String,
        required: true
    },
    midheaven:{
        type: String,
        required: true
    },
    vertex:{
        type: String,
        required: true
    },

    lilith:{
        name:{
            type: String,
            required: true
        },
        full_degree:{
            type: String,
            required: true
        },
        norm_degree:{
            type: String,
            required: true
        },
        speed:{
            type: String,
            required: true
        },
        is_retro:{
            type: String,
            required: true
        },
        sign_id:{
            type: Number,
            required: true
        },
        sign:{
            type: String,
            required: true
        },
        house:{
            type: Number,
            required: true
        }
    },

    aspects:[{
        aspecting_planet:{
            type: String,
            required: true
        },
        aspected_planet:{
            type: String,
            required: true
        },
        aspecting_planet_id:{
            type: Number,
            required: true
        },
        aspected_planet_id:{
            type: Number,
            required: true
        },
        type:{
            type: String,
            required: true
        },
        orb:{
            type: String,
            required: true
        },
        diff:{
            type: String,
            required: true
        }
    }]
});

module.exports = mongoose.model("horoscope", horoscope_Schema);