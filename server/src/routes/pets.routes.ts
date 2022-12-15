import { Router } from "express";
import { PetsController } from "../controllers/petsController";

export const router = Router();

router.post("/", new PetsController().createPetsController);
router.get("/", new PetsController().getPetsController);
router.get("/:id", new PetsController().selectPetController);
router.delete("/:id", new PetsController().deletePetController);
router.patch("/:id", new PetsController().editPetController);
