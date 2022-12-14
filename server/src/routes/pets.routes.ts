import { Router } from "express";
import {
  createPetsController,
  deletePetController,
  editPetController,
  getPetsController,
  selectPetController,
} from "../controllers/petsController";

export const router = Router();

router.post("/", createPetsController);
router.get("/", getPetsController);
router.get("/:id", selectPetController);
router.delete("/:id", deletePetController);
router.patch("/:id", editPetController);
