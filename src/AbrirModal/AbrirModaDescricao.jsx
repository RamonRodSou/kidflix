import {
    Box,
    Flex,
    useDisclosure,
  } from '@chakra-ui/react';
  
import { useState } from "react";
import OpenModalDynamic from '../components/OpenModal';
import ModalDescricao from '../components/ModalDescricao';
  
  export default function AbrirModalDescricao ({ children, estilo, descricao, name, idade }) {
  
  
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
          <ModalDescricao
            isOpen={isOpen}
            onClose={onClose}
            data={data}
            setData={setData}
            dataEdit={dataEdit}
            setDataEdit={setDataEdit}
            descricao={descricao}
            name={name}
            idade={idade}

          />
        )}
      </Flex>
      
    );
  };