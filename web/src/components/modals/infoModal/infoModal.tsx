import { useContext, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

import { PetsContext } from "../../../context/petsContext";
import { Colors } from "../../../themes/themeColors";

export const InfoModal = () => {
  const { isOpenPet, onClosePet, onOpenDelete, onOpenEdit, isPetSelected } =
    useContext(PetsContext);

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      {isPetSelected.map((pet) => (
        <Modal
          key={pet.id}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpenPet}
          onClose={onClosePet}
        >
          <ModalOverlay />
          <ModalContent
            maxW={550}
            h="350px"
            mx={4}
            p={3}
            px={[0, 3]}
            border={`2px solid ${Colors.yellowMustard}`}
            bg={Colors.secundary}
            borderRadius="5px"
          >
            <ModalHeader
              color={Colors.yellowMustard}
              textAlign="center"
              fontSize="20px"
            >
              {pet.name}
            </ModalHeader>
            <ModalCloseButton
              mr={2}
              color={Colors.yellowMustard}
              alignSelf="flex-end"
            />

            <ModalBody
              pt={4}
              pb={6}
              display="flex"
              flexDirection="column"
              gap="10px"
            >
              <Text fontSize="1rem" color={Colors.white}>
                Nome: {pet.name}
              </Text>
              <Text fontSize="1rem" color={Colors.white}>
                Dono: {pet.owner_name}
              </Text>
              <Text fontSize="1rem" color={Colors.white}>
                Tipo: {pet.type}
              </Text>
              <Text fontSize="1rem" color={Colors.white}>
                Raça: {pet.breed}
              </Text>
              <Text fontSize="1rem" color={Colors.white}>
                Idade: {pet.age} anos
              </Text>
            </ModalBody>

            <ModalFooter w="100%" display="flex" justifyContent="space-evenly">
              <Button
                onClick={onOpenEdit}
                bg={Colors.yellowMustard}
                w="100px"
                borderRadius="5px"
                color={Colors.secundary}
              >
                Editar
              </Button>
              <Button
                onClick={onOpenDelete}
                bg={Colors.yellowMustard}
                w="100px"
                borderRadius="5px"
                color={Colors.secundary}
              >
                Deletar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ))}
    </>
  );
};
