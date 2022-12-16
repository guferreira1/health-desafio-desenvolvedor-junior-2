import { useContext, useEffect } from "react";
import { PetsContext } from "../../context/petsContext";
import { Card } from "./cardStyles";

export const CardComponent = () => {
  const { getPets, isPets, getId } = useContext(PetsContext);

  useEffect(() => {
    getPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Card>
        {isPets.map((pet) => (
          <li key={pet.id}>
            <p>Nome: {pet.name}</p>
            <p>Dono: {pet.owner_name}</p>
            <p>Tipo: {pet.type}</p>
            <p>Raça: {pet.breed}</p>
            <p>Idade: {pet.age} anos</p>
            <button onClick={() => getId(pet.id)}>Informações</button>
          </li>
        ))}
      </Card>
    </>
  );
};
