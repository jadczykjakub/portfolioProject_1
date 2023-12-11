import Router from "express";

import {
  createClothes,
  getClothes,
  removeClothes,
  updateClothes,
} from "../Controllers/ClothesController.js";

import { registerUser } from "../Controllers/AuthController.js";

const router = Router();

router.get("/api/clothes", getClothes);
router.post("api/clothes", createClothes);
router.put("/api/clothes/:id", updateClothes);
router.delete("/api/clothes/:id", removeClothes);
router.post("/api/register", registerUser);

export default router;
