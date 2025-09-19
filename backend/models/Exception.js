import mongoose from "mongoose";

const exceptionSchema = new mongoose.Schema({
  passengerId: { type: mongoose.Schema.Types.ObjectId, ref: "Passenger" },
  date: Date,
  status: { type: String, enum: ["present", "absent"] }
});

export default mongoose.model("Exception", exceptionSchema);
