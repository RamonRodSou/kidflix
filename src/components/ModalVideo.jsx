import React from "react";
import YouTube from "react-youtube";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from "@chakra-ui/react";


export default function ModalVideo ({ isOpen, onClose, videoId  }) {

  const opts = {

    height: "300px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" >
      <ModalOverlay />
      <ModalContent  bg=''>
        <ModalCloseButton color='#FFF' bg='red' right='5' top='9'/>
        <ModalBody  marginTop='2rem'>
          <YouTube  videoId={videoId} opts={opts}/>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};