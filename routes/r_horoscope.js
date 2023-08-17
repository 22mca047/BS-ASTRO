const express = require("express");
const router = express.Router();
const Horoscope = require("../models/m_horoscope");

//Retrive horoscope
router.get("/", async (req, res) => {
  try {
    const horoscope = await Horoscope.find();
    res.json(horoscope);
  } catch (err) {
    res.send("Error " + err);
  }
});

//get horoscope by id
router.get("/:id", async (req, res) => {
  try {
    const horoscope = await Horoscope.findById(req.params.id);
    res.json(horoscope);
  } catch (err) {
    res.send("Error :- " + err);
  }
});

// Insert horoscope
router.post("/", async (req, res) => {
  try {
    const horo = new Horoscope({
      day: req.body.day,
      month: req.body.month,
      year: req.body.year,
      hour: req.body.hour,
      min: req.body.min,
      lat: req.body.lat,
      lon: req.body.lon,
      tzone: req.body.tzone,
      planets: req.body.planets,
      houses: req.body.houses,
      ascendant: req.body.ascendant,
      midheaven: req.body.midheaven,
      vertex: req.body.vertex,
      lilith: req.body.lilith,
      aspects: req.body.aspects,
      
  });  

    //     [{
    //     horoscope_day_time: req.body.horoscope.day.time,
    //     horoscope_day_muhurta: req.body.horoscope.day.muhurta
    // }],

    // [{
    //     horoscope_night_time: req.body.horoscope.night.time,
    //   horoscope_night_muhurta: req.body.horoscope.night.muhurta
    // }]
     

    const a1 = await horo.save();
    res.json(a1);
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// Update horoscope
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const horoscope = await Horoscope.findByIdAndUpdate(id, req.body);

    if (!horoscope) {
      return res.status(404).json({ message: `cannot find id :- ${id}` });
    }
    const updatehoroscope = await Horoscope.findById(id);
    res.status(200).json(updatehoroscope);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete horoscope
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const horoscope = await Horoscope.findByIdAndDelete(id, req.body);
    if (!horoscope) {
      return res.status(404).json({ message: `cannot find ID : ${id}` });
    }
    const deletehoroscope = await Horoscope.findById(id);
    res.json({ deletehoroscope, message: "Delete Successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;