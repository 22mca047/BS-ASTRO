const express = require("express");
const router = express.Router();
const Chaughadiya = require("../models/m_chaughadiya_muhurta");

//Retrive chaughadiya
router.get("/", async (req, res) => {
  try {
    const chaughadiya = await Chaughadiya.find();
    res.json(chaughadiya);
  } catch (err) {
    res.send("Error " + err);
  }
});

//get chaughadiya by id
router.get("/:id", async (req, res) => {
  try {
    const chaughadiya = await Chaughadiya.findById(req.params.id);
    res.json(chaughadiya);
  } catch (err) {
    res.send("Error :- " + err);
  }
});

// Insert chaughadiya
router.post("/", async (req, res) => {
  try {
    const chaugh = new Chaughadiya({
      day: req.body.day,
      month: req.body.month,
      year: req.body.year,
      hour: req.body.hour,
      min: req.body.min,
      lat: req.body.lat,
      lon: req.body.lon,
      tzone: req.body.tzone,
      chaughadiya: req.body.chaughadiya
  }); 

    const a1 = await chaugh.save();
    res.json(a1);
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// Update chaughadiya
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const chaughadiya = await Chaughadiya.findByIdAndUpdate(id, req.body);

    if (!chaughadiya) {
      return res.status(404).json({ message: `cannot find id :- ${id}` });
    }
    const updatechaughadiya = await Chaughadiya.findById(id);
    res.status(200).json(updatechaughadiya);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete chaughadiya
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const chaughadiya = await Chaughadiya.findByIdAndDelete(id, req.body);
    if (!chaughadiya) {
      return res.status(404).json({ message: `cannot find ID : ${id}` });
    }
    const deletechaughadiya = await Chaughadiya.findById(id);
    res.json({ deletechaughadiya, message: "Delete Successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;