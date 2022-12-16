import { CardComponent } from "../../components/cardComponent/cardComponent";
import { HeaderComponent } from "../../components/headerComponent/headerComponent";
import { DeleteModal } from "../../components/modals/deleteModal/deleteModal";
import { EditModal } from "../../components/modals/editModal/editModal";
import { InfoModal } from "../../components/modals/infoModal/infoModal";
import { PetStyles } from "./petsPageStyles";

export const PetsPage = () => {
  return (
    <PetStyles>
      <HeaderComponent />

      <CardComponent />
      <InfoModal />
      <DeleteModal />
      <EditModal />
    </PetStyles>
  );
};
