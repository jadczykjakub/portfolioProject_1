import mongoose from "mongoose";

const ClothesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    enum: ["winter", "summer"],
  },
});

export default mongoose.model("Cloth", ClothesSchema);
