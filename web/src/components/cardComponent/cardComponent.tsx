import { useContext } from "react";
import { PetsContext } from "../../context/petsContext";
import { Card } from "./cardStyles";

export const CardComponent = () => {
  const { isPets, getId } = useContext(PetsContext);

  return (
    <>
      <Card>
        {isPets.map((pet) => (
          <li key={pet.id}>
            <p>Nome: {pet.name}</p>
            <p>Tipo: {pet.type}</p>
            <button onClick={() => getId(pet.id!)}>Informações</button>
          </li>
        ))}
      </Card>
    </>
  );
};
