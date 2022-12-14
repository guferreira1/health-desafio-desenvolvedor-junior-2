import { Request, Response } from "express";
import {
  createPetService,
  deletePetService,
  editPetService,
  getPetsService,
  selectPetService,
} from "../services/petsServices";

export const createPetsController = async (req: Request, res: Response) => {
  const data = req.body;

  const pet = await createPetService(data);

  return res.status(201).json(pet);
};

export const getPetsController = async (req: Request, res: Response) => {
  const pets = await getPetsService();

  return res.json(pets);
};

export const selectPetController = async (req: Request, res: Response) => {
  const petId = req.params.id;

  const pet = await selectPetService(petId);

  return res.json(pet);
};

export const deletePetController = async (req: Request, res: Response) => {
  const petId = req.params.id;

  const pet = await deletePetService(petId);

  return res.status(204).json({});
};

export const editPetController = async (req: Request, res: Response) => {
  const pet = await editPetService(req.body, req.params.id);

  return res.json(pet);
};
