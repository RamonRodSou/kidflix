import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalFooter, Button, Text, Flex } from "@chakra-ui/react";
import { LogoPrincipal } from "../Logo/Logo";
import "./ModalDescricao.css";

export default function ModalDescricao ({ isOpen, onClose, descricao, name, idade  }) {

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xs" >
      <ModalOverlay       
        bg='none'
        backdropFilter='blur(3px)'
        zIndex="modalOverlay"
      />
      <ModalContent bg='#fff' margin='1rem' padding='0'>
        <ModalHeader>
            <Flex alignItems='center' justifyContent='flex-start' gap='1rem'> 
                <LogoPrincipal className='Logo'/>
                {name}
            </Flex>
        </ModalHeader>
        <ModalBody margin=' 0.5rem 1.5rem' padding='0'>
            <Flex alignItems='flex-start' justifyContent='flex-start' flexDirection='column'>
                <Text color='red'>Idade Minima: {idade}</Text>
                <Text>{descricao}</Text>
            </Flex>
        </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
      </ModalContent>
    </Modal>
  );
};