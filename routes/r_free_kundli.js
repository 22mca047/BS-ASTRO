const express = require("express");
const router = express.Router();
const FreeKundli = require("../models/m_free_kundli");

//Retrive kundlidetail
router.get("/", async (req, res) => {
  try {
    const kundli = await FreeKundli.find();
    res.json(kundli);
  } catch (err) {
    res.send("Error " + err);
  }
});

//get kundlidetail by id
router.get("/:id", async (req, res) => {
  try {
    const kundlidetail = await FreeKundli.findById(req.params.id);
    res.json(kundlidetail);
  } catch (err) {
    res.send("Error :- " + err);
  }
});

// Insert kundlidetail
router.post("/", async (req, res) => {
  try {
    const kundli = new FreeKundli({
      day: req.body.day,
      month: req.body.month,
      year: req.body.year,
      hour: req.body.hour,
      min: req.body.min,
      lat: req.body.lat,
      lon: req.body.lon,
      tzone: req.body.tzone,
      ascendant: req.body.ascendant,
      ascendant_lord: req.body.ascendant_lord,
      Varna: req.body.Varna,
      Vashya: req.body.Vashya,
      Yoni: req.body.Yoni,
      Gan: req.body.Gan,
      Nadi: req.body.Nadi,
      SignLord: req.body.SignLord,
      sign: req.body.sign,
      Naksahtra: req.body.Naksahtra,
      NaksahtraLord: req.body.NaksahtraLord,
      Charan: req.body.Charan,
      Yog: req.body.Yog,
      Karan: req.body.Karan,
      Tithi: req.body.Tithi,
      yunja: req.body.yunja,
      tatva: req.body.tatva,
      name_alphabet: req.body.name_alphabet,
      paya: req.body.paya
    });
    const a1 = await kundli.save();
    res.json(a1);
    
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// Update kundlidetail
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const kundli = await FreeKundli.findByIdAndUpdate(id, req.body);

    if (!kundli) {
      return res.status(404).json({ message: `cannot find id :- ${id}` });
    }
    const updatekundlidetail = await FreeKundli.findById(id);
    res.status(200).json(updatekundlidetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete kundlidetail
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const kundlidetail = await FreeKundli.findByIdAndDelete(id, req.body);
    if (!kundlidetail) {
      return res.status(404).json({ message: `cannot find ID : ${id}` });
    }
    const deletekundlidetail = await FreeKundli.findById(id);
    res.json({ deletekundlidetail, message: "Delete Successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;