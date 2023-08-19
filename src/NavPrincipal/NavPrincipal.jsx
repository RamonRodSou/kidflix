import React, { useState } from "react";
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

  const [showMenu, setShowMenu] = useState(false);

  
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

const styles = {
  color: 'white',
  textDecoration: "inherit",
  textShado: "2px 3px 5px shadowColor",
  textAlign: "center"
};

const hoverStyles = {
  backgroundColor: "rgba(0,0,0,0.3)",
};

  if (loadingCategorias) {
    return <div>Loading...</div>;
  }

  if (errorCategorias) {
    return <div>Error fetching data.</div>;
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const categoriasExibicao = categorias.slice(0, 100);

  if (categorias.length > 4) {
    return (
      <Flex alignItems="center" color='#FFF'>
        {/* Renderiza o ícone de menu */}
        <IconContext.Provider value={{ size: "3rem" }}/>

        {/* Renderiza o menu com os links das categorias */}
        <Menu isLazy >
          <MenuButton as={Button} ml="4" aria-label='Options' variant='outline'>
             <IoIosMenu  />
          </MenuButton>
          <MenuList bg='#fff'color='#000' width='200px' 
>
  {/* Tem que fazer uma barra de rolagem no scrooll, pq quando dar scrool mesmo em cima do menu, ele ta descendo a pagina. */}
            {categoriasExibicao.map((categoria) => (
              
              <MenuItem 
                  fontSize='1.5rem'
                  color='#660000'
                  key={categoria.id} 
                  as={NavLink} 
                  to={`/${categoria.categoriaName}`}
                  _hover={hoverStyles}
              >
                  <Image
                    boxSize='2.5rem'
                    borderRadius='full'
                    src={categoria.categoriaImg}
                    alt={categoria.name}
                    mr='12px'
                  />
                {categoria.categoriaName}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <ChakraProvider>
          <AbrirModal />
        </ChakraProvider>
      </Flex>
    );
  }
else {
  return (
    <UlPrincipal>
      {/* Cria os links dinamicamente com base nos dados das categorias filtradas */}
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



// import styled from "styled-components";
// import React from "react";
// import { ChakraProvider } from "@chakra-ui/react";
// import AbrirModal from "../AbrirModal/AbrirModal";
// import { NavLink } from "react-router-dom";
// import useGetVideo from "../Hooks/useGetVideo";
// import { urlCategoria } from "../context/GetUrl";

// const UlPrincipal = styled.nav`
//   display: flex;
//   align-items: center;
//   text-shadow: 2px 3px 5px black; 
//   flex-grow: 1;
//   justify-content: space-around;

//   @media (min-width: 768px) {
//     font-size: 1.5rem;
//   }
// `;

// const styles = {
//   color: 'white',
//   textDecoration: "inherit",
//   textShado: "2px 3px 5px shadowColor",
//   textAlign: "center"
// };

// export function Navegacao() {
//   const categoriasData = useGetVideo(urlCategoria);
//   const { data: categorias, error: errorCategorias } = categoriasData;

//   if (errorCategorias) {
//     return <div>Error fetching data.</div>;
//   }

//   // Filtrar para exibir no máximo 4 categorias
//   const categoriasExibicao = categorias.slice(0, 4);

//   return (
//     <UlPrincipal>
//       {/* Cria os links dinamicamente com base nos dados das categorias filtradas */}
//       {categoriasExibicao.map((categoria) => (
//         <NavLink key={categoria.id} style={styles} to={`/${categoria.categoriaName}`}>
//           {categoria.categoriaName}
//         </NavLink>
//       ))}
//       <ChakraProvider>
//         <AbrirModal />
//       </ChakraProvider>
//     </UlPrincipal>
//   );
// }
