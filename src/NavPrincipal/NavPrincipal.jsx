import styled from "styled-components";
import { ChakraProvider, Flex, Menu, MenuButton, Button, MenuList, MenuItem, Image } from "@chakra-ui/react";
import AbrirModal from "../AbrirModal/AbrirModal";
import { NavLink } from "react-router-dom";
import useGetVideo from "../Hooks/useGetVideo";
import { urlCategoria } from "../context/GetUrl";
import { IoIosMenu } from "react-icons/io";
import { IconContext } from "react-icons";

export function Navegacao () {
  const categoriasData = useGetVideo(urlCategoria);
  const { data: categorias, loading: loadingCategorias, error: errorCategorias } = categoriasData;
  
const UlPrincipal = styled.nav`
  display: flex;
  align-items: center;
  text-shadow: 2px 3px 5px black; 
  flex-grow: 1;
  justify-content: space-around;
  

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const UlPrincipalMenu = styled.nav`
  display: flex;
  align-items: center;
  text-shadow: 2px 3px 5px black; 
  flex-grow: 1;
  justify-content: flex-end;

  gap: 1rem;
  margin: 0 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const styles = {
  color: 'white',
  textDecoration: "inherit",
  textShado: "2px 3px 5px shadowColor",
  textAlign: "center"
};

const hoverStyles = {
  backgroundColor: "#222",
};

  if (loadingCategorias) {
    return <div>Loading...</div>;
  }

  if (errorCategorias) {
    return <div>Error fetching data.</div>;
  }

  const categoriasExibicao = categorias.slice(0, 100);

  if (categorias.length > 4) {
    return (
      <UlPrincipalMenu>
        <ChakraProvider>
          <AbrirModal />
        </ChakraProvider>

        <Flex alignItems="center" color='#FFF'>
          <IconContext.Provider value={{ size: "3rem" }}/>

          <Menu isLazy >
            <MenuButton as={Button} ml="4" aria-label='Options' variant='outline' >
              <IoIosMenu/>
            </MenuButton>
            <MenuList bg='#000'color='#000' width='200px' 
  >
              {categoriasExibicao.map((categoria) => (
                
                <MenuItem  
                    fontSize='1.5rem'
                    color='#FFF'
                    border='1px solid rgba(0,0,0,0.3)'
                    key={categoria.id} 
                    as={NavLink} 
                    to={`/${categoria.categoriaName}`}
                    _hover={hoverStyles}
                >
                    <Image
                      margin='2px'
                      borderRight='1px solid rgba(0,0,0,0.3)'
                      opacity='0.9'
                      boxSize='2.5rem'
                      borderRadius='20px'
                      src={categoria.categoriaImg}
                      alt={categoria.name}
                      mr='12px'
                    />
                  {categoria.categoriaName}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          </Flex>  
      </UlPrincipalMenu>
    );
  }
else {
  return (
    <UlPrincipal>
      {categoriasExibicao.map((categoria) => (
        <NavLink key={categoria.id} style={styles} to={`/${categoria.categoriaName}`}>
          {categoria.categoriaName}
        </NavLink>
      ))}
      <ChakraProvider>
        <AbrirModal />
      </ChakraProvider>
    </UlPrincipal>
  );
}

}
