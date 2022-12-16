import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { CreatePet } from "./resgisterPetStyles";
import { useContext } from "react";
import { PetsContext } from "../../context/petsContext";
import { petsInterface } from "../../interfaces/petsInterface";

type formValues = {
  name: string;
  age: number;
  breed: string;
  type: string;
  owner_name: string;
  owner_phone: string;
};

export const RegisterNewPet = () => {
  const { registerPet } = useContext(PetsContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    age: yup.string().required("Idade obrigatória"),
    breed: yup.string().required("Raça obrigatória"),
    type: yup.string().required("Tipo obrigatório"),
    owner_name: yup.string().required("Informe o nome do dono"),
    owner_phone: yup.string().required("Telefone para contato obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formValues>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: petsInterface) => {
    registerPet(data);

    reset();
  };

  return (
    <CreatePet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Cadastrar Pet</h3>
        <label>Nome do pet:</label>
        <input type="text" {...register("name")} />
        <p>{errors.name?.message}</p>

        <label>Idade do pet:</label>
        <input type="text" {...register("age")} />
        <p>{errors.age?.message}</p>

        <label>Raça do pet:</label>
        <input type="text" {...register("breed")} />
        <p>{errors.breed?.message}</p>

        <label>Tipo do pet:</label>
        <select {...register("type")}>
          <option value="">Selecione o tipo</option>

          <option value="cachorro">Cachorro</option>

          <option value="gato">Gato</option>
        </select>
        <p>{errors.type?.message}</p>

        <label>Nome do dono:</label>
        <input type="text" {...register("owner_name")} />
        <p>{errors.owner_name?.message}</p>

        <label>Telefone do dono:</label>
        <input type="text" {...register("owner_phone")} />
        <p>{errors.owner_phone?.message}</p>

        <button type="submit">Cadastrar</button>
      </form>
    </CreatePet>
  );
};
