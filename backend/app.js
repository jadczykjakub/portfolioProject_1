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

const Item = mongoose.model("Cloth", ClothesSchema);

app.get("/api/clothes", async (req, res) => {
  try {
    await Item.find()
      .then((response) => {
        res.status(200).send({ response: response });
      })
      .catch((err) => {
        res.status(500).send({ response: err.message });
      });
  } catch (err) {
    res.status(500).send({ response: err.message });
  }
});

app.post("/api/clothes", async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      season: req.body.season,
    });
    await newItem
      .save()
      .then((response) => {
        res.status(200).send({ response: response });
      })
      .catch((err) => {
        res.status(500).send({ response: err.message });
      });
  } catch (err) {
    res.status(500).send({ response: err.message });
  }
});

// app.put("/api/clothes/:id", async (req, res) => {
//   try {
//     const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.status(200).send({ response: updatedItem });
//   } catch (err) {
//     res.status(500).send({ response: err.message });
//   }
// });

// app.delete("/api/clothes/:id", async (req, res) => {
//   try {
//     await Item.findByIdAndRemove(req.params.id).then((response) => {
//       res.status(200).send({ response: req.params.id });
//     });
//   } catch (err) {
//     res.status(500).send({ response: err.message });
//   }
// });

app.listen(8000, () => {
  console.log(`Server is running on PORT ${8000}`);
});
