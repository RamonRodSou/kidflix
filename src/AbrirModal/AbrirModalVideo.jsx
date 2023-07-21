import {
    Box,
    Flex,
    useDisclosure,
  } from '@chakra-ui/react';

  import { useEffect, useState } from "react";
import OpenModalDynamic from '../components/OpenModal';
import ModalVideo from '../components/ModalVideo';
  
  export default function AbrirModalVideo ({ children, estilo }) {


    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState([]);
    const [dataEdit, setDataEdit] = useState({});
  
    return (
      <Flex
        align="center"
        justify="center"    
        fontSize="20px"
        fontFamily="mono"
        margin="0 0.5rem"
      >
        <Box>
          <OpenModalDynamic  
              tag={Box} 
              style={estilo}
              edit={setDataEdit} 
              onOpen={onOpen}
              >
            {children}
          </OpenModalDynamic>
        </Box>
        {isOpen && (
          <ModalVideo
            isOpen={isOpen}
            onClose={onClose}
            data={data}
            setData={setData}
            dataEdit={dataEdit}
            setDataEdit={setDataEdit}
          />
        )}
      </Flex>
      
    );
  };
