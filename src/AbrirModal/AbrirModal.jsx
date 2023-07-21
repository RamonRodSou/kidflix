import {
    Box,
    Button,
    Flex,
    useDisclosure,
  } from '@chakra-ui/react';

  import { useEffect, useState } from "react";
  import ModalComp from '../components/ModalComp';
import OpenModalDynamic from '../components/OpenModal';

  // import { Delete, Edit } from '@mui/icons-material';
  
  export default function AbrirModal () {


    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState([]);
    const [dataEdit, setDataEdit] = useState({});
  
    useEffect(() => {
      const db_costumer = localStorage.getItem("produto")
        ? JSON.parse(localStorage.getItem("produto"))
        : [];
  
      setData(db_costumer);
    }, [setData]);
  
      // const isMobile = useBreakpointValue({ 
  
    //   base: true,
    //   lg: false,
    // });
  
    // const handleRemove = (video) => {
    //   const newArray = data.filter((item) => item.video !== video);
  
    //   setData(newArray);
  
    //   localStorage.setItem("produto", JSON.stringify(newArray));
    // };
    
    const style = {
      height: '24px',
      lineHeight: '1.2',
      transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)',
      borderRadius: '4px',
      boxShadow: 'rgb(17, 17, 17) 2px 3px 5px',
      padding: '0.5rem',
      fontSize: '1rem',
      fontWeight: 'medium',
      background: '#ff0000',
      color: '#fff',
      _hover: { bg: '#cc0000' },
      _active: {
        bg: '#dddfe2',
        transform: 'scale(0.98)'
      }
    };

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
              tag={Button} 
              edit={setDataEdit} 
              onOpen={onOpen}
              estilo={style}>
                Add
          </OpenModalDynamic>
        </Box>
        {isOpen && (
          <ModalComp
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
