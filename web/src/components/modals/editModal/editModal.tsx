import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Container,
} from "@chakra-ui/react";

import { PetsContext } from "../../../context/petsContext";
import { Colors } from "../../../themes/themeColors";

export const EditModal = () => {
  const { register, handleSubmit } = useForm();

  const { isOpenEdit, onCloseEdit, petEdited } = useContext(PetsContext);

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
      >
        <ModalOverlay />
        <ModalContent
          maxW={550}
          h="500px"
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
            Editar Pet
          </ModalHeader>
          <ModalCloseButton
            mt={-10}
            mr={2}
            color={Colors.yellowMustard}
            alignSelf="flex-end"
          />
          <Container w="90%" m="0 auto">
            <form onSubmit={handleSubmit(petEdited)}>
              <ModalBody pt={10} pb={6}>
                <FormControl ml="25px">
                  <FormLabel fontSize="18px" color={Colors.yellowMustard}>
                    Nome
                  </FormLabel>
                  <Input
                    placeholder="Digite o nome do pet"
                    borderColor={Colors.yellowMustard}
                    border="2px solid"
                    borderRadius="5px"
                    fontSize="14px"
                    bg={Colors.secundary}
                    height="40px"
                    w="90%"
                    color={Colors.white}
                    padding="10px"
                    {...register("name")}
                  />
                </FormControl>

                <FormControl mt={4} ml="25px">
                  <FormLabel fontSize="18px" color={Colors.yellowMustard}>
                    Idade
                  </FormLabel>
                  <Input
                    placeholder="Digite a idade do pet"
                    borderColor={Colors.yellowMustard}
                    border="2px solid"
                    borderRadius="5px"
                    fontSize="14px"
                    bg={Colors.secundary}
                    height="40px"
                    w="90%"
                    color={Colors.white}
                    padding="10px"
                    {...register("age")}
                  />
                </FormControl>

                <FormControl mt={4} ml="25px">
                  <FormLabel fontSize="18px" color={Colors.yellowMustard}>
                    Nome do dono
                  </FormLabel>
                  <Input
                    placeholder="Digite o nome do dono do pet"
                    borderColor={Colors.yellowMustard}
                    border="2px solid"
                    borderRadius="5px"
                    fontSize="14px"
                    bg={Colors.secundary}
                    height="40px"
                    w="90%"
                    color={Colors.white}
                    padding="10px"
                    {...register("owner_name")}
                  />
                </FormControl>

                <FormControl mt={4} ml="25px">
                  <FormLabel fontSize="18px" color={Colors.yellowMustard}>
                    Telefone do dono
                  </FormLabel>
                  <Input
                    placeholder="Digite o telefone do dono do pet"
                    borderColor={Colors.yellowMustard}
                    border="2px solid"
                    borderRadius="5px"
                    fontSize="14px"
                    bg={Colors.secundary}
                    height="40px"
                    w="90%"
                    color={Colors.white}
                    padding="10px"
                    {...register("owner_phone")}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter
                w="100%"
                display="flex"
                justifyContent="space-evenly"
                mt="20px"
              >
                <Button
                  type="submit"
                  bg={Colors.yellowMustard}
                  w="100px"
                  borderRadius="5px"
                  color={Colors.secundary}
                >
                  Editar
                </Button>
                <Button
                  onClick={onCloseEdit}
                  bg={Colors.yellowMustard}
                  w="100px"
                  borderRadius="5px"
                  color={Colors.secundary}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </form>
          </Container>
        </ModalContent>
      </Modal>
    </>
  );
};
