import React, { useState } from "react";
import styled from "styled-components";
import { ChakraProvider, Flex, Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
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

  if (loadingCategorias) {
    return <div>Loading...</div>;
  }

  if (errorCategorias) {
    return <div>Error fetching data.</div>;
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const categoriasExibicao = categorias.slice(0, 4);

  if (categorias.length > 4) {
    return (
      <Flex alignItems="center" bg='#fff'>
        {/* Renderiza o ícone de menu */}
        <IconContext.Provider value={{ size: "3rem" }}/>

        {/* Renderiza o menu com os links das categorias */}
        <Menu isLazy bg='#fff'>
          <MenuButton as={Button} ml="4">
            Categorias
          </MenuButton>
          <MenuList>
            {categoriasExibicao.map((categoria) => (
              <MenuItem key={categoria.id} as={NavLink} to={`/${categoria.categoriaName}`}>
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
