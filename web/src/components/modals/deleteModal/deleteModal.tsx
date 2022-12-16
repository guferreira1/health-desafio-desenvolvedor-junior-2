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

export const DeleteModal = () => {
  const { isOpenDelete, onCloseDelete, removePet } = useContext(PetsContext);

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
      >
        <ModalOverlay />
        <ModalContent
          maxW={550}
          h="250px"
          mx={4}
          p={3}
          px={[0, 3]}
          border={`2px solid ${Colors.yellowMustard}`}
          bg={Colors.secundary}
          alignSelf="center"
          borderRadius="5px"
        >
          <ModalHeader
            color={Colors.yellowMustard}
            mt="9"
            textAlign="center"
            fontSize="20px"
          >
            Deletar Pet
          </ModalHeader>
          <ModalCloseButton
            mt={-10}
            mr={2}
            color={Colors.yellowMustard}
            alignSelf="flex-end"
          />
          <ModalBody pt={10} pb={6}>
            <Text color={Colors.feedback.negative} textAlign="center">
              Deseja mesmo excluir esse pet ?
            </Text>
          </ModalBody>

          <ModalFooter w="100%" display="flex" justifyContent="space-evenly">
            <Button
              onClick={removePet}
              bg={Colors.yellowMustard}
              w="100px"
              borderRadius="5px"
              color={Colors.secundary}
            >
              Excluir
            </Button>
            <Button
              onClick={onCloseDelete}
              bg={Colors.yellowMustard}
              w="100px"
              borderRadius="5px"
              color={Colors.secundary}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
