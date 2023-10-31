const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());

const connectDB = async () => {
  try {
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/wardrobe");
    console.log(`mongodb connected ${db.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
connectDB();

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

const Cloth = mongoose.model("Cloth", ClothesSchema);

app.get("/api", (req, res) => {
  res.status(200).send({ response: "api worked.." });
});

app.listen(8000, () => {
  console.log(`Server is running on PORT ${8000}`);
});
