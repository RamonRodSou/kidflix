import React, { useState } from "react";
import YouTube from "react-youtube";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import ResponsiveStyle from "../Hooks/useEffect";


export default function ModalVideo ({ isOpen, onClose, videoId, videoUrl  }) {

  const [widthResponse, setWidthResponse] = useState('90%')
  // const [heighthResponse, setHeightResponse] = useState('90%')

  const opts = {
    width: "100%",
    height:"400px",
    margin:"0",
    padding:"0",
    playerVars: {
      autoplay: 1,
      rel: 0,
      origin: window.location.origin,
      host: window.location.origin,

    },
  };

  const applyResponsiveStyles = () => {

    if (window.innerWidth >= 1465) {
      setWidthResponse("50%");
      // setHeightResponse("600px");
    } 

    else if (window.innerWidth >= 1247) {
      setWidthResponse("60%");
      // setHeightResponse("500px");
    } 
    else if (window.innerWidth >= 768) {
      setWidthResponse("70%");
      // setHeightResponse("400px");

    } 
    else {
      setWidthResponse("90%");
      // setHeightResponse("350%");
    }
  };

  ResponsiveStyle(applyResponsiveStyles)

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" >
      <ModalOverlay       
        bg='none'
        backdropFilter='blur(3px)'
        zIndex="modalOverlay"
      />
      <ModalContent  maxW={widthResponse}  bg='#fff' margin='0' padding='0'>
        <ModalCloseButton color='#FFF' bg='red' right='-1' top='-1'/>
        <ModalBody margin='0' padding='0'>
          <YouTube 
              videoId={videoId}  
              videoUrl={videoUrl}
              opts={opts}/>
              
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};