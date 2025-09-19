import express from "express";
import Passenger from "../models/Passenger.js";

const router = express.Router();

// GET כל הנוסעים
router.get("/", async (req, res) => {
  const passengers = await Passenger.find();
  res.json(passengers);
});

// POST נוסעת חדשה
router.post("/", async (req, res) => {
  const passenger = new Passenger(req.body);
  await passenger.save();
  res.json(passenger);
});

// PUT עדכון נוסעת
router.put("/:id", async (req, res) => {
  const passenger = await Passenger.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(passenger);
});

// DELETE מחיקת נוסעת
router.delete("/:id", async (req, res) => {
  await Passenger.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
