const express = require("express");
const router = express.Router();
const Basic_Panchag = require("../models/m_today_panchang");

//Retrive basic_panchag
router.get("/", async (req, res) => {
  try {
    const astro = await Basic_Panchag.find();
    res.json(astro);
  } catch (err) {
    res.send("Error " + err);
  }
});

//get basic_panchag by id
router.get("/:id", async (req, res) => {
  try {
    const basic_panchag = await Basic_Panchag.findById(req.params.id);
    res.json(basic_panchag);
  } catch (err) {
    res.send("Error :- " + err);
  }
});

// Insert basic_panchag
router.post("/", async (req, res) => {
  try {
    const astro = new Basic_Panchag({
      day: req.body.day,
      month: req.body.month,
      year: req.body.year,
      hour: req.body.hour,
      min: req.body.min,
      lat: req.body.lat,
      lon: req.body.lon,
      tzone: req.body.tzone,
      tithi: req.body.tithi,
      nakshatra: req.body.nakshatra,
      yog: req.body.yog,
      karan: req.body.karan,
      sunrise: req.body.sunrise,
      sunset: req.body.sunset,
      vedic_sunrise: req.body.vedic_sunrise,
      vedic_sunset: req.body.vedic_sunset
    });
    const a1 = await astro.save();
    res.json(a1);
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// Update basic_panchag
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const astro = await Basic_Panchag.findByIdAndUpdate(id, req.body);

    if (!astro) {
      return res.status(404).json({ message: `cannot find id :- ${id}` });
    }
    const updatebasic_panchag = await Basic_Panchag.findById(id);
    res.status(200).json(updatebasic_panchag);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete basic_panchag
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const basic_panchag = await Basic_Panchag.findByIdAndDelete(id, req.body);
    if (!basic_panchag) {
      return res.status(404).json({ message: `cannot find ID : ${id}` });
    }
    const deletebasic_panchag = await Basic_Panchag.findById(id);
    res.json({ deletebasic_panchag, message: "Delete Successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;