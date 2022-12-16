import { createContext, ReactNode, useState } from "react";
import {
  editPetInterface,
  petsInterface,
  petsInterfaceResp,
} from "../interfaces/petsInterface";
import { Api } from "../services/api";
import { useDisclosure } from "@chakra-ui/react";

interface PetsPropsInterface {
  children: ReactNode;
}

interface PetsProviderInterface {
  isPets: petsInterface[];
  isOpenDelete: boolean;
  isOpenEdit: boolean;
  onCloseDelete: () => void;
  onOpenDelete: () => void;
  onCloseEdit: () => void;
  onOpenEdit: () => void;
  getPets: () => Promise<void>;
  petSelected: (id: string) => void;
  getId: (id: string) => void;
  removePet: () => Promise<void>;
  petEdited: (data: editPetInterface) => Promise<void>;
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

  const [isPets, setIsPets] = useState<petsInterface[]>([]);

  const [isPetSelected, setIsPetSelected] = useState<petsInterface[]>([]);

  const [isTypePets, setIsTypePets] = useState("");

  const [isId, setIsId] = useState("");

  const getId = (id: string) => {
    setIsId(id);
    onOpenEdit();
  };

  const getPets = async () => {
    try {
      const res = await Api.get("/");
      setIsPets(res.data.pets);
    } catch (error) {
      console.log(error);
    }
  };

  const petSelected = async (id: string) => {
    try {
      const res = await Api.get<petsInterfaceResp>(`/${isId}`);

      setIsPetSelected(res.data.pets);
    } catch (error) {
      console.log(error);
    }
  };

  const petEdited = async (data: editPetInterface) => {
    try {
      await Api.patch<petsInterface>(`/${isId}`, data);
    } catch (error) {
      console.log(error);
    }
  };

  const registerPet = async (data: petsInterface) => {
    try {
      const res = await Api.post("/", data);

      setIsPets([...isPets, res.data.pets]);
    } catch (error) {
      console.log(error);
    }
  };

  const removePet = async () => {
    try {
      await Api.delete(`/${isId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PetsContext.Provider
      value={{
        isPets,
        getPets,
        petSelected,
        getId,
        petEdited,
        isOpenDelete,
        onCloseDelete,
        onOpenDelete,
        removePet,
        isOpenEdit,
        onCloseEdit,
        onOpenEdit,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
