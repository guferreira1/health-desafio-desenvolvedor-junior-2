import { createContext, ReactNode, useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  editPetInterface,
  petsInterface,
  petsInterfaceResp,
} from "../interfaces/petsInterface";
import { Api } from "../services/api";
import { CustomToast } from "../components/Toast";
interface PetsPropsInterface {
  children: ReactNode;
}

interface PetsProviderInterface {
  isPets: petsInterface[];
  isPetSelected: petsInterface[];
  isOpenDelete: boolean;
  isOpenEdit: boolean;
  isOpenPet: boolean;
  onCloseDelete: () => void;
  onOpenDelete: () => void;
  onCloseEdit: () => void;
  onOpenEdit: () => void;
  onClosePet: () => void;
  onOpenPet: () => void;
  petSelected: (id: string) => void;
  getId: (id: string) => void;
  removePet: () => Promise<void>;
  petEdited: (data: editPetInterface) => Promise<void>;
  registerPet: (data: petsInterface) => Promise<void>;
}

export const PetsContext = createContext<PetsProviderInterface>(
  {} as PetsProviderInterface
);

export const PetsProvider = ({ children }: PetsPropsInterface) => {
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const {
    isOpen: isOpenPet,
    onOpen: onOpenPet,
    onClose: onClosePet,
  } = useDisclosure();

  const [isPets, setIsPets] = useState<petsInterface[]>([]);

  const [isPetSelected, setIsPetSelected] = useState<petsInterface[]>([]);

  const [isId, setIsId] = useState("");

  const { toastify } = CustomToast();

  const getId = (id: string) => {
    setIsId(id);
    petSelected(id);
    onOpenPet();
  };

  useEffect(() => {
    const getPets = async () => {
      try {
        const res = await Api.get("/");

        setIsPets(res.data.pets);
      } catch (error) {
        console.log(error);
      }
    };

    getPets();
  }, [isPets]);

  useEffect(() => {}, []);

  const petSelected = async (id: string) => {
    try {
      const res = await Api.get<petsInterfaceResp>(`/${id}`);

      setIsPetSelected([res.data.pets]);
    } catch (error) {
      console.log(error);
    }
  };

  const petEdited = async (data: editPetInterface) => {
    console.log(data);
    try {
      await Api.patch<petsInterface>(`/${isId}`, data);

      toastify({
        description: "Pet editado com sucesso!",
        status: "success",
      });
    } catch (error: string | any) {
      console.log(error);

      toastify({
        description: "Algo deu errado, verifique os campos e tente novamente",
        status: "error",
      });
    }
  };

  const registerPet = async (data: petsInterface) => {
    try {
      const res = await Api.post("/", data);

      toastify({
        description: "Pet cadastrado com sucesso",
        status: "success",
      });

      setIsPets([...isPets, res.data.pets]);
    } catch (error) {
      console.log(error);

      toastify({
        description: "Algo deu errado, verifique os campos e tente novamente",
        status: "error",
      });
    }
  };

  const removePet = async () => {
    try {
      await Api.delete(`/${isId}`);

      toastify({
        description: "Pet removido com sucesso",
        status: "success",
      });
    } catch (error) {
      console.log(error);

      toastify({
        description: "Algo deu errado, tente novamente",
        status: "error",
      });
    }
  };

  return (
    <PetsContext.Provider
      value={{
        isPets,
        isPetSelected,
        petSelected,
        getId,
        petEdited,
        registerPet,
        isOpenDelete,
        onCloseDelete,
        onOpenDelete,
        removePet,
        isOpenEdit,
        onCloseEdit,
        onOpenEdit,
        isOpenPet,
        onClosePet,
        onOpenPet,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
