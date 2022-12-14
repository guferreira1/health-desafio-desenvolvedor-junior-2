import { ICreatePet, IEditPet } from "../interfaces/petsInterface";
import { petsRepository } from "../repositories/PetsRepository";

export const createPetService = async (newPet: ICreatePet) => {
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

export const getPetsService = async () => {
  const pets = await petsRepository.createQueryBuilder("animals").getMany();

  return { pets: pets };
};

export const selectPetService = async (id: string) => {
  const petSelected = await petsRepository.findOneBy({ id: id });

  return { pets: petSelected };
};

export const deletePetService = async (id: string) => {
  const petSelected = await petsRepository.findOneBy({ id: id });

  if (!petSelected) {
    return ["erro"];
  }

  if (!petSelected.isActive) {
    return ["erro"];
  }

  const deletePet = await petsRepository.update(id, {
    isActive: false,
  });

  return deletePet;
};

export const editPetService = async (payload: IEditPet, id: string) => {
  await petsRepository.findOneBy({ id: id });

  if (
    payload.hasOwnProperty("id") ||
    payload.hasOwnProperty("isActive") ||
    payload.hasOwnProperty("type")
  ) {
    return ["erro"];
  }

  await petsRepository.update(id, {
    ...payload,
    updatedAt: new Date(),
  });

  const petEdited = await petsRepository.findOneBy({ id: id });

  return petEdited;
};
