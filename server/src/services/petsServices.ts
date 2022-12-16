import {
  BadRequestErrror,
  NotFoundError,
  UnauthorizedError,
} from "../helpers/errors";
import { ICreatePet, IEditPet } from "../interfaces/petsInterface";
import { petsRepository } from "../repositories/PetsRepository";

export class PetsServices {
  createPetService = async (newPet: ICreatePet) => {
    const { age, breed, name, owner_name, owner_phone, type } = newPet;

    const pet = petsRepository.create({
      name,
      breed,
      type,
      age,
      owner_name,
      owner_phone,
    });

    await petsRepository.save(pet);

    return pet;
  };

  getPetsService = async () => {
    const pets = await petsRepository.createQueryBuilder("animals").getMany();

    const petActives = pets.filter((item) => item.isActive !== false);

    return { pets: petActives };
  };

  selectPetService = async (id: string) => {
    const petSelected = await petsRepository.findOneBy({ id: id });

    if (!petSelected) {
      throw new NotFoundError("pet not found");
    }

    return { pets: petSelected };
  };

  deletePetService = async (id: string) => {
    const petSelected = await petsRepository.findOneBy({ id: id });

    if (!petSelected) {
      throw new NotFoundError("pet not found");
    }

    if (!petSelected.isActive) {
      throw new NotFoundError("pet not found");
    }

    const deletePet = await petsRepository.update(id, {
      isActive: false,
    });

    return deletePet;
  };

  editPetService = async (payload: IEditPet, id: string) => {
    await petsRepository.findOneBy({ id: id });

    if (
      payload.hasOwnProperty("id") ||
      payload.hasOwnProperty("isActive") ||
      payload.hasOwnProperty("type")
    ) {
      throw new UnauthorizedError("must not be able to update this pet's data");
    }

    await petsRepository.update(id, {
      ...payload,
      updatedAt: new Date(),
    });

    const petEdited = await petsRepository.findOneBy({ id: id });

    return petEdited;
  };
}
