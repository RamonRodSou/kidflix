// import React, { useState } from "react";
// import { ChakraProvider, Box, Flex, Menu, MenuButton, Button, MenuList, MenuItem, background } from "@chakra-ui/react";
// import AbrirModal from "../AbrirModal/AbrirModal";
// import { NavLink } from "react-router-dom";
// import useGetVideo from "../Hooks/useGetVideo";
// import { urlCategoria } from "../context/GetUrl";
// import { IoIosMenu } from "react-icons/io";
// import { IconContext } from "react-icons";

// export function Navegacao () {
//   const categoriasData = useGetVideo(urlCategoria);
//   const { data: categorias, loading: loadingCategorias, error: errorCategorias } = categoriasData;
//   const [showMenu, setShowMenu] = useState(false);

//   if (loadingCategorias) {
//     return <div>Loading...</div>;
//   }

//   if (errorCategorias) {
//     return <div>Error fetching data.</div>;
//   }

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <Flex alignItems="center" bg='#fff'>
//       {/* Renderiza o ícone de menu */}
//       <IconContext.Provider value={{ size: "3rem" }}/>

//       {/* Renderiza o menu com os links das categorias */}
//       <Menu isLazy bg='#fff'>
//         <MenuButton as={Button} ml="4">
//           Categorias
//         </MenuButton>
//         <MenuList>
//           {categorias.map((categoria) => (
//             <MenuItem key={categoria.id} as={NavLink} to={`/${categoria.categoriaName}`}>
//               {categoria.categoriaName}
//             </MenuItem>
//           ))}
//         </MenuList>
//       </Menu>

//       {/* Renderiza o ícone de menu para abrir as opções em tela cheia */}
//       {categorias.length > 4 && (
//         <IconContext.Provider value={{ size: "2rem"}}>
//           <IoIosMenu onClick={toggleMenu} style={{ cursor: "pointer", marginLeft: "auto"}} />
//         </IconContext.Provider>
//       )}

//       <ChakraProvider>
//         <AbrirModal />
//       </ChakraProvider>
//     </Flex>
//   );
// };









import styled from "styled-components";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AbrirModal from "../AbrirModal/AbrirModal";
import { NavLink } from "react-router-dom";
import useGetVideo from "../Hooks/useGetVideo";
import { urlCategoria } from "../context/GetUrl";

const UlPrincipal = styled.nav`

    display: flex;
    align-items: center;
    text-shadow: 2px 3px 5px black; 
    flex-grow:1;
    justify-content: space-around;
    

    @media (min-width: 768px) {

      font-size:1.5rem;
    }

`; 
const LoadingMensagem = styled.span` 
 position: absolute;
 top:50px;
`;
const styles = {
  color: 'white',
  textDecoration: "inherit",
  textShado: "2px 3px 5px shadowColor",
  textAlign: "center"
  
};
export function Navegacao  () {

  const categoriasData = useGetVideo(urlCategoria);
  const { data: categorias, loading: loadingCategorias, error: errorCategorias } = categoriasData;

  if (loadingCategorias) {
    return <LoadingMensagem>Loading...</LoadingMensagem>;
  }

  if (errorCategorias) {
    return <div>Error fetching data.</div>;
  }
  
  return (

      // <UlPrincipal>
      //   <NavLink style={styles} to="/desenho">Desenho</NavLink>
      //   <NavLink style={styles} to="/filme">Filme</NavLink>
      //   <NavLink style={styles} to="/musica">Musica</NavLink>
      //   <ChakraProvider>
      //     <AbrirModal/>
      //   </ChakraProvider>

      // </UlPrincipal> 
  // )}
      <UlPrincipal>
      {/* Cria os links dinamicamente com base nos dados das categorias */}
      {categorias.map((categoria) => (
        <NavLink key={categoria.id} style={styles} to={`/${categoria.categoriaName}`}>
          {categoria.categoriaName}
        </NavLink>
      ))}
      <ChakraProvider>
      <AbrirModal/>
      </ChakraProvider>
    </UlPrincipal>
  );
}
    
