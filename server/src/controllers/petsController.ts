import { Request, Response } from "express";
import { PetsServices } from "../services/petsServices";

export class PetsController extends PetsServices {
  createPetsController = async (req: Request, res: Response) => {
    const data = req.body;

    const pet = await this.createPetService(data);

    return res.status(201).json(pet);
  };

  getPetsController = async (req: Request, res: Response) => {
    const pets = await this.getPetsService();

    return res.json(pets);
  };

  selectPetController = async (req: Request, res: Response) => {
    const petId = req.params.id;

    const pet = await this.selectPetService(petId);

    return res.json(pet);
  };

  deletePetController = async (req: Request, res: Response) => {
    const petId = req.params.id;

    const pet = await this.deletePetService(petId);

    return res.status(204).json({});
  };

  editPetController = async (req: Request, res: Response) => {
    const pet = await this.editPetService(req.body, req.params.id);

    return res.json(pet);
  };
}
