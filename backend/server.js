import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import passengersRoutes from "./routes/passengers.js";
import exceptionsRoutes from "./routes/exceptions.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/passengers", passengersRoutes);
app.use("/api/exceptions", exceptionsRoutes);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
