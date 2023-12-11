import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import indexRoutes from "./routes/clothesRoutes.js";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,PUT,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

app.use(cors(corsOptions));

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

//routes
app.use(indexRoutes);

app.listen(8000, () => {
  console.log(`Server is running on PORT ${8000}`);
});
