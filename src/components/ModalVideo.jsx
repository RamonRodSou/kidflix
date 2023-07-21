import React from "react";
import YouTube from "react-youtube";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from "@chakra-ui/react";


export default function ModalVideo ({ isOpen, onClose, videoId  }) {

  const opts = {

    height: "300px",
    width: "100%",
    margin: "1rem",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent >
        <ModalCloseButton />
        <ModalBody  >
          <YouTube  videoId='QMGxuFiHq6Q' opts={opts}/>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};



// AIzaSyCceZR8WdXJGcXi12y93igrROHnaemASFc  api key
// https://chat.openai.com/share/88d3240e-8c73-4710-bfc8-30b6ec85233f