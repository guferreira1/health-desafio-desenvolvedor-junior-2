import { AppDataSource } from "../data-source";
import { Animal } from "../entities/AnimalsEntity";

export const petsRepository = AppDataSource.getRepository(Animal);
