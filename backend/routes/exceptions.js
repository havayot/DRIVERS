import express from "express";
import Exception from "../models/Exception.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const exceptions = await Exception.find();
  res.json(exceptions);
});

router.post("/", async (req, res) => {
  const exception = new Exception(req.body);
  await exception.save();
  res.json(exception);
});

export default router;
