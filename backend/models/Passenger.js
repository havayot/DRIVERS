import mongoose from "mongoose";

const passengerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  station: String,
  gps: { lat: Number, lng: Number },
  days: [String]
});

export default mongoose.model("Passenger", passengerSchema);
