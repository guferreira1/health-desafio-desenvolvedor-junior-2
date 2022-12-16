import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ResearchContainer } from "./resgisterPetStyles";
import { useContext } from "react";
import { PetsContext } from "../../context/petsContext";

type formValues = {
  type: string;
};

export const SearchComponent = () => {
  const { getPets } = useContext(PetsContext);

  const formSchema = yup.object().shape({
    type: yup.string().required("Selecione um tipo valido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFilter = (type: any) => {};

  return (
    <ResearchContainer>
      <form onSubmit={handleSubmit(onSubmitFilter)}>
        <label>Pesquisar por tipo:</label>

        <div className="flexContainer">
          <select {...register("type")}>
            <option value="">Selecione o tipo</option>

            <option value="cachorro">Cães</option>

            <option value="gato">Gatos</option>
          </select>

          <button type="submit">Pesquisar</button>
        </div>
        <p>{errors.type?.message}</p>
      </form>
    </ResearchContainer>
  );
};
